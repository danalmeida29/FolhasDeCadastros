import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from '../../environments/environment';
import { Cliente } from '../Models/cliente';

const API_URL = environment.BASE_URL_API;

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  constructor(private http: HttpClient) {}

  //----------------------------------------------- | --------------------------------------------------------\\
  getListCliente() {
    var urlString = `${API_URL}/clientesPF`;
    return this.http.get(urlString);
  }

  loadByID(id: any) {
    return this.http.get<Cliente>(`${API_URL}/clientesPF/${id}`).pipe(take(1));
  }

  private createCliente(FormData: Cliente) {
    return this.http.post(`${API_URL}/clientesPF`, FormData);
  }

  private updateCliente(FormData: Cliente) {
    return this.http
      .put(`${API_URL}/clientesPF/${FormData.id}`, FormData)
      .pipe(take(1));
  }

  save(FormData: Cliente) {
    if (FormData.id) {
      return this.updateCliente(FormData);
    }
    return this.createCliente(FormData);
  }

  updateList(clientesList: any) {
    return this.http.put(`${API_URL}/clientesPF`, clientesList);
  }

  deletarCliente(id: any): Observable<Cliente> {
    return this.http
      .delete<Cliente>(`${API_URL}/clientesPF/${id}`)
      .pipe(take(1));
  }

  //----------------------------------------------- | --------------------------------------------------------\\
  getListClientePJ() {
    var urlString = `${API_URL}/clientesPJ`;
    return this.http.get(urlString);
  }

  loadPjByID(id: any) {
    return this.http.get<Cliente>(`${API_URL}/clientesPJ/${id}`).pipe(take(1));
  }

  private createClientePJ(FormData: Cliente) {
    return this.http.post(`${API_URL}/clientesPJ`, FormData);
  }

  private updateClientePJ(FormData: Cliente) {
    return this.http.put(`${API_URL}/clientesPJ/${FormData.id}`, FormData);
  }

  savePj(FormData: Cliente) {
    if (FormData.id) {
      return this.updateClientePJ(FormData);
    }
    return this.createClientePJ(FormData);
  }

  deletarClientePj(id: any): Observable<Cliente> {
    return this.http
      .delete<Cliente>(`${API_URL}/clientesPJ/${id}`)
      .pipe(take(1));
  }
}
