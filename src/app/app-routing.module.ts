import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { RegistrationComponent } from './Components/registration/registration.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    component:RegistrationComponent
  },
  {
    path:"home",
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
