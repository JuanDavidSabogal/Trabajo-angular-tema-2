import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})

export class EliminarComponent implements OnInit {
  
  persona: Persona[];
  constructor(private router:Router,private service:ServiceService) { }    
  }

  ngOnInit() {
  
  Eliminar(Persona:persona){

    this.service.deletePersona(Persona)
    .subscribe(data->(
      this.personas=this.personas.filter(p->p!==Persona)
    ))
  }

  }

}
