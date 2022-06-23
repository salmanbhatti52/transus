import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopratedplacecarPage } from './topratedplacecar.page';

const routes: Routes = [
  {
    path: '',
    component: TopratedplacecarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopratedplacecarPageRoutingModule {}
