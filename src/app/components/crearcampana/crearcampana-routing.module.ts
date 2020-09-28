import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearcampanaPage } from './crearcampana.page';

const routes: Routes = [
  {
    path: '',
    component: CrearcampanaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearcampanaPageRoutingModule {}
