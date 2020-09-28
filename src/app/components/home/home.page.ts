import { Component, OnInit } from '@angular/core';
import { TipoDocumentoService } from '../../service/TipoDocumento.service';
import { UsuarioService } from '../../service/Usuario.service';
import { TipoDocumento } from '../../model/TipoDocumento';
import { Usuario } from '../../model/Usuario';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ModalPage } from '../generico/modal/modal.page';
import { ModalController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';
import { loader } from '../generico/loader';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [TipoDocumentoService, UsuarioService, loader]
})
export class HomePage implements OnInit {

  private _tipoDocumentoService: TipoDocumentoService;
  private _usuarioService: UsuarioService;
  private _lstTipoDocumento: TipoDocumento;
  public _tipoDocumento: string;
  private _usuario: Usuario;
  public _formlogin: FormGroup;
  private _msgModal: string;
  private _iconModal: string;
  private _redirectModal: string;
  private _titleModal: string;
  public pushes: any = [];
  private _loader: loader;
  constructor(tipoDocumento: TipoDocumentoService, usuario: UsuarioService, formBuilder: FormBuilder, private modalCtrl: ModalController, private router: Router,
    private fcm: FCM, public plt: Platform, private loader: loader) {
    this._loader = loader;
    this._usuarioService = usuario;
    this._usuario = new Usuario();
    this._tipoDocumentoService = tipoDocumento;
    this._formlogin = formBuilder.group({
      _tipoDocumento: new FormControl('', Validators.compose([
        Validators.required
      ])),
      _numeroDocumento: new FormControl('', Validators.compose([
        Validators.required
      ])),
      _password: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
    this.plt.ready()
      .then(() => {
        this.fcm.subscribeToTopic('bloodBogota');

        this.fcm.getToken().then(token => {
        });

        this.fcm.onNotification().subscribe(data => {
          if (data.wasTapped) {
            console.log("Received in background");
          } else {
            console.log("Received in foreground");
          };
        });

        this.fcm.onTokenRefresh().subscribe(token => {
        });

        this.fcm.hasPermission().then(hasPermission => {
          if (hasPermission) {
            console.log("Has permission!");
          }
        })

        this.fcm.clearAllNotifications();


      })
  }
  ngOnInit (){
    this._loader.showHideAutoLoader();
    this.loadTipoDocumento();
  }
  public singUp() {
    if (this._formlogin.valid) {
      this._usuario.IdTipoDocumento = parseInt(this._tipoDocumento);
      this._usuarioService.validateUser(this._usuario).subscribe(data => {
        if (data == "") {
          this._iconModal = "assets/img/maleta.png";
          this._msgModal = "Usuario y/o contraseña incorrectos";
          this._titleModal = "Upss!";
          this._redirectModal = null;
          this.openModal();
        }
        else {
          window.localStorage.clear();
          window.localStorage.setItem("token", data)
          this.router.navigate(['menu'])
        }
      });
    } else {
      this._iconModal = "assets/img/maleta.png";
      this._msgModal = "Recuerde, todos los campos son obligatorios";
      this._titleModal = "Upss!";
      this._redirectModal = null;
      this.openModal();
    }
  }
  private loadTipoDocumento() {
    this._tipoDocumentoService.getAll().subscribe(data => {
      this._lstTipoDocumento = data;
    });
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
