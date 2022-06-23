import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Listcar3PageRoutingModule } from './listcar3-routing.module';

import { Listcar3Page } from './listcar3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Listcar3PageRoutingModule
  ],
  declarations: [Listcar3Page]
})
export class Listcar3PageModule {}
