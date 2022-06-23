import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Listcar3draftPageRoutingModule } from './listcar3draft-routing.module';

import { Listcar3draftPage } from './listcar3draft.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Listcar3draftPageRoutingModule
  ],
  declarations: [Listcar3draftPage]
})
export class Listcar3draftPageModule {}
