(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["car-booking-car-booking-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/car-booking/car-booking.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/car-booking/car-booking.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCarBookingCarBookingPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [class.ios-headers]=\"plateformCheck == 'ios'\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" [class.back_button]=\"plateformCheck == 'ios'\">\n      <img src=\"assets/img/Arrow.svg\" (click)=\"back()\" />\n    </ion-buttons>\n    <ion-title [class.globe_title]=\"plateformCheck == 'ios'\"\n      >{{model_name}}</ion-title\n    >\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-row\n    *ngIf=\"ShowLoading\"\n    style=\"position: absolute; width: 100%; z-index: 9999\"\n  >\n    <ion-col style=\"text-align: center\">\n      <img style=\"width: 90px\" src=\"assets/img/Loader.gif\" />\n    </ion-col>\n  </ion-row>\n  <div class=\"list_1\">\n    <ion-row> </ion-row>\n    <ion-row>\n      <ion-col>\n        <h3 style=\"color: black\">Trip Dates</h3>\n        <!-- <p class=\"upload_images left_4\">Start Date</p> -->\n        <p class=\"upload_images left_4\">\n          Vehicle available from: {{db_start_date}} - to: {{db_end_date}}\n        </p>\n      </ion-col>\n    </ion-row> \n  </div>\n  <div class=\"calender_slider\">\n    <ion-calendar\n      (click)=\"newDate($event)\"\n      (click)=\"getStartHoures()\"\n      [(ngModel)]=\"dateRange\"\n      (onChange)=\"onChange($event)\"\n      type=\"string\"\n      [options]=\"optionsRange\"\n      [format]=\"'YYYY-MM-DD'\"\n    >\n    </ion-calendar>\n  </div>\n\n  <p *ngIf=\"dateStartError\" class=\"error ion-padding ion-text-center sz\">\n    End Date Cannot be smaller then Start Date\n  </p>\n  <p *ngIf=\"availableDate\" class=\"error ion-padding ion-text-center sz\">\n    {{errorMsgs}}\n  </p>\n\n  <div class=\"list_1\">\n    <ion-row>\n      <ion-col>\n        <p class=\"upload_images left_4\">Start Time</p>\n      </ion-col>\n    </ion-row>\n  </div>\n  <ion-row class=\"bg_white\">\n    <ion-col size=\"2\"></ion-col>\n    <ion-col size=\"2\" class=\"vertical_list\">\n      <ion-slides\n        (ionSlideDidChange)=\"getStartHoures()\"\n        class=\"vertical_slider s_hours\"\n        [options]=\"option\"\n      >\n        <ion-slide *ngFor=\"let i of hours\">\n          <ng-container *ngIf=\"i<=9\">\n            <p>0{{i}}</p>\n          </ng-container>\n          <ng-container *ngIf=\"i>9\">\n            <p>{{i}}</p>\n          </ng-container>\n        </ion-slide>\n      </ion-slides>\n    </ion-col>\n    <ion-col size=\"1\"></ion-col>\n    <ion-col size=\"2\" class=\"vertical_list\">\n      <ion-slides\n        (ionSlideDidChange)=\"getStartHoures()\"\n        class=\"vertical_slider s_mints\"\n        [options]=\"option\"\n      >\n        <ion-slide *ngFor=\"let i of mints\">\n          <ng-container *ngIf=\"i<=9\">\n            <p>0{{i}}</p>\n          </ng-container>\n          <ng-container *ngIf=\"i>9\">\n            <p>{{i}}</p>\n          </ng-container>\n        </ion-slide>\n      </ion-slides>\n    </ion-col>\n    <ion-col size=\"1\"></ion-col>\n    <ion-col size=\"2\" class=\"vertical_list s_v\">\n      <ion-slides\n        (ionSlideDidChange)=\"getStartHoures()\"\n        class=\"vertical_slider\"\n        [options]=\"option\"\n      >\n        <ion-slide>\n          <p>AM</p>\n        </ion-slide>\n        <ion-slide>\n          <p>PM</p>\n        </ion-slide>\n        <ion-slide>\n          <p>AM</p>\n        </ion-slide>\n        <ion-slide>\n          <p>PM</p>\n        </ion-slide>\n      </ion-slides>\n    </ion-col>\n  </ion-row>\n  <div class=\"list_1\">\n    <ion-row>\n      <ion-col>\n        <p class=\"upload_images left_4\">End Time</p>\n      </ion-col>\n    </ion-row>\n  </div>\n  <ion-row class=\"bg_white\">\n    <ion-col size=\"2\"></ion-col>\n    <ion-col size=\"2\" class=\"vertical_list\">\n      <ion-slides\n        (ionSlideDidChange)=\"getStartHoures()\"\n        class=\"vertical_slider e_hours\"\n        [options]=\"option\"\n      >\n        <ion-slide *ngFor=\"let i of hours\">\n          <ng-container *ngIf=\"i<=9\">\n            <p>0{{i}}</p>\n          </ng-container>\n          <ng-container *ngIf=\"i>9\">\n            <p>{{i}}</p>\n          </ng-container>\n        </ion-slide>\n      </ion-slides>\n    </ion-col>\n    <ion-col size=\"1\"></ion-col>\n    <ion-col size=\"2\" class=\"vertical_list\">\n      <ion-slides\n        (ionSlideDidChange)=\"getStartHoures()\"\n        class=\"vertical_slider e_mints\"\n        [options]=\"option\"\n      >\n        <ion-slide *ngFor=\"let i of mints\">\n          <ng-container *ngIf=\"i<=9\">\n            <p>0{{i}}</p>\n          </ng-container>\n          <ng-container *ngIf=\"i>9\">\n            <p>{{i}}</p>\n          </ng-container>\n        </ion-slide>\n      </ion-slides>\n    </ion-col>\n    <ion-col size=\"1\"></ion-col>\n    <ion-col size=\"2\" class=\"vertical_list\">\n      <ion-slides\n        (ionSlideDidChange)=\"getStartHoures()\"\n        class=\"vertical_slider e_v\"\n        [options]=\"option\"\n      >\n        <ion-slide>\n          <p>AM</p>\n        </ion-slide>\n        <ion-slide>\n          <p>PM</p>\n        </ion-slide>\n        <ion-slide>\n          <p>AM</p>\n        </ion-slide>\n        <ion-slide>\n          <p>PM</p>\n        </ion-slide>\n      </ion-slides>\n    </ion-col>\n  </ion-row>\n  <ion-row\n    *ngIf=\"printTimeErrorBoolen\"\n    class=\"error ion-padding ion-text-center sz bg_white\"\n  >\n    <ion-col style=\"text-align: center\"> {{printTimeError}} </ion-col>\n  </ion-row>\n  <div class=\"list_1\">\n    <ion-row *ngIf=\"currentCostBooking !='test'\">\n      <ion-col class=\"current_cost\">\n        <span class=\"upload_images left_4\">Booking Cost :</span>\n        <span>{{currency_symbol}} {{this.currentCostBooking}}</span>\n      </ion-col>\n    </ion-row>\n  </div>\n  <ion-col size=\"2\" class=\"vertical_list\"> </ion-col>\n  <div class=\"list_1\">\n    <ion-row>\n      <ion-col>\n        <h3>Driving License</h3>\n        <p class=\"upload_images left_4\">Upload your driving license ID</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-row>\n          <ion-col\n            size=\"12\"\n            class=\"list_2\"\n            (click)=\"uploadDocument()\"\n            *ngIf=\"document_one =='' || document_one ==undefined\"\n          >\n            <img src=\"assets/img/Menu_Plus.svg\" />\n          </ion-col>\n          <ion-col\n            size=\"12\"\n      \n            (click)=\"uploadDocument()\"  \n            *ngIf=\"document_one\"\n          > \n            <img style=\"width: 100%;height: 100%;\"  src=\"{{document_one}}\" class=\"imgh\" />\n          </ion-col>\n          <span *ngIf=\"document_oneError\" class=\"error ion-padding\">\n            Document is required.\n          </span> \n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </div> \n\n  <ion-row>\n    <ion-col size=\"2\"></ion-col>\n    <ion-col size=\"8\">\n      <ion-button\n        color=\"secondary\"\n        expand=\"block\"\n        shape=\"round\"\n        (click)=\"submitForm()\"\n        >Book Now</ion-button\n      >\n    </ion-col>\n  </ion-row>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/car-booking/car-booking-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/car-booking/car-booking-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: CarBookingPageRoutingModule */

    /***/
    function srcAppCarBookingCarBookingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarBookingPageRoutingModule", function () {
        return CarBookingPageRoutingModule;
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


      var _car_booking_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./car-booking.page */
      "./src/app/car-booking/car-booking.page.ts");

      var routes = [{
        path: '',
        component: _car_booking_page__WEBPACK_IMPORTED_MODULE_3__["CarBookingPage"]
      }];

      var CarBookingPageRoutingModule = /*#__PURE__*/_createClass(function CarBookingPageRoutingModule() {
        _classCallCheck(this, CarBookingPageRoutingModule);
      });

      CarBookingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CarBookingPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/car-booking/car-booking.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/car-booking/car-booking.module.ts ***!
      \***************************************************/

    /*! exports provided: CarBookingPageModule */

    /***/
    function srcAppCarBookingCarBookingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarBookingPageModule", function () {
        return CarBookingPageModule;
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


      var _car_booking_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./car-booking-routing.module */
      "./src/app/car-booking/car-booking-routing.module.ts");
      /* harmony import */


      var _car_booking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./car-booking.page */
      "./src/app/car-booking/car-booking.page.ts");
      /* harmony import */


      var ion2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ion2-calendar */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/index.js");
      /* harmony import */


      var ion2_calendar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_7__);

      var CarBookingPageModule = /*#__PURE__*/_createClass(function CarBookingPageModule() {
        _classCallCheck(this, CarBookingPageModule);
      });

      CarBookingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _car_booking_routing_module__WEBPACK_IMPORTED_MODULE_5__["CarBookingPageRoutingModule"], ion2_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"]],
        declarations: [_car_booking_page__WEBPACK_IMPORTED_MODULE_6__["CarBookingPage"]],
        providers: [{
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
          useValue: 'zh-CN'
        }]
      })], CarBookingPageModule);
      /***/
    },

    /***/
    "./src/app/car-booking/car-booking.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/car-booking/car-booking.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCarBookingCarBookingPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3em 0.1em 8px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n  text-transform: capitalize;\n}\n\nion-content {\n  --background: #F7F8FA;\n}\n\n.list_1 {\n  padding: 0em 1em;\n}\n\n.list_1 h3 {\n  margin: 0px;\n  margin-top: 0.5em;\n}\n\n.left_4 {\n  margin-left: 0.7em !important;\n}\n\n.input_list {\n  border: 1px solid #d4dce1;\n  background: #F7F8FA;\n  border-radius: 28px;\n  font-size: 13px;\n  color: #d4dce1;\n  --padding-bottom: 1.5em;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n}\n\n.upload_images {\n  color: #C4932F;\n  font-size: 12px;\n  margin: 5px 0px;\n}\n\n.list_2 {\n  text-align: center;\n  background: #F7F8FA;\n  border: 1px dashed #D4DCE1;\n  border-radius: 10px;\n  padding: 5.5em 0em;\n}\n\n.list_2 p {\n  color: #d2d6d8;\n}\n\n.list_3 {\n  background: #F7F8FA;\n  border: 1px solid #D4DCE1;\n  border-radius: 10px;\n  color: #D4DCE1;\n  font-size: 13px;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n}\n\n.btn_footer {\n  margin: 0.7em 0em 1em 0em;\n}\n\nion-slide span {\n  border: 1px solid #000;\n  border-radius: 22px;\n  padding: 8px 14px;\n  margin-left: 1em;\n}\n\n.num {\n  padding: 9px 10px !important;\n}\n\n.calender_slider {\n  padding: 0.6em 0em;\n  background: #fff;\n}\n\n.calender_slider_text {\n  margin: 0px;\n  position: relative;\n  top: -2px;\n  font-size: 18px;\n}\n\nion-slide {\n  margin-left: 0.6em;\n}\n\nion-slide:first-child {\n  margin-left: 0em;\n}\n\n.btn_footer {\n  padding: 0.5em 1em 1.2em 1em;\n}\n\n.info {\n  background: #6E6D6D;\n  padding: 0.4em 0em;\n}\n\n.info p {\n  margin: 0px;\n  color: #fff;\n  font-size: 10px;\n}\n\n.tog_main {\n  background: #F9F9F9;\n  padding: 0em 0.3em;\n}\n\n.tog1 {\n  font-size: 13px;\n  color: #272727;\n}\n\n.tog1 h4 {\n  margin: 0px;\n}\n\n.tog1 p {\n  margin: 0px;\n  margin-left: 4%;\n  margin-top: 5%;\n  font-size: 14px;\n}\n\nion-toggle.toggle-checked::part(track) {\n  background: #c4932f !important;\n}\n\nion-item {\n  --background: transparent;\n  float: right;\n}\n\n.vertical_list {\n  text-align: center;\n  height: 100px;\n  overflow: hidden;\n  overflow-y: scroll;\n  padding: 0em 6px;\n}\n\n.vertical_slider ion-slide {\n  margin-left: 0em !important;\n  color: #B0B0B0;\n  border-top: 1px solid #B0B0B0;\n  border-bottom: 1px solid #B0B0B0;\n  font-size: 16px;\n  /* padding: 1em 0em; */\n}\n\n.vertical_slider ion-slide.swiper-slide-active {\n  color: #000 !important;\n  font-size: 18px !important;\n}\n\n.bg_white {\n  padding: 0.6em 0em;\n  background: #fff;\n}\n\n.activeState {\n  background: #c4932f;\n  border: 1px solid #c4932f !important;\n  color: #fff !important;\n}\n\n.error {\n  color: red;\n}\n\n.imgh {\n  width: 100%;\n  height: 12em;\n  border-radius: 10px;\n}\n\n.activeEndState {\n  background: #c4932f;\n  border: 1px solid #c4932f !important;\n  color: #fff !important;\n}\n\n.sz {\n  font-size: 12px;\n  margin: 0px;\n}\n\n.current_cost {\n  display: flex;\n  grid-gap: 23px;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyLWJvb2tpbmcvY2FyLWJvb2tpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSx3QkFBQTtJQUNBLHFCQUFBO0VBQ047QUFDRjs7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFISjs7QUFLQTtFQUNJLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FBRko7O0FBSUE7RUFDSSxxQkFBQTtBQURKOztBQUdBO0VBQ0ksZ0JBQUE7QUFBSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksNkJBQUE7QUFDSjs7QUFDQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBRUo7O0FBQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFHSjs7QUFEQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFJSjs7QUFEQTtFQUNJLGNBQUE7QUFJSjs7QUFGQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUtKOztBQUhBO0VBQ0kseUJBQUE7QUFNSjs7QUFKQTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBT0o7O0FBTEE7RUFDSSw0QkFBQTtBQVFKOztBQU5BO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQVNKOztBQVBBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFVSjs7QUFSQTtFQUNJLGtCQUFBO0FBV0o7O0FBUkE7RUFDSSxnQkFBQTtBQVdKOztBQVRBO0VBQ0ksNEJBQUE7QUFZSjs7QUFWQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUFhSjs7QUFYQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQWNKOztBQVhBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQWNKOztBQVpBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFlSjs7QUFiQTtFQUNJLFdBQUE7QUFnQko7O0FBZEE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBaUJKOztBQWZBO0VBQ0ksOEJBQUE7QUFrQko7O0FBaEJBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FBbUJKOztBQWpCQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQW9CSjs7QUFmQTtFQUNJLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFrQko7O0FBZEE7RUFDSSxzQkFBQTtFQUNBLDBCQUFBO0FBaUJKOztBQWZBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQWtCSjs7QUFoQkE7RUFDSSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7QUFtQko7O0FBakJBO0VBQ0ksVUFBQTtBQW9CSjs7QUFsQkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBcUJKOztBQW5CQTtFQUNJLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtBQXNCSjs7QUFwQkE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQXVCSjs7QUFyQkE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBd0JKIiwiZmlsZSI6InNyYy9hcHAvY2FyLWJvb2tpbmcvY2FyLWJvb2tpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIHBhZGRpbmc6IDAuOGVtIDAuMWVtIDAgMDtcbiAgICAtLWJhY2tncm91bmQ6ICNjNDkzMmY7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLWhlaWdodCA6IDgwMHB4KSB7XG4gICAgaW9uLXRvb2xiYXIge1xuICAgICAgICBwYWRkaW5nOiAzZW0gMC4xZW0gOHB4IDA7XG4gICAgICAgIC0tYmFja2dyb3VuZDogI2M0OTMyZjtcbiAgICB9XG59XG5cblxuXG5cbmlvbi10aXRsZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAyNHB4O1xufVxuaW9uLWJ1dHRvbntcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxLjVlbTtcbiAgICAtLXBhZGRpbmctdG9wOiAxLjVlbTtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5pb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6ICNGN0Y4RkE7XG59XG4ubGlzdF8xe1xuICAgIHBhZGRpbmc6IDBlbSAxZW07XG59XG4ubGlzdF8xIGgze1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xufVxuXG4ubGVmdF80e1xuICAgIG1hcmdpbi1sZWZ0OjAuN2VtICFpbXBvcnRhbnQ7XG59XG4uaW5wdXRfbGlzdHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRkY2UxO1xuICAgIGJhY2tncm91bmQ6ICNGN0Y4RkE7XG4gICAgYm9yZGVyLXJhZGl1czogMjhweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICNkNGRjZTE7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMS41ZW07XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxLjVlbTtcbiAgICAtLXBhZGRpbmctdG9wOiAxLjVlbTtcbn1cbi51cGxvYWRfaW1hZ2Vze1xuICAgIGNvbG9yOiNDNDkzMkY7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbjogNXB4IDBweDtcbn1cbi5saXN0XzJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICNGN0Y4RkE7XG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICNENERDRTE7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiA1LjVlbSAwZW07XG4gICAvLyBwYWRkaW5nOiAyNSUgMGVtIDIzJSAwZW07XG59XG4ubGlzdF8yIHB7XG4gICAgY29sb3I6ICNkMmQ2ZDg7XG59XG4ubGlzdF8ze1xuICAgIGJhY2tncm91bmQ6ICNGN0Y4RkE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Q0RENFMTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGNvbG9yOiAjRDREQ0UxO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEuNWVtO1xuICAgIC0tcGFkZGluZy10b3A6IDEuNWVtO1xufVxuLmJ0bl9mb290ZXJ7XG4gICAgbWFyZ2luOiAwLjdlbSAwZW0gMWVtIDBlbTtcbn1cbmlvbi1zbGlkZSBzcGFue1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgICBwYWRkaW5nOiA4cHggMTRweDtcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xufVxuLm51bXtcbiAgICBwYWRkaW5nOiA5cHggMTBweCAhaW1wb3J0YW50O1xufVxuLmNhbGVuZGVyX3NsaWRlcntcbiAgICBwYWRkaW5nOiAwLjZlbSAwZW07XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5jYWxlbmRlcl9zbGlkZXJfdGV4dHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMnB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cbmlvbi1zbGlkZXtcbiAgICBtYXJnaW4tbGVmdDogMC42ZW07XG4gICAgXG59XG5pb24tc2xpZGU6Zmlyc3QtY2hpbGR7XG4gICAgbWFyZ2luLWxlZnQ6IDBlbTtcbn1cbi5idG5fZm9vdGVye1xuICAgIHBhZGRpbmc6IDAuNWVtIDFlbSAxLjJlbSAxZW07XG59XG4uaW5mb3tcbiAgICBiYWNrZ3JvdW5kOiAjNkU2RDZEO1xuICAgIHBhZGRpbmc6IDAuNGVtIDBlbTtcbn1cbi5pbmZvIHB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4udG9nX21haW57XG4gICAgYmFja2dyb3VuZDogI0Y5RjlGOTtcbiAgICBwYWRkaW5nOiAwZW0gMC4zZW07XG59XG4udG9nMXtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICMyNzI3Mjc7XG59XG4udG9nMSBoNHtcbiAgICBtYXJnaW46MHB4O1xufVxuLnRvZzEgcHtcbiAgICBtYXJnaW46MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0JTtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5pb24tdG9nZ2xlLnRvZ2dsZS1jaGVja2VkOjpwYXJ0KHRyYWNrKSAge1xuICAgIGJhY2tncm91bmQ6IHJnYigxOTYgMTQ3IDQ3KSAhaW1wb3J0YW50O1xufVxuaW9uLWl0ZW17XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG4udmVydGljYWxfbGlzdHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBwYWRkaW5nOjBlbSA2cHg7XG59XG4udmVydGljYWxfbGlzdCBwIHsgIFxuICAgIC8vbWFyZ2luOiAwcHg7XG59XG4udmVydGljYWxfc2xpZGVyIGlvbi1zbGlkZXtcbiAgICBtYXJnaW4tbGVmdDogMGVtICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6I0IwQjBCMDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0IwQjBCMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0IwQjBCMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgLyogcGFkZGluZzogMWVtIDBlbTsgKi9cbiAgICBcbn1cblxuLnZlcnRpY2FsX3NsaWRlciBpb24tc2xpZGUuc3dpcGVyLXNsaWRlLWFjdGl2ZXtcbiAgICBjb2xvcjojMDAwICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG59XG4uYmdfd2hpdGV7XG4gICAgcGFkZGluZzogMC42ZW0gMGVtO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uYWN0aXZlU3RhdGV7XG4gICAgYmFja2dyb3VuZDogI2M0OTMyZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzQ5MzJmICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbi5lcnJvcntcbiAgICBjb2xvcjpyZWQ7XG59XG4uaW1naHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5hY3RpdmVFbmRTdGF0ZXtcbiAgICBiYWNrZ3JvdW5kOiAjYzQ5MzJmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjNDkzMmYgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50OyBcbn1cbi5zentcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luOiAwcHg7XG59XG4uY3VycmVudF9jb3N0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ3JpZC1nYXA6IDIzcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/car-booking/car-booking.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/car-booking/car-booking.page.ts ***!
      \*************************************************/

    /*! exports provided: CarBookingPage */

    /***/
    function srcAppCarBookingCarBookingPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarBookingPage", function () {
        return CarBookingPage;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/image-picker/ngx */
      "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);

      var CarBookingPage = /*#__PURE__*/function () {
        function CarBookingPage(activatedRoute, loadingController, storage, toastController, restService, alertCtrl, router, imageService, imagePicker, plateform, location, transfer) {
          _classCallCheck(this, CarBookingPage);

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
          this.loaded = false;
          this.option1 = {
            slidesPerView: 8,
            loop: true
          };
          this.option = {
            loop: true,
            direction: 'vertical',
            slidesPerView: 3,
            centeredSlides: true,
            centeredSlidesBounds: true
          };
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

        _createClass(CarBookingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            if (this.plateform.is('ios')) {
              this.plateformCheck = "ios";
            } else {
              this.plateformCheck = "android";
            }

            this.storage.get('currency_symbol').then(function (currency_symbol) {
              _this.currency_symbol = currency_symbol;
            });
            this.storage.get('user_details').then(function (user_details) {
              _this.userID = user_details.users_id;
              _this.Email = user_details.email;
              _this.currencyID = user_details.currencies_id;
            });
            this.hours = Array.from({
              length: 12
            }, function (v, k) {
              return k + 1;
            });
            this.mints = Array.from({
              length: 60
            }, function (v, k) {
              return k + 0;
            });
            this.days = Array.from({
              length: 30
            }, function (v, k) {
              return k + 1;
            });
            this.currentYear = new Date().getFullYear();
            this.currentYearTwo = new Date().getFullYear();
            this.getStartIndex(2);
            this.getEndIndex(2);
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

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
            this.activatedRoute.queryParams.subscribe(function (res) {
              _this2.response = JSON.parse(res.value);
              console.log("data from url", _this2.response);
              _this2.vehicle_id = _this2.response.vehicle_id;
              _this2.db_start_date = _this2.monthListFormte(_this2.response.start_date);
              _this2.db_end_date = _this2.monthListFormte(_this2.response.end_date);
              _this2.chargePerDay = _this2.response.charge_per_day;
              _this2.max_trip_duration = _this2.response.max_trip_duration;
              _this2.min_trip_duration = _this2.response.min_trip_duration;
              _this2.advance_notice = _this2.response.advance_notice; // -- Advance notice duration -- //

              if (_this2.advance_notice == '6 hours') {
                _this2.adNoticeHours = 6;
              } else if (_this2.advance_notice == '12 hours') {
                _this2.adNoticeHours = 12;
              } else if (_this2.advance_notice == '1 day') {
                _this2.adNoticeHours = 24;
              } else if (_this2.advance_notice == 'Instant') {
                _this2.adNoticeHours = 1000;
              } // -- Min days duration -- //


              if (_this2.min_trip_duration == '1 day') {
                _this2.min_days = 1;
              } else if (_this2.min_trip_duration == '2 day') {
                _this2.min_days = 2;
              } else if (_this2.min_trip_duration == '3 day') {
                _this2.min_days = 3;
              } // -- Max days duration -- //


              if (_this2.max_trip_duration == '5 day') {
                _this2.max_days = 5;
              } else if (_this2.max_trip_duration == '1 week') {
                _this2.max_days = 7;
              } else if (_this2.max_trip_duration == '2 weeks') {
                _this2.max_days = 14;
              } else if (_this2.max_trip_duration == '1 month') {
                _this2.max_days = 30;
              } else if (_this2.max_trip_duration == '2 month') {
                _this2.max_days = 60;
              } else if (_this2.max_trip_duration == '3 month') {
                _this2.max_days = 90;
              } else {
                _this2.max_days = 1000;
              }

              var stDate = _this2.response.start_date.split('-');

              var enDate = _this2.response.end_date.split('-');

              var startDatesss = new Date(_this2.response.start_date.replace(/-/g, "/"));
              var currentDate = new Date();
              var startVar;
              var startDatesss = new Date(_this2.response.start_date.replace(/-/g, "/"));
              var currentDate = new Date();

              if (startDatesss.getTime() > currentDate.getTime()) {
                startVar = new Date(stDate[0], stDate[1] - 1, stDate[2]);
              } else {
                startVar = new Date();
              }

              var daysConfig = [];

              _this2.response.booked_dates.map(function (el, index) {
                var tempDateArray = el.split('-');
                daysConfig.push({
                  date: new Date(tempDateArray[0], tempDateArray[1] - 1, tempDateArray[2]),
                  disable: true
                });
              });

              _this2.optionsRange = {
                pickMode: 'range',
                from: startVar,
                daysConfig: daysConfig,
                to: new Date(enDate[0], enDate[1] - 1, enDate[2])
              };
              console.log("date range in constractor", _this2.optionsRange);
              _this2.model_name = _this2.response.model_name;
            });
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this3 = this;

            setTimeout(function () {
              _this3.loaded = true;
            }, 500);
          }
        }, {
          key: "back",
          value: function back() {
            this.location.back();
          }
        }, {
          key: "getStartIndex",
          value: function getStartIndex(i) {
            this.sliderStartBoolean = i;
            this.validateStartDate();
          }
        }, {
          key: "getEndIndex",
          value: function getEndIndex(i) {
            this.sliderEndBoolean = i;
            this.validateEndDate();
          }
        }, {
          key: "validateForm",
          value: function validateForm() {
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
            } else if (this.availableDate == true) {
              return false;
            } else {
              if (this.start_date != '' && this.end_date != '') {
                this.dateStartError = false;
              } else {
                return true;
              }
            }
          }
        }, {
          key: "getStartHoures",
          value: function getStartHoures() {
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
              console.log("ionic debug-- stD", this.getFullDate(stD)); // Booking on today an the select the previous time

              if (this.getFullDate(stD) == this.getFullDate(currentDate)) {
                if (currentDate.getTime() > stD.getTime()) {
                  console.log("ionic debug-- current Time", currentDate.getTime());
                  console.log("ionic debug-- Start Time", stD.getTime());
                  this.printTimeErrorBoolen = true;
                  this.printTimeError = "Could not book in the previous hours.";
                  this.presentToast('Could not book in the previous hours.');
                }
              } else {
                this.printTimeError = "";
              }

              if (this.dayDiff < 1) {
                if (stD.getTime() === etD.getTime()) {
                  //same date
                  this.printTimeErrorBoolen = true;
                  this.printTimeError = "Start time and end time is same";
                  this.presentToast('Start time and end time is same');
                  this.currentCostBooking = "test"; // false
                } else {
                  this.printTimeError = "Start time and end time is same";
                  this.currentCostBooking = this.currentCost;
                }

                if (stD.getTime() > etD.getTime()) {
                  //date 1 is newer
                  this.printTimeError = "Start Time is greater then End Time";
                  this.presentToast('Start Time is greater then End Time');
                  this.printTimeErrorBoolen = true; // fasle

                  this.currentCostBooking = "test";
                } else {
                  this.printTimeError = "";
                  this.currentCostBooking = this.currentCost;
                }
              } else {
                this.printTimeError = "";
                this.currentCostBooking = this.currentCost;
                var currentDateTime = moment__WEBPACK_IMPORTED_MODULE_10__().format('YYYY-MM-DD HH:mm:ss');
                var daysHours = moment__WEBPACK_IMPORTED_MODULE_10__(StartTime.replace(/-/g, "/")).diff(moment__WEBPACK_IMPORTED_MODULE_10__(currentDateTime.replace(/-/g, "/")), 'hours');
                console.log("Hours diff", daysHours);

                if (daysHours < this.adNoticeHours) {
                  this.printTimeErrorBoolen = true;
                  console.log("Advance notice for  this car is" + this.advance_notice);
                  this.printTimeError = "Advance notice for  this car is " + this.advance_notice;
                } else {
                  this.printTimeErrorBoolen = false;
                  this.printTimeError = "";
                }
              }
            }
          }
        }, {
          key: "getFullDate",
          value: function getFullDate(date) {
            var yyyy = date.getFullYear();
            var mm = date.getMonth() + 1; // Months start at 0!

            var dd = date.getDate();
            if (dd < 10) var days = '0' + dd;
            if (mm < 10) var mints = '0' + mm;
            return days + '/' + mints + '/' + yyyy;
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            if (this.start_date != '' && this.end_date != '') {
              if (this.start_date === this.end_date) {
                var date = new Date();
                var monthsss = date.getMonth();
                var month = monthsss + 1;

                if (month < 10) {
                  var monthss = '0' + month;
                  var fulldate = date.getFullYear() + '-' + monthss + '-' + date.getDate();
                } else {
                  var fulldate = date.getFullYear() + '-' + month + '-' + date.getDate();
                }

                var ddff = moment__WEBPACK_IMPORTED_MODULE_10__(date);
                this.checkCurrentTime = ddff.format("MM-DD-YYYY hh:mm A");
                var comdate = new Date(this.start_date);

                if (fulldate === this.start_date) {
                  this.TimeComparisionFun("diffDay");
                } else {
                  // comparision with only stat time and end time 
                  this.TimeComparisionFun("diffDay");
                }
              } else {
                // allow booking
                this.allowsubmitForm();
              }
            } else {
              this.presentToast('please select the booking dates');
            }
          }
        }, {
          key: "TimeComparisionFun",
          value: function TimeComparisionFun(dayFilter) {
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
            var s = this.checkStart.split(" ")[0].split("-"),
                stD = new Date(this.checkStart.replace(/-/g, "/"));
            var e = this.checkEnd.split(" ")[0].split("-"),
                etD = new Date(this.checkEnd.replace(/-/g, "/"));
            var current = new Date(this.checkCurrentTime);

            if (dayFilter == "diffDay") {
              if (stD.getTime() === etD.getTime()) {
                //same date
                this.printTimeErrorBoolen = true;
                this.printTimeError = "Start time and end time is same";
                this.presentToast('Start time and end time is same'); // false
              } else if (stD.getTime() > etD.getTime()) {
                //date 1 is newer
                this.printTimeError = "Start Time is greater then End Time";
                this.presentToast('Start Time is greater then End Time');
                this.printTimeErrorBoolen = true; // fasle
              } else if (stD.getTime() < etD.getTime()) {
                //date 1 is newer
                // this.printTimeError="noError"
                this.allowsubmitForm(); // true
              }
            }
          }
        }, {
          key: "allowsubmitForm",
          value: function allowsubmitForm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this4 = this;

              var fileTransfer, random, optionlicenseImg, loading_uploading;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.printTimeErrorBoolen = false;
                      this.sHours = document.querySelector(".s_hours .swiper-slide-active p").textContent;
                      this.sMints = document.querySelector(".s_mints .swiper-slide-active p").textContent;
                      this.sV = document.querySelector(".s_v .swiper-slide-active p").textContent;
                      this.eHours = document.querySelector(".e_hours .swiper-slide-active p").textContent;
                      this.eMints = document.querySelector(".e_mints .swiper-slide-active p").textContent;
                      this.eV = document.querySelector(".e_v .swiper-slide-active p").textContent;
                      this.document_oneError = false;

                      if (!(this.start_date != '' && this.end_date != '' && this.document_one != null && this.document_one != "" && this.availableDate == false)) {
                        _context.next = 26;
                        break;
                      }

                      this.sHours = document.querySelector(".s_hours .swiper-slide-active p").textContent;
                      this.sMints = document.querySelector(".s_mints .swiper-slide-active p").textContent;
                      this.sV = document.querySelector(".s_v .swiper-slide-active p").textContent;
                      this.eHours = document.querySelector(".e_hours .swiper-slide-active p").textContent;
                      this.eMints = document.querySelector(".e_mints .swiper-slide-active p").textContent;
                      this.eV = document.querySelector(".e_v .swiper-slide-active p").textContent; //var licenseImg = this.document_one.split(',')[1];

                      fileTransfer = this.transfer.create();
                      random = new Date().getTime();
                      optionlicenseImg = {
                        fileKey: 'photo',
                        fileName: 'licenseImg_' + '_' + random + '.jpeg',
                        chunkedMode: false,
                        httpMethod: 'post',
                        params: {
                          image: 'YPOP'
                        }
                      };
                      _context.next = 20;
                      return this.loadingController.create({
                        cssClass: 'ionloading',
                        message: 'Uploading images...'
                      });

                    case 20:
                      loading_uploading = _context.sent;
                      _context.next = 23;
                      return loading_uploading.present();

                    case 23:
                      fileTransfer.upload(this.document_one, 'https://app.transusdrives.com/webservices/upload_license_image', optionlicenseImg).then(function (data) {
                        loading_uploading.dismiss();
                        var img1 = JSON.parse(data.response);

                        if (img1.status == "success") {
                          _this4.imgLicense = img1.message;

                          _this4.continueBooking();
                        } else {
                          alert("Error in image uploading");
                        }
                      }, function (err) {
                        loading_uploading.dismiss();
                        console.log(err);
                      }); // }

                      _context.next = 27;
                      break;

                    case 26:
                      if (this.start_date == '') {
                        this.presentToast('please select the booking dates');
                      } else if (this.end_date == '') {
                        this.presentToast('please select the booking dates');
                      } else if (this.document_one == '') {
                        this.document_oneError = true;
                      } // this.presentToast('please select the booking dates')


                    case 27:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "continueBooking",
          value: function continueBooking() {
            var _this5 = this;

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
            this.present(); // this.ShowLoading= true;

            this.restService.bookings(stringy).subscribe(function (response) {
              _this5.response = JSON.parse(response['_body']);

              if (_this5.response.status == 'error') {
                _this5.presentToast(_this5.response.message);
              } else if (_this5.response.status == 'success') {
                _this5.presentToast(_this5.response.msg);

                _this5.document_one = '';
                var myData = JSON.stringify({
                  booking_details: _this5.response.booking_details,
                  vehicle_imgs: _this5.response.vehicle_imgs
                });

                _this5.router.navigate(['/summary'], {
                  queryParams: {
                    value: myData
                  }
                });
              }

              _this5.dismiss();
            }, function (err) {
              _this5.dismiss();
            });
          }
        }, {
          key: "slidePrev",
          value: function slidePrev() {
            this.start_month_index--;

            if (this.start_month_index < 1) {
              this.currentYear = this.currentYear - 1;
              this.start_month_index = 12;
            }

            this.start_date_month = this.monthList(this.start_month_index);
            this.startmonthCounter = this.start_month_index;
            this.validateStartDate(); // this.startSlides.slidePrev();
          }
        }, {
          key: "slideNext",
          value: function slideNext() {
            this.start_month_index++;

            if (this.start_month_index == 13) {
              this.currentYear = this.currentYear + 1;
              this.start_month_index = 1;
            }

            this.start_date_month = this.monthList(this.start_month_index);
            this.startmonthCounter = this.start_month_index;
            this.validateStartDate(); // this.startSlides.slideNext();
          }
        }, {
          key: "slidePrev2",
          value: function slidePrev2() {
            this.end_month_index--;

            if (this.end_month_index < 1) {
              this.currentYearTwo = this.currentYearTwo - 1;
              this.end_month_index = 12;
            }

            this.end_date_month = this.monthList(this.end_month_index);
            this.endmonthCounter = this.end_month_index;
            this.validateEndDate(); // end_month_index 
            // this.endSlides.slidePrev();
          }
        }, {
          key: "slideNext2",
          value: function slideNext2() {
            this.end_month_index++;

            if (this.end_month_index == 13) {
              this.currentYearTwo = this.currentYearTwo + 1;
              this.end_month_index = 1;
            }

            this.end_date_month = this.monthList(this.end_month_index);
            this.endmonthCounter = this.end_month_index;
            this.validateEndDate(); // this.endSlides.slideNext();
          }
        }, {
          key: "validateStartDate",
          value: function validateStartDate() {
            var _this6 = this;

            setTimeout(function () {
              var _a, _b, _c, _d;

              _this6.dateError = true;
              _this6.dateStartError = false;
              /**** end date ****/

              _this6.active_end_date = (_a = document.querySelector(".end_date .activeEndState")) === null || _a === void 0 ? void 0 : _a.textContent;
              var cEndDate = (_b = new Date(_this6.currentYear, _this6.endmonthCounter - 1, _this6.active_end_date)) === null || _b === void 0 ? void 0 : _b.getTime();
              /**** end date ****/

              _this6.active_start_date = (_c = document.querySelector(".start_date .activeState")) === null || _c === void 0 ? void 0 : _c.textContent;
              var cDate = (_d = new Date(_this6.currentYear, _this6.startmonthCounter - 1, _this6.active_start_date)) === null || _d === void 0 ? void 0 : _d.getTime();
              var sDate = new Date(_this6.db_start_date).setHours(0, 0, 0, 0);
              var eDate = new Date(_this6.db_end_date).setHours(0, 0, 0, 0);

              if (cDate >= sDate && cDate < eDate) {
                _this6.dateError = false;
              } else {
                _this6.dateError = true;
              }

              if (cDate >= cEndDate && _this6.dateError == false) {
                _this6.dateStartError = true; //this.validateEndDate();
              }
            }, 300);
          }
        }, {
          key: "validateEndDate",
          value: function validateEndDate() {
            var _this7 = this;

            setTimeout(function () {
              var _a, _b;

              _this7.dateError = true;
              _this7.dateStartError = false;
              _this7.active_start_date = (_a = document.querySelector(".start_date .activeState")) === null || _a === void 0 ? void 0 : _a.textContent;
              var cStartDate = new Date(_this7.currentYear, _this7.startmonthCounter - 1, _this7.active_start_date).getTime();
              _this7.active_end_date = (_b = document.querySelector(".end_date .activeEndState")) === null || _b === void 0 ? void 0 : _b.textContent;
              var cDate = new Date(_this7.currentYear, _this7.endmonthCounter - 1, _this7.active_end_date).getTime();
              var sDate = new Date(_this7.db_start_date).setHours(0, 0, 0, 0);
              var eDate = new Date(_this7.db_end_date).setHours(0, 0, 0, 0);

              if (cDate > sDate && cDate <= eDate) {
                _this7.dateError = false;
              } else {
                _this7.dateError = true;
              }

              if (cStartDate >= cDate && _this7.dateError == false) {
                _this7.dateStartError = true;
              }
            }, 300);
          }
        }, {
          key: "monthList",
          value: function monthList(param) {
            //param = parseInt(param)+1;
            if (param == 1) {
              this.month = 'January';
            } else if (param == 2) {
              this.month = 'February';
            } else if (param == 3) {
              this.month = 'March';
            } else if (param == 4) {
              this.month = 'April';
            } else if (param == 5) {
              this.month = 'May';
            } else if (param == 6) {
              this.month = 'June';
            } else if (param == 7) {
              this.month = 'July';
            } else if (param == 8) {
              this.month = 'August';
            } else if (param == 9) {
              this.month = 'September';
            } else if (param == 10) {
              this.month = 'October';
            } else if (param == 11) {
              this.month = 'November';
            } else if (param == 12) {
              this.month = 'December';
            }

            return this.month;
          }
        }, {
          key: "uploadDocument",
          value: function uploadDocument() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this8 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertCtrl.create({
                        message: 'Upload your driving license ID',
                        buttons: [{
                          text: 'Take image from camera',
                          handler: function handler() {
                            _this8.takeImageFromCamera();
                          }
                        }, {
                          text: 'Upload image from gallery',
                          handler: function handler() {
                            _this8.getImageFromGallery();
                          }
                        }]
                      });

                    case 2:
                      alert = _context2.sent;
                      alert.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "takeImageFromCamera",
          value: function takeImageFromCamera() {
            var _this9 = this;

            this.imageService.selectImageInCamera().then(function (imageData) {
              _this9.document_one = "data:image/png;base64,".concat(imageData);
            })["catch"](function (err) {
              return console.error(err);
            });
          }
        }, {
          key: "getImageFromGallery",
          value: function getImageFromGallery() {
            var _this10 = this;

            var options = {
              maximumImagesCount: 1,
              outputType: 1
            };
            this.imagePicker.getPictures(options).then(function (imageData) {
              _this10.document_one = "data:image/png;base64,".concat(imageData);
            }, function (err) {
              console.log('imagepicker  now:', err);
            });
          }
        }, {
          key: "goToSummary",
          value: function goToSummary() {
            this.router.navigate(['/summary']);
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
                        message: 'Please wait...'
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
          }
        }, {
          key: "presentToast",
          value: function presentToast(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var toast;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.toastController.create({
                        message: msg,
                        duration: 2000,
                        position: 'top'
                      });

                    case 2:
                      toast = _context5.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "onChange",
          value: function onChange(event) {
            alert('on change called'); //this.getStartHoures();
          }
        }, {
          key: "newDate",
          value: function newDate(ev) {
            var _this11 = this;

            var _a, _b, _c, _d, _e, _f, _g, _h;

            console.log("custom date range", this.optionsRange);

            if (!this.olddateRange) {
              this.olddateRange = this.dateRange;
            } else {
              if (this.olddateRange == this.dateRange) {
                this.dateRange = null;
                this.olddateRange = null;
              } else {
                this.olddateRange = this.dateRange;
              }
            }

            var ddff = moment__WEBPACK_IMPORTED_MODULE_10__((_a = this.dateRange) === null || _a === void 0 ? void 0 : _a.from);
            var df = ddff.format('YYYY-MM-DD');
            var dd = moment__WEBPACK_IMPORTED_MODULE_10__((_b = this.dateRange) === null || _b === void 0 ? void 0 : _b.to);
            var d = dd.format('YYYY-MM-DD');
            this.start_date = df;
            this.end_date = d; // -- Counting days differnce between two dates --  by moaviz//

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
            var daysDiffrence = moment__WEBPACK_IMPORTED_MODULE_10__(EndTime.replace(/-/g, "/")).diff(moment__WEBPACK_IMPORTED_MODULE_10__(StartTime.replace(/-/g, "/")), 'days'); // -- Counting days differnce between two dates --  by moaviz//

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
            } else {
              this.availableDate = false;
              this.errorMsgs = "Car is already booked in these dates.";
              var stringy = JSON.stringify({
                "requestType": 'checking_dates',
                "vehicleID": this.vehicle_id,
                "startDate": this.start_date,
                "endDate": this.end_date
              }); // this.ShowLoading= true;

              this.restService.bookings(stringy).subscribe(function (response) {
                _this11.response = JSON.parse(response['_body']);

                if (_this11.response.status == 'error') {
                  _this11.availableDate = true;
                } else if (_this11.response.status == 'success') {
                  _this11.availableDate = false;
                }
              }, function (err) {
                alert('error');
              });
            } // -- Counting days differnce between two dates --  by moaviz//

          }
        }, {
          key: "getDifferenceInDays",
          value: function getDifferenceInDays(startDate, endDate) {
            var diffInMs = Math.abs(endDate - startDate);
            return diffInMs / (1000 * 60 * 60 * 24);
          }
        }, {
          key: "monthListFormte",
          value: function monthListFormte(dates) {
            var dateIndex = dates.split('-');
            var param = dateIndex[1];

            if (param == 1) {
              this.month = 'January';
            } else if (param == 2) {
              this.month = 'February';
            } else if (param == 3) {
              this.month = 'March';
            } else if (param == 4) {
              this.month = 'April';
            } else if (param == 5) {
              this.month = 'May';
            } else if (param == 6) {
              this.month = 'June';
            } else if (param == 7) {
              this.month = 'July';
            } else if (param == 8) {
              this.month = 'August';
            } else if (param == 9) {
              this.month = 'September';
            } else if (param == 10) {
              this.month = 'October';
            } else if (param == 11) {
              this.month = 'November';
            } else if (param == 12) {
              this.month = 'December';
            }

            return dateIndex[2] + " " + this.month + " " + dateIndex[0];
          }
        }]);

        return CarBookingPage;
      }();

      CarBookingPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: _rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _cameraimage_service__WEBPACK_IMPORTED_MODULE_4__["CameraimageService"]
        }, {
          type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__["ImagePicker"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]
        }, {
          type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__["FileTransfer"]
        }];
      };

      CarBookingPage.propDecorators = {
        startSlides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['startSlides']
        }],
        endSlides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['endSlides']
        }]
      };
      CarBookingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-car-booking',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./car-booking.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/car-booking/car-booking.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./car-booking.page.scss */
        "./src/app/car-booking/car-booking.page.scss"))["default"]]
      })], CarBookingPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=car-booking-car-booking-module-es5.js.map