import { Component, OnInit, Input } from '@angular/core';
import { Presentation } from '../../models/Presentation';

@Component({
  selector: 'presentation-details',
  templateUrl: './presentation-details.component.html',
  styleUrls: ['./presentation-details.component.css']
})
export class PresentationDetailsComponent implements OnInit {

  @Input() presentation: Presentation;

  constructor() { }

  ngOnInit() {
  }
}