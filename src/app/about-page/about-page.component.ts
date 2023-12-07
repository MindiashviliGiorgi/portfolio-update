import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {
  pageAnimation : boolean = false;

  constructor(private el : ElementRef) {}

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.scrollFunction();
  }

  @HostListener("document:scroll")
  scrollFunction() {
    const pageMainDiv = this.el.nativeElement.querySelector('.about-page-main')

    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);

    if (scrollValue < 16) {
      pageMainDiv.style.opacity = '0';
      pageMainDiv.style.transform = 'translateY(100px)';
    } else if (scrollValue >= 16) {
      pageMainDiv.style.opacity = '1';
      pageMainDiv.style.transform = 'translateY(0px)'
    }
  }

}
