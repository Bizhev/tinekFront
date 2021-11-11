import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    PageNotFoundComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
