import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { JoinSolicitud } from '../../../../model/JoinSolicitud';
import { SolicitudRecoleccionService } from '../../../../service/SolicitudRecoleccion.service';
import { loader } from '../../../generico/loader';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
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
import { ModalController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-detallesolicitud',
  templateUrl: './detallesolicitud.page.html',
  styleUrls: ['./detallesolicitud.page.scss'],
  providers: [SolicitudRecoleccionService, loader, GoogleMaps]
})
export class DetallesolicitudPage {

  @ViewChild('map_canvas') element: ElementRef;
  map: GoogleMap;
  private id: any;
  private _srService: SolicitudRecoleccionService;
  public _srData: Array<JoinSolicitud>;
  private _loader: loader;

  constructor(private srService: SolicitudRecoleccionService, private loader: loader, private router: Router, private route: ActivatedRoute,public platform: Platform) {
    this._loader = loader;
    this._loader.showLoader();
    this._srService = srService;
    this._srData = new Array<JoinSolicitud>();
    this.route.queryParams.subscribe(params => {
      if (params && params.id) {
        console.log(params.id)
        this._srService.getSolicitudesPorUsuarioEntidadById(params.id).subscribe(data => {
          this._srData = data;
          // this._loader.hideLoader();
          this.platform.ready().then(() => {
            this.initMap();
            this.map.trigger('resize');
          });
        })
      }
    });

  }
  initMap() {
    this.map = GoogleMaps.create(this.element.nativeElement);
    this.map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {
      this.getCBSPoint();
    })
  }
  private getCBSPoint() {
    console.log(this._srData);
    this._srData.forEach(item => {
      let coordinates: LatLng = new LatLng(Number(item.LTD), Number(item.LNG));
      this.map.setCameraZoom(12);
      this.map.setCameraTarget(coordinates);
      let markerOptions: MarkerOptions = {
        position: coordinates,
        icon: 'red',
        title: item.NombreSolicitante,
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
