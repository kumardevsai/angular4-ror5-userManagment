import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components to be loaded with urls
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from "./profile/profile.component";
import {AuthGuard} from "./_guards/auth.guard";

const routes: Routes = [
   {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
   },
   {
     path: 'profile',
     component: ProfileComponent,
     canActivate: [AuthGuard]
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
