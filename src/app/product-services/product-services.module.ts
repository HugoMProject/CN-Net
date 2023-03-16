import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductServicesComponent } from './product-services/product-services.component';
import { MaterialModule } from '../shared/material/material.module';


@NgModule({
  declarations: [
    ProductServicesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],exports:[
    ProductServicesComponent
  ]
})
export class ProductServicesModule { }
