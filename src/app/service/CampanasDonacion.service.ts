import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { CampanasDonacion } from '../model/CampanasDonacion';
import { Injectable } from '@angular/core';
@Injectable()
export class CamapanasDonacionService {
    constructor(private http: HttpClient) {

    }
    getCampanasDonacion(): Observable<any> {
        return this.http.get<CampanasDonacion>('http://190.8.176.204/plesk-site-preview/www.bloodbogota.com.co/api/campanasdoncacion/getCampanasDonacion', {
            headers: new HttpHeaders({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            })
        })
    }
    getCampanasDonacionById(id:string):Observable<any>
    {
        return this.http.get<CampanasDonacion>('http://190.8.176.204/plesk-site-preview/www.bloodbogota.com.co/api/campanasdoncacion/getCampanasDonacionById?Id='+id, {
            headers: new HttpHeaders({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            })
        })
    }
    createCampana(data:CampanasDonacion):Observable<any>
    {
        console.log(data);
        return this.http.post<CampanasDonacion>('http://190.8.176.204/plesk-site-preview/www.bloodbogota.com.co/api/campanasdoncacion/createCampana',JSON.stringify(data),{headers: new HttpHeaders({'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer ' +localStorage.getItem('token')})})
    }
}

