import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-winelist',
  templateUrl: './winelist.page.html',
  styleUrls: ['./winelist.page.scss'],
})
export class WinelistPage implements OnInit {
  wines: any;
  navController: any;
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get<any>('https://api.sampleapis.com/wines/reds')
      .subscribe(res => {
        console.log(res);
        this.wines = res;
      });
  }
  goToWineProfile(personaje:any): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        personaje : JSON.stringify(personaje)
      }      
    };
    this.navController.navigateForward(['detalle-personajes/'],navigationExtras);
  }



}
