import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { StudiesComponentComponent } from './studies-component/studies-component.component';


const routes: Routes = [
  {path: 'home', component: HomeComponentComponent},
  {path: 'studies', component: StudiesComponentComponent},
  {path: 'contact', component: ContactComponentComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
