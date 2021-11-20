import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TickerComponent } from './ticker.component';

@NgModule({
  declarations: [
    TickerComponent
  ],
  exports: [TickerComponent],
  imports: [
    CommonModule
  ]
})
export class TickerModule { }
