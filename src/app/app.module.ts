import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { provideFirebaseApp } from '@angular/fire/app';
import { ReactiveFormsModule } from '@angular/forms';
import {provideAuth} from '@angular/fire/auth';
import { getAuth } from 'firebase/auth';
import {AngularFireModule} from "@angular/fire/compat";
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WindowService } from './window.service';
import { FormsModule } from '@angular/forms';

import { PhoneNumberComponent } from './phone-number/phone-number.component';
import { CodeComponent } from './code/code.component';

import { NgOtpInputModule } from 'ng-otp-input';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegisterComponent } from './register/register.component';
import { AgregarComponent } from './agregar/agregar.component';
import { ListasComponent } from './listas/listas.component';
import { HotToastModule } from '@ngneat/hot-toast';
import { AltasComponent } from './altas/altas.component';
import { ExploraComponent } from './explora/explora.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { QRCodeModule } from 'angularx-qrcode';
import { ContactoComponent } from './contacto/contacto.component';
import { LineChartsComponent } from './line-charts/line-charts.component';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    PhoneNumberComponent,
    CodeComponent,
    
    NavbarComponent,
    InicioComponent,
    RegisterComponent,
    AgregarComponent,
    ListasComponent,
    AltasComponent,
    ExploraComponent,
    ContactoComponent,
    LineChartsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    FormsModule,
    HttpClientModule,
    QRCodeModule,
    NgChartsModule,
    NgOtpInputModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)), provideAuth(()=>getAuth()), HotToastModule.forRoot()
  ],
  providers: [WindowService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
