import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  //Faz requisição de login
  async login(user: any) {
    const result = await this.http.post<any>('http://localhost:3000/auth/signin', user).toPromise();
    if (result) {
      window.localStorage.setItem('token', 'token');
      window.localStorage.setItem('id', result.collabId);
      return true;
    }
    return false;
  }

  //Faz a requisição de Cadastro
  async createAccount(account: any) {
    const result = await this.http.post<any>('http://localhost:3000/auth/signup', account).toPromise();
    return result;
  }

}
