import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from "@angular/common/http";
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient,
  ) { }
  backendUrl = 'http://localhost:3000';
  private static log(message: string) {
    console.log(`HeroService: ${message}`);
  }
  fetchProfile(){
    const url = `${this.backendUrl}/api/profile`;
    return this.http.get(url)
  }
  // @deprecated
  fetchUsers(){
    const url = `${this.backendUrl}/api/users`
    return this.http.get(url)
  }
  fetchAccounts(force = false){
    const url = `${this.backendUrl}/api/user/accounts`
    return this.http.post<void>(url, { force })
      .pipe();
  }
  changeAccount(id: number){
    const url = `${this.backendUrl}/api/user/change-account`
    return this.http.post<void>(url, { id })
      .pipe(
      );
  }
}
