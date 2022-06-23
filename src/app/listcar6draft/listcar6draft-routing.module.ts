import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Listcar6draftPage } from './listcar6draft.page';

const routes: Routes = [
  {
    path: '',
    component: Listcar6draftPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Listcar6draftPageRoutingModule {}
