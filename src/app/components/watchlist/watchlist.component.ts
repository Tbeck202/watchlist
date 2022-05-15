import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/Movie';
import { MovieSearch } from 'src/app/MovieSearch';
import { Subscription } from 'rxjs';

import { WatchlistService } from 'src/app/services/watchlist.service';
import { MovieSearchService } from 'src/app/services/movie-search.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  movies: Movie[] = []
  movie: MovieSearch
  movieSearch: MovieSearch[] = []
  populatedMovie: MovieSearch 
  btnColor: string = '#EF767A'
  btnText: string = 'Delete'
  watchedBtnColor: string = '#49DCB1'
  watchedBtnText: string = 'Watched'
  subscription: Subscription
  showSearchForm: boolean = false

  constructor(private watchlistService: WatchlistService, private movieSearchService: MovieSearchService) { 
    this.subscription = this.movieSearchService
      .onToggle()
      .subscribe((value) => (this.showSearchForm = value));
  }

  ngOnInit(): void {
    // console.log('watchlist component onInit');
    this.watchlistService.getMovies().subscribe((moviesFromDb) => (this.movies = moviesFromDb));
  }

  addMovie(movie: MovieSearch){
    
    this.movieSearchService.getMovieData(movie)
    .subscribe((movie) => 
      this.watchlistService.addMovie(movie).subscribe((movie) => (this.movies.push(movie)))
    );
  }

  populateMovie(movie: MovieSearch){

    return this.movieSearchService.getMovieData(movie)
  }

  markWatched(movie: Movie){
    movie.watched = !movie.watched
    this.watchlistService.toggleWatched(movie)
    .subscribe()
  }

  removeFromList(movie: Movie){
    this.watchlistService.removeFromDb(movie)
    .subscribe(() => this.movies = this.movies.filter((m) => m.id !== movie.id))
  }

}
