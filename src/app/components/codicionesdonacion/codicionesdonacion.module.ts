import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodicionesdonacionPageRoutingModule } from './codicionesdonacion-routing.module';

import { CodicionesdonacionPage } from './codicionesdonacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodicionesdonacionPageRoutingModule
  ],
  declarations: [CodicionesdonacionPage]
})
export class CodicionesdonacionPageModule {}
