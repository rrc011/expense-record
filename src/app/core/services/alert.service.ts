import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private _toastController: ToastController) {}

  async success(message: string, title?: string) {
    const toast = await this._toastController.create({
      header: title || 'Exito',
      message: message,
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }

  async error(message: string, title?: string) {
    const toast = await this._toastController.create({
      header: title || 'Error',
      message: message,
      duration: 2000,
      color: 'danger',
    });
    toast.present();
  }

  async presentToastWithOptions(options: Object) {
    const toast = await this._toastController.create(options);
    await toast.present();

    const { role } = await toast.onDidDismiss();
  }
}
