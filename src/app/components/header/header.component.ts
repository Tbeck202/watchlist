import { Component, OnInit } from '@angular/core';
import { MovieSearchService } from 'src/app/services/movie-search.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'My Watchlist'
  // btnColor: string = 'green'
  // btnText: string = 'Add a movie'
  showSearchForm: boolean = false;
  subscription: Subscription

  constructor(private movieSearchService: MovieSearchService) { 
    this.subscription = this.movieSearchService
      .onToggle()
      .subscribe((value) => (this.showSearchForm = value));
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    // Unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  toggleSearchForm() {
    this.movieSearchService.toggleSearchForm()
  }

}
