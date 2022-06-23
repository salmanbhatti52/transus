import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReviewsOrRatingPage } from './reviews-or-rating.page';

const routes: Routes = [
  {
    path: '',
    component: ReviewsOrRatingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewsOrRatingPageRoutingModule {}
