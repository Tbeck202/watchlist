import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/Movie'

@Component({
  selector: 'app-search-movie-input',
  templateUrl: './search-movie-input.component.html',
  styleUrls: ['./search-movie-input.component.css']
})
export class SearchMovieInputComponent implements OnInit {

  @Output() onSearchMovies: EventEmitter<string> = new EventEmitter;
  title: string;

  constructor() { }

  ngOnInit(): void {
  }

  submitSearch() {

    if(!this.title){
      alert('Please enter a search term')
    }

    console.log(`SearchMovieInputComponent says: ${this.title}`);
    
    // this.emitSearch(this.title)
    this.onSearchMovies.emit(this.title)
    
  }

  // emitSearch(title: string){
  //   console.log('emit serch');
    
  //   this.onSearchMovies.emit(title)
  // }

}
