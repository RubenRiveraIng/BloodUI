import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LineasatencionPageRoutingModule } from './lineasatencion-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LineasatencionPage } from './lineasatencion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LineasatencionPageRoutingModule,
    HttpClientModule
  ],
  declarations: [LineasatencionPage]
})
export class LineasatencionPageModule {}
