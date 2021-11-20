import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from "./modules/page-not-found/page-not-found.component";
import { PortfolioComponent } from "./modules/portfolio/portfolio.component";
import { TickersComponent } from "./modules/tickers/tickers.component";

const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'tickers', component: TickersComponent },
  { path: '',   redirectTo: '/portfolio', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
