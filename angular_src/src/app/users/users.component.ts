import { Component, OnInit } from '@angular/core';
import { User } from '../User'; 
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  selectedUser: User;

  users: User[] = [];

  constructor( private userService: UserService ) { }

  async ngOnInit() {
    this.users = await this.userService.getUsers();
  }

  onSelectUser(user) {
    this.selectedUser = user;
  }

}
