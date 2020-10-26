import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactQuoteFormComponent } from './contact-quote-form.component';

describe('ContactQuoteFormComponent', () => {
  let component: ContactQuoteFormComponent;
  let fixture: ComponentFixture<ContactQuoteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactQuoteFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactQuoteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
