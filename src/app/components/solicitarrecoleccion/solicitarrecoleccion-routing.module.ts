import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitarrecoleccionPage } from './solicitarrecoleccion.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitarrecoleccionPage,
    children:[
      {
        path: 'historialsolicitud',
        loadChildren: () => import('./other/historialsolicitud/historialsolicitud.module').then( m => m.HistorialsolicitudPageModule)
      },
      {
        path: 'crearsolicitud',
        loadChildren: () => import('./other/crearsolicitud/crearsolicitud.module').then( m => m.CrearsolicitudPageModule)
      },
      {
        path: '',
        redirectTo: 'historialsolicitud',
        pathMatch: 'full'
      }]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitarrecoleccionPageRoutingModule {}
