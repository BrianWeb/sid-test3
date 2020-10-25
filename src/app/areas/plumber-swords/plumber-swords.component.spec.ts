import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlumberSwordsComponent } from './plumber-swords.component';

describe('PlumberSwordsComponent', () => {
  let component: PlumberSwordsComponent;
  let fixture: ComponentFixture<PlumberSwordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlumberSwordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlumberSwordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
