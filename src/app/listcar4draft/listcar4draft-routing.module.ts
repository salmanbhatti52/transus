import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Listcar4draftPage } from './listcar4draft.page';

const routes: Routes = [
  {
    path: '',
    component: Listcar4draftPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Listcar4draftPageRoutingModule {}
