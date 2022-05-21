import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';


const urlApi = 'http://localhost:8888/api/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  add(logueo: Login) {
    return this.http.post<Login>(urlApi, logueo);
  }
}
