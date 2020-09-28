import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapacampanasPage } from './mapacampanas.page';

const routes: Routes = [
  {
    path: '',
    component: MapacampanasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapacampanasPageRoutingModule {}
