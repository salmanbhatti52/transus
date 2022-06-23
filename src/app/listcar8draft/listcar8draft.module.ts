import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Listcar8draftPageRoutingModule } from './listcar8draft-routing.module';

import { Listcar8draftPage } from './listcar8draft.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Listcar8draftPageRoutingModule
  ],
  declarations: [Listcar8draftPage]
})
export class Listcar8draftPageModule {}
