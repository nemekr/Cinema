import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User'; 
import { UserService } from '../../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './ad-users.component.html',
  styleUrls: ['./ad-users.component.css']
})
export class AdUsersComponent implements OnInit {

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
