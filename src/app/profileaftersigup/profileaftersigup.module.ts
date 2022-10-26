import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileaftersigupPageRoutingModule } from './profileaftersigup-routing.module';

import { ProfileaftersigupPage } from './profileaftersigup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileaftersigupPageRoutingModule
  ],
  declarations: [ProfileaftersigupPage]
})
export class ProfileaftersigupPageModule {}
