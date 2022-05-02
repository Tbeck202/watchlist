import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieSearch } from 'src/app/MovieSearch';

@Component({
  selector: 'app-search-movie-list',
  templateUrl: './search-movie-list.component.html',
  styleUrls: ['./search-movie-list.component.css']
})
export class SearchMovieListComponent implements OnInit {

  @Input() movie: MovieSearch;

  // @Output() onSearchMovies: EventEmitter<string> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

}
