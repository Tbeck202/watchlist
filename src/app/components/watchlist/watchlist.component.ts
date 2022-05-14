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

}
