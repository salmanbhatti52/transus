import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Listcar3Page } from './listcar3.page';

const routes: Routes = [
  {
    path: '',
    component: Listcar3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Listcar3PageRoutingModule {}
