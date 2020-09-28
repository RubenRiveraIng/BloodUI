import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {TipoDocumento} from '../model/TipoDocumento';
import { Injectable } from '@angular/core';
// import {ambiente} from '../util/ambiente';
@Injectable()
export class TipoDocumentoService
{
    private model:TipoDocumento;
    // private _ambiente:ambiente;
    constructor(private http: HttpClient,) {
        // this._ambiente = new   ambiente();
    }
    getAll(): Observable<TipoDocumento> {
       return this.http.get<TipoDocumento>('http://190.8.176.204/plesk-site-preview/www.bloodbogota.com.co/api/tipodocumento/getTipoDocumento')     
      }
}
