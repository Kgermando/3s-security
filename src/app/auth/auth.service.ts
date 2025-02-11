import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { UserModel } from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient) { }

  login(data: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/auth/login`, data, {
      withCredentials: true
    });
  }

  register(data: any): Observable<any> {
    return this.http.post<UserModel>(`${environment.apiUrl}/auth/register`, data);
  }


  user(): Observable<UserModel> {
    return this.http.get<UserModel>(`${environment.apiUrl}/auth/user`);
  }

  getToken() {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('authToken');
    }
    return null
  }

  isAuthentification() {
    return !!this.getToken();
  }


  logout(): Observable<void> {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('authToken');
    }
    return this.http.post<void>(`${environment.apiUrl}/auth/logout`, {}); 
  }


  updateInfo(data: any): Observable<UserModel> {
    return this.http.put<UserModel>(`${environment.apiUrl}/auth/profil/info`, data);
  }

  updatePassword(data: any): Observable<UserModel> {
    return this.http.put<UserModel>(`${environment.apiUrl}/auth/change-password`, data);
  }
}
