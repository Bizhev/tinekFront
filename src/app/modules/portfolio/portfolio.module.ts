import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { MatListModule } from "@angular/material/list";
import { ProfileModule } from "../profile/profile.module";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";

@NgModule({
  declarations: [
    PortfolioComponent,
  ],
  exports:[PortfolioComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatSortModule,
    ProfileModule,
    MatTableModule,
  ],
  providers: [],
})
export class PortfolioModule { }
