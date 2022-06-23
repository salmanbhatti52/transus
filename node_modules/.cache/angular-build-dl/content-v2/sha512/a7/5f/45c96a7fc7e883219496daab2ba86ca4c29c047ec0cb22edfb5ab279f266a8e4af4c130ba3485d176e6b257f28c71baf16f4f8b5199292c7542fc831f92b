(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mydraftcar-mydraftcar-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/mydraftcar/mydraftcar.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mydraftcar/mydraftcar.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppMydraftcarMydraftcarPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [class.ios-headers]=\"plateformCheck == 'ios'\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <img src=\"assets/img/Menu.svg\" (click)=\"toggleMenu()\" />\n    </ion-buttons>\n    <ion-title [class.globe_title]=\"plateformCheck == 'ios'\">Listed Cars</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"chevron-down-circle-outline\" pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\" refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ng-container *ngIf=\"vehicles_list?.length >0\">\n    <ng-container *ngFor=\"let p of vehicles_list; let i = index\">\n      <!-- <ng-container *ngIf=\"p.vehicle_imgs\"> -->\n      <ion-row class=\"pd_bs\" *ngIf=\"i % 2 === 0\" (click)=\"goToDraftCar(p)\">\n        <ion-col style=\"margin-top: 8px\" size=\"4\" class=\"lambo\">\n          <!--   <h4>{{p.model_name}}</h4> -->\n          <img src=\"assets/img/car_3.svg\" />\n          <!-- <img *ngIf=\"!p.vehicle_imgs\" src=\"assets/img/car_3.svg\" /> -->\n          <!-- <img *ngIf=\"p.vehicle_imgs\" src=\"{{base_url}}{{p.vehicle_imgs[0]}}\" /> -->\n        </ion-col>\n        <ion-col class=\"trip_dates\" size=\"4\">\n          <p style=\"color: red;\">{{p.vehicle_have}}</p>\n\n\n          <p *ngIf=\"p.vin_number\" class=\"primary\">VIN Number</p>\n          <p *ngIf=\"p.vin_number\">{{p.vin_number}}</p>\n          <p class=\"blue\">Trip Dates</p>\n          <p class=\"primary\">Start Date</p>\n          <p>{{p.start_date | customeDate}}</p>\n          <!-- <p class=\"primary\">Charge per day</p>\n          <p style=\"margin-bottom: 27px\">{{symbol}} {{p.charge_per_day}}</p> -->\n          <!-- <div class=\"give_rating list_issue\" (click)=\"editDetail(p)\">\n              Edit Details\n            </div> -->\n        </ion-col>\n        <ion-col class=\"trip_end_date\" size=\"4\">\n          <p class=\"primary\">End Date</p>\n          <p>{{p.end_date | customeDate}}</p>\n\n          <!-- <div *ngIf=\"p.admin_status == 'Approved' \" class=\"give_rating-status-aproved list_issue\">\n              Approved\n            </div>\n            <div *ngIf=\"p.admin_status == 'Pending' \" class=\"give_rating-status-panding list_issue\">\n              Pending\n            </div> -->\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"pd_bs bg_grey\" *ngIf=\"i % 2 != 0\" (click)=\"goToDraftCar(p)\">\n        <ion-col style=\"margin-top: 8px\" size=\"4\" class=\"lambo\">\n          <!-- <h4>{{p.model_name}}</h4> -->\n          <!-- <img src=\"{{base_url}}{{p.vehicle_imgs[0]}}\"> -->\n\n          <img src=\"assets/img/car_3.svg\" />\n          <!-- <img *ngIf=\"!p.vehicle_imgs\" src=\"assets/img/car_3.svg\" />\n          <img *ngIf=\"p.vehicle_imgs\" src=\"{{base_url}}{{p.vehicle_imgs[0]}}\" /> -->\n        </ion-col>\n        <ion-col class=\"trip_dates\" size=\"4\">\n          <p style=\"color: red;\">{{p.vehicle_have}}</p>\n\n          <p class=\"blue\">Trip Dates</p>\n          <p class=\"primary\">Start Date</p>\n          <p>{{p.start_date | customeDate}}</p>\n          <!-- <p class=\"primary\">Charge per day</p>\n          <p style=\"margin-bottom: 27px\">{{symbol}} {{p.charge_per_day}}</p> -->\n          <!-- <div class=\"give_rating list_issue\" (click)=\"editDetail(p)\">\n              Edit Details\n            </div> -->\n        </ion-col>\n        <ion-col class=\"trip_end_date\" size=\"4\">\n          <p class=\"primary\">End Date</p>\n          <p>{{p.end_date | customeDate}}</p>\n\n          <!-- <div *ngIf=\"p.admin_status == 'Approved' \" class=\"give_rating-status-aproved list_issue\">\n              Approved\n            </div>\n            <div *ngIf=\"p.admin_status == 'Pending' \" class=\"give_rating-status-panding list_issue\">\n              Pending\n            </div> -->\n        </ion-col>\n      </ion-row>\n      <!-- </ng-container> -->\n    </ng-container>\n  </ng-container>\n  <ng-container *ngIf=\"vehicles_list?.length == 0\">\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <h2>Data Not Found!</h2>\n      </ion-col>\n    </ion-row>\n  </ng-container>\n  <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/mydraftcar/mydraftcar-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/mydraftcar/mydraftcar-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: MydraftcarPageRoutingModule */

    /***/
    function srcAppMydraftcarMydraftcarRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MydraftcarPageRoutingModule", function () {
        return MydraftcarPageRoutingModule;
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


      var _mydraftcar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./mydraftcar.page */
      "./src/app/mydraftcar/mydraftcar.page.ts");

      var routes = [{
        path: '',
        component: _mydraftcar_page__WEBPACK_IMPORTED_MODULE_3__["MydraftcarPage"]
      }];

      var MydraftcarPageRoutingModule = /*#__PURE__*/_createClass(function MydraftcarPageRoutingModule() {
        _classCallCheck(this, MydraftcarPageRoutingModule);
      });

      MydraftcarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MydraftcarPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/mydraftcar/mydraftcar.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/mydraftcar/mydraftcar.module.ts ***!
      \*************************************************/

    /*! exports provided: MydraftcarPageModule */

    /***/
    function srcAppMydraftcarMydraftcarModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MydraftcarPageModule", function () {
        return MydraftcarPageModule;
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


      var _mydraftcar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./mydraftcar-routing.module */
      "./src/app/mydraftcar/mydraftcar-routing.module.ts");
      /* harmony import */


      var _mydraftcar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./mydraftcar.page */
      "./src/app/mydraftcar/mydraftcar.page.ts");
      /* harmony import */


      var _custome_date_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../custome-date.pipe */
      "./src/app/custome-date.pipe.ts");

      var MydraftcarPageModule = /*#__PURE__*/_createClass(function MydraftcarPageModule() {
        _classCallCheck(this, MydraftcarPageModule);
      });

      MydraftcarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _mydraftcar_routing_module__WEBPACK_IMPORTED_MODULE_5__["MydraftcarPageRoutingModule"]],
        declarations: [_mydraftcar_page__WEBPACK_IMPORTED_MODULE_6__["MydraftcarPage"], _custome_date_pipe__WEBPACK_IMPORTED_MODULE_7__["CustomeDatePipe"]]
      })], MydraftcarPageModule);
      /***/
    },

    /***/
    "./src/app/mydraftcar/mydraftcar.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/mydraftcar/mydraftcar.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppMydraftcarMydraftcarPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3em 0.1em 8px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n  padding-left: 0px;\n}\n\nion-header {\n  margin-bottom: 10px;\n}\n\n.bg_grey {\n  background: #F9F9F9;\n}\n\n.pd_bs {\n  padding: 5px 9px;\n  position: relative;\n}\n\n.lambo h4 {\n  margin: 0px;\n  margin-bottom: 3px;\n  font-size: 16px;\n}\n\n.trip_dates {\n  font-size: 10px;\n  padding-top: 0em;\n  padding-left: 1.3em;\n}\n\n.trip_dates p {\n  margin: 0px;\n  margin-top: 5px;\n}\n\n.blue {\n  color: #1A6BBE;\n}\n\n.primary {\n  color: #C4932F;\n}\n\n.trip_end_date {\n  font-size: 10px;\n  padding-top: 3.2em;\n  padding-left: 1.3em;\n}\n\n.trip_end_date p {\n  margin: 0px;\n  margin-top: 6.4px;\n}\n\n.star img:first-child {\n  margin-left: 0px !important;\n}\n\n.star img {\n  margin-left: 4px;\n}\n\n.give_rating {\n  background: #D93A3A;\n  color: #fff;\n  /* padding: 0.7em; */\n  border-radius: 25px;\n  /* width: 100%; */\n  text-align: center;\n  margin: 0px;\n}\n\n.give_rating-status-aproved {\n  background: #82d93a;\n  color: #fff;\n  /* padding: 0.7em; */\n  border-radius: 25px;\n  /* width: 100%; */\n  text-align: center;\n  position: relative;\n  /* top: 3.6em; */\n  margin: 0px;\n}\n\n.give_rating-status-panding {\n  background: #0d0f0b;\n  color: #fff;\n  padding: 0.7em;\n  border-radius: 25px;\n  width: 100%;\n  text-align: center;\n  position: relative;\n  /* top: 3.6em; */\n  margin: 0px;\n}\n\n.danger {\n  background: #D93A3A;\n  color: #fff;\n  padding: 0.7em;\n  border-radius: 25px;\n  width: 100%;\n  text-align: center;\n  margin: 0px;\n  margin-top: 10px !important;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n}\n\n.list_issue {\n  padding: 7px;\n  position: absolute;\n  bottom: 0px;\n  width: 88%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlkcmFmdGNhci9teWRyYWZ0Y2FyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksd0JBQUE7SUFDQSxxQkFBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxtQkFBQTtBQUVKOztBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUlKOztBQUZBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFLSjs7QUFIQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBTUo7O0FBSkE7RUFDSSxjQUFBO0FBT0o7O0FBTEE7RUFDSSxjQUFBO0FBUUo7O0FBTkE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQVNKOztBQVBBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBVUo7O0FBUkE7RUFDSSwyQkFBQTtBQVdKOztBQVRBO0VBQ0ksZ0JBQUE7QUFZSjs7QUFWQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQWFKOztBQVhBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQWNKOztBQVpBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFlSjs7QUFiQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQWdCSjs7QUFkQTtFQUNJLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQWlCSjs7QUFmQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBa0JKIiwiZmlsZSI6InNyYy9hcHAvbXlkcmFmdGNhci9teWRyYWZ0Y2FyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIHBhZGRpbmc6IDAuOGVtIDAuMWVtIDAgMDtcclxuICAgIC0tYmFja2dyb3VuZDogI2M0OTMyZjtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4taGVpZ2h0IDogODAwcHgpIHtcclxuICAgIGlvbi10b29sYmFyIHtcclxuICAgICAgICBwYWRkaW5nOiAzZW0gMC4xZW0gOHB4IDA7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjYzQ5MzJmO1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24tdGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG59XHJcbmlvbi1oZWFkZXJ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5iZ19ncmV5e1xyXG4gICAgYmFja2dyb3VuZDojRjlGOUY5O1xyXG59XHJcbi5wZF9ic3tcclxuICAgIHBhZGRpbmc6IDVweCA5cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmxhbWJvIGg0e1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLnRyaXBfZGF0ZXN7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMGVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxLjNlbTtcclxufVxyXG4udHJpcF9kYXRlcyBwe1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLmJsdWV7XHJcbiAgICBjb2xvcjojMUE2QkJFO1xyXG59XHJcbi5wcmltYXJ5e1xyXG4gICAgY29sb3I6I0M0OTMyRjtcclxufVxyXG4udHJpcF9lbmRfZGF0ZXtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAzLjJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMS4zZW07XHJcbn1cclxuLnRyaXBfZW5kX2RhdGUgcHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNi40cHg7XHJcbn1cclxuLnN0YXIgaW1nOmZpcnN0LWNoaWxke1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5zdGFyIGltZ3tcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbn1cclxuLmdpdmVfcmF0aW5ne1xyXG4gICAgYmFja2dyb3VuZDogI0Q5M0EzQTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgLyogcGFkZGluZzogMC43ZW07ICovXHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4uZ2l2ZV9yYXRpbmctc3RhdHVzLWFwcm92ZWR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjODJkOTNhO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICAvKiBwYWRkaW5nOiAwLjdlbTsgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8qIHRvcDogMy42ZW07ICovXHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4uZ2l2ZV9yYXRpbmctc3RhdHVzLXBhbmRpbmd7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMGQwZjBiO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAwLjdlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8qIHRvcDogMy42ZW07ICovXHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4uZGFuZ2Vye1xyXG4gICAgYmFja2dyb3VuZDogI0Q5M0EzQTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMC43ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5pb24tYnV0dG9ue1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMS41ZW07XHJcbiAgICAtLXBhZGRpbmctdG9wOiAxLjVlbTtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4ubGlzdF9pc3N1ZXtcclxuICAgIHBhZGRpbmc6IDdweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgd2lkdGg6IDg4JTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/mydraftcar/mydraftcar.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/mydraftcar/mydraftcar.page.ts ***!
      \***********************************************/

    /*! exports provided: MydraftcarPage */

    /***/
    function srcAppMydraftcarMydraftcarPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MydraftcarPage", function () {
        return MydraftcarPage;
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


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../rest.service */
      "./src/app/rest.service.ts");
      /* harmony import */


      var _action_booking_action_booking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../action-booking/action-booking.page */
      "./src/app/action-booking/action-booking.page.ts");

      var MydraftcarPage = /*#__PURE__*/function () {
        function MydraftcarPage(loadingController, popoverController, restService, storage, router, menuCtrl, plateform) {
          _classCallCheck(this, MydraftcarPage);

          this.loadingController = loadingController;
          this.popoverController = popoverController;
          this.restService = restService;
          this.storage = storage;
          this.router = router;
          this.menuCtrl = menuCtrl;
          this.plateform = plateform;
          this.vehicles_list = [];
          this.page_number = 0;
        }

        _createClass(MydraftcarPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.plateform.is('ios')) {
              this.plateformCheck = 'ios';
            } else {
              this.plateformCheck = 'android';
            }
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.storage.get('user_details').then(function (user_details) {
              console.log(user_details);
              _this.userID = user_details.users_id;
              _this.Email = user_details.email;
              _this.symbol = user_details.symbol;

              _this.getCarList(false);

              _this.storage.get('base_urls').then(function (base_url) {
                _this.base_url = base_url;
              });
            });
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            console.log('Begin async operation');
            this.getCarList(false, event, 'refresher');
          }
        }, {
          key: "doInfinite",
          value: function doInfinite(event) {
            this.getCarList(true, event);
          }
        }, {
          key: "getCarList",
          value: function getCarList(isFirstLoad, event, refresher) {
            var _this2 = this;

            var offset = 0;

            if (isFirstLoad == false) {
              this.page_number = offset;
            }

            var stringy = JSON.stringify({
              requestType: 'get_all_draft',
              usersID: this.userID,
              limit: 4,
              offset: this.page_number
            });
            console.log('get  my draft cars------->>', stringy);

            if (!isFirstLoad) {
              this.present();
            }

            this.restService.getyourDraftCarAPI(stringy).subscribe(function (response) {
              if (isFirstLoad == false) {
                _this2.vehicles_list = [];
              }

              console.log('responseresponseresponseresponseresponse', response);
              _this2.response = JSON.parse(response['_body']);
              _this2.vehicles_list = [].concat(_toConsumableArray(_this2.vehicles_list), _toConsumableArray(_this2.response.vehicles_list));
              console.log('responseresponseresponseresponseresponse', _this2.vehicles_list);
              /*  this.vehicles_list =  this.response.vehicles_list; */

              _this2.dismiss();

              if (isFirstLoad) {
                event.target.complete();
              }

              if (event) {
                event.target.complete();
              }

              if (refresher) {
                event.target.complete();
              }

              _this2.page_number = _this2.page_number + 4;

              if (!isFirstLoad) {
                _this2.dismiss();
              }
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "toggleMenu",
          value: function toggleMenu() {
            this.menuCtrl.toggle();
          }
        }, {
          key: "goToCarList",
          value: function goToCarList() {
            //this.router.navigate(['/list-your-car']);
            this.router.navigate(['/listcar1']);
          }
        }, {
          key: "goToDraft",
          value: function goToDraft() {
            //this.router.navigate(['/list-your-car']);
            this.router.navigate(['/mydraftcar']);
          }
        }, {
          key: "editDetail",
          value: function editDetail(booking_details) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var stringy;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.present();
                      stringy = JSON.stringify({
                        requestType: 'check_veh_req',
                        veh_id: booking_details.vehicles_id
                      });
                      console.log(stringy, 'veh_idveh_idveh_idveh_id');
                      this.restService.check_vehicles(stringy).subscribe(function (response) {
                        _this3.response = JSON.parse(response['_body']);

                        _this3.dismiss();

                        console.log(_this3.response.status, 'responseresponseresponse');

                        if (_this3.response.status == 'success') {
                          _this3.popover();
                        } else {
                          var myData = JSON.stringify({
                            booking_details: booking_details
                          });

                          _this3.router.navigate(['/edit-list-your-car'], {
                            queryParams: {
                              value: myData
                            }
                          });
                        }
                      }, function (err) {
                        console.log(err);
                      });
                      console.log(booking_details.vehicles_id, 'detailsssssss');

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "present",
          value: function present() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingController.create({
                        message: 'Please wait...'
                      });

                    case 2:
                      this.loading = _context2.sent;
                      _context2.next = 5;
                      return this.loading.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.loading.dismiss();

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "popover",
          value: function popover() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var popover;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.popoverController.create({
                        component: _action_booking_action_booking_page__WEBPACK_IMPORTED_MODULE_6__["ActionBookingPage"],
                        translucent: true,
                        componentProps: {
                          booking: 'veh_msg'
                        }
                      });

                    case 2:
                      popover = _context4.sent;
                      popover.onWillDismiss().then(function (data) {
                        console.log(data);
                        console.log(data.data.val);

                        if (data.data.val == 'ok') {}
                      });
                      _context4.next = 6;
                      return popover.present();

                    case 6:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          } // goToDraftCar(p) {
          //   console.log('ali', p);
          //   this.storage.set('mycardraft', p)
          //   this.storage.get('mycardraft').then(res => {
          //     console.log('mycardraftmycardraft', res)
          //   })
          // }

        }, {
          key: "goToDraftCar",
          value: function goToDraftCar(p) {
            console.log('ali', p);
            this.storage.set('mycardraft', p);
            this.storage.get('mycardraft').then(function (res) {
              console.log('mycardraft ali', res);
            });
            localStorage.setItem('vinyear', p.year.toString());
            localStorage.setItem('vinmake', p.make_id.toString());
            localStorage.setItem('vinmodel', p.model_id.toString());
            localStorage.setItem('vinmanufacturer', p.manufacturer.toString());
            localStorage.setItem('vinengine', p.engine.toString());
            localStorage.setItem('vintrim', p.trim.toString());
            localStorage.setItem('vintransmission', p.transmission.toString());
            localStorage.setItem('vinNumberCarID', p.vehicles_id.toString());
            localStorage.setItem('vin_number', p.vin_number);

            if (p.draft_level == 1) {
              this.router.navigate(['listcar2draft']);
            } else if (p.draft_level == 2 || p.draft_level == 3) {
              this.router.navigate(['listcar4draft']);
            } else if (p.draft_level == 4) {
              this.router.navigate(['listcar6draft']);
            } else if (p.draft_level == 5) {
              this.router.navigate(['listcar7draft']);
            } else if (p.draft_level == 6) {
              this.router.navigate(['listcar8draft']);
            } else if (p.draft_level == 7) {
              this.router.navigate(['listcar10draft']);
            } else {
              console.log('elseeee');
            }
          }
        }]);

        return MydraftcarPage;
      }();

      MydraftcarPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
        }, {
          type: _rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }];
      };

      MydraftcarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mydraftcar',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./mydraftcar.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/mydraftcar/mydraftcar.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./mydraftcar.page.scss */
        "./src/app/mydraftcar/mydraftcar.page.scss"))["default"]]
      })], MydraftcarPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=mydraftcar-mydraftcar-module-es5.js.map