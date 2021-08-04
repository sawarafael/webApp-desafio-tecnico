import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilListaComponent } from './perfil/perfil-lista/perfil-lista.component';
import { NovoPerfilComponent } from './perfil/novo-perfil/novo-perfil.component';

const routes: Routes = [
  {
    path: '',
    component: PerfilListaComponent
  },
  {
    path: 'new',
    component: NovoPerfilComponent
  },
  {
    path: 'edit/:id',
    component: NovoPerfilComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
