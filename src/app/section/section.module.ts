import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { ServicesComponent } from './services/services.component';
import { AskComponent } from './ask/ask.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { InfoModule } from './info/info.module';



@NgModule({
  declarations: [
    BannerComponent,
    ServicesComponent,
    AskComponent,
    AboutUsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    InfoModule
  ],
  exports:[
    BannerComponent,
    ServicesComponent,
    AskComponent,
    AboutUsComponent,
    ContactComponent,
    InfoModule
  ]
})
export class SectionModule { }
