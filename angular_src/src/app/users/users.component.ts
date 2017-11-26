import { Component, OnInit } from '@angular/core';
import { User } from '../User'; 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  selectedUser: User;
  
    users: User[] = [
      {
          id:0,
          email: 'asd@asd.hu',
          password: 'asd',
          name: 'asd',
          address: 'hid alatt',
          role: 'USER'
      },

        {
          id:1,
          email: 'dsa@dsa.uh',
          password: 'dsa',
          name: 'dsa',
          address: 'volgy felett',
          role: 'ADMIN'
        }
    ];

  constructor() { }

  ngOnInit() {
  }

  onSelectUser(user) {
    this.selectedUser = user;
  }

}
