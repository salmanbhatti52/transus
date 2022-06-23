import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyMobileNumberPageRoutingModule } from './verify-mobile-number-routing.module';

import { VerifyMobileNumberPage } from './verify-mobile-number.page';
import { NgOtpInputModule } from  'ng-otp-input';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyMobileNumberPageRoutingModule,
    NgOtpInputModule 
  ],
  declarations: [VerifyMobileNumberPage]
})
export class VerifyMobileNumberPageModule {}
