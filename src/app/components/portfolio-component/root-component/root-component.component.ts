import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root-component',
  templateUrl: './root-component.component.html',
  styleUrls: ['./root-component.component.css']
})
export class RootComponentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showPortfolio1(){
    this.router.navigate(['/portfolio/iot']) 
  }

}
