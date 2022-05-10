import { Component, OnInit, Input } from '@angular/core';
import { MovieSearch } from 'src/app/MovieSearch';
import { Movie } from 'src/app/Movie';
import { MovieSearchService } from 'src/app/services/movie-search.service';
import { WatchlistService } from 'src/app/services/watchlist.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  movieDb: Movie[] = []
  movies: MovieSearch[] = []
  title: string;

  constructor(private movieSearchService: MovieSearchService, private watchlistService: WatchlistService) { }

  ngOnInit(): void {
  }

  searchMovies(title: string) {
    // console.log(`Title: ${title}`);
    this.movies = []
    this.movieSearchService.searchMovies(title)
    .subscribe(
      (moviesFromSearch) => (
        // console.log(moviesFromSearch.Search)
        moviesFromSearch.Search.forEach((movie: any) => this.movies.push(movie))
        
      )
    )
  }

  addMovie(movie: MovieSearch){
    // console.log('Hi from search component');
    // console.log(movie);
    const newMovie = {
      title: movie.Title,
      director: movie.Director,
      releaseDate: movie.Year,
      plot: movie.Plot,
      synopsis: movie.Plot,
      watched: false
    }
    
    // this.watchlistService.addMovie(newMovie).subscribe((movie) => (this.movieDb.push(newMovie)))
    this.watchlistService.addMovie(newMovie).subscribe((movie) => console.log(movie));
    
  }
    
  

}
