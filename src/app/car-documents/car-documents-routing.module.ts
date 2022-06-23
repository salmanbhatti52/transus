import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarDocumentsPage } from './car-documents.page';

const routes: Routes = [
  {
    path: '',
    component: CarDocumentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarDocumentsPageRoutingModule {}
