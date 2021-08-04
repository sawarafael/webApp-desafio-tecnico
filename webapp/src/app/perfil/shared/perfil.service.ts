import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { Perfil } from './perfil';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  
  private readonly API = 'http://localhost:3000/list/by-collab'

  constructor(private http: HttpClient) { }
  
  list() {
    return this.http.get<Perfil[]>(this.API)
      .pipe(
        delay(2000),
        tap(console.log)
      )
  }

}
