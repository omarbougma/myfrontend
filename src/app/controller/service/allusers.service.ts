import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { messages } from '../model/messages.model';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AllusersService {

  private baseUrl = "http://localhost:8000/allusers"

  constructor(private httpClient: HttpClient) { }

  loginUser(user: User): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl + "/login"}`, user, {withCredentials: true})
  }

  logoutUser(): Observable<Object>{
    return this.httpClient.get(`${this.baseUrl + "/logout"}`) 
  }

  registerUser(user: User): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl + "/register"}`, user) 
  }

  contactAdmin(mssg: messages): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl + "/contact"}`, mssg) 
  }

}
