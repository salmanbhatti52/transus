import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingDetailViewPage } from './booking-detail-view.page';

const routes: Routes = [
  {
    path: '',
    component: BookingDetailViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingDetailViewPageRoutingModule {}
