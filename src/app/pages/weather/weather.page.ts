import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Geolocation } from '@capacitor/geolocation';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit  {
  pageTitle = 'weather';
  todayDate = new Date();
  weatherTemp: any;
  weatherName : any;
  weatherDetails: any;
  center!: google.maps.LatLngLiteral;
  constructor(public HttpClient:HttpClient) { 
    this.loadData()
  }
  ngOnInit() {
    this.getPosition();
  }
   loadData(){
    this.HttpClient.get(`${API_URL}/weather?q=${"Santiago"}&appid=${API_KEY}`).subscribe(results => {
      console.log(results);
      this.weatherTemp= results;
      this.weatherName = results;

      console.log(this.weatherTemp.main.temp);
      console.log(this.weatherName.name);
      
      
    
   })
   
   
}
  async getPosition() {
  const coordinates = await Geolocation.getCurrentPosition();
  this.center = {
    lat: coordinates.coords.latitude,
    lng: coordinates.coords.longitude
  }
  }

}
