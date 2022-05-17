import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/Movie'

@Component({
  selector: 'app-search-movie-input',
  templateUrl: './search-movie-input.component.html',
  styleUrls: ['./search-movie-input.component.css']
})
export class SearchMovieInputComponent implements OnInit {
  
  @Output() onSearchMovies: EventEmitter<string> = new EventEmitter;
  title: string;
  btnColor: string = '#EEB868'

  constructor() { }

  ngOnInit(): void {
  }

  submitSearch() {
    if(!this.title){
      alert('Please enter a search term')
      return
    }
    
    this.onSearchMovies.emit(this.title)
  }
}
