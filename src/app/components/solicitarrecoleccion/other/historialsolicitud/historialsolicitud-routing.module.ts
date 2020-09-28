import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialsolicitudPage } from './historialsolicitud.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialsolicitudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialsolicitudPageRoutingModule {}
