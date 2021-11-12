import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    PortfolioComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class PortfolioModule { }
