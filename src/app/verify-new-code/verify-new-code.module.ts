import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyNewCodePageRoutingModule } from './verify-new-code-routing.module';

import { VerifyNewCodePage } from './verify-new-code.page';
import { NgOtpInputModule } from  'ng-otp-input';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyNewCodePageRoutingModule,
    NgOtpInputModule
  ],
  declarations: [VerifyNewCodePage]
})
export class VerifyNewCodePageModule {}
