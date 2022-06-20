import { HttpClient } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  datos: FormGroup;
  constructor(private httpclient:HttpClient){
    this.datos=new FormGroup({
      email:new FormControl('cihuatl.makeup@gmail.com'),
      mail:new FormControl('',[Validators.required,Validators.email]),
      name:new FormControl('',Validators.required),
      message:new FormControl('',Validators.required),
      asunto:new FormControl('',Validators.required)
    })
    
  }
  enviocorreo(){
    Notiflix.Loading.standard('Cargando...');
    let params={
      email:this.datos.value.email,
      mail:this.datos.value.mail,
      name:this.datos.value.name,
      message:this.datos.value.message,
      asunto:this.datos.value.asunto
    }
    console.log(params)
    this.httpclient.post('http://localhost:3000/',params).subscribe(resp=>{
    Notiflix.Loading.remove();
    Notiflix.Notify.success('Enviado Correctamente.');
    })
  }

  ngOnInit(): void {
  }

}