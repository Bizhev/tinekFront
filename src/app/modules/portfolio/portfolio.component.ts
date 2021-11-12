import { Component, OnInit } from '@angular/core';
import {PortfolioService} from "./portfolio.service";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  tickers: any = [];
  constructor(
    private readonly _portfolioService: PortfolioService
  ) { }

  ngOnInit(): void {
    this.fetchProfile()
  }

  fetchProfile(){
    this._portfolioService.fetchProfile()
      .subscribe((data: any) => {
        console.log({ data });
        this.tickers = data;
      });
  }



}
