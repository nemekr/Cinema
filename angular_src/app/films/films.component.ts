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
  
  movies: Movie[] = [];

  constructor(
    private movieService: MovieService
  ) {
    this.movies = movieService.getMovies();
    this.addmode = false;
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
    console.log(this.addmode);
  }

  modifyList(movie: Movie) {
    console.log(movie);
    this.toggleAddmode();
  }

}
