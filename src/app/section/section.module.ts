import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { AskComponent } from './ask/ask.component';
import { ContactComponent } from './contact/contact.component';
import { InfoModule } from './info/info.module';



@NgModule({
  declarations: [
    BannerComponent,
    AskComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    InfoModule
  ],
  exports:[
    BannerComponent,
    AskComponent,
    ContactComponent,
    InfoModule
  ]
})
export class SectionModule { }
