(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~change-password-change-password-module~login-login-module~verify-new-code-verify-new-code-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/verify-new-code/verify-new-code.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/verify-new-code/verify-new-code.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppVerifyNewCodeVerifyNewCodePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <div style=\"padding: 10px !important;\">\n  <ion-row>\n    <ion-col class=\"text-right\">\n      <img src=\"assets/img/minimize.svg\" (click)=\"ok()\">\n    </ion-col>\n  </ion-row>\n\n  \n  <ion-row *ngIf=\"ShowLoading\" style=\"position: absolute; width: 100%; z-index: 9999;\">\n    <ion-col style=\"text-align: center;\">\n      <img style=\"width: 90px;\" src=\"assets/img/Loader.gif\">\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class=\"text-center\" size=\"12\">\n      <h1 class=\"alura\">Enter Code</h1>\n      <p class=\"alura m_0\"> Enter the 4 digit code that you received via email or sms.</p>\n    </ion-col>\n  </ion-row>\n\n  <ion-grid>\n  \n    <ion-row style=\"display: flex;\n    justify-content: center;\" >\n      <ng-otp-input  (onInputChange)=\"onOtpChange($event)\"   [config]=\"{length:4,allowNumbersOnly:true}\"></ng-otp-input>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-row>\n     <ion-col  size=\"3\">\n\n     </ion-col>\n     <ion-col size=\"6\" class=\"ion-text-center\">\n        <ion-button color=\"primary\" class=\"alura\"  (click)=\"goToHome()\" shape=\"round\" expand=\"block\">Next</ion-button>  \n        <!-- <p class=\"alura\" (click)=\"resend()\">Resend</p> -->\n    </ion-col>\n  </ion-row>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/verify-new-code/verify-new-code.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/verify-new-code/verify-new-code.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppVerifyNewCodeVerifyNewCodePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.m_0 {\n  margin: 0px;\n  padding: 0em 3%;\n}\n\n.select_color {\n  border: 1px solid #000;\n  border-radius: 25px;\n  padding: 12px 12px;\n}\n\nh1 {\n  color: #1A6BBE;\n  margin-top: 0px;\n}\n\nion-item {\n  border: 1px solid #d4dce1;\n  text-align: center;\n  border-radius: 40px;\n  --background: #F7F8FA;\n  --color: #d4dce1;\n  margin: 0em 0.3em;\n}\n\nion-input {\n  color: black;\n}\n\n.wid {\n  margin: 0em 2px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyaWZ5LW5ldy1jb2RlL3ZlcmlmeS1uZXctY29kZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFHQTtFQUNJLGtCQUFBO0FBQUo7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFFSjs7QUFDQTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFHSjs7QUFEQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUlKOztBQURBO0VBQ0ksWUFBQTtBQUlKOztBQURBO0VBQ0ksMEJBQUE7QUFJSiIsImZpbGUiOiJzcmMvYXBwL3ZlcmlmeS1uZXctY29kZS92ZXJpZnktbmV3LWNvZGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5pb24tYnV0dG9ue1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMS41ZW07XHJcbiAgICAtLXBhZGRpbmctdG9wOiAxLjVlbTtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4udGV4dC1jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRleHQtcmlnaHR7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4ubV8we1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIHBhZGRpbmc6IDBlbSAzJTtcclxufVxyXG5cclxuLnNlbGVjdF9jb2xvcntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgcGFkZGluZzogMTJweCAxMnB4O1xyXG59XHJcbmgxe1xyXG4gICAgY29sb3I6IzFBNkJCRTtcclxuICAgIG1hcmdpbi10b3A6MHB4O1xyXG59XHJcbmlvbi1pdGVte1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZGNlMTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGN0Y4RkE7XHJcbiAgICAtLWNvbG9yOiAjZDRkY2UxO1xyXG4gICAgbWFyZ2luOiAwZW0gMC4zZW07XHJcbn1cclxuXHJcbmlvbi1pbnB1dHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLndpZHtcclxuICAgIG1hcmdpbjogMGVtIDJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/verify-new-code/verify-new-code.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/verify-new-code/verify-new-code.page.ts ***!
      \*********************************************************/

    /*! exports provided: VerifyNewCodePage */

    /***/
    function srcAppVerifyNewCodeVerifyNewCodePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerifyNewCodePage", function () {
        return VerifyNewCodePage;
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

      var VerifyNewCodePage = /*#__PURE__*/function () {
        function VerifyNewCodePage(navCtrl, router, popoverController, restService, plateform, toastController, loadingController, navParams) {
          _classCallCheck(this, VerifyNewCodePage);

          this.navCtrl = navCtrl;
          this.router = router;
          this.popoverController = popoverController;
          this.restService = restService;
          this.plateform = plateform;
          this.toastController = toastController;
          this.loadingController = loadingController;
          this.navParams = navParams;
          this.a1 = '';
          this.b1 = '';
          this.c1 = '';
          this.d1 = '';
          this.otpemail = '';
          this.ShowLoading = false;
          this.response = '';
          this.stringyOfSignup = '';
          this.loading = '';
          this.otp = '';
          this.otpArr = '';
          this.otpMsg = '';
          this.mobileNumber = '';
          this.responseOfOtp = '';
          this.otpCodeOfthisScreen = '';
        }

        _createClass(VerifyNewCodePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.plateform.is('ios')) {
              this.plateformCheck = "ios";
            } else {
              this.plateformCheck = "android";
            }

            this.email = localStorage.getItem("restWithEmail"); // alert('in the popup');
            // alert(this.navParams.get('stringyOfSignup'));

            this.stringyOfSignup = this.navParams.get('stringyOfSignup');
            this.otp = this.navParams.get('otp');
            this.otpArr = this.navParams.get('otpArr');
            this.otpMsg = this.navParams.get('otpMsg');
            this.mobileNumber = this.navParams.get('mobileNumber');
          }
        }, {
          key: "ok",
          value: function ok() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.popoverController.dismiss();

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "goToHome",
          value: function goToHome() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              var data;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (this.codee.length < 4) {
                        this.presentToast('Please complete code.');
                      } else {
                        this.otpCodeOfthisScreen = this.a1.toString() + this.b1.toString() + this.c1.toString() + this.d1.toString();
                        console.log(this.codee); // if (this.otpCodeOfthisScreen == this.otp) {

                        this.present(); // this.ShowLoading = true

                        console.log(this.stringyOfSignup);
                        data = JSON.stringify({
                          "email": this.email,
                          "requestType": "verify_code",
                          "code": this.codee
                        });
                        this.restService.forgotPassword(data).subscribe(function (response) {
                          _this.response = JSON.parse(response['_body']);
                          console.log(_this.response);
                          console.log(_this.response.status);

                          if (_this.response.status == 'NotFound') {
                            _this.presentToast("Code does not match"); // this.ShowLoading =false;


                            _this.dismiss();
                          } else if (_this.response.status == 'Found') {
                            localStorage.setItem("oldpass", _this.response.old_pass); // await this.popoverController.dismiss();

                            _this.popoverController.dismiss({
                              //val
                              displayoldPass: true,
                              old_pass: _this.response.old_pass,
                              userID: _this.response.user_id
                            });

                            var myData = JSON.stringify({
                              displayoldPass: true,
                              old_pass: _this.response.old_pass,
                              userID: _this.response.user_id
                            });

                            _this.router.navigate(['/change-password'], {
                              queryParams: {
                                value: myData
                              }
                            }); //  this.router.navigate(['/change-password']);
                            // this.router.navigate(['/']);


                            _this.dismiss(); // this.ShowLoading=false;

                          }
                        }, function (err) {
                          _this.dismiss(); // this.ShowLoading = false

                        }); // } else {
                      }

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "gotoNextField",
          value: function gotoNextField(nextElement, value, previousElement, currentElement) {
            if (value != '') {
              nextElement.setFocus();
            } else {
              currentElement.setFocus();
            }
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
                        position: 'top'
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
        }, {
          key: "onOtpChange",
          value: function onOtpChange(event) {
            console.log(event, "eventevent");
            this.codee = event;
          }
        }, {
          key: "resend",
          value: function resend() {
            var _this2 = this;

            var ss = JSON.stringify({
              requestType: 'send_otp',
              phone_number: this.mobileNumber
            }); // this.present()

            this.ShowLoading = true;
            this.restService.auth_userAPI(ss).subscribe(function (ress) {
              console.log(ress);
              _this2.responseOfOtp = JSON.parse(ress['_body']);
              console.log('respooooo', _this2.responseOfOtp);

              if (_this2.responseOfOtp.status == 'success') {
                _this2.otp = _this2.responseOfOtp.otp_code;
                _this2.otpArr = _this2.responseOfOtp.otp_code_array;
                _this2.otpMsg = _this2.responseOfOtp.msg;
                _this2.a1 = _this2.otpArr[0];
                _this2.b1 = _this2.otpArr[1];
                _this2.c1 = _this2.otpArr[2];
                _this2.d1 = _this2.otpArr[3];
              } else {
                _this2.otpMsg = _this2.responseOfOtp.msg;

                _this2.presentToast(_this2.otpMsg);
              } // this.dismiss()


              _this2.ShowLoading = false;
            });
          }
        }]);

        return VerifyNewCodePage;
      }();

      VerifyNewCodePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
        }, {
          type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
        }];
      };

      VerifyNewCodePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-verify-new-code',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./verify-new-code.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/verify-new-code/verify-new-code.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./verify-new-code.page.scss */
        "./src/app/verify-new-code/verify-new-code.page.scss"))["default"]]
      })], VerifyNewCodePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~change-password-change-password-module~login-login-module~verify-new-code-verify-new-code-module-es5.js.map