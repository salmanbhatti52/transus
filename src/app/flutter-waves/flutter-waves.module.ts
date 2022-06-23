import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { FlutterWavesPageRoutingModule } from "./flutter-waves-routing.module";
import { Angular4PaystackModule } from 'angular4-paystack';
import { FlutterWavesPage } from "./flutter-waves.page";

@NgModule({
  imports: [
    Angular4PaystackModule.forRoot('pk_live_e1fe04533542cf4313ce66133eb31296411c1a02'),
    CommonModule,
    FormsModule,
    IonicModule,
    // GooglePayButtonModule,
    FlutterWavesPageRoutingModule,
  ],
  declarations: [FlutterWavesPage],
})
export class FlutterWavesPageModule {}
