import { Component, OnInit } from '@angular/core';
import { Educational } from '../educational.interface';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  template:'',
})


export class EducationComponent implements OnInit {
eduImgEnlarged:string='assets/img/college.jpg'
edu:Educational[]=[
{
  standard:'Engineering',
  institution:'TKM College Of Engineering',
  course:'Electronics and Communication Engineering',
  marks:'9.85',
  icons:'fa-solid fa-graduation-cap',
  year:'2023',
  img:'assets/img/college.jpg'
},
{
  standard:'XII',
  institution:'Mar Baselios Senior Secondary School',
  course:'Biomaths',
  marks:'93',
  icons:'fa-solid fa-school',
  year:'2018',
  img:'assets/img/school.jpg'



},
{
  standard:'X',
  institution:'Mar Baselios Senior Secondary School',
  course:'Science',
  marks:'95',
  icons:'fa-solid fa-school',
  year:'2016',
  img:'assets/img/school.jpg'



}
]

eduImgEnlarger(e:any){
this.eduImgEnlarged=e.img
}

  constructor() {
    

   }

  ngOnInit(): void {
    
  }

}
