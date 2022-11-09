(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["car-booking-car-booking-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/car-booking/car-booking.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/car-booking/car-booking.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [class.ios-headers]=\"plateformCheck == 'ios'\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" [class.back_button]=\"plateformCheck == 'ios'\">\n      <img src=\"assets/img/Arrow.svg\" (click)=\"back()\" />\n    </ion-buttons>\n    <ion-title [class.globe_title]=\"plateformCheck == 'ios'\"\n      >{{model_name}}</ion-title\n    >\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-row\n    *ngIf=\"ShowLoading\"\n    style=\"position: absolute; width: 100%; z-index: 9999\"\n  >\n    <ion-col style=\"text-align: center\">\n      <img style=\"width: 90px\" src=\"assets/img/Loader.gif\" />\n    </ion-col>\n  </ion-row>\n  <div class=\"list_1\">\n    <ion-row> </ion-row>\n    <ion-row>\n      <ion-col>\n        <h3 style=\"color: black\">Trip Dates</h3>\n        <!-- <p class=\"upload_images left_4\">Start Date</p> -->\n        <p class=\"upload_images left_4\">\n          Vehicle available from: {{db_start_date}} - to: {{db_end_date}}\n        </p>\n      </ion-col>\n    </ion-row> \n  </div>\n  <div class=\"calender_slider\">\n    <ion-calendar\n      (click)=\"newDate($event)\"\n      (click)=\"getStartHoures()\"\n      [(ngModel)]=\"dateRange\"\n      (onChange)=\"onChange($event)\"\n      type=\"string\"\n      [options]=\"optionsRange\"\n      [format]=\"'YYYY-MM-DD'\"\n    >\n    </ion-calendar>\n  </div>\n\n  <p *ngIf=\"dateStartError\" class=\"error ion-padding ion-text-center sz\">\n    End Date Cannot be smaller then Start Date\n  </p>\n  <p *ngIf=\"availableDate\" class=\"error ion-padding ion-text-center sz\">\n    {{errorMsgs}}\n  </p>\n\n  <div class=\"list_1\">\n    <ion-row>\n      <ion-col>\n        <p class=\"upload_images left_4\">Start Time</p>\n      </ion-col>\n    </ion-row>\n  </div>\n  <ion-row class=\"bg_white\">\n    <ion-col size=\"2\"></ion-col>\n    <ion-col size=\"2\" class=\"vertical_list\">\n      <ion-slides\n        (ionSlideDidChange)=\"getStartHoures()\"\n        class=\"vertical_slider s_hours\"\n        [options]=\"option\"\n      >\n        <ion-slide *ngFor=\"let i of hours\">\n          <ng-container *ngIf=\"i<=9\">\n            <p>0{{i}}</p>\n          </ng-container>\n          <ng-container *ngIf=\"i>9\">\n            <p>{{i}}</p>\n          </ng-container>\n        </ion-slide>\n      </ion-slides>\n    </ion-col>\n    <ion-col size=\"1\"></ion-col>\n    <ion-col size=\"2\" class=\"vertical_list\">\n      <ion-slides\n        (ionSlideDidChange)=\"getStartHoures()\"\n        class=\"vertical_slider s_mints\"\n        [options]=\"option\"\n      >\n        <ion-slide *ngFor=\"let i of mints\">\n          <ng-container *ngIf=\"i<=9\">\n            <p>0{{i}}</p>\n          </ng-container>\n          <ng-container *ngIf=\"i>9\">\n            <p>{{i}}</p>\n          </ng-container>\n        </ion-slide>\n      </ion-slides>\n    </ion-col>\n    <ion-col size=\"1\"></ion-col>\n    <ion-col size=\"2\" class=\"vertical_list s_v\">\n      <ion-slides\n        (ionSlideDidChange)=\"getStartHoures()\"\n        class=\"vertical_slider\"\n        [options]=\"option\"\n      >\n        <ion-slide>\n          <p>AM</p>\n        </ion-slide>\n        <ion-slide>\n          <p>PM</p>\n        </ion-slide>\n        <ion-slide>\n          <p>AM</p>\n        </ion-slide>\n        <ion-slide>\n          <p>PM</p>\n        </ion-slide>\n      </ion-slides>\n    </ion-col>\n  </ion-row>\n  <div class=\"list_1\">\n    <ion-row>\n      <ion-col>\n        <p class=\"upload_images left_4\">End Time</p>\n      </ion-col>\n    </ion-row>\n  </div>\n  <ion-row class=\"bg_white\">\n    <ion-col size=\"2\"></ion-col>\n    <ion-col size=\"2\" class=\"vertical_list\">\n      <ion-slides\n        (ionSlideDidChange)=\"getStartHoures()\"\n        class=\"vertical_slider e_hours\"\n        [options]=\"option\"\n      >\n        <ion-slide *ngFor=\"let i of hours\">\n          <ng-container *ngIf=\"i<=9\">\n            <p>0{{i}}</p>\n          </ng-container>\n          <ng-container *ngIf=\"i>9\">\n            <p>{{i}}</p>\n          </ng-container>\n        </ion-slide>\n      </ion-slides>\n    </ion-col>\n    <ion-col size=\"1\"></ion-col>\n    <ion-col size=\"2\" class=\"vertical_list\">\n      <ion-slides\n        (ionSlideDidChange)=\"getStartHoures()\"\n        class=\"vertical_slider e_mints\"\n        [options]=\"option\"\n      >\n        <ion-slide *ngFor=\"let i of mints\">\n          <ng-container *ngIf=\"i<=9\">\n            <p>0{{i}}</p>\n          </ng-container>\n          <ng-container *ngIf=\"i>9\">\n            <p>{{i}}</p>\n          </ng-container>\n        </ion-slide>\n      </ion-slides>\n    </ion-col>\n    <ion-col size=\"1\"></ion-col>\n    <ion-col size=\"2\" class=\"vertical_list\">\n      <ion-slides\n        (ionSlideDidChange)=\"getStartHoures()\"\n        class=\"vertical_slider e_v\"\n        [options]=\"option\"\n      >\n        <ion-slide>\n          <p>AM</p>\n        </ion-slide>\n        <ion-slide>\n          <p>PM</p>\n        </ion-slide>\n        <ion-slide>\n          <p>AM</p>\n        </ion-slide>\n        <ion-slide>\n          <p>PM</p>\n        </ion-slide>\n      </ion-slides>\n    </ion-col>\n  </ion-row>\n  <ion-row\n    *ngIf=\"printTimeErrorBoolen\"\n    class=\"error ion-padding ion-text-center sz bg_white\"\n  >\n    <ion-col style=\"text-align: center\"> {{printTimeError}} </ion-col>\n  </ion-row>\n  <div class=\"list_1\">\n    <ion-row *ngIf=\"currentCostBooking !='test'\">\n      <ion-col class=\"current_cost\">\n        <span class=\"upload_images left_4\">Booking Cost :</span>\n        <span>{{currency_symbol}} {{this.currentCostBooking}}</span>\n      </ion-col>\n    </ion-row>\n  </div>\n  <ion-col size=\"2\" class=\"vertical_list\"> </ion-col>\n  <div class=\"list_1\">\n    <ion-row>\n      <ion-col>\n        <h3>Driving License</h3>\n        <p class=\"upload_images left_4\">Upload your driving license ID</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-row>\n          <ion-col\n            size=\"12\"\n            class=\"list_2\"\n            (click)=\"uploadDocument()\"\n            *ngIf=\"document_one =='' || document_one ==undefined\"\n          >\n            <img src=\"assets/img/Menu_Plus.svg\" />\n          </ion-col>\n          <ion-col\n            size=\"12\"\n      \n            (click)=\"uploadDocument()\"  \n            *ngIf=\"document_one\"\n          > \n            <img style=\"width: 100%;height: 100%;\"  src=\"{{document_one}}\" class=\"imgh\" />\n          </ion-col>\n          <span *ngIf=\"document_oneError\" class=\"error ion-padding\">\n            Document is required.\n          </span> \n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </div> \n\n  <ion-row style=\"padding-bottom:  20px;\">\n    <ion-col size=\"2\"></ion-col>\n    <ion-col size=\"8\">\n      <ion-button\n        color=\"secondary\"\n        expand=\"block\"\n        shape=\"round\"\n        (click)=\"submitForm()\"\n        >Book Now</ion-button\n      >\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/car-booking/car-booking-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/car-booking/car-booking-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CarBookingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarBookingPageRoutingModule", function() { return CarBookingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _car_booking_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./car-booking.page */ "./src/app/car-booking/car-booking.page.ts");




const routes = [
    {
        path: '',
        component: _car_booking_page__WEBPACK_IMPORTED_MODULE_3__["CarBookingPage"]
    }
];
let CarBookingPageRoutingModule = class CarBookingPageRoutingModule {
};
CarBookingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CarBookingPageRoutingModule);



/***/ }),

/***/ "./src/app/car-booking/car-booking.module.ts":
/*!***************************************************!*\
  !*** ./src/app/car-booking/car-booking.module.ts ***!
  \***************************************************/
/*! exports provided: CarBookingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarBookingPageModule", function() { return CarBookingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _car_booking_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./car-booking-routing.module */ "./src/app/car-booking/car-booking-routing.module.ts");
/* harmony import */ var _car_booking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./car-booking.page */ "./src/app/car-booking/car-booking.page.ts");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ion2-calendar */ "./node_modules/ion2-calendar/__ivy_ngcc__/dist/index.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_7__);








let CarBookingPageModule = class CarBookingPageModule {
};
CarBookingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _car_booking_routing_module__WEBPACK_IMPORTED_MODULE_5__["CarBookingPageRoutingModule"],
            ion2_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"],
        ],
        declarations: [_car_booking_page__WEBPACK_IMPORTED_MODULE_6__["CarBookingPage"]],
        providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'zh-CN' }]
    })
], CarBookingPageModule);



/***/ }),

/***/ "./src/app/car-booking/car-booking.page.scss":
/*!***************************************************!*\
  !*** ./src/app/car-booking/car-booking.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3em 0.1em 8px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n  text-transform: capitalize;\n}\n\nion-content {\n  --background: #F7F8FA;\n}\n\n.list_1 {\n  padding: 0em 1em;\n}\n\n.list_1 h3 {\n  margin: 0px;\n  margin-top: 0.5em;\n}\n\n.left_4 {\n  margin-left: 0.7em !important;\n}\n\n.input_list {\n  border: 1px solid #d4dce1;\n  background: #F7F8FA;\n  border-radius: 28px;\n  font-size: 13px;\n  color: #d4dce1;\n  --padding-bottom: 1.5em;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n}\n\n.upload_images {\n  color: #C4932F;\n  font-size: 12px;\n  margin: 5px 0px;\n}\n\n.list_2 {\n  text-align: center;\n  background: #F7F8FA;\n  border: 1px dashed #D4DCE1;\n  border-radius: 10px;\n  padding: 5.5em 0em;\n}\n\n.list_2 p {\n  color: #d2d6d8;\n}\n\n.list_3 {\n  background: #F7F8FA;\n  border: 1px solid #D4DCE1;\n  border-radius: 10px;\n  color: #D4DCE1;\n  font-size: 13px;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n}\n\n.btn_footer {\n  margin: 0.7em 0em 1em 0em;\n}\n\nion-slide span {\n  border: 1px solid #000;\n  border-radius: 22px;\n  padding: 8px 14px;\n  margin-left: 1em;\n}\n\n.num {\n  padding: 9px 10px !important;\n}\n\n.calender_slider {\n  padding: 0.6em 0em;\n  background: #fff;\n}\n\n.calender_slider_text {\n  margin: 0px;\n  position: relative;\n  top: -2px;\n  font-size: 18px;\n}\n\nion-slide {\n  margin-left: 0.6em;\n}\n\nion-slide:first-child {\n  margin-left: 0em;\n}\n\n.btn_footer {\n  padding: 0.5em 1em 1.2em 1em;\n}\n\n.info {\n  background: #6E6D6D;\n  padding: 0.4em 0em;\n}\n\n.info p {\n  margin: 0px;\n  color: #fff;\n  font-size: 10px;\n}\n\n.tog_main {\n  background: #F9F9F9;\n  padding: 0em 0.3em;\n}\n\n.tog1 {\n  font-size: 13px;\n  color: #272727;\n}\n\n.tog1 h4 {\n  margin: 0px;\n}\n\n.tog1 p {\n  margin: 0px;\n  margin-left: 4%;\n  margin-top: 5%;\n  font-size: 14px;\n}\n\nion-toggle.toggle-checked::part(track) {\n  background: #c4932f !important;\n}\n\nion-item {\n  --background: transparent;\n  float: right;\n}\n\n.vertical_list {\n  text-align: center;\n  height: 100px;\n  overflow: hidden;\n  overflow-y: scroll;\n  padding: 0em 6px;\n}\n\n.vertical_slider ion-slide {\n  margin-left: 0em !important;\n  color: #B0B0B0;\n  border-top: 1px solid #B0B0B0;\n  border-bottom: 1px solid #B0B0B0;\n  font-size: 16px;\n  /* padding: 1em 0em; */\n}\n\n.vertical_slider ion-slide.swiper-slide-active {\n  color: #000 !important;\n  font-size: 18px !important;\n}\n\n.bg_white {\n  padding: 0.6em 0em;\n  background: #fff;\n}\n\n.activeState {\n  background: #c4932f;\n  border: 1px solid #c4932f !important;\n  color: #fff !important;\n}\n\n.error {\n  color: red;\n}\n\n.imgh {\n  width: 100%;\n  height: 12em;\n  border-radius: 10px;\n}\n\n.activeEndState {\n  background: #c4932f;\n  border: 1px solid #c4932f !important;\n  color: #fff !important;\n}\n\n.sz {\n  font-size: 12px;\n  margin: 0px;\n}\n\n.current_cost {\n  display: flex;\n  grid-gap: 23px;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyLWJvb2tpbmcvY2FyLWJvb2tpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSx3QkFBQTtJQUNBLHFCQUFBO0VBQ047QUFDRjs7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFISjs7QUFLQTtFQUNJLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FBRko7O0FBSUE7RUFDSSxxQkFBQTtBQURKOztBQUdBO0VBQ0ksZ0JBQUE7QUFBSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksNkJBQUE7QUFDSjs7QUFDQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBRUo7O0FBQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFHSjs7QUFEQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFJSjs7QUFEQTtFQUNJLGNBQUE7QUFJSjs7QUFGQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUtKOztBQUhBO0VBQ0kseUJBQUE7QUFNSjs7QUFKQTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBT0o7O0FBTEE7RUFDSSw0QkFBQTtBQVFKOztBQU5BO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQVNKOztBQVBBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFVSjs7QUFSQTtFQUNJLGtCQUFBO0FBV0o7O0FBUkE7RUFDSSxnQkFBQTtBQVdKOztBQVRBO0VBQ0ksNEJBQUE7QUFZSjs7QUFWQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUFhSjs7QUFYQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQWNKOztBQVhBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQWNKOztBQVpBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFlSjs7QUFiQTtFQUNJLFdBQUE7QUFnQko7O0FBZEE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBaUJKOztBQWZBO0VBQ0ksOEJBQUE7QUFrQko7O0FBaEJBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FBbUJKOztBQWpCQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQW9CSjs7QUFmQTtFQUNJLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFrQko7O0FBZEE7RUFDSSxzQkFBQTtFQUNBLDBCQUFBO0FBaUJKOztBQWZBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQWtCSjs7QUFoQkE7RUFDSSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7QUFtQko7O0FBakJBO0VBQ0ksVUFBQTtBQW9CSjs7QUFsQkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBcUJKOztBQW5CQTtFQUNJLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtBQXNCSjs7QUFwQkE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQXVCSjs7QUFyQkE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBd0JKIiwiZmlsZSI6InNyYy9hcHAvY2FyLWJvb2tpbmcvY2FyLWJvb2tpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIHBhZGRpbmc6IDAuOGVtIDAuMWVtIDAgMDtcbiAgICAtLWJhY2tncm91bmQ6ICNjNDkzMmY7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLWhlaWdodCA6IDgwMHB4KSB7XG4gICAgaW9uLXRvb2xiYXIge1xuICAgICAgICBwYWRkaW5nOiAzZW0gMC4xZW0gOHB4IDA7XG4gICAgICAgIC0tYmFja2dyb3VuZDogI2M0OTMyZjtcbiAgICB9XG59XG5cblxuXG5cbmlvbi10aXRsZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAyNHB4O1xufVxuaW9uLWJ1dHRvbntcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxLjVlbTtcbiAgICAtLXBhZGRpbmctdG9wOiAxLjVlbTtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5pb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6ICNGN0Y4RkE7XG59XG4ubGlzdF8xe1xuICAgIHBhZGRpbmc6IDBlbSAxZW07XG59XG4ubGlzdF8xIGgze1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xufVxuXG4ubGVmdF80e1xuICAgIG1hcmdpbi1sZWZ0OjAuN2VtICFpbXBvcnRhbnQ7XG59XG4uaW5wdXRfbGlzdHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRkY2UxO1xuICAgIGJhY2tncm91bmQ6ICNGN0Y4RkE7XG4gICAgYm9yZGVyLXJhZGl1czogMjhweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICNkNGRjZTE7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMS41ZW07XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxLjVlbTtcbiAgICAtLXBhZGRpbmctdG9wOiAxLjVlbTtcbn1cbi51cGxvYWRfaW1hZ2Vze1xuICAgIGNvbG9yOiNDNDkzMkY7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbjogNXB4IDBweDtcbn1cbi5saXN0XzJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICNGN0Y4RkE7XG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICNENERDRTE7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiA1LjVlbSAwZW07XG4gICAvLyBwYWRkaW5nOiAyNSUgMGVtIDIzJSAwZW07XG59XG4ubGlzdF8yIHB7XG4gICAgY29sb3I6ICNkMmQ2ZDg7XG59XG4ubGlzdF8ze1xuICAgIGJhY2tncm91bmQ6ICNGN0Y4RkE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Q0RENFMTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGNvbG9yOiAjRDREQ0UxO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEuNWVtO1xuICAgIC0tcGFkZGluZy10b3A6IDEuNWVtO1xufVxuLmJ0bl9mb290ZXJ7XG4gICAgbWFyZ2luOiAwLjdlbSAwZW0gMWVtIDBlbTtcbn1cbmlvbi1zbGlkZSBzcGFue1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgICBwYWRkaW5nOiA4cHggMTRweDtcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xufVxuLm51bXtcbiAgICBwYWRkaW5nOiA5cHggMTBweCAhaW1wb3J0YW50O1xufVxuLmNhbGVuZGVyX3NsaWRlcntcbiAgICBwYWRkaW5nOiAwLjZlbSAwZW07XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5jYWxlbmRlcl9zbGlkZXJfdGV4dHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMnB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cbmlvbi1zbGlkZXtcbiAgICBtYXJnaW4tbGVmdDogMC42ZW07XG4gICAgXG59XG5pb24tc2xpZGU6Zmlyc3QtY2hpbGR7XG4gICAgbWFyZ2luLWxlZnQ6IDBlbTtcbn1cbi5idG5fZm9vdGVye1xuICAgIHBhZGRpbmc6IDAuNWVtIDFlbSAxLjJlbSAxZW07XG59XG4uaW5mb3tcbiAgICBiYWNrZ3JvdW5kOiAjNkU2RDZEO1xuICAgIHBhZGRpbmc6IDAuNGVtIDBlbTtcbn1cbi5pbmZvIHB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4udG9nX21haW57XG4gICAgYmFja2dyb3VuZDogI0Y5RjlGOTtcbiAgICBwYWRkaW5nOiAwZW0gMC4zZW07XG59XG4udG9nMXtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICMyNzI3Mjc7XG59XG4udG9nMSBoNHtcbiAgICBtYXJnaW46MHB4O1xufVxuLnRvZzEgcHtcbiAgICBtYXJnaW46MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0JTtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5pb24tdG9nZ2xlLnRvZ2dsZS1jaGVja2VkOjpwYXJ0KHRyYWNrKSAge1xuICAgIGJhY2tncm91bmQ6IHJnYigxOTYgMTQ3IDQ3KSAhaW1wb3J0YW50O1xufVxuaW9uLWl0ZW17XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG4udmVydGljYWxfbGlzdHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBwYWRkaW5nOjBlbSA2cHg7XG59XG4udmVydGljYWxfbGlzdCBwIHsgIFxuICAgIC8vbWFyZ2luOiAwcHg7XG59XG4udmVydGljYWxfc2xpZGVyIGlvbi1zbGlkZXtcbiAgICBtYXJnaW4tbGVmdDogMGVtICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6I0IwQjBCMDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0IwQjBCMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0IwQjBCMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgLyogcGFkZGluZzogMWVtIDBlbTsgKi9cbiAgICBcbn1cblxuLnZlcnRpY2FsX3NsaWRlciBpb24tc2xpZGUuc3dpcGVyLXNsaWRlLWFjdGl2ZXtcbiAgICBjb2xvcjojMDAwICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG59XG4uYmdfd2hpdGV7XG4gICAgcGFkZGluZzogMC42ZW0gMGVtO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uYWN0aXZlU3RhdGV7XG4gICAgYmFja2dyb3VuZDogI2M0OTMyZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzQ5MzJmICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbi5lcnJvcntcbiAgICBjb2xvcjpyZWQ7XG59XG4uaW1naHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5hY3RpdmVFbmRTdGF0ZXtcbiAgICBiYWNrZ3JvdW5kOiAjYzQ5MzJmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjNDkzMmYgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50OyBcbn1cbi5zentcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luOiAwcHg7XG59XG4uY3VycmVudF9jb3N0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ3JpZC1nYXA6IDIzcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/car-booking/car-booking.page.ts":
/*!*************************************************!*\
  !*** ./src/app/car-booking/car-booking.page.ts ***!
  \*************************************************/
/*! exports provided: CarBookingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarBookingPage", function() { return CarBookingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _cameraimage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cameraimage.service */ "./src/app/cameraimage.service.ts");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _imgsr_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../imgsr.service */ "./src/app/imgsr.service.ts");












let CarBookingPage = class CarBookingPage {
    constructor(activatedRoute, loadingController, storage, toastController, restService, alertCtrl, router, imageService, imagePicker, plateform, location, transfer, imgsr) {
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.storage = storage;
        this.toastController = toastController;
        this.restService = restService;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.imageService = imageService;
        this.imagePicker = imagePicker;
        this.plateform = plateform;
        this.location = location;
        this.transfer = transfer;
        this.imgsr = imgsr;
        this.loaded = false;
        this.option1 = {
            slidesPerView: 8,
            loop: true,
        };
        this.option = {
            loop: true,
            direction: 'vertical',
            slidesPerView: 3,
            centeredSlides: true,
            centeredSlidesBounds: true
        };
        this.pastdateCheck = true;
        this.hours = [];
        this.mints = [];
        this.start_date_month = '';
        this.end_date_month = '';
        this.start_month_index = 1;
        this.end_month_index = 1;
        this.days = [];
        this.monthCounter = 1;
        this.document_one = '';
        this.start_date = '';
        this.end_date = '';
        this.document_oneError = false;
        this.active_start_date = 1;
        this.dateError = false;
        this.endmonthCounter = 1;
        this.startmonthCounter = 1;
        this.currentCost = "test";
        this.currentCostBooking = "test";
        this.errorMsgs = "Car is already booked in these dates";
        this.ShowLoading = false;
        this.printTimeErrorBoolen = false;
    }
    ngOnInit() {
        this.document_one = this.imgsr.imagebase64data;
        if (this.plateform.is('ios')) {
            this.plateformCheck = "ios";
        }
        else {
            this.plateformCheck = "android";
        }
        this.storage.get('currency_symbol').then((currency_symbol) => {
            this.currency_symbol = currency_symbol;
        });
        this.storage.get('user_details').then((user_details) => {
            this.userID = user_details.users_id;
            this.Email = user_details.email;
            this.currencyID = user_details.currencies_id;
        });
        this.hours = Array.from({ length: 12 }, (v, k) => k + 1);
        this.mints = Array.from({ length: 60 }, (v, k) => k + 0);
        this.days = Array.from({ length: 30 }, (v, k) => k + 1);
        this.currentYear = new Date().getFullYear();
        this.currentYearTwo = new Date().getFullYear();
        this.getStartIndex(2);
        this.getEndIndex(2);
    }
    ionViewWillEnter() {
        var date = new Date();
        console.log("current date", date);
        var month = date.getMonth() + 1;
        var fMonth = this.monthList(month);
        this.end_date_month = fMonth;
        this.start_date_month = fMonth;
        this.startmonthCounter = month;
        this.endmonthCounter = month;
        this.start_month_index = month;
        this.end_month_index = month;
        this.activatedRoute.queryParams.subscribe((res) => {
            this.response = JSON.parse(res.value);
            console.log("data from url", this.response);
            this.vehicle_id = this.response.vehicle_id;
            this.db_start_date = this.monthListFormte(this.response.start_date);
            this.db_end_date = this.monthListFormte(this.response.end_date);
            this.chargePerDay = this.response.charge_per_day;
            this.max_trip_duration = this.response.max_trip_duration;
            this.min_trip_duration = this.response.min_trip_duration;
            this.advance_notice = this.response.advance_notice;
            // -- Advance notice duration -- //
            if (this.advance_notice == '6 hours') {
                this.adNoticeHours = 6;
            }
            else if (this.advance_notice == '12 hours') {
                this.adNoticeHours = 12;
            }
            else if (this.advance_notice == '1 day') {
                this.adNoticeHours = 24;
            }
            else if (this.advance_notice == 'Instant') {
                this.adNoticeHours = 1000;
            }
            // -- Min days duration -- //
            if (this.min_trip_duration == '1 day') {
                this.min_days = 1;
            }
            else if (this.min_trip_duration == '2 day') {
                this.min_days = 2;
            }
            else if (this.min_trip_duration == '3 day') {
                this.min_days = 3;
            }
            // -- Max days duration -- //
            if (this.max_trip_duration == '5 day') {
                this.max_days = 5;
            }
            else if (this.max_trip_duration == '1 week') {
                this.max_days = 7;
            }
            else if (this.max_trip_duration == '2 weeks') {
                this.max_days = 14;
            }
            else if (this.max_trip_duration == '1 month') {
                this.max_days = 30;
            }
            else if (this.max_trip_duration == '2 month') {
                this.max_days = 60;
            }
            else if (this.max_trip_duration == '3 month') {
                this.max_days = 90;
            }
            else {
                this.max_days = 1000;
            }
            var stDate = this.response.start_date.split('-');
            var enDate = this.response.end_date.split('-');
            var startDatesss = new Date(this.response.start_date.replace(/-/g, "/"));
            var currentDate = new Date();
            var startVar;
            var startDatesss = new Date(this.response.start_date.replace(/-/g, "/"));
            var currentDate = new Date();
            if (startDatesss.getTime() > currentDate.getTime()) {
                startVar = new Date(stDate[0], stDate[1] - 1, stDate[2]);
            }
            else {
                startVar = new Date();
            }
            let daysConfig = [];
            this.response.booked_dates.map((el, index) => {
                let tempDateArray = el.split('-');
                daysConfig.push({
                    date: new Date(tempDateArray[0], tempDateArray[1] - 1, tempDateArray[2]),
                    disable: true,
                });
            });
            this.optionsRange = {
                pickMode: 'range',
                from: startVar,
                daysConfig: daysConfig,
                to: new Date(enDate[0], enDate[1] - 1, enDate[2]),
            };
            console.log("date range in constractor", this.optionsRange);
            this.model_name = this.response.model_name;
        });
    }
    ionViewDidEnter() {
        setTimeout(() => {
            this.loaded = true;
        }, 500);
    }
    back() {
        this.location.back();
    }
    getStartIndex(i) {
        this.sliderStartBoolean = i;
        this.validateStartDate();
    }
    getEndIndex(i) {
        this.sliderEndBoolean = i;
        this.validateEndDate();
    }
    validateForm() {
        this.sHours = document.querySelector(".s_hours .swiper-slide-active p").textContent;
        this.sMints = document.querySelector(".s_mints .swiper-slide-active p").textContent;
        this.sV = document.querySelector(".s_v .swiper-slide-active p").textContent;
        this.eHours = document.querySelector(".e_hours .swiper-slide-active p").textContent;
        this.eMints = document.querySelector(".e_mints .swiper-slide-active p").textContent;
        this.eV = document.querySelector(".e_v .swiper-slide-active p").textContent;
        this.document_oneError = false;
        if (this.document_one == '' || this.document_one == undefined) {
            this.document_oneError = true;
            return false;
        }
        else if (this.availableDate == true) {
            return false;
        }
        else {
            if (this.start_date != '' && this.end_date != '') {
                this.dateStartError = false;
            }
            else {
                return true;
            }
        }
    }
    getStartHoures() {
        // -- Counting days differnce between two dates --  by moaviz//
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (this.loaded) {
            var ddff = moment__WEBPACK_IMPORTED_MODULE_10__((_a = this.dateRange) === null || _a === void 0 ? void 0 : _a.from);
            var df = ddff.format('YYYY-MM-DD');
            this.start_date = df;
            var dd = moment__WEBPACK_IMPORTED_MODULE_10__((_b = this.dateRange) === null || _b === void 0 ? void 0 : _b.to);
            var d = dd.format('YYYY-MM-DD');
            this.end_date = d;
            this.sHours = (_c = document.querySelector(".s_hours .swiper-slide-active p")) === null || _c === void 0 ? void 0 : _c.textContent;
            this.sMints = (_d = document.querySelector(".s_mints .swiper-slide-active p")) === null || _d === void 0 ? void 0 : _d.textContent;
            this.sV = (_e = document.querySelector(".s_v .swiper-slide-active p")) === null || _e === void 0 ? void 0 : _e.textContent;
            this.eHours = (_f = document.querySelector(".e_hours .swiper-slide-active p")) === null || _f === void 0 ? void 0 : _f.textContent;
            this.eMints = (_g = document.querySelector(".e_mints .swiper-slide-active p")) === null || _g === void 0 ? void 0 : _g.textContent;
            this.eV = (_h = document.querySelector(".e_v .swiper-slide-active p")) === null || _h === void 0 ? void 0 : _h.textContent;
            var calStartTime = this.sHours + ':' + this.sMints + ' ' + this.sV;
            var calEndTime = this.eHours + ':' + this.eMints + ' ' + this.eV;
            this.currentCost = parseFloat(this.chargePerDay.replace(/,/g, '')) / 24;
            var EndTime = this.end_date + " " + calEndTime;
            var StartTime = this.start_date + " " + calStartTime;
            this.dayDiff = moment__WEBPACK_IMPORTED_MODULE_10__(EndTime.replace(/-/g, "/")).diff(moment__WEBPACK_IMPORTED_MODULE_10__(StartTime.replace(/-/g, "/")), 'hours');
            this.currentCost = this.currentCost * this.dayDiff;
            this.currentCost = this.currentCost.toFixed(2);
            var stD = new Date(StartTime.replace(/-/g, "/"));
            var etD = new Date(EndTime.replace(/-/g, "/"));
            var currentDate = new Date();
            console.log("ionic debug-- currentDate", this.getFullDate(currentDate));
            console.log("ionic debug-- stD", this.getFullDate(stD));
            // Booking on today an the select the previous time
            if (this.getFullDate(stD) == this.getFullDate(currentDate)) {
                //ali time work here check
                if (currentDate.getTime() > stD.getTime()) {
                    console.log("ionic debug-- current Time", currentDate.getTime());
                    console.log("ionic debug-- Start Time", stD.getTime());
                    this.printTimeErrorBoolen = true;
                    this.pastdateCheck = false;
                    this.printTimeError = "Could not book in the previous hours.";
                    this.presentToast('Could not book in the previous hours.');
                }
                else {
                    this.pastdateCheck = true;
                }
            }
            else {
                this.printTimeError = "";
                this.pastdateCheck = true;
            }
            if (this.dayDiff < 1) {
                if (stD.getTime() === etD.getTime()) {
                    //same date
                    this.printTimeErrorBoolen = true;
                    this.printTimeError = "Start time and end time is same";
                    this.presentToast('Start time and end time is same');
                    this.currentCostBooking = "test";
                    // false
                }
                else {
                    this.printTimeError = "Start time and end time is same";
                    this.currentCostBooking = this.currentCost;
                }
                if (stD.getTime() > etD.getTime()) {
                    //date 1 is newer
                    this.printTimeError = "Start Time is greater then End Time";
                    this.presentToast('Start Time is greater then End Time');
                    this.printTimeErrorBoolen = true;
                    // fasle
                    this.currentCostBooking = "test";
                }
                else {
                    this.printTimeError = "";
                    this.currentCostBooking = this.currentCost;
                }
            }
            else {
                this.printTimeError = "";
                this.currentCostBooking = this.currentCost;
                var currentDateTime = moment__WEBPACK_IMPORTED_MODULE_10__().format('YYYY-MM-DD HH:mm:ss');
                var daysHours = moment__WEBPACK_IMPORTED_MODULE_10__(StartTime.replace(/-/g, "/")).diff(moment__WEBPACK_IMPORTED_MODULE_10__(currentDateTime.replace(/-/g, "/")), 'hours');
                console.log("Hours diff", daysHours);
                if (daysHours < this.adNoticeHours) {
                    this.printTimeErrorBoolen = true;
                    console.log("Advance notice for  this car is" + this.advance_notice);
                    this.printTimeError = "Advance notice for  this car is " + this.advance_notice;
                }
                else {
                    this.printTimeErrorBoolen = false;
                    this.printTimeError = "";
                }
            }
        }
    }
    getFullDate(date) {
        const yyyy = date.getFullYear();
        let mm = date.getMonth() + 1; // Months start at 0!
        let dd = date.getDate();
        if (dd < 10)
            var days = '0' + dd;
        if (mm < 10)
            var mints = '0' + mm;
        return days + '/' + mints + '/' + yyyy;
    }
    submitForm() {
        if (this.start_date != '' && this.end_date != '') {
            if (this.start_date === this.end_date) {
                var date = new Date();
                var monthsss = date.getMonth();
                var month = monthsss + 1;
                if (month < 10) {
                    var monthss = '0' + month;
                    var fulldate = date.getFullYear() + '-' + monthss + '-' + date.getDate();
                }
                else {
                    var fulldate = date.getFullYear() + '-' + month + '-' + date.getDate();
                }
                var ddff = moment__WEBPACK_IMPORTED_MODULE_10__(date);
                this.checkCurrentTime = ddff.format("MM-DD-YYYY hh:mm A");
                var comdate = new Date(this.start_date);
                if (fulldate === this.start_date) {
                    this.TimeComparisionFun("diffDay");
                }
                else {
                    // comparision with only stat time and end time 
                    this.TimeComparisionFun("diffDay");
                }
            }
            else {
                // allow booking
                this.allowsubmitForm();
            }
        }
        else {
            this.presentToast('please select the booking dates');
        }
    }
    TimeComparisionFun(dayFilter) {
        this.sHours = document.querySelector(".s_hours .swiper-slide-active p").textContent;
        this.sMints = document.querySelector(".s_mints .swiper-slide-active p").textContent;
        this.sV = document.querySelector(".s_v .swiper-slide-active p").textContent;
        this.eHours = document.querySelector(".e_hours .swiper-slide-active p").textContent;
        this.eMints = document.querySelector(".e_mints .swiper-slide-active p").textContent;
        this.eV = document.querySelector(".e_v .swiper-slide-active p").textContent;
        var startTime = this.sHours + ':' + this.sMints + ' ' + this.sV;
        var endTime = this.eHours + ':' + this.eMints + ' ' + this.eV;
        this.checkStart = this.start_date + ' ' + startTime;
        this.checkEnd = this.end_date + ' ' + endTime;
        var s = this.checkStart.split(" ")[0].split("-"), stD = new Date(this.checkStart.replace(/-/g, "/"));
        var e = this.checkEnd.split(" ")[0].split("-"), etD = new Date(this.checkEnd.replace(/-/g, "/"));
        var current = new Date(this.checkCurrentTime);
        if (dayFilter == "diffDay") {
            if (stD.getTime() === etD.getTime()) {
                //same date
                this.printTimeErrorBoolen = true;
                this.printTimeError = "Start time and end time is same";
                this.presentToast('Start time and end time is same');
                // false
            }
            else if (stD.getTime() > etD.getTime()) {
                //date 1 is newer
                this.printTimeError = "Start Time is greater then End Time";
                this.presentToast('Start Time is greater then End Time');
                this.printTimeErrorBoolen = true;
                // fasle
            }
            else if (stD.getTime() < etD.getTime()) {
                //date 1 is newer
                // this.printTimeError="noError"
                this.allowsubmitForm();
                // true
            }
        }
    }
    allowsubmitForm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('allow submit form');
            console.log('start date', this.start_date);
            console.log('end date', this.end_date);
            this.printTimeErrorBoolen = false;
            this.sHours = document.querySelector(".s_hours .swiper-slide-active p").textContent;
            this.sMints = document.querySelector(".s_mints .swiper-slide-active p").textContent;
            this.sV = document.querySelector(".s_v .swiper-slide-active p").textContent;
            this.eHours = document.querySelector(".e_hours .swiper-slide-active p").textContent;
            this.eMints = document.querySelector(".e_mints .swiper-slide-active p").textContent;
            this.eV = document.querySelector(".e_v .swiper-slide-active p").textContent;
            this.document_oneError = false;
            if (this.start_date != '' && this.end_date != '' && this.document_one != null && this.document_one != "" && this.availableDate == false && this.pastdateCheck == true) {
                // if (this.start_date != '' && this.end_date != '' && this.document_one != null && this.document_one != "" && this.availableDate == false) {
                this.sHours = document.querySelector(".s_hours .swiper-slide-active p").textContent;
                this.sMints = document.querySelector(".s_mints .swiper-slide-active p").textContent;
                this.sV = document.querySelector(".s_v .swiper-slide-active p").textContent;
                this.eHours = document.querySelector(".e_hours .swiper-slide-active p").textContent;
                this.eMints = document.querySelector(".e_mints .swiper-slide-active p").textContent;
                this.eV = document.querySelector(".e_v .swiper-slide-active p").textContent;
                //var licenseImg = this.document_one.split(',')[1];
                const fileTransfer = this.transfer.create();
                const random = new Date().getTime();
                const optionlicenseImg = {
                    fileKey: 'photo',
                    fileName: 'licenseImg_' + '_' + random + '.jpeg',
                    chunkedMode: false,
                    httpMethod: 'post',
                    params: {
                        image: 'YPOP',
                    },
                };
                let loading_uploading = yield this.loadingController.create({
                    cssClass: 'ionloading',
                    message: 'Uploading images...',
                });
                yield loading_uploading.present();
                fileTransfer
                    .upload(this.document_one, 'https://app.transusdrives.com/webservices/upload_license_image', optionlicenseImg)
                    .then((data) => {
                    loading_uploading.dismiss();
                    const img1 = JSON.parse(data.response);
                    if (img1.status == "success") {
                        this.imgLicense = img1.message;
                        this.continueBooking();
                    }
                    else {
                        alert("Error in image uploading");
                    }
                }, (err) => {
                    loading_uploading.dismiss();
                    console.log(err);
                });
                // }
            }
            else {
                if (this.start_date == '') {
                    this.presentToast('please select the booking dates');
                }
                else if (this.end_date == '') {
                    this.presentToast('please select the booking dates');
                }
                else if (this.document_one == '') {
                    this.document_oneError = true;
                }
                else if (this.pastdateCheck == false) {
                    this.presentToast('Could not select the previous date and time');
                }
                // this.presentToast('please select the booking dates')
            }
        });
    }
    continueBooking() {
        var stringy = JSON.stringify({
            "requestType": 'book_by_car_id',
            "usersID": this.userID,
            "vehicleID": this.vehicle_id,
            "startDate": this.start_date,
            "endDate": this.end_date,
            "startTime": this.sHours + ':' + this.sMints + ' ' + this.sV,
            "endTime": this.eHours + ':' + this.eMints + ' ' + this.eV,
            "licenseImg": this.imgLicense,
            "trip_cost": this.currentCost,
            "currencyID": this.currencyID
        });
        this.present();
        // this.ShowLoading= true;
        this.restService.bookings(stringy).subscribe(response => {
            this.response = JSON.parse(response['_body']);
            if (this.response.status == 'error') {
                this.presentToast(this.response.message);
            }
            else if (this.response.status == 'success') {
                this.presentToast(this.response.msg);
                this.document_one = '';
                var myData = JSON.stringify({
                    booking_details: this.response.booking_details,
                    vehicle_imgs: this.response.vehicle_imgs
                });
                this.router.navigate(['/summary'], {
                    queryParams: {
                        value: myData
                    },
                });
            }
            this.dismiss();
        }, err => {
            this.dismiss();
        });
    }
    slidePrev() {
        this.start_month_index--;
        if (this.start_month_index < 1) {
            this.currentYear = this.currentYear - 1;
            this.start_month_index = 12;
        }
        this.start_date_month = this.monthList(this.start_month_index);
        this.startmonthCounter = this.start_month_index;
        this.validateStartDate();
        // this.startSlides.slidePrev();
    }
    slideNext() {
        this.start_month_index++;
        if (this.start_month_index == 13) {
            this.currentYear = this.currentYear + 1;
            this.start_month_index = 1;
        }
        this.start_date_month = this.monthList(this.start_month_index);
        this.startmonthCounter = this.start_month_index;
        this.validateStartDate();
        // this.startSlides.slideNext();
    }
    slidePrev2() {
        this.end_month_index--;
        if (this.end_month_index < 1) {
            this.currentYearTwo = this.currentYearTwo - 1;
            this.end_month_index = 12;
        }
        this.end_date_month = this.monthList(this.end_month_index);
        this.endmonthCounter = this.end_month_index;
        this.validateEndDate();
        // end_month_index 
        // this.endSlides.slidePrev();
    }
    slideNext2() {
        this.end_month_index++;
        if (this.end_month_index == 13) {
            this.currentYearTwo = this.currentYearTwo + 1;
            this.end_month_index = 1;
        }
        this.end_date_month = this.monthList(this.end_month_index);
        this.endmonthCounter = this.end_month_index;
        this.validateEndDate();
        // this.endSlides.slideNext();
    }
    validateStartDate() {
        setTimeout(() => {
            var _a, _b, _c, _d;
            this.dateError = true;
            this.dateStartError = false;
            /**** end date ****/
            this.active_end_date = (_a = document.querySelector(".end_date .activeEndState")) === null || _a === void 0 ? void 0 : _a.textContent;
            let cEndDate = (_b = new Date(this.currentYear, this.endmonthCounter - 1, this.active_end_date)) === null || _b === void 0 ? void 0 : _b.getTime();
            /**** end date ****/
            this.active_start_date = (_c = document.querySelector(".start_date .activeState")) === null || _c === void 0 ? void 0 : _c.textContent;
            let cDate = (_d = new Date(this.currentYear, this.startmonthCounter - 1, this.active_start_date)) === null || _d === void 0 ? void 0 : _d.getTime();
            let sDate = new Date(this.db_start_date).setHours(0, 0, 0, 0);
            let eDate = new Date(this.db_end_date).setHours(0, 0, 0, 0);
            if (cDate >= sDate && cDate < eDate) {
                this.dateError = false;
            }
            else {
                this.dateError = true;
            }
            if (cDate >= cEndDate && this.dateError == false) {
                this.dateStartError = true;
                //this.validateEndDate();
            }
        }, 300);
    }
    validateEndDate() {
        setTimeout(() => {
            var _a, _b;
            this.dateError = true;
            this.dateStartError = false;
            this.active_start_date = (_a = document.querySelector(".start_date .activeState")) === null || _a === void 0 ? void 0 : _a.textContent;
            let cStartDate = new Date(this.currentYear, this.startmonthCounter - 1, this.active_start_date).getTime();
            this.active_end_date = (_b = document.querySelector(".end_date .activeEndState")) === null || _b === void 0 ? void 0 : _b.textContent;
            let cDate = new Date(this.currentYear, this.endmonthCounter - 1, this.active_end_date).getTime();
            let sDate = new Date(this.db_start_date).setHours(0, 0, 0, 0);
            let eDate = new Date(this.db_end_date).setHours(0, 0, 0, 0);
            if (cDate > sDate && cDate <= eDate) {
                this.dateError = false;
            }
            else {
                this.dateError = true;
            }
            if (cStartDate >= cDate && this.dateError == false) {
                this.dateStartError = true;
            }
        }, 300);
    }
    monthList(param) {
        //param = parseInt(param)+1;
        if (param == 1) {
            this.month = 'January';
        }
        else if (param == 2) {
            this.month = 'February';
        }
        else if (param == 3) {
            this.month = 'March';
        }
        else if (param == 4) {
            this.month = 'April';
        }
        else if (param == 5) {
            this.month = 'May';
        }
        else if (param == 6) {
            this.month = 'June';
        }
        else if (param == 7) {
            this.month = 'July';
        }
        else if (param == 8) {
            this.month = 'August';
        }
        else if (param == 9) {
            this.month = 'September';
        }
        else if (param == 10) {
            this.month = 'October';
        }
        else if (param == 11) {
            this.month = 'November';
        }
        else if (param == 12) {
            this.month = 'December';
        }
        return this.month;
    }
    uploadDocument() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                message: 'Upload your driving license ID',
                buttons: [
                    {
                        text: 'Take image from camera',
                        handler: () => {
                            this.takeImageFromCamera();
                        }
                    },
                    {
                        text: 'Upload image from gallery',
                        handler: () => {
                            this.getImageFromGallery();
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    takeImageFromCamera() {
        this.imageService.selectImageInCamera().then((imageData) => {
            this.document_one = `data:image/png;base64,${imageData}`;
        }).catch(err => console.error(err));
    }
    getImageFromGallery() {
        var options = {
            maximumImagesCount: 1,
            outputType: 1
        };
        this.imagePicker.getPictures(options).then((imageData) => {
            this.document_one = `data:image/png;base64,${imageData}`;
        }, (err) => {
            console.log('imagepicker  now:', err);
        });
    }
    goToSummary() {
        this.router.navigate(['/summary']);
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
    onChange(event) {
        alert('on change called');
        //this.getStartHoures();
    }
    newDate(ev) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        console.log("custom date range", this.optionsRange);
        if (!this.olddateRange) {
            this.olddateRange = this.dateRange;
        }
        else {
            if (this.olddateRange == this.dateRange) {
                this.dateRange = null;
                this.olddateRange = null;
            }
            else {
                this.olddateRange = this.dateRange;
            }
        }
        var ddff = moment__WEBPACK_IMPORTED_MODULE_10__((_a = this.dateRange) === null || _a === void 0 ? void 0 : _a.from);
        var df = ddff.format('YYYY-MM-DD');
        var dd = moment__WEBPACK_IMPORTED_MODULE_10__((_b = this.dateRange) === null || _b === void 0 ? void 0 : _b.to);
        var d = dd.format('YYYY-MM-DD');
        this.start_date = df;
        this.end_date = d;
        // -- Counting days differnce between two dates --  by moaviz//
        this.sHours = (_c = document.querySelector(".s_hours .swiper-slide-active p")) === null || _c === void 0 ? void 0 : _c.textContent;
        this.sMints = (_d = document.querySelector(".s_mints .swiper-slide-active p")) === null || _d === void 0 ? void 0 : _d.textContent;
        this.sV = (_e = document.querySelector(".s_v .swiper-slide-active p")) === null || _e === void 0 ? void 0 : _e.textContent;
        this.eHours = (_f = document.querySelector(".e_hours .swiper-slide-active p")) === null || _f === void 0 ? void 0 : _f.textContent;
        this.eMints = (_g = document.querySelector(".e_mints .swiper-slide-active p")) === null || _g === void 0 ? void 0 : _g.textContent;
        this.eV = (_h = document.querySelector(".e_v .swiper-slide-active p")) === null || _h === void 0 ? void 0 : _h.textContent;
        var calStartTime = this.sHours + ':' + this.sMints + ' ' + this.sV;
        var calEndTime = this.eHours + ':' + this.eMints + ' ' + this.eV;
        var EndTime = this.end_date + " " + calEndTime;
        var StartTime = this.start_date + " " + calStartTime;
        var daysDiffrence = moment__WEBPACK_IMPORTED_MODULE_10__(EndTime.replace(/-/g, "/")).diff(moment__WEBPACK_IMPORTED_MODULE_10__(StartTime.replace(/-/g, "/")), 'days');
        // -- Counting days differnce between two dates --  by moaviz//
        console.log('diff Days is new for check: ', daysDiffrence);
        console.log("current max days", this.max_days);
        if (daysDiffrence < this.min_days || daysDiffrence > this.max_days) {
            console.log("Not bookded");
            this.errorMsgs = "For this car";
            console.log("maximum or minimum days");
            if (daysDiffrence > this.max_days) {
                console.log("maximum days");
                this.errorMsgs += " maximum trip duration is " + this.max_trip_duration;
            }
            if (daysDiffrence < this.min_days) {
                console.log("Minimum days");
                this.errorMsgs += " minimum trip duration is " + this.min_trip_duration;
            }
            this.availableDate = true;
        }
        else {
            this.availableDate = false;
            this.errorMsgs = "Car is already booked in these dates.";
            var stringy = JSON.stringify({
                "requestType": 'checking_dates',
                "vehicleID": this.vehicle_id,
                "startDate": this.start_date,
                "endDate": this.end_date,
            });
            // this.ShowLoading= true;
            this.restService.bookings(stringy).subscribe(response => {
                this.response = JSON.parse(response['_body']);
                if (this.response.status == 'error') {
                    this.availableDate = true;
                }
                else if (this.response.status == 'success') {
                    this.availableDate = false;
                }
            }, err => {
                alert('error');
            });
        }
        // -- Counting days differnce between two dates --  by moaviz//
    }
    getDifferenceInDays(startDate, endDate) {
        const diffInMs = Math.abs(endDate - startDate);
        return diffInMs / (1000 * 60 * 60 * 24);
    }
    monthListFormte(dates) {
        var dateIndex = dates.split('-');
        var param = dateIndex[1];
        if (param == 1) {
            this.month = 'January';
        }
        else if (param == 2) {
            this.month = 'February';
        }
        else if (param == 3) {
            this.month = 'March';
        }
        else if (param == 4) {
            this.month = 'April';
        }
        else if (param == 5) {
            this.month = 'May';
        }
        else if (param == 6) {
            this.month = 'June';
        }
        else if (param == 7) {
            this.month = 'July';
        }
        else if (param == 8) {
            this.month = 'August';
        }
        else if (param == 9) {
            this.month = 'September';
        }
        else if (param == 10) {
            this.month = 'October';
        }
        else if (param == 11) {
            this.month = 'November';
        }
        else if (param == 12) {
            this.month = 'December';
        }
        return dateIndex[2] + " " + this.month + " " + dateIndex[0];
    }
};
CarBookingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _cameraimage_service__WEBPACK_IMPORTED_MODULE_4__["CameraimageService"] },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__["ImagePicker"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__["FileTransfer"] },
    { type: _imgsr_service__WEBPACK_IMPORTED_MODULE_11__["ImgsrService"] }
];
CarBookingPage.propDecorators = {
    startSlides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['startSlides',] }],
    endSlides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['endSlides',] }]
};
CarBookingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-car-booking',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./car-booking.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/car-booking/car-booking.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./car-booking.page.scss */ "./src/app/car-booking/car-booking.page.scss")).default]
    })
], CarBookingPage);



/***/ }),

/***/ "./src/app/imgsr.service.ts":
/*!**********************************!*\
  !*** ./src/app/imgsr.service.ts ***!
  \**********************************/
/*! exports provided: ImgsrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgsrService", function() { return ImgsrService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ImgsrService = class ImgsrService {
    constructor() {
        this.imagebase64data = "data:image/png;base64,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";
    }
};
ImgsrService.ctorParameters = () => [];
ImgsrService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ImgsrService);



/***/ })

}]);
//# sourceMappingURL=car-booking-car-booking-module-es2015.js.map