import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Listcar5PageRoutingModule } from './listcar5-routing.module';

import { Listcar5Page } from './listcar5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Listcar5PageRoutingModule
  ],
  declarations: [Listcar5Page]
})
export class Listcar5PageModule {}
