import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Contrato } from '../models/Contrato';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Favorito } from '../models/Favorito';

const base_url=environment.base
@Injectable({
  providedIn: 'root',
})
export class favoritoservice {

  private url = `${base_url}/favoritos`;

  private listaCambio = new Subject<Favorito[]>();
  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<Favorito[]>(this.url);
  }
  insert(f: Favorito) {
    return this.http.post(this.url, f);
  }
  setList(listaNueva: Favorito[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }

  listId(id: number) {
    return this.http.get<Favorito>(`${this.url}/${id}`);
  }
  update(f: Favorito) {
    return this.http.put(`${this.url}`, f, { responseType: 'text' });
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`, { responseType: 'text' });
  }

  searchName(nombre: string) {
    const params = {n: nombre};
    return this.http.get<Favorito[]>(`${this.url}/busquedas`, { params });
  }
  
}
