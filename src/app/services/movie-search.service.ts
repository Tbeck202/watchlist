import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { Movie } from '../Movie';
import { MovieSearch } from '../MovieSearch';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieSearchService {

  private apiUrl = `http://www.omdbapi.com/`
  private key = `${environment.omdbApiKey}`
  private subject = new Subject<any>();
  showSearchForm: boolean = false


  constructor(private http: HttpClient) { }

  searchMovies(title: string): Observable<any> {
    return this.http.get<MovieSearch>(`${this.apiUrl}?s=${title}&apikey=${this.key}`)
  }

  getMovieData(movie: MovieSearch): Observable<any> {
    
    return this.http.get<MovieSearch>(`${this.apiUrl}?i=${movie.imdbID}&apikey=${this.key}&type=movie`)
  }

  toggleSearchForm(): void {
    this.showSearchForm = !this.showSearchForm;
    this.subject.next(this.showSearchForm);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
