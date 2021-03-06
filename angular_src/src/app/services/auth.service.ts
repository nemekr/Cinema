import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../models/User";
import { tap } from "rxjs/operators";
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders(
    {'Content-Type': 'application/json'}
  )
}

@Injectable()
export class AuthService {

  isLoggedIn: boolean = false;
  redirectUrl: string;
  user: User;

  constructor( private http: HttpClient, private router: Router ) { }

  login(user: User) {
    this.redirectUrl = "/dashboard";
    return this.http.post<User>(
        // 'http://localhost:4200/api/user/login',
        'api/user/login',
        user,
        httpOptions
      )
      .pipe(
        tap((user: User) => {
          this.isLoggedIn = true;
          this.user = user;
        })
      )
      .toPromise();
  }

  logout() {
    // https://stackoverflow.com/a/46816238
    this.isLoggedIn = false;
    this.user = new User();
    this.router.navigate(["/login"]);
    return this.http.post('api/user/logout', {responseType: 'text'} ).toPromise();
    
   /* return this.http.post(
        'api/user/logout',
        { },
        httpOptions
      )
      .pipe(
        tap(res => {
          console.log('service logout', res);
          this.isLoggedIn = false;
          this.user = new User();
        })
      ).toPromise();*/
  }

}
