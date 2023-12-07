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
    this.techAnimation();
  }

  @HostListener("document:scroll")
  scrollFunction() {
    const pageMainDiv = this.el.nativeElement.querySelector('.about-page-main')

    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    
    if (scrollValue < 18) {
      pageMainDiv.style.opacity = '0';
      pageMainDiv.style.transform = 'translateY(110px)';
    } else if (scrollValue >= 18) {
      pageMainDiv.style.opacity = '1';
      pageMainDiv.style.transform = 'translateY(0px)'
      if (scrollValue > 69) {
        pageMainDiv.style.opacity = '0';
        pageMainDiv.style.transform = 'translateY(-110px)'
      } else if (scrollValue < 69) {
        pageMainDiv.style.opacity = '1';
        pageMainDiv.style.transform = 'translateY(0px)'
      }
    }
  }

  techAnimation() {
    const containerElements = this.el.nativeElement.querySelectorAll('.container');

    function animateContainers() {
      containerElements.forEach((container: { style: { transform: string; boxShadow: string; }; }, index: number) => {
        setTimeout(() => {
          container.style.transform = 'translateY(-6px)';
          container.style.boxShadow = '0px 0px 10px #27F4E0';
        }, (index + 1) * 500);

        setTimeout(() => {
          container.style.transform = 'translateY(0)';
          container.style.boxShadow = '0px 0px 0px #fff';
        }, (index + 2) * 500);
      });
    }

    animateContainers();

    setInterval(() => {
      animateContainers();
    }, (containerElements.length * 2 + 1) * 100);
  }

  

}
