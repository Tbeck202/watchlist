import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { SearchMovieInputComponent } from './components/search-movie-input/search-movie-input.component';
import { SearchMovieListComponent } from './components/search-movie-list/search-movie-list.component';
import { WatchlistListComponent } from './components/watchlist-list/watchlist-list.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    WatchlistComponent,
    SearchMovieInputComponent,
    SearchMovieListComponent,
    WatchlistListComponent,
    HeaderComponent,
    ButtonComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
