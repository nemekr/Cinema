import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdMovieFormComponent } from './ad-movie-form.component';

describe('AdMovieFormComponent', () => {
  let component: AdMovieFormComponent;
  let fixture: ComponentFixture<AdMovieFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdMovieFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdMovieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
