import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Listcar6PageRoutingModule } from './listcar6-routing.module';

import { Listcar6Page } from './listcar6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Listcar6PageRoutingModule
  ],
  declarations: [Listcar6Page]
})
export class Listcar6PageModule {}
