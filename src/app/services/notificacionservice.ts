import { Injectable } from '@angular/core';
import { Notificacion } from '../models/Notificacion';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const base_url=environment.base
@Injectable({
  providedIn: 'root',
})
export class notificacionservice {

    private url = `${base_url}/notificaciones`;

  private listaCambio = new Subject<Notificacion[]>();
  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<Notificacion[]>(this.url);
  }
  insert(n: Notificacion) {
    return this.http.post(this.url, n);
  }
  setList(listaNueva: Notificacion[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }

  listId(id: number) {
    return this.http.get<Notificacion>(`${this.url}/${id}`);
  }
  update(n: Notificacion) {
    return this.http.put(`${this.url}`, n, { responseType: 'text' });
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`, { responseType: 'text' });
  }

  searchName(nombre: string) {
    const params = {n: nombre};
    return this.http.get<Notificacion[]>(`${this.url}/busquedas`, { params });
  }
  
}
