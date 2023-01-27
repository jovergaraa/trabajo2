import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalLicoresPage } from './modal-licores.page';

const routes: Routes = [
  {
    path: '',
    component: ModalLicoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalLicoresPageRoutingModule {}
