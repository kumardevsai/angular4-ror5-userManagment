import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";
import {AuthService} from "../_services/auth/auth.service";
import {Angular2TokenService} from "angular2-token";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public authTokenService:Angular2TokenService,
              public authService:AuthService,
              private router:Router) {}

  logOut(){
    this.authService.logOutUser().subscribe(() => this.router.navigate(['/']));
  }

  ngOnInit() {
  }

}