import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { FormsModule } from '@angular/forms';

import { VerifyNewCodePageModule } from '../verify-new-code/verify-new-code.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    VerifyNewCodePageModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
