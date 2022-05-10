import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Movie } from '../Movie';

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

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.dbUrl)
  }

  addMovie(movie: Movie): Observable<Movie[]> {
    return this.http.post<Movie[]>(this.dbUrl, movie, httpOptions)
  }
}
