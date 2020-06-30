import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { HomeComponentComponent } from './home-component/home-component.component';
import { PortfolioComponentComponent } from './portfolio-component/portfolio-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { StudiesComponentComponent } from './studies-component/studies-component.component';


@NgModule({
  declarations: [
    HomeComponentComponent,
    PortfolioComponentComponent,
    ContactComponentComponent,
    StudiesComponentComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
