import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Listcar5Page } from './listcar5.page';

const routes: Routes = [
  {
    path: '',
    component: Listcar5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Listcar5PageRoutingModule {}
 