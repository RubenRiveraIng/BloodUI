import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {Usuario} from '../model/Usuario';
import { Injectable } from '@angular/core';
@Injectable()
export class UsuarioService
{
    constructor(private http: HttpClient) {
    }
    create(data:Usuario):Observable<any>
    {
        return this.http.post<Usuario>('http://190.8.176.204/plesk-site-preview/www.bloodbogota.com.co/api/login/create',JSON.stringify(data),{headers: new HttpHeaders({'Accept': 'application/json','Content-Type': 'application/json'})});  
    }
    validateUser(data:Usuario):Observable<any>
    {

        return this.http.post<Usuario>('http://190.8.176.204/plesk-site-preview/www.bloodbogota.com.co/api/login/validateUser',JSON.stringify(data),{headers: new HttpHeaders({'Accept': 'application/json','Content-Type': 'application/json'})});  
    }
    resetPassword(data:Usuario):Observable<Usuario>
    {
        return this.http.get<Usuario>('http://190.8.176.204/plesk-site-preview/www.bloodbogota.com.co/api/usuario/resetPassword?numDocumento='+data.NumeroDocumento+'&tipoDocumento='+data.IdTipoDocumento.toString())  
    }
    updatePassword(data:string):Observable<string>
    {
        return this.http.get<string>('http://190.8.176.204/plesk-site-preview/www.bloodbogota.com.co/api/usuario/updatePassword?password='+data,{headers: new HttpHeaders({'Accept': 'application/json',
                                    'Content-Type': 'application/json',
                                    'Authorization':'Bearer ' +localStorage.getItem('token')})})
    }
    updateUser(data:Usuario):Observable<any>
    {
        return this.http.post<Usuario>('http://190.8.176.204/plesk-site-preview/www.bloodbogota.com.co/api/usuario/updateUser',JSON.stringify(data),{headers: new HttpHeaders({'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer ' +localStorage.getItem('token')})})
    }
    getUserById():Observable<any>
    {
        return this.http.get<Usuario>('http://190.8.176.204/plesk-site-preview/www.bloodbogota.com.co/api/usuario/getUsuario',{headers: new HttpHeaders({'Authorization':'Bearer ' +localStorage.getItem('token')})}) 
    }
    getEntidades():Observable<any>
    {
        return this.http.get<Usuario>('http://190.8.176.204/plesk-site-preview/www.bloodbogota.com.co/api/usuario/getEntidades',{headers: new HttpHeaders({'Authorization':'Bearer ' +localStorage.getItem('token')})}) 
    }


}
