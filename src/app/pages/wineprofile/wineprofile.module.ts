import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WineprofilePageRoutingModule } from './wineprofile-routing.module';

import { WineprofilePage } from './wineprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WineprofilePageRoutingModule
  ],
  declarations: [WineprofilePage]
})
export class WineprofilePageModule {}
