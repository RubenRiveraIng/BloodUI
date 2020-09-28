import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
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
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../../../generico/modal/modal.page';
import { CamapanasDonacionService } from '../../../../service/CampanasDonacion.service';
import { CampanasDonacion } from '../../../../model/CampanasDonacion';
import {loader} from '../../../generico/loader';

@Component({
  selector: 'app-mapacampanas',
  templateUrl: './mapacampanas.page.html',
  styleUrls: ['./mapacampanas.page.scss'],
  providers: [GoogleMaps, Geolocation, CamapanasDonacionService,loader]
})
export class MapacampanasPage{

  @ViewChild('map_canvas') element: ElementRef;
  map: GoogleMap;
  public lng: any;
  public ltd: any;
  private _msgModal: string;
  private _iconModal: string;
  private _redirectModal: string;
  private _titleModal: string;
  private _cdService: CamapanasDonacionService;
  private _lstcbs: Array<CampanasDonacion>;
  private _loader :loader;
  constructor(
    public googleMaps: GoogleMaps, public platform: Platform,
    public geolocation: Geolocation, private modalCtrl: ModalController,
    private cdService: CamapanasDonacionService,
    private loader:loader
  ) {
    this._loader=loader;
    this._loader.showLoader();
    this._cdService = cdService;
    this._lstcbs = new Array<CampanasDonacion>();
  }

  ionViewDidEnter() {
    console.log("call ionViewDidLoad");
    this.platform.ready().then(() => {
      this.initMap();
      this.map.trigger('resize');
      this.getCBSPoint();
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
        let coordinates: LatLng = new LatLng(ltd, lng);
        this.map.setCameraZoom(12);
        this.map.setCameraTarget(coordinates);
        // let ps = {
        //   target: coordinates,
        //   zoom: 25
        // };
        // this.map.animateCamera(ps);
        let markerOptions: MarkerOptions = {
          position: coordinates,
          icon: 'blue'
          //icon: "../../assets/images/icons8-Marker-64.png",
          // title: 'Greensboro, NC'
        };
        const marker = this.map.addMarker(markerOptions)
          .then((marker: Marker) => {
            marker.showInfoWindow();
          });
        this.map.addCircle({
          center: coordinates,
          radius: 2000,
          strokeColor: "#f24e49",
          strokeWidth: 3,
          fillColor: "#f59b98"
          // map: this.map,
          // radius: 8047,    // 5 miles in metres
          // fillColor: '#AA0000'
        });

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
  private getCBSPoint() {
    this._cdService.getCampanasDonacion().subscribe(data => {
      this._lstcbs = data;
      console.log(this._lstcbs);
      this._lstcbs.forEach(item => {
        let coordinates: LatLng = new LatLng(Number(item.LTD), Number(item.LNG));
        let markerOptions: MarkerOptions = {
          position: coordinates,
          icon: 'red',
          title: item.Nombre,
          animation: 'DROP'
        };
        const marker = this.map.addMarker(markerOptions)
          .then((marker: Marker) => {
            marker.one(GoogleMapsEvent.MARKER_CLICK).then(() => {
            })
          });
      });
      this._loader.hideLoader();
    })
  }
}
