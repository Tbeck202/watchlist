import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { SearchMovieInputComponent } from './components/search-movie-input/search-movie-input.component';
import { SearchMovieListComponent } from './components/search-movie-list/search-movie-list.component';
import { WatchlistListComponent } from './components/watchlist-list/watchlist-list.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    WatchlistComponent,
    SearchMovieInputComponent,
    SearchMovieListComponent,
    WatchlistListComponent,
    HeaderComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
