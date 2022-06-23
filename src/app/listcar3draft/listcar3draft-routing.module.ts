import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Listcar3draftPage } from './listcar3draft.page';

const routes: Routes = [
  {
    path: '',
    component: Listcar3draftPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Listcar3draftPageRoutingModule {}
