import { Component, HostListener } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import emailjs from '@emailjs/browser';

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
    this.send();
  }

  async send() {
    emailjs.init('Ww9NGizlR-ziTh9rQ')
    let response = await emailjs.send("service_xo5ixmk","template_yjk4le9",{
      fullName: this.contactForm.value.fullName,
      email: this.contactForm.value.email,
      message: this.contactForm.value.message,
    });   
    
    alert("Message has been sent.")
    this.contactForm.reset()
  }

}
