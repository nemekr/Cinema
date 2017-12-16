import { Component, OnInit } from '@angular/core';
import { Order } from '../models/Order';
import { OrderService } from '../services/order.service';
import { Status } from '../models/Status';
import { AuthService } from '../auth.service';
import { OrderItem } from '../models/OrderItem';
import { User } from '../models/User';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  currentUser : User;

  selectedOrder: Order;
  selectedStatus: Status;
  
  orders: Order[] = [];
  model: Order;

  orderItems: OrderItem[] = [];

  constructor(
    private orderService: OrderService,
    private authService: AuthService
  ) {

   }

  async ngOnInit() {
    this.currentUser = await this.authService.user;
    //console.log(this.currentUser);
    this.orders =  await this.orderService.getOrders();
    this.orders = this.orders.filter(obj => obj.user.email === this.currentUser.email);
  }

  ngOnChanges() {
    this.model = Object.assign({}, this.selectedOrder);
  }

  onSelectOrder(order) {
    if(this.selectedOrder != order) {
      this.selectedOrder = order;
      this.model = Object.assign({}, this.selectedOrder);
    }
  }

  getFormattedTime(order: Order) : string {
    return new Date(order.date).toString();
  }
}
