import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalLicoresPageRoutingModule } from './modal-licores-routing.module';

import { ModalLicoresPage } from './modal-licores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalLicoresPageRoutingModule
  ],
  declarations: [ModalLicoresPage]
})
export class ModalLicoresPageModule {}
