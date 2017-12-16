import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdMoviesComponent } from './ad-movies.component';

describe('AdMoviesComponent', () => {
  let component: AdMoviesComponent;
  let fixture: ComponentFixture<AdMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
