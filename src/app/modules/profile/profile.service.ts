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
  fetchUsers(){
    const url = `${this.backendUrl}/api/users`
    return this.http.get(url)
  }
  changeUser(id: number){
    const url = `${this.backendUrl}/api/profile`
    return this.http.post<void>(url, { id })
      .pipe(
      );
  }
  changeAccountId(id: string) {
    const url = `${this.backendUrl}/api/profile/change-account`
    return this.http.post<void>(url, { id })
      .pipe(
      );
  }
}
