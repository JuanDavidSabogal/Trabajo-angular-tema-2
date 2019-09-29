import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultarComponent } from './Persona/consultar/consultar.component';
import { ActualizarComponent } from './Persona/actualizar/actualizar.component';
import { RegistrarComponent } from './Persona/registrar/registrar.component';
import { EliminarComponent } from './Persona/eliminar/eliminar.component';
import {FormsModule} from '@angular/forms';
import {ServiceService}from '../app/Service/service.service';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ConsultarComponent,
    ActualizarComponent,
    RegistrarComponent,
    EliminarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
