// loader.service.ts
import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class loader {

    constructor(
        public loadingController: LoadingController
    ) { }
    showHideAutoLoader() {

        this.loadingController.create({
            message: 'Por favor Espere...',
            duration: 5000
        }).then((res) => {
            res.present();

            res.onDidDismiss().then((dis) => {
                console.log('Por favor Espere...', dis);
            });
        });

    }

    showLoader() {

        this.loadingController.create({
            message: 'Por favor Espere...'
        }).then((res) => {
            res.present();
        });

    }
    hideLoader() {

        this.loadingController.dismiss(null, "cancel").then((res) => {
            console.log('Loading dismissed!', res);
            if (!res) {
                this.loadingController.dismiss(null, "cancel").then((res) => {
                    console.log('Loading dismissed!', res);

                }).catch((error) => {
                    console.log('error', error);
                });
            }
        }).catch((error) => {

            console.log('error', error);
        });

    }


}