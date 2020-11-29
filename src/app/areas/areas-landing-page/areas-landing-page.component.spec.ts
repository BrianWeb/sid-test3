import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasLandingPageComponent } from './areas-landing-page.component';

describe('AreasLandingPageComponent', () => {
  let component: AreasLandingPageComponent;
  let fixture: ComponentFixture<AreasLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreasLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreasLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
