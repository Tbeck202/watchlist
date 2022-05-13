import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieSearch } from 'src/app/MovieSearch';
import { Movie } from 'src/app/Movie';
import { MovieSearchService } from 'src/app/services/movie-search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() addMovieToDb: EventEmitter<MovieSearch> = new EventEmitter;

  movieDb: Movie[] = []
  movies: MovieSearch[] = []
  title: string;

  constructor(private movieSearchService: MovieSearchService) { }

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
    // console.log(movie);
    this.addMovieToDb.emit(movie)
    this.movies = []
  }

    
  

}
