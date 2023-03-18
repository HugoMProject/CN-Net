import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SectionModule } from '../section/section.module';
import { MaterialModule } from '../shared/material/material.module';
import { PartialsModule } from '../partials/partials.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    SectionModule,
    MaterialModule,
    PartialsModule
  ],
  exports:[SectionModule,
    PartialsModule]
})
export class HomeModule { }
