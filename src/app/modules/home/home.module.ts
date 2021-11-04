import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
