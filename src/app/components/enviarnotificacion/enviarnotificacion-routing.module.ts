import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnviarnotificacionPage } from './enviarnotificacion.page';

const routes: Routes = [
  {
    path: '',
    component: EnviarnotificacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnviarnotificacionPageRoutingModule {}
