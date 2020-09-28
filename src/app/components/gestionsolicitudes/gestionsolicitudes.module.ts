import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionsolicitudesPageRoutingModule } from './gestionsolicitudes-routing.module';

import { GestionsolicitudesPage } from './gestionsolicitudes.page';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionsolicitudesPageRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  declarations: [GestionsolicitudesPage]
})
export class GestionsolicitudesPageModule {}
