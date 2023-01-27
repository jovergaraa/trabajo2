import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WineprofilePage } from './wineprofile.page';

const routes: Routes = [
  {
    path: '',
    component: WineprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WineprofilePageRoutingModule {}
