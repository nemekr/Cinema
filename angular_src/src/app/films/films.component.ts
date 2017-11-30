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
    this.addmode = false;
    this.modifymode = false;
   }

  async ngOnInit() {
    this.movies = await this.movieService.getMovies();
  }

  onSelectMovie(movie) {
    this.selectedMovie = movie;
  }

  async deleteMovie(movie) {
    if(movie != null) {
      await this.movieService.deleteMovie(movie);
      this.movies = await this.movieService.getMovies();
      this.selectedMovie = null;
    }
  }

  toggleAddmode() {
    this.addmode = !this.addmode;
  }

  toggleModifymode() {
    this.modifymode = !this.modifymode;
  }

  async addToList(movie: Movie) {
    this.selectedMovie = null;
    movie.id = Date.now();
    await this.movieService.addMovie(movie);
    this.movies = await this.movieService.getMovies();
    this.toggleAddmode();
  }

  async modifyList(movie: Movie) {
    this.selectedMovie = null;
    await this.movieService.modifyMovie(movie);
    this.movies = await this.movieService.getMovies();
    this.toggleModifymode();
  }

}
