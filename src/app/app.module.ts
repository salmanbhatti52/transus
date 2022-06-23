import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from "@angular/http";
import { Facebook } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { VerifyMobileNumberPage } from './verify-mobile-number/verify-mobile-number.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordPage } from './forgot-password/forgot-password.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { NgxImageCompressService } from 'ngx-image-compress';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { ChartsModule } from 'ng2-charts';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { PhotoviewerPageModule } from './photoviewer/photoviewer.module';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';  
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { Stripe } from '@ionic-native/stripe/ngx';
import { ImagePipe } from './image.pipe';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { NgOtpInputModule } from  'ng-otp-input';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Angular4PaystackModule } from 'angular4-paystack';


@NgModule({
  declarations: [AppComponent, VerifyMobileNumberPage, ForgotPasswordPage,  ],
  entryComponents: [VerifyMobileNumberPage, ForgotPasswordPage],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    PhotoviewerPageModule,
    NgOtpInputModule,
    Angular4PaystackModule.forRoot('pk_live_e1fe04533542cf4313ce66133eb31296411c1a02')
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    Camera,
    GooglePlus,
    Geolocation,
    NativeGeocoder,
    NgxImageCompressService,
    PhotoViewer,
    OneSignal,
    InAppBrowser,
    ImagePicker,
    SocialSharing,
    Deeplinks,
    Stripe,
    FileTransfer,
    WebView,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
