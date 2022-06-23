import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Listcar4draftPageRoutingModule } from './listcar4draft-routing.module';

import { Listcar4draftPage } from './listcar4draft.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Listcar4draftPageRoutingModule
  ],
  declarations: [Listcar4draftPage]
})
export class Listcar4draftPageModule {}
