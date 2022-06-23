import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentestPageRoutingModule } from './paymentest-routing.module';

import { PaymentestPage } from './paymentest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentestPageRoutingModule
  ],
  declarations: [PaymentestPage]
})
export class PaymentestPageModule {}
