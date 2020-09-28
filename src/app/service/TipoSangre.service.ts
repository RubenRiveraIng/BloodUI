import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {TipoSangre} from '../model/TipoSangre';
import { Injectable } from '@angular/core';
@Injectable()
export class TipoSangreService
{
    private model:TipoSangre;
    constructor(private http: HttpClient) {
    }
    getAll(): Observable<TipoSangre> {
        return this.http.get<TipoSangre>('http://190.8.176.204/plesk-site-preview/www.bloodbogota.com.co/api/tiposangre/getTipoSangre')     
      }
}
