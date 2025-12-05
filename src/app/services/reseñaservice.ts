import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Contrato } from '../models/Contrato';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Propiedad } from '../models/Propiedad';
import { Reseña } from '../models/Reseña';

const base_url=environment.base
@Injectable({
  providedIn: 'root',
})
export class reseñaservice {

  private url = `${base_url}/resenas`;

  private listaCambio = new Subject<Reseña[]>();
  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<Reseña[]>(this.url);
  }
  insert(r: Reseña) {
    return this.http.post(this.url, r);
  }
  setList(listaNueva: Reseña[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }

  listId(id: number) {
    return this.http.get<Reseña>(`${this.url}/${id}`);
  }
  update(r: Reseña) {
    return this.http.put(`${this.url}`, r, { responseType: 'text' });
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`, { responseType: 'text' });
  }

  searchName(nombre: string) {
    const params = {n: nombre};
    return this.http.get<Reseña[]>(`${this.url}/busquedas`, { params });
  }
  
}