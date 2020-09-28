import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ContrasenaPageRoutingModule } from './contrasena-routing.module';
import { ContrasenaPage } from './contrasena.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalPage } from '../../../generico/modal/modal.page';
import { ModalPageModule } from '../../../generico/modal/modal.module';

@NgModule({
  entryComponents:[
    ModalPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContrasenaPageRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    ModalPageModule,
    HttpClientModule
  ],
  declarations: [ContrasenaPage]
})
export class ContrasenaPageModule { }
