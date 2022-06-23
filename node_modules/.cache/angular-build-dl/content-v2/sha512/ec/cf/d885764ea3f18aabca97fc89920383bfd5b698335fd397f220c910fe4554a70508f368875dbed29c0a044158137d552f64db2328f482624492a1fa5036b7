(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["listed-car-listed-car-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/listed-car/listed-car.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/listed-car/listed-car.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [class.ios-headers]=\"plateformCheck == 'ios'\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <img src=\"assets/img/Menu.svg\" (click)=\"toggleMenu()\" />\n    </ion-buttons>\n    <ion-title [class.globe_title]=\"plateformCheck == 'ios'\">Listed Cars</ion-title>\n  </ion-toolbar>\n</ion-header>    \n<ion-content>   \n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"chevron-down-circle-outline\" pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\" refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ng-container *ngIf=\"vehicles_list?.length >0\">\n    <ng-container *ngFor=\"let p of vehicles_list; let i = index\">\n      <ng-container *ngIf=\"p.vehicle_imgs\">\n        <ion-row class=\"pd_bs\" *ngIf=\"i % 2 === 0\">\n          \n          <ion-col style=\"margin-top: 1.5em\" size=\"4\" class=\"lambo\">\n            <!--   <h4>{{p.model_name}}</h4> -->\n            <img *ngIf=\"!p.vehicle_imgs\" src=\"assets/img/car_3.svg\" />\n            <img *ngIf=\"p.vehicle_imgs\" src=\"{{base_url}}{{p.vehicle_imgs[0]}}\" />\n          </ion-col>\n          <ion-col class=\"trip_dates\" size=\"4\">\n            <p class=\"blue\">Trip Dates</p>\n            <p class=\"primary\">Start Date</p>\n            <p>{{p.start_date | customeDate}}</p>\n            <p class=\"primary\">Charge per day</p>\n            <p style=\"margin-bottom: 27px\">{{symbol}} {{p.charge_per_day}}</p>\n            <div class=\"give_rating list_issue\" (click)=\"editDetail(p)\">\n              Edit Details\n            </div>\n          </ion-col>\n          <ion-col class=\"trip_end_date\" size=\"4\">\n            <p class=\"primary\">End Date</p>\n            <p>{{p.end_date | customeDate}}</p>\n\n            <div *ngIf=\"p.admin_status == 'Approved' \" class=\"give_rating-status-aproved list_issue\">\n              Approved\n            </div>\n            <div *ngIf=\"p.admin_status == 'Pending' \" class=\"give_rating-status-panding list_issue\">\n              Pending\n            </div>\n            <div *ngIf=\"p.admin_status == 'Rejected' \" class=\"give_rating-status-rejected list_issue\">\n              Rejected\n            </div>\n          </ion-col>\n          <ion-icon\n            name=\"trash\"\n            class=\"bin\"\n            (click)=\"removeImage(p,i)\"\n            style=\"\n                position: absolute;\n                right: 15px;\n                top: 35px;\n            \"\n\n          >\n          </ion-icon>\n        </ion-row>\n\n        <ion-row class=\"pd_bs bg_grey\" *ngIf=\"i % 2 != 0\">\n          <ion-col style=\"margin-top: 1.5em\" size=\"4\" class=\"lambo\">\n            <!-- <h4>{{p.model_name}}</h4> -->\n            <!-- <img src=\"{{base_url}}{{p.vehicle_imgs[0]}}\"> -->\n            <img *ngIf=\"!p.vehicle_imgs\" src=\"assets/img/car_3.svg\" />\n            <img *ngIf=\"p.vehicle_imgs\" src=\"{{base_url}}{{p.vehicle_imgs[0]}}\" />\n          </ion-col>\n          <ion-col class=\"trip_dates\" size=\"4\">\n            <p class=\"blue\">Trip Dates</p>\n            <p class=\"primary\">Start Date</p>\n            <p>{{p.start_date | customeDate}}</p>\n            <p class=\"primary\">Charge per day</p>\n            <p style=\"margin-bottom: 27px\">{{symbol}} {{p.charge_per_day}}</p>\n            <div class=\"give_rating list_issue\" (click)=\"editDetail(p)\">\n              Edit Details\n            </div>\n          </ion-col>\n          <ion-col class=\"trip_end_date\" size=\"4\">\n            <p class=\"primary\">End Date</p>\n            <p>{{p.end_date | customeDate}}</p>\n\n            <div *ngIf=\"p.admin_status == 'Approved' \" class=\"give_rating-status-aproved list_issue\">\n              Approved\n            </div>\n            <div *ngIf=\"p.admin_status == 'Pending' \" class=\"give_rating-status-panding list_issue\">\n              Pending\n            </div>\n            <div *ngIf=\"p.admin_status == 'Rejected' \" class=\"give_rating-status-rejected list_issue\">\n              Rejected\n            </div>\n          </ion-col>\n          <ion-icon\n            name=\"trash\"\n            class=\"bin\"\n            (click)=\"removeImage(p,i)\"\n            style=\"\n                position: absolute;\n                right: 15px;\n                top: 35px;\n            \"\n\n          >\n          </ion-icon>\n        </ion-row>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n  <ng-container *ngIf=\"vehicles_list?.length == 0\">\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <h2>Data Not Found!</h2>\n      </ion-col>\n    </ion-row>\n  </ng-container>\n  <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <ion-row>\n    <ion-col>\n      <ion-button color=\"primary\" expand=\"block\" shape=\"round\" (click)=\"goToCarList()\">List a Car</ion-button>\n    </ion-col>\n    <ion-col>\n      <ion-button color=\"primary\" expand=\"block\" shape=\"round\" (click)=\"goToDraft()\">Drafts</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content>");

/***/ }),

/***/ "./src/app/listed-car/listed-car-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/listed-car/listed-car-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ListedCarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListedCarPageRoutingModule", function() { return ListedCarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _listed_car_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listed-car.page */ "./src/app/listed-car/listed-car.page.ts");




const routes = [
    {
        path: '',
        component: _listed_car_page__WEBPACK_IMPORTED_MODULE_3__["ListedCarPage"]
    }
];
let ListedCarPageRoutingModule = class ListedCarPageRoutingModule {
};
ListedCarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListedCarPageRoutingModule);



/***/ }),

/***/ "./src/app/listed-car/listed-car.module.ts":
/*!*************************************************!*\
  !*** ./src/app/listed-car/listed-car.module.ts ***!
  \*************************************************/
/*! exports provided: ListedCarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListedCarPageModule", function() { return ListedCarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _listed_car_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listed-car-routing.module */ "./src/app/listed-car/listed-car-routing.module.ts");
/* harmony import */ var _listed_car_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listed-car.page */ "./src/app/listed-car/listed-car.page.ts");
/* harmony import */ var _custome_date_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../custome-date.pipe */ "./src/app/custome-date.pipe.ts");








let ListedCarPageModule = class ListedCarPageModule {
};
ListedCarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _listed_car_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListedCarPageRoutingModule"]
        ],
        declarations: [_listed_car_page__WEBPACK_IMPORTED_MODULE_6__["ListedCarPage"], _custome_date_pipe__WEBPACK_IMPORTED_MODULE_7__["CustomeDatePipe"]]
    })
], ListedCarPageModule);



/***/ }),

/***/ "./src/app/listed-car/listed-car.page.scss":
/*!*************************************************!*\
  !*** ./src/app/listed-car/listed-car.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  padding: 0em 0em 0 0;\n  --background: #c4932f;\n}\n\nion-toolbar.ios {\n  margin-top: 3px;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 0em 0em 0px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n  padding-left: 0px;\n}\n\nion-header {\n  margin-bottom: 10px;\n}\n\n.bg_grey {\n  background: #F9F9F9;\n}\n\n.pd_bs {\n  padding: 5px 9px;\n  position: relative;\n}\n\n.lambo h4 {\n  margin: 0px;\n  margin-bottom: 3px;\n  font-size: 16px;\n}\n\n.trip_dates {\n  font-size: 10px;\n  padding-top: 2.4em;\n  padding-left: 1.3em;\n}\n\n.trip_dates p {\n  margin: 0px;\n  margin-top: 5px;\n}\n\n.blue {\n  color: #1A6BBE;\n}\n\n.primary {\n  color: #C4932F;\n}\n\n.trip_end_date {\n  font-size: 10px;\n  padding-top: 4.2em;\n  padding-left: 1.3em;\n}\n\n.trip_end_date p {\n  margin: 0px;\n  margin-top: 6.4px;\n}\n\n.star img:first-child {\n  margin-left: 0px !important;\n}\n\n.star img {\n  margin-left: 4px;\n}\n\n.give_rating {\n  background: #D93A3A;\n  color: #fff;\n  /* padding: 0.7em; */\n  border-radius: 25px;\n  /* width: 100%; */\n  text-align: center;\n  margin: 0px;\n}\n\n.give_rating-status-aproved {\n  background: #82d93a;\n  color: #fff;\n  /* padding: 0.7em; */\n  border-radius: 25px;\n  /* width: 100%; */\n  text-align: center;\n  position: relative;\n  /* top: 3.6em; */\n  margin: 0px;\n}\n\n.give_rating-status-panding {\n  background: #0d0f0b;\n  color: #fff;\n  padding: 0.7em;\n  border-radius: 25px;\n  width: 100%;\n  text-align: center;\n  position: relative;\n  /* top: 3.6em; */\n  margin: 0px;\n}\n\n.give_rating-status-rejected {\n  background: #0d0f0b;\n  color: #fff;\n  padding: 0.7em;\n  border-radius: 25px;\n  width: 100%;\n  text-align: center;\n  position: relative;\n  /* top: 3.6em; */\n  margin: 0px;\n}\n\n.danger {\n  background: #D93A3A;\n  color: #fff;\n  padding: 0.7em;\n  border-radius: 25px;\n  width: 100%;\n  text-align: center;\n  margin: 0px;\n  margin-top: 10px !important;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n}\n\n.list_issue {\n  padding: 7px;\n  position: absolute;\n  bottom: 0px;\n  width: 88%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdGVkLWNhci9saXN0ZWQtY2FyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksc0JBQUE7SUFDQSxxQkFBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxtQkFBQTtBQUVKOztBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUlKOztBQUZBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFLSjs7QUFIQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBTUo7O0FBSkE7RUFDSSxjQUFBO0FBT0o7O0FBTEE7RUFDSSxjQUFBO0FBUUo7O0FBTkE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQVNKOztBQVBBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBVUo7O0FBUkE7RUFDSSwyQkFBQTtBQVdKOztBQVRBO0VBQ0ksZ0JBQUE7QUFZSjs7QUFWQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQWFKOztBQVhBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQWNKOztBQVpBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFlSjs7QUFiQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBZ0JKOztBQWRBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FBaUJKOztBQWZBO0VBQ0ksdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBa0JKOztBQWhCQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBbUJKIiwiZmlsZSI6InNyYy9hcHAvbGlzdGVkLWNhci9saXN0ZWQtY2FyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICBwYWRkaW5nOiAwZW0gMGVtIDAgMDtcbiAgICAtLWJhY2tncm91bmQ6ICNjNDkzMmY7XG59XG5cbmlvbi10b29sYmFyLmlvcyB7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi1oZWlnaHQgOiA4MDBweCkge1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgcGFkZGluZzogMGVtIDBlbSAwcHggMDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjYzQ5MzJmO1xuICAgIH1cbn1cblxuaW9uLXRpdGxle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5pb24taGVhZGVye1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uYmdfZ3JleXtcbiAgICBiYWNrZ3JvdW5kOiNGOUY5Rjk7XG59XG4ucGRfYnN7XG4gICAgcGFkZGluZzogNXB4IDlweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubGFtYm8gaDR7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbi50cmlwX2RhdGVze1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBwYWRkaW5nLXRvcDogMi40ZW07XG4gICAgcGFkZGluZy1sZWZ0OiAxLjNlbTtcbn1cbi50cmlwX2RhdGVzIHB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuLmJsdWV7XG4gICAgY29sb3I6IzFBNkJCRTtcbn1cbi5wcmltYXJ5e1xuICAgIGNvbG9yOiNDNDkzMkY7XG59XG4udHJpcF9lbmRfZGF0ZXtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDQuMmVtO1xuICAgIHBhZGRpbmctbGVmdDogMS4zZW07XG59XG4udHJpcF9lbmRfZGF0ZSBwe1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG1hcmdpbi10b3A6IDYuNHB4O1xufVxuLnN0YXIgaW1nOmZpcnN0LWNoaWxke1xuICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbn1cbi5zdGFyIGltZ3tcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xufVxuLmdpdmVfcmF0aW5ne1xuICAgIGJhY2tncm91bmQ6ICNEOTNBM0E7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgLyogcGFkZGluZzogMC43ZW07ICovXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwcHg7XG59XG4uZ2l2ZV9yYXRpbmctc3RhdHVzLWFwcm92ZWR7XG4gICAgYmFja2dyb3VuZDogIzgyZDkzYTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICAvKiBwYWRkaW5nOiAwLjdlbTsgKi9cbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLyogdG9wOiAzLjZlbTsgKi9cbiAgICBtYXJnaW46IDBweDtcbn1cbi5naXZlX3JhdGluZy1zdGF0dXMtcGFuZGluZ3tcbiAgICBiYWNrZ3JvdW5kOiAjMGQwZjBiO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDAuN2VtO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvKiB0b3A6IDMuNmVtOyAqL1xuICAgIG1hcmdpbjogMHB4O1xufVxuLmdpdmVfcmF0aW5nLXN0YXR1cy1yZWplY3RlZHtcbiAgICBiYWNrZ3JvdW5kOiAjMGQwZjBiO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDAuN2VtO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvKiB0b3A6IDMuNmVtOyAqL1xuICAgIG1hcmdpbjogMHB4O1xufVxuLmRhbmdlcntcbiAgICBiYWNrZ3JvdW5kOiAjRDkzQTNBO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDAuN2VtO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cbmlvbi1idXR0b257XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMS41ZW07XG4gICAgLS1wYWRkaW5nLXRvcDogMS41ZW07XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuLmxpc3RfaXNzdWV7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDBweDtcbiAgICB3aWR0aDogODglO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/listed-car/listed-car.page.ts":
/*!***********************************************!*\
  !*** ./src/app/listed-car/listed-car.page.ts ***!
  \***********************************************/
/*! exports provided: ListedCarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListedCarPage", function() { return ListedCarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _action_booking_action_booking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../action-booking/action-booking.page */ "./src/app/action-booking/action-booking.page.ts");







let ListedCarPage = class ListedCarPage {
    constructor(loadingController, popoverController, restService, storage, router, menuCtrl, plateform, toastController) {
        this.loadingController = loadingController;
        this.popoverController = popoverController;
        this.restService = restService;
        this.storage = storage;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.plateform = plateform;
        this.toastController = toastController;
        this.vehicles_list = [];
        this.page_number = 0;
    }
    ngOnInit() {
        if (this.plateform.is('ios')) {
            this.plateformCheck = "ios";
        }
        else {
            this.plateformCheck = "android";
        }
    }
    ionViewWillEnter() {
        this.storage.get('user_details').then((user_details) => {
            this.userID = user_details.users_id;
            this.Email = user_details.email;
            this.symbol = user_details.symbol;
            this.getCarList(false);
            this.storage.get('base_urls').then((base_url) => {
                this.base_url = base_url;
            });
        });
    }
    doRefresh(event) {
        this.getCarList(false, event, "refresher");
    }
    doInfinite(event) {
        this.getCarList(true, event);
    }
    getCarList(isFirstLoad, event, refresher) {
        let offset = 0;
        if (isFirstLoad == false) {
            this.page_number = offset;
        }
        var stringy = JSON.stringify({
            "requestType": "get_cars_list",
            "usersID": this.userID,
            "limit": 4,
            "offset": this.page_number
        });
        if (!isFirstLoad) {
            this.present();
        }
        this.restService.list_vehicles(stringy).subscribe(response => {
            if (isFirstLoad == false) {
                this.vehicles_list = [];
            }
            this.response = JSON.parse(response['_body']);
            this.vehicles_list = [...this.vehicles_list, ...this.response.vehicles_list];
            /*  this.vehicles_list =  this.response.vehicles_list; */
            this.dismiss();
            if (isFirstLoad) {
                event.target.complete();
            }
            if (event) {
                event.target.complete();
            }
            if (refresher) {
                event.target.complete();
            }
            this.page_number = this.page_number + 4;
            if (!isFirstLoad) {
                this.dismiss();
            }
        }, err => {
            console.log(err);
        });
    }
    toggleMenu() {
        this.menuCtrl.toggle();
    }
    goToCarList() {
        //this.router.navigate(['/list-your-car']);
        this.router.navigate(['/listcar1']);
    }
    goToDraft() {
        //this.router.navigate(['/list-your-car']);
        this.router.navigate(['/mydraftcar']);
    }
    editDetail(car_details) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.present();
            var stringy = JSON.stringify({
                "requestType": "check_veh_req",
                "veh_id": car_details.vehicles_id
            });
            this.restService.check_vehicles(stringy).subscribe(response => {
                this.response = JSON.parse(response['_body']);
                this.dismiss();
                if (this.response.status == 'success') {
                    this.popover();
                }
                else {
                    var myData = JSON.stringify({
                        vehiclesID: car_details.vehicles_id
                    });
                    this.router.navigate(['/edit-list-your-car'], {
                        queryParams: {
                            value: myData
                        },
                    });
                }
            }, err => {
                console.log(err);
            });
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
    popover() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _action_booking_action_booking_page__WEBPACK_IMPORTED_MODULE_6__["ActionBookingPage"],
                translucent: true,
                componentProps: {
                    "booking": 'veh_msg',
                },
            });
            popover.onWillDismiss().then(data => {
                if (data.data.val == 'ok') {
                }
            });
            yield popover.present();
        });
    }
    removeImage(detail, i) {
        this.action(detail, 'del_veh', i);
    }
    action(veh_details, action, i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _action_booking_action_booking_page__WEBPACK_IMPORTED_MODULE_6__["ActionBookingPage"],
                translucent: true,
                backdropDismiss: false,
                componentProps: {
                    data: 1,
                    booking: action,
                    ownerID: 2,
                    userID: veh_details.vehicles_id,
                },
            });
            popover.onWillDismiss().then((data) => {
                if (data.data.val == 'ok') {
                    this.vehicles_list.splice(i, 1);
                    this.presentToast('Car deleted successfully');
                }
            });
            return yield popover.present();
        });
    }
    presentToast(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000,
                position: 'top',
            });
            toast.present();
        });
    }
};
ListedCarPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
ListedCarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listed-car',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./listed-car.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/listed-car/listed-car.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./listed-car.page.scss */ "./src/app/listed-car/listed-car.page.scss")).default]
    })
], ListedCarPage);



/***/ })

}]);
//# sourceMappingURL=listed-car-listed-car-module-es2015.js.map