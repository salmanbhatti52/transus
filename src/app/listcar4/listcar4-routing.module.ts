import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Listcar4Page } from './listcar4.page';

const routes: Routes = [
  {
    path: '',
    component: Listcar4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Listcar4PageRoutingModule {}
