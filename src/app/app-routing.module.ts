import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { PortfolioComponentComponent } from './components/portfolio-component/portfolio-component.component';
import { ContactComponentComponent } from './components/contact-component/contact-component.component';


const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponentComponent},
  {path: 'portfolio', component: PortfolioComponentComponent},
  {path: 'contact', component: ContactComponentComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
