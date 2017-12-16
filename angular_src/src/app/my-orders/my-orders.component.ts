import { Component, OnInit } from '@angular/core';
import { Order } from '../models/Order';
import { OrderService } from '../services/order.service';
import { Status } from '../models/Status';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  selectedOrder: Order;
  selectedStatus: Status;
  
  orders: Order[] = [];
  model: Order;

  constructor(
    private orderService: OrderService,
  ) {

   }

  async ngOnInit() {
    this.orders =  await this.orderService.getOrders();
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
}
