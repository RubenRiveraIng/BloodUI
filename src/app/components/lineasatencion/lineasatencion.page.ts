import { Component, OnInit } from '@angular/core';
import { LineasAtencion } from '../../model/LineasAtencion';
import { LineasAtencionService } from '../../service/LineasAtencion.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { loader } from '../generico/loader';
@Component({
  selector: 'app-lineasatencion',
  templateUrl: './lineasatencion.page.html',
  styleUrls: ['./lineasatencion.page.scss'],
  providers: [LineasAtencionService,loader]
})
export class LineasatencionPage implements OnInit {

  private _lineasService: LineasAtencionService;
  public _lineasAtencion: any;
  private _loader: loader;
  
  constructor(lineasService: LineasAtencionService, private callNumber: CallNumber, private loader: loader) {
    this._loader = loader;
    this._loader.showLoader();
    this._lineasService = lineasService;
    this.getLineasAtencion();
    console.log(this._lineasAtencion);
  }

  ngOnInit() {
  }
  private getLineasAtencion() {
    this._lineasService.getLineas().subscribe(data => {
      this._lineasAtencion = data;
      console.log(this._lineasAtencion);
      this._loader.hideLoader();
    });
  }
  public launchPhone(n: string) {
    this.callNumber.callNumber(n, true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }
}
