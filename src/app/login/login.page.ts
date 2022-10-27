import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { RestService } from "../rest.service";

import { Facebook, FacebookLoginResponse } from "@ionic-native/facebook/ngx";
import { GooglePlus } from "@ionic-native/google-plus/ngx";
import { ForgotPasswordPage } from "../forgot-password/forgot-password.page";
import {
  LoadingController,
  NavController,
  PopoverController,
  ToastController,
} from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { SubjectEventsService } from "../subject-events.service";
import { VerifyNewCodePage } from "../verify-new-code/verify-new-code.page";
import { ToastLoaderService } from "../toast-loader.service";

//com.googleusercontent.apps.167698651548-6fcki9irrlk2p6mmjaqnee4iq0tr10sr
//ionic cordova plugin add cordova-plugin-facebook4 --variable APP_ID="2427294527578148" --variable APP_NAME="myApplication"
@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  email: any;
  password: any;
  isSubmitted = false;
  emailError: boolean = false;
  passwordError: boolean = false;
  invalidEmailError: boolean = false;
  apiResponse: any;
  response: any;
  validation: boolean = false;
  baseUrl: string = "https://app.transusdrives.com/";
  loading: HTMLIonLoadingElement;
  ShowLoading: boolean = false;
  constructor(
    public navCtrl: NavController,
    public loadingController: LoadingController,
    //private events: Events,
    public subjectEvents: SubjectEventsService,
    public toastController: ToastController,
    private storage: Storage,
    public popoverController: PopoverController,
    public router: Router,
    public restService: RestService,
    private facebook: Facebook,
    private googlePlus: GooglePlus
  ) {}

  ngOnInit() {}

  submitForm() {
    // this.navCtrl.navigateForward('paymentest');
    this.validation = true;
    if (this.validateForm() == true) {
      var stringy = JSON.stringify({
        requestType: "login",
        loginWith: "Email",
        email: this.email,
        password: this.password,
      });
      console.log(stringy);
      this.present();

      // this.ShowLoading = true;
      this.restService.authenticate(stringy).subscribe(
        (response) => {
          this.response = JSON.parse(response["_body"]);
          console.log("Raw detailss after login", this.response);
          if (this.response.status == "NotFound") {
            this.presentToast("Invalid email or password");
            // this.ShowLoading = false;

            this.dismiss();
          } else if (this.response.status == "error") {
            this.presentToast("Invalid email or password");
            // this.ShowLoading = false;
            this.dismiss();
          } else if (this.response.status == "Found") {
            this.presentToast("Login successfully!");
            localStorage.setItem(
              "users_id",
              this.response.user_details.users_id
            );


            localStorage.setItem('imageofuserprofile',this.restService.baseURLforProfileimg + "" +   this.response.user_details.profile_image)
            this.restService.imageofuserprofile = this.restService.baseURLforProfileimg + "" +   this.response.user_details.profile_image;


            console.log("login detailssss----", this.response);
            this.storage.set("user_details", this.response.user_details);
            this.storage.set("profile_img_url", this.response.user_details.profile_image);
            this.storage.set("country_name", this.response.country_name);
            this.storage.set("base_urls", this.baseUrl);
            this.storage.set(
              "currency_symbol",
              this.response.user_details.symbol
            );
            this.subjectEvents.publishSomeData({
              sidebar: "sidebar",
            });
            this.navCtrl.navigateRoot("/");
          }
          this.dismiss();

          // this.ShowLoading = false;
        },
        (err) => {
          this.presentToast("Oops! somthing went wrong.");
          this.dismiss();

          // this.ShowLoading = false;
        }
      );
    }
  }
  LoginWithFacebook() {
    console.log("facebook login............................");

    // this.ShowLoading = true;
    //this.present();

    // this.facebook.login(['public_profile', 'email']).then((res: FacebookLoginResponse) => {

    this.facebook
      .login(["public_profile", "email"])
      .then((res: FacebookLoginResponse) => {
        console.log("Logged into Facebook!", res);
        this.facebook
          .api(
            "me?fields=id,name,email,first_name,picture.width(626).height(939).as(picture_large)",
            []
          )
          .then((profile) => {
            console.log("my profile----->", profile);

            this.present();
            var stringy = JSON.stringify({
              // requestType: 'login',
              // "loginWith": "Facebook",
              // email: profile['email']

              requestType: "login",
              loginWith: "Facebook",
              userName: profile.name,
              profilePic: "",
              email: profile.email,
              fbID: profile.id,
            });

            console.log("my facebook data", stringy);

            this.restService.authenticate(stringy).subscribe((response) => {
              this.response = JSON.parse(response["_body"]);
              console.log("Facebook login0-------res-------", this.response);
              if (this.response.status == "NotFound") {
                this.presentToast("Inavlid email or password");
                this.dismiss();
              } else if (this.response.status == "Found") {
                this.presentToast("Login successfully!");
                this.storage.set("user_details", this.response.user_details);
                this.storage.set(
                  "profile_img_url",
                  this.response.profile_img_url
                );
                this.storage.set("country_name", this.response.country_name);
                this.storage.set("base_urls", this.baseUrl);
                // this.events.publish('sidebar', 'sidebar');
                this.subjectEvents.publishSomeData({
                  sidebar: "sidebar",
                });
                this.navCtrl.navigateRoot("/");
              }
              // this.ShowLoading = false;
              this.dismiss();
            });
            //this.userData = {email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']}
            // this.ShowLoading = false;
            this.dismiss();
          });
      })
      .catch((e) => console.log("Error logging into Facebook", e));

    this.facebook.logEvent(this.facebook.EVENTS.EVENT_NAME_ADDED_TO_CART);
  }

  LoginWithGoogleOld() {
    this.googlePlus
      .login({})
      .then((res) => {
        console.log(res);
        var stringy = JSON.stringify({
          requestType: "google_login",
          loginWith: "Gmail",
          email: res.email,
        });

        this.present();
        // AIzaSyAB8SM4pGFdI5bBjmjNUswS-yLcTpuNUSs
        this.restService.authenticate(stringy).subscribe((response) => {
          this.response = JSON.parse(response["_body"]);
          console.log(this.response);

          this.dismiss();
          console.log("google login0-------res-------", this.response);
          if (this.response.status == "NotFound") {
            this.presentToast("Invalid email or password");
          } else if (this.response.status == "Found") {
            this.presentToast("Login successfully!");
            console.log(this.response.user_details);
            this.storage.set("user_details", this.response.user_data);

            this.storage.get("user_details").then((user_details) => {
              console.log("my user detail login page ====", user_details);
            });

            this.storage.set("profile_img_url", this.response.profile_img_url);
            this.storage.set("country_name", this.response.country_name);
            this.storage.set("base_urls", this.baseUrl);

            //  this.events.publish('sidebar', 'sidebar');
            this.subjectEvents.publishSomeData({
              sidebar: "sidebar",
            });
            this.navCtrl.navigateRoot("/");
            this.dismiss();
          }
        });
      })
      .catch((err) => console.log(err));
  }

  LoginWithGoogle() {
    console.log("gplus looooooooooo.............................!!!!!!");

    this.googlePlus
      .login({})
      .then((res) => {
        console.log("gplus login", res);
        var stringy = JSON.stringify({
          //"requestType": "loginwithgoogle",
          requestType: "google_login",
          loginWith: "Gmail",
          email: res.email,
          user_name: res.displayName,
        });

        console.log("google res stringy", stringy);

        // AIzaSyAB8SM4pGFdI5bBjmjNUswS-yLcTpuNUSs
        this.restService.authenticate(stringy).subscribe((response) => {
          this.response = JSON.parse(response["_body"]);
          console.log("google login0-------res-------", this.response);
          if (this.response.status == "error") {
            this.presentToast("Invalid email or password");
          } else if (this.response.status == "success") {
            // this.presentToast('Login successfully!');
            // console.log(this.response.user_data.users_id);
            // this.storage.set('user_details', this.response.user_details);
            // this.storage.set('profile_img_url', this.response.profile_img_url);
            // this.storage.set('country_name', this.response.country_name);
            // this.storage.set('base_urls', this.baseUrl);

            // //this.events.publish('sidebar', 'sidebar');
            // this.subjectEvents.publishSomeData({
            //   sidebar: 'sidebar'
            // });
            // this.navCtrl.navigateRoot('/');

            this.presentToast("Login successfully!");
            this.storage.set("user_details", this.response.user_details);
            // this.storage.set('profile_img_url', this.response.profile_img_url);
            this.storage.set(
              "profile_img_url",
              "uploads/users/profile_pic/temp/profile_pic_13trans_us.png"
            );
            this.storage.set("country_name", "Andorra");
            this.storage.set("base_urls", this.baseUrl);
            // this.events.publish('sidebar', 'sidebar');
            this.subjectEvents.publishSomeData({
              sidebar: "sidebar",
            });
            this.navCtrl.navigateRoot("/");
          }
        });
      })
      .catch((err) => console.log("gplus err--------------", err));
  }
  value: any;
  Viewpasswod(event) {
    this.value = event.detail.value;

    if (this.value.length > 0) {
      this.passwordError = false;
    }
  }

  validateForm() {
    // if(this.validation){
    this.emailError = false;
    // this.passwordError = false;
    this.invalidEmailError = false;
    if (this.email == "" || this.email == undefined) {
      this.emailError = true;
      return false;
    } else if (this.ValidateEmail(this.email) == false) {
      this.invalidEmailError = true;
      return false;
    } else if (this.password == "" || this.password == undefined) {
      this.passwordError = true;
      return false;
    } else {
      return true;
    }
    //  }
  }
  ValidateEmail(mail) {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        mail
      )
    ) {
      return true;
    } else {
      //alert("You have entered an invalid email address!")
      return false;
    }
  }
  async forgotPassword() {
    const popover = await this.popoverController.create({
      backdropDismiss: false,
      component: ForgotPasswordPage,
      componentProps: {
        //"data": extra_info
      },
      translucent: true,
    });
    popover.onWillDismiss().then((data) => {
      console.log(data);
      // this.verifyCodeNewPass();
      if (data.data) {
        this.verifyCodeNewPass();
      }
    });
    return await popover.present();
  }

  async verifyCodeNewPass() {
    const popover = await this.popoverController.create({
      component: VerifyNewCodePage,
      backdropDismiss: false,
      componentProps: {
        //"data": extra_info
      },
      translucent: true,
    });
    popover.onWillDismiss().then((data) => {
      console.log(data);
    });
    return await popover.present();
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: "top",
    });
    toast.present();
  }
  GotoSignup() {
    this.router.navigate(["/signup"]);
  }

  goToHome() {
    this.router.navigate(["/"]);
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
}
