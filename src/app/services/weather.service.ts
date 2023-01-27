import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(public _http: HttpClient) {

  }

  getdata (url : string)
  {
   url = ''
     return  this._http.get('url')
  }

}
