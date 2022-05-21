import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from './persona';
import { JwtInterceptor } from '../jwt.interceptor';
import { LoginService } from '../login/login.service';

const urlApi = 'http://localhost:8888/api/usuarios';

//Access-Control-Allow-Origin: http://localhost:8080/api/usuario;
@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }

  getAll() : Observable<Persona> {
    return this.http.get<Persona>(urlApi);
    
  }

  add(usuario: Persona) {
    return this.http.post<Persona>(urlApi, usuario);
  }

  remove(usuario: Persona){
    var endPoints = usuario.id;
    var casteo = "/"+ String(endPoints);
    return this.http.delete<Persona>(urlApi + casteo);
  }

  put(usuario: Persona){
    var endPoints = usuario.id;
    var casteo = "/"+ String(endPoints);
    return this.http.put<Persona>(urlApi + casteo, usuario);
  }
}
