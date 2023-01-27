import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LicoresPageRoutingModule } from './licores-routing.module';

import { LicoresPage } from './licores.page';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
    declarations: [LicoresPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LicoresPageRoutingModule,
        ComponentsModule
    ]
})
export class LicoresPageModule {}
