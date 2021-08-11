import { Component, OnInit } from '@angular/core';
import { Perfil } from '../shared/perfil';
import { PerfilService } from '../shared/perfil.service';

@Component({
  selector: 'app-perfil-lista',
  templateUrl: './perfil-lista.component.html',
  styleUrls: ['./perfil-lista.component.css']
})
export class PerfilListaComponent implements OnInit {

  //@ts-ignore
  //Variável que guarda os perfis
  perfis: Perfil[];
  //Variável que irá resgatar o valor no campo de pesquisa
  //@ts-ignore
  public queryField: string;
  
  //Array para trabalhar no select
  departaments: any = ['Financeiro', 'Administração',
   'Direção', 'Operacional', 'Infraestrutura', 'Desenvolvimento'];

  //Array para trabalhar no select
  groups: any = ['CLT', 'PJ', 'Freelancer', 'Parceiro']

  constructor(private PerfilService: PerfilService) {  }

  ngOnInit(): void {
    this.onRefresh();
  }

  //Função para a cada atualização ou normalmente, ele retorne a lista de perfis de
  // colaboradores
  onRefresh() {
    this.PerfilService.list()
          .subscribe(dados => { 
            this.perfis = dados.collabFilter;
             console.log(this.perfis)
          })       
  }

  onSearch() {
    console.log(this.queryField)
  }



 


}
