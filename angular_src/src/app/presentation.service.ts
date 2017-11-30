import { Injectable } from '@angular/core';
import { Presentation } from './Presentation';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const HttpHeader = {
  headers: new HttpHeaders( {
    'Content-Type': 'application/json'
  })
}

@Injectable()
export class PresentationService {

  constructor(
    private http: HttpClient
  ) { }

  getPresentations() : Promise<Presentation[]> {
    return this.http.get<Presentation[]>('api/presentation/list').toPromise();
  }

  getPresentation(id) {
    //return this.presentations.find(p => p.id == id);
  }

  deletePresentation(presentation) : Promise<Presentation> {
    return this.http.post<Presentation>('api/presentation/delete', {
      'id': presentation.id,
      'movie': presentation.movie,
      'room': presentation.room,
      'time': presentation.time,
      'availableTickets': presentation.availableTickets
    }, HttpHeader).toPromise();
  }

  addPresentation(presentation) : Promise<Presentation> {
    return this.http.post<Presentation>('api/presentation/create', {
      'movie': presentation.movie,
      'room': presentation.room,
      'time': presentation.time,
      'availableTickets': presentation.availableTickets
    }, HttpHeader).toPromise();
  }

  modifyPresentation(presentation) : Promise<Presentation> {
    return this.http.post<Presentation>('api/presentation/update', {
      'id': presentation.id,
      'movie': presentation.movie,
      'room': presentation.room,
      'time': presentation.time,
      'availableTickets': presentation.availableTickets
    }, HttpHeader).toPromise();
  }

}
