import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { MisdatosPageRoutingModule } from './misdatos-routing.module';
import { MisdatosPage } from './misdatos.page';
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
    MisdatosPageRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    ModalPageModule,
    HttpClientModule
  ],
  declarations: [MisdatosPage]
})
export class MisdatosPageModule {}
