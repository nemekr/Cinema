import { Component, OnInit } from '@angular/core';
import { CinemaRoom } from '../CinemaRoom';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  selectedRoom: CinemaRoom;
  
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

  ngOnInit() {
  }

  onSelectRoom(room) {
    this.selectedRoom = room;
  }

}
