import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stringify } from 'querystring';
import { identity } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {

  urlEndPoint: string = 'https://rickandmortyapi.com/api/';

  constructor(private httpClient: HttpClient) { }

  getListadoPersonajes(page:number=1): Promise<any> {
    return new Promise((resolve,reject) => {
      this.httpClient.get(`${this.urlEndPoint}character?page=${page}`)
      .subscribe({
        next: (respuesta) => resolve(respuesta),
        error:  (error) => reject(error),
        complete: () => console.log('Complete')
      })
    })
  }

  getListadoEpisodes(page:number=1): Promise<any>{
    return new Promise((resolve,reject) => {
      this.httpClient.get(`${this.urlEndPoint}episode/[${this.listadoEpisodes()}]`)
      .subscribe({
        next: (respuesta) => resolve(respuesta),
        error:  (error) => reject(error),
        complete: () => console.log('Complete')
      })
    })
  }

  listadoEpisodes(): string {
    let episode = '1';
    for(let i=2;i<=51;i++){
      episode += `,${i}`;
    }
    return episode;
  }

}
