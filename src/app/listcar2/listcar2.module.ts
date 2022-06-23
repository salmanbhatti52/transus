import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Listcar2PageRoutingModule } from './listcar2-routing.module';

import { Listcar2Page } from './listcar2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Listcar2PageRoutingModule
  ],
  declarations: [Listcar2Page]
})
export class Listcar2PageModule {}
