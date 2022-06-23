import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarDocumentsPageRoutingModule } from './car-documents-routing.module';

import { CarDocumentsPage } from './car-documents.page';

import { CalendarModule } from 'ion2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarDocumentsPageRoutingModule,
    CalendarModule,
  ],
  declarations: [CarDocumentsPage]
})
export class CarDocumentsPageModule {}
