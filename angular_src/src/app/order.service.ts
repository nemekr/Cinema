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
/*
orders: Order[] = [
  {
      id:0,
      user: {
        id: 0,
        email: 'asd@asd.hu',
        password: 'asd',
        name: 'asd',
        address: 'hid alatt',
        role: 'user'
      },
      date: new Date(),
      status: Status.PENDING,
      items: [
         {
          id: 0,
          presentation: {
            id: 0,
            movie:
            {
              id:0,
              title: 'asd1',
              year: 1991,
              length: 123,
              description: 'the asd movie',
              prize: 1500
            },
            room:
            {
              id:0,
              capacity:20,
              number:1,
              type:'VIP'
            },
            time:new Date(),
            availableTickets:20
          },
          quantity: 1
        }
        ]
    },
    {
      id:1,
      user: {
        id: 1,
        email: 'asd2@asd2.hu',
        password: 'asd2',
        name: 'asd2',
        address: 'hid alatt',
        role: 'user'
      },
      date: new Date(),
      status: Status.APPROVED,
      items: [
         {
          id: 0,
          presentation: {
            id: 0,
            movie:
            {
              id:0,
              title: 'asd1',
              year: 1991,
              length: 123,
              description: 'the asd movie',
              prize: 1500
            },
            room:
            {
              id:0,
              capacity:20,
              number:1,
              type:'VIP'
            },
            time:new Date(),
            availableTickets:20
          },
          quantity: 3
        }
        ]
    }
  ];*/

  

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
 /*
  getOrder(id) {
    return this.orders.find(o => o.id == id);
  }

  deleteOrder(order) {
    var index = this.orders.indexOf(order);
    this.orders.splice(index,1);
  }

  modifyOrder(order) {
    var foundOrder = this.orders.find(o => o.id == order.id);
    var index = this.orders.indexOf(foundOrder);
    Object.assign(this.orders[index],order);
  } */

}
