import { Component, OnInit } from '@angular/core';
import { Perfil } from '../shared/perfil';
import { PerfilService } from '../shared/perfil.service';

@Component({
  selector: 'app-perfil-lista',
  templateUrl: './perfil-lista.component.html',
  styleUrls: ['./perfil-lista.component.css']
})
export class PerfilListaComponent implements OnInit {

  perfis: Perfil[];
  public queryField: string;

  constructor(private PerfilService: PerfilService) {  }

  ngOnInit(): void {
    this.onRefresh();
  }

  onRefresh() {
    this.PerfilService.list()
          .subscribe(dados => { 
            this.perfis = dados.collabFilter; console.log(this.perfis)
          })       
  }

  onSearch() {
    console.log(this.queryField)
  }



 


}
