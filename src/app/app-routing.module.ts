import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from "./modules/page-not-found/page-not-found.component";
import {HomeComponent} from "./modules/home/pages/home/home.component";
import {PortfolioComponent} from "./modules/portfolio/portfolio.component";

const routes: Routes = [
  {
    path: 'portfolio',
    component: PortfolioComponent, // this is the component with the <router-outlet> in the template
  },
  { path: '',   redirectTo: '/portfolio', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
