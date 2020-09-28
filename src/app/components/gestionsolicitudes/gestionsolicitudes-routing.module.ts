import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionsolicitudesPage } from './gestionsolicitudes.page';

const routes: Routes = [
  {
    path: '',
    component: GestionsolicitudesPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionsolicitudesPageRoutingModule {}
