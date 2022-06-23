import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  LoadingController,
  NavController,
  NavParams,
  Platform,
  PopoverController,
  ToastController,
} from "@ionic/angular";
import { RestService } from "../rest.service";
import { ToastLoaderService } from "../toast-loader.service";

@Component({
  selector: "app-verify-mobile-number",
  templateUrl: "./verify-mobile-number.page.html",
  styleUrls: ["./verify-mobile-number.page.scss"],
})
export class VerifyMobileNumberPage implements OnInit {
  ShowLoading: boolean = false;
  response: any = "";
  stringyOfSignup: any = "";
  loading: any = "";

  otp: any = "";
  otpArr: any = "";
  otpMsg: any = "";
  mobileNumber: any = "";
  responseOfOtp: any = "";
  otpCodeOfthisScreen: any = "";

  a1: any = "";
  b1: any = "";
  c1: any = "";
  d1: any = "";
  otpemail: any = "";
  codee: any;
  constructor(
    public navCtrl: NavController,
    public router: Router,
    public popoverController: PopoverController,
    public restService: RestService,
    public plateform: Platform,
    public toastController: ToastController,
    public loadingController: LoadingController,
    public navParams: NavParams
  ) {}

  plateformCheck: any;
  ngOnInit() {
    if (this.plateform.is("ios")) {
      this.plateformCheck = "ios";
    } else {
      this.plateformCheck = "android";
    }
    // alert('in the popup');
    // alert(this.navParams.get('stringyOfSignup'));

    this.stringyOfSignup = this.navParams.get("stringyOfSignup");
    this.otp = this.navParams.get("otp");
    this.otpArr = this.navParams.get("otpArr");
    this.otpMsg = this.navParams.get("otpMsg");
    this.mobileNumber = this.navParams.get("mobileNumber");
    this.otpemail = this.navParams.get("otpemail");

    // this.a1 = this.otpArr[0]
    // this.b1 = this.otpArr[1]
    // this.c1 = this.otpArr[2]
    // this.d1 = this.otpArr[3]
  }
  onOtpChange(event) {
    console.log(event, "eventevent");
    this.codee = event;
  }
  async ok() {
    await this.popoverController.dismiss();
  }
  async goToHome() {
    if (this.codee.length < 4) {
      this.presentToast("Please complete code.");
    } else {
      // this.present();
      this.otpCodeOfthisScreen =
        this.a1.toString() +
        this.b1.toString() +
        this.c1.toString() +
        this.d1.toString();

      console.log(this.otpCodeOfthisScreen);

      if (this.codee == this.otp) {
        var stringy = JSON.stringify({
          requestType: "update_user",
          phone_number: this.mobileNumber,
        });
        console.log(stringy);
        console.log(this.codee == this.otp, "otp");
        this.restService.authenticate(stringy).subscribe((response) => {
          this.response = JSON.parse(response["_body"]);
          console.log(this.response);
          this.popoverController.dismiss({
            val: "ok",
          });
        });
      } else {
        this.presentToast("Incorrect Code");
      }
    }
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: "top",
    });
    toast.present();
  }

  async present() {
    this.loading = await this.loadingController.create({
      message: "Please wait...",
    });
    await this.loading.present();
  }

  async dismiss() {
    await this.loading.dismiss();
  }

  resend() {
    var ss = JSON.stringify({
      requestType: "send_otp",
      email: this.otpemail,
    });
    console.log(ss, "resending email..............");
    this.present();
    // this.ShowLoading = true;

    this.restService.auth_userAPI(ss).subscribe((ress: any) => {
      console.log(ress);

      this.responseOfOtp = JSON.parse(ress["_body"]);

      console.log("respooooo", this.responseOfOtp);

      if (this.responseOfOtp.status == "success") {
        this.otp = this.responseOfOtp.otp_code;
        this.otpArr = this.responseOfOtp.otp_code_array;
        this.otpMsg = this.responseOfOtp.msg;
        this.a1 = "";
        this.b1 = "";
        this.c1 = "";
        this.d1 = "";
      } else {
        this.otpMsg = this.responseOfOtp.msg;
        this.presentToast(this.otpMsg);
      }

      this.dismiss();
      // this.ShowLoading = false;
    });
  }

  /**
  resend() {


    var ss = JSON.stringify({
      requestType: 'send_otp',
      phone_number: this.mobileNumber

    })

    this.present()
    // this.ShowLoading = true;
    

    this.restService.auth_userAPI(ss).subscribe((ress: any) => {
      console.log(ress)


      this.responseOfOtp = JSON.parse(ress['_body']);

      console.log('respooooo', this.responseOfOtp)

      if (this.responseOfOtp.status == 'success') {


        this.otp = this.responseOfOtp.otp_code
        this.otpArr = this.responseOfOtp.otp_code_array
        this.otpMsg = this.responseOfOtp.msg


        this.a1 = this.otpArr[0]
        this.b1 = this.otpArr[1]
        this.c1 = this.otpArr[2]
        this.d1 = this.otpArr[3]



      } else {
        this.otpMsg = this.responseOfOtp.msg
        this.presentToast(this.otpMsg)
      }

      this.dismiss()
      // this.ShowLoading = false;
   
    })


  }

*/
}
