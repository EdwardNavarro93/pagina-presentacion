import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studies-component',
  templateUrl: './studies-component.component.html',
  styleUrls: ['./studies-component.component.css']
})
export class StudiesComponentComponent implements OnInit {

  
  idStudie:string
  url:string
  studie1: any[]
  studie2: any[]
  studie3: any[]

  constructor() {
    //variables que guardan el nivel estudio actual
    this.studie1= [
      { 
        name: "Gestión de sistemas, protocolos y señales de telecomunicaciones", 
        level : [true,true,true,false,false]
      },
      {
        name: "Diseño y control de sistemas electrónicos y de telecomunicaciones análogos o digitales", 
        level : [true,true,true,false,false]
      },
      {
        name: "Implementación del método científico para la solución de problemas", 
        level: [true,true,true,true,false]
      },
      {
        name: "Desarrollo y gestión de proyectos de ingeniería",
        level: [true, true, false, false, false]
      }     
    ]
    
    this.studie2 = [
      {
        name: "Radiocomunicaciones móviles e inalámbricas", 
        level : [true,true,true,true,false]
      },
      {
        name: "Gestión y control de Redes Telemáticas",
        level: [true, true, true, true, false]
      },
      {
        name: "Redes de nueva generación e internet de las cosas",
        level: [true,true,true,true,false]
      },
      {
        name: "Sistemas de comunicaciones por fibra óptica", 
        level : [true,true,false,false,false]
      },
      {
        name: "Procesamiento digital de señales de telecomunicaciones",
        level: [true,true,true,false,false]
      },
    ]

    this.studie3 = [
      {
        name:"Desarrollo de aplicaciones cliente-servidor",
        level:[true,true,true,false,false]
      },
      {
        name: "Desarrollo de aplicaciones web - FrontEnd",
        level: [true,true,true,true,false]
      },
      {
        name: "Desarrollo de aplicaciones web - BackEnd",
        level: [true,true,true,false,false]
      },
      {
        name: "Programación de sistemas embebidos",
        level: [true,true,true,false,false]
      },
      {
        name:"Desarrollo y programación de videojuegos",
        level:[true,true,false,false,false]
      }
    ]
  }

  ngOnInit(): void {
  }

  showCertifications(e){
    this.idStudie = e.target.parentElement.id
    if (this.idStudie === "studie1"){
      this.url= "certificado1.pdf"
    }
    else if(this.idStudie === "studie2"){
      this.url= "certificado2.pdf"
    }
    else if(this.idStudie === "studie3"){
      this.url= "certificado3.pdf"
    }
    
    fetch(`assets/pdfs/${this.url}`)
    .then(res => res.blob())
    .then(pdf => {
      e.target.nextElementSibling.href = URL.createObjectURL(pdf)
      e.target.nextElementSibling.click()
    })
  }


}
