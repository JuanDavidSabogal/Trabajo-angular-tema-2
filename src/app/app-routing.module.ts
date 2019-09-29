import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultarComponent } from './Persona/consultar/consultar.component';
import { EliminarComponent } from './Persona/eliminar/eliminar.component';
import { RegistrarComponent } from './Persona/registrar/registrar.component';


const routes: Routes = [
  {path :'consultar', component: ConsultarComponent},
  {path :'eliminar',component:EliminarComponent},
  {path :'registra',component:RegistrarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
