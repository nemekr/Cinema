import { Injectable } from '@angular/core';
import { Movie } from '../models/Movie';
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

  deleteMovie(movie) : Promise<Movie> {
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
    return this.http.post<Movie>('api/movie/create', {
      'title': movie.title,
      'year': movie.year,
      'length': movie.length,
      'description': movie.description,
      'prize': movie.prize
    }, HttpHeader).toPromise();
  }

  modifyMovie(movie) : Promise<Movie> {
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
