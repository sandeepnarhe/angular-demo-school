import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ManageschoolComponent } from './components/school/manageschool/manageschool.component';
import { ViewschoolComponent } from './components/school/viewschool/viewschool.component';


const routes: Routes = [
  {
    path: "", component: LoginComponent
  },
  {
    path: "mgmt", component: ManageschoolComponent
  },
  {
    path: "view", component: ViewschoolComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
