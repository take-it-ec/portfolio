import { Component, OnInit, Output } from '@angular/core';
import { Skill } from '../skill.interface';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  toolImgEnlarged?:string='assets/img/html.webp';

sk:Skill[]=[
  {
    skillTitle:'HTML',
    skillImg:'assets/img/html.webp',
    skillProficiency:'Advanced',

  },
  {
    skillTitle:'CSS',
    skillImg:'assets/img/css.png',
    skillProficiency:'Advanced',

  },
  {
    skillTitle:'JS',
    skillImg:'assets/img/js.png',
    skillProficiency:'Advanced',

  },
  {
    skillTitle:'Bootstrap',
    skillImg:'assets/img/bootstrap.jpeg',
    skillProficiency:'Advanced',

  },
  {
    skillTitle:'Angular',
    skillImg:'assets/img/angular.png',
    skillProficiency:'Beginner',

  },
  {
    skillTitle:'Nodejs',
    skillImg:'assets/img/nodejs.png',
    skillProficiency:'Beginner',

  },
 
  {
    skillTitle:'Firebase',
    skillImg:'assets/img/firebase.png',
    skillProficiency:'Intermediate',

  },
  {
    skillTitle:'Python',
    skillImg:'assets/img/python.png',
    skillProficiency:'Intermediate',

  },
  {
    skillTitle:'Cpp',
    skillImg:'assets/img/cpp.png',
    skillProficiency:'Intermediate',

  },

]
imgEnlarger(s:any){
  this.toolImgEnlarged=s.skillImg;
}
  constructor() { }

  ngOnInit(): void {
  }

}
