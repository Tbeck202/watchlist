import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMovieListComponent } from './search-movie-list.component';

describe('SearchMovieListComponent', () => {
  let component: SearchMovieListComponent;
  let fixture: ComponentFixture<SearchMovieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMovieListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
