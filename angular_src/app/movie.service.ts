import { Injectable } from '@angular/core';
import { Movie } from './Movie';

@Injectable()
export class MovieService {
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
    },
  ];

  constructor() { }

  getMovies() {
    return this.movies;
  }

  getMovie(id) {
    return this.movies.find(m => m.id == id);
  }

  deleteMovie(movie) {
    var index = this.movies.indexOf(movie);
    this.movies.splice(index,1);
  }

}
