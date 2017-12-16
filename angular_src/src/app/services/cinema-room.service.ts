import { Injectable } from '@angular/core';
import { CinemaRoom } from '../models/CinemaRoom';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const HttpHeader = {
  headers: new HttpHeaders( {
    'Content-Type': 'application/json'
  })
}

@Injectable()
export class CinemaRoomService {

  constructor(
    private http: HttpClient
  ) { }

  getRooms() : Promise<CinemaRoom[]> {
    return this.http.get<CinemaRoom[]>('api/room/list').toPromise();
  }

  deleteRoom(room) : Promise<CinemaRoom> {
    return this.http.post<CinemaRoom>('api/room/delete', {
      'id': room.id,
      'capacity': room.capacity,
      'number': room.number,
      'type': room.type
    }, HttpHeader).toPromise();
  }

  addRoom(room) : Promise<CinemaRoom> {
    return this.http.post<CinemaRoom>('api/room/create', {
      'capacity': room.capacity,
      'number': room.number,
      'type': room.type
    }, HttpHeader).toPromise();
  }

  modifyRoom(room) : Promise<CinemaRoom> {
    return this.http.post<CinemaRoom>('api/room/update', {
      'id': room.id,
      'capacity': room.capacity,
      'number': room.number,
      'type': room.type
    }, HttpHeader).toPromise();
  }

}
