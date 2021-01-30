import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { PersonajesComponent } from './components/personajes/personajes.component';



const routes: Routes = [
  { path: '', component: PersonajesComponent },
 
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
