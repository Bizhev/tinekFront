import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import {Test1Component} from "./pages/home/test1/test1.component";
import {Test2Component} from "./pages/home/test2/test2.component";

const routes: Routes = [

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class HomeRoutingModule { }
