import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title: string
  items: string[]

  constructor(private renderer : Renderer2, private element : ElementRef) {
    this.title = 'Edward Navarro'
    this.items = ['Inicio', 'Estudios', 'Portafolio']

    

  }

  ngOnInit(): void {

    let navbar : HTMLElement = this.element.nativeElement.children[0]

    this.renderer.listen('window', 'scroll', (event) => {
      const number = window.scrollY;
      if (number > 150 || window.pageYOffset > 150) {
        navbar.classList.remove('bg-transparent')
        navbar.classList.add('bg-navbar')
      } else {
        navbar.classList.remove('bg-navbar')
        navbar.classList.add('bg-transparent')
      }
    })

  }

}
