import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController, Platform } from '@ionic/angular';
import { ModalPage } from '../../../generico/modal/modal.page';
import { CamapanasDonacionService } from '../../../../service/CampanasDonacion.service';
import { CampanasDonacion } from '../../../../model/CampanasDonacion';
import { CallNumber } from '@ionic-native/call-number/ngx';
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
import { loader } from '../../../generico/loader';
@Component({
  selector: 'app-detallecampana',
  templateUrl: './detallecampana.page.html',
  styleUrls: ['./detallecampana.page.scss'],
  providers: [CamapanasDonacionService, GoogleMaps,loader]
})


export class DetallecampanaPage {

  @ViewChild('map_canvas') element: ElementRef;
  map: GoogleMap;
  private id: any;
  private _msgModal: string;
  private _iconModal: string;
  private _redirectModal: string;
  private _titleModal: string;
  private _cdService: CamapanasDonacionService;
  public _lstcbs: Array<CampanasDonacion>;

  public Nombre: string;
  public Descripcion: string;
  public Direccion: string;
  public LNG: string;
  public LTD: string;
  public Fecha_Inicio: string;
  public Fecha_Fin: string;
  public Telefono_1: string;
  public Telefono_2: string;
  public Email: string;
  private _loader: loader;

  constructor(private route: ActivatedRoute, private router: Router,
    private modalCtrl: ModalController,
    private cdService: CamapanasDonacionService,
    private callNumber: CallNumber,
    public googleMaps: GoogleMaps, public platform: Platform, private loader: loader) {

    this._loader = loader;
    this._loader.showLoader();
    this._cdService = cdService;
    this._lstcbs = new Array<CampanasDonacion>();
    this.route.queryParams.subscribe(params => {
      if (params && params.id) {
        console.log(params.id)
        this._cdService.getCampanasDonacionById(params.id).subscribe(data => {
          this._lstcbs = data;
          this.Nombre = this._lstcbs[0].Nombre;
          this.Descripcion = this._lstcbs[0].Descripcion;
          this.Direccion = this._lstcbs[0].Direccion;
          this.LNG = this._lstcbs[0].LNG;
          this.LTD = this._lstcbs[0].LTD;
          this.Fecha_Inicio = this._lstcbs[0].Fecha_Inicio.toString().replace("T", " ");
          this.Fecha_Fin = this._lstcbs[0].Fecha_Fin.toString().replace("T", " ");
          this.Telefono_1 = this._lstcbs[0].Telefono_1;
          this.Telefono_2 = this._lstcbs[0].Telefono_2;
          this.Email = this._lstcbs[0].Email;
          this.platform.ready().then(() => {
            this.initMap();
            this.map.trigger('resize');
          });
        });
      }
    });
  }

  public launchPhone(n: string) {
    this.callNumber.callNumber(n, true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }

  initMap() {
    this.map = GoogleMaps.create(this.element.nativeElement);
    this.map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {
      this.getCBSPoint();
    })
  }
  private getCBSPoint() {
    console.log(this._lstcbs);
    this._lstcbs.forEach(item => {
      let coordinates: LatLng = new LatLng(Number(item.LTD), Number(item.LNG));
      this.map.setCameraZoom(12);
      this.map.setCameraTarget(coordinates);
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
        this._loader.hideLoader();
    });
  }


}
