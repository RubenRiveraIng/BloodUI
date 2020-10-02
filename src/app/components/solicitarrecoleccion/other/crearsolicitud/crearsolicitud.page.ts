import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Usuario } from '../../../../model/Usuario';
import { UsuarioService } from '../../../../service/Usuario.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ModalPage } from '../../../generico/modal/modal.page';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { loader } from '../../../generico/loader';
import { Platform } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  LatLng
} from '@ionic-native/google-maps/ngx';
import { SolicitudRecoleccionService } from '../../../../service/SolicitudRecoleccion.service';
import { SolicitudRecoleccion } from '../../../../model/SolicitudRecoleccion'
import { JoinSolicitud } from '../../../../model/JoinSolicitud';
import * as moment from 'moment';

@Component({
  selector: 'app-crearsolicitud',
  templateUrl: './crearsolicitud.page.html',
  styleUrls: ['./crearsolicitud.page.scss'],
  providers: [UsuarioService, loader, GoogleMaps, Geolocation, SolicitudRecoleccionService]
})
export class CrearsolicitudPage implements OnInit {

  private _usuarioService: UsuarioService;
  private _lstUsuario: Array<Usuario>;
  public _formSolicitud: FormGroup;
  private _msgModal: string;
  private _iconModal: string;
  private _redirectModal: string;
  private _titleModal: string;
  private _loader: loader;
  public _entidad: number;
  public _fechaRecoleccion: any;
  public _direccion: string;
  private _solicitudRecoleccion: SolicitudRecoleccion;
  private LNG: any;
  private LTD: any;
  public _srData: Array<JoinSolicitud>;
  map: GoogleMap;
  @ViewChild('map_canvas') element: ElementRef;

  constructor(usuario: UsuarioService, formBuilder: FormBuilder, private modalCtrl: ModalController, private router: Router, private loader: loader,
    public googleMaps: GoogleMaps, public platform: Platform,
    public geolocation: Geolocation, private _srService: SolicitudRecoleccionService) {
    this._loader = loader;
    this._loader.showLoader();
    this._usuarioService = usuario;
    this._lstUsuario = new Array<Usuario>();
    this.loadEntidades();
    this._formSolicitud = formBuilder.group({
      _tipoEntidad: new FormControl('', Validators.compose([
        Validators.required
      ])),
      _fecha: new FormControl('', Validators.compose([
        Validators.required
      ])),
      _direccion: new FormControl('', Validators.compose([
        Validators.required,
      ]))
    });
  }

  ngOnInit() {
    this.validaUltimaSolicitud();
  }

  ionViewDidEnter() {
    console.log("call ionViewDidLoad");
    this.platform.ready().then(() => {
      this.initMap();
      this.map.trigger('resize');
    });

  }
  private validaUltimaSolicitud() {
    this._srService.getSolicitudesPorUsuarioRegular().subscribe(data => {
      this._srData = data;
      var days = moment().diff(this._srData[(this._srData.length - 1)].Fecha_Recoleccion, 'days');
      console.log(days);

      if (days < 90) {
        this._loader.hideLoader();
        this._iconModal = "assets/img/maleta.png";
        this._msgModal = "Para poder realizar una nueva solicitud , deben haber transcurrido por lo menos 90 dias desde la ultima solicitud";
        this._titleModal = "Upss!";
        this._redirectModal = "menu";
        this.openModal();
      }
    })
  }
  private loadEntidades() {
    this._usuarioService.getEntidades().subscribe(data => {
      this._lstUsuario = data;
    })
  }
  public getEntidad($event) {
    this._entidad = $event.detail.value;
  }
  public createSolicitud() {
    if (this._formSolicitud.valid) {
      this._solicitudRecoleccion = new SolicitudRecoleccion();
      this._solicitudRecoleccion.Direccion_Donde = this._direccion;
      this._solicitudRecoleccion.Direccion_Donde = this._direccion;
      this._solicitudRecoleccion.LGN_Donde = this.LNG;
      this._solicitudRecoleccion.LTD_Donde = this.LTD;
      this._solicitudRecoleccion.IdUsuario_Recolecta = this._entidad;
      this._solicitudRecoleccion.Fecha_Recoleccion = this._fechaRecoleccion;
      var days = moment(this._fechaRecoleccion.toString().split('T')[0]).diff(moment(), 'days');
      console.log(days);
      if (days >= 0) {
        this._loader.showHideAutoLoader();
        this._srService.createSolicitud(this._solicitudRecoleccion).subscribe(data => {
          if (parseInt(data)) {
            this._iconModal = "assets/img/aprobar.png";
            this._msgModal = "Se ha creado tu solicitud correctamente";
            this._titleModal = "Enhorabuena!";
            this._redirectModal = "menu";
            this.openModal();
          }
          else { }
        });
      }
      else { 
        this._iconModal = "assets/img/maleta.png";
        this._msgModal = "La fecha de visita debe ser mayor a la fecha actual ";
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

  initMap() {
    this.map = GoogleMaps.create(this.element.nativeElement);
    this.map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {

      let options = {
        enableHighAccuracy: false,
        timeout: 25000
      };
      let ltd;
      let lng;
      this.geolocation.getCurrentPosition(options).then((position) => {

        ltd = position.coords.latitude;
        lng = position.coords.longitude;
        this.LNG = lng;
        this.LTD = ltd;
        let coordinates: LatLng = new LatLng(ltd, lng);
        this.map.setCameraZoom(12);
        this.map.setCameraTarget(coordinates);
        let markerOptions: MarkerOptions = {
          position: coordinates,
          icon: 'blue',
          draggable: true,
          animation: 'DROP'
        };
        const marker = this.map.addMarker(markerOptions)
          .then((marker: Marker) => {
            marker.showInfoWindow();
            marker.addEventListener(GoogleMapsEvent.MARKER_DRAG_START).subscribe(data => {

            })
            marker.addEventListener(GoogleMapsEvent.MARKER_DRAG_END).subscribe(
              data => {
                console.log(marker.getPosition());
                this.LNG = marker.getPosition().lng;
                this.LTD = marker.getPosition().lat;
              });
          });

        this._loader.hideLoader();
      }).catch((error) => {
        this._loader.hideLoader();
        this._iconModal = "assets/img/ubicacion.png";
        this._msgModal = "Ha ocurrido un problema, por favor verifica que tu GPS este encendido y que la aplicación tenga los permisos necesarios";
        this._titleModal = "Upss!";
        this._redirectModal = "menu";
        this.openModal();
      });
    })
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
