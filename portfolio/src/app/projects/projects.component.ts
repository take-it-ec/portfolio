import { Component, OnInit } from '@angular/core';
import { Project } from '../project.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {


  pro:Project[]=[
    {
      projectTitle:'Project 1',
      projectImg:'assets/img/college.jpg',
      projectDes:'my first project',
      projectLink:'',

    },
    {
      projectTitle:'Project 2',
      projectImg:'assets/img/college.jpg',
      projectDes:'my second project',
      projectLink:'',

    },
    {
      projectTitle:'Project 3',
      projectImg:'assets/img/college.jpg',
      projectDes:'my third project',
      projectLink:'',

    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
