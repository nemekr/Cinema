import { Injectable } from '@angular/core';
import { Order } from './Order';
import { Status } from './Status';
import { User } from './User';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const HttpHeader = {
  headers: new HttpHeaders( {
    'Content-Type': 'application/json'
  })
}

@Injectable()
export class OrderService {

  constructor(
    private http: HttpClient
  ) { }

  getOrders() : Promise<Order[]> {
    return this.http.get<Order[]>('api/order/allorder').toPromise();
  }

  getUserOrders(user : User) : Promise<Order[]> {
    return this.http.post<Order[]>('api/user/userorder', {
      'email': user.email,
      'password': user.password,
      'name': user.name,
      'address': user.address,
      'role': user.role
    }, HttpHeader ).toPromise();
  }

  addOrder(order: Order) : Promise<Order> {
    return this.http.post<Order>('api/order/create', {
	  'id': order.id,
      'user': order.user,
      'date': order.date,
      'status': order.status,
      'items': order.items
    }, HttpHeader).toPromise();
  }

  modifyOrder(order: Order) : Promise<Order> {
    return this.http.post<Order>('api/order/update', {
	  'id': order.id,
      'user': order.user,
      'date': order.date,
      'status': order.status,
      'items': order.items
    }, HttpHeader).toPromise();
  }

  deleteOrder(order: Order) : Promise<Order> {
    return this.http.post<Order>('api/order/delete', {
      'id': order.id,
      'user': order.user,
      'date': order.date,
      'status': order.status,
      'items': order.items
    }, HttpHeader).toPromise();
  }
}
