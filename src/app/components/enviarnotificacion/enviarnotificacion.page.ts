import { Component, OnInit } from '@angular/core';
import { SendFCMNotificationService } from '../../service/SendFCMNotification.service';
import { loader } from '../generico/loader';
import { ModalPage } from '../generico/modal/modal.page';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-enviarnotificacion',
  templateUrl: './enviarnotificacion.page.html',
  styleUrls: ['./enviarnotificacion.page.scss'],
  providers: [SendFCMNotificationService, loader]
})
export class EnviarnotificacionPage implements OnInit {

  private _sendNotification: SendFCMNotificationService;
  public _titulo: string;
  public _mensaje: string;
  private _loader: loader;
  private _msgModal: string;
  private _iconModal: string;
  private _redirectModal: string;
  private _titleModal: string;
  public _formNotificacion: FormGroup;
  private continue: boolean;
  constructor(sendNotificaion: SendFCMNotificationService, private loader: loader, private modalCtrl: ModalController, formBuilder: FormBuilder) {
    this._sendNotification = sendNotificaion;
    this._loader = loader;
    this._formNotificacion = formBuilder.group({
      _titulo: new FormControl('', Validators.compose([
        Validators.required
      ])),
      _mensaje: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });

  }

  ngOnInit() {
  }
  public sendNotificacion() {
    if (this._formNotificacion.valid) {
      this.continue =true;
      if(this._titulo.length >20 || this._mensaje.length > 100)
      {
        this.continue =false;
      }
    if(this.continue)
    {
      this._loader.showLoader();
      this._sendNotification.sendNotification(this._mensaje, this._titulo).subscribe(data => {
        console.log(data);
        this._loader.hideLoader();
        this._iconModal = "assets/img/aprobar.png";
        this._msgModal = "Notificación enviada correctamente";
        this._titleModal = "";
        this._redirectModal = null;
        this.openModal();
      })
    }
    else{
      this._iconModal = "assets/img/maleta.png";
      this._msgModal = "Recuerde, el titulo puede ser maximo de 20 Caracteres y el mensaje maximo de 100 caracteres";
      this._titleModal = "Upss!";
      this._redirectModal = null;
      this.openModal();
    }
    } else {
      this._iconModal = "assets/img/maleta.png";
      this._msgModal = "Recuerde, todos los campos son obligatorios";
      this._titleModal = "Upss!";
      this._redirectModal = null;
      this.openModal();
    }
  }
  private async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: {
        _mensaje: this._msgModal,
        _icon: this._iconModal,
        _titleModal: this._titleModal,
        _redirectAfterClose: this._redirectModal
      }
    });
    await modal.present();
  }

}
