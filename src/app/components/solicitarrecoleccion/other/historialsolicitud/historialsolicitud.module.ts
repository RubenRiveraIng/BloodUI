import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialsolicitudPageRoutingModule } from './historialsolicitud-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HistorialsolicitudPage } from './historialsolicitud.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialsolicitudPageRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  declarations: [HistorialsolicitudPage]
})
export class HistorialsolicitudPageModule {}
