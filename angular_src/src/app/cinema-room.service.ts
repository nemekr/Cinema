import { Injectable } from '@angular/core';
import { CinemaRoom } from './CinemaRoom';

@Injectable()
export class CinemaRoomService {

  rooms: CinemaRoom[] = [
    {
        id:0,
        capacity: 10,
        number: 1,
        type: 'VIP'
    },

      {
        id:1,
        capacity: 20,
        number: 2,
        type: 'NORMAL'
      }
  ];

  constructor() { }

  getRooms() {
    return this.rooms;
  }

  getRoom(id) {
    return this.rooms.find(r => r.id == id);
  }

  deleteRoom(room) {
    var index = this.rooms.indexOf(room);
    this.rooms.splice(index,1);
  }

  addRoom(room) {
    this.rooms.push(room);
  }

  modifyRoom(room) {
    var foundRoom = this.rooms.find(r => r.id == room.id);
    var index = this.rooms.indexOf(foundRoom);
    Object.assign(this.rooms[index],room);
  }

}
