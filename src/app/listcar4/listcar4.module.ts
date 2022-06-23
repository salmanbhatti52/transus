import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Listcar4PageRoutingModule } from './listcar4-routing.module';

import { Listcar4Page } from './listcar4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Listcar4PageRoutingModule
  ],
  declarations: [Listcar4Page]
})
export class Listcar4PageModule {}
