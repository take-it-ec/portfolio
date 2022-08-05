import { Component, Injectable, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-education',
//   templateUrl: './education.component.html',
//   styleUrls: ['./education.component.css'],
//   template:'',
// })
interface EDUCATION{

  standard:string,
  institution:string,
  course:string,
  marks:string
}
@Injectable()
export abstract class EducationComponent implements OnInit {

education:EDUCATION[]=[
  {
    standard:'Engineering',
    institution:'TKM College Of Engineering',
    course:'Electronics and Communication Engineering',
    marks:'9.85'

  },
  {
    standard:'XII',
    institution:'Mar Baselios Senior Secondary School',
    course:'BioMaths',
    marks:'93%'

  },
  {
    standard:'X',
    institution:'Mar Baselios Senior Secondary School',
    course:'Science',
    marks:'95%'

  }
 

]

  constructor() {
   
   }

  ngOnInit(): void {
  }

}
