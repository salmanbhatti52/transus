import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Listcar5draftPageRoutingModule } from './listcar5draft-routing.module';

import { Listcar5draftPage } from './listcar5draft.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Listcar5draftPageRoutingModule
  ],
  declarations: [Listcar5draftPage]
})
export class Listcar5draftPageModule {}
