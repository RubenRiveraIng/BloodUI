import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CampanasdonacionPageRoutingModule } from './campanasdonacion-routing.module';

import { CampanasdonacionPage } from './campanasdonacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CampanasdonacionPageRoutingModule
  ],
  declarations: [CampanasdonacionPage]
})
export class CampanasdonacionPageModule {}
