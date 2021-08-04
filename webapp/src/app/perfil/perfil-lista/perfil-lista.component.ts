import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Perfil } from '../shared/perfil';
import { PerfilService } from '../shared/perfil.service';

@Component({
  selector: 'app-perfil-lista',
  templateUrl: './perfil-lista.component.html',
  styleUrls: ['./perfil-lista.component.css']
})
export class PerfilListaComponent implements OnInit {

  perfis: Perfil[]

  constructor(private PerfilService: PerfilService) {
    this.perfis = []
   }

  ngOnInit(): void {
    this.onRefresh();
  }

  onRefresh() {
    this.PerfilService.list()
          .subscribe(dados => { 
            this.perfis = dados.collabFilter; console.log(this.perfis)
          })       
  }



 


}
