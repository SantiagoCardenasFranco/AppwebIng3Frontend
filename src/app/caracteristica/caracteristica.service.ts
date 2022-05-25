import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Caracteristica } from './caracteristica'; 


const urlApi = 'http://localhost:8888/api/caracteristicas';
//const urlApi2 = '';
@Injectable({
  providedIn: 'root'
})
export class CaracteristicaService {

  constructor(private http: HttpClient) { }

  getAll() : Observable<Caracteristica> {
    return this.http.get<Caracteristica>(urlApi);
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