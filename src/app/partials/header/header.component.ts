import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  home(){
    window.location.href='http://localhost:4200/home'
  }
  aboutUs(){
    this.router.navigate(['aboutUs'])
  }
  services(){
    this.router.navigate(['services'])
  }

}
