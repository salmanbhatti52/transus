(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["booking-detail-view-booking-detail-view-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/booking-detail-view/booking-detail-view.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/booking-detail-view/booking-detail-view.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header *ngIf=\"showSlide == 'no'\" [class.ios-headers]=\"plateformCheck == 'ios'\">\n  <ion-toolbar >\n    <ion-buttons [class.back_button]=\"plateformCheck == 'ios'\" slot=\"start\">\n      <img src=\"assets/img/Arrow.svg\" (click)=\"back()\">\n    </ion-buttons>\n    <ion-title [class.globe_title]=\"plateformCheck == 'ios'\">{{booking_details.model_name}}</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<div *ngIf=\"showSlide == 'no'\">\n  <ion-row>\n    <ion-col class=\"slider_main\">\n      <ion-slides pager=\"true\" >\n\n        <ion-slide *ngFor=\"let p of vehicle_imgs; let i = index\">\n          <div class=\"slide\" >\n            <img src=\"{{base_url}}{{p}}\" style=\"width: 100%;\" class=\"s_img\" (click)=\"previewImage(p)\"/>\n          </div>\n        </ion-slide>\n      </ion-slides> \n    </ion-col>\n  </ion-row>\n  <ion-row class=\"trip_cost\">\n    <ion-col size=\"6\" >\n      <h4>TRIP COST</h4>\n    </ion-col>\n    <ion-col size=\"6\" class=\"ion-text-right\">\n      <h4 class=\"primary_color\">{{currency_symbol}}{{booking_details.trip_cost}}</h4>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"descr bg_white\" >\n    <ion-col size=\"12\">\n      <h4>{{userString}}</h4>\n    </ion-col>\n    <ion-col size=\"6\">\n      <small>Name</small>\n      <p>{{booking_details.booked_by_user_details.user_name}} </p>\n    </ion-col>\n    <ion-col size=\"6\">\n      <small>Phone</small>\n      <p>{{booking_details.booked_by_user_details.mobile_no}}</p>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"descr \" >\n    <ion-col size=\"12\">\n      <h4>Trip Dates</h4>\n    </ion-col>\n    <ion-col size=\"6\">\n      <small>Start Date</small>\n      <p>{{booking_details.start_date | customeDate}}</p>\n    </ion-col>\n    <ion-col size=\"6\">\n      <small>End Date</small>\n      <p>{{booking_details.end_date | customeDate}}</p>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"descr bg_white\">\n    <ion-col size=\"12\">\n      <h4>Trip Time</h4>\n    </ion-col>\n    <ion-col size=\"6\">\n      <small>Start Time</small>\n      <p>{{start_time}}</p>\n    </ion-col>\n    <ion-col size=\"6\">\n      <small>End Time</small>\n      <p>{{end_time}}</p>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"descr \">\n    <ion-col size=\"12\">\n      <h4>Location</h4>\n    </ion-col>\n    <ion-col size=\"6\">\n      <small>Pickup</small>\n      <p>{{booking_details.pickup_location}}</p>\n    </ion-col>\n    <ion-col size=\"6\">\n      <small>Dropoff</small>\n      <p>{{booking_details.dropoff_location}}</p>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"descr bg_white\">\n    <ion-col size=\"12\">\n      <h4>Driving Liscense ID</h4>\n    </ion-col>\n    <ion-col size=\"12\">\n      <img src=\"{{base_url}}{{booking_details.license_img_url}}\">\n    </ion-col>\n    \n  </ion-row>\n\n  <ion-row *ngIf=\"booking_details.status == 'Accepted' && booking_details.payment_status == 'Paid' \" class=\"btn_footer\">\n    <ion-col size=\"12\">\n      <ion-button color=\"primary\" (click)=\"chatRequest(pageType,tabType,booking_details)\" expand=\"block\" shape=\"round\">Chat</ion-button>\n    </ion-col>\n    <!-- <ion-col size=\"6\">\n      <ion-button color=\"secondary\" (click)=\"bookNow()\" expand=\"block\" shape=\"round\">Book Now</ion-button>\n    </ion-col> -->\n  </ion-row>\n\n  <ion-row  *ngIf=\"booking_details.status == 'Cancelled' || booking_details.status == 'Completed' || booking_details.status == 'Rejected' || booking_details.status == 'Pending' || booking_details.status == 'Rejected' || booking_details.status == 'Waiting' || booking_details.status == 'Pending' || booking_details.payment_status == 'Unpaid' \" class=\"btn_footer\">\n    <ion-col size=\"12\">\n      <ion-button color=\"primary\" (click) = \"chatAlert(booking_details.status,booking_details.end_date,booking_details.payment_status)\" class=\"\"  expand=\"block\" shape=\"round\">Chat</ion-button>\n    </ion-col>\n  </ion-row>\n</div>\n\n<div *ngIf=\"showSlide == 'yes'\" [class.for_ios_pad]=\"plateformCheck == 'ios'\" style=\"background: #000000f5; height: 100%;\">\n\n  <ion-row>\n    <ion-col style=\"padding-left: 20px;\n  padding-top: 20px;\">\n      <img src=\"assets/img/close.png\" (click)=\"closeModel()\" style=\"height: 20px;\n      width: 20px;\n      padding: 3px;\n      border-radius: 10px;\">\n    </ion-col>\n  </ion-row>\n\n\n\n  <ion-row class=\"center\">\n    <ion-col class=\"slider_main_slide\">\n      <ion-slides (ionSlideDidChange)=\"slideChanged($event)\" #slides>\n\n        <ng-container *ngIf=\"vehicle_imgs.length >0\">\n          <ion-slide *ngFor=\"let p of vehicle_imgs; let i = index\">\n\n            <img src=\"{{base_url}}{{p}}\"  class=\"s_img_slide\">\n\n          </ion-slide>\n\n        </ng-container>\n      </ion-slides>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row style=\"position: absolute;\n  text-align: center;\n  bottom: 80px;\n  width: 100%;\">\n    <ion-col style=\"text-align: center;\">\n      <ion-text style=\"color: white; \">{{indexOfSLide}} of {{vehicle_imgs.length}}</ion-text>\n    </ion-col>\n  </ion-row>\n\n\n\n</div>\n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/booking-detail-view/booking-detail-view-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/booking-detail-view/booking-detail-view-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: BookingDetailViewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingDetailViewPageRoutingModule", function() { return BookingDetailViewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _booking_detail_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./booking-detail-view.page */ "./src/app/booking-detail-view/booking-detail-view.page.ts");




const routes = [
    {
        path: '',
        component: _booking_detail_view_page__WEBPACK_IMPORTED_MODULE_3__["BookingDetailViewPage"]
    }
];
let BookingDetailViewPageRoutingModule = class BookingDetailViewPageRoutingModule {
};
BookingDetailViewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BookingDetailViewPageRoutingModule);



/***/ }),

/***/ "./src/app/booking-detail-view/booking-detail-view.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/booking-detail-view/booking-detail-view.module.ts ***!
  \*******************************************************************/
/*! exports provided: BookingDetailViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingDetailViewPageModule", function() { return BookingDetailViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _booking_detail_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./booking-detail-view-routing.module */ "./src/app/booking-detail-view/booking-detail-view-routing.module.ts");
/* harmony import */ var _booking_detail_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./booking-detail-view.page */ "./src/app/booking-detail-view/booking-detail-view.page.ts");
/* harmony import */ var _custome_date_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../custome-date.pipe */ "./src/app/custome-date.pipe.ts");








let BookingDetailViewPageModule = class BookingDetailViewPageModule {
};
BookingDetailViewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _booking_detail_view_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookingDetailViewPageRoutingModule"]
        ],
        declarations: [_booking_detail_view_page__WEBPACK_IMPORTED_MODULE_6__["BookingDetailViewPage"], _custome_date_pipe__WEBPACK_IMPORTED_MODULE_7__["CustomeDatePipe"]]
    })
], BookingDetailViewPageModule);



/***/ }),

/***/ "./src/app/booking-detail-view/booking-detail-view.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/booking-detail-view/booking-detail-view.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3em 0.1em 8px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n}\n\nion-content {\n  --background: #f9f9f9;\n}\n\n.slider_main {\n  padding: 1em 0.6em 0em 0.6em;\n}\n\n.primary_color {\n  color: #c4932f;\n}\n\n.primary_color_disables {\n  background-color: #7fc42f;\n}\n\n.trip_cost {\n  padding: 0em 0.4em 5px 0.4em;\n}\n\n.trip_cost h4 {\n  margin: 0px;\n}\n\n.slide {\n  width: 100%;\n  height: 170px;\n}\n\n.pentagon {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n}\n\n.heart {\n  position: absolute;\n  right: 1em;\n  bottom: 1em;\n}\n\n.badge {\n  position: absolute;\n  top: 6px;\n  left: 0px;\n  right: 0px;\n}\n\n.badge_dollar {\n  color: #c4932f;\n  font-size: 9px;\n}\n\n.badge_price {\n  font-size: 20px;\n  color: #c4932f;\n}\n\n.badge_per {\n  color: #fff;\n  font-size: 6px;\n  display: block;\n  margin-left: 1px;\n  margin-top: -2px;\n}\n\n.descr {\n  padding: 0em 0.6em;\n}\n\n.bg_white {\n  background: #fff;\n}\n\n.descr h3 {\n  margin-top: 0px;\n  margin-bottom: 5px;\n}\n\n.descr h4 {\n  margin: 10px 0px;\n}\n\n.descr p {\n  font-size: 12px;\n}\n\n.descr small {\n  color: #c4932f;\n}\n\n.rating {\n  padding: 0em 0.3em;\n}\n\n.view_all {\n  font-size: 10px;\n  text-align: right;\n  padding-right: 1em;\n  color: #c4932f;\n  padding-top: 1em;\n}\n\n.stars img {\n  margin-left: 4px;\n}\n\n.left_star {\n  margin-left: 1em;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n}\n\n.btn_footer {\n  padding: 0.5em 1em 1.2em 1em;\n}\n\n.info {\n  background: #6e6d6d;\n  padding: 0.4em 0em;\n}\n\n.info p {\n  margin: 0px;\n  color: #fff;\n  font-size: 10px;\n}\n\nimg {\n  border-radius: 10px;\n}\n\n.for_ios_pad {\n  padding: 8px 0px;\n}\n\n.s_img_slide {\n  width: 100%;\n  border-radius: 0px;\n}\n\n.slide {\n  width: 100%;\n}\n\n.slider_main_slide {\n  padding: 0em 0em;\n}\n\n.s_img_slide {\n  width: 100%;\n  border-radius: 0px;\n}\n\n.slide_slide {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va2luZy1kZXRhaWwtdmlldy9ib29raW5nLWRldGFpbC12aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksd0JBQUE7SUFDQSxxQkFBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQUo7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUNBO0VBQ0ksNEJBQUE7QUFFSjs7QUFBQTtFQUNJLGNBQUE7QUFHSjs7QUFEQTtFQUNJLHlCQUFBO0FBSUo7O0FBRkE7RUFDSSw0QkFBQTtBQUtKOztBQUhBO0VBQ0ksV0FBQTtBQU1KOztBQUhBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFNSjs7QUFIQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFNSjs7QUFKQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFPSjs7QUFMQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBUUo7O0FBTkE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBQVNKOztBQVBBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFVSjs7QUFSQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFXSjs7QUFUQTtFQUNJLGtCQUFBO0FBWUo7O0FBVkE7RUFDSSxnQkFBQTtBQWFKOztBQVhBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBY0o7O0FBWkE7RUFDSSxnQkFBQTtBQWVKOztBQWJBO0VBQ0ksZUFBQTtBQWdCSjs7QUFkQTtFQUNJLGNBQUE7QUFpQko7O0FBZkE7RUFDSSxrQkFBQTtBQWtCSjs7QUFoQkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQW1CSjs7QUFqQkE7RUFDSSxnQkFBQTtBQW9CSjs7QUFsQkE7RUFDSSxnQkFBQTtBQXFCSjs7QUFuQkE7RUFDSSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFzQko7O0FBcEJBO0VBQ0ksNEJBQUE7QUF1Qko7O0FBckJBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQXdCSjs7QUF0QkE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUF5Qko7O0FBdkJBO0VBQ0ksbUJBQUE7QUEwQko7O0FBeEJBO0VBQ0ksZ0JBQUE7QUEyQko7O0FBekJBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBNEJKOztBQTFCQTtFQUNJLFdBQUE7QUE2Qko7O0FBMUJBO0VBQ0ksZ0JBQUE7QUE2Qko7O0FBM0JBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBOEJKOztBQTVCQTtFQUNJLFdBQUE7QUErQkoiLCJmaWxlIjoic3JjL2FwcC9ib29raW5nLWRldGFpbC12aWV3L2Jvb2tpbmctZGV0YWlsLXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gICAgcGFkZGluZzogMC44ZW0gMC4xZW0gMCAwO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjYzQ5MzJmO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi1oZWlnaHQgOiA4MDBweCkge1xyXG4gICAgaW9uLXRvb2xiYXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDNlbSAwLjFlbSA4cHggMDtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICNjNDkzMmY7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmOWY5Zjk7XHJcbn1cclxuLnNsaWRlcl9tYWluIHtcclxuICAgIHBhZGRpbmc6IDFlbSAwLjZlbSAwZW0gMC42ZW07XHJcbn1cclxuLnByaW1hcnlfY29sb3Ige1xyXG4gICAgY29sb3I6ICNjNDkzMmY7XHJcbn1cclxuLnByaW1hcnlfY29sb3JfZGlzYWJsZXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdmYzQyZjtcclxufVxyXG4udHJpcF9jb3N0IHtcclxuICAgIHBhZGRpbmc6IDBlbSAwLjRlbSA1cHggMC40ZW07XHJcbn1cclxuLnRyaXBfY29zdCBoNCB7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLnNsaWRlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNzBweDtcclxuXHJcbn1cclxuLnBlbnRhZ29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTJweDtcclxuICAgIGxlZnQ6IDEycHg7XHJcbn1cclxuLmhlYXJ0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxZW07XHJcbiAgICBib3R0b206IDFlbTtcclxufVxyXG4uYmFkZ2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA2cHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICByaWdodDogMHB4O1xyXG59XHJcbi5iYWRnZV9kb2xsYXIge1xyXG4gICAgY29sb3I6ICNjNDkzMmY7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxufVxyXG4uYmFkZ2VfcHJpY2Uge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICNjNDkzMmY7XHJcbn1cclxuLmJhZGdlX3BlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogNnB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTJweDtcclxufVxyXG4uZGVzY3Ige1xyXG4gICAgcGFkZGluZzogMGVtIDAuNmVtO1xyXG59XHJcbi5iZ193aGl0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcbi5kZXNjciBoMyB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuLmRlc2NyIGg0IHtcclxuICAgIG1hcmdpbjogMTBweCAwcHg7XHJcbn1cclxuLmRlc2NyIHAge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5kZXNjciBzbWFsbCB7XHJcbiAgICBjb2xvcjogI2M0OTMyZjtcclxufVxyXG4ucmF0aW5nIHtcclxuICAgIHBhZGRpbmc6IDBlbSAwLjNlbTtcclxufVxyXG4udmlld19hbGwge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XHJcbiAgICBjb2xvcjogI2M0OTMyZjtcclxuICAgIHBhZGRpbmctdG9wOiAxZW07XHJcbn1cclxuLnN0YXJzIGltZyB7XHJcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG59XHJcbi5sZWZ0X3N0YXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxufVxyXG5pb24tYnV0dG9uIHtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEuNWVtO1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMS41ZW07XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmJ0bl9mb290ZXIge1xyXG4gICAgcGFkZGluZzogMC41ZW0gMWVtIDEuMmVtIDFlbTtcclxufVxyXG4uaW5mbyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNmU2ZDZkO1xyXG4gICAgcGFkZGluZzogMC40ZW0gMGVtO1xyXG59XHJcbi5pbmZvIHAge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5pbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uZm9yX2lvc19wYWR7XHJcbiAgICBwYWRkaW5nOiA4cHggMHB4O1xyXG59XHJcbi5zX2ltZ19zbGlkZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxufVxyXG4uc2xpZGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zbGlkZXJfbWFpbl9zbGlkZSB7XHJcbiAgICBwYWRkaW5nOiAwZW0gMGVtO1xyXG59XHJcbi5zX2ltZ19zbGlkZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxufVxyXG4uc2xpZGVfc2xpZGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/booking-detail-view/booking-detail-view.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/booking-detail-view/booking-detail-view.page.ts ***!
  \*****************************************************************/
/*! exports provided: BookingDetailViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingDetailViewPage", function() { return BookingDetailViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "./node_modules/@ionic-native/photo-viewer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");









let BookingDetailViewPage = class BookingDetailViewPage {
    constructor(photoViewer, storage, router, activatedRoute, iab, location, restService, plateform, alertController) {
        this.photoViewer = photoViewer;
        this.storage = storage;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.iab = iab;
        this.location = location;
        this.restService = restService;
        this.plateform = plateform;
        this.alertController = alertController;
        this.showSlide = 'no';
        this.customerDetails = { name: '', email: '', phone_number: '' };
        this.customizations = { title: 'TransUS', description: 'Pay now for confrim your booking', logo: 'https://flutterwave.com/images/logo-colored.svg' };
        this.meta = { counsumer_id: '', consumer_mac: '' };
        this.indexOfSLide = 1;
        this.activatedRoute.queryParams.subscribe((res) => {
            this.response = JSON.parse(res.value);
            console.log("All Booking record", this.response);
            this.booking_details = this.response.booking_details;
            this.vehicle_imgs = this.response.vehicle_imgs;
            this.trip_cost = this.booking_details.trip_cost;
            this.booking_id = this.booking_details.bookings_id;
            this.publicKey = this.booking_details.flutterWave_public_key;
            this.start_time = this.converTime(this.booking_details.start_time);
            this.end_time = this.converTime(this.booking_details.end_time);
            this.tabType = res.tabType;
            this.pageType = res.pageType;
            if (this.pageType == "listed_booking") {
                this.userString = "Booked by";
            }
            else {
                this.userString = "Vehicle onwer";
            }
            console.log("All Imagesssssssss", this.vehicle_imgs);
        });
    }
    ngOnInit() {
        if (this.plateform.is('ios')) {
            this.plateformCheck = "ios";
        }
        else {
            this.plateformCheck = "android";
        }
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
    back() {
        console.log("back");
        this.location.back();
    }
    //  previewImage(p){
    //   this.photoViewer.show(this.base_url+''+p);
    // }
    previewImage(p) {
        console.log('photo viewer');
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
    converTime(time) {
        let hour = (time.split(':'))[0];
        let min = (time.split(':'))[1];
        let part = hour > 12 ? 'pm' : 'am';
        min = (min + '').length == 1 ? '0' + min : min;
        hour = hour > 12 ? hour - 12 : hour;
        hour = (hour + '').length == 1 ? '0' + hour : hour;
        return (hour + ':' + min + ' ' + part);
    }
    chatRequest(pageType, tabType, bookingDetails) {
        var current_date = new Date();
        var end_dates = new Date(bookingDetails.end_date);
        if ((end_dates.getTime() < current_date.getTime() && bookingDetails.status === "Accepted")) {
            this.chatAlert(bookingDetails.status, bookingDetails.end_date, bookingDetails.payment_status);
        }
        else {
            if (this.userID) {
                if (pageType == "listed_booking") {
                    var stringy = JSON.stringify({
                        "requestType": 'chatRequest',
                        "otherUserId": this.booking_details.booked_by_users_id,
                        "usersID": this.userID
                    });
                }
                else {
                    var stringy = JSON.stringify({
                        "requestType": 'chatRequest',
                        "otherUserId": this.booking_details.veh_users_id,
                        "usersID": this.userID
                    });
                }
                console.log(stringy);
                this.restService.update_messages(stringy).subscribe(response => {
                    this.response = JSON.parse(response['_body']);
                    console.log(this.response);
                    if (this.response.status == 'error') {
                    }
                    else if (this.response.status == 'AlreadySent' || this.response.status == 'RequestSend') {
                        if (pageType == "listed_booking") {
                            var myData = JSON.stringify({
                                otherUserId: this.booking_details.booked_by_users_id,
                                userID: this.userID,
                                user_name: this.response.user_name,
                                profile_img: this.response.profile_img
                            });
                        }
                        else {
                            var myData = JSON.stringify({
                                otherUserId: this.booking_details.veh_users_id,
                                userID: this.userID,
                                user_name: this.response.user_name,
                                profile_img: this.response.profile_img
                            });
                        }
                        console.log(myData);
                        this.router.navigate(['/chat-detail'], {
                            queryParams: {
                                value: myData
                            },
                        });
                    }
                }, err => {
                });
            }
            else {
                this.router.navigate(['/login']);
            }
        }
        console.log("bookingDetailsbookingDetails", bookingDetails);
    }
    chatAlert(status, end_date, paymentStatus) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var msg = "";
            var current_date = new Date();
            var end_dates = new Date(end_date);
            console.log(end_dates.getTime(), "end_dateend_dateend_date");
            console.log(current_date.getTime(), "current_datecurrent_date");
            console.log("currentStatus", status);
            if ((status === "Completed" && paymentStatus == "Paid") || (end_dates.getTime() < current_date.getTime() && status === "Accepted" && paymentStatus == "Paid")) {
                msg = "Booking is completed";
            }
            else if (status === "Cancelled") {
                msg = "Booking is cancelled";
            }
            else if (status === "Rejected") {
                msg = "Booking is rejected";
            }
            else {
                msg = "Chat can't be started until booking is confirmed";
            }
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Chat is disabled',
                message: msg,
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
};
BookingDetailViewPage.ctorParameters = () => [
    { type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_4__["PhotoViewer"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] }
];
BookingDetailViewPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['slides', { static: false },] }]
};
BookingDetailViewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-booking-detail-view',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./booking-detail-view.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/booking-detail-view/booking-detail-view.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./booking-detail-view.page.scss */ "./src/app/booking-detail-view/booking-detail-view.page.scss")).default]
    })
], BookingDetailViewPage);



/***/ })

}]);
//# sourceMappingURL=booking-detail-view-booking-detail-view-module-es2015.js.map