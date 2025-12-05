import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Soporte } from '../models/Soporte';
import { Visita } from '../models/Visita';

const base_url=environment.base
@Injectable({
  providedIn: 'root',
})
export class visitaservice {

  private url = `${base_url}/visitas`;

  private listaCambio = new Subject<Visita[]>();
  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<Visita[]>(this.url);
  }
  insert(v: Visita) {
    return this.http.post(this.url, v);
  }
  setList(listaNueva: Visita[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }

  listId(id: number) {
    return this.http.get<Soporte>(`${this.url}/${id}`);
  }
  update(v: Visita) {
    return this.http.put(`${this.url}`, v, { responseType: 'text' });
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`, { responseType: 'text' });
  }

  searchName(nombre: string) {
    const params = {n: nombre};
    return this.http.get<Visita[]>(`${this.url}/busquedas`, { params });
  }
  
}