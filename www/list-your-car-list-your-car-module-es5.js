(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-your-car-list-your-car-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/list-your-car/list-your-car.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-your-car/list-your-car.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppListYourCarListYourCarPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header *ngIf=\"showSlide == 'no'\" [class.ios-headers]=\"plateformCheck == 'ios'\">\r\n  <ion-toolbar>\r\n    <ion-buttons [class.back_button]=\"plateformCheck == 'ios'\" slot=\"start\">\r\n      <img src=\"assets/img/Arrow.svg\" (click)=\"goToHome()\" />\r\n    </ion-buttons>\r\n    <ion-title [class.globe_title]=\"plateformCheck == 'ios'\"\r\n      >List your car</ion-title\r\n    >\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content  *ngIf=\"showSlide == 'no'\">\r\n  <div class=\"list_1\">\r\n    <ion-row>\r\n      <ion-col>\r\n        <p style=\"font-size: 13px; margin: 1em 0em 1em 0em\">\r\n          Enter your info exactly as it appears on your license so we can verify\r\n          your eligibility to drive.\r\n        </p>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <div\r\n          *ngIf=\"document_one =='' || document_one ==undefined\"\r\n          style=\"\r\n            border-radius: 10px;\r\n            width: 100%;\r\n            height: 150px;\r\n            background: #f7f8fa;\r\n            border: 1px dashed #d4dce1;\r\n          \"\r\n          (click)=\"showPopup(1)\"\r\n        >\r\n          <ion-row style=\"margin-top: 45px\">\r\n            <ion-col style=\"text-align: center\">\r\n              <img\r\n                src=\"assets/img/plusblack.png\"\r\n                style=\"height: 20px; width: 20px\"\r\n              />\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col style=\"text-align: center\">\r\n              <p style=\"font-size: 13px; color: #b0b0b0\">License</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div *ngIf=\"document_one\" (click)=\"previewImage()\" class=\"view_btn\">\r\n          <p>View</p>\r\n        </div>\r\n        <img\r\n        *ngIf=\"document_one\"\r\n        style=\"width: 100%; border-radius: 10px; height: 150px\"\r\n        (click)=\"showPopup(1)\"\r\n       \r\n        src=\"{{document_one}}\"\r\n      />\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-input\r\n          placeholder=\"License Plate\"\r\n          [(ngModel)]=\"LicensePlate\"\r\n          class=\"input_list\"\r\n          (keyup)=\"checkingLiNo()\"\r\n          (ionBlur)=\"checkingLiNo()\"\r\n          (ionBlur)=\"validateForm()\"\r\n        >\r\n        </ion-input>\r\n        <span *ngIf=\"LicensePlateUnique\" class=\"error ion-padding\">\r\n          License Plate already exists.\r\n        </span>\r\n        <span *ngIf=\"LicensePlateError\" class=\"error ion-padding\">\r\n          License Plate is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <!--\r\n\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <p class=\"upload_images\">Upload Images</p>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"4\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"list_2\" (click)=\"showPopup(1)\"\r\n            *ngIf=\"document_one =='' || document_one ==undefined\">\r\n            <img src=\"assets/img/plus.svg\">\r\n          </ion-col>\r\n          <ion-col size=\"12\" class=\"real_image\" (click)=\"showPopup(1)\" *ngIf=\"document_one\">\r\n            <img src=\"{{document_one}}\">\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"list_2\" (click)=\"showPopup(2)\"\r\n            *ngIf=\"document_two =='' || document_two ==undefined\">\r\n            <img src=\"assets/img/plus.svg\">\r\n          </ion-col>\r\n          <ion-col size=\"12\" class=\"real_image\" (click)=\"showPopup(2)\" *ngIf=\"document_two\">\r\n            <img src=\"{{document_two}}\">\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"list_2\" (click)=\"showPopup(3)\"\r\n            *ngIf=\"document_three =='' || document_three ==undefined\">\r\n            <img src=\"assets/img/plus.svg\">\r\n          </ion-col>\r\n          <ion-col size=\"12\" class=\"real_image\" (click)=\"showPopup(3)\" *ngIf=\"document_three\">\r\n            <img src=\"{{document_three}}\">\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n      <span *ngIf=\"document_oneError\" class=\"error ion-padding\">\r\n        Document is required.\r\n      </span>\r\n      <span *ngIf=\"document_twoError\" class=\"error ion-padding\">\r\n        Document is required.\r\n      </span>\r\n      <span *ngIf=\"document_threeError\" class=\"error ion-padding\">\r\n        Document is required.\r\n      </span>\r\n    </ion-row>\r\n\r\n\r\n\r\n\r\n    <ion-row>\r\n      <ion-col size=\"4\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"list_2\" (click)=\"showPopup(6)\"\r\n            *ngIf=\"document_six =='' || document_six ==undefined\">\r\n            <img src=\"assets/img/plus.svg\">\r\n          </ion-col>\r\n          <ion-col size=\"12\" class=\"real_image\" (click)=\"showPopup(6)\" *ngIf=\"document_six\">\r\n            <img src=\"{{document_six}}\">\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"list_2\" (click)=\"showPopup(7)\"\r\n            *ngIf=\"document_seven =='' || document_seven ==undefined\">\r\n            <img src=\"assets/img/plus.svg\">\r\n          </ion-col>\r\n          <ion-col size=\"12\" class=\"real_image\" (click)=\"showPopup(7)\" *ngIf=\"document_seven\">\r\n            <img src=\"{{document_seven}}\">\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n      </ion-col>\r\n      <span *ngIf=\"document_sixError\" class=\"error ion-padding\">\r\n        Document is required.\r\n      </span>\r\n      <span *ngIf=\"document_sevenError\" class=\"error ion-padding\">\r\n        Document is required.\r\n      </span>\r\n    </ion-row>\r\n\r\n\r\n\r\n     -->\r\n\r\n    <!-- <ion-row>\r\n      <ion-col>\r\n        <p>Car Class</p>\r\n      </ion-col>\r\n    </ion-row> -->\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-select\r\n          placeholder=\"Comfort Type\"\r\n          [(ngModel)]=\"comfort\"\r\n          (ionBlur)=\"validateForm()\"\r\n        >\r\n          <ion-select-option\r\n            value=\"{{p.car_classes_id}}\"\r\n            *ngFor=\"let p of comfortArray; let i = index\"\r\n            >{{p.name}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <span *ngIf=\"SeatsError\" class=\"error ion-padding\">\r\n          Comfort is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-select\r\n          placeholder=\"Car Type\"\r\n          [(ngModel)]=\"carType\"\r\n          (ionBlur)=\"validateForm()\"\r\n        >\r\n          <ion-select-option\r\n            value=\"{{p.car_types_id}}\"\r\n            *ngFor=\"let p of carTypeArray; let i = index\"\r\n            >{{p.name}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-input\r\n          type=\"tel\"\r\n          placeholder=\"Mobile Number\"\r\n          [(ngModel)]=\" mobileNum\"\r\n          class=\"input_list\"\r\n          (ionBlur)=\"validateForm()\"\r\n        >\r\n        </ion-input>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-select\r\n          placeholder=\"No. of seats\"\r\n          [(ngModel)]=\"Seats\"\r\n          (ionBlur)=\"validateForm()\"\r\n        >\r\n          <ion-select-option\r\n            value=\"{{p.veh_seats_id}}\"\r\n            *ngFor=\"let p of seats; let i = index\"\r\n            >{{p.seat_no}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <span *ngIf=\"SeatsError\" class=\"error ion-padding\">\r\n          Seat is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-textarea\r\n          rows=\"6\"\r\n          placeholder=\"Description\"\r\n          [(ngModel)]=\"Description\"\r\n          class=\"list_3\"\r\n          (ionBlur)=\"validateForm()\"\r\n        ></ion-textarea>\r\n        <span *ngIf=\"DescriptionError\" class=\"error ion-padding\">\r\n          Description is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-select\r\n          placeholder=\"No. of Door\"\r\n          [(ngModel)]=\"Door\"\r\n          (ionBlur)=\"validateForm()\"\r\n        >\r\n          <ion-select-option\r\n            value=\"{{p.veh_doors_id}}\"\r\n            *ngFor=\"let p of doors; let i = index\"\r\n            >{{p.door_no}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <span *ngIf=\"DoorError\" class=\"error ion-padding\">\r\n          Door is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-select\r\n          placeholder=\"Gas\"\r\n          [(ngModel)]=\"Gas\"\r\n          (ionBlur)=\"validateForm()\"\r\n        >\r\n          <ion-select-option\r\n            value=\"{{p.fuel_type_id}}\"\r\n            *ngFor=\"let p of fuel_type; let i = index\"\r\n            >{{p.name}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <span *ngIf=\"GasError\" class=\"error ion-padding\">\r\n          Fuel Type is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-select\r\n          placeholder=\"Gear Type\"\r\n          [(ngModel)]=\"GearType\"\r\n          (ionBlur)=\"validateForm()\"\r\n        >\r\n          <ion-select-option\r\n            value=\"{{p.gear_type_id}}\"\r\n            *ngFor=\"let p of gear_type; let i = index\"\r\n            >{{p.name}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <span *ngIf=\"GearTypeError\" class=\"error ion-padding\">\r\n          Gear Type is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-select\r\n          placeholder=\"Convertable\"\r\n          [(ngModel)]=\"Convertable\"\r\n          (ionBlur)=\"validateForm()\"\r\n        >\r\n          <ion-select-option\r\n            value=\"{{p.engine_type_id}}\"\r\n            *ngFor=\"let p of roof_type; let i = index\"\r\n            >{{p.name}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <span *ngIf=\"ConvertableError\" class=\"error ion-padding\">\r\n          Roof Type is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-select\r\n          placeholder=\"No. of wheels\"\r\n          [(ngModel)]=\"wheels\"\r\n          (ionBlur)=\"validateForm()\"\r\n        >\r\n          <ion-select-option\r\n            value=\"{{p.veh_wheels_id}}\"\r\n            *ngFor=\"let p of wheelss; let i = index\"\r\n            >{{p.wheels_no}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <span *ngIf=\"wheelsError\" class=\"error ion-padding\">\r\n          wheel is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-textarea\r\n          rows=\"6\"\r\n          placeholder=\"Other features\"\r\n          [(ngModel)]=\"other_features\"\r\n          class=\"list_3\"\r\n          (ionBlur)=\"validateForm()\"\r\n        >\r\n        </ion-textarea>\r\n        <span *ngIf=\"other_featuresError\" class=\"error ion-padding\">\r\n          other features is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n  <ion-row>\r\n    <ion-col>\r\n      <span *ngIf=\"fieldMissing\" class=\"error ion-padding ion-text-center\">\r\n        Please fill all the required fields.\r\n      </span>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"btn_footer\">\r\n    <ion-col size=\"2\"></ion-col>\r\n    <ion-col size=\"8\">\r\n      <ion-button\r\n        color=\"primary\"\r\n        expand=\"block\"\r\n        shape=\"round\"\r\n        (click)=\"goToNext()\"\r\n        >Next</ion-button\r\n      >\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n\r\n<div\r\n  [hidden]=\"popupHidden\"\r\n  style=\"\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: rgb(0 0 0 / 68%);\r\n    position: absolute;\r\n  \"\r\n>\r\n  <div\r\n    style=\"\r\n      left: 10%;\r\n      position: absolute;\r\n      top: 40%;\r\n      width: 80%;\r\n      height: 160px;\r\n      background-color: rgb(255, 255, 255);\r\n      border-radius: 20px;\r\n    \"\r\n  >\r\n    <ion-row>\r\n      <ion-col\r\n        style=\"padding-top: 10 px; padding-right: 10px; text-align: right\"\r\n      >\r\n        <img\r\n          style=\"height: 10px; width: 10px; margin-right: 4px; margin-top: 8px\"\r\n          src=\"assets/img/close_black.svg\"\r\n          (click)=\"hidePopup()\"\r\n        />\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row style=\"margin-top: -4px\">\r\n      <ion-col (click)=\"CameraSelected()\" style=\"text-align: center\">\r\n        <img style=\"height: 50px; width: 50px\" src=\"assets/img/camera.svg\" />\r\n        <p>Camera</p>\r\n      </ion-col>\r\n      <ion-col (click)=\"GalerySelected()\" style=\"text-align: center\">\r\n        <img style=\"height: 50px; width: 50px\" src=\"assets/img/gallery.svg\" />\r\n        <p>Gallery</p>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</div>\r\n\r\n<div\r\n    *ngIf=\"showSlide == 'yes'\"\r\n    [class.for_ios_pad]=\"plateformCheck == 'ios'\"\r\n    style=\"background: #000000f5; height: 100%\"\r\n  >\r\n    <ion-row>\r\n      <ion-col style=\"padding-left: 20px; padding-top: 20px\">\r\n        <img\r\n          src=\"assets/img/close.png\"\r\n          (click)=\"closeModel()\"\r\n          style=\"height: 20px; width: 20px; padding: 3px; border-radius: 10px\"\r\n        />\r\n      </ion-col>  \r\n    </ion-row>\r\n\r\n    <ion-row class=\"center\">\r\n      <ion-col class=\"slider_main_slide\" style=\"display: flex\">\r\n        <ion-slides >\r\n          <ng-container >\r\n            <ion-slide >\r\n              <img style=\"max-height: 80%;\" src=\"{{document_one}}\" class=\"s_img_slide\" />\r\n            </ion-slide>\r\n          </ng-container>\r\n        </ion-slides>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  \r\n</div>\r\n";
      /***/
    },

    /***/
    "./src/app/list-your-car/list-your-car-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/list-your-car/list-your-car-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: ListYourCarPageRoutingModule */

    /***/
    function srcAppListYourCarListYourCarRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListYourCarPageRoutingModule", function () {
        return ListYourCarPageRoutingModule;
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


      var _list_your_car_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./list-your-car.page */
      "./src/app/list-your-car/list-your-car.page.ts");

      var routes = [{
        path: '',
        component: _list_your_car_page__WEBPACK_IMPORTED_MODULE_3__["ListYourCarPage"]
      }];

      var ListYourCarPageRoutingModule = /*#__PURE__*/_createClass(function ListYourCarPageRoutingModule() {
        _classCallCheck(this, ListYourCarPageRoutingModule);
      });

      ListYourCarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ListYourCarPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/list-your-car/list-your-car.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/list-your-car/list-your-car.module.ts ***!
      \*******************************************************/

    /*! exports provided: ListYourCarPageModule */

    /***/
    function srcAppListYourCarListYourCarModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListYourCarPageModule", function () {
        return ListYourCarPageModule;
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


      var _list_your_car_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./list-your-car-routing.module */
      "./src/app/list-your-car/list-your-car-routing.module.ts");
      /* harmony import */


      var _list_your_car_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./list-your-car.page */
      "./src/app/list-your-car/list-your-car.page.ts");
      /* harmony import */


      var ion2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ion2-calendar */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/index.js");
      /* harmony import */


      var ion2_calendar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_7__);

      var ListYourCarPageModule = /*#__PURE__*/_createClass(function ListYourCarPageModule() {
        _classCallCheck(this, ListYourCarPageModule);
      });

      ListYourCarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _list_your_car_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListYourCarPageRoutingModule"], ion2_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"]],
        declarations: [_list_your_car_page__WEBPACK_IMPORTED_MODULE_6__["ListYourCarPage"]],
        providers: [{
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
          useValue: 'zh-CN'
        }]
      })], ListYourCarPageModule);
      /***/
    },

    /***/
    "./src/app/list-your-car/list-your-car.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/list-your-car/list-your-car.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppListYourCarListYourCarPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3em 0.1em 8px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n}\n\n.view_btn {\n  position: absolute;\n  right: 7px;\n  top: -30px;\n  color: #c4932f;\n}\n\n.error {\n  color: red;\n}\n\n.real_image {\n  padding: 0px;\n}\n\n.real_image img {\n  width: 100%;\n  height: 100px;\n}\n\n.real_image_2 {\n  padding: 0px;\n}\n\n.real_image_2 img {\n  width: 150px;\n  height: 164px;\n}\n\n.list_1 {\n  padding: 0em 1em;\n}\n\n.list_1 h3 {\n  margin: 0px;\n  margin-top: 0.5em;\n}\n\n.left_4 {\n  margin-left: 0.7em !important;\n}\n\n.input_list {\n  border: 1px solid #d4dce1;\n  background: #F7F8FA;\n  border-radius: 28px;\n  font-size: 13px;\n  color: #000;\n  --placeholder-color: #b2b2b4;\n  --padding-bottom: 1.5em;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n}\n\n.upload_images {\n  color: #C4932F;\n  font-size: 12px;\n  margin: 5px 0px;\n}\n\n.list_2 {\n  text-align: center;\n  background: #F7F8FA;\n  border: 1px dashed #D4DCE1;\n  border-radius: 10px;\n  padding: 2.5em 0em;\n}\n\n.list_9 {\n  text-align: center;\n  background: #F7F8FA;\n  border: 1px dashed #D4DCE1;\n  border-radius: 10px;\n  padding: 3.7em 0em 2.5em 0em;\n  height: 163px;\n}\n\n.list_9 p {\n  color: #d2d6d8;\n  font-size: 12px;\n  margin: 0px;\n  margin-top: 8px;\n}\n\n.list_3 {\n  background: #F7F8FA;\n  border: 1px solid #D4DCE1;\n  border-radius: 10px;\n  color: #000;\n  --placeholder-color: #b2b2b4;\n  font-size: 13px;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n}\n\n.btn_footer {\n  margin: 0.7em 0em 1em 0em;\n}\n\nion-slide span {\n  border: 1px solid #000;\n  border-radius: 22px;\n  padding: 8px 14px;\n  margin-left: 1em;\n}\n\n.num {\n  padding: 9px 10px !important;\n}\n\n.calender_slider {\n  background: #F7F8FA;\n  padding: 0.6em 0em;\n}\n\n.calender_slider_text {\n  margin: 0px;\n  position: relative;\n  top: -2px;\n  font-size: 18px;\n}\n\nion-slide {\n  margin-left: 0.6em;\n}\n\nion-slide:first-child {\n  margin-left: 0em;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n}\n\n.btn_footer {\n  padding: 0.5em 1em 1.2em 1em;\n}\n\n.info {\n  background: #6E6D6D;\n  padding: 0.4em 0em;\n}\n\n.info p {\n  margin: 0px;\n  color: #fff;\n  font-size: 10px;\n}\n\nion-select {\n  background: #F7F8FA;\n  border: 1px solid #D4DCE1;\n  border-radius: 30px;\n  --placeholder-color: #b2b2b4;\n  color: #000;\n  font-size: 13px;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n  --padding-bottom: 1.5em;\n  --padding-end: 1.5em;\n}\n\n.list_4 {\n  background: #F7F8FA;\n  border: 1px solid #D4DCE1;\n  border-radius: 12px;\n  color: #D4DCE1;\n  font-size: 13px;\n}\n\n.list_4 p {\n  margin: 0px;\n  color: #000;\n}\n\n.list_5 {\n  border-left: 1px dashed #c7c7c7;\n  height: 48px;\n  float: right;\n  margin-top: 12px;\n}\n\n.list_6 {\n  margin-bottom: 2em !important;\n}\n\n.list_7 {\n  height: 10px;\n  background: green;\n  width: 10px;\n  float: right;\n  position: relative;\n  right: 5px;\n  border-radius: 50%;\n  margin-top: 3px;\n}\n\n.list_8 {\n  height: 10px;\n  background: red;\n  width: 10px;\n  float: right;\n  position: relative;\n  right: 5px;\n  border-radius: 50%;\n}\n\n.activeState {\n  background: #c4932f;\n  border: 1px solid #c4932f !important;\n  color: #fff !important;\n}\n\n.activeEndState {\n  background: #c4932f;\n  border: 1px solid #c4932f !important;\n  color: #fff !important;\n}\n\np {\n  display: block;\n  -webkit-margin-before: 0em;\n          margin-block-start: 0em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC15b3VyLWNhci9saXN0LXlvdXItY2FyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksd0JBQUE7SUFDQSxxQkFBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBQ0ksVUFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSw2QkFBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUdBO0VBRUksY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFESjs7QUFJQTtFQUNJLHlCQUFBO0FBREo7O0FBSUE7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksNEJBQUE7QUFESjs7QUFJQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7QUFESjs7QUFJQTtFQUNJLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQURKOztBQUlBO0VBQ0ksNEJBQUE7QUFESjs7QUFJQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FBREo7O0FBSUE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUFESjs7QUFJQTtFQUNJLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksNkJBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtBQURKOztBQUlBO0VBQ0ksbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0FBREo7O0FBS0E7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEscUJBQUE7RUFDQSx5QkFBQTtVQUFBLHdCQUFBO0VBQ0EsdUJBQUE7VUFBQSxzQkFBQTtBQUZKIiwiZmlsZSI6InNyYy9hcHAvbGlzdC15b3VyLWNhci9saXN0LXlvdXItY2FyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICBwYWRkaW5nOiAwLjhlbSAwLjFlbSAwIDA7XG4gICAgLS1iYWNrZ3JvdW5kOiAjYzQ5MzJmO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi1oZWlnaHQgOiA4MDBweCkge1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgcGFkZGluZzogM2VtIDAuMWVtIDhweCAwO1xuICAgICAgICAtLWJhY2tncm91bmQ6ICNjNDkzMmY7XG4gICAgfVxufVxuXG5pb24tdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDI0cHg7XG59XG5cbi52aWV3X2J0biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA3cHg7XG4gICAgdG9wOiAtMzBweDtcbiAgICBjb2xvcjogI2M0OTMyZjtcbn1cblxuLmVycm9yIHtcbiAgICBjb2xvcjogcmVkO1xufVxuXG4ucmVhbF9pbWFnZSB7XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG4ucmVhbF9pbWFnZSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwcHg7XG59XG5cbi5yZWFsX2ltYWdlXzIge1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuLnJlYWxfaW1hZ2VfMiBpbWcge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDE2NHB4O1xufVxuXG4ubGlzdF8xIHtcbiAgICBwYWRkaW5nOiAwZW0gMWVtO1xufVxuXG4ubGlzdF8xIGgzIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbn1cblxuLmxlZnRfNCB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuN2VtICFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dF9saXN0IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRkY2UxO1xuICAgIGJhY2tncm91bmQ6ICNGN0Y4RkE7XG4gICAgYm9yZGVyLXJhZGl1czogMjhweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogI2IyYjJiNDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxLjVlbTtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEuNWVtO1xuICAgIC0tcGFkZGluZy10b3A6IDEuNWVtO1xufVxuXG4udXBsb2FkX2ltYWdlcyB7XG4gICAgY29sb3I6ICNDNDkzMkY7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbjogNXB4IDBweDtcbn1cblxuLmxpc3RfMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICNGN0Y4RkE7XG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICNENERDRTE7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAyLjVlbSAwZW07XG59XG5cbi5saXN0Xzkge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjRjdGOEZBO1xuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjRDREQ0UxO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMy43ZW0gMGVtIDIuNWVtIDBlbTtcbiAgICBoZWlnaHQ6IDE2M3B4O1xufVxuXG4ubGlzdF85IHAge1xuXG4gICAgY29sb3I6ICNkMmQ2ZDg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLmxpc3RfMyB7XG4gICAgYmFja2dyb3VuZDogI0Y3RjhGQTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDREQ0UxO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogI2IyYjJiNDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxLjVlbTtcbiAgICAtLXBhZGRpbmctdG9wOiAxLjVlbTtcbn1cblxuLmJ0bl9mb290ZXIge1xuICAgIG1hcmdpbjogMC43ZW0gMGVtIDFlbSAwZW07XG59XG5cbmlvbi1zbGlkZSBzcGFuIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gICAgcGFkZGluZzogOHB4IDE0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbn1cblxuLm51bSB7XG4gICAgcGFkZGluZzogOXB4IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmNhbGVuZGVyX3NsaWRlciB7XG4gICAgYmFja2dyb3VuZDogI0Y3RjhGQTtcbiAgICBwYWRkaW5nOiAwLjZlbSAwZW07XG59XG5cbi5jYWxlbmRlcl9zbGlkZXJfdGV4dCB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTJweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbmlvbi1zbGlkZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNmVtO1xufVxuXG5pb24tc2xpZGU6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1sZWZ0OiAwZW07XG59XG5cbmlvbi1idXR0b24ge1xuICAgIC0tcGFkZGluZy1ib3R0b206IDEuNWVtO1xuICAgIC0tcGFkZGluZy10b3A6IDEuNWVtO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmJ0bl9mb290ZXIge1xuICAgIHBhZGRpbmc6IDAuNWVtIDFlbSAxLjJlbSAxZW07XG59XG5cbi5pbmZvIHtcbiAgICBiYWNrZ3JvdW5kOiAjNkU2RDZEO1xuICAgIHBhZGRpbmc6IDAuNGVtIDBlbTtcbn1cblxuLmluZm8gcCB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxMHB4O1xufVxuXG5pb24tc2VsZWN0IHtcbiAgICBiYWNrZ3JvdW5kOiAjRjdGOEZBO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNENERDRTE7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjYjJiMmI0O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEuNWVtO1xuICAgIC0tcGFkZGluZy10b3A6IDEuNWVtO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDEuNWVtO1xuICAgIC0tcGFkZGluZy1lbmQ6IDEuNWVtO1xufVxuXG4ubGlzdF80IHtcbiAgICBiYWNrZ3JvdW5kOiAjRjdGOEZBO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNENERDRTE7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBjb2xvcjogI0Q0RENFMTtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5saXN0XzQgcCB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgY29sb3I6ICMwMDA7XG59XG5cbi5saXN0XzUge1xuICAgIGJvcmRlci1sZWZ0OiAxcHggZGFzaGVkICNjN2M3Yzc7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4ubGlzdF82IHtcbiAgICBtYXJnaW4tYm90dG9tOiAyZW0gIWltcG9ydGFudDtcbn1cblxuLmxpc3RfNyB7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcmlnaHQ6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG4ubGlzdF84IHtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcmlnaHQ6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5hY3RpdmVTdGF0ZSB7XG4gICAgYmFja2dyb3VuZDogI2M0OTMyZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzQ5MzJmICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLmFjdGl2ZUVuZFN0YXRlIHtcbiAgICBiYWNrZ3JvdW5kOiAjYzQ5MzJmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjNDkzMmYgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG5cbnAge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMGVtO1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDBlbTtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/list-your-car/list-your-car.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/list-your-car/list-your-car.page.ts ***!
      \*****************************************************/

    /*! exports provided: ListYourCarPage */

    /***/
    function srcAppListYourCarListYourCarPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListYourCarPage", function () {
        return ListYourCarPage;
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

      var ListYourCarPage = /*#__PURE__*/function () {
        function ListYourCarPage(loadingController, activatedRoute, popoverController, storage, toastController, router, restService, alertCtrl, imageService, menuCtrl, imageCompress, imagePicker, platform, location, navCtrl, transfer) {
          _classCallCheck(this, ListYourCarPage);

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
          this.document_one = "";
          this.document_two = "";
          this.document_three = "";
          this.document_four = "";
          this.document_five = "";
          this.start_date_month = "";
          this.end_date_month = "";
          this.start_month_index = 1;
          this.end_month_index = 1; //  documentBase64: Array<String> = [];

          this.documentBase64 = [];
          this.days = [];
          this.monthCounter = 1;
          this.document_six = "";
          this.document_seven = "";
          this.validation = false;
          this.indexOfSLide = 1;
          this.showSlide = 'no';
          this.fieldMissing = false;
          this.endmonthCounter = 1;
          this.active_start_date = 1;
          this.startmonthCounter = 1;
          this.uploadedImages = [];
          this.base64upload = [];
          this.image1 = "";
          this.image2 = "";
          this.image3 = "";
          this.image4 = "";
          this.image5 = "";
          this.image6 = "";
          this.image7 = "";
          this.mobileNum = "";
          this.oneDataSet = "";
          this.comfort = ""; // comfortArray = [
          //   { comfort_id: '1', comfort: 'Comfort' },
          //   { comfort_id: '2', comfort: 'Business Class' },
          //   { comfort_id: '3', comfort: 'Deluxe' },
          //   { comfort_id: '4', comfort: 'Super Deluxe' },
          // ];

          this.comfortArray = []; // carTypeArray = [
          //   { type_id: '1', type: 'Van' },
          //   { type_id: '2', type: 'Mini Van' },
          //   { type_id: '3', type: 'SUV' },
          //   { type_id: '4', type: 'Truck' },
          // ];

          this.carTypeArray = [];
          this.carType = "";
          this.popupHidden = true;
          this.optionsRange = {
            pickMode: "range"
          };
          this.invalidDates = ["2021-06-10", "2021-06-13"]; // geting car types

          this.getCarTypes();
          var month = new Date().getMonth() + 1;
          var getname = this.monthList(month);
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

        _createClass(ListYourCarPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            // Image pikcer permission
            this.imagePicker.requestReadPermission(); // Image pikcer permission

            if (this.platform.is("ios")) {
              this.plateformCheck = "ios";
            } else {
              this.plateformCheck = "android";
            }

            this.getDropDownData();
            this.storage.get("user_details").then(function (user_details) {
              console.log(user_details);
              _this.userID = user_details.users_id;
              _this.Email = user_details.email;
              _this.about = user_details.about;
              _this.work = user_details.work;
              _this.currencyID = user_details.currencies_id;
              setTimeout(function () {
                _this.Language = user_details.languages_id;
                _this.Lives = user_details.countries_id;
                console.log("ok");
              }, 2000);

              _this.storage.get("base_urls").then(function (base_url) {
                _this.base_url = base_url;

                _this.storage.get("currency_symbol").then(function (currency_symbol) {
                  _this.currency_symbol = currency_symbol;
                });
              });
            });
            this.currentYear = new Date().getFullYear();
            this.currentYearTwo = new Date().getFullYear();
            this.getStartIndex(1);
            this.getEndIndex(1);
            this.storage.get("lastVeh").then(function (lastVeh) {
              _this.lastVeh = lastVeh;
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.storage.get("pickup").then(function (pickup) {
                        _this2.storage.get("dropoff").then(function (dropoff) {
                          _this2.storage.get("pickuplong").then(function (pickuplong) {
                            _this2.storage.get("pickuplat").then(function (pickuplat) {
                              _this2.storage.get("dropofflong").then(function (dropofflong) {
                                _this2.storage.get("dropofflat").then(function (dropofflat) {
                                  _this2.pickup = pickup;
                                  _this2.dropoff = dropoff;
                                  _this2.pickuplong = pickuplong;
                                  _this2.pickuplat = pickuplat;
                                  _this2.dropofflong = dropofflong;
                                  _this2.dropofflat = dropofflat;
                                });
                              });
                            });
                          });
                        });
                      });
                      _context.next = 3;
                      return this.storage.get("onceFilled");

                    case 3:
                      this.onceFilled = _context.sent;

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getCarTypes",
          value: function getCarTypes() {
            var _this3 = this;

            var stringys = JSON.stringify({
              requestType: "get_parts_details"
            });
            console.log(stringys);
            this.restService.get_parts_details(stringys).subscribe(function (response) {
              var resee = JSON.parse(response["_body"]);
              console.log("carTypes", resee);
              _this3.carTypeArray = resee.car_types;
              _this3.comfortArray = resee.car_classes;
            }, function (err) {});
          }
        }, {
          key: "previewImage",
          value: function previewImage(p) {
            console.log('photo viewer');
            this.showSlide = 'yes';
            this.indexOfSLide = 1; //this.photoViewer.show(this.base_urls + '' + p);
          }
        }, {
          key: "closeModel",
          value: function closeModel() {
            this.showSlide = 'no';
          }
        }, {
          key: "checkingLiNo",
          value: function checkingLiNo() {
            var _this4 = this;

            var stringys = JSON.stringify({
              requestType: "check_license_plate",
              licenseText: this.LicensePlate,
              veh_id: null
            });
            console.log(stringys);
            this.restService.getDdlData(stringys).subscribe(function (response) {
              _this4.response = JSON.parse(response["_body"]);

              if (_this4.response.msg == "exist") {
                _this4.LicensePlateUnique = true;
              } else {
                _this4.LicensePlateUnique = false;
              }

              console.log("check_license_plate Response", _this4.response);
            }, function (err) {});
          }
        }, {
          key: "getStartIndex",
          value: function getStartIndex(i) {
            this.sliderStartBoolean = i;
            console.log(this.sliderEndBoolean, "nice days start");
            this.validateStartDate();
          }
        }, {
          key: "getEndIndex",
          value: function getEndIndex(i) {
            this.sliderEndBoolean = i;
            console.log(this.sliderEndBoolean, "nice days ");
            this.validateEndDate();
          }
        }, {
          key: "goToLocation",
          value: function goToLocation() {
            var myData = JSON.stringify({
              location: "/list-your-car"
            });
            this.router.navigate(["/location"], {
              queryParams: {
                value: myData
              }
            });
          }
        }, {
          key: "getDropDownData",
          value: function getDropDownData() {
            var _this5 = this;

            var stringy = JSON.stringify({
              requestType: "list_car_page"
            });
            console.log(stringy);
            this.restService.getDdlData(stringy).subscribe(function (response) {
              _this5.response = JSON.parse(response["_body"]);
              _this5.model = _this5.response.model;
              _this5.make = _this5.response.make;
              _this5.fuel_type = _this5.response.fuel_type;
              _this5.gear_type = _this5.response.gear_type;
              _this5.roof_type = _this5.response.roof_type;
              _this5.countries = _this5.response.countries;
              _this5.languages = _this5.response.languages;
              _this5.wheelss = _this5.response.no_of_wheels;
              _this5.seats = _this5.response.no_of_seats;
              _this5.doors = _this5.response.no_of_doors;
              console.log(_this5.response);
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

              if (this.LicensePlate == "" || this.LicensePlate == undefined) {
                this.LicensePlateError = true;
                return false;
              } else if (this.LicensePlateUnique == true) {
                return false;
              } else if (this.Description == "" || this.Description == undefined) {
                this.DescriptionError = true;
                return false;
              } else if (this.Seats == "" || this.Seats == undefined) {
                this.SeatsError = true;
                return false;
              } else if (this.Door == "" || this.Door == undefined) {
                this.DoorError = true;
                return false;
              } else if (this.Gas == "" || this.Gas == undefined) {
                this.GasError = true;
                return false;
              } else if (this.GearType == "" || this.GearType == undefined) {
                this.GearTypeError = true;
                return false;
              } else if (this.Convertable == "" || this.Convertable == undefined) {
                this.ConvertableError = true;
                return false;
              } else if (this.wheels == "" || this.wheels == undefined) {
                this.wheelsError = true;
                return false;
              } else if (this.other_features == "" || this.other_features == undefined) {
                this.other_featuresError = true;
                return false;
              } else if (this.document_one == "" || this.document_one == undefined) {
                this.document_oneError = true;
                return false;
              } else {
                return true;
              }
            }
          }
        }, {
          key: "deletePreviousImg",
          value: function deletePreviousImg() {
            var _this6 = this;

            var deleteStringy = JSON.stringify({
              requestType: "delete_images",
              carImagesArray: this.uploadedImages
            });
            console.log(deleteStringy, "deleteStringydeleteStringy");
            this.restService.saveListVehicles(deleteStringy).subscribe(function (response) {
              _this6.response = JSON.parse(response["_body"]);
              console.log(response["_body"]);

              if (_this6.response.status == "error") {} else if (_this6.response.status == "success") {
                console.log(_this6.uploadedImages, "after deleting");
                _this6.onceFilled = null;
              }
            }, function (err) {
              alert("request error");

              _this6.dismiss();
            });
          }
        }, {
          key: "goToNext",
          value: function goToNext() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this7 = this;

              var interval, loading, that, fileTransfer, random, options;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.documentBase64 = [];
                      this.uploadedImages = [];
                      this.validation = true;

                      if (!(this.validateForm() == true)) {
                        _context3.next = 20;
                        break;
                      }

                      this.fieldMissing = false;
                      this.documentBase64.push(this.document_one);
                      interval = 0;
                      _context3.next = 9;
                      return this.loadingController.create({
                        cssClass: "ionloading",
                        message: "Uploading images..."
                      });

                    case 9:
                      loading = _context3.sent;
                      _context3.next = 12;
                      return loading.present();

                    case 12:
                      that = this;
                      fileTransfer = that.transfer.create();
                      random = new Date().getTime();
                      console.log(random, "time_stamptime_stamp");
                      options = {
                        fileKey: "photo",
                        fileName: "imglicense_" + "_" + this.userID + "_" + random + ".jpg",
                        chunkedMode: false,
                        httpMethod: "post",
                        mimeType: "image/jpeg",
                        params: {
                          image: "YPOP"
                        }
                      };
                      fileTransfer.upload(that.document_one, "https://app.transusdrives.com/webservices/upload_image", options).then(function (data) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                          var _this8 = this;

                          var img, APIdata;
                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  img = JSON.parse(data.response);
                                  console.log("uploadig images", data);
                                  APIdata = JSON.stringify({
                                    requestType: "patch_4",
                                    vehicles_id: localStorage.getItem("vinNumberCarID"),
                                    license_img: img.message,
                                    license_plate: this.LicensePlate,
                                    mobile_number: this.mobileNum,
                                    description: this.Description,
                                    no_seat: this.Seats,
                                    no_door: this.Door,
                                    gas: this.Gas,
                                    engine: this.GearType,
                                    convertable: this.Convertable,
                                    no_wheel: this.wheels,
                                    other_feacture: this.other_features,
                                    comfort: this.comfort,
                                    carType: this.carType
                                  });
                                  console.log("outgoing Data", APIdata);
                                  this.restService.listYourCarAPI(APIdata).subscribe(function (responseData) {
                                    console.log("incomming response list-your-car", responseData);
                                    loading.dismiss();
                                    _this8.oneDataSet = JSON.parse(responseData["_body"]);
                                    console.log(_this8.oneDataSet, "getiing from oneset");

                                    if (_this8.oneDataSet.status == "success") {
                                      localStorage.setItem("vinNumberCarID", _this8.oneDataSet.vehicle_id.toString());
                                      that.navCtrl.navigateForward("car-documents");
                                    }
                                  }, function (err) {
                                    loading.dismiss();
                                  });

                                case 5:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2, this);
                        }));
                      }, function (err) {
                        loading.dismiss();
                        console.log("Error");
                        console.log(err);
                        return;
                      });
                      _context3.next = 21;
                      break;

                    case 20:
                      this.fieldMissing = true;

                    case 21:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "uploadDocumentsPhotos",
          value: function uploadDocumentsPhotos(params) {
            this.pickCustome1image(params);
          }
        }, {
          key: "pickCustome1image",
          value: function pickCustome1image(custNum) {
            var _this9 = this;

            var options = {
              maximumImagesCount: 1,
              outputType: 1,
              quality: 90
            };
            this.imagePicker.getPictures(options).then(function (imageData) {
              var base64 = "data:image/png;base64,".concat(imageData); // this.imageCompress.compressFile(base64, 0, 80, 80).then((result) => {

              if (custNum == 1) {
                _this9.image1 = imageData;
                _this9.document_one = base64;
              } // });

            }, function (err) {
              console.log(err, "error in images??");
            });
          }
        }, {
          key: "takeImageFromCamera",
          value: function takeImageFromCamera(param) {
            var _this10 = this;

            var options = {
              maximumImagesCount: 1,
              outputType: 1,
              quality: 90
            };
            this.imageService.selectImageInCamera().then(function (imageData) {
              var base64 = "data:image/png;base64,".concat(imageData); // this.imageCompress.compressFile(base64, 0, 80, 80).then((result) => {

              console.log(base64);
              console.log("Size in bytes is now:", _this10.imageCompress.byteCount(base64));

              if (param == 1) {
                _this10.image1 = imageData;
                _this10.document_one = base64;
              } // });

            }, function (err) {
              console.log("imagepicker  now:", err);
            }); //   }).catch(err => console.error(err));
          }
        }, {
          key: "validateStartDate",
          value: function validateStartDate() {
            var _this11 = this;

            setTimeout(function () {
              var _a, _b;

              _this11.dateStartError = false;
              /**** end date ****/

              _this11.active_end_date = (_a = document.querySelector(".end_date .activeEndState")) === null || _a === void 0 ? void 0 : _a.textContent;
              var cEndDate = new Date(_this11.currentYear, _this11.endmonthCounter - 1, _this11.active_end_date).getTime();
              /**** end date ****/

              _this11.active_start_date = (_b = document.querySelector(".start_date .activeState")) === null || _b === void 0 ? void 0 : _b.textContent;
              var cDate = new Date(_this11.currentYear, _this11.startmonthCounter - 1, _this11.active_start_date).getTime();

              if (cDate > cEndDate) {
                console.log("start date ");
                _this11.dateStartError = true;
                console.log(_this11.dateStartError); //this.validateEndDate();
              }
            }, 300);
          }
        }, {
          key: "validateEndDate",
          value: function validateEndDate() {
            var _this12 = this;

            setTimeout(function () {
              var _a, _b;

              _this12.dateStartError = false;
              _this12.active_start_date = (_a = document.querySelector(".start_date .activeState")) === null || _a === void 0 ? void 0 : _a.textContent;
              var cStartDate = new Date(_this12.currentYear, _this12.startmonthCounter - 1, _this12.active_start_date).getTime();
              _this12.active_end_date = (_b = document.querySelector(".end_date .activeEndState")) === null || _b === void 0 ? void 0 : _b.textContent;
              var cDate = new Date(_this12.currentYear, _this12.endmonthCounter - 1, _this12.active_end_date).getTime();

              if (cStartDate > cDate) {
                console.log("end date ");
                _this12.dateStartError = true;
                console.log(_this12.dateStartError);
              }
            }, 300);
          }
        }, {
          key: "goToHome",
          value: function goToHome() {
            // this.router.navigate(['/listed-car']);
            this.location.back();
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
              this.month = "January";
            } else if (param == 2) {
              this.month = "February";
            } else if (param == 3) {
              this.month = "March";
            } else if (param == 4) {
              this.month = "April";
            } else if (param == 5) {
              this.month = "May";
            } else if (param == 6) {
              this.month = "June";
            } else if (param == 7) {
              this.month = "July";
            } else if (param == 8) {
              this.month = "August";
            } else if (param == 9) {
              this.month = "September";
            } else if (param == 10) {
              this.month = "October";
            } else if (param == 11) {
              this.month = "November";
            } else if (param == 12) {
              this.month = "December";
            }

            return this.month;
          }
        }, {
          key: "presentToast",
          value: function presentToast(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var toast;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.toastController.create({
                        message: msg,
                        duration: 2000,
                        position: "top"
                      });

                    case 2:
                      toast = _context4.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "present",
          value: function present() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.loadingController.create({
                        message: "Please wait..."
                      });

                    case 2:
                      this.loading = _context5.sent;
                      _context5.next = 5;
                      return this.loading.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.loading.dismiss();

                    case 2:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "newDate",
          value: function newDate() {
            var ddff = moment__WEBPACK_IMPORTED_MODULE_9__(this.dateRange.from);
            var dateStart = ddff.format("YYYY-MM-DD");
            console.log(dateStart);
            this.start_date = dateStart;
            var dd = moment__WEBPACK_IMPORTED_MODULE_9__(this.dateRange.to);
            var dateEnd = dd.format("YYYY-MM-DD"); //  console.log(dd)

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
            console.log("popup cal", this.popupSelectedVal);
            this.takeImageFromCamera(this.popupSelectedVal);
            this.hidePopup();
          }
        }, {
          key: "GalerySelected",
          value: function GalerySelected() {
            console.log("popup cal", this.popupSelectedVal);
            this.uploadDocumentsPhotos(this.popupSelectedVal);
            this.hidePopup();
          }
        }]);

        return ListYourCarPage;
      }();

      ListYourCarPage.ctorParameters = function () {
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

      ListYourCarPage.propDecorators = {
        startSlides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ["startSlides"]
        }],
        endSlides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ["endSlides"]
        }]
      };
      ListYourCarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-list-your-car",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./list-your-car.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/list-your-car/list-your-car.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./list-your-car.page.scss */
        "./src/app/list-your-car/list-your-car.page.scss"))["default"]]
      })], ListYourCarPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=list-your-car-list-your-car-module-es5.js.map