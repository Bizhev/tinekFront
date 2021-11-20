import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";
import { PortfolioComponent } from "./portfolio.component";

const routes: Routes = [
  {
    path: 'portfolio2',
    component: PortfolioComponent, // this is the component with the <router-outlet> in the template
  },
  { path: '',   redirectTo: '/portfolio', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
