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

  async modifyList(order: Order) {
    this.selectedOrder = null;
    await this.orderService.modifyOrder(order);
    this.orders = await this.orderService.getOrders();
  }

  
  submit(form) {
    this.modifyList(this.model);
  }

  
  async deleteOrder(order) {
    this.selectedOrder = null;
    await this.orderService.deleteOrder(order);
    this.orders = await this.orderService.getOrders();
  }
}
