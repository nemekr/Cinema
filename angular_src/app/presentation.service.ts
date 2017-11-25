import { Injectable } from '@angular/core';
import { Presentation } from './Presentation';

@Injectable()
export class PresentationService {
  presentations: Presentation[] = [
    {
      id: 0,
      movie:
      {
        id:0,
        title: 'asd1',
        year: 1991,
        length: 123,
        description: 'the asd movie',
        prize: 1500
      },
      room:
      {
        id:0,
        capacity:20,
        number:1,
        type:'VIP'
      },
      time:new Date(),
      availableTickets:20
    },

    {
      id: 1,
      movie:
      {
        id:1,
        title: 'asd2',
        year: 1994,
        length: 123,
        description: 'the asd movie reloaded',
        prize: 2000
      },
      room:
      {
        id:1,
        capacity:30,
        number:2,
        type:'Normal'
      },
      time:new Date(),
      availableTickets:30
    },
  ];

  constructor() { }

  getPresentations() {
    return this.presentations;
  }

  getPresentation(id) {
    return this.presentations.find(p => p.id == id);
  }

}
