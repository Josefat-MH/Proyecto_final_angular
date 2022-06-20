import { Component,NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import firebase from 'firebase/compat/app';
import "firebase/auth"
import "firebase/firestore"
@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {

  otp!: string;
  verify: any;
  constructor(private router: Router, private ngZone: NgZone,private toast: HotToastService) {}

  config = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      width: '50px',
      height: '50px',
    },
  };

  ngOnInit() {
    this.verify = JSON.parse(localStorage.getItem('verificationId') || '{}');
    console.log(this.verify);
  }

  onOtpChange(otp: string) {
    this.otp = otp;
  }

  handleClick() {
    console.log(this.otp);
    var credential = firebase.auth.PhoneAuthProvider.credential(
      this.verify,
      this.otp
    );

    console.log(credential);
    firebase
      .auth()
      .signInWithCredential(credential)
      .then((response) => {
        this.toast.observe({
          success: 'Logged in successfully',
          loading: 'Logging in...',
          
          error: ({ message }) => `There was an error: ${message} `,

        })
        localStorage.setItem('user_data', JSON.stringify(response));
        this.ngZone.run(() => {
          this.router.navigate(['/agregar']);
        });
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  }
}
