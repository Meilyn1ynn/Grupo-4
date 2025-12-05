import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { PropiedadFoto } from '../models/PropiedadFoto';


const base_url=environment.base
@Injectable({
  providedIn: 'root',
})
export class propiedadfotoservice{

  private url = `${base_url}/propiedades/fotos`;

  private listaCambio = new Subject<PropiedadFoto[]>();
  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<PropiedadFoto[]>(this.url);
  }
  insert(pf: PropiedadFoto) {
    return this.http.post(this.url, pf);
  }
  setList(listaNueva: PropiedadFoto[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }

  listId(id: number) {
    return this.http.get<PropiedadFoto>(`${this.url}/${id}`);
  }
  update(pf: PropiedadFoto) {
    return this.http.put(`${this.url}`, pf, { responseType: 'text' });
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`, { responseType: 'text' });
  }

  searchName(nombre: string) {
    const params = {n: nombre};
    return this.http.get<PropiedadFoto[]>(`${this.url}/busquedas`, { params });
  }
  
}