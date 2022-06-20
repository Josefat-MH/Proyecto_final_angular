import { Component,NgZone, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import "firebase/auth"
import "firebase/firestore"
import { Router } from '@angular/router';

var config ={
  apiKey: "AIzaSyC4YlcWMxvOSow-y9jsChvvQrSHGVuF5QA",
  authDomain: "proyectopt1.firebaseapp.com",
  projectId: "proyectopt1",
  storageBucket: "proyectopt1.appspot.com",
  messagingSenderId: "377872506607",
  appId: "1:377872506607:web:fab0a80a82724e6248c51a",
  measurementId: "G-XJF7ZRJ5TL"
}

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.css']
})
export class PhoneNumberComponent implements OnInit {

  phoneNumber:any;
  reCaptchaVerifier:any;

  constructor(private router:Router, private ngZone: NgZone) { }

  ngOnInit(): void { firebase.initializeApp(config)} 

  getOTP(){

      this.reCaptchaVerifier = new firebase.auth.RecaptchaVerifier(
        'sign-in-button',
        {
          size: 'invisible',
        }
      );
      console.log(this.reCaptchaVerifier);
  
      console.log(this.phoneNumber);
      firebase
        .auth()
        .signInWithPhoneNumber(this.phoneNumber, this.reCaptchaVerifier)
        .then((confirmationResult) => {
          localStorage.setItem(
            'verificationId',
            JSON.stringify(confirmationResult.verificationId)
          );
          this.ngZone.run(() => {
            this.router.navigate(['/code']);
          });
        })
        .catch((error) => {
          console.log(error.message);
          alert(error.message);
          setTimeout(() => {
            window.location.reload();
          }, 8000);
        });
    }

  }
