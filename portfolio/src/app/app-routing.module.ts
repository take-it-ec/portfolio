import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CollectiveComponent } from './collective/collective.component';
import { EducationComponent } from './education/education.component';
import { FirstsectionComponent } from './firstsection/firstsection.component';

const routes: Routes = [
  {
    path:'',
    component:FirstsectionComponent
  },
  {
    path:'collective',
    component:CollectiveComponent
  }
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
