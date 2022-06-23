import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Listcar7PageRoutingModule } from './listcar7-routing.module';

import { Listcar7Page } from './listcar7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Listcar7PageRoutingModule
  ],
  declarations: [Listcar7Page]
})
export class Listcar7PageModule {}
