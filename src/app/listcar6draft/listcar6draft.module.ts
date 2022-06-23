import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Listcar6draftPageRoutingModule } from './listcar6draft-routing.module';

import { Listcar6draftPage } from './listcar6draft.page';



import { CalendarModule } from 'ion2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Listcar6draftPageRoutingModule,
    CalendarModule
  ],
  declarations: [Listcar6draftPage]
})
export class Listcar6draftPageModule { }
