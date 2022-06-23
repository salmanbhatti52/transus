import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarBookingPageRoutingModule } from './car-booking-routing.module';

import { CarBookingPage } from './car-booking.page';
import { CalendarComponentOptions, CalendarModule } from 'ion2-calendar';
  
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
   
    CarBookingPageRoutingModule,
    CalendarModule,
    
  ],
  
  declarations: [CarBookingPage],
  providers: [{ provide: LOCALE_ID, useValue: 'zh-CN' }]
})
export class CarBookingPageModule {
 

}
