import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Listcar11draftPage } from './listcar11draft.page';

const routes: Routes = [
  {
    path: '',
    component: Listcar11draftPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Listcar11draftPageRoutingModule {}
