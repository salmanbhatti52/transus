(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [class.ios-headers]=\"plateformCheck == 'ios'\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <img src=\"assets/img/Menu.svg\" (click)=\"toggleMenu()\" />\n    </ion-buttons>\n    <ion-title [class.globe_title]=\"plateformCheck == 'ios'\"\n      >Edit Profile</ion-title\n    >\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"bys\">\n    <ion-col size=\"3\" class=\"ion-text-center\"> </ion-col>\n    <ion-col size=\"6\" class=\"ion-text-center\">\n      <ng-container *ngIf=\"profileImage == '' || profileImage == undefined\">\n        <img src=\"assets/img/place_holder.svg\" />\n        <img\n          src=\"assets/img/Edit_button.svg\"\n          class=\"btn_edit_profile\"\n          (click)=\"uploadProfile()\"\n        />\n      </ng-container>\n      <ng-container *ngIf=\"profileImage\">\n        <img src=\"{{profileImage}}\" class=\"solid_img\" />\n        <img\n          src=\"assets/img/Edit_button.svg\"\n          class=\"btn_edit_profile\"\n          (click)=\"uploadProfile()\"\n        />\n      </ng-container>\n    </ion-col>\n\n    <!-- ghana card image here -->\n    \n    <ion-col size=\"12\">\n\n    <ion-row>\n      <ion-col>\n        <div\n          *ngIf=\"ghanacardImage =='' || ghanacardImage ==undefined\"\n          style=\"\n            border-radius: 10px;\n            width: 100%;\n            height: 150px;\n            background: #f7f8fa;\n            border: 1px dashed #d4dce1;\n          \"\n          (click)=\"uploadProfileGhana()\"\n        >\n          <ion-row style=\"margin-top: 45px\">\n            <ion-col style=\"text-align: center\">\n              <img\n                src=\"assets/img/plusblack.png\"\n                style=\"height: 20px; width: 20px\"\n              />\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col style=\"text-align: center\">\n              <p style=\"font-size: 13px; color: #b0b0b0\">Ghana Card</p>\n            </ion-col>\n          </ion-row>\n        </div>\n        <img\n          style=\"width: 100%; border-radius: 10px; height: 150px\"\n          (click)=\"uploadProfileGhana()\"\n          *ngIf=\"ghanacardImage\"\n          src=\"{{ghanacardImage}}\"\n        />\n      </ion-col>\n    </ion-row>\n\n    <span *ngIf=\"ghancardError\" class=\"error ion-padding\">\n      Ghana Card required.\n    </span>\n  </ion-col>\n\n    <!-- ghana card image end here -->\n\n\n    <ion-col size=\"3\" class=\"ion-text-center\"> </ion-col>\n    <ion-col size=\"12\">\n      <ion-textarea\n        rows=\"6\"\n        placeholder=\"About\"\n        [(ngModel)]=\"About\"\n        class=\"list_3\"\n        (ionBlur)=\"validateForm()\"\n      >\n      </ion-textarea>\n      <span *ngIf=\"AboutError\" class=\"error ion-padding\">\n        About is required.\n      </span>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-input\n        placeholder=\"First name\"\n        class=\"input_list ot_auto\"\n        [(ngModel)]=\"firstName\"\n        (ionBlur)=\"validateForm()\"\n      ></ion-input>\n      <span *ngIf=\"firstNameError\" class=\"error ion-padding\">\n        First name is required.\n      </span>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-input\n        placeholder=\"Last name\"\n        class=\"input_list ot_auto\"\n        [(ngModel)]=\"lastName\"\n        (ionBlur)=\"validateForm()\"\n      ></ion-input>\n      <span *ngIf=\"lastNameError\" class=\"error ion-padding\">\n        Last name is required.\n      </span>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-input\n        placeholder=\"Email\"\n        class=\"input_list ot_auto\"\n        [(ngModel)]=\"Email\"\n        (ionBlur)=\"validateForm()\"\n        readonly=\"\"\n      ></ion-input>\n      <span *ngIf=\"EmailError\" class=\"error ion-padding\">\n        Email is required.\n      </span>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-input\n        placeholder=\"Phone\"\n        class=\"input_list ot_auto\"\n        [(ngModel)]=\"phone\"\n        (ionBlur)=\"validateForm()\"\n      ></ion-input>\n      <span *ngIf=\"phoneError\" class=\"error ion-padding\">\n        Phone is required.\n      </span>\n    </ion-col>\n\n    <ion-col size=\"12\">\n      <ion-input\n        placeholder=\"Works\"\n        class=\"input_list ot_auto\"\n        [(ngModel)]=\"Works\"\n        (ionBlur)=\"validateForm()\"\n      >\n      </ion-input>\n      <span *ngIf=\"WorksError\" class=\"error ion-padding\">\n        Works is required.\n      </span>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-select\n        placeholder=\"Language\"\n        [(ngModel)]=\"Language\"\n        (ionBlur)=\"validateForm()\"\n      >\n        <ion-select-option\n          value=\"{{p.languages_id}}\"\n          *ngFor=\"let p of languages; let i = index\"\n          >{{p.name}}\n        </ion-select-option>\n      </ion-select>\n      <span *ngIf=\"LanguageError\" class=\"error ion-padding\">\n        Language is required.\n      </span>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-select\n        [(ngModel)]=\"Lives\"\n        placeholder=\"Country\"\n        (ionBlur)=\"validateForm()\"\n      >\n        <ion-select-option\n          value=\"{{p.id}}\"\n          *ngFor=\"let p of countries; let i = index\"\n          >{{p.name}}</ion-select-option\n        >\n      </ion-select>\n      <span *ngIf=\"LivesError\" class=\"error ion-padding\">\n        Country is required.\n      </span>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-select\n        placeholder=\"currencies\"\n        [(ngModel)]=\"Currencies\"\n        placeholder=\"Currencies\"\n        (ionBlur)=\"validateForm()\"\n      >\n        <ion-select-option\n          value=\"{{p.currencies_id}}\"\n          *ngFor=\"let p of currencies; let i = index\"\n          >{{p.name}} - ({{p.symbol}})</ion-select-option\n        >\n      </ion-select>\n      <span *ngIf=\"CurrencyError\" class=\"error ion-padding\">\n        Currency is required.\n      </span>\n    </ion-col>\n    <ion-col size=\"12\" style=\"display: flex; justify-content: space-evenly\">\n      <label\n        >Banking details\n        <span\n          (click)=\"addBank()\"\n          style=\"\n            background: #c4932f;\n            border: 1px solid white;\n            border-radius: 27px;\n            padding: 2px 9px;\n            color: white;\n            font-size: 16px;\n            font-weight: 400;\n          \"\n          >+</span\n        ></label\n      >\n    </ion-col>\n    <ng-container *ngFor=\"let accounts of accountDetails;let i = index\">\n      <ion-col size=\"12\">\n        <label\n          >Account {{i+1}}\n          <span\n            *ngIf=\"i!=0\"\n            (click)=\"removeBank(i)\"\n            style=\"\n              background: #c42f2fe8;\n              border: 1px solid white;\n              border-radius: 27px;\n              padding: 2px 9px;\n              color: white;\n              font-size: 16px;\n              font-weight: 400;\n            \"\n            >-</span\n          ></label\n        >\n        <ion-input\n          placeholder=\"Account Title\"\n          class=\"input_list ot_auto\"\n          [(ngModel)]=\"accounts.accountTitle\"\n          (ionBlur)=\"validateForm()\"\n        ></ion-input>\n        <ng-container *ngIf=\"i==0\">\n          <span *ngIf=\"accountTitleError\" class=\"error ion-padding\">\n            Account Title is required.\n          </span>\n        </ng-container>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-input\n          placeholder=\"Account Name\"\n          class=\"input_list ot_auto\"\n          [(ngModel)]=\"accounts.accountName\"\n          (ionBlur)=\"validateForm()\"\n        ></ion-input>\n        <ng-container *ngIf=\"i==0\">\n          <span *ngIf=\"accountNameError\" class=\"error ion-padding\">\n            Account Title is required.\n          </span>\n        </ng-container>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-input\n          placeholder=\"Account Number\"\n          class=\"input_list ot_auto\"\n          [(ngModel)]=\"accounts.accountNumber\"\n          (ionBlur)=\"validateForm()\"\n        ></ion-input>\n        <ng-container *ngIf=\"i==0\">\n          <span *ngIf=\"accountNumberError\" class=\"error ion-padding\">\n            Account Number is required.\n          </span>\n        </ng-container>\n      </ion-col>\n    </ng-container>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"2\"></ion-col>\n    <ion-col size=\"8\">\n      <ion-button\n        color=\"primary\"\n        expand=\"block\"\n        shape=\"round\"\n        (click)=\"submitForm()\"\n        >Update</ion-button\n      >\n    </ion-col>\n  </ion-row>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/profile/profile-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/profile/profile-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: ProfilePageRoutingModule */

    /***/
    function srcAppProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
        return ProfilePageRoutingModule;
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


      var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile.page */
      "./src/app/profile/profile.page.ts");

      var routes = [{
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
      }];

      var ProfilePageRoutingModule = /*#__PURE__*/_createClass(function ProfilePageRoutingModule() {
        _classCallCheck(this, ProfilePageRoutingModule);
      });

      ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProfilePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/profile/profile.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/profile/profile.module.ts ***!
      \*******************************************/

    /*! exports provided: ProfilePageModule */

    /***/
    function srcAppProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
        return ProfilePageModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profile-routing.module */
      "./src/app/profile/profile-routing.module.ts");
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile.page */
      "./src/app/profile/profile.page.ts");

      var ProfilePageModule = /*#__PURE__*/_createClass(function ProfilePageModule() {
        _classCallCheck(this, ProfilePageModule);
      });

      ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
      })], ProfilePageModule);
      /***/
    },

    /***/
    "./src/app/profile/profile.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/profile/profile.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3em 0.1em 8px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n  padding-left: 0px;\n}\n\n.input_list {\n  border: 1px solid #d4dce1;\n  background: #f7f8fa;\n  border-radius: 28px;\n  font-size: 13px;\n  --placeholder-color: #a6a6a8;\n  color: #000;\n  --padding-bottom: 1.5em;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n  margin-top: 0.5em;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n}\n\n.btn_edit_profile {\n  position: absolute;\n  bottom: 3%;\n  right: 18%;\n}\n\n.bys {\n  padding: 0em 1em 1.5em 1em;\n  margin-top: 3em;\n}\n\n.list_3 {\n  background: #f7f8fa;\n  border: 1px solid #d4dce1;\n  border-radius: 10px;\n  color: #000;\n  font-size: 13px;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n  --placeholder-color: #a6a6a8;\n}\n\nion-select {\n  background: #f7f8fa;\n  border: 1px solid #d4dce1;\n  border-radius: 30px;\n  --placeholder-color: #a6a6a8;\n  color: #000;\n  font-size: 13px;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n  --padding-bottom: 1.5em;\n  --padding-end: 1.5em;\n  margin-top: 0.5em;\n}\n\n.error {\n  color: red;\n}\n\n.solid_img {\n  border-radius: 50%;\n  height: 150px;\n  width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usd0JBQUE7SUFDQSxxQkFBQTtFQUNGO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBRUY7O0FBQUE7RUFDRSwwQkFBQTtFQUNBLGVBQUE7QUFHRjs7QUFEQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0FBSUY7O0FBREE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQUlGOztBQURBO0VBQ0UsVUFBQTtBQUlGOztBQUZBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUtGIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgcGFkZGluZzogMC44ZW0gMC4xZW0gMCAwO1xuICAtLWJhY2tncm91bmQ6ICNjNDkzMmY7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLWhlaWdodCA6IDgwMHB4KSB7XG4gIGlvbi10b29sYmFyIHtcbiAgICBwYWRkaW5nOiAzZW0gMC4xZW0gOHB4IDA7XG4gICAgLS1iYWNrZ3JvdW5kOiAjYzQ5MzJmO1xuICB9XG59XG5cbmlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG4uaW5wdXRfbGlzdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNGRjZTE7XG4gIGJhY2tncm91bmQ6ICNmN2Y4ZmE7XG4gIGJvcmRlci1yYWRpdXM6IDI4cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogI2E2YTZhODtcbiAgY29sb3I6ICMwMDA7XG4gIC0tcGFkZGluZy1ib3R0b206IDEuNWVtO1xuICAtLXBhZGRpbmctc3RhcnQ6IDEuNWVtO1xuICAtLXBhZGRpbmctdG9wOiAxLjVlbTtcbiAgbWFyZ2luLXRvcDogMC41ZW07XG59XG5cbmlvbi1idXR0b24ge1xuICAtLXBhZGRpbmctYm90dG9tOiAxLjVlbTtcbiAgLS1wYWRkaW5nLXRvcDogMS41ZW07XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cbi5idG5fZWRpdF9wcm9maWxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDMlO1xuICByaWdodDogMTglO1xufVxuLmJ5cyB7XG4gIHBhZGRpbmc6IDBlbSAxZW0gMS41ZW0gMWVtO1xuICBtYXJnaW4tdG9wOiAzZW07XG59XG4ubGlzdF8zIHtcbiAgYmFja2dyb3VuZDogI2Y3ZjhmYTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZGNlMTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxLjVlbTtcbiAgLS1wYWRkaW5nLXRvcDogMS41ZW07XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6ICNhNmE2YTg7XG59XG5cbmlvbi1zZWxlY3Qge1xuICBiYWNrZ3JvdW5kOiAjZjdmOGZhO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDRkY2UxO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjYTZhNmE4O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDEuNWVtO1xuICAtLXBhZGRpbmctdG9wOiAxLjVlbTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMS41ZW07XG4gIC0tcGFkZGluZy1lbmQ6IDEuNWVtO1xuICBtYXJnaW4tdG9wOiAwLjVlbTtcbn1cblxuLmVycm9yIHtcbiAgY29sb3I6IHJlZDtcbn1cbi5zb2xpZF9pbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxNTBweDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/profile/profile.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/profile/profile.page.ts ***!
      \*****************************************/

    /*! exports provided: ProfilePage */

    /***/
    function srcAppProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
        return ProfilePage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _cameraimage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../cameraimage.service */
      "./src/app/cameraimage.service.ts");
      /* harmony import */


      var _rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../rest.service */
      "./src/app/rest.service.ts");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _subject_events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../subject-events.service */
      "./src/app/subject-events.service.ts");
      /* harmony import */


      var _users_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../users.service */
      "./src/app/users.service.ts");
      /* harmony import */


      var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/image-picker/ngx */
      "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");

      var ProfilePage = /*#__PURE__*/function () {
        function ProfilePage(loadingController, subjectEvents, popoverController, storage, toastController, router, restService, alertCtrl, imageService, menuCtrl, usersService, plateform, imagePicker) {
          _classCallCheck(this, ProfilePage);

          this.loadingController = loadingController;
          this.subjectEvents = subjectEvents;
          this.popoverController = popoverController;
          this.storage = storage;
          this.toastController = toastController;
          this.router = router;
          this.restService = restService;
          this.alertCtrl = alertCtrl;
          this.imageService = imageService;
          this.menuCtrl = menuCtrl;
          this.usersService = usersService;
          this.plateform = plateform;
          this.imagePicker = imagePicker;
          this.base64 = "";
          this.AboutError = false;
          this.firstNameError = false;
          this.lastNameError = false;
          this.LivesError = false;
          this.WorksError = false;
          this.EmailError = false;
          this.phoneError = false;
          this.LanguageError = false;
          this.base64Error = false;
          this.CurrencyError = false;
          this.ghancardError = false;
          this.validation = false;
          this.CurrenciesError = false;
          this.accountTitleError = false;
          this.accountNameError = false;
          this.accountDetails = [{
            accountTitle: "",
            accountName: "",
            accountNumber: ""
          }];
          this.ghanacardImage = "";
        }

        _createClass(ProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.plateform.is("ios")) {
              this.plateformCheck = "ios";
            } else {
              this.plateformCheck = "android";
            }

            this.getDropDownData();
          }
        }, {
          key: "addBank",
          value: function addBank() {
            this.accountDetails.push({
              accountTitle: "",
              accountName: "",
              accountNumber: ""
            });
          }
        }, {
          key: "removeBank",
          value: function removeBank(index) {
            this.accountDetails.splice(index, 1);
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.present();
            this.storage.get("user_details").then(function (user_details) {
              console.log("userDetailsss-----", user_details);
              _this.userID = user_details.users_id;
              _this.About = user_details.about;
              _this.Works = user_details.work; // this.accountNumber = user_details.bank_acc_no;
              // this.accountTitle = user_details.bank_acc_title;
              //  this.base64 = user_details.profile_image;

              _this.Email = user_details.email;
              _this.phone = user_details.mobile_no;
              _this.firstName = user_details.first_name;
              _this.lastName = user_details.last_name;

              if (user_details.ghanacard) {
                _this.ghanacardImage = _this.restService.ghanacardBaseURL + user_details.ghanacard;
              }

              if (user_details.bank_details.length != 0) {
                _this.accountDetails = [];
                user_details.bank_details.map(function (data, index) {
                  _this.accountDetails.push({
                    accountTitle: data.bank_account_title,
                    accountName: data.bank_account_name,
                    accountNumber: data.bank_account_number
                  });
                });
              } // this.accountName = user_details.band_acc_name;


              setTimeout(function () {
                _this.Language = user_details.languages_id;
                _this.Lives = user_details.countries_id;
                _this.Currencies = user_details.currencies_id;
                console.log("ok");

                _this.dismiss();
              }, 2000);
            });
            this.storage.get("profile_img_url").then(function (profile_img_url) {
              _this.storage.get("base_urls").then(function (base_url) {
                _this.profileImage = base_url + "" + profile_img_url;
                console.log(_this.profileImage);
              });
            });
          }
        }, {
          key: "toggleMenu",
          value: function toggleMenu() {
            this.menuCtrl.toggle();
          }
        }, {
          key: "getDropDownData",
          value: function getDropDownData() {
            var _this2 = this;

            var stringy = JSON.stringify({
              requestType: "profile_page"
            });
            console.log(stringy);
            this.restService.getDdlData(stringy).subscribe(function (response) {
              _this2.response = JSON.parse(response["_body"]);
              _this2.languages = _this2.response.languages;
              _this2.countries = _this2.response.countries;
              _this2.currencies = _this2.response.system_currencies;
              console.log(_this2.response);
            }, function (err) {});
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            var _this3 = this;

            // this.validation = true;
            if (this.validateForm() == true) {
              //alert('true');
              this.present();
              var stringy = JSON.stringify({
                usersID: this.userID,
                email: this.Email,
                phone: this.phone,
                firstName: this.firstName,
                lastName: this.lastName,
                about: this.About,
                countriesID: this.Lives,
                works: this.Works,
                languagesID: this.Language,
                profilePic: this.base64,
                currencyID: this.Currencies,
                // accountNumber: this.accountNumber,
                // accountName: this.accountName,
                // accountTitle: this.accountTitle,
                accountDetails: this.accountDetails,
                ghanacard: this.base64ghana,
                requestType: "update"
              });
              console.log("selected bank detailss---", this.accountDetails);
              console.log("selected bank  stringy---", stringy);
              console.log(stringy);
              this.restService.editProfile(stringy).subscribe(function (response) {
                _this3.response = JSON.parse(response["_body"]);
                console.log(_this3.response.status);

                if (_this3.response.status == "error") {
                  _this3.presentToast(_this3.response.msg);
                } else if (_this3.response.status == "success") {
                  _this3.usersService.profileVar = _this3.response.image + "?asass";

                  _this3.subjectEvents.publishImgData(_this3.usersService.profileVar);

                  _this3.subjectEvents.publishCityData(_this3.response.country);

                  console.log(_this3.usersService.profileVar, "testttttt");

                  _this3.presentToast(_this3.response.msg);

                  console.log(_this3.usersService.cityVar, "testttttt_city");

                  _this3.getUserDetail();
                }

                _this3.dismiss();
              }, function (err) {
                _this3.dismiss();
              });
            } else {
              console.log("update else");
            }
          }
        }, {
          key: "getUserDetail",
          value: function getUserDetail() {
            var _this4 = this;

            var stringy = JSON.stringify({
              usersID: this.userID,
              requestType: "withID"
            });
            console.log(stringy);
            this.restService.getUserDetails(stringy).subscribe(function (response) {
              _this4.response = JSON.parse(response["_body"]);
              console.log("usererrrrr---- after updatinf", _this4.response);

              if (_this4.response.status == "NotFound") {} else if (_this4.response.status == "Found") {
                _this4.storage.set("user_details", _this4.response.user_details);

                _this4.storage.set("profile_img_url", _this4.response.profile_img_url);

                _this4.storage.set("country_name", _this4.response.country_name);

                console.log("currency_symbol", _this4.response.user_details.symbol);

                _this4.storage.set("currency_symbol", _this4.response.user_details.symbol);
                /* this.subjectEvents.publishSomeData({
                sidebar: 'sidebar'
                }); */

              }
            }, function (err) {});
          }
        }, {
          key: "validateForm",
          value: function validateForm() {
            this.AboutError = false;
            this.LivesError = false;
            this.WorksError = false;
            this.LanguageError = false;
            this.base64Error = false;
            this.accountTitleError = false;
            this.accountNumberError = false;
            this.accountNameError = false;
            this.firstNameError = false;
            this.lastNameError = false;
            this.phoneError = false;
            this.ghancardError = false;
            this.CurrenciesError = false;

            if (this.ghanacardImage == "" || this.ghanacardImage == undefined) {
              this.ghancardError = true;
              return false;
            }

            if (this.About == "" || this.About == undefined) {
              this.AboutError = true;
              return false;
            } else if (this.Email == "" || this.Email == undefined) {
              this.EmailError = true;
              return false;
            } else if (this.phone == "" || this.phone == undefined) {
              this.phoneError = true;
              return false;
            } else if (this.firstName == "" || this.firstName == undefined) {
              this.firstNameError = true;
              return false;
            } else if (this.lastName == "" || this.lastName == undefined) {
              this.lastNameError = true;
              return false;
            } else if (this.Lives == "" || this.Lives == undefined) {
              this.LivesError = true;
              return false;
            } else if (this.Works == "" || this.Works == undefined) {
              this.WorksError = true;
              return false;
            } else if (this.Language == "" || this.Language == undefined) {
              this.LanguageError = true;
              return false;
            } else if (this.Currencies == "" || this.Currencies == undefined) {
              this.CurrenciesError = true;
              return false;
            } else if (this.accountDetails[0].accountTitle == "" || this.accountDetails[0].accountTitle == undefined) {
              this.accountTitleError = true;
              return false;
            } else if (this.accountDetails[0].accountName == "" || this.accountDetails[0].accountName == undefined) {
              this.accountNameError = true;
              return false;
            } else if (this.accountDetails[0].accountNumber == "" || this.accountDetails[0].accountNumber == undefined) {
              this.accountNumberError = true;
              return false;
            } else {
              return true;
            } // }

          }
        }, {
          key: "uploadProfile",
          value: function uploadProfile() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this5 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrl.create({
                        message: "Upload Profile Photo?",
                        buttons: [{
                          text: "Take image from camera",
                          handler: function handler() {
                            _this5.takeImageFromCamera();
                          }
                        }, {
                          text: "Upload image from gallery",
                          handler: function handler() {
                            _this5.getImageFromGallery();
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      alert.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "takeImageFromCamera",
          value: function takeImageFromCamera() {
            var _this6 = this;

            this.imageService.selectImageInCamera().then(function (imageData) {
              _this6.profileImage = "data:image/png;base64,".concat(imageData);
              _this6.base64 = "".concat(imageData);
            })["catch"](function (err) {
              return console.error(err);
            });
          }
        }, {
          key: "getImageFromGallery",
          value: function getImageFromGallery() {
            var _this7 = this;

            this.imageService.selectImageInGallery().then(function (imageData) {
              _this7.profileImage = "data:image/png;base64,".concat(imageData);
              _this7.base64 = "".concat(imageData);
            })["catch"](function (err) {
              return console.error(err);
            });
          }
        }, {
          key: "presentToast",
          value: function presentToast(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toastController.create({
                        message: msg,
                        duration: 2000,
                        position: "top"
                      });

                    case 2:
                      toast = _context2.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "present",
          value: function present() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.loadingController.create({
                        message: "Please wait..."
                      });

                    case 2:
                      this.loading = _context3.sent;
                      _context3.next = 5;
                      return this.loading.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.loading.dismiss();

                    case 2:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          } //------- here function of ghana card image start

        }, {
          key: "uploadProfileGhana",
          value: function uploadProfileGhana() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this8 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.alertCtrl.create({
                        message: "Upload Ghana Card Image?",
                        buttons: [{
                          text: "Take image from camera",
                          handler: function handler() {
                            _this8.takeImageFromCameraGhana();
                          }
                        }, {
                          text: "Upload image from gallery",
                          handler: function handler() {
                            _this8.getImageFromGalleryGhana();
                          }
                        }]
                      });

                    case 2:
                      alert = _context5.sent;
                      alert.present();

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "takeImageFromCameraGhana",
          value: function takeImageFromCameraGhana() {
            var _this9 = this;

            console.log('entered in ghanacard cameraaaa');
            this.imageService.selectImageInCamera().then(function (imageData) {
              _this9.ghanacardImage = "data:image/png;base64,".concat(imageData);
              _this9.base64ghana = "".concat(imageData);
              console.log('ghana card camera---', imageData);
            })["catch"](function (err) {
              return console.error('Error in camera', err);
            });
          } // getImageFromGalleryGhana() {
          //   this.imageService 
          //     .selectImageInGallery()   
          //     .then((imageData) => {
          //       this.ghanacardImage = `data:image/png;base64,${imageData}`;
          //       this.base64ghana = `${imageData}`;
          //     })
          //     .catch((err) => console.error(err));
          // }

        }, {
          key: "getImageFromGalleryGhana",
          value: function getImageFromGalleryGhana() {
            var _this10 = this;

            var options = {
              maximumImagesCount: 1,
              outputType: 1,
              quality: 90
            };
            this.imagePicker.getPictures(options).then(function (result) {
              _this10.ghanacardImage = "data:image/png;base64,".concat(result); // this.imageCompress.compressFile(base64, 0, 80, 80).then((result) => {

              _this10.base64ghana = "".concat(result); //this.base64ghana = result;

              console.log('ghana card gallery---', result); // });
            }, function (err) {
              console.log(err, "error in images??");
            });
          }
        }]);

        return ProfilePage;
      }();

      ProfilePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _subject_events_service__WEBPACK_IMPORTED_MODULE_7__["SubjectEventsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _cameraimage_service__WEBPACK_IMPORTED_MODULE_4__["CameraimageService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
        }, {
          type: _users_service__WEBPACK_IMPORTED_MODULE_8__["UsersService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_9__["ImagePicker"]
        }];
      };

      ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-profile",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./profile.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./profile.page.scss */
        "./src/app/profile/profile.page.scss"))["default"]]
      })], ProfilePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=profile-profile-module-es5.js.map