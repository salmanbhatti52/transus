import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Listcar9draftPage } from './listcar9draft.page';

const routes: Routes = [
  {
    path: '',
    component: Listcar9draftPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Listcar9draftPageRoutingModule {}
