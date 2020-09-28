import { Component } from '@angular/core';
import { TipoDocumentoService } from '../../service/TipoDocumento.service';
import { UsuarioService } from '../../service/Usuario.service';
import { TipoDocumento } from '../../model/TipoDocumento';
import { from } from 'rxjs';
import { Usuario } from '../../model/Usuario';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ModalPage } from '../generico/modal/modal.page';
import { ModalController } from '@ionic/angular';
import { loader } from '../generico/loader';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: 'forgot-password.page.html',
  styleUrls: ['forgot-password.page.scss'],
  providers: [TipoDocumentoService, UsuarioService,loader]
})
export class ForgotPasswordPage {

  private _tipoDocumentoService: TipoDocumentoService;
  private _lstTipoDocumento: TipoDocumento;
  private _usuarioService: UsuarioService;
  public _tipoDocumento: string;
  private _usuario: Usuario;
  public _formForgot: FormGroup;
  private _msgModal:string;
  private _iconModal:string;
  private _redirectModal:string;
  private _titleModal:string;
  private _loader: loader;

  constructor(tipoDocumento: TipoDocumentoService, usuario: UsuarioService, formBuilder: FormBuilder,private modalCtrl: ModalController,private loader: loader) {
    this._loader = loader;
    this._loader.showLoader();
    this.loadTipoDocumento(tipoDocumento);
    this._usuarioService = usuario;
    this._usuario = new Usuario();
    this._formForgot = formBuilder.group({
      _tipoDocumento: new FormControl('', Validators.compose([
        Validators.required
      ])),
      _numeroDocumento: new FormControl('', Validators.compose([
        Validators.required
      ]))
    })
  }
  public sendRecoveryPassword() {
    if (this._formForgot.valid) {
      this._loader.showLoader();
      this._usuario.IdTipoDocumento = parseInt(this._tipoDocumento);
      this._usuarioService.resetPassword(this._usuario).subscribe(data => {
        this._loader.hideLoader();
        if(data){
          this._iconModal="assets/img/aprobar.png";
          this._titleModal="Enhorabuena!";
          this._redirectModal="home";
          this._msgModal="Si los datos ingresados son correctos te enviaremos un correo con una contraseña nueva"
          this.openModal();

        }
        else{
          this._iconModal="assets/img/maleta.png";
          this._titleModal="Upss!";
          this._redirectModal=null;
          this._msgModal="Ha ocurrido un error duante el proceso de validación, por favor verifique los datos ingresados";
          this.openModal();
        }
      })
    } else {
      this._iconModal="assets/img/maleta.png";
      this._titleModal="Upss!";
      this._redirectModal=null;
      this._msgModal="Recuerde, todos los campos son obligatorios ";
      this.openModal();
    }
  }
  private loadTipoDocumento(tipoDocumento: TipoDocumentoService) {
    this._tipoDocumentoService = tipoDocumento;
    this._tipoDocumentoService.getAll().subscribe(data => {
      this._lstTipoDocumento = data;
      this._loader.hideLoader();
    });
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
