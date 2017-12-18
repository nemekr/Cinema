import { Component, OnInit, OnChanges } from '@angular/core';
import { User } from '../../models/User'; 
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './ad-users.component.html',
  styleUrls: ['./ad-users.component.css']
})
export class AdUsersComponent implements OnInit {

  selectedUser: User;
  currentUser: User;
  model: User;

  users: User[] = [];

  constructor( 
    private userService: UserService,
    private authService: AuthService 
  ) { }

  async ngOnInit() {
    this.currentUser = await this.authService.user;
    this.users = await this.userService.getUsers();
  }

  ngOnChanges() {
    this.model = Object.assign({}, this.selectedUser);
  }

  onSelectUser(user) {
    this.selectedUser = user;
    this.model = Object.assign({}, this.selectedUser);
  }

  async modifyList(user: User) {
    this.selectedUser = null;
    await this.userService.modifyUser(user);
    this.users = await this.userService.getUsers();
  }

  
  submit(form) {
    this.modifyList(this.model);
  }

}
