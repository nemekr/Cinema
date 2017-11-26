import { Component, OnInit, OnChanges } from '@angular/core';
import { Order } from '../Order';
import { OrderService } from '../order.service';
import { Status } from '../Status';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  selectedOrder: Order;
  selectedStatus: Status;
  
  orders: Order[] = [];
  model: Order;

  constructor(
    private orderService: OrderService
  ) {
    this.orders = orderService.getOrders();
   }

  ngOnInit() {
    this.model = Object.assign({}, this.selectedOrder);
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

  submit(form) {
    this.modifyOrder(this.model);
  }

  deleteOrder(order) {
    this.orderService.deleteOrder(order);
    this.orders = this.orderService.getOrders();
    this.selectedOrder = null;
  }

  modifyOrder(order) {
    this.orderService.modifyOrder(order);
    this.orders = this.orderService.getOrders();
  }
}
