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
    this.addmode = false;
    this.modifymode = false;
  }

  async ngOnInit() {
    this.rooms = await this.cinemaRoomService.getRooms();
  }

  onSelectRoom(room) {
    this.selectedRoom = room;
  }

  async deleteRoom(room) {
    if(room != null) {
      await this.cinemaRoomService.deleteRoom(room);
      this.rooms = await this.cinemaRoomService.getRooms();
      this.selectedRoom = null;
    }
  }

  toggleAddmode() {
    this.addmode = !this.addmode;
  }

  toggleModifymode() {
    this.modifymode = !this.modifymode;
  }

  async addToList(room: CinemaRoom) {
    this.selectedRoom = null;
    room.id = Date.now();
    await this.cinemaRoomService.addRoom(room);
    this.rooms = await this.cinemaRoomService.getRooms();
    this.toggleAddmode();
  }

  async modifyList(room: CinemaRoom) {
    this.selectedRoom = null;
    await this.cinemaRoomService.modifyRoom(room);
    this.rooms = await this.cinemaRoomService.getRooms();
    this.toggleModifymode();
  }

}
