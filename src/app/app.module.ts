import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutUsModule } from './about-us/about-us.module';
import { ProductServicesModule } from './product-services/product-services.module';
import { HomeModule } from './home/home.module';
import { PartialsModule } from './partials/partials.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AboutUsModule,
    ProductServicesModule,
    HomeModule,
    PartialsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
