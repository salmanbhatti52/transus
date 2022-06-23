(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["change-password-change-password-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/change-password/change-password.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/change-password/change-password.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppChangePasswordChangePasswordPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [class.ios-headers]=\"plateformCheck == 'ios'\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <img src=\"assets/img/Menu.svg\" (click)=\"toggleMenu()\">\n    </ion-buttons>\n    <ion-title [class.globe_title]=\"plateformCheck == 'ios'\">Change Password</ion-title>\n   </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row *ngIf=\"ShowLoading\" style=\"position: absolute; width: 100%; z-index: 9999;top: 8em;\">\n    <ion-col style=\"text-align: center;\">\n      <img style=\"width: 90px;\" src=\"assets/img/Loader.gif\">\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"bys\">\n    <ion-col *ngIf=\"!displayOLD\" size=\"12\">\n      <ion-input type=\"password\" placeholder=\"Old Password\" class=\"input_list\" [(ngModel)]=\"oldPassword\" ></ion-input>\n      <span *ngIf=\"oldPasswordError\" class=\"error ion-padding\">\n        Old Password is required.\n      </span>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-input type=\"password\" placeholder=\"New Password\" class=\"input_list\" [(ngModel)]=\"newPassword\" ></ion-input>\n      <span *ngIf=\"newPasswordError\" class=\"error ion-padding\">\n        New Password is required.\n      </span>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-input type=\"password\" placeholder=\"Confirm Password\" class=\"input_list\" [(ngModel)]=\"ConfirmPassword\" ></ion-input>\n      <span *ngIf=\"confirmPasswordError\" class=\"error ion-padding\">\n        confirmPassword is required.\n      </span>\n      <span *ngIf=\"notSameError\" class=\"error error-texxt\">\n        New and confirm passwords are not same\n      </span>\n    </ion-col>\n    </ion-row>\n  \n    <ion-row >\n      <ion-col size=\"2\"></ion-col>\n      <ion-col size=\"8\">\n        <ion-button color=\"primary\" expand=\"block\" shape=\"round\" (click)=\"submitForm()\">Save</ion-button>\n      </ion-col>\n    </ion-row>\n\n    <!-- <ion-row>\n      <ion-col style=\"text-align: center;\">\n        <p class=\"error forgot\" (click)=\"forgotPassword()\">Forgot your password?</p>\n      </ion-col>\n    </ion-row> -->\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/change-password/change-password-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/change-password/change-password-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: ChangePasswordPageRoutingModule */

    /***/
    function srcAppChangePasswordChangePasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangePasswordPageRoutingModule", function () {
        return ChangePasswordPageRoutingModule;
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


      var _change_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./change-password.page */
      "./src/app/change-password/change-password.page.ts");

      var routes = [{
        path: '',
        component: _change_password_page__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordPage"]
      }];

      var ChangePasswordPageRoutingModule = /*#__PURE__*/_createClass(function ChangePasswordPageRoutingModule() {
        _classCallCheck(this, ChangePasswordPageRoutingModule);
      });

      ChangePasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ChangePasswordPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/change-password/change-password.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/change-password/change-password.module.ts ***!
      \***********************************************************/

    /*! exports provided: ChangePasswordPageModule */

    /***/
    function srcAppChangePasswordChangePasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function () {
        return ChangePasswordPageModule;
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


      var _change_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./change-password-routing.module */
      "./src/app/change-password/change-password-routing.module.ts");
      /* harmony import */


      var _change_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./change-password.page */
      "./src/app/change-password/change-password.page.ts");

      var ChangePasswordPageModule = /*#__PURE__*/_createClass(function ChangePasswordPageModule() {
        _classCallCheck(this, ChangePasswordPageModule);
      });

      ChangePasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _change_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordPageRoutingModule"]],
        declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordPage"]]
      })], ChangePasswordPageModule);
      /***/
    },

    /***/
    "./src/app/change-password/change-password.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/change-password/change-password.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppChangePasswordChangePasswordPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3em 0.1em 8px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n  padding-left: 0px;\n}\n\n.input_list {\n  border: 1px solid #d4dce1;\n  background: #f7f8fa;\n  border-radius: 28px;\n  font-size: 13px;\n  color: #000;\n  --placeholder-color: #b2b2b4;\n  --padding-bottom: 1.5em;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n  margin-top: 1em;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n}\n\n.error-texxt {\n  text-align: center;\n  position: relative;\n  top: 9px;\n  left: 10px;\n}\n\n.bys {\n  padding: 0em 1em 1.5em 1em;\n  margin-top: 3em;\n}\n\n.error {\n  color: red;\n}\n\n.forgot {\n  position: absolute;\n  width: 100%;\n  top: -11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLHdCQUFBO0lBQ0EscUJBQUE7RUFDTjtBQUNGOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFDSjs7QUFDQTtFQUNJLDBCQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUNBO0VBQ0ksVUFBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUdKIiwiZmlsZSI6InNyYy9hcHAvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgcGFkZGluZzogMC44ZW0gMC4xZW0gMCAwO1xuICAgIC0tYmFja2dyb3VuZDogI2M0OTMyZjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4taGVpZ2h0IDogODAwcHgpIHtcbiAgICBpb24tdG9vbGJhciB7XG4gICAgICAgIHBhZGRpbmc6IDNlbSAwLjFlbSA4cHggMDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjYzQ5MzJmO1xuICAgIH1cbn1cblxuaW9uLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xufVxuLmlucHV0X2xpc3Qge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGRjZTE7XG4gICAgYmFja2dyb3VuZDogI2Y3ZjhmYTtcbiAgICBib3JkZXItcmFkaXVzOiAyOHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjYjJiMmI0O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDEuNWVtO1xuICAgIC0tcGFkZGluZy1zdGFydDogMS41ZW07XG4gICAgLS1wYWRkaW5nLXRvcDogMS41ZW07XG4gICAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxLjVlbTtcbiAgICAtLXBhZGRpbmctdG9wOiAxLjVlbTtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5lcnJvci10ZXh4dHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogOXB4O1xuICAgIGxlZnQ6IDEwcHg7XG59XG4uYnlzIHtcbiAgICBwYWRkaW5nOiAwZW0gMWVtIDEuNWVtIDFlbTtcbiAgICBtYXJnaW4tdG9wOiAzZW07XG59XG5cbi5lcnJvciB7XG4gICAgY29sb3I6IHJlZDtcbn1cbi5mb3Jnb3R7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogLTExcHg7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/change-password/change-password.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/change-password/change-password.page.ts ***!
      \*********************************************************/

    /*! exports provided: ChangePasswordPage */

    /***/
    function srcAppChangePasswordChangePasswordPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangePasswordPage", function () {
        return ChangePasswordPage;
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


      var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../rest.service */
      "./src/app/rest.service.ts");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _forgot_password_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../forgot-password/forgot-password.page */
      "./src/app/forgot-password/forgot-password.page.ts");
      /* harmony import */


      var _subject_events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../subject-events.service */
      "./src/app/subject-events.service.ts");
      /* harmony import */


      var _verify_new_code_verify_new_code_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../verify-new-code/verify-new-code.page */
      "./src/app/verify-new-code/verify-new-code.page.ts");

      var ChangePasswordPage = /*#__PURE__*/function () {
        function ChangePasswordPage(toastController, restService, storage, router, menuCtrl, activatedRoute, loadingController, subjectEvents, navCtrl, popoverController, plateform) {
          _classCallCheck(this, ChangePasswordPage);

          this.toastController = toastController;
          this.restService = restService;
          this.storage = storage;
          this.router = router;
          this.menuCtrl = menuCtrl;
          this.activatedRoute = activatedRoute;
          this.loadingController = loadingController;
          this.subjectEvents = subjectEvents;
          this.navCtrl = navCtrl;
          this.popoverController = popoverController;
          this.plateform = plateform;
          this.displayOLD = false;
          this.ShowLoading = false;
        }

        _createClass(ChangePasswordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            if (this.plateform.is('ios')) {
              this.plateformCheck = "ios";
            } else {
              this.plateformCheck = "android";
            }

            this.storage.get('user_details').then(function (user_details) {
              if (user_details) {
                console.log(user_details);
                _this.userID = user_details.users_id;
              }
            });
            this.activatedRoute.queryParams.subscribe(function (res) {
              if (res) {
                _this.response = JSON.parse(res.value);
                console.log(_this.response);
                console.log(_this.response.displayoldPass);
                console.log(_this.response.old_pass);
                _this.displayOLD = _this.response.displayoldPass;
                _this.oldPassword = _this.response.old_pass;
                _this.userID = _this.response.userID;
              }
            });
            this.email = localStorage.getItem("restWithEmail");
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            var _this2 = this;

            this.oldPasswordError = false;
            this.newPasswordError = false;
            this.confirmPasswordError = false;
            this.notSameError = false;
            console.log('error');

            if (this.oldPassword == '' || this.oldPassword == undefined) {
              console.log('error');
              this.oldPasswordError = true;
              return false;
            } else if (this.newPassword == '' || this.newPassword == undefined) {
              this.newPasswordError = true;
              return false;
            } else if (this.ConfirmPassword == '' || this.ConfirmPassword == undefined) {
              this.confirmPasswordError = true;
              return false;
            } else if (this.newPassword != this.ConfirmPassword) {
              this.notSameError = true;
              return false;
            }

            var stringy = JSON.stringify({
              "requestType": "change_password",
              "usersID": this.userID,
              "oldPassword": this.oldPassword,
              "confirmPassword": this.ConfirmPassword
            });
            console.log(stringy); // this.ShowLoading = true;

            this.present();
            this.restService.forgotPassword(stringy).subscribe(function (response) {
              _this2.response = JSON.parse(response['_body']);
              console.log(_this2.response);

              if (_this2.response.status == 'error') {
                _this2.presentToast(_this2.response.msg); // this.ShowLoading = false


                _this2.dismiss();
              } else if (_this2.response.status == 'success') {
                _this2.presentToast('Password Updated Successfully').then(function (res) {
                  if (_this2.displayOLD == false) {
                    setTimeout(function () {
                      _this2.oldPassword = '';
                      _this2.newPassword = '';
                      _this2.ConfirmPassword = ''; // this.ShowLoading = false

                      _this2.dismiss();

                      _this2.navCtrl.navigateRoot('/setting');
                    }, 2000);
                  } else {
                    // this.submitFormLogin();
                    _this2.dismiss();

                    _this2.navCtrl.navigateRoot('/login');
                  }
                });
              }
            }, function (err) {});
          }
        }, {
          key: "presentToast",
          value: function presentToast(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: msg,
                        duration: 2000,
                        position: 'top'
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "toggleMenu",
          value: function toggleMenu() {
            this.menuCtrl.toggle();
          }
        }, {
          key: "forgotPassword",
          value: function forgotPassword() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              var popover;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.popoverController.create({
                        component: _forgot_password_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"],
                        backdropDismiss: false,
                        componentProps: {//"data": extra_info
                        },
                        translucent: true
                      });

                    case 2:
                      popover = _context2.sent;
                      popover.onWillDismiss().then(function (data) {
                        console.log(data);

                        if (data.data) {
                          _this3.verifyCodeNewPass();
                        }
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
          key: "verifyCodeNewPass",
          value: function verifyCodeNewPass() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this4 = this;

              var popover;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.popoverController.create({
                        component: _verify_new_code_verify_new_code_page__WEBPACK_IMPORTED_MODULE_8__["VerifyNewCodePage"],
                        backdropDismiss: false,
                        componentProps: {//"data": extra_info
                        },
                        translucent: true
                      });

                    case 2:
                      popover = _context3.sent;
                      popover.onWillDismiss().then(function (data) {
                        console.log(data);
                        _this4.getRes = data;
                        console.log(_this4.getRes.data.userID);
                        console.log(_this4.getRes.data.old_pass);
                        console.log(_this4.getRes.data.displayoldPass); // this.ShowLoading  = false;

                        _this4.dismiss();

                        _this4.displayOLD = _this4.getRes.data.displayoldPass;
                        _this4.oldPassword = _this4.getRes.data.old_pass;
                        _this4.userID = _this4.getRes.data.userID;
                      });
                      _context3.next = 6;
                      return popover.present();

                    case 6:
                      return _context3.abrupt("return", _context3.sent);

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "submitFormLogin",
          value: function submitFormLogin() {
            var _this5 = this;

            // this.validation = true;
            var stringy = JSON.stringify({
              "requestType": "login",
              "loginWith": "Email",
              "email": this.email,
              "password": this.ConfirmPassword
            });
            console.log(stringy); // this.present();
            // this.ShowLoading = true;

            this.present();
            this.restService.authenticate(stringy).subscribe(function (response) {
              _this5.response = JSON.parse(response['_body']);
              console.log(_this5.response);

              if (_this5.response.status == 'NotFound') {
                _this5.presentToast('Invalid email or password'); // this.ShowLoading = false;


                _this5.dismiss();
              } else if (_this5.response.status == 'Found') {
                _this5.presentToast('Login successfully!');

                _this5.storage.set('user_details', _this5.response.user_details);

                _this5.storage.set('profile_img_url', _this5.response.profile_img_url);

                _this5.storage.set('country_name', _this5.response.country_name);

                _this5.storage.set('base_urls', _this5.baseUrl);

                _this5.storage.set('currency_symbol', _this5.response.user_details.symbol);

                _this5.subjectEvents.publishSomeData({
                  sidebar: 'sidebar'
                });

                _this5.navCtrl.navigateRoot('/');
              }

              _this5.dismiss(); // this.ShowLoading = false;

            }, function (err) {
              _this5.presentToast('Oops!somthing went wrong.');

              _this5.dismiss();
            });
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
                        message: 'Please wait...'
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
            this.loading.dismiss();
          }
        }]);

        return ChangePasswordPage;
      }();

      ChangePasswordPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _subject_events_service__WEBPACK_IMPORTED_MODULE_7__["SubjectEventsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }];
      };

      ChangePasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./change-password.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/change-password/change-password.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./change-password.page.scss */
        "./src/app/change-password/change-password.page.scss"))["default"]]
      })], ChangePasswordPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=change-password-change-password-module-es5.js.map