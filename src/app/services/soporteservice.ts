import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Soporte } from '../models/Soporte';

const base_url=environment.base
@Injectable({
  providedIn: 'root',
})
export class soporteservice {

  private url = `${base_url}/soporte`;

  private listaCambio = new Subject<Soporte[]>();
  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<Soporte[]>(this.url);
  }
  insert(s: Soporte) {
    return this.http.post(this.url, s);
  }
  setList(listaNueva: Soporte[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }

  listId(id: number) {
    return this.http.get<Soporte>(`${this.url}/${id}`);
  }
  update(s: Soporte) {
    return this.http.put(`${this.url}`, s, { responseType: 'text' });
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`, { responseType: 'text' });
  }

  searchName(nombre: string) {
    const params = {n: nombre};
    return this.http.get<Soporte[]>(`${this.url}/busquedas`, { params });
  }
  
}