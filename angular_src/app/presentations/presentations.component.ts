import { Component, OnInit } from '@angular/core';
import { Presentation } from '../Presentation';
import { PresentationService } from '../presentation.service';

@Component({
  selector: 'app-presentations',
  templateUrl: './presentations.component.html',
  styleUrls: ['./presentations.component.css']
})
export class PresentationsComponent implements OnInit {

  selectedPresentation: Presentation;

  presentations: Presentation[] = [];

  filteredPresentations: Presentation[];

  constructor(
    private presentationService: PresentationService
  ) {
    this.presentations = presentationService.getPresentations();
  }

  ngOnInit() {
  }

  onSelectPresentation(presentation) {
    this.selectedPresentation = presentation;
  }

  addTicket(presentation) {
    var amount = parseInt(document.getElementById(presentation.id + "_amount").innerHTML);
    if(amount < presentation.availableTickets) {
      amount++;
      document.getElementById(presentation.id + "_amount").innerHTML = amount.toString();
    }
  }

  removeTicket(presentation) {
    var amount = parseInt(document.getElementById(presentation.id + "_amount").innerHTML);
    if(amount > 0) {
      amount--;
      document.getElementById(presentation.id + "_amount").innerHTML = amount.toString();
    }
  }

}
