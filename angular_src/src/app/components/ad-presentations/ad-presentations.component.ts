import { Component, OnInit } from '@angular/core';
import { Presentation } from '../../models/Presentation';
import { PresentationService } from '../../services/presentation.service';

@Component({
  selector: 'app-ad-presentations',
  templateUrl: './ad-presentations.component.html',
  styleUrls: ['./ad-presentations.component.css']
})
export class AdPresentationsComponent implements OnInit {

  selectedPresentation: Presentation;
  addmode: boolean;
  modifymode: boolean;
  
  presentations: Presentation[] = [];

  constructor(
    private presentationService: PresentationService
  ) { 
    this.addmode = false;
    this.modifymode = false;
  }

  async ngOnInit() {
    this.presentations = await this.presentationService.getPresentations();
  }

  onSelectPresentation(presentation) {
    this.selectedPresentation = presentation;
  }

  async deletePresentation(presentation) {
    if(presentation != null) {
      await this.presentationService.deletePresentation(presentation);
      this.presentations = await this.presentationService.getPresentations();
      this.selectedPresentation = null;
    }
  }

  toggleAddmode() {
    this.addmode = !this.addmode;
  }

  toggleModifymode() {
    this.modifymode = !this.modifymode;
  }

  async addToList(presentation: Presentation) {
    this.selectedPresentation = null;
    presentation.id = Date.now();
    await this.presentationService.addPresentation(presentation);
    this.presentations = await this.presentationService.getPresentations();
    this.toggleAddmode();
  }

  async modifyList(presentation: Presentation) {
    this.selectedPresentation = null;
    await this.presentationService.modifyPresentation(presentation);
    this.presentations = await this.presentationService.getPresentations();
    this.toggleModifymode();
  }


}
