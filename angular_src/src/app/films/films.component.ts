import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  selectedMovie: Movie;
  addmode: boolean;
  modifymode: boolean;
  
  movies: Movie[] = [];

  constructor(
    private movieService: MovieService
  ) {
    this.movies = movieService.getMovies();
    this.addmode = false;
    this.modifymode = false;
   }

  ngOnInit() {
  }

  onSelectMovie(movie) {
    this.selectedMovie = movie;
  }

  deleteMovie(movie) {
    if(movie != null) {
      this.movieService.deleteMovie(movie);
      this.movies = this.movieService.getMovies();
      this.selectedMovie = null;
    }
  }

  toggleAddmode() {
    this.addmode = !this.addmode;
  }

  toggleModifymode() {
    this.modifymode = !this.modifymode;
  }

  addToList(movie: Movie) {
    movie.id = Date.now();
    this.movieService.addMovie(movie);
    this.movies = this.movieService.getMovies();
    this.toggleAddmode();
  }

  modifyList(movie: Movie) {
    this.movieService.modifyMovie(movie);
    this.movies = this.movieService.getMovies();
    this.toggleModifymode();
  }

}
