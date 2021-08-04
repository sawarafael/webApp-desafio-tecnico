import { Component, OnInit } from '@angular/core';
import { Perfil } from '../shared/perfil';
import { PerfilService } from '../shared/perfil.service';

@Component({
  selector: 'app-perfil-lista',
  templateUrl: './perfil-lista.component.html',
  styleUrls: ['./perfil-lista.component.css']
})
export class PerfilListaComponent implements OnInit {

  perfis: Perfil[]
  resultados: []

  constructor(private PerfilService: PerfilService) {
    this.perfis = [],
    this.resultados = []
   }

  ngOnInit(): void {
    this.PerfilService.list()
      .subscribe(dados => { this.resultados = dados.collabFilter })
  }


 


}
