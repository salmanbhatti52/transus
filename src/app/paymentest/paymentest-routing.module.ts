import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentestPage } from './paymentest.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentestPageRoutingModule {}
