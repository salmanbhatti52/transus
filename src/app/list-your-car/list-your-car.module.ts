import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListYourCarPageRoutingModule } from './list-your-car-routing.module';

import { ListYourCarPage } from './list-your-car.page';
import { CalendarModule } from 'ion2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListYourCarPageRoutingModule,
    CalendarModule,
  ],
  declarations: [ListYourCarPage],
  providers: [{ provide: LOCALE_ID, useValue: 'zh-CN' }]
})
export class ListYourCarPageModule {}
