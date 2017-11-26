import { Component, OnInit } from '@angular/core';
import { Order } from '../Order';
import { OrderItem } from '../OrderItem';
import { User } from '../User';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  selectedOrder: Order;
  
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
          status: 'OPEN',
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
      }
    ];

  constructor() { }

  ngOnInit() {
  }

  onSelectOrder(order) {
    this.selectedOrder = order;
  }
}
