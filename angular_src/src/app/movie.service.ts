import { Injectable } from '@angular/core';
import { Movie } from './Movie';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const HttpHeader = {
  headers: new HttpHeaders( {
    'Content-Type': 'application/json'
  })
}

@Injectable()
export class MovieService {

  constructor(
    private http: HttpClient
  ) { }

  getMovies() : Promise<Movie[]> {
    return this.http.get<Movie[]>('api/movie/list').toPromise();
  }

  getMovie(id) {
    //return this.movies.find(m => m.id == id);
  }

  deleteMovie(movie) : Promise<Movie> {
    //var index = this.movies.indexOf(movie);
    //this.movies.splice(index,1);
    return this.http.post<Movie>('api/movie/delete', {
      'id': movie.id,
      'title': movie.title,
      'year': movie.year,
      'length': movie.length,
      'description': movie.description,
      'prize': movie.prize
    }, HttpHeader).toPromise();
  }

  addMovie(movie) : Promise<Movie> {
    //this.movies.push(movie);
    return this.http.post<Movie>('api/movie/create', {
      'title': movie.title,
      'year': movie.year,
      'length': movie.length,
      'description': movie.description,
      'prize': movie.prize
    }, HttpHeader).toPromise();
  }

  modifyMovie(movie) : Promise<Movie> {
    //var foundMovie = this.movies.find(m => m.id == movie.id);
    //var index = this.movies.indexOf(foundMovie);
    //Object.assign(this.movies[index],movie);
    return this.http.post<Movie>('api/movie/update', {
      'id': movie.id,
      'title': movie.title,
      'year': movie.year,
      'length': movie.length,
      'description': movie.description,
      'prize': movie.prize
    }, HttpHeader).toPromise();
  }

}
