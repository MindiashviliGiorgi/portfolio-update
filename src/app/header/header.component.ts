import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    
  constructor() {

  }

  ngOnInit() : void { 
  }

  menu : boolean = false;

  header_variable : boolean = false;
  homeActive : boolean = false;
  aboutActive : boolean = false;
  projectsActive : boolean = false;
  contactActive : boolean = false;

  @HostListener("document:scroll")
  scrollFunction(){
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);

    if(scrollValue > 3) {
      this.header_variable = true;
      this.homeActive = true;
    }else {
      this.header_variable = false;
      this.homeActive = false;
    };

    if(scrollValue > 30){
      this.homeActive = false;
      this.aboutActive = true;
    }else {
      this.aboutActive = false;
    };

    if(scrollValue > 67){
      this.aboutActive = false;
      this.projectsActive = true;
    }else {
      this.projectsActive = false;
    };

    if(scrollValue > 98){
      this.projectsActive = false;
      this.contactActive = true;
    }else {
      this.contactActive = false;
    }
  }

  scrollHome(){
    document.documentElement.scrollTop = 0;
  };
  scrollAbout(){
    document.documentElement.scrollTop = 755;
  }
  scrollProject(){
    document.documentElement.scrollTop = 1510;
  }
  scrollContact(){
    document.documentElement.scrollTop = 5500;
  }

}
