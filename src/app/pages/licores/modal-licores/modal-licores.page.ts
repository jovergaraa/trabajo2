import { Component, OnInit, Input } from '@angular/core';
import { Camera } from '@capacitor/camera';
import { CameraResultType, CameraSource } from '@capacitor/camera/dist/esm/definitions';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { Licores } from 'src/app/services/licores';
import { LicoresService } from 'src/app/services/licores.service';

@Component({
  selector: 'app-modal-licores',
  templateUrl: './modal-licores.page.html',
  styleUrls: ['./modal-licores.page.scss'],
})
export class ModalLicoresPage implements OnInit {

  @Input() id: string = '';
  licores?: Licores; 

  constructor(
    private licoresService: LicoresService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.getLicores();
  }

  getLicores(){
    this.licoresService.getLicoresById(this.id).subscribe(data => {
      this.licores = data;
    });
  }

  async updateLicores(){
    this.licoresService.updateLicores(this.licores!);
    this.modalCtrl.dismiss();
    this.toastPresent('licor actualizado',2000);
  }

  async deleteLicores(){
    const alert = await this.alertCtrl.create({
      header: 'Eliminando...',
      message:'Estas seguro que deseas eliminar el licor?',
      buttons: [
        {
          text:'Cancel',
          role:'cancel'
        },
        {
          text:'Delete',
          role:'confirm',
          handler: () => {
            this.licoresService.deleteLicores(this.licores!);
            this.modalCtrl.dismiss();
            this.toastPresent('licor eliminado',2000);
          }
        }
      ]
    });
    await alert.present();
  }

  async toastPresent(message:string, duration:number){
    const toast = await this.toastCtrl.create({
      message: message,
      duration: duration
    });
    await toast.present();
  }

  async changeImage(licores:Licores){
    const image = await Camera.getPhoto({
      quality:90,
      allowEditing:false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera
    });

    console.log(image);

    if(image){
      const loading = await this.loadingCtrl.create();
      await loading.present();

      const results = await this.licoresService.changePhoto(image,licores);
      loading.dismiss();

      if(!results){
        const alert = await this.alertCtrl.create({
          header: 'Carga de imagen fallida',
          message:'Hubo un problema durante la carga de la imagen.',
          buttons: ['OK']
        });
        await alert.present();
      }
    }
  }

}