import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wineprofile',
  templateUrl: './wineprofile.page.html',
  styleUrls: ['./wineprofile.page.scss'],
})
export class WineprofilePage implements OnInit {
  wineprofileId:any;
  wine : any;

  constructor(
    private activatedRoute:ActivatedRoute,
    private http:HttpClient
  ) { }

  ngOnInit() {
   
     this.wineprofileId= this.activatedRoute.snapshot.paramMap.get('id')
      this.http.get('https://api.sampleapis.com/wines/reds/' + this.wineprofileId)
      .subscribe(res => this.wine=res);
    
  }

}
