import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodicionesdonacionPage } from './codicionesdonacion.page';

const routes: Routes = [
  {
    path: '',
    component: CodicionesdonacionPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodicionesdonacionPageRoutingModule {}
