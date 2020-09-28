import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallecampanaPageRoutingModule } from './detallecampana-routing.module';

import { DetallecampanaPage } from './detallecampana.page';
import { ModalPage } from '../../../generico/modal/modal.page';
import { ModalPageModule } from '../../../generico/modal/modal.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  entryComponents:[
    ModalPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallecampanaPageRoutingModule,
    ModalPageModule,
    HttpClientModule
  ],
  declarations: [DetallecampanaPage]
})
export class DetallecampanaPageModule {}
