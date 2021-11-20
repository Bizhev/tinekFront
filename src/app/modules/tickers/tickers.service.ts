import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {TODO_ANY} from "../../../types/currency.type";

@Injectable({
  providedIn: 'root'
})
export class TickersService {
  backendUrl = 'http://localhost:3000';
  constructor(
    private http: HttpClient,
    private _snackBar: MatSnackBar
    ) { }

  fetchTickers(){
    const url = `${this.backendUrl}/api/tickers`;
    return this.http.get(url)
  }
  syncTickers(){
      const url = `${this.backendUrl}/api/tickers`
      return this.http.post<void>(url, { })
        .subscribe((data:TODO_ANY)=>{
          this._snackBar.open(
            `${data.isRefresh && 'Обновлено' || 'Не обновлено'}! Новых добавлено: ${data.newTickers.length}`+
            `  Удалено: ${data.deletedTickers.length}` ,
            'Понял')
            return data;
          }
        );
  }
}
