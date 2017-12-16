import { TestBed, inject } from '@angular/core/testing';

import { CinemaRoomService } from './cinema-room.service';

describe('CinemaRoomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CinemaRoomService]
    });
  });

  it('should be created', inject([CinemaRoomService], (service: CinemaRoomService) => {
    expect(service).toBeTruthy();
  }));
});
