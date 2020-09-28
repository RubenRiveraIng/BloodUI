import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilPage } from './perfil.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilPage,
    children: [
      {
        path: 'misdatos',
        loadChildren: () => import('./other/misdatos/misdatos.module').then(m => m.MisdatosPageModule)
      },
      {
        path: 'contrasena',
        loadChildren: () => import('./other/contrasena/contrasena.module').then(m => m.ContrasenaPageModule)
      },
      {
        path: '',
        redirectTo: 'misdatos',
        pathMatch: 'full'
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilPageRoutingModule { }
