import { Injectable } from '@angular/core';
import { Order } from '../models/Order';
import { Status } from '../models/Status';
import { User } from '../models/User';
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
