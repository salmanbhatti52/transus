import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingListPageRoutingModule } from './booking-list-routing.module';

import { BookingListPage } from './booking-list.page';
import { CustomeDatePipe } from '../custome-date.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingListPageRoutingModule
  ],
  declarations: [BookingListPage, CustomeDatePipe]
})
export class BookingListPageModule {}
