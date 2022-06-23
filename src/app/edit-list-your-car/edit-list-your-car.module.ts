import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditListYourCarPageRoutingModule } from './edit-list-your-car-routing.module';

import { EditListYourCarPage } from './edit-list-your-car.page';
import { CalendarModule } from 'ion2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarModule,
    EditListYourCarPageRoutingModule
  ],
  declarations: [EditListYourCarPage],
  providers: [{ provide: LOCALE_ID, useValue: 'zh-CN' }]
})
export class EditListYourCarPageModule {}
