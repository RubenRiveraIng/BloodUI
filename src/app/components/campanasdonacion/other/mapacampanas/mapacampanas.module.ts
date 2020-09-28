import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapacampanasPageRoutingModule } from './mapacampanas-routing.module';

import { MapacampanasPage } from './mapacampanas.page';
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
    MapacampanasPageRoutingModule,
    ModalPageModule,
    HttpClientModule
  ],
  declarations: [MapacampanasPage]
})
export class MapacampanasPageModule {}
