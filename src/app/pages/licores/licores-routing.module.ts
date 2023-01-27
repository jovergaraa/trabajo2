import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicoresPage } from './licores.page';

const routes: Routes = [
  {
    path: '',
    component: LicoresPage
  },
  {
    path: 'modal-licores',
    loadChildren: () => import('./modal-licores/modal-licores.module').then( m => m.ModalLicoresPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LicoresPageRoutingModule {}
