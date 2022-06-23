import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingDetailViewPageRoutingModule } from './booking-detail-view-routing.module';

import { BookingDetailViewPage } from './booking-detail-view.page';
import { CustomeDatePipe } from '../custome-date.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingDetailViewPageRoutingModule
  ],
  declarations: [BookingDetailViewPage, CustomeDatePipe]
})
export class BookingDetailViewPageModule {}
