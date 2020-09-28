import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitarrecoleccionPageRoutingModule } from './solicitarrecoleccion-routing.module';

import { SolicitarrecoleccionPage } from './solicitarrecoleccion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitarrecoleccionPageRoutingModule
  ],
  declarations: [SolicitarrecoleccionPage]
})
export class SolicitarrecoleccionPageModule {}
