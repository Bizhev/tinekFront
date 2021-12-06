import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TradeComponent } from './trade.component';



@NgModule({
  declarations: [
    TradeComponent
  ],
  exports:[ TradeComponent ],
  imports: [
    CommonModule
  ],
})
export class TradeModule { }
