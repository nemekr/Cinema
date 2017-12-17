import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const HttpHeader = {
  headers: new HttpHeaders( {
    'Content-Type': 'application/json'
  })
}

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers() : Promise<User[]> {
    return this.http.get<User[]>('api/user/list').toPromise();
  }

  getUser(id) {
   // return this.users.find(u => u.id == id);
  }

  addUser(user) : Promise<User> {
    //this.users.push(user);
    return this.http.post<User>('api/user/create', {
      'email': user.email,
      'password': user.password,
      'name': user.name,
      'address': user.address,
      'role': user.role
    }, HttpHeader).toPromise();
  }

  modifyUser(user: User) : Promise<User> {
    return this.http.post<User>('api/user/modify', {
      'id': user.id,
      'email': user.email,
      'password': user.password,
      'name': user.name,
      'address': user.address,
      'role': user.role
    }, HttpHeader).toPromise();
  }

}
