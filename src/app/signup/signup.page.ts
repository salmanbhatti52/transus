import { ImagePicker } from "@ionic-native/image-picker/ngx";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  AlertController,
  LoadingController,
  NavController,
  Platform,
  PopoverController,
  ToastController,
} from "@ionic/angular";
import { CameraimageService } from "../cameraimage.service";
import { RestService } from "../rest.service";

import { Facebook, FacebookLoginResponse } from "@ionic-native/facebook/ngx";
import { GooglePlus } from "@ionic-native/google-plus/ngx";

import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { Storage } from "@ionic/storage";
import { VerifyMobileNumberPage } from "../verify-mobile-number/verify-mobile-number.page";
import { SubjectEventsService } from "../subject-events.service";
import { ToastLoaderService } from "../toast-loader.service";
//$ ionic cordova plugin add cordova-plugin-googleplus --variable REVERSED_CLIENT_ID=myreversedclientid

@Component({
  selector: "app-signup",
  templateUrl: "./signup.page.html",
  styleUrls: ["./signup.page.scss"],
})
export class SignupPage implements OnInit {
  name: any;
  firstName: any;
  lastName: any;
  mobileNumber: any;
  email: any;
  password: any;
  isSubmitted = false;
  nameError: boolean = false;
  firstNameError: boolean = false;
  lastNameError: boolean = false;
  mobileNumberError: boolean = false;
  emailError: boolean = false;
  passwordError: boolean = false;
  invalidEmailError: boolean = false;
  picError: boolean = false;
  profileImage: string;
  base64: string;
  apiResponse: any;
  response: any;
  loading: HTMLIonLoadingElement;
  validation: boolean = false;
  terms: boolean = false;
  offers: boolean = false;
  //baseUrl: string = 'https://annam39.sg-host.com/';
  baseUrl: string = "https://app.transusdrives.com/";
  termsError: boolean;

  stringyOfSignup: any = "";
  otp: any = "";
  otpArr: any = "";
  otpMsg: any = "";
  otpemail: any = "";
  responseOfOtp: any = "";
  platformIOS: boolean = false;

  constructor(
    public navCtrl: NavController,
    public loadingController: LoadingController,
    public subjectEvents: SubjectEventsService,
    public popoverController: PopoverController,
    public platform: Platform,
    private storage: Storage,
    public toastController: ToastController,
    public router: Router,
    public restService: RestService,
    public alertCtrl: AlertController,

    public imageService: CameraimageService,
    private facebook: Facebook,
    private googlePlus: GooglePlus,
    public imagePicker: ImagePicker
  ) {}

  ShowLoading: boolean = false;
  ngOnInit() {
    this.imagePicker.requestReadPermission();
    if (this.platform.is("ios")) {
      this.platformIOS = true;
    } else {
      this.platformIOS = false;
    }
  }

  submitForm() {
    this.validation = true;

    if (this.validateForm() == true) {
      var profileImg = this.profileImage.split(",")[1];
      //alert('true');
      this.stringyOfSignup = JSON.stringify({
        userName: this.name,
        firstName: this.firstName,
        lastName: this.lastName,
        mobileNo: this.mobileNumber,
        email: this.email,
        password: this.password,
        profilePic: profileImg,
        subscribedAlerts: "Yes",
        requestType: "signup",
        loginWith: "Email",
      });
      console.log(this.stringyOfSignup);

      var JsonForOTP = JSON.stringify({
        requestType: "send_otp",
        phone_number: this.mobileNumber,
        email: this.email,
      });
      localStorage.setItem("LoginWith", "phone");
      this.present();
      // this.ShowLoading = true;

      this.restService.authenticate(this.stringyOfSignup).subscribe(
        (response) => {
          this.response = JSON.parse(response["_body"]);
          console.log(this.response.status);
          if (this.response.status == "error") {
            this.presentToast(this.response.msg);
            // this.ShowLoading =false;
            this.dismiss();
          } else if (this.response.status == "success") {
            this.restService.auth_userAPI(JsonForOTP).subscribe((ress: any) => {
              console.log(ress);

              this.responseOfOtp = JSON.parse(ress["_body"]);

              console.log("respooooo", this.responseOfOtp);

              if (this.responseOfOtp.status == "success") {
                this.otp = this.responseOfOtp.otp_code;
                this.otpArr = this.responseOfOtp.otp_code_array;
                this.otpMsg = this.responseOfOtp.msg;
                this.otpemail = this.email;
                // this.ShowLoading = false;
                // this.toastService.dismiss()
                this.dismiss();
                this.verifyNumber();
              } else {
                this.otpMsg = this.responseOfOtp.msg;
                this.presentToast(this.otpMsg);
                // this.ShowLoading = false;
                this.dismiss();
              }

              this.dismiss();
            });
          }
        },
        (err) => {
          // this.ShowLoading = false
          this.dismiss();
        }
      );

      // this.present();
      // this.restService.authenticate(stringy).subscribe(response => {

      //   this.response = JSON.parse(response['_body']);
      //   console.log(this.response.status);
      //   if (this.response.status == 'error') {
      //     this.presentToast(this.response.msg);
      //     this.dismiss();
      //   } else if (this.response.status == 'success') {

      //     //this.router.navigate(['/']);
      //     this.dismiss();
      //

      //   }
      // }, err => {
      //   this.dismiss();
      // });
    }
  }

  validateForm() {
    console.log(this.offers);
    if (this.validation) {
      this.nameError = false;
      this.firstNameError = false;
      this.lastNameError = false;
      this.mobileNumberError = false;
      this.emailError = false;
      this.passwordError = false;
      this.invalidEmailError = false;
      this.picError = false;
      this.termsError = false;
      if (this.name == "" || this.name == undefined) {
        this.nameError = true;
        return false;
      } else if (this.firstName == "" || this.firstName == undefined) {
        this.firstNameError = true;
        return false;
      } else if (this.lastName == "" || this.lastName == undefined) {
        this.lastNameError = true;
        return false;
      } else if (this.mobileNumber == "" || this.mobileNumber == undefined) {
        this.mobileNumberError = true;
        return false;
      } else if (this.email == "" || this.email == undefined) {
        this.emailError = true;
        return false;
      } else if (this.ValidateEmail(this.email) == false) {
        this.invalidEmailError = true;
        return false;
      } else if (this.password == "" || this.password == undefined) {
        this.passwordError = true;
        return false;
      } else if (this.base64 == "" || this.base64 == undefined) {
        this.picError = true;
        return false;
      } else if (this.terms == false) {
        this.termsError = true;
        return false;
      } else {
        return true;
      }
    }
  }
  changeTerms(e) {
    if (e.detail.checked) {
      this.terms = true;
    } else {
      this.terms = false;
    }
    console.log(this.terms);
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
  LoginWithFacebook() {
    localStorage.setItem("LoginWith", "facebook");
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
            console.log(profile);
            var stringy = JSON.stringify({
              userName: profile["name"],
              email: profile["email"],
              profilePic: profile.picture_large.data.url,
              requestType: "signup",
              loginWith: "Facebook",
            });
            this.restService.authenticate(stringy).subscribe((response) => {
              this.response = JSON.parse(response["_body"]);
              console.log(this.response.status);
              if (this.response.status == "error") {
                this.presentToast(this.response.msg);
              } else if (this.response.status == "success") {
                //this.presentToast(this.response.msg);
                //this.router.navigate(['/']);
                // this.verifyNumber();
                console.log("new login", this.response.user_details);
                this.presentToast("Account Created Successfully");
                this.storage.set("user_details", this.response.user_details);
                this.storage.set(
                  "profile_img_url",
                  this.response.profile_img_url
                );
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
            });
            //this.userData = {email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']}
          });
      })
      .catch((e) => console.log("Error logging into Facebook", e));
  }
  LoginWithGoogle() {
    localStorage.setItem("LoginWith", "google");
    this.googlePlus
      .login({})
      .then((res) => {
        console.log(res);
        var stringy = JSON.stringify({
          userName: res.displayName,
          email: res.email,
          profilePic: "",
          requestType: "signup",
          loginWith: "Gmail",
        });
        this.restService.authenticate(stringy).subscribe((response) => {
          this.response = JSON.parse(response["_body"]);
          console.log(this.response.status);
          if (this.response.status == "error") {
            this.presentToast(this.response.msg);
          } else if (this.response.status == "success") {
            // this.presentToast(this.response.msg);
            //this.router.navigate(['/']);
            console.log(this.response, "line number 254");
            console.log("before varification");
            this.verifyNumber();
          }
        });
      })
      .catch((err) => console.log(err));
  }
  async verifyNumber() {
    const popover = await this.popoverController.create({
      component: VerifyMobileNumberPage,
      translucent: true,
      componentProps: {
        stringyOfSignup: this.stringyOfSignup,
        otp: this.otp,
        otpArr: this.otpArr,
        otpMsg: this.otpMsg,
        otpemail: this.email,
        mobileNumber: this.mobileNumber,
      },
    });
    popover.onWillDismiss().then((data) => {
      console.log(data);
      console.log(data.data.val);
      if (data.data.val == "ok") {
        console.log("enter in condition");

        if (localStorage.getItem("LoginWith") == "phone") {
          var stringy = JSON.stringify({
            requestType: "login",
            loginWith: "Email",
            email: this.email,
            password: this.password,
          });
          console.log(stringy);
          this.present();
          // this.ShowLoading = true;

          this.restService.authenticate(stringy).subscribe((response) => {
            this.response = JSON.parse(response["_body"]);
            console.log(this.response);
            if (this.response.status == "NotFound") {
              this.presentToast("Invalid email or password");
              // this.ShowLoading = false;
              this.dismiss();
            } else if (this.response.status == "Found") {
              // this.presentToast('Login successfully!');
              this.presentToast("Account Created Successfully");
              this.storage.set("user_details", this.response.user_details);
              this.storage.set(
                "profile_img_url",
                this.response.profile_img_url
              );
              this.storage.set("country_name", this.response.country_name);
              this.storage.set("base_urls", this.baseUrl);
              this.storage.set(
                "currency_symbol",
                this.response.user_details.symbol
              );
              this.subjectEvents.publishSomeData({
                sidebar: "sidebar",
              });
              this.dismiss();
              this.navCtrl.navigateRoot("/");
            }
          });
        } else if (localStorage.getItem("LoginWith") == "google") {
          console.log(this.response, "line number 279");
          this.storage.set("user_details", this.response.user_details);
          this.storage.set(
            "currency_symbol",
            this.response.user_details.symbol
          );
          this.storage.set("profile_img_url", this.response.profile_img_url);
          this.storage.set("base_urls", this.baseUrl);
          this.presentToast("Account Created Successfully");
          this.subjectEvents.publishSomeData({
            sidebar: "sidebar",
          });
          this.navCtrl.navigateRoot("/");
        } else if (localStorage.getItem("LoginWith") == "facebook") {
          console.log(this.response, "line number 279");
          this.storage.set("user_details", this.response.user_details);
          this.storage.set(
            "currency_symbol",
            this.response.user_details.symbol
          );
          this.storage.set("profile_img_url", this.response.profile_img_url);
          this.storage.set("base_urls", this.baseUrl);
          this.presentToast("Account Created Successfully");
          this.subjectEvents.publishSomeData({
            sidebar: "sidebar",
          });
          this.navCtrl.navigateRoot("/");
        }
      }
    });
    return await popover.present();
  }

  async uploadProfile() {
    let alert = await this.alertCtrl.create({
      message: "Upload Profile Photo?",
      buttons: [
        {
          text: "Take image from camera",
          handler: () => {
            this.takeImageFromCamera();
          },
        },
        {
          text: "Upload image from gallery",
          handler: () => {
            this.getImageFromGallery();
          },
        },
      ],
    });
    alert.present();
  }

  // async uploadProfile() {
  //   this.takeImageFromCamera();
  // }

  Gallery: boolean = true;
  takeImageFromCamera() {
    this.imageService
      .selectImageInCamera()
      .then((imageData) => {
        this.profileImage = `data:image/png;base64,${imageData}`;
        this.base64 = `${imageData}`;
        this.Gallery = false;
        this.validateForm();
      })
      .catch((err) => console.error(err));
  }
  // getImageFromGallery() {
  //   this.imageService
  //     .selectImageInGallery()
  //     .then((imageData) => {
  //       this.profileImage = `data:image/png;base64,${imageData}`;
  //       this.base64 = `${imageData}`;
  //       this.Gallery = true;
  //       this.validateForm();
  //     })
  //     .catch((err) => console.error(err));
  // }

  getImageFromGallery() {
    var options = {
      maximumImagesCount: 1,
      outputType: 1,
      quality: 90,
    };
    this.imagePicker.getPictures(options).then(
      (imageData) => {
        this.profileImage = `data:image/png;base64,${imageData}`;
        this.base64 = `${imageData}`;
        this.Gallery = true;
        this.validateForm();
      },
      (err) => {
        console.log(err, "error in images??");
      }
    );
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: "top",
    });
    toast.present();
  }
  Gotologin() {
    this.router.navigate(["/login"]);
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

  termAndPolicy() {
    console.log("click on term aand policy");
    window.open("https://www.google.com/");
  }
}
