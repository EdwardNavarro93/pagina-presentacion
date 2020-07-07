import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponentComponent } from './portfolio-component.component';
import { RootComponentComponent } from './root-component/root-component.component';
import { IotComponentComponent } from './iot-component/iot-component.component';


const routes: Routes = [
  {path: 'portfolio', component: PortfolioComponentComponent,
  children: [
    {path: '', component: RootComponentComponent},
    {path: 'iot', component: IotComponentComponent}
]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
