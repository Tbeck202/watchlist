import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/Movie';
import { MovieSearch } from 'src/app/MovieSearch';

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
  btnColor: string = 'red'
  btnText: string = 'Delete'
  watchedBtnColor: string = 'orange'
  watchedBtnText: string = 'Mark as Watched'

  constructor(private watchlistService: WatchlistService, private movieSearchService: MovieSearchService) { }

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
