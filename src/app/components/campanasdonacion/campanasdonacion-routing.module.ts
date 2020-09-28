import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampanasdonacionPage } from './campanasdonacion.page';

const routes: Routes = [
  {
    path: '',
    component: CampanasdonacionPage,
    children: [
      {
        path: 'listacampanas',
        loadChildren: () => import('./other/listacampanas/listacampanas.module').then(m => m.ListacampanasPageModule)
      },
      {
        path: 'mapacampanas',
        loadChildren: () => import('./other/mapacampanas/mapacampanas.module').then(m => m.MapacampanasPageModule)
      },
      {
        path: 'detallecampana',
        loadChildren: () => import('./other/detallecampana/detallecampana.module').then( m => m.DetallecampanaPageModule)
      },
      {
        path: '',
        redirectTo: 'listacampanas',
        pathMatch: 'full'
      }]
    },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampanasdonacionPageRoutingModule {}
