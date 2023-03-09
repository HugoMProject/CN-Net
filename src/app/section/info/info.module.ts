import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioComponent } from './servicio/servicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';



@NgModule({
  declarations: [
    ServicioComponent,
    NosotrosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InfoModule { }
