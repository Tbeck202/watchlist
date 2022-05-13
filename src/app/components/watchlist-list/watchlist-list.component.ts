import { Component, OnInit, Input,  } from '@angular/core';
import { Movie } from 'src/app/Movie';
import { MovieSearch } from 'src/app/MovieSearch';

import { WatchlistService } from 'src/app/services/watchlist.service';

@Component({
  selector: 'app-watchlist-list',
  templateUrl: './watchlist-list.component.html',
  styleUrls: ['./watchlist-list.component.css']
})
export class WatchlistListComponent implements OnInit {

  @Input() movies: Movie[] = []
  movieSearch: MovieSearch[] = []

  constructor(private watchlistService: WatchlistService) { }

  ngOnInit(): void {
    this.watchlistService.getMovies().subscribe((movies) => (this.movies = movies));
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('onzChanges');
    
  //   console.log(changes);
    
  //   this.watchlistService.getMovies().subscribe((movies) => (this.movies = movies));
  // }
  

}
