import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileaftersigupPage } from './profileaftersigup.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileaftersigupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileaftersigupPageRoutingModule {}
