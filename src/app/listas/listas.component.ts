import { Component, OnInit,Input,Output,EventEmitter,OnChanges } from '@angular/core';
import { AltasService } from '../altas.service';
import { Altas } from 'src/app/models/altas.m';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../authentication.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent implements OnInit {

  altas?:Altas[];
  altaDeAl?:Altas;
  altaIndex= -1;
  Nombre :string = '';

  
 
  currentAltas!:Altas;
  message ='';
  constructor(private altaService:AltasService,public authService:AuthenticationService, private router:Router) { }
   

  ngOnInit(): void {
    this.recibirDatos();
  }

//Refresca los valores 
  refrescarAltas():void{
    this.altaDeAl=undefined;
    this.altaIndex=-1;
  }

  //Recibe los datos  almacenados en la base de datos 
 recibirDatos():void{
   this.altaService.getAll().snapshotChanges().pipe(
     map(cambiar=>
      cambiar.map(c=>({
        id: c.payload.key, ... c.payload.val()
      }))
      )
   ).subscribe(data=>{
     this.altas=data;

   })
 }

 logout() {
  this.authService.logout().subscribe(() => {
    this.router.navigate(['/inicio']);
  });
}

 SetActiveTutorial(tutorial:Altas, index:number):void{
 this.altaDeAl=tutorial;
 this.altaIndex=index;
 }

 configuAltas(altas:Altas,index:number):void{
   this.altaDeAl=altas;
   this.altaIndex=index;
 }
 //Elimina todos los datos almacenado en la base de datos 
 eliminarTodo():void{
   this.altaService.deleteAll()
   .then(()=> this.refrescarAltas())
   .catch(err=>console.log(err))
 }
 OnChanges(): void {
  this.message='';
  

}
}
