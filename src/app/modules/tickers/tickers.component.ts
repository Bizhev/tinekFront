import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatSort, Sort} from "@angular/material/sort";
import {TickersService} from "./tickers.service"
import {Currency, TODO_ANY} from "../../../types/currency.type";
import { format } from 'date-fns';
export interface TickerTool {
  country: string;
  created_at: string;
  currency: Currency;
  figi: string;
  id: number;
  isin: string
  lot: number
  minPriceIncrement: string
  name: string
  portfolio: string
  ticker: string
  type: string
  updated_at: string
}
@Component({
  selector: 'app-tickers',
  templateUrl: './tickers.component.html',
  styleUrls: ['./tickers.component.scss'],
})
export class TickersComponent implements OnInit {

  columns: string[] = [
    'type', 'ticker', 'name', 'currency', 'lot', 'minPriceIncrement', 'country', 'created_at'];

  tickers = new MatTableDataSource([])

  stocksCount = 0;

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private _tickerService: TickersService,
    ) {}

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.tickers.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort | TODO_ANY ) {
    console.log({ sortState });
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  fetchTickers(){
    this._tickerService.fetchTickers()
      .subscribe((x: TODO_ANY)=>{
          this.initTable(x);
      })
  }
  initTable(data: TODO_ANY){
    this.tickers = new MatTableDataSource(data);
    this.stocksCount = data.length;
  }
  getTypeIcon(iconText: string): string{
    if (iconText === 'Stock') {
      return 'trending_up'
    }
    return 'article'
  }
  ngOnInit(): void {
    this.fetchTickers()
  }
  syncTickers(){
    this._tickerService.syncTickers();
  }
  formatDate(date: string){
    return format(new Date(date), 'dd.MM.yyyy в hh:mm:ss');
  }
}
