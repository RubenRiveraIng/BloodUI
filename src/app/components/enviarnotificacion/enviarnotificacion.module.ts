import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { EnviarnotificacionPageRoutingModule } from './enviarnotificacion-routing.module';

import { EnviarnotificacionPage } from './enviarnotificacion.page';
import { ModalPageModule } from '../generico/modal/modal.module';
import { ModalPage } from '../generico/modal/modal.page';

@NgModule({
  entryComponents:[
    ModalPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnviarnotificacionPageRoutingModule,
    HttpClientModule,
    ModalPageModule,
    ReactiveFormsModule
  ],
  declarations: [EnviarnotificacionPage]
})
export class EnviarnotificacionPageModule {}
