import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertidorService {

    url = 'https://mindicador.cl/api';
  
    constructor(private httpClient: HttpClient) { }
  
    controlador($scope: { dailyIndicators: any; }, $http: { get: (arg0: string) => { (): any; new(): any; success: { (arg0: (data: any) => void): { (): any; new(): any; error: { (arg0: () => void): void; new(): any; }; }; new(): any; }; }; }) {
      $http.get(this.url).success(function(data) {
          $scope.dailyIndicators = data;
      }).error(function() {
          console.log('error');
      });
    }
  
    buscarIndicadores(): Promise<any> {
      return new Promise((resolve, reject) => {
        this.httpClient.get(this.url).subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
      });
    }
    buscarIndicador(indicador: string , fecha: any): Promise<any> {
      return new Promise((resolve, reject) => {
        this.httpClient.get(this.url + '/' + indicador + '/' + fecha).subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
      });
    }
}
