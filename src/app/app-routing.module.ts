import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    loadChildren: () => import('./components/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./components/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./components/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'lineasatencion',
    loadChildren: () => import('./components/lineasatencion/lineasatencion.module').then( m => m.LineasatencionPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./components/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./components/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'codicionesdonacion',
    loadChildren: () => import('./components/codicionesdonacion/codicionesdonacion.module').then( m => m.CodicionesdonacionPageModule)
  },
  {
    path: 'campanasdonacion',
    loadChildren: () => import('./components/campanasdonacion/campanasdonacion.module').then( m => m.CampanasdonacionPageModule)
  },
  {
    path: 'clinicasbancos',
    loadChildren: () => import('./components/clinicasbancos/clinicasbancos.module').then( m => m.ClinicasbancosPageModule)
  },
  {
    path: 'solicitarrecoleccion',
    loadChildren: () => import('./components/solicitarrecoleccion/solicitarrecoleccion.module').then( m => m.SolicitarrecoleccionPageModule)
  },
  {
    path: 'enviarnotificacion',
    loadChildren: () => import('./components/enviarnotificacion/enviarnotificacion.module').then( m => m.EnviarnotificacionPageModule)
  },
  {
    path: 'crearcampana',
    loadChildren: () => import('./components/crearcampana/crearcampana.module').then( m => m.CrearcampanaPageModule)
  },
  {
    path: 'gestionarsolicitud',
    loadChildren: () => import('./components/gestionsolicitudes/gestionsolicitudes.module').then( m => m.GestionsolicitudesPageModule)
  },
  {
    path: 'detallesolicitud',
    loadChildren: () => import('./components/gestionsolicitudes/other/detallesolicitud/detallesolicitud.module').then( m => m.DetallesolicitudPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
