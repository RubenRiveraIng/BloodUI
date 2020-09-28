import { Component } from '@angular/core';
import { TipoDocumentoService } from '../../service/TipoDocumento.service';
import { TipoSangreService } from '../../service/TipoSangre.service';
import { UsuarioService } from '../../service/Usuario.service';
import { TipoDocumento } from '../../model/TipoDocumento';
import { TipoSangre } from '../../model/TipoSangre';
import { Usuario } from '../../model/Usuario';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../generico/modal/modal.page';
import { loader } from '../generico/loader';
@Component({
  selector: 'app-registro',
  templateUrl: 'registro.page.html',
  styleUrls: ['registro.page.scss'],
  providers: [TipoDocumentoService, UsuarioService, TipoSangreService,loader]
})
export class RegistroPage {

  public _tipoDocumento: string;
  public _tipoSangre: string;
  private _tipoDocumentoService: TipoDocumentoService;
  private _tipoSangreService: TipoSangreService;
  private _lstTipoDocumento: TipoDocumento;
  private _lstTipoSangre: TipoSangre;
  private _usuarioService: UsuarioService;
  private _usuario: Usuario;
  public _formRegister: FormGroup;
  private _msgModal:string;
  private _iconModal:string;
  private _redirectModal:string;
  private _titleModal:string;
  private _loader: loader;

  constructor(tipoDocumento: TipoDocumentoService, usuario: UsuarioService, tipoSangre: TipoSangreService, formBuilder: FormBuilder, private modalCtrl: ModalController,private loader: loader) {
    this._loader = loader;
    this._loader.showHideAutoLoader();
    this.loadTipoDocumento(tipoDocumento);
    this.loadTipoSangre(tipoSangre);
    this._usuarioService = usuario;
    this._usuario = new Usuario();
    this._formRegister = formBuilder.group({
      _tipoDocumento: new FormControl('', Validators.compose([
        Validators.required
      ])),
      _numeroDocumento: new FormControl('', Validators.compose([
        Validators.required
      ])),
      _nombres: new FormControl('', Validators.compose([
        Validators.required
      ])),
      _papellido: new FormControl('', Validators.compose([
        Validators.required
      ])),
      _sapellido: new FormControl('', Validators.compose([
        Validators.required
      ])),
      _tipoSangre: new FormControl('', Validators.compose([
        Validators.required
      ])),
      _email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      _password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ]))
    });
  }
  public createUsuario() {
    if (this._formRegister.valid) {
      this._usuario.IdTipoDocumento = parseInt(this._tipoDocumento);
      this._usuario.IdTipoSangre = parseInt(this._tipoSangre);
      this._usuarioService.create(this._usuario).subscribe(data => {
        if(parseInt(data))
        {
          this._iconModal="assets/img/aprobar.png";
          this._msgModal=this._usuario.IdTipoDocumento == 3 ?"Nos comunicaremos con tigo para validar tus datos y activar tu cuenta":"Te haz registrado correctamente";
          this._titleModal="Enhorabuena!";
          this._redirectModal="home";
          this.openModal();
        }
        else{}
      });
    } else {
      this._iconModal="assets/img/maleta.png";
      this._msgModal="Recuerda que todos los campos son obligatorios";
      this._titleModal="Upss!";
      this._redirectModal=null;
      this.openModal();
    }

  }
  public getTipoDoc($event) {
    this._tipoDocumento = $event.detail.value;
  }
  public getTipoSan($event) {
    this._tipoSangre = $event.detail.value;
  }
  private loadTipoDocumento(tipoDocumento: TipoDocumentoService) {
    this._tipoDocumentoService = tipoDocumento;
    this._tipoDocumentoService.getAll().subscribe(data => {
      this._lstTipoDocumento = data;
    });
  }
  private loadTipoSangre(tipoSangre: TipoSangreService) {
    this._tipoSangreService = tipoSangre;
    this._tipoSangreService.getAll().subscribe(data => {
      this._lstTipoSangre = data;
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
