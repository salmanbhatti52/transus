import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MydraftcarPageRoutingModule } from './mydraftcar-routing.module';

import { MydraftcarPage } from './mydraftcar.page';
import { CustomeDatePipe } from '../custome-date.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MydraftcarPageRoutingModule
  ],
  declarations: [MydraftcarPage, CustomeDatePipe]
})
export class MydraftcarPageModule { }
