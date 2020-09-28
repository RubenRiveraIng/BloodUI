import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClinicasbancosPage } from './clinicasbancos.page';

const routes: Routes = [
  {
    path: '',
    component: ClinicasbancosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClinicasbancosPageRoutingModule {}
