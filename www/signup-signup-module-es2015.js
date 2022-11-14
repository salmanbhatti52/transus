(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <!-- <ion-header class=\"ion-no-border\" style=\"background: transparent\">\n    <ion-toolbar class=\"toolbar\" style=\"--background: transparent\">\n      <ion-row class=\"mm\">\n        <ion-col size=\"2\" class=\"back_arrow\">\n          <img\n            src=\"assets/img/Arrow.svg\"\n            class=\"back_arrow\"\n            (click)=\"Gotologin()\"\n          />\n        </ion-col>\n        <ion-col size=\"8\" class=\"ion-text-center\">\n          <img src=\"assets/img/logo.png\" class=\"logo\" />\n        </ion-col>\n      </ion-row>\n    </ion-toolbar>\n  </ion-header> -->\n  <!-- style=\"--background:url(assets/img/Background.png)   0 0/100% 100% no-repeat;\" -->\n\n  <ion-row class=\"mm\">\n    <ion-col size=\"2\" class=\"back_arrow\">\n      <img\n        src=\"assets/img/Arrow.svg\"\n        class=\"back_arrow\"\n        (click)=\"Gotologin()\"\n      />\n    </ion-col>\n    <ion-col size=\"8\" class=\"ion-text-center\">\n      <img src=\"assets/img/logo.png\" class=\"logo\" />\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col class=\"ion-text-center icon_top\">\n      <img\n        src=\"assets/img/usericon.svg\"\n        class=\"usericon\"\n        (click)=\"uploadProfile()\"\n        *ngIf=\"profileImage == undefined\"\n      />\n      <ng-container *ngIf=\"platformIOS\">\n        <!-- <img style=\"transform: rotate(90deg);\" src=\"{{profileImage}}\" (click)=\"uploadProfile()\" *ngIf=\"profileImage\" class=\"solid_img\"> -->\n        <ng-container *ngIf=\"Gallery\">\n          <img\n            src=\"{{profileImage}}\"\n            (click)=\"uploadProfile()\"\n            *ngIf=\"profileImage\"\n            class=\"solid_img\"\n          />\n        </ng-container>\n        <ng-container *ngIf=\"!Gallery\">\n          <img\n            src=\"{{profileImage}}\"\n            (click)=\"uploadProfile()\"\n            *ngIf=\"profileImage\"\n            class=\"solid_img\"\n          />\n        </ng-container>\n      </ng-container>\n      <ng-container *ngIf=\"!platformIOS\">\n        <img\n          src=\"{{profileImage}}\"\n          (click)=\"uploadProfile()\"\n          *ngIf=\"profileImage\"\n          class=\"solid_img\"\n        />\n      </ng-container>\n      <span *ngIf=\"picError\" class=\"error ion-padding\" style=\"display: grid\">\n        Profile image is required.\n      </span>\n    </ion-col>\n  </ion-row>\n\n  <ion-row\n    *ngIf=\"ShowLoading\"\n    style=\"position: absolute; width: 100%; z-index: 9999\"\n  >\n    <ion-col style=\"text-align: center\">\n      <img style=\"width: 90px\" src=\"assets/img/Loader.gif\" />\n    </ion-col>\n  </ion-row>\n\n  <div class=\"bp\">\n    <ion-row>\n      <ion-col>\n        <ion-input\n          placeholder=\"Username\"\n          class=\"rm_auto\"\n          [(ngModel)]=\"name\"\n          (ionBlur)=\"validateForm()\"\n        ></ion-input>\n        <span *ngIf=\"nameError\" class=\"error ion-padding\">\n          Username is required.\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-input\n          placeholder=\"First name\"\n          class=\"rm_auto\"\n          [(ngModel)]=\"firstName\"\n          (ionBlur)=\"validateForm()\"\n        ></ion-input>\n        <span *ngIf=\"firstNameError\" class=\"error ion-padding\">\n          First name is required.\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-input\n          placeholder=\"Last name\"\n          class=\"rm_auto\"\n          [(ngModel)]=\"lastName\"\n          (ionBlur)=\"validateForm()\"\n        ></ion-input>\n        <span *ngIf=\"lastNameError\" class=\"error ion-padding\">\n          Last name is required.\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-input\n          type=\"number\"\n          placeholder=\"Mobile number\"\n          class=\"rm_auto\"\n          [(ngModel)]=\"mobileNumber\"\n          (ionBlur)=\"validateForm()\"\n        ></ion-input>\n        <span *ngIf=\"mobileNumberError\" class=\"error ion-padding\">\n          Mobile Number is required.\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-input\n          placeholder=\"Email\"\n          [(ngModel)]=\"email\"\n          class=\"rm_auto\"\n          (ionBlur)=\"validateForm()\"\n        ></ion-input>\n        <span *ngIf=\"emailError\" class=\"error ion-padding\">\n          Email is required.\n        </span>\n        <span *ngIf=\"invalidEmailError\" class=\"error ion-padding\">\n          Please provide valid email id.\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-input\n          type=\"password\"\n          placeholder=\"Password\"\n          class=\"rm_auto\"\n          [(ngModel)]=\"password\"\n          (ionBlur)=\"validateForm()\"\n        ></ion-input>\n        <span *ngIf=\"passwordError\" class=\"error ion-padding\">\n          Password is required.\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"mit2\">\n      <ion-col size=\"1\">\n        <ion-checkbox\n          mode=\"md\"\n          [(ngModel)]=\"terms\"\n          (ionChange)=\"changeTerms($event)\"\n        ></ion-checkbox>\n      </ion-col>\n      <ion-col size=\"11\" class=\"fix-ios\">\n        <p (click)=\"termAndPolicy()\" class=\"white agree\">\n          I agree to the terms of service and privacy policy\n        </p>\n        <!-- <p class=\"views\">View terms of service and privacy policy</p> -->\n        <!-- <p (click)=\"termAndPolicy()\" class=\"views\">Terms of service and privacy policy</p> -->\n      </ion-col>\n      <ion-col size=\"1\" class=\"mit\">\n        <ion-checkbox mode=\"md\" [(ngModel)]=\"offers\"></ion-checkbox>\n      </ion-col>\n      <ion-col size=\"11\" class=\"mit fix-ios\">\n        <p class=\"white agree\" style=\"margin-top: 3px\">\n          Email me with news, offers, and awesome cars\n        </p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <span\n          *ngIf=\"termsError\"\n          class=\"error ion-padding\"\n          style=\"font-size: 12px\"\n        >\n          Please accept privacy policies to signup\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"ion-text-center parent_btn\">\n        <ion-button\n          color=\"primary\"\n          shape=\"round\"\n          expand=\"block\"\n          (click)=\"submitForm()\"\n          >Sign up</ion-button\n        >\n      </ion-col>\n    </ion-row>\n\n    <div *ngIf=\"get_social_media_login == 'On'\">\n      <ion-row class=\"bb_top\">\n        <ion-col size=\"5\">\n          <hr class=\"bb\" />\n        </ion-col>\n        <ion-col size=\"2\" class=\"white ion-text-center\">OR</ion-col>\n        <ion-col size=\"5\">\n          <hr class=\"bb\" />\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\" class=\"ion-text-left\">\n          <ion-button class=\"fb\">\n            <img src=\"assets/img/Facebook.svg\" (click)=\"LoginWithFacebook()\" />\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"6\" class=\"ion-text-right\" (click)=\"LoginWithGoogle()\">\n          <ion-button class=\"google\">\n            <img src=\"assets/img/google.svg\" />\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n  <ion-row>\n    <ion-col class=\"ion-text-center\" (click)=\"Gotologin()\">\n      <p class=\"white signup_text\">Already got an account? Login</p>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/signup/signup-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function() { return SignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/signup/signup-routing.module.ts");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })
], SignupPageModule);



/***/ }),

/***/ "./src/app/signup/signup.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  background-color: #000000;\n  --background-color: #000000;\n  --background:none;\n  background: url('Background.png') no-repeat 0 0;\n  background-size: cover;\n}\n\n.back_arrow {\n  margin-top: 0.7em;\n  padding-left: 1em;\n}\n\n.logo {\n  height: 150px;\n}\n\n.mm {\n  margin-top: 1em;\n}\n\nion-input {\n  border: 1px solid #fff;\n  border-radius: 25px;\n  --padding-bottom: 1em;\n  --padding-top: 1em;\n  --color: #fff;\n  --padding-start: 1em;\n  margin-top: 0.4em;\n}\n\n.bp {\n  padding: 0em 15%;\n}\n\n.white {\n  color: #fff;\n}\n\nion-button {\n  --padding-bottom: 1.45em;\n  --padding-top: 1.45em;\n  --box-shadow: none;\n  font-size: 18px;\n  text-transform: capitalize;\n}\n\n.parent_btn {\n  margin: 0 1em;\n}\n\n.bb {\n  border-bottom: 1px solid #fff;\n}\n\n.bb_top {\n  margin: 1.5em 0em;\n}\n\n.fb {\n  --background: #3245B8;\n  --padding-start: 1em;\n  --padding-end: 1em;\n  --border-radius: 25px;\n}\n\n.google {\n  --background: #F04336;\n  --padding-start: 1em;\n  --padding-end: 1em;\n  --border-radius: 25px;\n}\n\n.signup_text {\n  margin-top: 4em;\n}\n\n.agree {\n  margin: 0px;\n  font-size: 11px;\n}\n\n.views {\n  margin: 0px;\n  color: #c4932f;\n  font-size: 11px;\n}\n\n.mit {\n  margin-top: 0.7em;\n}\n\n.mit2 {\n  margin-bottom: 4px;\n}\n\n.usericon {\n  width: 25%;\n}\n\n.icon_top {\n  margin: 0.5em 0em;\n}\n\n.error {\n  color: red;\n}\n\n.solid_img {\n  border-radius: 50%;\n  height: 100px;\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQ0FBQTtFQUNBLHNCQUFBO0FBQUo7O0FBRUE7RUFDRyxpQkFBQTtFQUNBLGlCQUFBO0FBQ0g7O0FBQ0E7RUFDSSxhQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0FBR0o7O0FBREE7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBSUo7O0FBRkE7RUFDSSxnQkFBQTtBQUtKOztBQUhBO0VBQ0ksV0FBQTtBQU1KOztBQUpBO0VBQ0ksd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FBT0o7O0FBTEE7RUFDSSxhQUFBO0FBUUo7O0FBTkE7RUFDSSw2QkFBQTtBQVNKOztBQVBBO0VBQ0csaUJBQUE7QUFVSDs7QUFSQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBV0o7O0FBVEE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQVlKOztBQVZBO0VBQ0ksZUFBQTtBQWFKOztBQVhBO0VBQ0ssV0FBQTtFQUNELGVBQUE7QUFjSjs7QUFaQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQWVKOztBQWJBO0VBQ0ksaUJBQUE7QUFnQko7O0FBZEE7RUFDSSxrQkFBQTtBQWlCSjs7QUFmQTtFQUNLLFVBQUE7QUFrQkw7O0FBaEJBO0VBQ0ksaUJBQUE7QUFtQko7O0FBakJBO0VBQ0ksVUFBQTtBQW9CSjs7QUFsQkE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBcUJKIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgIC0tYmFja2dyb3VuZDpub25lO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvQmFja2dyb3VuZC5wbmcpIG5vLXJlcGVhdCAwIDA7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5iYWNrX2Fycm93e1xyXG4gICBtYXJnaW4tdG9wOiAwLjdlbTtcclxuICAgcGFkZGluZy1sZWZ0OiAxZW07XHJcbn1cclxuLmxvZ297XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG59XHJcbi5tbXtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxufVxyXG5pb24taW5wdXR7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDFlbTtcclxuICAgIC0tcGFkZGluZy10b3A6IDFlbTtcclxuICAgIC0tY29sb3I6ICNmZmY7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDFlbTtcclxuICAgIG1hcmdpbi10b3A6IDAuNGVtO1xyXG59XHJcbi5icHtcclxuICAgIHBhZGRpbmc6IDBlbSAxNSU7XHJcbn1cclxuLndoaXRle1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuaW9uLWJ1dHRvbntcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEuNDVlbTtcclxuICAgIC0tcGFkZGluZy10b3A6IDEuNDVlbTtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbi5wYXJlbnRfYnRue1xyXG4gICAgbWFyZ2luOiAwIDFlbTtcclxufVxyXG4uYmJ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcclxufVxyXG4uYmJfdG9we1xyXG4gICBtYXJnaW46IDEuNWVtIDBlbTtcclxufVxyXG4uZmJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMzMjQ1Qjg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDFlbTtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDFlbTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMjVweDtcclxufVxyXG4uZ29vZ2xle1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRjA0MzM2O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxZW07XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxZW07XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbn1cclxuLnNpZ251cF90ZXh0e1xyXG4gICAgbWFyZ2luLXRvcDogNGVtO1xyXG59XHJcbi5hZ3JlZXtcclxuICAgICBtYXJnaW46IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG4udmlld3N7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGNvbG9yOiAjYzQ5MzJmO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG59XHJcbi5taXR7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjdlbTtcclxufVxyXG4ubWl0MntcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxufVxyXG4udXNlcmljb257XHJcbiAgICAgd2lkdGg6IDI1JTtcclxufVxyXG4uaWNvbl90b3B7XHJcbiAgICBtYXJnaW46IDAuNWVtIDBlbTtcclxufVxyXG4uZXJyb3J7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbn1cclxuLnNvbGlkX2ltZ3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/signup/signup.page.ts":
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _cameraimage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cameraimage.service */ "./src/app/cameraimage.service.ts");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _verify_mobile_number_verify_mobile_number_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../verify-mobile-number/verify-mobile-number.page */ "./src/app/verify-mobile-number/verify-mobile-number.page.ts");
/* harmony import */ var _subject_events_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../subject-events.service */ "./src/app/subject-events.service.ts");












//$ ionic cordova plugin add cordova-plugin-googleplus --variable REVERSED_CLIENT_ID=myreversedclientid
let SignupPage = class SignupPage {
    constructor(navCtrl, loadingController, subjectEvents, popoverController, platform, storage, toastController, router, restService, alertCtrl, imageService, facebook, googlePlus, imagePicker) {
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.subjectEvents = subjectEvents;
        this.popoverController = popoverController;
        this.platform = platform;
        this.storage = storage;
        this.toastController = toastController;
        this.router = router;
        this.restService = restService;
        this.alertCtrl = alertCtrl;
        this.imageService = imageService;
        this.facebook = facebook;
        this.googlePlus = googlePlus;
        this.imagePicker = imagePicker;
        this.isSubmitted = false;
        this.nameError = false;
        this.firstNameError = false;
        this.lastNameError = false;
        this.mobileNumberError = false;
        this.emailError = false;
        this.passwordError = false;
        this.invalidEmailError = false;
        this.picError = false;
        this.validation = false;
        this.terms = false;
        this.offers = false;
        //baseUrl: string = 'https://annam39.sg-host.com/';
        this.baseUrl = "https://app.transusdrives.com/";
        this.stringyOfSignup = "";
        this.otp = "";
        this.otpArr = "";
        this.otpMsg = "";
        this.otpemail = "";
        this.responseOfOtp = "";
        this.platformIOS = false;
        this.ShowLoading = false;
        // async uploadProfile() {
        //   this.takeImageFromCamera();
        // }
        this.Gallery = true;
    }
    ngOnInit() {
        this.imagePicker.requestReadPermission();
        if (this.platform.is("ios")) {
            this.platformIOS = true;
        }
        else {
            this.platformIOS = false;
        }
    }
    ionViewWillEnter() {
        this.get_social_media_login = localStorage.getItem("get_social_media_login");
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
            this.restService.authenticate(this.stringyOfSignup).subscribe((response) => {
                this.response = JSON.parse(response["_body"]);
                console.log(this.response.status);
                if (this.response.status == "error") {
                    this.presentToast(this.response.msg);
                    // this.ShowLoading =false;
                    this.dismiss();
                }
                else if (this.response.status == "success") {
                    this.restService.auth_userAPI(JsonForOTP).subscribe((ress) => {
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
                        }
                        else {
                            this.otpMsg = this.responseOfOtp.msg;
                            this.presentToast(this.otpMsg);
                            // this.ShowLoading = false;
                            this.dismiss();
                        }
                        this.dismiss();
                    });
                }
            }, (err) => {
                // this.ShowLoading = false
                this.dismiss();
            });
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
            }
            else if (this.firstName == "" || this.firstName == undefined) {
                this.firstNameError = true;
                return false;
            }
            else if (this.lastName == "" || this.lastName == undefined) {
                this.lastNameError = true;
                return false;
            }
            else if (this.mobileNumber == "" || this.mobileNumber == undefined) {
                this.mobileNumberError = true;
                return false;
            }
            else if (this.email == "" || this.email == undefined) {
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
            else if (this.base64 == "" || this.base64 == undefined) {
                this.picError = true;
                return false;
            }
            else if (this.terms == false) {
                this.termsError = true;
                return false;
            }
            else {
                return true;
            }
        }
    }
    changeTerms(e) {
        if (e.detail.checked) {
            this.terms = true;
        }
        else {
            this.terms = false;
        }
        console.log(this.terms);
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
    LoginWithFacebook() {
        localStorage.setItem("LoginWith", "facebook");
        this.facebook
            .login(["public_profile", "email"])
            .then((res) => {
            console.log("Logged into Facebook!", res);
            this.facebook
                .api("me?fields=id,name,email,first_name,picture.width(626).height(939).as(picture_large)", [])
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
                    }
                    else if (this.response.status == "success") {
                        //this.presentToast(this.response.msg);
                        //this.router.navigate(['/']);
                        // this.verifyNumber();
                        console.log("new login", this.response.user_details);
                        this.presentToast("Account Created Successfully");
                        this.storage.set("user_details", this.response.user_details);
                        this.storage.set("profile_img_url", this.response.profile_img_url);
                        this.storage.set("country_name", this.response.country_name);
                        this.storage.set("base_urls", this.baseUrl);
                        this.storage.set("currency_symbol", this.response.user_details.symbol);
                        this.subjectEvents.publishSomeData({
                            sidebar: "sidebar",
                        });
                        // this.navCtrl.navigateRoot("/");
                        this.navCtrl.navigateRoot("/profileaftersigup");
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
                }
                else if (this.response.status == "success") {
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
    verifyNumber() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _verify_mobile_number_verify_mobile_number_page__WEBPACK_IMPORTED_MODULE_10__["VerifyMobileNumberPage"],
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
                            }
                            else if (this.response.status == "Found") {
                                // this.presentToast('Login successfully!');
                                this.presentToast("Account Created Successfully");
                                this.storage.set("user_details", this.response.user_details);
                                this.storage.set("profile_img_url", this.response.profile_img_url);
                                this.storage.set("country_name", this.response.country_name);
                                this.storage.set("base_urls", this.baseUrl);
                                this.storage.set("currency_symbol", this.response.user_details.symbol);
                                this.subjectEvents.publishSomeData({
                                    sidebar: "sidebar",
                                });
                                this.dismiss();
                                this.navCtrl.navigateRoot("/");
                            }
                        });
                    }
                    else if (localStorage.getItem("LoginWith") == "google") {
                        console.log(this.response, "line number 279");
                        this.storage.set("user_details", this.response.user_details);
                        this.storage.set("currency_symbol", this.response.user_details.symbol);
                        this.storage.set("profile_img_url", this.response.profile_img_url);
                        this.storage.set("base_urls", this.baseUrl);
                        this.presentToast("Account Created Successfully");
                        this.subjectEvents.publishSomeData({
                            sidebar: "sidebar",
                        });
                        this.navCtrl.navigateRoot("/");
                    }
                    else if (localStorage.getItem("LoginWith") == "facebook") {
                        console.log(this.response, "line number 279");
                        this.storage.set("user_details", this.response.user_details);
                        this.storage.set("currency_symbol", this.response.user_details.symbol);
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
            return yield popover.present();
        });
    }
    uploadProfile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
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
        });
    }
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
        this.imagePicker.getPictures(options).then((imageData) => {
            this.profileImage = `data:image/png;base64,${imageData}`;
            this.base64 = `${imageData}`;
            this.Gallery = true;
            this.validateForm();
        }, (err) => {
            console.log(err, "error in images??");
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
    Gotologin() {
        this.router.navigate(["/login"]);
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
    termAndPolicy() {
        console.log("click on term aand policy");
        window.open("https://www.google.com/");
    }
};
SignupPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _subject_events_service__WEBPACK_IMPORTED_MODULE_11__["SubjectEventsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _cameraimage_service__WEBPACK_IMPORTED_MODULE_5__["CameraimageService"] },
    { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_7__["Facebook"] },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_8__["GooglePlus"] },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_1__["ImagePicker"] }
];
SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-signup",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./signup.page.scss */ "./src/app/signup/signup.page.scss")).default]
    })
], SignupPage);



/***/ })

}]);
//# sourceMappingURL=signup-signup-module-es2015.js.map