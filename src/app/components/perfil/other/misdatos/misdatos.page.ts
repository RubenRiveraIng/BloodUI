import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../../../../service/Usuario.service';
import {Usuario} from '../../../../model/Usuario';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../../../generico/modal/modal.page';
import { loader } from '../../../generico/loader';
@Component({
  selector: 'app-misdatos',
  templateUrl: './misdatos.page.html',
  styleUrls: ['./misdatos.page.scss'],
  providers:[UsuarioService,loader]
})
export class MisdatosPage implements OnInit {
  
  private _usuarioService: UsuarioService;
  private _usuario: Usuario;
  public _formUpdate: FormGroup;
  private _msgModal:string;
  private _iconModal:string;
  private _redirectModal:string;
  private _titleModal:string;
  private _loader: loader;

  constructor( usuario: UsuarioService, formBuilder: FormBuilder, private modalCtrl: ModalController,private loader: loader) { 
    this._loader = loader;
    this._loader.showLoader();
    this._usuarioService =usuario;
    this._usuario = new Usuario();
    this.loadDatUser();
    this._formUpdate = formBuilder.group({
      _nombres: new FormControl('', Validators.compose([
        Validators.required
      ])),
      _papellido: new FormControl('', Validators.compose([
        Validators.required
      ])),
      _sapellido: new FormControl('', Validators.compose([
        Validators.required
      ])),
      _email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      _peso: new FormControl('', Validators.compose([
        Validators.required
      ])),
      _fecha : new FormControl('', Validators.compose([
        Validators.required,

      ])),
    });
  }

  ngOnInit() {
  }


  public updateUsuario() {
    
    if (this._formUpdate.valid) {
      this._loader.showLoader();
        this._usuarioService.updateUser(this._usuario).subscribe(data => {
        if(parseInt(data))
        {
          this._loader.hideLoader();
          this._iconModal="assets/img/aprobar.png";
          this._msgModal="Has actualizado correctamente tus datos";
          this._titleModal="Enhorabuena!";
          this._redirectModal=null;
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

  private loadDatUser(){
    this._usuarioService.getUserById().subscribe(data =>{
      this._usuario =data;
      this._loader.hideLoader();
    })
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
