import { Component, OnInit, Input } from '@angular/core';
import { MovieSearch } from 'src/app/MovieSearch';
import { MovieSearchService } from 'src/app/services/movie-search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  movies: MovieSearch[] = []
  title: string;

  constructor(private movieSearchService: MovieSearchService) { }

  ngOnInit(): void {
  }

  searchMovies(title: string) {
    console.log(`Title: ${title}`);
    this.movies = []
    this.movieSearchService.searchMovies(title)
    .subscribe(
      (moviesFromSearch) => (
        // console.log(moviesFromSearch.Search)
        moviesFromSearch.Search.forEach((movie: any) => this.movies.push(movie))
        
      )
    )
  }

  addMovie(){
    console.log('Hi from search component');
    
  }

}
