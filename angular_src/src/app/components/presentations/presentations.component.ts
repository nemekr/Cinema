import { Component, OnInit } from '@angular/core';
import { Presentation } from '../../models/Presentation';
import { PresentationService } from '../../services/presentation.service';
import { OrderService } from '../../services/order.service';
import { OrderItem } from '../../models/OrderItem';
import { AuthService } from '../../services/auth.service';
import { Status } from '../../models/Status';
import { User } from '../../models/User';
import { Order } from '../../models/Order';

@Component({
  selector: 'app-presentations',
  templateUrl: './presentations.component.html',
  styleUrls: ['./presentations.component.css']
})
export class PresentationsComponent implements OnInit {
	
  currentUser: User;
  createdOrder: Order;

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
	  this.currentUser = await this.authService.user;
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
        this.orderItems.push({ id:Date.now(), presentation: presentation, quantity: amount });
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
    this.createdOrder = { 
		  id: Date.now(), 
		  user: this.currentUser, 
		  date: new Date(), 
		  status: Status.PENDING, 
		  items: this.orderItems
	  };
    await this.orderService.addOrder(this.createdOrder);
    this.presentations = await this.presentationService.getPresentations();
    this.orderItems = [];
  }

  getFormattedTime(presentation: Presentation) : string {
    return new Date(presentation.time).toString();
  }

}
