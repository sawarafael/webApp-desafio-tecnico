import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { Perfil } from './perfil';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  
  //Variáveis para requisições
  private readonly API = 'http://localhost:3000'
  private ColabId = localStorage.getItem('id')

  constructor(private http: HttpClient) { }
  
  //Recupera a lista de colaboradores
  list() {
    return this.http.get<Perfil[]>(`${this.API}/list/by-collab`)
      .pipe(
        delay(2000),
        tap(console.log)
      )
  }

  //Recupera os dados do colaborador autenticado
  perfil() {
    return this.http.get<Perfil[]>(`${this.API}/list/perfil?id=${this.ColabId}`)
      .pipe(
        delay(2000),
        tap(console.log)
      )
  }

}
