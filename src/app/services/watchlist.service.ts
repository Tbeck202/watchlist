import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Movie } from '../Movie';
import { MovieSearch } from '../MovieSearch';
import { environment } from 'src/environments/environment';
import { MovieSearchService } from './movie-search.service';

const httpOptions =  {
  // HttpHeaders is a module that we imported
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {

  private dbUrl = 'http://localhost:5000/movies'
  private apiUrl = `http://www.omdbapi.com/`
  private key = `${environment.omdbApiKey}`

  constructor(private http: HttpClient, private movieSearchService: MovieSearchService) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.dbUrl)
  }

  addMovie(movie: MovieSearch): Observable<Movie> {
    
    
    let movieData: { director: string; title: string; releaseDate: string; synopsis: string; } 
    
    // STILL TRYING FO FIGURE OUT HOW TO POPULATE THE REST OF THE DATA VIA ANOTHER API CALL
    const newMovie = this.movieSearchService.getMovieData(movie)
    // console.log(newMovie);
    
    return this.http.post<Movie>(this.dbUrl, newMovie, httpOptions)
  }
}
