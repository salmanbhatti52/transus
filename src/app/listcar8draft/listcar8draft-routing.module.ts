import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Listcar8draftPage } from './listcar8draft.page';

const routes: Routes = [
  {
    path: '',
    component: Listcar8draftPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Listcar8draftPageRoutingModule {}
