import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { StudiesComponentComponent } from './studies-component/studies-component.component';
import { PortfolioModule } from './portfolio-component/portfolio.module';
import { ComponentsComponent } from './components.component';


@NgModule({
  declarations: [
    
    ComponentsComponent,
    HomeComponentComponent,
    ContactComponentComponent,
    StudiesComponentComponent,
  ],
  imports: [
    CommonModule,
    PortfolioModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
