import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TODO_ANY} from "../../../types/currency.type";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  backendUrl = 'http://localhost:3000';
  constructor(
    private http: HttpClient,
  ) { }
  private static log(message: string) {
    console.log(`PortfolioService: ${message}`);
  }
  fetchUsers(){
    const url = `${this.backendUrl}/api/user/all`;
    return this.http.get(url)
  }
  userSave(user: TODO_ANY){
    const url = `${this.backendUrl}/api/user`
    return this.http.post<void>(url, user)
      .pipe();
  }
}
