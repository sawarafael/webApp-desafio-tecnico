import { Component, OnInit } from '@angular/core';
import { Perfil } from '../shared/perfil';
import { PerfilService } from '../shared/perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  //@ts-ignore
  perfil: any;

  constructor(private PerfilService: PerfilService) { }

  ngOnInit(): void {
    this.getData();
  }


  //Recupera os dados do Colaborador
  getData(): void {
    this.PerfilService.perfil()
     .subscribe(dados => {
       const data = dados.data;
       
       console.log(data.Id)
       this.perfil = data
       console.log(this.perfil)

     })
  }

}
