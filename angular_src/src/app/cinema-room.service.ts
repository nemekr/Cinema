import { Injectable } from '@angular/core';
import { CinemaRoom } from './CinemaRoom';
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

  getRoom(id) {
   // return this.rooms.find(r => r.id == id);
  }

  deleteRoom(room) : Promise<CinemaRoom> {
    //var index = this.rooms.indexOf(room);
    //this.rooms.splice(index,1);
    return this.http.post<CinemaRoom>('api/room/delete', {
      'id': room.id,
      'capacity': room.capacity,
      'number': room.number,
      'type': room.type
    }, HttpHeader).toPromise();
  }

  addRoom(room) : Promise<CinemaRoom> {
    //this.rooms.push(room);
    return this.http.post<CinemaRoom>('api/room/create', {
      'capacity': room.capacity,
      'number': room.number,
      'type': room.type
    }, HttpHeader).toPromise();
  }

  modifyRoom(room) : Promise<CinemaRoom> {
    //var foundRoom = this.rooms.find(r => r.id == room.id);
    //var index = this.rooms.indexOf(foundRoom);
    //Object.assign(this.rooms[index],room);
    return this.http.post<CinemaRoom>('api/room/update', {
      'id': room.id,
      'capacity': room.capacity,
      'number': room.number,
      'type': room.type
    }, HttpHeader).toPromise();
  }

}
