import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {

  decoration_variable : boolean = false;

  @HostListener("document:scroll")
  scrollFunction(){
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);

    if(scrollValue >= 98) {
      this.decoration_variable = true;
    }else {
      this.decoration_variable = false;
    }
  }

}
