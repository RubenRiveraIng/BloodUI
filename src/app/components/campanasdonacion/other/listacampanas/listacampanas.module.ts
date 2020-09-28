import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListacampanasPageRoutingModule } from './listacampanas-routing.module';

import { ListacampanasPage } from './listacampanas.page';
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
    ListacampanasPageRoutingModule,
    ModalPageModule,
    HttpClientModule
  ],
  declarations: [ListacampanasPage]
})
export class ListacampanasPageModule {}
