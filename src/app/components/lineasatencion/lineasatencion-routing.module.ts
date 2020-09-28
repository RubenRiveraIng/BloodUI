import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LineasatencionPage } from './lineasatencion.page';

const routes: Routes = [
  {
    path: '',
    component: LineasatencionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LineasatencionPageRoutingModule {}
