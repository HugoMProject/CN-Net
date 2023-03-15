import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SectionModule } from '../section/section.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SectionModule
  ],
  exports:[SectionModule]
})
export class HomeModule { }
