import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ClinicasbancosPageRoutingModule } from './clinicasbancos-routing.module';
import { ClinicasbancosPage } from './clinicasbancos.page';
import { ModalPage } from '../generico/modal/modal.page';
import { ModalPageModule } from '../generico/modal/modal.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  entryComponents:[
    ModalPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClinicasbancosPageRoutingModule,
    ModalPageModule,
    HttpClientModule
  ],
  declarations: [ClinicasbancosPage]
})
export class ClinicasbancosPageModule {}
