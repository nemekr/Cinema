import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdRoomsComponent } from './ad-rooms.component';

describe('AdRoomsComponent', () => {
  let component: AdRoomsComponent;
  let fixture: ComponentFixture<AdRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
