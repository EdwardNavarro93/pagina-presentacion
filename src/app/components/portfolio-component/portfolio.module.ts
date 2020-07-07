import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { RootComponentComponent } from './root-component/root-component.component';
import { IotComponentComponent } from './iot-component/iot-component.component';
import { PortfolioComponentComponent } from './portfolio-component.component';


@NgModule({
  declarations: [
    
    PortfolioComponentComponent,
    RootComponentComponent, 
    IotComponentComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
