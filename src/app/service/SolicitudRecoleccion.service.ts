import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { SolicitudRecoleccion } from '../model/SolicitudRecoleccion';
import { Injectable } from '@angular/core';
@Injectable()
export class SolicitudRecoleccionService {
    constructor(private http: HttpClient) {

    }

    createSolicitud(data:SolicitudRecoleccion):Observable<any>
    {
        console.log(data);
        return this.http.post<SolicitudRecoleccion>('http://190.8.176.204/plesk-site-preview/www.bloodbogota.com.co/api/solicitudrecoleccion/createSolicitudRecoleccion',JSON.stringify(data),{headers: new HttpHeaders({'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer ' +localStorage.getItem('token')})})
    }
    
    getSolicitudesPorUsuarioRegular():Observable<any>
    {
        return this.http.get<SolicitudRecoleccion>('http://190.8.176.204/plesk-site-preview/www.bloodbogota.com.co/api/solicitudrecoleccion/getSolicitudesPorUsuarioRegular',{headers: new HttpHeaders({'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer ' +localStorage.getItem('token')})})
    }
    getSolicitudesPorUsuarioEntidad():Observable<any>
    {
        return this.http.get<SolicitudRecoleccion>('http://190.8.176.204/plesk-site-preview/www.bloodbogota.com.co/api/solicitudrecoleccion/getSolicitudPorUsuarioEntidad',{headers: new HttpHeaders({'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer ' +localStorage.getItem('token')})})
    }
    getSolicitudesPorUsuarioEntidadById(IdSolicitud:string):Observable<any>
    {
        return this.http.get<SolicitudRecoleccion>('http://190.8.176.204/plesk-site-preview/www.bloodbogota.com.co/api/solicitudrecoleccion/getSolicitudPorUsuarioEntidadById?IdSolicitud='+IdSolicitud,{headers: new HttpHeaders({'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer ' +localStorage.getItem('token')})})
    }
}

