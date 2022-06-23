import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopdestPageRoutingModule } from './topdest-routing.module';

import { TopdestPage } from './topdest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopdestPageRoutingModule
  ],
  declarations: [TopdestPage]
})
export class TopdestPageModule {}
