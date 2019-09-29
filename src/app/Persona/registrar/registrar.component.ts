import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit() {
  }
  guardar(persona:Persona){
  this.service.CreatePesona(persona)
    .subscribe(data->){
      alert("Se agrego una nueva persona");
      this.router.navigate("listar");
    }
  
  }
}
