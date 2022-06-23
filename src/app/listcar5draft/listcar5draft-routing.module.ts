import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Listcar5draftPage } from './listcar5draft.page';

const routes: Routes = [
  {
    path: '',
    component: Listcar5draftPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Listcar5draftPageRoutingModule {}
