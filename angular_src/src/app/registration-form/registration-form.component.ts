import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  @Input() user : User;
  model: User;
  @Output() onSubmit = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.model = Object.assign({}, this.user);
  }

  submit(form) {
    if(!form.valid) return;
    this.onSubmit.emit(this.model);
  }

}