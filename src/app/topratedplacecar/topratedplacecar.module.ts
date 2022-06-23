import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopratedplacecarPageRoutingModule } from './topratedplacecar-routing.module';

import { TopratedplacecarPage } from './topratedplacecar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopratedplacecarPageRoutingModule
  ],
  declarations: [TopratedplacecarPage]
})
export class TopratedplacecarPageModule {}
