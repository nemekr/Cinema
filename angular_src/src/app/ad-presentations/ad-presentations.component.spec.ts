import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdPresentationsComponent } from './ad-presentations.component';

describe('AdPresentationsComponent', () => {
  let component: AdPresentationsComponent;
  let fixture: ComponentFixture<AdPresentationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdPresentationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdPresentationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
