import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../user.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  selectedUser: User;
  users: User[] = [];

  constructor( private userService: UserService ) { }

  ngOnInit() {
    
  }

  async addToList(user: User) {
    this.selectedUser = null;
    user.id = Date.now();
    await this.userService.addUser(user);
    this.users = await this.userService.getUsers();
  }
}

