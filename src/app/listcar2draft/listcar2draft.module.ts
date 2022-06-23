import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Listcar2draftPageRoutingModule } from './listcar2draft-routing.module';

import { Listcar2draftPage } from './listcar2draft.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Listcar2draftPageRoutingModule
  ],
  declarations: [Listcar2draftPage]
})
export class Listcar2draftPageModule {}
