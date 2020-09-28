import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearsolicitudPageRoutingModule } from './crearsolicitud-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { CrearsolicitudPage } from './crearsolicitud.page';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearsolicitudPageRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [CrearsolicitudPage]
})
export class CrearsolicitudPageModule {}
