import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Listcar8Page } from './listcar8.page';

const routes: Routes = [
  {
    path: '',
    component: Listcar8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Listcar8PageRoutingModule {}
