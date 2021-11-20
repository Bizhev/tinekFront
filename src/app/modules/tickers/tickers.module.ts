import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TickersComponent } from './tickers.component';
import { MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatSortModule} from "@angular/material/sort";
import { MatSnackBarModule} from "@angular/material/snack-bar";


@NgModule({
  declarations: [
    TickersComponent
  ],
  exports: [TickersComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatSnackBarModule
  ],
})
export class TickersModule { }
