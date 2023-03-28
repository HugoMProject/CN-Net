import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.showBanner()
  }

  showBanner(){
    let Banner:any = document.getElementById('id-wellcome');
    let saludo1:any = document.querySelector('.saludo1');
    let saludo2:any = document.querySelector('.saludo2');
    let divBtn:any = document.querySelector('.div-btn');
      window.addEventListener('load', function() {
          //efecto para el div contenedor del saludo
          Banner.style.left = '0px';
          Banner.style.transitionDuration = '5s';
          //efecto para los elementos del div contenedor
          saludo1.style.left = '28%';
          saludo1.style.transitionDuration = '5s'
          saludo2.style.left = '5%';
          saludo2.style.transitionDuration = '5s'
          divBtn.style.left = '22%';
          divBtn.style.transitionDuration = '5s'
          
        
    });
    // funcion para ir a la seccion de nosotros
  }
  goToAboutUs(){
    this.router.navigate(['aboutUs'])
  }
}
