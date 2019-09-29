import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ServiceService}from '../../Service/service.service'
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})

export class ConsultarComponent implements OnInit {

   personas:Persona[];
   constructor(private service:ServiceService, private router:Router){}

   ngOnInit() {
    this.service.getPersonas()
    .subscribe(data->{
       this.personas=data;
   })
  }

}
