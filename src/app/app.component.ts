import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Final';
  constructor(private router:Router){}

  Consultar(){
    this.router.navigate(["consultar"]);
  }
  Registra(){
    this.router.navigate(["registra"])
  }  
  Eliminar(){
    this.router.navigate(["eliminar"]);
  }
} 
