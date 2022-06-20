import { Injectable } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { signInWithEmailAndPassword,createUserWithEmailAndPassword, updateProfile,signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 currentUser$ = authState(this.auth);
  constructor(private auth:Auth) { }
  login(username:string,password:string){
   return from(signInWithEmailAndPassword(this.auth,username,password));
  }
  signUp(name: string,email: string, password: string){
    return from(createUserWithEmailAndPassword(this.auth, email, password)).pipe(switchMap(({user})=>updateProfile(user,{displayName:name})));
  }
  loginwithGoogle(){
    return from(signInWithPopup(this.auth, new GoogleAuthProvider()));
  }
  logout(){
    return from(this.auth.signOut());
  }
}
