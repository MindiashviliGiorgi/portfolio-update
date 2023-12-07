import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  constructor(private el : ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.scrollFunction()
  }

  @HostListener("document:scroll")
  scrollFunction() {
    const welcomeText = this.el.nativeElement.querySelector('.home-page-left');
    const decorationDiv = this.el.nativeElement.querySelector('.decore');

    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);

    if (scrollValue >= 0 && scrollValue < 17) {
      welcomeText.style.left = '0px';
      welcomeText.style.opacity = '1';

      decorationDiv.style.top = '0px';
      decorationDiv.style.right = '0px';
      decorationDiv.style.opacity = '1';
    }  else if (scrollValue > 17) {
      welcomeText.style.left = '-800px';
      welcomeText.style.opacity = '0';

      decorationDiv.style.top = '-700px';
      decorationDiv.style.right = '-700px';
      decorationDiv.style.opacity = '0';
    }

  }

}
