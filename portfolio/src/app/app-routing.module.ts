import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CollectiveComponent } from './collective/collective.component';
import { EducationComponent } from './education/education.component';

const routes: Routes = [
  {
    path:'',
    component:CollectiveComponent
  },
  {
    path:'education',
    // component:EducationComponent
  }
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
