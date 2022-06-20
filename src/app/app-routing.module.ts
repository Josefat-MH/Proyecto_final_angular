import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeComponent } from './code/code.component';
import { LoginComponent } from './login/login.component';
import { PhoneNumberComponent } from './phone-number/phone-number.component';
import {InicioComponent} from './inicio/inicio.component';
import { RegisterComponent } from './register/register.component';
import { AgregarComponent } from './agregar/agregar.component';
import { ListasComponent } from './listas/listas.component';
import { AltasComponent } from './altas/altas.component';
import { ExploraComponent } from './explora/explora.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LineChartsComponent  } from './line-charts/line-charts.component';

const routes: Routes = [  
  {path: 'inicio', component:InicioComponent},
  {path: 'phone', component:PhoneNumberComponent},
  {path: 'code', component:CodeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'registrar', component:RegisterComponent},
  {path: 'explora', component:ExploraComponent},
  {path: 'agregar', component:AgregarComponent},
  {path: 'listas', component:ListasComponent},
  {path: 'altas', component:AltasComponent},
  {path: 'contacto', component:ContactoComponent},
  {path: 'grafica', component: LineChartsComponent},
  {path:'', redirectTo:'/inicio',pathMatch: 'full'}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
