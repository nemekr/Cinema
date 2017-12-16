import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../models/Order';
import { Presentation } from '../models/Presentation';

@Component({
  selector: 'order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  @Input() order: Order;

  constructor() { }

  ngOnInit() {
  }

  getFormattedTime(presentation: Presentation) : string {
    return new Date(presentation.time).toString();
  }

}
