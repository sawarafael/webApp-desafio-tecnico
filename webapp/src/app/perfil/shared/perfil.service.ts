import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { Perfil } from './perfil';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  
  private readonly API = 'http://localhost:3000'
  private ColabId = localStorage.getItem('id')

  constructor(private http: HttpClient) { }
  
  list() {
    return this.http.get<Perfil[]>(`${this.API}/list/by-collab`)
      .pipe(
        delay(2000),
        tap(console.log)
      )
  }

  perfil() {
    return this.http.get<Perfil[]>(`${this.API}/list/perfil`, {
      params: {
        id: `${this.ColabId}`
      }
    })
      .pipe(
        delay(2000),
        tap(console.log)
      )
  }

  listByFilter() {
    let headers = new HttpParams();
    headers = headers.append('', '');
  }

}
