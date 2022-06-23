import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Listcar7draftPage } from './listcar7draft.page';

const routes: Routes = [
  {
    path: '',
    component: Listcar7draftPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Listcar7draftPageRoutingModule {}
