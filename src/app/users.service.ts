import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider,signInWithPhoneNumber,RecaptchaVerifier } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor(private auth:Auth) {
    
   }
   
   register({email, password}:any){
    return createUserWithEmailAndPassword(this.auth,email,password);
  }

  login({email,password}:any){
    return signInWithEmailAndPassword(this.auth, email,password);

  }

  loginwithGoogle(){
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logout(){
    return signOut(this.auth);
  }
   
}
