import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Licores } from 'src/app/services/licores';
import { LicoresService } from 'src/app/services/licores.service';
import { ModalLicoresPage } from './modal-licores/modal-licores.page';

@Component({
  selector: 'app-licores',
  templateUrl: './licores.page.html',
  styleUrls: ['./licores.page.scss'],
})
export class LicoresPage implements OnInit {

  licores: Licores[] = [];
  pageTitle = 'Licores';
  image = 'mascotas.jpg';
  pageIcon = `../../../assets/img/${this.image}`;

  constructor(private licoresService: LicoresService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private modalCtrl: ModalController
    ) { 
    this.getLicores();
  }

  ngOnInit() {
  }

  getLicores(){
    this.licoresService.getLicores()
      .subscribe(data => {
        console.log(data);
        this.licores = data;
    })
  }

  async addLicores(){
    const alert = await this.alertCtrl.create({
      header: 'Registrar licores',
      inputs: [
        {
          name:'nombre',
          type:'text',
          placeholder:'Nombre del licor.'
        },
        {
          name:'tipo',
          type:'text',
          placeholder:'cervesa,vino,etc...'
        },
        {
          name:'grados',
          type:'number',
          placeholder:'grados de alcohol'
        },
        {
          name:'precio',
          type:'number',
          placeholder:'valor unitario'
        },        
        {
          name:'origen',
          type:'text',
          placeholder:'ciudad de origen'
        },
        {
          name:'marca',
          type:'text',
          placeholder:'nombre marca'
        },
      ],
      buttons: [
        {
          text:'Cancel',
          role:'cancel'
        },
        {
          text:'Save',
          role:'confirm',
          handler: (data) => {
            this.licoresService.addLicores(data)
          }
        }
      ]
    });
    await alert.present();
  }

  async openLicores(licores:Licores){
    const modal = await this.modalCtrl.create({
      component: ModalLicoresPage,
      componentProps: {id:licores.id},
      initialBreakpoint: 1.0,
      breakpoints: [0,0.5,0.8],
    });
    await modal.present();
  }


}