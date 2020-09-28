import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {Menu} from '../model/Menu';
import { Injectable } from '@angular/core';
@Injectable()
export class MenuService
{
    private model:Menu;
    constructor(private http: HttpClient) {

    }
    getAll(): Observable<Menu> {
        return this.http.get<Menu>('http://190.8.176.204/plesk-site-preview/www.bloodbogota.com.co/api/Menu/getMenus',{headers: new HttpHeaders({'Authorization':'Bearer ' +localStorage.getItem('token')})})     
      }
}
