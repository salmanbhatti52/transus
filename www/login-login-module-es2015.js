(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content  >\n  <!-- style=\"--background:url(assets/img/Background.png)  0 0/100% 100% no-repeat;\" -->\n  <ion-header class=\"ion-no-border\" style=\"background: transparent;\">\n    <ion-toolbar class=\"toolbar\" style=\"--background: transparent;\n    \">\n      <ion-row>\n        <ion-col class=\"back_arrow\">\n          <img src=\"assets/img/Arrow.svg\" (click)=\"goToHome()\">\n        </ion-col>\n      </ion-row>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-row style=\"margin-top: -30px;\">\n    <ion-col class=\"ion-text-center logo\">\n      <img style=\"height: 140px;\" src=\"assets/img/logo.png\">\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf=\"ShowLoading\" style=\"position: absolute; width: 100%; z-index: 9999;\">\n    <ion-col style=\"text-align: center;\">\n      <img style=\"width: 90px;\" src=\"assets/img/Loader.gif\">\n    </ion-col>\n  </ion-row>\n  <div class=\"bp\">\n\n  \n\n    <ion-row>\n      <ion-col>\n        <ion-input placeholder=\"Email\" class=\"rm_auto\" [(ngModel)]=\"email\" (ionBlur)=\"validateForm()\"></ion-input>\n        <span *ngIf=\"emailError\" class=\"error ion-padding\">\n          Email is required.\n        </span>\n        <span *ngIf=\"invalidEmailError\" class=\"error ion-padding\">\n          Please enter a valid email address\n\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-input type=\"password\" class=\"rm_auto\" placeholder=\"password\" [(ngModel)]=\"password\"\n        (ionChange)=\"Viewpasswod($event)\" (ionBlur)=\"validateForm()\"></ion-input>\n        <span *ngIf=\"passwordError\" class=\"error ion-padding\">\n          Password is required.\n        </span>\n        <!--span class=\"error ion-padding\" >\n            Password should be min 6 chars long.\n          </span-->\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col  class=\"ion-text-right\">\n        <p  style=\"text-align: center;\" class=\"white\" (click)=\"forgotPassword()\">Forgot your password?</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"ion-text-center parent_btn\">\n        <ion-button color=\"primary\" shape=\"round\" expand=\"block\" (click)=\"submitForm()\">Login</ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"bb_top\">\n      <ion-col size=\"5\">\n        <hr class=\"bb\">\n      </ion-col>\n      <ion-col size=\"2\" class=\"white ion-text-center\">OR</ion-col>\n      <ion-col size=\"5\">\n        <hr class=\"bb\">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\" class=\"ion-text-left\">\n        <ion-button class=\"fb\">\n          <img src=\"assets/img/Facebook.svg\" (click)=\"LoginWithFacebook()\">\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\" class=\"ion-text-right\">\n        <ion-button class=\"google\">\n          <img src=\"assets/img/google.svg\" (click)=\"LoginWithGoogleOld()\">\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n  <ion-row>\n    <ion-col class=\"ion-text-center\" (click)=\"GotoSignup()\">\n      <p class=\"white signup_text\">Don't have an account? Sign up</p>\n    </ion-col>\n  </ion-row>\n</ion-content>");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _verify_new_code_verify_new_code_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../verify-new-code/verify-new-code.module */ "./src/app/verify-new-code/verify-new-code.module.ts");








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginPageRoutingModule"],
            _verify_new_code_verify_new_code_module__WEBPACK_IMPORTED_MODULE_7__["VerifyNewCodePageModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --color: #fff;\n  --background:none;\n  background-color: #000000;\n  --background-color: #000000;\n  background: url('Background.png') no-repeat 0 0;\n  background-size: cover;\n}\n\n.background-image {\n  --background: url(\"/assets/img/Background.png\") 0 0/100% 100% no-repeat;\n  background-size: cover;\n}\n\n.back_arrow {\n  margin-top: 1.5em;\n  margin-left: 1em;\n}\n\n.logo {\n  margin: 0em 0em;\n}\n\nion-input {\n  border: 1px solid #fff;\n  border-radius: 25px;\n  --padding-bottom: 1em;\n  --padding-top: 1em;\n  --color: #fff;\n  --padding-start: 1em;\n  margin-top: 0.4em;\n}\n\n.bp {\n  padding: 0em 15%;\n}\n\n.white {\n  color: #fff;\n}\n\nion-button {\n  --padding-bottom: 1.45em;\n  --padding-top: 1.45em;\n  --box-shadow: none;\n  font-size: 18px;\n  text-transform: capitalize;\n}\n\n.parent_btn {\n  margin: 0 1em;\n}\n\n.bb {\n  border-bottom: 1px solid #fff;\n}\n\n.bb_top {\n  margin: 18px 0px 0px;\n}\n\n.fb {\n  --background: #3245b8;\n  --padding-start: 1em;\n  --padding-end: 1em;\n  --border-radius: 25px;\n}\n\n.google {\n  --background: #f04336;\n  --padding-start: 1em;\n  --padding-end: 1em;\n  --border-radius: 25px;\n}\n\n.signup_text {\n  margin-top: 30px;\n}\n\n.error {\n  color: red;\n  font-size: 12px;\n}\n\n@media only screen and (min-height: 700px) {\n  .logo {\n    margin: 3em 0em;\n  }\n\n  .bp {\n    padding: 0% 15% 6% 15%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQ0FBQTtFQUNBLHNCQUFBO0FBZko7O0FBa0JBO0VBQ0ksdUVBQUE7RUFDQSxzQkFBQTtBQWZKOztBQWlCQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFkSjs7QUFnQkE7RUFDSSxlQUFBO0FBYko7O0FBZUE7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBWko7O0FBY0E7RUFDSSxnQkFBQTtBQVhKOztBQWFBO0VBQ0ksV0FBQTtBQVZKOztBQVlBO0VBQ0ksd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FBVEo7O0FBV0E7RUFDSSxhQUFBO0FBUko7O0FBVUE7RUFDSSw2QkFBQTtBQVBKOztBQVNBO0VBQ0ksb0JBQUE7QUFOSjs7QUFRQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBTEo7O0FBT0E7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUpKOztBQU1BO0VBQ0ksZ0JBQUE7QUFISjs7QUFLQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FBRko7O0FBSUE7RUFDSTtJQUNJLGVBQUE7RUFETjs7RUFHRTtJQUNJLHNCQUFBO0VBQU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi1jb250ZW50IHtcbi8vICAgICAt4oCTY29sb3I6ICNmZmY7XG4vLyAgICAgLeKAk2JhY2tncm91bmQ6IG5vbmU7XG4vLyAgICAgYmFja2dyb3VuZDogdXJsKOKApi/igKYvYXNzZXRzL2ltZy9CYWNrZ3JvdW5kLnBuZykgbm8tcmVwZWF0IDAgMDtcbi8vICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuLy8gfVxuXG4vLyBpb24tY29udGVudCB7XG4vLyAgICAgLy8gLS1iYWNrZ3JvdW5kOiB1cmwoXCJhc3NldHMvaW1ncy9iZ1Muc3ZnXCIpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuXG4vLyAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoXCJhc3NldHMvaW1ncy9iZy5wbmdcIikgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG5cbi8vICAgICAvLyAtLWJhY2tncm91bmQ6IGJsYWNrO1xuLy8gfVxuXG4gXG5pb24tY29udGVudCB7XG4gICAgLS1jb2xvcjogI2ZmZjtcbiAgICAtLWJhY2tncm91bmQ6bm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9CYWNrZ3JvdW5kLnBuZykgbm8tcmVwZWF0IDAgMDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uYmFja2dyb3VuZC1pbWFnZXtcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvQmFja2dyb3VuZC5wbmcnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLmJhY2tfYXJyb3cge1xuICAgIG1hcmdpbi10b3A6IDEuNWVtO1xuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG59XG4ubG9nbyB7XG4gICAgbWFyZ2luOiAwZW0gMGVtO1xufVxuaW9uLWlucHV0IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMWVtO1xuICAgIC0tcGFkZGluZy10b3A6IDFlbTtcbiAgICAtLWNvbG9yOiAjZmZmO1xuICAgIC0tcGFkZGluZy1zdGFydDogMWVtO1xuICAgIG1hcmdpbi10b3A6IDAuNGVtO1xufVxuLmJwIHtcbiAgICBwYWRkaW5nOiAwZW0gMTUlO1xufVxuLndoaXRlIHtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbmlvbi1idXR0b24ge1xuICAgIC0tcGFkZGluZy1ib3R0b206IDEuNDVlbTtcbiAgICAtLXBhZGRpbmctdG9wOiAxLjQ1ZW07XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5wYXJlbnRfYnRuIHtcbiAgICBtYXJnaW46IDAgMWVtO1xufVxuLmJiIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbn1cbi5iYl90b3Age1xuICAgIG1hcmdpbjogMThweCAwcHggMHB4O1xufVxuLmZiIHtcbiAgICAtLWJhY2tncm91bmQ6ICMzMjQ1Yjg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxZW07XG4gICAgLS1wYWRkaW5nLWVuZDogMWVtO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMjVweDtcbn1cbi5nb29nbGUge1xuICAgIC0tYmFja2dyb3VuZDogI2YwNDMzNjtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDFlbTtcbiAgICAtLXBhZGRpbmctZW5kOiAxZW07XG4gICAgLS1ib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuLnNpZ251cF90ZXh0IHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLmVycm9yIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLWhlaWdodCA6IDcwMHB4KSB7XG4gICAgLmxvZ28ge1xuICAgICAgICBtYXJnaW46IDNlbSAwZW07XG4gICAgfVxuICAgIC5icHtcbiAgICAgICAgcGFkZGluZzogMCUgMTUlIDYlIDE1JTtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _forgot_password_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../forgot-password/forgot-password.page */ "./src/app/forgot-password/forgot-password.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _subject_events_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../subject-events.service */ "./src/app/subject-events.service.ts");
/* harmony import */ var _verify_new_code_verify_new_code_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../verify-new-code/verify-new-code.page */ "./src/app/verify-new-code/verify-new-code.page.ts");











//com.googleusercontent.apps.167698651548-6fcki9irrlk2p6mmjaqnee4iq0tr10sr
//ionic cordova plugin add cordova-plugin-facebook4 --variable APP_ID="2427294527578148" --variable APP_NAME="myApplication"
let LoginPage = class LoginPage {
    constructor(navCtrl, loadingController, 
    //private events: Events,
    subjectEvents, toastController, storage, popoverController, router, restService, facebook, googlePlus) {
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.subjectEvents = subjectEvents;
        this.toastController = toastController;
        this.storage = storage;
        this.popoverController = popoverController;
        this.router = router;
        this.restService = restService;
        this.facebook = facebook;
        this.googlePlus = googlePlus;
        this.isSubmitted = false;
        this.emailError = false;
        this.passwordError = false;
        this.invalidEmailError = false;
        this.validation = false;
        this.baseUrl = "https://app.transusdrives.com/";
        this.ShowLoading = false;
    }
    ngOnInit() { }
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
            this.restService.authenticate(stringy).subscribe((response) => {
                this.response = JSON.parse(response["_body"]);
                console.log("Raw detailss after login", this.response);
                if (this.response.status == "NotFound") {
                    this.presentToast("Invalid email or password");
                    // this.ShowLoading = false;
                    this.dismiss();
                }
                else if (this.response.status == "error") {
                    this.presentToast("Invalid email or password");
                    // this.ShowLoading = false;
                    this.dismiss();
                }
                else if (this.response.status == "Found") {
                    this.presentToast("Login successfully!");
                    localStorage.setItem("users_id", this.response.user_details.users_id);
                    console.log("login detailssss----", this.response.user_details);
                    this.storage.set("user_details", this.response.user_details);
                    this.storage.set("profile_img_url", this.response.profile_img_url);
                    this.storage.set("country_name", this.response.country_name);
                    this.storage.set("base_urls", this.baseUrl);
                    this.storage.set("currency_symbol", this.response.user_details.symbol);
                    this.subjectEvents.publishSomeData({
                        sidebar: "sidebar",
                    });
                    this.navCtrl.navigateRoot("/");
                }
                this.dismiss();
                // this.ShowLoading = false;
            }, (err) => {
                this.presentToast("Oops! somthing went wrong.");
                this.dismiss();
                // this.ShowLoading = false;
            });
        }
    }
    LoginWithFacebook() {
        console.log("facebook login............................");
        // this.ShowLoading = true;
        //this.present();
        // this.facebook.login(['public_profile', 'email']).then((res: FacebookLoginResponse) => {
        this.facebook
            .login(["public_profile", "email"])
            .then((res) => {
            console.log("Logged into Facebook!", res);
            this.facebook
                .api("me?fields=id,name,email,first_name,picture.width(626).height(939).as(picture_large)", [])
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
                    }
                    else if (this.response.status == "Found") {
                        this.presentToast("Login successfully!");
                        this.storage.set("user_details", this.response.user_details);
                        this.storage.set("profile_img_url", this.response.profile_img_url);
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
                }
                else if (this.response.status == "Found") {
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
                }
                else if (this.response.status == "success") {
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
                    this.storage.set("profile_img_url", "uploads/users/profile_pic/temp/profile_pic_13trans_us.png");
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
        }
        else if (this.ValidateEmail(this.email) == false) {
            this.invalidEmailError = true;
            return false;
        }
        else if (this.password == "" || this.password == undefined) {
            this.passwordError = true;
            return false;
        }
        else {
            return true;
        }
        //  }
    }
    ValidateEmail(mail) {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
            return true;
        }
        else {
            //alert("You have entered an invalid email address!")
            return false;
        }
    }
    forgotPassword() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                backdropDismiss: false,
                component: _forgot_password_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"],
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
            return yield popover.present();
        });
    }
    verifyCodeNewPass() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _verify_new_code_verify_new_code_page__WEBPACK_IMPORTED_MODULE_10__["VerifyNewCodePage"],
                backdropDismiss: false,
                componentProps: {
                //"data": extra_info
                },
                translucent: true,
            });
            popover.onWillDismiss().then((data) => {
                console.log(data);
            });
            return yield popover.present();
        });
    }
    presentToast(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000,
                position: "top",
            });
            toast.present();
        });
    }
    GotoSignup() {
        this.router.navigate(["/signup"]);
    }
    goToHome() {
        this.router.navigate(["/"]);
    }
    present() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: "Please wait...",
            });
            yield this.loading.present();
        });
    }
    dismiss() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loading.dismiss();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
    { type: _subject_events_service__WEBPACK_IMPORTED_MODULE_9__["SubjectEventsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"] },
    { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_4__["Facebook"] },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_5__["GooglePlus"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map