import { Component, OnInit } from '@angular/core';
import { User } from "../User";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: User = new User();
  message: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async submit(f) {
    if (f.invalid) {
      return;
    }
    try {
      this.message = 'Try to login';
      await this.authService.login(this.model);
      console.log('success')
      this.router.navigate([this.authService.redirectUrl]);
    }
    catch(e) {
      this.message = 'Login failed';
      console.log(e);
    }
  }

}
