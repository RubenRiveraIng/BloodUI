import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesolicitudPageRoutingModule } from './detallesolicitud-routing.module';

import { DetallesolicitudPage } from './detallesolicitud.page';

import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesolicitudPageRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  declarations: [DetallesolicitudPage]
})
export class DetallesolicitudPageModule {}
