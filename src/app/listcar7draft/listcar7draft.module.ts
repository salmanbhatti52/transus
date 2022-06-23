import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Listcar7draftPageRoutingModule } from './listcar7draft-routing.module';

import { Listcar7draftPage } from './listcar7draft.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Listcar7draftPageRoutingModule
  ],
  declarations: [Listcar7draftPage]
})
export class Listcar7draftPageModule {}
