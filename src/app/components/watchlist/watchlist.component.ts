import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/Movie';
import { MovieSearch } from 'src/app/MovieSearch';

import { WatchlistService } from 'src/app/services/watchlist.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  movies: Movie[] = []
  movie: MovieSearch
  movieSearch: MovieSearch[] = []

  constructor(private watchlistService: WatchlistService) { }

  ngOnInit(): void {
    // console.log('watchlist component onInit');
    this.watchlistService.getMovies().subscribe((moviesFromDb) => (this.movies = moviesFromDb));
  }

  addMovie(movie: MovieSearch){
    // console.log(movie);
    this.watchlistService.addMovie(movie).subscribe((movie) => (this.movies.push(movie)))
  }

}
