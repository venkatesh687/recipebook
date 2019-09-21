import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Observable} from 'rxjs';
import {AuthService,AuthResponseData} from './auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
 isLogin=true;
 isLoading=false;
 isError=false;
 errorMessage=""

  constructor(private authService:AuthService,private router:Router) { }
  onSwitch()
  {
    this.isLogin=!this.isLogin;
  }
  onSubmit(form:NgForm)
  {
     const email=form.value.email;
     const password=form.value.password;
     let authObs:Observable<AuthResponseData>;
    this.isLoading=true;
     if(this.isLogin)
     {
       authObs=this.authService.login(email,password);
          this.isLoading=false;
     }
     else{

            authObs=this.authService.signUp(email,password);
           }
     authObs.subscribe(
   resData=>
   {
      console.log(resData);
    
        this.isLoading=false;
   },
   errorMessage=>
  {
    console.log(errorMessage);
    this.isError=true;
    this.errorMessage=errorMessage;
    this.isLoading=false;
  }
 );

  }
  ngOnInit() {}
}
