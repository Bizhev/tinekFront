import { Component, OnInit } from '@angular/core';
import { PortfolioService } from "./portfolio.service";
import {Currency, TODO_ANY} from "../../../types/currency.type";
export interface TickerPortfolio {
  figi: string,
  instrumentType: TODO_ANY,
  isin: string,
  lots: number,
  name: string,
  ticker: string,
  balance: number,
  averagePositionPrice: {
    currency: Currency,
    value: number,
  }
  expectedYield: {
    currency: Currency,
    value: number,
  }

}
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  tickers: TickerPortfolio[] = [];
  constructor(
    private readonly _portfolioService: PortfolioService
  ) { }

  ngOnInit(): void {
    this.fetchProfile()
  }
  parseTickerInfo(t: TickerPortfolio){
  return `${t.name} [${t.ticker}] ___${t.averagePositionPrice.value}[${t.expectedYield.value}] (${t.averagePositionPrice.currency})___` +
    ` ${t.instrumentType} lots: ${t.lots} balance: ${t.balance}`
  }

  fetchProfile(){
    this._portfolioService.fetchProfile()
      .subscribe((data: any) => {
        console.log({ data });
        this.tickers = data;
      });
  }



}
