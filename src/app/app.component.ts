import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SplashComponent } from './splash/splash.component';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'About', url: '/about', icon: 'people' },
    { title: 'Weather', url: '/weather', icon: 'cloud'},
    { title: 'Profile', url: '/page404', icon: 'person'},
    { title: 'Licores', url: '/licores', icon: 'flask'},
    { title: 'Conversor', url: '/conversor', icon: 'cash'},
    { title: 'winelist', url: 'winelist', icon: 'wine'},
  ];
  public labels = [];


  constructor(
    private modalController: ModalController,
    private authService: AuthService,
    private router:Router) 
    {
    this.presentSplash();
  }

  async presentSplash(){
    const modal = await this.modalController.create({
      component: SplashComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/',{replaceUrl:true})
  }
}
