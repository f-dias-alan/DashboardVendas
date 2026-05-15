import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  register(user: any) {
    return this.http.post(this.apiUrl, user);
  }

  getUsers() {
    return this.http.get<any[]>(this.apiUrl);
  }
}
