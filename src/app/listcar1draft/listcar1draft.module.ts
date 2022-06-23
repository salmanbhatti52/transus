import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Listcar1draftPageRoutingModule } from './listcar1draft-routing.module';

import { Listcar1draftPage } from './listcar1draft.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Listcar1draftPageRoutingModule
  ],
  declarations: [Listcar1draftPage]
})
export class Listcar1draftPageModule { }



