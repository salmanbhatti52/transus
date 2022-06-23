(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["car-documents-car-documents-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/car-documents/car-documents.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/car-documents/car-documents.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCarDocumentsCarDocumentsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [class.ios-headers]=\"plateformCheck == 'ios'\">\n  <ion-toolbar>\n    <ion-buttons [class.back_button]=\"plateformCheck == 'ios'\" slot=\"start\">\n      <img src=\"assets/img/Arrow.svg\" (click)=\"goToHome()\">\n    </ion-buttons>\n    <ion-title [class.globe_title]=\"plateformCheck == 'ios'\">List your car</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"list_1\">\n\n    <ion-row>\n      <ion-col>\n        <h3>Documents</h3>\n        <p class=\"upload_images\">Upload Road Worthy and Insurance documents</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-row>\n          <ion-col size=\"12\" class=\"list_9\" (click)=\"showPopup(4)\"\n            *ngIf=\"document_four =='' || document_four ==undefined\">\n            <img src=\"assets/img/Menu_Plus.svg\">\n            <p>Road Worthy</p>\n          </ion-col>\n          <ion-col size=\"12\" class=\"real_image_2\" (click)=\"showPopup(4)\" *ngIf=\"document_four\">\n            <img src=\"{{document_four}}\">\n          </ion-col>\n          <span *ngIf=\"document_fourError\" class=\"error ion-padding\">\n            Document is required.\n          </span>\n        </ion-row>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-row>\n          <ion-col size=\"12\" class=\"list_9\" (click)=\"showPopup(5)\"\n            *ngIf=\"document_five =='' || document_five ==undefined\">\n            <img src=\"assets/img/Menu_Plus.svg\">\n            <p>Insurance</p>\n          </ion-col>\n          <ion-col size=\"12\" class=\"real_image_2\" (click)=\"showPopup(5)\" *ngIf=\"document_five\">\n            <img src=\"{{document_five}}\">\n          </ion-col>\n          <span *ngIf=\"document_fiveError\" class=\"error ion-padding\">\n            Document is required.\n          </span>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h3>Owner’s Details</h3>\n      </ion-col>\n    </ion-row>\n\n\n\n    <ion-row>\n      <ion-col>\n        <ion-textarea rows=\"6\" placeholder=\"About\" [(ngModel)]=\"about\" class=\"list_3\" (ionBlur)=\"validateForm()\">\n        </ion-textarea>\n        <span *ngIf=\"aboutError\" class=\"error ion-padding\">\n          about is required.\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-select placeholder=\"Lives\" [(ngModel)]=\"Lives\" (ionBlur)=\"validateForm()\">\n          <ion-select-option value=\"{{p.id}}\" *ngFor=\"let p of countries; let i = index\">{{p.name}}</ion-select-option>\n        </ion-select>\n        <span *ngIf=\"LivesError\" class=\"error ion-padding\">\n          Lives is required.\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-input placeholder=\"Work\" [(ngModel)]=\"work\" class=\"input_list\" (ionBlur)=\"validateForm()\"></ion-input>\n        <span *ngIf=\"workError\" class=\"error ion-padding\">\n          Work is required.\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-select placeholder=\"Language\" [(ngModel)]=\"Language\" (ionBlur)=\"validateForm()\">\n          <ion-select-option value=\"{{p.languages_id}}\" *ngFor=\"let p of languages; let i = index\">{{p.name}}\n          </ion-select-option>\n        </ion-select>\n        <span *ngIf=\"LanguageError\" class=\"error ion-padding\">\n          Language is required.\n        </span>\n      </ion-col>\n    </ion-row>\n\n\n\n\n\n    <!-- <ion-row>\n      <ion-col>\n        <h3>Location Info</h3>\n      </ion-col>\n    </ion-row> -->\n    <!-- <ion-row>\n      <ion-col class=\"list_4\">\n        <ion-row>\n          <ion-col size=\"1\">\n            <div class=\"list_7\"></div>\n            <div class=\"list_5\"></div>\n            <div class=\"list_8\"></div>\n          </ion-col>\n          <ion-col size=\"11\">\n            <span (click)=\"goToLocation()\">Pickup</span>\n            <p class=\"list_6\" (click)=\"goToLocation()\">{{pickup}}</p>\n            <span (click)=\"goToLocation()\">Dropoff</span>\n            <p (click)=\"goToLocation()\">{{dropoff}}</p>\n          </ion-col>\n        </ion-row>\n        <span *ngIf=\"RouteError\" class=\"error ion-padding\">\n          Route is required.\n        </span>\n      </ion-col>\n    </ion-row> -->\n\n\n\n\n\n    <ion-row>\n      <ion-col>\n        <!-- <h3>Charges Info - ({{currency_symbol}})</h3> -->\n\n        <h3>Price per day </h3>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-input type=\"number\" pattern=\"[0-9]*\" inputmode=\"numeric\" placeholder=\"Charges/day\" class=\"input_list\"\n          [(ngModel)]=\"ChargesInfo\" (ionBlur)=\"validateForm()\"></ion-input>\n        <span *ngIf=\"ChargesInfoError\" class=\"error ion-padding\">\n          Price per day is required.\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h3>Availability Calender</h3>\n        <p class=\"upload_images left_4\">Start Date</p>\n      </ion-col>\n    </ion-row>\n  </div>\n  <!-- <div class=\"calender_slider\">\n    <ion-row>\n      <ion-col size=\"3\" class=\"ion-text-right\">\n        <img src=\"assets/img/left.svg\" (click)=\"slidePrev()\">\n      </ion-col>\n      <ion-col size=\"6\" class=\"ion-text-center\">\n        <h4 class=\"SFUIText-HeavyItalic calender_slider_text dark_p_color\">{{start_date_month}} , {{currentYear}}</h4>\n      </ion-col>\n      <ion-col size=\"3\" class=\"ion-text-left\">\n        <img src=\"assets/img/right.svg\" (click)=\"slideNext()\">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-slides class=\"start_date\" [options]=\"option1\" #startSlides>\n          <ion-slide class=\"dark_p_color\" *ngFor=\"let i of days\" (click)=\"getStartIndex(i)\">\n            <span *ngIf=\"i<=9\" [class.activeState]=\"sliderStartBoolean == i\">{{i}}</span>\n            <span *ngIf=\"i>9\" class=\"num\" [class.activeState]=\"sliderStartBoolean == i\">{{i}}</span>\n          </ion-slide>\n\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class=\"list_1\">\n    <ion-row>\n      <ion-col>\n        <p class=\"upload_images left_4\">End Date</p>\n      </ion-col>\n    </ion-row>\n  </div> -->\n  <!--\n  <div class=\"calender_slider\">\n    <ion-row>\n      <ion-col size=\"3\" class=\"ion-text-right\">\n        <img src=\"assets/img/left.svg\" (click)=\"slidePrev2()\">\n      </ion-col>\n      <ion-col size=\"6\" class=\"ion-text-center\">\n        <h4 class=\"SFUIText-HeavyItalic calender_slider_text dark_p_color\">{{end_date_month}} , {{currentYearTwo}}</h4>\n      </ion-col>\n      <ion-col size=\"3\" class=\"ion-text-left\">\n        <img src=\"assets/img/right.svg\" (click)=\"slideNext2()\">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-slides class=\"end_date\" [options]=\"option1\" #endSlides>\n          <ion-slide class=\"dark_p_color\" *ngFor=\"let i of days\" (click)=\"getEndIndex(i)\">\n            <span *ngIf=\"i<=9\" [class.activeEndState]=\"sliderEndBoolean == i\">{{i}}</span>\n            <span *ngIf=\"i>9\" class=\"num\" [class.activeEndState]=\"sliderEndBoolean == i\">{{i}}</span>\n          </ion-slide>\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n  </div> -->\n\n  <div class=\"calender_slider\">\n    <ion-calendar (click)=\"newDate()\" [(ngModel)]=\"dateRange\" (onChange)=\"onChange($event)\" [type]=\"type\"\n      [options]=\"optionsRange\" [disabled]=false [format]=\"'YYYY-MM-DD'\">\n    </ion-calendar>\n  </div>\n  <p *ngIf=\"dateStartError\" class=\"error ion-padding ion-text-center sz\" style=\"padding: 0px;\">\n    End Date Cannot be smaller then Start Date\n  </p>\n  <ion-row>\n    <ion-col>\n      <span *ngIf=\"fieldMissing\" class=\"error ion-padding ion-text-center\">\n        Please fill all the required fields.\n      </span>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"btn_footer\">\n    <ion-col size=\"2\"></ion-col>\n    <ion-col size=\"8\">\n      <ion-button color=\"primary\" expand=\"block\" shape=\"round\" (click)=\"uploadDocuments()\">Done</ion-button>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n\n\n\n<div [hidden]=\"popupHidden\" style=\"    height: 100%;\nwidth: 100%;\nbackground-color: rgb(0 0 0 / 68%);\nposition: absolute;\">\n\n  <div style=\"left: 10%;\n  position: absolute;\n  top: 40%;\n  width: 80%;\n  height: 160px;\n  background-color: rgb(255, 255, 255);\n  border-radius: 20px;\">\n\n    <ion-row>\n      <ion-col style=\"padding-top: 10 px; padding-right: 10px;\n  text-align: right;\">\n        <img style=\"    height: 10px;\n        width: 10px;\n        margin-right: 4px;\n        margin-top: 8px;\" src=\"assets/img/close_black.svg\" (click)=\"hidePopup()\">\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row style=\"margin-top: -4px;\">\n      <ion-col (click)=\"CameraSelected()\" style=\"\n    text-align: center;\">\n        <img style=\"height: 50px;\n      width: 50px;\" src=\"assets/img/camera.svg\">\n        <p>Camera</p>\n\n      </ion-col>\n      <ion-col (click)=\"GalerySelected()\" style=\"\n    text-align: center;\">\n        <img style=\"height: 50px;\n      width: 50px;\" src=\"assets/img/gallery.svg\">\n        <p>Gallery</p>\n\n      </ion-col>\n    </ion-row>\n\n  </div>\n\n</div>\n";
      /***/
    },

    /***/
    "./src/app/car-documents/car-documents-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/car-documents/car-documents-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: CarDocumentsPageRoutingModule */

    /***/
    function srcAppCarDocumentsCarDocumentsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarDocumentsPageRoutingModule", function () {
        return CarDocumentsPageRoutingModule;
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


      var _car_documents_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./car-documents.page */
      "./src/app/car-documents/car-documents.page.ts");

      var routes = [{
        path: '',
        component: _car_documents_page__WEBPACK_IMPORTED_MODULE_3__["CarDocumentsPage"]
      }];

      var CarDocumentsPageRoutingModule = /*#__PURE__*/_createClass(function CarDocumentsPageRoutingModule() {
        _classCallCheck(this, CarDocumentsPageRoutingModule);
      });

      CarDocumentsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CarDocumentsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/car-documents/car-documents.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/car-documents/car-documents.module.ts ***!
      \*******************************************************/

    /*! exports provided: CarDocumentsPageModule */

    /***/
    function srcAppCarDocumentsCarDocumentsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarDocumentsPageModule", function () {
        return CarDocumentsPageModule;
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


      var _car_documents_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./car-documents-routing.module */
      "./src/app/car-documents/car-documents-routing.module.ts");
      /* harmony import */


      var _car_documents_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./car-documents.page */
      "./src/app/car-documents/car-documents.page.ts");
      /* harmony import */


      var ion2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ion2-calendar */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/index.js");
      /* harmony import */


      var ion2_calendar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_7__);

      var CarDocumentsPageModule = /*#__PURE__*/_createClass(function CarDocumentsPageModule() {
        _classCallCheck(this, CarDocumentsPageModule);
      });

      CarDocumentsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _car_documents_routing_module__WEBPACK_IMPORTED_MODULE_5__["CarDocumentsPageRoutingModule"], ion2_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"]],
        declarations: [_car_documents_page__WEBPACK_IMPORTED_MODULE_6__["CarDocumentsPage"]]
      })], CarDocumentsPageModule);
      /***/
    },

    /***/
    "./src/app/car-documents/car-documents.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/car-documents/car-documents.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCarDocumentsCarDocumentsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3em 0.1em 8px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n}\n\n.error {\n  color: red;\n}\n\n.real_image {\n  padding: 0px;\n}\n\n.real_image img {\n  width: 100%;\n  height: 100px;\n}\n\n.real_image_2 {\n  padding: 0px;\n}\n\n.real_image_2 img {\n  width: 150px;\n  height: 164px;\n}\n\n.list_1 {\n  padding: 0em 1em;\n}\n\n.list_1 h3 {\n  margin: 0px;\n  margin-top: 0.5em;\n}\n\n.left_4 {\n  margin-left: 0.7em !important;\n}\n\n.input_list {\n  border: 1px solid #d4dce1;\n  background: #F7F8FA;\n  border-radius: 28px;\n  font-size: 13px;\n  color: #000;\n  --placeholder-color: #b2b2b4;\n  --padding-bottom: 1.5em;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n}\n\n.upload_images {\n  color: #C4932F;\n  font-size: 12px;\n  margin: 5px 0px;\n}\n\n.list_2 {\n  text-align: center;\n  background: #F7F8FA;\n  border: 1px dashed #D4DCE1;\n  border-radius: 10px;\n  padding: 2.5em 0em;\n}\n\n.list_9 {\n  text-align: center;\n  background: #F7F8FA;\n  border: 1px dashed #D4DCE1;\n  border-radius: 10px;\n  padding: 3.7em 0em 2.5em 0em;\n  height: 163px;\n}\n\n.list_9 p {\n  color: #d2d6d8;\n  font-size: 12px;\n  margin: 0px;\n  margin-top: 8px;\n}\n\n.list_3 {\n  background: #F7F8FA;\n  border: 1px solid #D4DCE1;\n  border-radius: 10px;\n  color: #000;\n  --placeholder-color: #b2b2b4;\n  font-size: 13px;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n}\n\n.btn_footer {\n  margin: 0.7em 0em 1em 0em;\n}\n\nion-slide span {\n  border: 1px solid #000;\n  border-radius: 22px;\n  padding: 8px 14px;\n  margin-left: 1em;\n}\n\n.num {\n  padding: 9px 10px !important;\n}\n\n.calender_slider {\n  background: #F7F8FA;\n  padding: 0.6em 0em;\n}\n\n.calender_slider_text {\n  margin: 0px;\n  position: relative;\n  top: -2px;\n  font-size: 18px;\n}\n\nion-slide {\n  margin-left: 0.6em;\n}\n\nion-slide:first-child {\n  margin-left: 0em;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n}\n\n.btn_footer {\n  padding: 0.5em 1em 1.2em 1em;\n}\n\n.info {\n  background: #6E6D6D;\n  padding: 0.4em 0em;\n}\n\n.info p {\n  margin: 0px;\n  color: #fff;\n  font-size: 10px;\n}\n\nion-select {\n  background: #F7F8FA;\n  border: 1px solid #D4DCE1;\n  border-radius: 30px;\n  --placeholder-color: #b2b2b4;\n  color: #000;\n  font-size: 13px;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n  --padding-bottom: 1.5em;\n  --padding-end: 1.5em;\n}\n\n.list_4 {\n  background: #F7F8FA;\n  border: 1px solid #D4DCE1;\n  border-radius: 12px;\n  color: #D4DCE1;\n  font-size: 13px;\n}\n\n.list_4 p {\n  margin: 0px;\n  color: #000;\n}\n\n.list_5 {\n  border-left: 1px dashed #c7c7c7;\n  height: 48px;\n  float: right;\n  margin-top: 12px;\n}\n\n.list_6 {\n  margin-bottom: 2em !important;\n}\n\n.list_7 {\n  height: 10px;\n  background: green;\n  width: 10px;\n  float: right;\n  position: relative;\n  right: 5px;\n  border-radius: 50%;\n  margin-top: 3px;\n}\n\n.list_8 {\n  height: 10px;\n  background: red;\n  width: 10px;\n  float: right;\n  position: relative;\n  right: 5px;\n  border-radius: 50%;\n}\n\n.activeState {\n  background: #c4932f;\n  border: 1px solid #c4932f !important;\n  color: #fff !important;\n}\n\n.activeEndState {\n  background: #c4932f;\n  border: 1px solid #c4932f !important;\n  color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyLWRvY3VtZW50cy9jYXItZG9jdW1lbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksd0JBQUE7SUFDQSxxQkFBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0FBQUo7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQUVKOztBQUFBO0VBQ0ksWUFBQTtBQUdKOztBQURBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFJSjs7QUFGQTtFQUNJLGdCQUFBO0FBS0o7O0FBSEE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUFNSjs7QUFKQTtFQUNJLDZCQUFBO0FBT0o7O0FBTEE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBUUo7O0FBTkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFTSjs7QUFQQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFVSjs7QUFSQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0FBV0o7O0FBVEE7RUFFSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBV0o7O0FBVEE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQVlKOztBQVZBO0VBQ0kseUJBQUE7QUFhSjs7QUFYQTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBY0o7O0FBWkE7RUFDSSw0QkFBQTtBQWVKOztBQWJBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQWdCSjs7QUFkQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBaUJKOztBQWZBO0VBQ0ksa0JBQUE7QUFrQko7O0FBaEJBO0VBQ0ksZ0JBQUE7QUFtQko7O0FBakJBO0VBQ0ksdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBb0JKOztBQWxCQTtFQUNJLDRCQUFBO0FBcUJKOztBQW5CQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUFzQko7O0FBcEJBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBdUJKOztBQXJCQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtBQXdCSjs7QUF0QkE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQXlCSjs7QUF2QkE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQTBCSjs7QUF4QkE7RUFDSSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUEyQko7O0FBekJBO0VBQ0ksNkJBQUE7QUE0Qko7O0FBMUJBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUE2Qko7O0FBM0JBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBOEJKOztBQTVCQTtFQUNJLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtBQStCSjs7QUE3QkE7RUFDSSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7QUFnQ0oiLCJmaWxlIjoic3JjL2FwcC9jYXItZG9jdW1lbnRzL2Nhci1kb2N1bWVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIHBhZGRpbmc6IDAuOGVtIDAuMWVtIDAgMDtcbiAgICAtLWJhY2tncm91bmQ6ICNjNDkzMmY7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLWhlaWdodCA6IDgwMHB4KSB7XG4gICAgaW9uLXRvb2xiYXIge1xuICAgICAgICBwYWRkaW5nOiAzZW0gMC4xZW0gOHB4IDA7XG4gICAgICAgIC0tYmFja2dyb3VuZDogI2M0OTMyZjtcbiAgICB9XG59XG5cbmlvbi10aXRsZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uZXJyb3J7XG4gICAgY29sb3I6cmVkO1xufVxuLnJlYWxfaW1hZ2V7XG4gICAgcGFkZGluZzowcHg7XG59XG4ucmVhbF9pbWFnZSBpbWd7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDBweDtcbn1cbi5yZWFsX2ltYWdlXzJ7XG4gICAgcGFkZGluZzowcHg7XG59XG4ucmVhbF9pbWFnZV8yIGltZ3tcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNjRweDtcbn1cbi5saXN0XzF7XG4gICAgcGFkZGluZzogMGVtIDFlbTtcbn1cbi5saXN0XzEgaDN7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMC41ZW07XG59XG4ubGVmdF80e1xuICAgIG1hcmdpbi1sZWZ0OjAuN2VtICFpbXBvcnRhbnQ7XG59XG4uaW5wdXRfbGlzdHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRkY2UxO1xuICAgIGJhY2tncm91bmQ6ICNGN0Y4RkE7XG4gICAgYm9yZGVyLXJhZGl1czogMjhweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogI2IyYjJiNDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxLjVlbTtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEuNWVtO1xuICAgIC0tcGFkZGluZy10b3A6IDEuNWVtO1xufVxuLnVwbG9hZF9pbWFnZXN7XG4gICAgY29sb3I6I0M0OTMyRjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luOiA1cHggMHB4O1xufVxuLmxpc3RfMntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogI0Y3RjhGQTtcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgI0Q0RENFMTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDIuNWVtIDBlbTtcbn1cbi5saXN0Xzl7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICNGN0Y4RkE7XG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICNENERDRTE7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOjMuN2VtIDBlbSAyLjVlbSAwZW07XG4gICAgaGVpZ2h0OiAxNjNweDtcbn1cbi5saXN0XzkgcHtcbiAgICBcbiAgICBjb2xvcjogI2QyZDZkODtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xufVxuLmxpc3RfM3tcbiAgICBiYWNrZ3JvdW5kOiAjRjdGOEZBO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNENERDRTE7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjYjJiMmI0O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEuNWVtO1xuICAgIC0tcGFkZGluZy10b3A6IDEuNWVtO1xufVxuLmJ0bl9mb290ZXJ7XG4gICAgbWFyZ2luOiAwLjdlbSAwZW0gMWVtIDBlbTtcbn1cbmlvbi1zbGlkZSBzcGFue1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgICBwYWRkaW5nOiA4cHggMTRweDtcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xufVxuLm51bXtcbiAgICBwYWRkaW5nOiA5cHggMTBweCAhaW1wb3J0YW50O1xufVxuLmNhbGVuZGVyX3NsaWRlcntcbiAgICBiYWNrZ3JvdW5kOiAjRjdGOEZBO1xuICAgIHBhZGRpbmc6IDAuNmVtIDBlbTtcbn1cbi5jYWxlbmRlcl9zbGlkZXJfdGV4dHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMnB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cbmlvbi1zbGlkZXtcbiAgICBtYXJnaW4tbGVmdDogMC42ZW07XG59XG5pb24tc2xpZGU6Zmlyc3QtY2hpbGR7XG4gICAgbWFyZ2luLWxlZnQ6IDBlbTtcbn1cbmlvbi1idXR0b257XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMS41ZW07XG4gICAgLS1wYWRkaW5nLXRvcDogMS41ZW07XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuLmJ0bl9mb290ZXJ7XG4gICAgcGFkZGluZzogMC41ZW0gMWVtIDEuMmVtIDFlbTtcbn1cbi5pbmZve1xuICAgIGJhY2tncm91bmQ6ICM2RTZENkQ7XG4gICAgcGFkZGluZzogMC40ZW0gMGVtO1xufVxuLmluZm8gcHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEwcHg7XG59XG5pb24tc2VsZWN0e1xuICAgIGJhY2tncm91bmQ6ICNGN0Y4RkE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Q0RENFMTtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICNiMmIyYjQ7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMS41ZW07XG4gICAgLS1wYWRkaW5nLXRvcDogMS41ZW07XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMS41ZW07XG4gICAgLS1wYWRkaW5nLWVuZDogMS41ZW07XG59XG4ubGlzdF80e1xuICAgIGJhY2tncm91bmQ6ICNGN0Y4RkE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Q0RENFMTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGNvbG9yOiAjRDREQ0UxO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5saXN0XzQgcHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBjb2xvcjojMDAwO1xufVxuLmxpc3RfNXtcbiAgICBib3JkZXItbGVmdDogMXB4IGRhc2hlZCAjYzdjN2M3O1xuICAgIGhlaWdodDogNDhweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbn1cbi5saXN0XzZ7XG4gICAgbWFyZ2luLWJvdHRvbTogMmVtICFpbXBvcnRhbnQ7XG59XG4ubGlzdF83e1xuICAgIGhlaWdodDogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgICB3aWR0aDogMTBweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbi10b3A6IDNweDtcbn1cbi5saXN0Xzh7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICB3aWR0aDogMTBweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmFjdGl2ZVN0YXRle1xuICAgIGJhY2tncm91bmQ6ICNjNDkzMmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M0OTMyZiAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4uYWN0aXZlRW5kU3RhdGV7XG4gICAgYmFja2dyb3VuZDogI2M0OTMyZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzQ5MzJmICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDsgXG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/car-documents/car-documents.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/car-documents/car-documents.page.ts ***!
      \*****************************************************/

    /*! exports provided: CarDocumentsPage */

    /***/
    function srcAppCarDocumentsCarDocumentsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarDocumentsPage", function () {
        return CarDocumentsPage;
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


      var ngx_image_compress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-image-compress */
      "./node_modules/ngx-image-compress/__ivy_ngcc__/fesm2015/ngx-image-compress.js");
      /* harmony import */


      var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/image-picker/ngx */
      "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/locales/zh */
      "./node_modules/@angular/common/locales/zh.js");
      /* harmony import */


      var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");

      Object(_angular_common__WEBPACK_IMPORTED_MODULE_11__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_10___default.a);

      var CarDocumentsPage = /*#__PURE__*/function () {
        function CarDocumentsPage(loadingController, activatedRoute, popoverController, storage, toastController, router, restService, alertCtrl, imageService, menuCtrl, imageCompress, imagePicker, platform, location, navCtrl, transfer) {
          _classCallCheck(this, CarDocumentsPage);

          this.loadingController = loadingController;
          this.activatedRoute = activatedRoute;
          this.popoverController = popoverController;
          this.storage = storage;
          this.toastController = toastController;
          this.router = router;
          this.restService = restService;
          this.alertCtrl = alertCtrl;
          this.imageService = imageService;
          this.menuCtrl = menuCtrl;
          this.imageCompress = imageCompress;
          this.imagePicker = imagePicker;
          this.platform = platform;
          this.location = location;
          this.navCtrl = navCtrl;
          this.transfer = transfer;
          this.option1 = {
            loop: true,
            slidesPerView: 8
          };
          this.document_one = '';
          this.document_two = '';
          this.document_three = '';
          this.document_four = '';
          this.document_five = '';
          this.start_date_month = '';
          this.end_date_month = '';
          this.start_month_index = 1;
          this.end_month_index = 1;
          this.documentBase64 = [];
          this.days = [];
          this.monthCounter = 1;
          this.document_six = '';
          this.document_seven = '';
          this.validation = false;
          this.fieldMissing = false;
          this.endmonthCounter = 1;
          this.active_start_date = 1;
          this.startmonthCounter = 1;
          this.image1 = '';
          this.image2 = '';
          this.image3 = '';
          this.image4 = '';
          this.image5 = '';
          this.image6 = '';
          this.image7 = '';
          this.popupHidden = true;
          this.optionsRange = {
            pickMode: 'range'
          };
          this.invalidDates = ['2021-06-10', '2021-06-13'];
          var month = new Date().getMonth() + 1;
          console.log(month, 'date From Month');
          var getname = this.monthList(month);
          console.log('getmonth from monthlist', getname);
          this.start_date_month = getname;
          this.end_date_month = getname;
          this.end_month_index = month;
          this.startMonthCounter = month;
          this.endMonthCounter = month;
          this.days = Array.from({
            length: 30
          }, function (v, k) {
            return k + 1;
          });
        }

        _createClass(CarDocumentsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            if (this.platform.is('ios')) {
              this.plateformCheck = 'ios';
            } else {
              this.plateformCheck = 'android';
            }

            this.getDropDownData();
            this.storage.get('user_details').then(function (user_details) {
              console.log(user_details);
              _this.userID = user_details.users_id;
              _this.Email = user_details.email;
              _this.about = user_details.about;
              _this.work = user_details.work;
              _this.currencyID = user_details.currencies_id;
              setTimeout(function () {
                _this.Language = user_details.languages_id;
                _this.Lives = user_details.countries_id;
                console.log('ok');
              }, 2000);

              _this.storage.get('base_urls').then(function (base_url) {
                _this.base_url = base_url;

                _this.storage.get('currency_symbol').then(function (currency_symbol) {
                  _this.currency_symbol = currency_symbol;
                });
              });
            });
            this.storage.get('lastVeh').then(function (lastVeh) {
              _this.lastVeh = lastVeh;
            });
            this.currentYear = new Date().getFullYear();
            this.currentYearTwo = new Date().getFullYear();
            this.getStartIndex(1);
            this.getEndIndex(1);
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.storage.get('pickup');

                    case 2:
                      this.pickup = _context.sent;
                      _context.next = 5;
                      return this.storage.get('dropoff');

                    case 5:
                      this.dropoff = _context.sent;
                      _context.next = 8;
                      return this.storage.get('pickuplong');

                    case 8:
                      this.pickuplong = _context.sent;
                      _context.next = 11;
                      return this.storage.get('pickuplat');

                    case 11:
                      this.pickuplat = _context.sent;
                      _context.next = 14;
                      return this.storage.get('dropofflong');

                    case 14:
                      this.dropofflong = _context.sent;
                      _context.next = 17;
                      return this.storage.get('dropofflat');

                    case 17:
                      this.dropofflat = _context.sent;
                      _context.next = 20;
                      return this.storage.get('modelID');

                    case 20:
                      this.Model = _context.sent;
                      _context.next = 23;
                      return this.storage.get('makeID');

                    case 23:
                      this.Make = _context.sent;
                      _context.next = 26;
                      return this.storage.get('licensePlate');

                    case 26:
                      this.LicensePlate = _context.sent;
                      _context.next = 29;
                      return this.storage.get('carImages');

                    case 29:
                      this.uploadedImages = _context.sent;
                      _context.next = 32;
                      return this.storage.get('noOfSeats');

                    case 32:
                      this.Seats = _context.sent;
                      _context.next = 35;
                      return this.storage.get('description');

                    case 35:
                      this.Description = _context.sent;
                      _context.next = 38;
                      return this.storage.get('noOfDoors');

                    case 38:
                      this.Door = _context.sent;
                      _context.next = 41;
                      return this.storage.get('fuelTypeID');

                    case 41:
                      this.Gas = _context.sent;
                      _context.next = 44;
                      return this.storage.get('gearTypeID');

                    case 44:
                      this.GearType = _context.sent;
                      _context.next = 47;
                      return this.storage.get('noOfWheels');

                    case 47:
                      this.wheels = _context.sent;
                      _context.next = 50;
                      return this.storage.get('roofTypeID');

                    case 50:
                      this.Convertable = _context.sent;
                      _context.next = 53;
                      return this.storage.get('otherFeatures');

                    case 53:
                      this.other_features = _context.sent;
                      console.log(this.uploadedImages, 'this.uploadedImagesthis.uploadedImages');

                    case 55:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getStartIndex",
          value: function getStartIndex(i) {
            this.sliderStartBoolean = i;
            console.log(this.sliderEndBoolean, 'nice days start');
            this.validateStartDate();
          }
        }, {
          key: "getEndIndex",
          value: function getEndIndex(i) {
            this.sliderEndBoolean = i;
            console.log(this.sliderEndBoolean, 'nice days ');
            this.validateEndDate();
          }
        }, {
          key: "goToLocation",
          value: function goToLocation() {
            var myData = JSON.stringify({
              location: '/car-documents'
            });
            this.navCtrl.navigateForward('location', {
              queryParams: {
                value: myData
              }
            });
          }
        }, {
          key: "getDropDownData",
          value: function getDropDownData() {
            var _this2 = this;

            var stringy = JSON.stringify({
              requestType: 'list_car_page'
            });
            console.log(stringy);
            this.restService.getDdlData(stringy).subscribe(function (response) {
              _this2.response = JSON.parse(response['_body']);
              _this2.model = _this2.response.model;
              _this2.make = _this2.response.make;
              _this2.fuel_type = _this2.response.fuel_type;
              _this2.gear_type = _this2.response.gear_type;
              _this2.roof_type = _this2.response.roof_type;
              _this2.countries = _this2.response.countries;
              _this2.languages = _this2.response.languages;
              console.log(_this2.response);
            }, function (err) {});
          }
        }, {
          key: "validateForm",
          value: function validateForm() {
            if (this.validation) {
              this.ModelError = false;
              this.MakeError = false;
              this.LicensePlateError = false;
              this.document_oneError = false;
              this.document_twoError = false;
              this.document_threeError = false;
              this.document_sixError = false;
              this.document_sevenError = false;
              this.DoorError = false;
              this.document_fourError = false;
              this.document_fiveError = false;
              this.DescriptionError = false;
              this.SeatsError = false;
              this.GasError = false;
              this.GearTypeError = false;
              this.ConvertableError = false;
              this.wheelsError = false;
              this.other_featuresError = false;
              this.aboutError = false;
              this.LivesError = false;
              this.workError = false;
              this.LanguageError = false;
              this.RouteError = false;
              this.ChargesInfoError = false;
              this.phoneNumError = false;

              if (this.document_four == '' || this.document_four == undefined) {
                this.document_fourError = true;
                return false;
              } else if (this.document_five == '' || this.document_five == undefined) {
                this.document_fiveError = true;
                return false;
              } else if (this.about == '' || this.about == undefined) {
                this.aboutError = true;
                return false;
              } else if (this.Lives == '' || this.Lives == undefined) {
                this.LivesError = true;
                return false;
              } else if (this.work == '' || this.work == undefined) {
                this.workError = true;
                return false;
              } else if (this.Language == '' || this.Language == undefined) {
                this.LanguageError = true;
                return false;
              } else if (this.ChargesInfo == '' || this.ChargesInfo == undefined) {
                this.ChargesInfoError = true;
                return false;
              } else {
                if (this.end_date == '' || this.start_date == '') {
                  this.dateStartError = true;
                  console.log(this.dateStartError);
                  console.log(this.start_date, 'start date');
                  console.log(this.end_date, 'end date');
                } else {
                  console.log(this.start_date, 'start date');
                  console.log(this.end_date, 'end date');
                  return true;
                }
              }
            }
          }
        }, {
          key: "uploadDocuments",
          value: function uploadDocuments() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this3 = this;

              var roadworthy, insurance, fileTransfer, random, optionRoad, optionInsurance, loading_uploading;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.validation = true;

                      if (!(this.validateForm() == true)) {
                        _context3.next = 17;
                        break;
                      }

                      this.fieldMissing = false;
                      roadworthy = this.document_four.split(',')[1];
                      insurance = this.document_five.split(',')[1];
                      fileTransfer = this.transfer.create();
                      random = new Date().getTime();
                      optionRoad = {
                        fileKey: 'photo',
                        fileName: 'imgroadworthy_' + '_' + this.userID + '_' + random + '.jpg',
                        chunkedMode: false,
                        httpMethod: 'post',
                        mimeType: 'image/jpeg',
                        params: {
                          image: 'YPOP'
                        }
                      };
                      optionInsurance = {
                        fileKey: 'photo',
                        fileName: 'imginsurance_' + '_' + this.userID + '_' + random + '.jpg',
                        chunkedMode: false,
                        httpMethod: 'post',
                        mimeType: 'image/jpeg',
                        params: {
                          image: 'YPOP'
                        }
                      };
                      _context3.next = 11;
                      return this.loadingController.create({
                        cssClass: 'ionloading',
                        message: 'Uploading images...'
                      });

                    case 11:
                      loading_uploading = _context3.sent;
                      _context3.next = 14;
                      return loading_uploading.present();

                    case 14:
                      fileTransfer.upload(this.document_four, 'https://app.transusdrives.com/webservices/upload_image', optionInsurance).then(function (data) {
                        console.log(data.response, 'imgInsurenceimgInsurence');
                        var img1 = JSON.parse(data.response);
                        console.log(img1, 'InsurenceimgInsurence');
                        _this3.imgInsurence = img1.message;
                        console.log(_this3.imgInsurence, 'this.imgInsurencethis.imgInsurence');
                        fileTransfer.upload(_this3.document_five, 'https://app.transusdrives.com/webservices/upload_image', optionRoad).then(function (res) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                            var img2;
                            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                              while (1) {
                                switch (_context2.prev = _context2.next) {
                                  case 0:
                                    loading_uploading.dismiss();
                                    console.log(res.response, 'imgRoadworthyimgRoadworthy');
                                    img2 = JSON.parse(res.response);
                                    console.log(img2, 'mgRoadworthymgRoadworthy');
                                    this.imgRoadworthy = img2.message;
                                    console.log(this.imgRoadworthy, 'this.imgRoadworthy this.imgRoadworthy');
                                    this.submitForm();

                                  case 7:
                                  case "end":
                                    return _context2.stop();
                                }
                              }
                            }, _callee2, this);
                          }));
                        }, function (err) {
                          console.log('Error');
                          loading_uploading.dismiss();
                          console.log(err);
                        });
                      }, function (err) {
                        console.log('Error');
                        loading_uploading.dismiss();
                        console.log(err);
                      });
                      _context3.next = 18;
                      break;

                    case 17:
                      this.fieldMissing = true;

                    case 18:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            var _this4 = this;

            this.validation = true;

            if (this.validateForm() == true) {
              this.present();
              this.fieldMissing = false;
              var stringy = JSON.stringify({
                requestType: 'patch_5',
                vehicles_id: localStorage.getItem('vinNumberCarID'),
                road_worthy_img: this.imgRoadworthy,
                insurance_img: this.imgInsurence,
                about: this.about,
                lives: this.Lives,
                work: this.work,
                language: this.Language,
                charges: this.ChargesInfo,
                start_date: this.start_date,
                end_date: this.end_date
              });
              console.log(stringy, 'stringystringystringy');
              this.restService.listYourCarAPI(stringy).subscribe(function (response) {
                _this4.response = JSON.parse(response['_body']);
                console.log(response['_body']); //     alert(response['_body'])

                console.log(_this4.response.status);

                if (_this4.response.status == 'error') {
                  _this4.dismiss();

                  _this4.presentToast(_this4.response.msg);
                } else if (_this4.response.status == 'success') {
                  _this4.presentToast('Documents Added Successfully');

                  _this4.dismiss(); //this.navCtrl.navigateRoot(['/']);


                  _this4.navCtrl.navigateForward('listcar5');
                }
              }, function (err) {
                alert('request error');

                _this4.dismiss();
              });
            } else {
              this.fieldMissing = true;
            }
          }
        }, {
          key: "uploadDocument",
          value: function uploadDocument(param) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.takeImageFromCamera(param);

                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "takeImageFromCamera",
          value: function takeImageFromCamera(param) {
            var _this5 = this;

            var options = {
              maximumImagesCount: 1,
              outputType: 1,
              quality: 90
            };
            this.imagePicker.getPictures(options).then(function (imageData) {
              var base64 = "data:image/png;base64,".concat(imageData); // this.imageCompress.compressFile(base64, 0, 80, 80).then((result) => {

              if (param == 1) {
                _this5.image1 = imageData;
                _this5.document_one = base64;
              } else if (param == 2) {
                _this5.image2 = imageData;
                _this5.document_two = base64;
              } else if (param == 3) {
                _this5.image3 = imageData;
                _this5.document_three = base64;
              } else if (param == 4) {
                _this5.image4 = imageData;
                _this5.document_four = base64;
              } else if (param == 5) {
                _this5.image5 = imageData;
                _this5.document_five = base64;
              } else if (param == 6) {
                _this5.image6 = imageData;
                _this5.document_six = base64;
              } else if (param == 7) {
                _this5.image7 = imageData;
                _this5.document_seven = base64;
              } // });

            }, function (err) {
              console.log('imagepicker  now:', err);
            }); //   }).catch(err => console.error(err));
          }
        }, {
          key: "takeImageFromCameraAli",
          value: function takeImageFromCameraAli(param) {
            var _this6 = this;

            this.imageService.selectImageInCamera().then(function (imageData) {
              var base64 = "data:image/png;base64,".concat(imageData); // this.imageCompress.compressFile(base64, 0, 80, 80).then((result) => {

              if (param == 1) {
                _this6.image1 = imageData;
                _this6.document_one = base64;
              } else if (param == 2) {
                _this6.image2 = imageData;
                _this6.document_two = base64;
              } else if (param == 3) {
                _this6.image3 = imageData;
                _this6.document_three = base64;
              } else if (param == 4) {
                _this6.image4 = imageData;
                _this6.document_four = base64;
              } else if (param == 5) {
                _this6.image5 = imageData;
                _this6.document_five = base64;
              } else if (param == 6) {
                _this6.image6 = imageData;
                _this6.document_six = base64;
              } else if (param == 7) {
                _this6.image7 = imageData;
                _this6.document_seven = base64;
              } // });

            }, function (err) {
              console.log('imagepicker  now:', err);
            }); //   }).catch(err => console.error(err));
          }
        }, {
          key: "validateStartDate",
          value: function validateStartDate() {
            var _this7 = this;

            setTimeout(function () {
              var _a, _b;

              _this7.dateStartError = false;
              /**** end date ****/

              _this7.active_end_date = (_a = document.querySelector('.end_date .activeEndState')) === null || _a === void 0 ? void 0 : _a.textContent;
              var cEndDate = new Date(_this7.currentYear, _this7.endmonthCounter - 1, _this7.active_end_date).getTime();
              /**** end date ****/

              _this7.active_start_date = (_b = document.querySelector('.start_date .activeState')) === null || _b === void 0 ? void 0 : _b.textContent;
              var cDate = new Date(_this7.currentYear, _this7.startmonthCounter - 1, _this7.active_start_date).getTime();

              if (cDate > cEndDate) {
                console.log('start date ');
                _this7.dateStartError = true;
                console.log(_this7.dateStartError); //this.validateEndDate();
              }
            }, 300);
          }
        }, {
          key: "validateEndDate",
          value: function validateEndDate() {
            var _this8 = this;

            setTimeout(function () {
              var _a, _b, _c, _d;

              _this8.dateStartError = false;
              _this8.active_start_date = (_a = document.querySelector('.start_date .activeState')) === null || _a === void 0 ? void 0 : _a.textContent;
              var cStartDate = (_b = new Date(_this8.currentYear, _this8.startmonthCounter - 1, _this8.active_start_date)) === null || _b === void 0 ? void 0 : _b.getTime();
              _this8.active_end_date = (_c = document.querySelector('.end_date .activeEndState')) === null || _c === void 0 ? void 0 : _c.textContent;
              var cDate = (_d = new Date(_this8.currentYear, _this8.endmonthCounter - 1, _this8.active_end_date)) === null || _d === void 0 ? void 0 : _d.getTime();

              if (cStartDate > cDate) {
                console.log('end date ');
                _this8.dateStartError = true;
                console.log(_this8.dateStartError);
              }
            }, 300);
          }
        }, {
          key: "goToHome",
          value: function goToHome() {
            // this.router.navigate(['/listed-car']);
            this.navCtrl.navigateBack(['/list-your-car']); //this.location.back();
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
            this.startMonthCounter = this.start_month_index; // this.startSlides.slidePrev();

            this.validateStartDate();
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
            this.startMonthCounter = this.start_month_index;
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
            this.endMonthCounter = this.end_month_index;
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
            this.endMonthCounter = this.end_month_index;
            this.validateEndDate(); // this.endSlides.slideNext();
          }
        }, {
          key: "monthList",
          value: function monthList(param) {
            // console.log(param);
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
          key: "present",
          value: function present() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.loadingController.create({
                        message: 'Please wait...'
                      });

                    case 2:
                      this.loading = _context6.sent;
                      _context6.next = 5;
                      return this.loading.present();

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.loading.dismiss();

                    case 2:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "onChange",
          value: function onChange(event) {
            console.log(event);
          }
        }, {
          key: "newDate",
          value: function newDate() {
            var _a, _b;

            var ddff = moment__WEBPACK_IMPORTED_MODULE_9__((_a = this.dateRange) === null || _a === void 0 ? void 0 : _a.from);
            var dateStart = ddff.format('YYYY-MM-DD');
            console.log(dateStart);
            this.start_date = dateStart;
            var dd = moment__WEBPACK_IMPORTED_MODULE_9__((_b = this.dateRange) === null || _b === void 0 ? void 0 : _b.to);
            var dateEnd = dd.format('YYYY-MM-DD');
            this.end_date = dateEnd;
            console.log(this.start_date);
            console.log(this.end_date);
          }
        }, {
          key: "showPopup",
          value: function showPopup(val) {
            this.popupHidden = false;
            console.log(val);
            this.popupSelectedVal = val;
          }
        }, {
          key: "hidePopup",
          value: function hidePopup() {
            this.popupHidden = true;
          }
        }, {
          key: "CameraSelected",
          value: function CameraSelected() {
            console.log('popup cal', this.popupSelectedVal);
            this.takeImageFromCameraAli(this.popupSelectedVal);
            this.hidePopup();
          }
        }, {
          key: "GalerySelected",
          value: function GalerySelected() {
            console.log('popup cal', this.popupSelectedVal);
            this.uploadDocument(this.popupSelectedVal);
            this.hidePopup();
          }
        }]);

        return CarDocumentsPage;
      }();

      CarDocumentsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
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
          type: ngx_image_compress__WEBPACK_IMPORTED_MODULE_7__["NgxImageCompressService"]
        }, {
          type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__["ImagePicker"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_12__["FileTransfer"]
        }];
      };

      CarDocumentsPage.propDecorators = {
        startSlides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['startSlides']
        }],
        endSlides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['endSlides']
        }]
      };
      CarDocumentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-car-documents',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./car-documents.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/car-documents/car-documents.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./car-documents.page.scss */
        "./src/app/car-documents/car-documents.page.scss"))["default"]]
      })], CarDocumentsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=car-documents-car-documents-module-es5.js.map