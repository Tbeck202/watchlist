import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addMovie(){
    console.log(`Hello from watchlist component`);
    
  }

}
