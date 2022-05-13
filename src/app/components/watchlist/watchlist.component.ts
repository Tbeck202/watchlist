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

  movies: Movie[]
  movie: MovieSearch

  constructor(private watchlistService: WatchlistService) { }

  ngOnInit(): void {
    console.log('watchlist component onInit');
    
    this.watchlistService.getMovies().subscribe((movies) => (this.movies = movies));
  }

  addMovie(movie: MovieSearch){
    console.log('Hi from search component');
    console.log(movie);
    const newMovie = {
      title: movie.Title,
      director: movie.Director,
      releaseDate: movie.Year,
      plot: movie.Plot,
      synopsis: movie.Plot,
      watched: false
    }
    
    console.log('watchlist component addMovie()');
    
    this.watchlistService.addMovie(newMovie).subscribe()
    // this.watchlistService.addMovie(newMovie).subscribe((movie) => console.log(movie));
    
  }

}
