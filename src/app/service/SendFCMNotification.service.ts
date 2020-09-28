import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ClinicasBancosSangre } from '../model/ClinicasBancosSangre';
import { Injectable } from '@angular/core';
@Injectable()
export class SendFCMNotificationService {
    constructor(private http: HttpClient) {

    }
    sendNotification(body:string,title:string): Observable<any> {
        return this.http.post<any>('https://fcm.googleapis.com/fcm/send',{
            "to":"/topics/bloodBogota",
            "notification": {
              "title": title,
              "body":  body}
            },{
            headers: new HttpHeaders({
                // 'poject_id':'bloodbog-8dc25',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'key=AAAA9AUu7B8:APA91bEwxPbNuChD3slgOzjVXUyWzP9P-j-ntvYHYMZqP2LoxqUwrkzs_q0WDlR0wieUmJa_LKAyEdpLeKYq1C3K1HLQhaZpK49iy_X7bNSMcVh04kacuqpuISCYPvav4Cisy9KF5x87',
                // 'Sender':'id='
            })
        })
    }
}