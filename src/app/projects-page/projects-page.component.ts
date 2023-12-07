import { Component, ElementRef, HostListener} from '@angular/core';


@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent {

  constructor(private el : ElementRef){}

  ngOnInit():void {};

  ngAfterViewInit() {
    this.onScrollAnimation()
  }

  @HostListener("document:scroll")
  onScrollAnimation() {
    const titleDiv = this.el.nativeElement.querySelector('.projects-title');
    const projectsDiv = this.el.nativeElement.querySelector('.projects-list');

    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);

    if (scrollValue > 69) {
      titleDiv.style.left = '0px';
      titleDiv.style.opacity = '1';

      projectsDiv.style.right = '0px';
      projectsDiv.style.opacity = '1';
    } else if (scrollValue < 69) {
      titleDiv.style.left = '-700px';
      titleDiv.style.opacity = '0';

      projectsDiv.style.right = '-700px';
      projectsDiv.style.opacity = '0';
    }

  }

  container: number = 1;

  showContainer(containerNumber: number) {
    this.container = containerNumber;
  }

  previousContainer() {
    if (this.container > 1) {
      this.container--;
    }
  }

  nextContainer() {
    if (this.container < 4) {
      this.container++;
    }
  }


}
