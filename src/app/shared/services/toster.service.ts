import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})

export class TosterService {
    constructor(
        private toastController: ToastController
    ) { }

    async dangerToster(msg: string) {
        const toast = await this.toastController.create({
            color: 'danger',
            message: msg,
            duration: 2000
        });
        toast.present();
    }

    async successToster(msg: string) {
        const toast = await this.toastController.create({
            color: 'success',
            message: msg,
            duration: 2000
        });
        toast.present();
    }

    async warningToster(msg: string) {
        const toast = await this.toastController.create({
            color: 'warning',
            message: msg,
            duration: 2000
        });
        toast.present();
    }
}

