import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Listcar1Page } from './listcar1.page';

const routes: Routes = [
  {
    path: '',
    component: Listcar1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Listcar1PageRoutingModule {}
