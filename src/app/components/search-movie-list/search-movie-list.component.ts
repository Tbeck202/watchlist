import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieSearch } from 'src/app/MovieSearch';
import { MovieSearchService } from 'src/app/services/movie-search.service';

@Component({
  selector: 'app-search-movie-list',
  templateUrl: './search-movie-list.component.html',
  styleUrls: ['./search-movie-list.component.css']
})
export class SearchMovieListComponent implements OnInit {

  @Input() movie: MovieSearch;
  movies: MovieSearch[] = []
  // @Output() onSearchMovies: EventEmitter<string> = new EventEmitter;

  constructor(private movieSearchService: MovieSearchService) { }

  ngOnInit(): void {
  }

  searchMovies(title: string) {
    console.log(`Title: ${title}`);
    
    this.movieSearchService.searchMovies(title)
    .subscribe(
      (moviesFromSearch) => (
        console.log(moviesFromSearch.Search)
        // moviesFromSearch.Search.forEach((movie: any) => this.movies.push(movie))
        
      )
    )
  }

}
