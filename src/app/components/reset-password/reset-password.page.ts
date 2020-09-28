import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../generico/modal/modal.page';
import {msgExcepciones} from '../generico/msgExcepciones';
@Component({
  selector: 'app-reset-pass',
  templateUrl: 'reset-password.page.html',
  styleUrls: ['reset-password.page.scss'],
})
export class ResetPasswordPage {

  public _formReset: FormGroup;
  public _password:string;
  private _msgModal:string;
  private _iconModal:string;
  private _redirectModal:string;
  private _titleModal:string;
  private _msgExcepciones:msgExcepciones;
  constructor(formBuilder: FormBuilder,private modalCtrl: ModalController,msgExcepciones:msgExcepciones) {
    this._formReset = formBuilder.group({
      _password: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
    this._msgExcepciones=msgExcepciones;
  }
  public resetPassword(){
    if (this._formReset.valid) {
     console.log("Ok");
    } else {
      this._iconModal="assets/img/maleta.png";
      this._msgModal=this._msgExcepciones.msgErrorCampos;
      this._titleModal="Upss!";
      this._redirectModal=null;
      this.openModal();
    }
  }
  private async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: {
        _mensaje: this._msgModal,
        _icon: this._iconModal,
        _titleModal:this._titleModal,
        _redirectAfterClose:this._redirectModal
      }
    });
    await modal.present();
  }

}
