import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RegistroPage } from './registro.page';
import { HttpClientModule } from '@angular/common/http';
import { RegistroPageRoutingModule } from './registro-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { ModalPage } from '../generico/modal/modal.page';
import { ModalPageModule } from '../generico/modal/modal.module';

@NgModule({
  entryComponents:[
    ModalPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPageRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalPageModule
  ],
  declarations: [RegistroPage]
})
export class RegistroPageModule {}
