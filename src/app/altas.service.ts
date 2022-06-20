import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/compat/database';
import { Altas } from './models/altas.m';

@Injectable({
  providedIn: 'root'
})
export class AltasService {
  //private dbAltas='/altas';
  //misaltasRef:AngularFireList<Altas>
  private dbAltas='/altas';

  misaltasRef:AngularFireList<Altas>;
  constructor(private db:AngularFireDatabase) { this.misaltasRef= db.list(this.dbAltas);}
  //Metodo Obtener todos los datos
  getAll():AngularFireList<Altas>{
    return this.misaltasRef;
  }
  //metodo crear 
  crear(alta:Altas) : any{
     return this.misaltasRef.push(alta)
  }
  //editar
  update(key:string,value:any):Promise <void>{
    return this.misaltasRef.update(key,value);

  }
  //eliminar
  delate(key:string):Promise <void>{
    return this.misaltasRef.remove(key);

  }
  //metodo para borrar todo
  deleteAll(): Promise <void>{
   return this.misaltasRef.remove();
  }
  
}
