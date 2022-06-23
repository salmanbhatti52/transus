import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Listcar11draftPageRoutingModule } from './listcar11draft-routing.module';

import { Listcar11draftPage } from './listcar11draft.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Listcar11draftPageRoutingModule
  ],
  declarations: [Listcar11draftPage]
})
export class Listcar11draftPageModule {}
