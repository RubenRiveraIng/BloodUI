import { Component, OnInit } from '@angular/core';
import { JoinSolicitud } from '../../../../model/JoinSolicitud';
import { SolicitudRecoleccionService } from '../../../../service/SolicitudRecoleccion.service';
import { loader } from '../../../generico/loader';
@Component({
  selector: 'app-historialsolicitud',
  templateUrl: './historialsolicitud.page.html',
  styleUrls: ['./historialsolicitud.page.scss'],
  providers: [SolicitudRecoleccionService,loader]
})
export class HistorialsolicitudPage implements OnInit {

  private _srService: SolicitudRecoleccionService;
  public _srData:Array<JoinSolicitud>;
  private _loader: loader;
  constructor(private srService: SolicitudRecoleccionService,private loader: loader,) {
    this._loader = loader;
    this._loader.showLoader();
    this._srService=srService;
    this._srData = new  Array<JoinSolicitud>();
    this._srService.getSolicitudesPorUsuarioRegular().subscribe(data =>{
        this._srData=data;
        this._loader.hideLoader();
    })
  }

  ngOnInit() {
  }

}
