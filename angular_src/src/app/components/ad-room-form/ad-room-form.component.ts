import { Component, OnInit, OnChanges, Input, EventEmitter, Output } from '@angular/core';
import { CinemaRoom } from '../../models/CinemaRoom';

@Component({
  selector: 'room-form',
  templateUrl: './ad-room-form.component.html',
  styleUrls: ['./ad-room-form.component.css']
})
export class AdRoomFormComponent implements OnInit {
  @Input() room: CinemaRoom;
  model: CinemaRoom;
  @Output() onSubmit = new EventEmitter<CinemaRoom>();
  @Output() onCancel = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.model = Object.assign({}, this.room);
  }

  submit(form) {
    if(!form.valid) return;
    this.onSubmit.emit(this.model);
  }

  cancel() {
    this.onCancel.emit("cancelled");
  }

}
