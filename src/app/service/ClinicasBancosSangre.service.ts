import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ClinicasBancosSangre } from '../model/ClinicasBancosSangre';
import { Injectable } from '@angular/core';
@Injectable()
export class ClinicasBancosSangreService {
    constructor(private http: HttpClient) {

    }
    getClinicas(): Observable<any> {
        return this.http.get<ClinicasBancosSangre>('http://190.8.176.204/plesk-site-preview/www.bloodbogota.com.co/api/clinicasbancos/getClinicasBancosSangre', {
            headers: new HttpHeaders({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            })
        })
    }
}


