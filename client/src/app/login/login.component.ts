import { Component, OnInit ,Output, EventEmitter } from '@angular/core';
import { FormGroup , FormBuilder , Validators , FormControl}   from '@angular/forms';
import {Router} from "@angular/router";
import {AuthService} from "../_services/auth/auth.service";
import {Angular2TokenService} from "angular2-token";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() onFormResult = new EventEmitter<any>();
  complexForm : FormGroup;
  emailCtrl: FormControl;
  passwordCtrl: FormControl;
  user = {
      email: '',
      password: ''
    
    
  };

  constructor(fb: FormBuilder ,public authService:AuthService,private router:Router){
    this.emailCtrl = fb.control('', Validators.required);
    this.passwordCtrl = fb.control('', Validators.compose([Validators.required, Validators.minLength(8)]));

    this.complexForm = fb.group({
      // We can set default values by passing in the corresponding value or leave blank if we wish to not set the value. For our example, we’ll default the gender to female.
      email: this.emailCtrl,
      password: this.passwordCtrl
    })
    
  }
  //this.signInUser

  ngOnInit() {
  }
  submitForm(){
    
    this.user.email = this.emailCtrl.value;
    this.user.password = this.passwordCtrl.value;   
    console.log(this.user); 
    this.authService.logInUser(this.user).subscribe(
      res => {
        if(res.status == 200){
          this.onFormResult.emit({signedIn: true, res});
        }
      },
      err => {
        console.log('err:', err);
        this.onFormResult.emit({signedIn: false, err});
      }
  );
    
  }

}