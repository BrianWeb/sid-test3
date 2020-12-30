import { Component, OnInit } from '@angular/core';

//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-quote-form',
  templateUrl: './contact-quote-form.component.html',
  styleUrls: ['./contact-quote-form.component.scss']
})
export class ContactQuoteFormComponent implements OnInit {

  FormData: FormGroup;

  constructor(private builder: FormBuilder, private contact: ContactService) { }

  ngOnInit(): void {

    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      // Number: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Comment: new FormControl('', [Validators.required]),
      Phone: new FormControl('', [Validators.required])

    })
  }

  onSubmit(FormData) {
    console.log(FormData)
    this.contact.PostMessage(FormData)
      .subscribe(response => {
        location.href = 'https://mailthis.to/confirm'
        console.log(response)
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      })
  }
}
