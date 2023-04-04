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
  contact(){
    let divContact:any = document.getElementById('contacto')
    divContact.scrollIntoView();
  }
  services(){
    this.router.navigate(['services'])
  }
  /******************** funcion para el efecto del btn **************/
  showBtn(){
    const btn:any = document.getElementById('btn-header');
    btn.addEventListener('click',showLinks()) 
    function showLinks(){
      const links:any = document.querySelector('.div-links-ul');
      if(links.classList.contains('div-links-movil-on')){
        links.classList.remove('div-links-movil-on');
      }else{
        links.classList.add('div-links-movil-on');
      }
    }
  }
}
