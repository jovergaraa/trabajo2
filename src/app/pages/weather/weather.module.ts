import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeatherPageRoutingModule } from './weather-routing.module';

import { WeatherPage } from './weather.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { GoogleMapsModule } from '@angular/google-maps';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeatherPageRoutingModule,
    ComponentsModule,
    GoogleMapsModule
  ],
  declarations: [WeatherPage]
})
export class WeatherPageModule {}
