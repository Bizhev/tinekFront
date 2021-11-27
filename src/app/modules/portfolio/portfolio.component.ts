import {Component, OnInit, ViewChild} from '@angular/core';
import { PortfolioService } from "./portfolio.service";
import { Currency, TODO_ANY } from "../../../types/currency.type";
import { LiveAnnouncer } from "@angular/cdk/a11y";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort, Sort } from "@angular/material/sort";
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
  tickers = this.initTable([]);
  constructor(
    private readonly _portfolioService: PortfolioService,
    private _liveAnnouncer: LiveAnnouncer,
  ) { }
  displayedColumns: string[] = ['ticker', 'name', 'lots', 'balance'];

  @ViewChild(MatSort) sort: MatSort | undefined;

  ngAfterViewInit() {
    this.tickers.sort = this.sort || null;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  initTable(data: TickerPortfolio[] ):MatTableDataSource<TickerPortfolio>{
    return new MatTableDataSource(data)
  }

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
