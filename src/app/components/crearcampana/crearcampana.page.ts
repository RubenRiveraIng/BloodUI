import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CampanasDonacion } from '../../model/CampanasDonacion';
import { CamapanasDonacionService } from '../../service/CampanasDonacion.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ModalPage } from '../generico/modal/modal.page';
import { ModalController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { loader } from '../generico/loader';
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
import { Platform } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-crearcampana',
  templateUrl: './crearcampana.page.html',
  styleUrls: ['./crearcampana.page.scss'],
  providers: [loader, GoogleMaps, Geolocation, CamapanasDonacionService]
})
export class CrearcampanaPage implements OnInit {

  map: GoogleMap;
  @ViewChild('map_canvas') element: ElementRef;
  public _frmCampana: FormGroup;
  private _msgModal: string;
  private _iconModal: string;
  private _redirectModal: string;
  private _titleModal: string;
  private _loader: loader;
  private LNG: any;
  private LTD: any;
  private _campanaService: CamapanasDonacionService;
  private _campana: CampanasDonacion;

  constructor(formBuilder: FormBuilder, private modalCtrl: ModalController, private loader: loader,
    public googleMaps: GoogleMaps, public platform: Platform,
    public geolocation: Geolocation, private campanaService: CamapanasDonacionService) {
    this._campanaService = campanaService;
    this._loader = loader;
    this._loader.showLoader();
    this._campana = new CampanasDonacion();
    this._frmCampana = formBuilder.group({
      _nombre: new FormControl('', Validators.compose([
        Validators.required
      ])),
      _descripcion: new FormControl('', Validators.compose([
        Validators.required
      ])),
      _direccion: new FormControl('', Validators.compose([
        Validators.required
      ])),
      _fechaInicio: new FormControl('', Validators.compose([
        Validators.required
      ])),
      _fechaFin: new FormControl('', Validators.compose([
        Validators.required
      ])),
      _telefono_1: new FormControl('', Validators.compose([
        Validators.required
      ])),
      _telefono_2: new FormControl('', Validators.compose([
        Validators.required
      ])),
      _email: new FormControl('', Validators.compose([
        Validators.required
      ])),
    });
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    console.log("call ionViewDidLoad");
    this.platform.ready().then(() => {
      this.initMap();
      this.map.trigger('resize');
    });
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
  private createCampana() {
    if (this._frmCampana.valid) {
      this._campana.LNG = this.LNG;
      this._campana.LTD = this.LTD;
      console.log(this._campana);
      var daysFI = moment(this._campana.Fecha_Inicio.toString().split('T')[0]).diff(moment(), 'days');
      var daysFIFF = moment(this._campana.Fecha_Fin.toString().split('T')[0]).diff(this._campana.Fecha_Inicio.toString().split('T')[0], 'days');
      console.log("FI "+daysFI);
      console.log("FIFF "+daysFIFF);
      if (daysFI >= 0) {
        if (daysFIFF >= 0) {
          this._loader.showLoader();
          this._campanaService.createCampana(this._campana).subscribe(data => {
            this._loader.hideLoader();
            if (parseInt(data)) {
              this._iconModal = "assets/img/aprobar.png";
              this._msgModal = "Se ha creado la campaña correctamente";
              this._titleModal = "Enhorabuena!";
              this._redirectModal = "menu";
              this.openModal();
            }
            else { }
          })
        }
        else
        {
          this._iconModal = "assets/img/maleta.png";
          this._msgModal = "La fecha de finalizacion no puede ser menor a la fecha de inicio ";
          this._titleModal = "Upss!";
          this._redirectModal = null;
          this.openModal();
        }
      }
      else {
        this._iconModal = "assets/img/maleta.png";
        this._msgModal = "La fecha de inicio no puede ser menor a la fecha actual ";
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
}
