import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  selectedMovie: Movie;
  
    movies: Movie[] = [
      {
          id:0,
          title: 'asd1',
          year: 1991,
          length: 123,
          description: 'the asd movie',
          prize: 1500
      },

        {
          id:1,
          title: 'asd2',
          year: 1994,
          length: 123,
          description: 'the asd movie reloaded',
          prize: 2000
        }
    ];

  constructor() { }

  ngOnInit() {
  }

  onSelectMovie(movie) {
    this.selectedMovie = movie;
  }

}
