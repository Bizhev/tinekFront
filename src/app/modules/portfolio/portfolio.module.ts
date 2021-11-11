import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { MatListModule } from "@angular/material/list";

@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    // MatListModule,
    CommonModule,
  ]
})
export class PortfolioModule { }
