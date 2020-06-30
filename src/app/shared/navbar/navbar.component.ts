import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title: string
  items: string[]

  constructor() {
    this.title = 'Edward Navarro'
    this.items = ['Inicio', 'Estudios', 'Portafolio', 'Contacto']
  }

  ngOnInit(): void {

    
  }

}
