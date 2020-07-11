import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iot-component',
  templateUrl: './iot-component.component.html',
  styleUrls: ['./iot-component.component.css']
})
export class IotComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showArticle(e){
    fetch('../assets/pdfs/articulo.pdf')
    .then(res => res.blob())
    .then(pdf => {
      e.target.nextElementSibling.href = URL.createObjectURL(pdf)
      e.target.nextElementSibling.click()
    })
  }

}
