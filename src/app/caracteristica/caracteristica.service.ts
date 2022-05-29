import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Caracteristica } from './caracteristica'; 
import { TamanosEspecificacion } from '../tamano/tamano';


const urlApi = 'http://localhost:8888/api/caracteristicas';
const urlApiDos = 'http://localhost:8888/api/tamanos';
//const urlApi2 = '';
@Injectable({
  providedIn: 'root'
})
export class CaracteristicaService {

  constructor(private http: HttpClient) { }

  getAllCaracteristica() : Observable<Caracteristica> {
    return this.http.get<Caracteristica>(urlApi);
  }

  getAllTamano() : Observable<TamanosEspecificacion> {
    return this.http.get<TamanosEspecificacion>(urlApiDos);
  }

  add(tamano: Caracteristica) {
    return this.http.post<Caracteristica>(urlApi, tamano);
  }

  remove(caracteristica: Caracteristica){
    var endPoints = caracteristica.id;
    var casteo = "/"+ String(endPoints);
    return this.http.delete<Caracteristica>(urlApi + casteo);
  }

  put(caracteristica: Caracteristica){
    var endPoints = caracteristica.id;
    var casteo = "/"+ String(endPoints);
    return this.http.put<Caracteristica>(urlApi + casteo, caracteristica);
  }
}