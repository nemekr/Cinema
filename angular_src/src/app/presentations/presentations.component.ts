import { Component, OnInit } from '@angular/core';
import { Presentation } from '../Presentation';
import { PresentationService } from '../presentation.service';
import { OrderService } from '../order.service';
import { OrderItem } from '../OrderItem';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-presentations',
  templateUrl: './presentations.component.html',
  styleUrls: ['./presentations.component.css']
})
export class PresentationsComponent implements OnInit {

  selectedPresentation: Presentation;
  orderItems: OrderItem[] = [];

  presentations: Presentation[] = [];

  constructor(
    private presentationService: PresentationService,
    private orderService: OrderService,
    private authService: AuthService
  ) {
  }

  async ngOnInit() {
    this.presentations = await this.presentationService.getPresentations();
  }

  onSelectPresentation(presentation) {
    this.selectedPresentation = presentation;
  }

  addTicket(presentation) {
    var amount = parseInt(document.getElementById(presentation.id + "_amount").innerHTML);
    if(amount < presentation.availableTickets) {
      amount++;
      var item = this.orderItems.find(o => o.presentation == presentation);
      if(!item)
        this.orderItems.push({ id:-1, presentation: presentation, quantity: amount });
      else
        item.quantity = amount;
      document.getElementById(presentation.id + "_amount").innerHTML = amount.toString();
      console.log(this.orderItems);
    }
  }

  removeTicket(presentation) {
    var amount = parseInt(document.getElementById(presentation.id + "_amount").innerHTML);
    if(amount > 0) {
      amount--;
      var item = this.orderItems.find(o => o.presentation == presentation);
      if(!item)
        this.orderItems.push({ id: undefined, presentation: presentation, quantity: amount });
      else {
        if(amount == 0) {
          var index = this.orderItems.indexOf(item);
          this.orderItems.splice(index,1);
        }
        else {
          item.quantity = amount;
        }
      }
      document.getElementById(presentation.id + "_amount").innerHTML = amount.toString();
      console.log(this.orderItems);
    }
  }

  async placeOrder() {
    var createdOrder = { user: this.authService.user, date: new Date(), status: 'PENDING', items: this.orderItems };
    await this.orderService.addOrder(createdOrder);
    this.presentations = await this.presentationService.getPresentations();
  }

}
