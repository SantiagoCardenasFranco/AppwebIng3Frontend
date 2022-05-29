import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TamanosEspecificacion } from './tamano';

const urlApi = 'http://localhost:8888/api/tamanos';
//const urlApi2 = '';
@Injectable({
  providedIn: 'root'
})
export class TamanoService {

  constructor(private http: HttpClient) { }

  empUrl(): any{
    return urlApi;
  }

  getAll() : Observable<TamanosEspecificacion> {
    return this.http.get<TamanosEspecificacion>(urlApi);
  }

  add(tamano: TamanosEspecificacion) {
    return this.http.post<TamanosEspecificacion>(urlApi, tamano);
  }

  remove(tamano: TamanosEspecificacion){
    var endPoints = tamano.id;
    var casteo = "/"+ String(endPoints);
    return this.http.delete<TamanosEspecificacion>(urlApi + casteo);
  }

  put(tamano: TamanosEspecificacion){
    var endPoints = tamano.id;
    var casteo = "/"+ String(endPoints);
    return this.http.put<TamanosEspecificacion>(urlApi + casteo, tamano);
  }
}