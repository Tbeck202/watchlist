import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
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
  
  populatedMovie: Movie
  
  constructor(private http: HttpClient, private movieSearchService: MovieSearchService) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.dbUrl)
  }

  addMovie(movie: MovieSearch): Observable<Movie> {
    const newMovie = {
      title: movie.Title,
      director: movie.Director,
      releaseDate: movie.Year,
      synopsis: movie.Plot,
      imdbId: movie.imdbID,
      watched: false
    }
    
    return this.http.post<Movie>(this.dbUrl, newMovie, httpOptions)
  }

  toggleWatched(movie: Movie){
    const url = `${this.dbUrl}/${movie.id}`
    return this.http.put<Movie>(url, movie, httpOptions)
  }

  removeFromDb(movie: Movie){
    console.log('Watchlist service removeFromDb');
    
    return this.http.delete<Movie>(`${this.dbUrl}/${movie.id}`)
  }

  
}
