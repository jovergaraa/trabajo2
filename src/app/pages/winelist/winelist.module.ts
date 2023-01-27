import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WinelistPageRoutingModule } from './winelist-routing.module';

import { WinelistPage } from "./WinelistPage";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WinelistPageRoutingModule
  ],
  declarations: [WinelistPage]
})
export class WinelistPageModule {}
