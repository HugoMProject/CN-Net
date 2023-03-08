import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { InfoComponent } from './info/info.component';
import { ServicesComponent } from './services/services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    BannerComponent,
    InfoComponent,
    ServicesComponent,
    AboutUsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SectionModule { }
