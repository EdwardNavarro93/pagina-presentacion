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

  constructor() {
    //variables que guardan el nivel estudio actual
    this.studie1= [
      {name: "Radio Comunicaciones", level : [true,true,true,false,false]},
      {name: "Fibra"               , level : [true,true,true,false,false]},
      {name: "Redes Telematicas"   , level: [true, true, false, false, false]},
      {name: "programacion", level: [true,true,true,true,false]},
      
    ]
    
    this.studie2 = [
    {name: "HTML Y CSS", level : [true,true,false,false,false]},
    {name: "JavaScript"               , level : [true,true,true,false,false]},
    {name: "TypeScript"   , level: [true, true, false, false, false]}
    ]
   

  }

  ngOnInit(): void {
  }

  showCertifications(e){
    this.idStudie = e.target.parentElement.id
    if (this.idStudie === "studie1"){
      this.url= "demo.pdf"
    }
    else if(this.idStudie === "studie2"){
      this.url= "certificado1.pdf"
    }
    else if(this.idStudie === "studie3"){
      this.url= "certificado2.pdf"
    }
    
    fetch(`assets/pdfs/${this.url}`)
    .then(res => res.blob())
    .then(pdf => {
      e.target.nextElementSibling.href = URL.createObjectURL(pdf)
      e.target.nextElementSibling.click()
    })
  }


}
