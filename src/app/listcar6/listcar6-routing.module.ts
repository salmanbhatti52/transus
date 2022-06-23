import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Listcar6Page } from './listcar6.page';

const routes: Routes = [
  {
    path: '',
    component: Listcar6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Listcar6PageRoutingModule {}
