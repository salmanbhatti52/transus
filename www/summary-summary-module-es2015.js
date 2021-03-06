(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["summary-summary-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/summary/summary.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/summary/summary.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header *ngIf=\"showSlide == 'no'\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <img src=\"assets/img/Arrow.svg\" (click)=\"back()\">\r\n    </ion-buttons>\r\n    <ion-title>{{booking_details.model_name}}</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n <div *ngIf=\"showSlide == 'no'\">\r\n  <ion-row>\r\n    <ion-col class=\"slider_main\">\r\n      <ion-slides pager=\"true\" >\r\n\r\n        <ion-slide *ngFor=\"let p of vehicle_imgs; let i = index\">\r\n          <div class=\"slide\" >\r\n            <img src=\"{{base_url}}{{p}}\" class=\"s_img\" (click)=\"previewImage(p)\"/>\r\n          </div>\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"trip_cost\">\r\n    <ion-col size=\"6\" >\r\n      <h4>TRIP COST</h4>\r\n    </ion-col>\r\n    <ion-col size=\"6\" class=\"ion-text-right\">\r\n      <h4 class=\"primary_color\">{{currency_symbol}}{{booking_details.trip_cost}}</h4>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"descr bg_white\" >\r\n    <ion-col size=\"12\">\r\n      <h4>Trip Dates</h4>\r\n    </ion-col>\r\n    <ion-col size=\"6\">\r\n      <small>Start Date</small>\r\n      <p>{{booking_details.start_date | customeDate}}</p>\r\n    </ion-col>\r\n    <ion-col size=\"6\">\r\n      <small>End Date</small>\r\n      <p>{{booking_details.end_date | customeDate}}</p>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"descr\">\r\n    <ion-col size=\"12\">\r\n      <h4>Trip Time</h4>\r\n    </ion-col>\r\n    <ion-col size=\"6\">\r\n      <small>Start Time</small>\r\n      <p>{{start_time}}</p>\r\n    </ion-col>\r\n    <ion-col size=\"6\">\r\n      <small>End Time</small>\r\n      <p>{{end_time}}</p>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"descr bg_white\">\r\n    <ion-col size=\"12\">\r\n      <h4>Location</h4>\r\n    </ion-col>\r\n    <ion-col size=\"6\">\r\n      <small>Pickup</small>\r\n      <p>{{booking_details.pickup_location}}</p>\r\n    </ion-col>\r\n    <ion-col size=\"6\">\r\n      <small>Dropoff</small>\r\n      <p>{{booking_details.dropoff_location}}</p>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"descr bg_white\">\r\n    <ion-col size=\"12\">\r\n      <h4>Driving Liscense ID</h4>\r\n    </ion-col>\r\n    <ion-col size=\"12\">\r\n      <img src=\"{{base_url}}{{booking_details.license_img_url}}\">\r\n    </ion-col>\r\n    \r\n  </ion-row>\r\n  <ion-row class=\"btn_footer\"> \r\n    <ion-col size=\"2\">\r\n    </ion-col>\r\n    <ion-col size=\"8\">\r\n      <ng-conatiner *ngIf=\"booking_details.status == 'Pending'\">\r\n        <!-- <ion-button *ngIf=\"booking_details.status == 'Accepted' \" color=\"secondary\" expand=\"block\" shape=\"round\" (click)=\"flutterWaves()\">Make Payment</ion-button> -->\r\n        <ion-button *ngIf=\"booking_details.status == 'Pending' \" color=\"secondary\" expand=\"block\" shape=\"round\" (click)=\"bookingpage('pending')\">View Booking</ion-button>\r\n      </ng-conatiner>\r\n\r\n      <ng-conatiner *ngIf=\"booking_details.status == 'Accepted'\">\r\n        <ion-button *ngIf=\"!paymentDone\" color=\"secondary\" expand=\"block\" shape=\"round\" (click)=\"flutterWaves()\">Make Payment</ion-button>\r\n        <ion-button *ngIf=\"paymentDone\" color=\"secondary\" expand=\"block\" shape=\"round\" (click)=\"bookingpage('upcoming')\">View Booking</ion-button>\r\n      </ng-conatiner>\r\n     \r\n     \r\n    </ion-col>\r\n  </ion-row>\r\n </div>\r\n <div *ngIf=\"showSlide == 'yes'\" [class.for_ios_pad]=\"plateformCheck == 'ios'\" style=\"background: #000000f5; height: 100%;\">\r\n\r\n  <ion-row>\r\n    <ion-col style=\"padding-left: 20px;\r\n  padding-top: 20px;\">\r\n      <img src=\"assets/img/close.png\" (click)=\"closeModel()\" style=\"height: 20px;\r\n      width: 20px;\r\n      padding: 3px;\r\n      border-radius: 10px;\">\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n\r\n\r\n  <ion-row class=\"center\">\r\n    <ion-col class=\"slider_main_slide\">\r\n      <ion-slides (ionSlideDidChange)=\"slideChanged($event)\" #slides>\r\n\r\n        <ng-container *ngIf=\"vehicle_imgs.length >0\">\r\n          <ion-slide *ngFor=\"let p of vehicle_imgs; let i = index\">\r\n\r\n            <img src=\"{{base_url}}{{p}}\" class=\"s_img_slide\">\r\n\r\n          </ion-slide>\r\n\r\n        </ng-container>\r\n      </ion-slides>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n\r\n  <ion-row style=\"position: absolute;\r\n  text-align: center;\r\n  bottom: 80px;\r\n  width: 100%;\">\r\n    <ion-col style=\"text-align: center;\">\r\n      <ion-text style=\"color: white; \">{{indexOfSLide}} of {{vehicle_imgs.length}}</ion-text>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n\r\n\r\n</div> \r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/summary/summary-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/summary/summary-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SummaryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPageRoutingModule", function() { return SummaryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _summary_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./summary.page */ "./src/app/summary/summary.page.ts");




const routes = [
    {
        path: '',
        component: _summary_page__WEBPACK_IMPORTED_MODULE_3__["SummaryPage"]
    }
];
let SummaryPageRoutingModule = class SummaryPageRoutingModule {
};
SummaryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SummaryPageRoutingModule);



/***/ }),

/***/ "./src/app/summary/summary.module.ts":
/*!*******************************************!*\
  !*** ./src/app/summary/summary.module.ts ***!
  \*******************************************/
/*! exports provided: SummaryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPageModule", function() { return SummaryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _summary_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./summary-routing.module */ "./src/app/summary/summary-routing.module.ts");
/* harmony import */ var _summary_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./summary.page */ "./src/app/summary/summary.page.ts");
/* harmony import */ var _custome_date_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../custome-date.pipe */ "./src/app/custome-date.pipe.ts");








let SummaryPageModule = class SummaryPageModule {
};
SummaryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _summary_routing_module__WEBPACK_IMPORTED_MODULE_5__["SummaryPageRoutingModule"]
        ],
        declarations: [_summary_page__WEBPACK_IMPORTED_MODULE_6__["SummaryPage"], _custome_date_pipe__WEBPACK_IMPORTED_MODULE_7__["CustomeDatePipe"]]
    })
], SummaryPageModule);



/***/ }),

/***/ "./src/app/summary/summary.page.scss":
/*!*******************************************!*\
  !*** ./src/app/summary/summary.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3em 0.1em 8px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n}\n\nion-content {\n  --background: #f9f9f9;\n}\n\n.slider_main {\n  padding: 1em 0.6em 0em 0.6em;\n}\n\n.primary_color {\n  color: #c4932f;\n}\n\n.trip_cost {\n  padding: 0em 0.4em 5px 0.4em;\n}\n\n.trip_cost h4 {\n  margin: 0px;\n}\n\n.slide {\n  width: 100%;\n  height: 170px;\n}\n\n.pentagon {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n}\n\n.heart {\n  position: absolute;\n  right: 1em;\n  bottom: 1em;\n}\n\n.badge {\n  position: absolute;\n  top: 6px;\n  left: 0px;\n  right: 0px;\n}\n\n.badge_dollar {\n  color: #c4932f;\n  font-size: 9px;\n}\n\n.badge_price {\n  font-size: 20px;\n  color: #c4932f;\n}\n\n.badge_per {\n  color: #fff;\n  font-size: 6px;\n  display: block;\n  margin-left: 1px;\n  margin-top: -2px;\n}\n\n.descr {\n  padding: 0em 0.6em;\n}\n\n.bg_white {\n  background: #fff;\n}\n\n.descr h3 {\n  margin-top: 0px;\n  margin-bottom: 5px;\n}\n\n.descr h4 {\n  margin: 10px 0px;\n}\n\n.descr p {\n  font-size: 12px;\n}\n\n.descr small {\n  color: #c4932f;\n}\n\n.rating {\n  padding: 0em 0.3em;\n}\n\n.view_all {\n  font-size: 10px;\n  text-align: right;\n  padding-right: 1em;\n  color: #c4932f;\n  padding-top: 1em;\n}\n\n.stars img {\n  margin-left: 4px;\n}\n\n.left_star {\n  margin-left: 1em;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n}\n\n.btn_footer {\n  padding: 0.5em 1em 1.2em 1em;\n}\n\n.info {\n  background: #6e6d6d;\n  padding: 0.4em 0em;\n}\n\n.info p {\n  margin: 0px;\n  color: #fff;\n  font-size: 10px;\n}\n\nimg {\n  border-radius: 10px;\n}\n\n.for_ios_pad {\n  padding: 8px 0px;\n}\n\n.s_img_slide {\n  width: 100%;\n  border-radius: 0px;\n}\n\n.slide {\n  width: 100%;\n}\n\n.slider_main_slide {\n  padding: 0em 0em;\n}\n\n.s_img_slide {\n  width: 100%;\n  border-radius: 0px;\n}\n\n.slide_slide {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VtbWFyeS9zdW1tYXJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksd0JBQUE7SUFDQSxxQkFBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQUo7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUNBO0VBQ0ksNEJBQUE7QUFFSjs7QUFBQTtFQUNJLGNBQUE7QUFHSjs7QUFEQTtFQUNJLDRCQUFBO0FBSUo7O0FBRkE7RUFDSSxXQUFBO0FBS0o7O0FBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQUdKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUdKOztBQURBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUlKOztBQUZBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFLSjs7QUFIQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0FBTUo7O0FBSkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQU9KOztBQUxBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQVFKOztBQU5BO0VBQ0ksa0JBQUE7QUFTSjs7QUFQQTtFQUNJLGdCQUFBO0FBVUo7O0FBUkE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUFXSjs7QUFUQTtFQUNJLGdCQUFBO0FBWUo7O0FBVkE7RUFDSSxlQUFBO0FBYUo7O0FBWEE7RUFDSSxjQUFBO0FBY0o7O0FBWkE7RUFDSSxrQkFBQTtBQWVKOztBQWJBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFnQko7O0FBZEE7RUFDSSxnQkFBQTtBQWlCSjs7QUFmQTtFQUNJLGdCQUFBO0FBa0JKOztBQWhCQTtFQUNJLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQW1CSjs7QUFqQkE7RUFDSSw0QkFBQTtBQW9CSjs7QUFsQkE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FBcUJKOztBQW5CQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQXNCSjs7QUFwQkE7RUFDSSxtQkFBQTtBQXVCSjs7QUFyQkE7RUFDSSxnQkFBQTtBQXdCSjs7QUF0QkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUF5Qko7O0FBdkJBO0VBQ0ksV0FBQTtBQTBCSjs7QUF2QkE7RUFDSSxnQkFBQTtBQTBCSjs7QUF4QkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUEyQko7O0FBekJBO0VBQ0ksV0FBQTtBQTRCSiIsImZpbGUiOiJzcmMvYXBwL3N1bW1hcnkvc3VtbWFyeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgcGFkZGluZzogMC44ZW0gMC4xZW0gMCAwO1xuICAgIC0tYmFja2dyb3VuZDogI2M0OTMyZjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4taGVpZ2h0IDogODAwcHgpIHtcbiAgICBpb24tdG9vbGJhciB7XG4gICAgICAgIHBhZGRpbmc6IDNlbSAwLjFlbSA4cHggMDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjYzQ5MzJmO1xuICAgIH1cbn1cblxuaW9uLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAyNHB4O1xufVxuaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogI2Y5ZjlmOTtcbn1cbi5zbGlkZXJfbWFpbiB7XG4gICAgcGFkZGluZzogMWVtIDAuNmVtIDBlbSAwLjZlbTtcbn1cbi5wcmltYXJ5X2NvbG9yIHtcbiAgICBjb2xvcjogI2M0OTMyZjtcbn1cbi50cmlwX2Nvc3Qge1xuICAgIHBhZGRpbmc6IDBlbSAwLjRlbSA1cHggMC40ZW07XG59XG4udHJpcF9jb3N0IGg0IHtcbiAgICBtYXJnaW46IDBweDtcbn1cbi5zX2ltZyB7XG4gICAgLy8gd2lkdGg6IDEwMCU7XG59XG4uc2xpZGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTcwcHg7XG5cbn1cbi5wZW50YWdvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTJweDtcbiAgICBsZWZ0OiAxMnB4O1xufVxuLmhlYXJ0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDFlbTtcbiAgICBib3R0b206IDFlbTtcbn1cbi5iYWRnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNnB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMHB4O1xufVxuLmJhZGdlX2RvbGxhciB7XG4gICAgY29sb3I6ICNjNDkzMmY7XG4gICAgZm9udC1zaXplOiA5cHg7XG59XG4uYmFkZ2VfcHJpY2Uge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogI2M0OTMyZjtcbn1cbi5iYWRnZV9wZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogNnB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiAxcHg7XG4gICAgbWFyZ2luLXRvcDogLTJweDtcbn1cbi5kZXNjciB7XG4gICAgcGFkZGluZzogMGVtIDAuNmVtO1xufVxuLmJnX3doaXRlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLmRlc2NyIGgzIHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmRlc2NyIGg0IHtcbiAgICBtYXJnaW46IDEwcHggMHB4O1xufVxuLmRlc2NyIHAge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5kZXNjciBzbWFsbCB7XG4gICAgY29sb3I6ICNjNDkzMmY7XG59XG4ucmF0aW5nIHtcbiAgICBwYWRkaW5nOiAwZW0gMC4zZW07XG59XG4udmlld19hbGwge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XG4gICAgY29sb3I6ICNjNDkzMmY7XG4gICAgcGFkZGluZy10b3A6IDFlbTtcbn1cbi5zdGFycyBpbWcge1xuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG4ubGVmdF9zdGFyIHtcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xufVxuaW9uLWJ1dHRvbiB7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMS41ZW07XG4gICAgLS1wYWRkaW5nLXRvcDogMS41ZW07XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuLmJ0bl9mb290ZXIge1xuICAgIHBhZGRpbmc6IDAuNWVtIDFlbSAxLjJlbSAxZW07XG59XG4uaW5mbyB7XG4gICAgYmFja2dyb3VuZDogIzZlNmQ2ZDtcbiAgICBwYWRkaW5nOiAwLjRlbSAwZW07XG59XG4uaW5mbyBwIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEwcHg7XG59XG5pbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uZm9yX2lvc19wYWR7XG4gICAgcGFkZGluZzogOHB4IDBweDtcbn1cbi5zX2ltZ19zbGlkZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuLnNsaWRlIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnNsaWRlcl9tYWluX3NsaWRlIHtcbiAgICBwYWRkaW5nOiAwZW0gMGVtO1xufVxuLnNfaW1nX3NsaWRlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG4uc2xpZGVfc2xpZGUge1xuICAgIHdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/summary/summary.page.ts":
/*!*****************************************!*\
  !*** ./src/app/summary/summary.page.ts ***!
  \*****************************************/
/*! exports provided: SummaryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPage", function() { return SummaryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "./node_modules/@ionic-native/photo-viewer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








let SummaryPage = class SummaryPage {
    constructor(photoViewer, storage, router, activatedRoute, iab, location, restService) {
        this.photoViewer = photoViewer;
        this.storage = storage;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.iab = iab;
        this.location = location;
        this.restService = restService;
        this.showSlide = 'no';
        this.customerDetails = { name: '', email: '', phone_number: '' };
        this.customizations = { title: 'TransUS', description: 'Pay now for confrim your booking', logo: 'https://flutterwave.com/images/logo-colored.svg' };
        this.meta = { counsumer_id: '', consumer_mac: '' };
        this.indexOfSLide = 1;
        this.paymentDone = false;
        this.activatedRoute.queryParams.subscribe((res) => {
            this.response = JSON.parse(res.value);
            console.log("Bookinfsss detailssss", this.response);
            this.booking_details = this.response.booking_details;
            this.vehicle_imgs = this.response.vehicle_imgs;
            this.trip_cost = this.booking_details.trip_cost;
            this.booking_id = this.booking_details.bookings_id;
            this.publicKey = this.booking_details.flutterWave_public_key;
            this.start_time = this.converTime(this.booking_details.start_time);
            this.end_time = this.converTime(this.booking_details.end_time);
        });
    }
    ngOnInit() {
        //   this.uniqueID.get()
        // .then((uuid: any) =>{
        //  console.log(uuid, "uniquedevideID");
        //  this.meta.consumer_mac = uuid
        // })
        // .catch((error: any) => console.log(error));
        this.storage.get('user_details').then((user_details) => {
            console.log(user_details);
            this.userID = user_details.users_id;
            this.Email = user_details.email;
            this.meta.counsumer_id = this.userID;
            this.customerDetails.name = user_details.user_name;
            this.customerDetails.email = user_details.email;
            this.storage.get('base_urls').then((base_url) => {
                this.base_url = base_url;
            });
            this.storage.get('currency_symbol').then((currency_symbol) => {
                this.currency_symbol = currency_symbol;
            });
        });
    }
    converTime(time) {
        let hour = (time.split(':'))[0];
        let min = (time.split(':'))[1];
        let part = hour > 12 ? 'pm' : 'am';
        min = (min + '').length == 1 ? '0' + min : min;
        hour = hour > 12 ? hour - 12 : hour;
        hour = (hour + '').length == 1 ? '0' + hour : hour;
        return (hour + ':' + min + ' ' + part);
    }
    // previewImage(p){
    //   this.photoViewer.show(this.base_url+''+p);
    // }
    previewImage(p) {
        this.showSlide = 'yes';
        this.indexOfSLide = 1;
        //this.photoViewer.show(this.base_urls + '' + p);
    }
    closeModel() {
        this.showSlide = 'no';
    }
    slideChanged(e) {
        this.slides.getActiveIndex().then((index) => {
            console.log('index -----------', index);
            this.indexOfSLide = index + 1;
        });
    }
    back() {
        // this.router.navigate(['/']);
        this.location.back();
    }
    paymentssBrowsersNotinUsed() {
        var JsData = JSON.stringify({
            currencyID: "1",
            requestType: "payment_process",
            email: this.Email,
            amount: this.trip_cost,
            booking_id: this.booking_id
        });
        this.restService.payementAPi(JsData).subscribe(res => {
            console.log(res, "get responce from booking getway");
            this.hostedRes = JSON.parse(res['_body']);
            this.ForLink = this.hostedRes.flutter_reponse;
            console.log(this.ForLink);
            console.log(this.ForLink.data.link);
            this.fLink = this.ForLink.data.link;
            console.log(this.fLink);
            const browser = this.iab.create(this.fLink, '_blank', { location: 'no', footer: 'yes', zoom: 'no', usewkwebview: 'yes', toolbar: 'yes', closebuttoncaption: 'CLOSE WINDOW' });
        }, err => {
            console.log(err);
        });
    }
    bookingpage(getValue) {
        this.router.navigate(['/other-booking-list'], {
            queryParams: {
                value: getValue,
            },
        });
    }
    flutterWaves() {
        this.router.navigate(['/flutter-waves'], {
            queryParams: {
                value: this.booking_details.trip_cost,
                symbol: this.currency_symbol,
                userid: this.userID,
                bookingId: this.booking_details.bookings_id,
                email: this.Email
            },
        });
        // var sucFul = JSON.stringify({
        //   requestType:"payment_process",
        //   amount: this.getRespo.amount,
        //   customer_userid:this.userID,
        //   flw_ref:this.getRespo.flw_ref,
        //   transaction_id: this.getRespo.transaction_id,
        //   bookings_id: this.booking_id,
        //   ownerID: this.booking_details.veh_users_id,
        //   currency:"USD",
        //   currencyID:"1"
        // })
        // this.restService.paidbooking(sucFul).subscribe(res=>{
        //   console.log(res,"paid save in webservice")
        //   this.paymentDone = true;
        // },err => {
        //   console.log(err);
        // })
    }
};
SummaryPage.ctorParameters = () => [
    { type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_4__["PhotoViewer"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"] }
];
SummaryPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['slides', { static: false },] }]
};
SummaryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-summary',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./summary.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/summary/summary.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./summary.page.scss */ "./src/app/summary/summary.page.scss")).default]
    })
], SummaryPage);



/***/ })

}]);
//# sourceMappingURL=summary-summary-module-es2015.js.map