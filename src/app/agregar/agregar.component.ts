import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Altas } from '../models/altas.m';
import { AltasService } from '../altas.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  //alta:Altas= new Altas();
  alta:Altas= new Altas();
  //datosSub=false;
  submitted=false;
 
  constructor(public authService:AuthenticationService, private router:Router,private altasService:AltasService) { }

  ngOnInit(): void {
  }
  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/inicio']);
    });
  }
  /*guardarAltas():void{
    this.altasService.crear(this.alta).then(()=>{
       console.log("Se dio de alta con exito"),
       this.datosSub=true;
    });
  }

  nuevaAlta():void{
    this.datosSub=false;
    this.alta = new Altas();
  }*/
  guardar():void{
    this.altasService.crear(this.alta).then(()=>{
      console.log("Se dio de alta con exito"),
      this.submitted=true;
   });
  }
   nuevaAlta():void{
    this.submitted=false;
    this.alta = new Altas();
  }
}
