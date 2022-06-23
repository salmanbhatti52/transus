import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MydraftcarPage } from './mydraftcar.page';

const routes: Routes = [
  {
    path: '',
    component: MydraftcarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MydraftcarPageRoutingModule {}
