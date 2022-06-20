import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Altas } from '../models/altas.m';
import { AltasService } from '../altas.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-explora',
  templateUrl: './explora.component.html',
  styleUrls: ['./explora.component.css']
})
export class ExploraComponent implements OnInit {
  qr:string='';
  constructor(private httpclient:HttpClient,public authService:AuthenticationService, private router:Router) {  }
  generador(){
    this.httpclient.get('http://localhost:3000/generador').subscribe(res=>{
    console.log(res);
    const aux = JSON.stringify(res);
    this.qr=aux;
    this.qr=this.qr.replace(/"|{|}|:|alea/g,"");
    })
  }

  ngOnInit(): void {
  }
  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/inicio']);
    });
  }

}
