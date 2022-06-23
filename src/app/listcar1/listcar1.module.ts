import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Listcar1PageRoutingModule } from './listcar1-routing.module';

import { Listcar1Page } from './listcar1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Listcar1PageRoutingModule
  ],
  declarations: [Listcar1Page]
})
export class Listcar1PageModule {}
