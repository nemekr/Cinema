import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdRoomFormComponent } from './ad-room-form.component';

describe('AdRoomFormComponent', () => {
  let component: AdRoomFormComponent;
  let fixture: ComponentFixture<AdRoomFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdRoomFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdRoomFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
