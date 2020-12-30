import { Component, OnInit } from '@angular/core';

//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

import { ContactService } from '../common/contact.service';

@Component({
  selector: 'app-contact-dublin-plumber',
  templateUrl: './contact-dublin-plumber.component.html',
  styleUrls: ['./contact-dublin-plumber.component.scss']
})

export class ContactDublinPlumberComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }

}
