import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Listcar7Page } from './listcar7.page';

const routes: Routes = [
  {
    path: '',
    component: Listcar7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Listcar7PageRoutingModule {}
