import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-services',
  templateUrl: './product-services.component.html',
  styleUrls: ['./product-services.component.css']
})
export class ProductServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  seeMore(){
    window.location.href='http://localhost:4200/aboutUs'
  }
}
