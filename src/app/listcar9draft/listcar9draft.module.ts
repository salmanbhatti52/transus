import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Listcar9draftPageRoutingModule } from './listcar9draft-routing.module';

import { Listcar9draftPage } from './listcar9draft.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Listcar9draftPageRoutingModule
  ],
  declarations: [Listcar9draftPage]
})
export class Listcar9draftPageModule {}
