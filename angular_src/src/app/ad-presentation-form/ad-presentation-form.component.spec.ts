import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdPresentationFormComponent } from './ad-presentation-form.component';

describe('AdPresentationFormComponent', () => {
  let component: AdPresentationFormComponent;
  let fixture: ComponentFixture<AdPresentationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdPresentationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdPresentationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
