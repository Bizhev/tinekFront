import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  backendUrl = 'http://localhost:3000';
  constructor(
    private http: HttpClient,
  ) { }
  private static log(message: string) {
    console.log(`PortfolioService: ${message}`);
  }
  fetchProfile(){
    const url = `${this.backendUrl}/api/portfolio`;
    return this.http.get(url)
  }


}
