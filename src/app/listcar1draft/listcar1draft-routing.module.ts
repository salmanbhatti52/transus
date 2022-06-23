import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Listcar1draftPage } from './listcar1draft.page';

const routes: Routes = [
  {
    path: '',
    component: Listcar1draftPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Listcar1draftPageRoutingModule {}
