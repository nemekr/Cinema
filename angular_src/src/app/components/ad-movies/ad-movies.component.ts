import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/Movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './ad-movies.component.html',
  styleUrls: ['./ad-movies.component.css']
})
export class AdMoviesComponent implements OnInit {

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
