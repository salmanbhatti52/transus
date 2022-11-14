(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <!-- style=\"--background:url(assets/img/Background.png)  0 0/100% 100% no-repeat;\" -->\n  <ion-header class=\"ion-no-border\" style=\"background: transparent\">\n    <ion-toolbar class=\"toolbar\" style=\"--background: transparent\">\n      <ion-row>\n        <ion-col class=\"back_arrow\">\n          <img src=\"assets/img/Arrow.svg\" (click)=\"goToHome()\" />\n        </ion-col>\n      </ion-row>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-row style=\"margin-top: -30px\">\n    <ion-col class=\"ion-text-center logo\">\n      <img style=\"height: 140px\" src=\"assets/img/logo.png\" />\n    </ion-col>\n  </ion-row>\n\n  <ion-row\n    *ngIf=\"ShowLoading\"\n    style=\"position: absolute; width: 100%; z-index: 9999\"\n  >\n    <ion-col style=\"text-align: center\">\n      <img style=\"width: 90px\" src=\"assets/img/Loader.gif\" />\n    </ion-col>\n  </ion-row>\n  <div class=\"bp\">\n    <ion-row>\n      <ion-col>\n        <ion-input\n          placeholder=\"Email\"\n          class=\"rm_auto\"\n          [(ngModel)]=\"email\"\n          (ionBlur)=\"validateForm()\"\n        ></ion-input>\n        <span *ngIf=\"emailError\" class=\"error ion-padding\">\n          Email is required.\n        </span>\n        <span *ngIf=\"invalidEmailError\" class=\"error ion-padding\">\n          Please enter a valid email address\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-input\n          type=\"password\"\n          class=\"rm_auto\"\n          placeholder=\"password\"\n          [(ngModel)]=\"password\"\n          (ionChange)=\"Viewpasswod($event)\"\n          (ionBlur)=\"validateForm()\"\n        ></ion-input>\n        <span *ngIf=\"passwordError\" class=\"error ion-padding\">\n          Password is required.\n        </span>\n        <!--span class=\"error ion-padding\" >\n            Password should be min 6 chars long.\n          </span-->\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"ion-text-right\">\n        <p style=\"text-align: center\" class=\"white\" (click)=\"forgotPassword()\">\n          Forgot your password?\n        </p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"ion-text-center parent_btn\">\n        <ion-button\n          color=\"primary\"\n          shape=\"round\"\n          expand=\"block\"\n          (click)=\"submitForm()\"\n          >Login</ion-button\n        >\n      </ion-col>\n    </ion-row>\n\n    <!-- hide -->\n\n    <div *ngIf=\"get_social_media_login == 'On'\">\n      <ion-row class=\"bb_top\">\n        <ion-col size=\"5\">\n          <hr class=\"bb\" />\n        </ion-col>\n        <ion-col size=\"2\" class=\"white ion-text-center\">OR</ion-col>\n        <ion-col size=\"5\">\n          <hr class=\"bb\" />\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\" class=\"ion-text-left\">\n          <ion-button class=\"fb\">\n            <img src=\"assets/img/Facebook.svg\" (click)=\"LoginWithFacebook()\" />\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"6\" class=\"ion-text-right\">\n          <ion-button class=\"google\">\n            <img src=\"assets/img/google.svg\" (click)=\"LoginWithGoogleOld()\" />\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </div>\n    <!-- hide -->\n  </div>\n  <ion-row>\n    <ion-col class=\"ion-text-center\" (click)=\"GotoSignup()\">\n      <p class=\"white signup_text\">Don't have an account? Sign up</p>\n    </ion-col>\n  </ion-row>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/login/login-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/login/login-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/login/login.page.ts");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = /*#__PURE__*/_createClass(function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      });

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/login/login.module.ts":
    /*!***************************************!*\
      !*** ./src/app/login/login.module.ts ***!
      \***************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./login-routing.module */
      "./src/app/login/login-routing.module.ts");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/login/login.page.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _verify_new_code_verify_new_code_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../verify-new-code/verify-new-code.module */
      "./src/app/verify-new-code/verify-new-code.module.ts");

      var LoginPageModule = /*#__PURE__*/_createClass(function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      });

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginPageRoutingModule"], _verify_new_code_verify_new_code_module__WEBPACK_IMPORTED_MODULE_7__["VerifyNewCodePageModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "./src/app/login/login.page.scss":
    /*!***************************************!*\
      !*** ./src/app/login/login.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --color: #fff;\n  --background:none;\n  background-color: #000000;\n  --background-color: #000000;\n  background: url('Background.png') no-repeat 0 0;\n  background-size: cover;\n}\n\n.background-image {\n  --background: url(\"/assets/img/Background.png\") 0 0/100% 100% no-repeat;\n  background-size: cover;\n}\n\n.back_arrow {\n  margin-top: 1.5em;\n  margin-left: 1em;\n}\n\n.logo {\n  margin: 0em 0em;\n}\n\nion-input {\n  border: 1px solid #fff;\n  border-radius: 25px;\n  --padding-bottom: 1em;\n  --padding-top: 1em;\n  --color: #fff;\n  --padding-start: 1em;\n  margin-top: 0.4em;\n}\n\n.bp {\n  padding: 0em 15%;\n}\n\n.white {\n  color: #fff;\n}\n\nion-button {\n  --padding-bottom: 1.45em;\n  --padding-top: 1.45em;\n  --box-shadow: none;\n  font-size: 18px;\n  text-transform: capitalize;\n}\n\n.parent_btn {\n  margin: 0 1em;\n}\n\n.bb {\n  border-bottom: 1px solid #fff;\n}\n\n.bb_top {\n  margin: 18px 0px 0px;\n}\n\n.fb {\n  --background: #3245b8;\n  --padding-start: 1em;\n  --padding-end: 1em;\n  --border-radius: 25px;\n}\n\n.google {\n  --background: #f04336;\n  --padding-start: 1em;\n  --padding-end: 1em;\n  --border-radius: 25px;\n}\n\n.signup_text {\n  margin-top: 30px;\n}\n\n.error {\n  color: red;\n  font-size: 12px;\n}\n\n@media only screen and (min-height: 700px) {\n  .logo {\n    margin: 3em 0em;\n  }\n\n  .bp {\n    padding: 0% 15% 6% 15%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQ0FBQTtFQUNBLHNCQUFBO0FBZko7O0FBa0JBO0VBQ0ksdUVBQUE7RUFDQSxzQkFBQTtBQWZKOztBQWlCQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFkSjs7QUFnQkE7RUFDSSxlQUFBO0FBYko7O0FBZUE7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBWko7O0FBY0E7RUFDSSxnQkFBQTtBQVhKOztBQWFBO0VBQ0ksV0FBQTtBQVZKOztBQVlBO0VBQ0ksd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FBVEo7O0FBV0E7RUFDSSxhQUFBO0FBUko7O0FBVUE7RUFDSSw2QkFBQTtBQVBKOztBQVNBO0VBQ0ksb0JBQUE7QUFOSjs7QUFRQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBTEo7O0FBT0E7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUpKOztBQU1BO0VBQ0ksZ0JBQUE7QUFISjs7QUFLQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FBRko7O0FBSUE7RUFDSTtJQUNJLGVBQUE7RUFETjs7RUFHRTtJQUNJLHNCQUFBO0VBQU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi1jb250ZW50IHtcbi8vICAgICAt4oCTY29sb3I6ICNmZmY7XG4vLyAgICAgLeKAk2JhY2tncm91bmQ6IG5vbmU7XG4vLyAgICAgYmFja2dyb3VuZDogdXJsKOKApi/igKYvYXNzZXRzL2ltZy9CYWNrZ3JvdW5kLnBuZykgbm8tcmVwZWF0IDAgMDtcbi8vICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuLy8gfVxuXG4vLyBpb24tY29udGVudCB7XG4vLyAgICAgLy8gLS1iYWNrZ3JvdW5kOiB1cmwoXCJhc3NldHMvaW1ncy9iZ1Muc3ZnXCIpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuXG4vLyAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoXCJhc3NldHMvaW1ncy9iZy5wbmdcIikgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG5cbi8vICAgICAvLyAtLWJhY2tncm91bmQ6IGJsYWNrO1xuLy8gfVxuXG4gXG5pb24tY29udGVudCB7XG4gICAgLS1jb2xvcjogI2ZmZjtcbiAgICAtLWJhY2tncm91bmQ6bm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9CYWNrZ3JvdW5kLnBuZykgbm8tcmVwZWF0IDAgMDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uYmFja2dyb3VuZC1pbWFnZXtcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvQmFja2dyb3VuZC5wbmcnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLmJhY2tfYXJyb3cge1xuICAgIG1hcmdpbi10b3A6IDEuNWVtO1xuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG59XG4ubG9nbyB7XG4gICAgbWFyZ2luOiAwZW0gMGVtO1xufVxuaW9uLWlucHV0IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMWVtO1xuICAgIC0tcGFkZGluZy10b3A6IDFlbTtcbiAgICAtLWNvbG9yOiAjZmZmO1xuICAgIC0tcGFkZGluZy1zdGFydDogMWVtO1xuICAgIG1hcmdpbi10b3A6IDAuNGVtO1xufVxuLmJwIHtcbiAgICBwYWRkaW5nOiAwZW0gMTUlO1xufVxuLndoaXRlIHtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbmlvbi1idXR0b24ge1xuICAgIC0tcGFkZGluZy1ib3R0b206IDEuNDVlbTtcbiAgICAtLXBhZGRpbmctdG9wOiAxLjQ1ZW07XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5wYXJlbnRfYnRuIHtcbiAgICBtYXJnaW46IDAgMWVtO1xufVxuLmJiIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbn1cbi5iYl90b3Age1xuICAgIG1hcmdpbjogMThweCAwcHggMHB4O1xufVxuLmZiIHtcbiAgICAtLWJhY2tncm91bmQ6ICMzMjQ1Yjg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxZW07XG4gICAgLS1wYWRkaW5nLWVuZDogMWVtO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMjVweDtcbn1cbi5nb29nbGUge1xuICAgIC0tYmFja2dyb3VuZDogI2YwNDMzNjtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDFlbTtcbiAgICAtLXBhZGRpbmctZW5kOiAxZW07XG4gICAgLS1ib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuLnNpZ251cF90ZXh0IHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLmVycm9yIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLWhlaWdodCA6IDcwMHB4KSB7XG4gICAgLmxvZ28ge1xuICAgICAgICBtYXJnaW46IDNlbSAwZW07XG4gICAgfVxuICAgIC5icHtcbiAgICAgICAgcGFkZGluZzogMCUgMTUlIDYlIDE1JTtcbiAgICB9XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/login/login.page.ts":
    /*!*************************************!*\
      !*** ./src/app/login/login.page.ts ***!
      \*************************************/

    /*! exports provided: LoginPage */

    /***/
    function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../rest.service */
      "./src/app/rest.service.ts");
      /* harmony import */


      var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/facebook/ngx */
      "./node_modules/@ionic-native/facebook/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/google-plus/ngx */
      "./node_modules/@ionic-native/google-plus/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _forgot_password_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../forgot-password/forgot-password.page */
      "./src/app/forgot-password/forgot-password.page.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _subject_events_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../subject-events.service */
      "./src/app/subject-events.service.ts");
      /* harmony import */


      var _verify_new_code_verify_new_code_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../verify-new-code/verify-new-code.page */
      "./src/app/verify-new-code/verify-new-code.page.ts"); //com.googleusercontent.apps.167698651548-6fcki9irrlk2p6mmjaqnee4iq0tr10sr
      //ionic cordova plugin add cordova-plugin-facebook4 --variable APP_ID="2427294527578148" --variable APP_NAME="myApplication"


      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(navCtrl, loadingController, //private events: Events,
        subjectEvents, toastController, storage, popoverController, router, restService, facebook, googlePlus) {
          _classCallCheck(this, LoginPage);

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

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.get_social_media_login = localStorage.getItem("get_social_media_login");
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            var _this = this;

            // this.navCtrl.navigateForward('paymentest');
            this.validation = true;

            if (this.validateForm() == true) {
              var stringy = JSON.stringify({
                requestType: "login",
                loginWith: "Email",
                email: this.email,
                password: this.password
              });
              console.log(stringy);
              this.present(); // this.ShowLoading = true;

              this.restService.authenticate(stringy).subscribe(function (response) {
                _this.response = JSON.parse(response["_body"]);
                console.log("Raw detailss after login", _this.response);

                if (_this.response.status == "NotFound") {
                  _this.presentToast("Invalid email or password"); // this.ShowLoading = false;


                  _this.dismiss();
                } else if (_this.response.status == "error") {
                  _this.presentToast("Invalid email or password"); // this.ShowLoading = false;


                  _this.dismiss();
                } else if (_this.response.status == "Found") {
                  _this.presentToast("Login successfully!");

                  localStorage.setItem("users_id", _this.response.user_details.users_id);
                  localStorage.setItem("imageofuserprofile", _this.restService.baseURLforProfileimg + "" + _this.response.user_details.profile_image);
                  _this.restService.imageofuserprofile = _this.restService.baseURLforProfileimg + "" + _this.response.user_details.profile_image;
                  console.log("login detailssss----", _this.response);

                  _this.storage.set("user_details", _this.response.user_details);

                  _this.storage.set("profile_img_url", _this.response.user_details.profile_image);

                  _this.storage.set("country_name", _this.response.country_name);

                  _this.storage.set("base_urls", _this.baseUrl);

                  _this.storage.set("currency_symbol", _this.response.user_details.symbol);

                  _this.subjectEvents.publishSomeData({
                    sidebar: "sidebar"
                  });

                  _this.navCtrl.navigateRoot("/");
                }

                _this.dismiss(); // this.ShowLoading = false;

              }, function (err) {
                _this.presentToast("Oops! somthing went wrong.");

                _this.dismiss(); // this.ShowLoading = false;

              });
            }
          }
        }, {
          key: "LoginWithFacebook",
          value: function LoginWithFacebook() {
            var _this2 = this;

            console.log("facebook login............................"); // this.ShowLoading = true;
            //this.present();
            // this.facebook.login(['public_profile', 'email']).then((res: FacebookLoginResponse) => {

            this.facebook.login(["public_profile", "email"]).then(function (res) {
              console.log("Logged into Facebook!", res);

              _this2.facebook.api("me?fields=id,name,email,first_name,picture.width(626).height(939).as(picture_large)", []).then(function (profile) {
                console.log("my profile----->", profile);

                _this2.present();

                var stringy = JSON.stringify({
                  // requestType: 'login',
                  // "loginWith": "Facebook",
                  // email: profile['email']
                  requestType: "login",
                  loginWith: "Facebook",
                  userName: profile.name,
                  profilePic: "",
                  email: profile.email,
                  fbID: profile.id
                });
                console.log("my facebook data", stringy);

                _this2.restService.authenticate(stringy).subscribe(function (response) {
                  _this2.response = JSON.parse(response["_body"]);
                  console.log("Facebook login0-------res-------", _this2.response);

                  if (_this2.response.status == "NotFound") {
                    _this2.presentToast("Inavlid email or password");

                    _this2.dismiss();
                  } else if (_this2.response.status == "Found") {
                    _this2.presentToast("Login successfully!");

                    _this2.storage.set("user_details", _this2.response.user_details);

                    _this2.storage.set("profile_img_url", _this2.response.profile_img_url);

                    _this2.storage.set("country_name", _this2.response.country_name);

                    _this2.storage.set("base_urls", _this2.baseUrl); // this.events.publish('sidebar', 'sidebar');


                    _this2.subjectEvents.publishSomeData({
                      sidebar: "sidebar"
                    });

                    _this2.navCtrl.navigateRoot("/");
                  } // this.ShowLoading = false;


                  _this2.dismiss();
                }); //this.userData = {email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']}
                // this.ShowLoading = false;


                _this2.dismiss();
              });
            })["catch"](function (e) {
              return console.log("Error logging into Facebook", e);
            });
            this.facebook.logEvent(this.facebook.EVENTS.EVENT_NAME_ADDED_TO_CART);
          }
        }, {
          key: "LoginWithGoogleOld",
          value: function LoginWithGoogleOld() {
            var _this3 = this;

            this.googlePlus.login({}).then(function (res) {
              console.log(res);
              var stringy = JSON.stringify({
                requestType: "google_login",
                loginWith: "Gmail",
                email: res.email
              });

              _this3.present(); // AIzaSyAB8SM4pGFdI5bBjmjNUswS-yLcTpuNUSs


              _this3.restService.authenticate(stringy).subscribe(function (response) {
                _this3.response = JSON.parse(response["_body"]);
                console.log(_this3.response);

                _this3.dismiss();

                console.log("google login0-------res-------", _this3.response);

                if (_this3.response.status == "NotFound") {
                  _this3.presentToast("Invalid email or password");
                } else if (_this3.response.status == "Found") {
                  _this3.presentToast("Login successfully!");

                  console.log(_this3.response.user_details);

                  _this3.storage.set("user_details", _this3.response.user_data);

                  _this3.storage.get("user_details").then(function (user_details) {
                    console.log("my user detail login page ====", user_details);
                  });

                  _this3.storage.set("profile_img_url", _this3.response.profile_img_url);

                  _this3.storage.set("country_name", _this3.response.country_name);

                  _this3.storage.set("base_urls", _this3.baseUrl); //  this.events.publish('sidebar', 'sidebar');


                  _this3.subjectEvents.publishSomeData({
                    sidebar: "sidebar"
                  });

                  _this3.navCtrl.navigateRoot("/");

                  _this3.dismiss();
                }
              });
            })["catch"](function (err) {
              return console.log(err);
            });
          }
        }, {
          key: "LoginWithGoogle",
          value: function LoginWithGoogle() {
            var _this4 = this;

            console.log("gplus looooooooooo.............................!!!!!!");
            this.googlePlus.login({}).then(function (res) {
              console.log("gplus login", res);
              var stringy = JSON.stringify({
                //"requestType": "loginwithgoogle",
                requestType: "google_login",
                loginWith: "Gmail",
                email: res.email,
                user_name: res.displayName
              });
              console.log("google res stringy", stringy); // AIzaSyAB8SM4pGFdI5bBjmjNUswS-yLcTpuNUSs

              _this4.restService.authenticate(stringy).subscribe(function (response) {
                _this4.response = JSON.parse(response["_body"]);
                console.log("google login0-------res-------", _this4.response);

                if (_this4.response.status == "error") {
                  _this4.presentToast("Invalid email or password");
                } else if (_this4.response.status == "success") {
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
                  _this4.presentToast("Login successfully!");

                  _this4.storage.set("user_details", _this4.response.user_details); // this.storage.set('profile_img_url', this.response.profile_img_url);


                  _this4.storage.set("profile_img_url", "uploads/users/profile_pic/temp/profile_pic_13trans_us.png");

                  _this4.storage.set("country_name", "Andorra");

                  _this4.storage.set("base_urls", _this4.baseUrl); // this.events.publish('sidebar', 'sidebar');


                  _this4.subjectEvents.publishSomeData({
                    sidebar: "sidebar"
                  });

                  _this4.navCtrl.navigateRoot("/");
                }
              });
            })["catch"](function (err) {
              return console.log("gplus err--------------", err);
            });
          }
        }, {
          key: "Viewpasswod",
          value: function Viewpasswod(event) {
            this.value = event.detail.value;

            if (this.value.length > 0) {
              this.passwordError = false;
            }
          }
        }, {
          key: "validateForm",
          value: function validateForm() {
            // if(this.validation){
            this.emailError = false; // this.passwordError = false;

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
            } //  }

          }
        }, {
          key: "ValidateEmail",
          value: function ValidateEmail(mail) {
            if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
              return true;
            } else {
              //alert("You have entered an invalid email address!")
              return false;
            }
          }
        }, {
          key: "forgotPassword",
          value: function forgotPassword() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this5 = this;

              var popover;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.popoverController.create({
                        backdropDismiss: false,
                        component: _forgot_password_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"],
                        componentProps: {//"data": extra_info
                        },
                        translucent: true
                      });

                    case 2:
                      popover = _context.sent;
                      popover.onWillDismiss().then(function (data) {
                        console.log(data); // this.verifyCodeNewPass();

                        if (data.data) {
                          _this5.verifyCodeNewPass();
                        }
                      });
                      _context.next = 6;
                      return popover.present();

                    case 6:
                      return _context.abrupt("return", _context.sent);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "verifyCodeNewPass",
          value: function verifyCodeNewPass() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var popover;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.popoverController.create({
                        component: _verify_new_code_verify_new_code_page__WEBPACK_IMPORTED_MODULE_10__["VerifyNewCodePage"],
                        backdropDismiss: false,
                        componentProps: {//"data": extra_info
                        },
                        translucent: true
                      });

                    case 2:
                      popover = _context2.sent;
                      popover.onWillDismiss().then(function (data) {
                        console.log(data);
                      });
                      _context2.next = 6;
                      return popover.present();

                    case 6:
                      return _context2.abrupt("return", _context2.sent);

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "presentToast",
          value: function presentToast(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var toast;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.toastController.create({
                        message: msg,
                        duration: 2000,
                        position: "top"
                      });

                    case 2:
                      toast = _context3.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "GotoSignup",
          value: function GotoSignup() {
            this.router.navigate(["/signup"]);
          }
        }, {
          key: "goToHome",
          value: function goToHome() {
            this.router.navigate(["/"]);
          }
        }, {
          key: "present",
          value: function present() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.loadingController.create({
                        message: "Please wait..."
                      });

                    case 2:
                      this.loading = _context4.sent;
                      _context4.next = 5;
                      return this.loading.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.loading.dismiss();

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]
        }, {
          type: _subject_events_service__WEBPACK_IMPORTED_MODULE_9__["SubjectEventsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"]
        }, {
          type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_4__["Facebook"]
        }, {
          type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_5__["GooglePlus"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./login.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./login.page.scss */
        "./src/app/login/login.page.scss"))["default"]]
      })], LoginPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=login-login-module-es5.js.map