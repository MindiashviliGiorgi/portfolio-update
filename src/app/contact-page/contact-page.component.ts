import { Component, ElementRef, HostListener } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {
  contactForm: any;

  constructor(private fb : FormBuilder, private el : ElementRef) {
    this.contactForm = this.fb.group({
      fullName : [''],
      email : [''],
      message : ['']
    })
  }

  ngOnInit(): void {}

  @HostListener("document:scroll")
  onScrollAnimation() {
    const titleDiv = this.el.nativeElement.querySelector('.title');
    const contactFormDiv = this.el.nativeElement.querySelector('.contact-form');

    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);

    if (scrollValue < 86) {
      titleDiv.style.opacity = '0';
      titleDiv.style.transform = 'translateY(500px)';
      contactFormDiv.style.opacity = '0';
      contactFormDiv.style.transform = 'translateY(500px)';
    } else if (scrollValue > 86) {
      titleDiv.style.opacity = '1';
      titleDiv.style.transform = 'translateY(0px)';
      contactFormDiv.style.opacity = '1';
      contactFormDiv.style.transform = 'translateY(0px)';
    }


  }

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
