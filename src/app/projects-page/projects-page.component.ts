import { Component} from '@angular/core';


@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent {

  constructor(){}

  ngOnInit():void {};

  

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
