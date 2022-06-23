import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopdestPage } from './topdest.page';

const routes: Routes = [
  {
    path: '',
    component: TopdestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopdestPageRoutingModule {}
