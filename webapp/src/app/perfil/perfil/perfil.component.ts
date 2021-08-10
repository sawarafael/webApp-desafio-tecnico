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
  perfil: Perfil[];
  //@ts-ignore
  public queryField: string;

  constructor(private PerfilService: PerfilService) { }

  ngOnInit(): void {
    this.PerfilService.list()
      .subscribe(dados => {
        console.log(dados)
      })
  }

}
