import { Component, OnInit,Input,Output,EventEmitter,OnChanges } from '@angular/core';
import { AltasService } from '../altas.service';
import { Altas } from 'src/app/models/altas.m';

@Component({
  selector: 'app-altas',
  templateUrl: './altas.component.html',
  styleUrls: ['./altas.component.css']
})
export class AltasComponent implements OnInit {
  @Input() altas?:Altas;
  @Output() refrescarAltas:EventEmitter<any>=new EventEmitter();
 
  currentAltas!:Altas;
  message ='';

  constructor(private altasService:AltasService) { }

  ngOnInit(): void {
    this.message='';
  }

  OnChanges(): void {
    this.message='';
    this.currentAltas={...this.altas};

  }

  editarAlta():void{
     const data={
      nombre:this.currentAltas.nombre,
      descipcion:this.currentAltas.descripcion,
      precio: this.currentAltas.precio,
      cantidad: this.currentAltas.cantida,
     };
     this.altasService.update(this.currentAltas.key||"[]",data).then(() => this.message = 'The tutorial was updated successfully!')
     .catch(err => console.log(err));
  }
  delateAltas():void{
    this.altasService.delate(this.currentAltas.key||"[]").then(() => this.message = 'The tutorial was updated successfully!')
     .catch(err => console.log(err));
  }
}
