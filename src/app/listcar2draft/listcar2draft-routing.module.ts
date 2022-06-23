import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Listcar2draftPage } from './listcar2draft.page';

const routes: Routes = [
  {
    path: '',
    component: Listcar2draftPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Listcar2draftPageRoutingModule {}
