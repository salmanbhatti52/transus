(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~change-password-change-password-module~login-login-module~verify-new-code-verify-new-code-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/verify-new-code/verify-new-code.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/verify-new-code/verify-new-code.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div style=\"padding: 10px !important;\">\n  <ion-row>\n    <ion-col class=\"text-right\">\n      <img src=\"assets/img/minimize.svg\" (click)=\"ok()\">\n    </ion-col>\n  </ion-row>\n\n  \n  <ion-row *ngIf=\"ShowLoading\" style=\"position: absolute; width: 100%; z-index: 9999;\">\n    <ion-col style=\"text-align: center;\">\n      <img style=\"width: 90px;\" src=\"assets/img/Loader.gif\">\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class=\"text-center\" size=\"12\">\n      <h1 class=\"alura\">Enter Code</h1>\n      <p class=\"alura m_0\"> Enter the 4 digit code that you received via email or sms.</p>\n    </ion-col>\n  </ion-row>\n\n  <ion-grid>\n  \n    <ion-row style=\"display: flex;\n    justify-content: center;\" >\n      <ng-otp-input  (onInputChange)=\"onOtpChange($event)\"   [config]=\"{length:4,allowNumbersOnly:true}\"></ng-otp-input>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-row>\n     <ion-col  size=\"3\">\n\n     </ion-col>\n     <ion-col size=\"6\" class=\"ion-text-center\">\n        <ion-button color=\"primary\" class=\"alura\"  (click)=\"goToHome()\" shape=\"round\" expand=\"block\">Next</ion-button>  \n        <!-- <p class=\"alura\" (click)=\"resend()\">Resend</p> -->\n    </ion-col>\n  </ion-row>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/verify-new-code/verify-new-code.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/verify-new-code/verify-new-code.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.m_0 {\n  margin: 0px;\n  padding: 0em 3%;\n}\n\n.select_color {\n  border: 1px solid #000;\n  border-radius: 25px;\n  padding: 12px 12px;\n}\n\nh1 {\n  color: #1A6BBE;\n  margin-top: 0px;\n}\n\nion-item {\n  border: 1px solid #d4dce1;\n  text-align: center;\n  border-radius: 40px;\n  --background: #F7F8FA;\n  --color: #d4dce1;\n  margin: 0em 0.3em;\n}\n\nion-input {\n  color: black;\n}\n\n.wid {\n  margin: 0em 2px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyaWZ5LW5ldy1jb2RlL3ZlcmlmeS1uZXctY29kZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFHQTtFQUNJLGtCQUFBO0FBQUo7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFFSjs7QUFDQTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFHSjs7QUFEQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUlKOztBQURBO0VBQ0ksWUFBQTtBQUlKOztBQURBO0VBQ0ksMEJBQUE7QUFJSiIsImZpbGUiOiJzcmMvYXBwL3ZlcmlmeS1uZXctY29kZS92ZXJpZnktbmV3LWNvZGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5pb24tYnV0dG9ue1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMS41ZW07XHJcbiAgICAtLXBhZGRpbmctdG9wOiAxLjVlbTtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4udGV4dC1jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRleHQtcmlnaHR7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4ubV8we1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIHBhZGRpbmc6IDBlbSAzJTtcclxufVxyXG5cclxuLnNlbGVjdF9jb2xvcntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgcGFkZGluZzogMTJweCAxMnB4O1xyXG59XHJcbmgxe1xyXG4gICAgY29sb3I6IzFBNkJCRTtcclxuICAgIG1hcmdpbi10b3A6MHB4O1xyXG59XHJcbmlvbi1pdGVte1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZGNlMTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGN0Y4RkE7XHJcbiAgICAtLWNvbG9yOiAjZDRkY2UxO1xyXG4gICAgbWFyZ2luOiAwZW0gMC4zZW07XHJcbn1cclxuXHJcbmlvbi1pbnB1dHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLndpZHtcclxuICAgIG1hcmdpbjogMGVtIDJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/verify-new-code/verify-new-code.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/verify-new-code/verify-new-code.page.ts ***!
  \*********************************************************/
/*! exports provided: VerifyNewCodePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyNewCodePage", function() { return VerifyNewCodePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");





let VerifyNewCodePage = class VerifyNewCodePage {
    constructor(navCtrl, router, popoverController, restService, plateform, toastController, loadingController, navParams) {
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
    ngOnInit() {
        if (this.plateform.is('ios')) {
            this.plateformCheck = "ios";
        }
        else {
            this.plateformCheck = "android";
        }
        this.email = localStorage.getItem("restWithEmail");
        // alert('in the popup');
        // alert(this.navParams.get('stringyOfSignup'));
        this.stringyOfSignup = this.navParams.get('stringyOfSignup');
        this.otp = this.navParams.get('otp');
        this.otpArr = this.navParams.get('otpArr');
        this.otpMsg = this.navParams.get('otpMsg');
        this.mobileNumber = this.navParams.get('mobileNumber');
    }
    ok() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.popoverController.dismiss();
        });
    }
    goToHome() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.codee.length < 4) {
                this.presentToast('Please complete code.');
            }
            else {
                this.otpCodeOfthisScreen = this.a1.toString() + this.b1.toString() + this.c1.toString() + this.d1.toString();
                console.log(this.codee);
                // if (this.otpCodeOfthisScreen == this.otp) {
                this.present();
                // this.ShowLoading = true
                console.log(this.stringyOfSignup);
                var data = JSON.stringify({
                    "email": this.email,
                    "requestType": "verify_code",
                    "code": this.codee
                });
                this.restService.forgotPassword(data).subscribe(response => {
                    this.response = JSON.parse(response['_body']);
                    console.log(this.response);
                    console.log(this.response.status);
                    if (this.response.status == 'NotFound') {
                        this.presentToast("Code does not match");
                        // this.ShowLoading =false;
                        this.dismiss();
                    }
                    else if (this.response.status == 'Found') {
                        localStorage.setItem("oldpass", this.response.old_pass);
                        // await this.popoverController.dismiss();
                        this.popoverController.dismiss({
                            //val
                            displayoldPass: true,
                            old_pass: this.response.old_pass,
                            userID: this.response.user_id
                        });
                        var myData = JSON.stringify({
                            displayoldPass: true,
                            old_pass: this.response.old_pass,
                            userID: this.response.user_id
                        });
                        this.router.navigate(['/change-password'], {
                            queryParams: {
                                value: myData
                            },
                        });
                        //  this.router.navigate(['/change-password']);
                        // this.router.navigate(['/']);
                        this.dismiss();
                        // this.ShowLoading=false;
                    }
                }, err => {
                    this.dismiss();
                    // this.ShowLoading = false
                });
                // } else {
            }
        });
    }
    gotoNextField(nextElement, value, previousElement, currentElement) {
        if (value != '') {
            nextElement.setFocus();
        }
        else {
            currentElement.setFocus();
        }
    }
    presentToast(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000,
                position: 'top'
            });
            toast.present();
        });
    }
    present() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: 'Please wait...',
            });
            yield this.loading.present();
        });
    }
    dismiss() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loading.dismiss();
        });
    }
    onOtpChange(event) {
        console.log(event, "eventevent");
        this.codee = event;
    }
    resend() {
        var ss = JSON.stringify({
            requestType: 'send_otp',
            phone_number: this.mobileNumber
        });
        // this.present()
        this.ShowLoading = true;
        this.restService.auth_userAPI(ss).subscribe((ress) => {
            console.log(ress);
            this.responseOfOtp = JSON.parse(ress['_body']);
            console.log('respooooo', this.responseOfOtp);
            if (this.responseOfOtp.status == 'success') {
                this.otp = this.responseOfOtp.otp_code;
                this.otpArr = this.responseOfOtp.otp_code_array;
                this.otpMsg = this.responseOfOtp.msg;
                this.a1 = this.otpArr[0];
                this.b1 = this.otpArr[1];
                this.c1 = this.otpArr[2];
                this.d1 = this.otpArr[3];
            }
            else {
                this.otpMsg = this.responseOfOtp.msg;
                this.presentToast(this.otpMsg);
            }
            // this.dismiss()
            this.ShowLoading = false;
        });
    }
};
VerifyNewCodePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] }
];
VerifyNewCodePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-verify-new-code',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./verify-new-code.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/verify-new-code/verify-new-code.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./verify-new-code.page.scss */ "./src/app/verify-new-code/verify-new-code.page.scss")).default]
    })
], VerifyNewCodePage);



/***/ })

}]);
//# sourceMappingURL=default~change-password-change-password-module~login-login-module~verify-new-code-verify-new-code-module-es2015.js.map