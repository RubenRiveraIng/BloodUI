import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { LineasAtencion } from '../model/LineasAtencion';
import { Injectable } from '@angular/core';
@Injectable()
export class LineasAtencionService {
    constructor(private http: HttpClient) {

    }
    getLineas(): Observable<any> {
        return this.http.get<LineasAtencion>('http://190.8.176.204/plesk-site-preview/www.bloodbogota.com.co/api/LineasAtencion/getLineasAtencion', {
            headers: new HttpHeaders({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            })
        })
    }
}


