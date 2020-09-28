import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordPage } from './reset-password.page';
import { ModalPage } from '../generico/modal/modal.page';
import { ResetPasswordPageRoutingModule } from './reset-password-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { ModalPageModule } from '../generico/modal/modal.module';
@NgModule({
  entryComponents:[
    ModalPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetPasswordPageRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    ModalPageModule
  ],
  declarations: [ResetPasswordPage]
})
export class ResetPasswordPageModule {}
