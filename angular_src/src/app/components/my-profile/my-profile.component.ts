import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User'; 
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  
  currentUser: User;
  modifymode: boolean;
  
  constructor( private userService: UserService, private authService: AuthService ) { 
    this.modifymode = false;
  }
  
  async ngOnInit() {
    this.currentUser = await this.authService.user;
  }

  toggleModifymode() {
    this.modifymode = !this.modifymode;
  }

  async modifyUser(user: User) {
    await this.userService.modifyUser(user);
    this.toggleModifymode();
  }

}