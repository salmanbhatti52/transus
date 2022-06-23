import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Listcar8PageRoutingModule } from './listcar8-routing.module';

import { Listcar8Page } from './listcar8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Listcar8PageRoutingModule
  ],
  declarations: [Listcar8Page]
})
export class Listcar8PageModule {}
