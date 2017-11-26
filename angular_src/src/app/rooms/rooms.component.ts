import { Component, OnInit } from '@angular/core';
import { CinemaRoom } from '../CinemaRoom';
import { CinemaRoomService } from '../cinema-room.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  selectedRoom: CinemaRoom;
  addmode: boolean;
  modifymode: boolean;
  
  rooms: CinemaRoom[] = [];

  constructor(
    private cinemaRoomService: CinemaRoomService
  ) { 
    this.rooms = cinemaRoomService.getRooms();
  }

  ngOnInit() {
  }

  onSelectRoom(room) {
    this.selectedRoom = room;
  }

  deleteRoom(room) {
    if(room != null) {
      this.cinemaRoomService.deleteRoom(room);
      this.rooms = this.cinemaRoomService.getRooms();
      this.selectedRoom = null;
    }
  }

  toggleAddmode() {
    this.addmode = !this.addmode;
  }

  toggleModifymode() {
    this.modifymode = !this.modifymode;
  }

  addToList(room: CinemaRoom) {
    room.id = Date.now();
    this.cinemaRoomService.addRoom(room);
    this.rooms = this.cinemaRoomService.getRooms();
    this.toggleAddmode();
  }

  modifyList(room: CinemaRoom) {
    this.cinemaRoomService.modifyRoom(room);
    this.rooms = this.cinemaRoomService.getRooms();
    this.toggleModifymode();
  }

}
