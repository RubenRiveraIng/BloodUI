import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../../../generico/modal/modal.page';
import { UsuarioService } from '../../../../service/Usuario.service';
import { loader } from '../../../generico/loader';
@Component({
  selector: 'app-contrasena',
  templateUrl: './contrasena.page.html',
  styleUrls: ['./contrasena.page.scss'],
  providers: [UsuarioService, loader]
})
export class ContrasenaPage implements OnInit {


  private _usuarioService: UsuarioService;
  public _formUpdate: FormGroup;
  private _msgModal: string;
  private _iconModal: string;
  private _redirectModal: string;
  private _titleModal: string;
  public _ncontrasena: string;
  public _rncontrasena: string;
  private _loader: loader;
  constructor(usuario: UsuarioService, formBuilder: FormBuilder, private modalCtrl: ModalController, private loader: loader) {
    this._usuarioService = usuario;
    this._loader = loader;
    this._formUpdate = formBuilder.group({
      _ncontrasena: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])),
      _rncontrasena: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])),
    });

  }

  ngOnInit() {
  }

  public updatePassword() {
    if (this._formUpdate.valid) {
      this._loader.showLoader();
      console.log(this._ncontrasena);
      console.log(this._rncontrasena);
      if (this._ncontrasena == this._rncontrasena) {
        this._usuarioService.updatePassword(this._ncontrasena).subscribe(data => {

          this._loader.hideLoader();
          this._iconModal = "assets/img/aprobar.png";
          this._msgModal = "Has actualizado correctamente tus datos";
          this._titleModal = "Enhorabuena!";
          this._redirectModal = null;
          this.openModal();
        });
      }
      else {
        this._loader.hideLoader();
        this._iconModal = "assets/img/maleta.png";
        this._msgModal = "Las contraseñas no coinciden";
        this._titleModal = "Upss!";
        this._redirectModal = null;
        this.openModal();
      }
    } else {
      this._iconModal = "assets/img/maleta.png";
      this._msgModal = "Recuerda que todos los campos son obligatorios";
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
