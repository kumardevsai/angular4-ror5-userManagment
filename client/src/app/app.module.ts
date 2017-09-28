import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {  FormsModule, ReactiveFormsModule }   from '@angular/forms';
// Own Components
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
//services
import {AuthService} from "./_services/auth/auth.service";
// Guards
import {AuthGuard} from "./_guards/auth.guard";
//3rd Part
import { Angular2TokenService } from 'angular2-token';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [Angular2TokenService ,AuthService ,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
