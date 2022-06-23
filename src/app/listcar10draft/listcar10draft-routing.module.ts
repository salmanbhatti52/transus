import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Listcar10draftPage } from './listcar10draft.page';

const routes: Routes = [
  {
    path: '',
    component: Listcar10draftPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Listcar10draftPageRoutingModule {}
