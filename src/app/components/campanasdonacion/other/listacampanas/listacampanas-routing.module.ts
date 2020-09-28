import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListacampanasPage } from './listacampanas.page';

const routes: Routes = [
  {
    path: '',
    component: ListacampanasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListacampanasPageRoutingModule {}
