import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Propiedad } from '../models/Propiedad';

const base_url=environment.base
@Injectable({
  providedIn: 'root',
})
export class propiedadservice {

  private url = `${base_url}/propiedades`;

  private listaCambio = new Subject<Propiedad[]>();
  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<Propiedad[]>(this.url);
  }
  insert(pr: Propiedad) {
    return this.http.post(this.url, pr);
  }
  setList(listaNueva: Propiedad[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }

  listId(id: number) {
    return this.http.get<Propiedad>(`${this.url}/${id}`);
  }
  update(pr: Propiedad) {
    return this.http.put(`${this.url}`, pr, { responseType: 'text' });
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`, { responseType: 'text' });
  }

  searchName(nombre: string) {
    const params = {n: nombre};
    return this.http.get<Propiedad[]>(`${this.url}/busquedas`, { params });
  }
  
}
