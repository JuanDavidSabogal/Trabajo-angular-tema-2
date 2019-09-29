import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Persona} from '../Modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient){}

  url='http://localhost:8080/final/registrar';

  getPersonas(){
    return this.http.get<Persona[]>(this.url);
  }
  CreatePesona(Persona:Persona){
    return this.http.post<Persona>(this.url.persona);
  }
  Eliminar(Persona:persona){
     return this.http.delete<Persona>(this.url+"/"+Persona.id)
  
  }
}
