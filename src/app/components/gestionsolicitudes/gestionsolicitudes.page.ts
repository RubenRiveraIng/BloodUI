import { Component } from '@angular/core';
import { JoinSolicitud } from '../../model/JoinSolicitud';
import { SolicitudRecoleccionService } from '../../service/SolicitudRecoleccion.service';
import { loader } from '..//generico/loader';
import { Router ,NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-gestionsolicitudes',
  templateUrl: './gestionsolicitudes.page.html',
  styleUrls: ['./gestionsolicitudes.page.scss'],
  providers: [SolicitudRecoleccionService,loader]
})
export class GestionsolicitudesPage {

  private _srService: SolicitudRecoleccionService;
  public _srData:Array<JoinSolicitud>;
  private _loader: loader;
  constructor(private srService: SolicitudRecoleccionService,private loader: loader, private router: Router) {
    this._loader = loader;
    this._loader.showLoader();
    this._srService=srService;
    this._srData = new  Array<JoinSolicitud>();
    this._srService.getSolicitudesPorUsuarioEntidad().subscribe(data =>{
        this._srData=data;
        this._loader.hideLoader();
    })
  }

  public detalleSolicitud(id: number) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id:id
      }
    };
    this.router.navigate(['detallesolicitud'], navigationExtras)
  }

}
