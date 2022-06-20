import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { AuthenticationService } from '../authentication.service';
import { HotToastService } from '@ngneat/hot-toast';
import { switchMap } from 'rxjs/operators';
import { authState } from '@angular/fire/auth';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  password2?:string;
  password1?:string;
 mensaje?:string;
  signUpForm = new FormGroup(
    {
      name: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required]),
      password2: new FormControl('',Validators.required),
      
    },
  );
  constructor( private authService: AuthenticationService, private router: Router,private toast: HotToastService) {}

  ngOnInit(): void {
 
  }
  get name(){
    return this.signUpForm.get('name');
  }
  get password(){
    return this.signUpForm.get('password');
  }


  get email (){
    return this.signUpForm.get('email');
  }

  get passwords2(){
    return this.signUpForm.get('password2');
  }
  submit() {
    if (!this.signUpForm.valid) {
      return;
    }

    if(this.password1==this.password2){
    const { name, email, password } = this.signUpForm.value;
    this.authService
      .signUp(name,email, password)
      .pipe(
        
        this.toast.observe({
          success: 'Su registro fue exitoso',
          loading: 'Registrando...',
          error: ({ message }) => `${'error no se pudo registrar'}`,
        })
      )
      .subscribe(() => {
        this.router.navigate(['/agregar']);
      });
  }else{
    alert("Las contraseñas no conciden ");

  }
  
}
}
