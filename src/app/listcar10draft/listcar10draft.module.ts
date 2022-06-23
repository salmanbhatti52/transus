import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Listcar10draftPageRoutingModule } from './listcar10draft-routing.module';

import { Listcar10draftPage } from './listcar10draft.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Listcar10draftPageRoutingModule
  ],
  declarations: [Listcar10draftPage]
})
export class Listcar10draftPageModule {}
