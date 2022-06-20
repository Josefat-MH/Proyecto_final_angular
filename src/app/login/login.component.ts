import { Component, OnInit } from '@angular/core';
import { WindowService } from '../window.service';
import { FirebaseApp } from '@angular/fire/app';

import { AngularFireAuth } from '@angular/fire/compat/auth';

import { getAuth, RecaptchaVerifier } from 'firebase/auth';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';
import {AngularFireModule} from "@angular/fire/compat";
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { Auth } from '@angular/fire/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../authentication.service';
import { HotToastService } from '@ngneat/hot-toast';

import firebase from 'firebase/compat/app';
import "firebase/auth"
import "firebase/firestore"

export class PhoneNumber {
  country!: string;
  area!: string;
  prefix!: string;
  line!: string;


}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  windowRef: any;

  phoneNumber:any;
  reCaptchaVerifie: any;

  


  phoneSignIn=true;
  verificationCode!: string;

  user: any;

  constructor(private windowService: WindowService,private authService:AuthenticationService, private router:Router , private toast: HotToastService) { 
    this.windowRef=this.windowService.windowRef;
  }

  ngOnInit() {
   this.reCaptchaVerifie = new firebase.auth.RecaptchaVerifier('recaptcha-conteiner',{size: 'invisible'})
   firebase.auth().signInWithPhoneNumber
    
  }

 togglePhoneSignIn(){
   this.phoneSignIn=!this.phoneSignIn;
 }
 submit() {
  const { email, password } = this.loginForm.value;
  this.authService.login(email, password).pipe(
    this.toast.observe({
      success: 'Logged in successfully',
      loading: 'Logging in...',
      error: ({ message }) => `There was an error: ${message} `
    })
  ).subscribe(() => {
    this.router.navigate(['/agregar']);
  });

}

onClick(){
  this.authService.loginwithGoogle()
  .subscribe(() => {
    this.router.navigate(['/agregar']);
  });
  
}

onClick2(){
  this.router.navigate(['/phone']);
}
}
