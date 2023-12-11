import { Component, HostListener } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {
  contactForm: any;

  constructor(private fb : FormBuilder) {
    this.contactForm = this.fb.group({
      fullName : [''],
      email : [''],
      message : ['']
    })
  }

  ngOnInit(): void {}

  onSubmit() {
    const contactFormValue = this.contactForm.value;
    console.log(contactFormValue)
  }



}
