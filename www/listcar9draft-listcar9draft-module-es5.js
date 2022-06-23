(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["listcar9draft-listcar9draft-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/listcar9draft/listcar9draft.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/listcar9draft/listcar9draft.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppListcar9draftListcar9draftPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [class.ios-headers]=\"plateformCheck == 'ios'\">\n  <ion-toolbar>\n    <ion-buttons [class.back_button]=\"plateformCheck == 'ios'\" slot=\"start\">\n      <img src=\"assets/img/Arrow.svg\" (click)=\"goToHome()\" />\n    </ion-buttons>\n    <ion-title [class.globe_title]=\"plateformCheck == 'ios'\"\n      >List your car</ion-title\n    >\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div style=\"padding: 20px\">\n    <ion-row>\n      <ion-col>\n        <p class=\"upload_images\">Upload Images</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"4\">\n        <ion-row>\n          <ion-col\n            size=\"12\"\n            class=\"list_2\"\n            (click)=\"showPopup(1)\"\n            *ngIf=\"document_one =='' || document_one ==undefined\"\n          >\n            <img src=\"assets/img/plus.svg\" />\n          </ion-col>\n          <ion-col\n            size=\"12\"\n            class=\"real_image\"\n            (click)=\"showPopup(1)\"\n            *ngIf=\"document_one\"\n          >\n            <img src=\"{{document_one}}\" />\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-row>\n          <ion-col\n            size=\"12\"\n            class=\"list_2\"\n            (click)=\"showPopup(2)\"\n            *ngIf=\"document_two =='' || document_two ==undefined\"\n          >\n            <img src=\"assets/img/plus.svg\" />\n          </ion-col>\n          <ion-col\n            size=\"12\"\n            class=\"real_image\"\n            (click)=\"showPopup(2)\"\n            *ngIf=\"document_two\"\n          >\n            <img src=\"{{document_two}}\" />\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-row>\n          <ion-col\n            size=\"12\"\n            class=\"list_2\"\n            (click)=\"showPopup(3)\"\n            *ngIf=\"document_three =='' || document_three ==undefined\"\n          >\n            <img src=\"assets/img/plus.svg\" />\n          </ion-col>\n          <ion-col\n            size=\"12\"\n            class=\"real_image\"\n            (click)=\"showPopup(3)\"\n            *ngIf=\"document_three\"\n          >\n            <img src=\"{{document_three}}\" />\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <span *ngIf=\"document_oneError\" class=\"error ion-padding\">\n        Document is required.\n      </span>\n      <span *ngIf=\"document_twoError\" class=\"error ion-padding\">\n        Document is required.\n      </span>\n      <span *ngIf=\"document_threeError\" class=\"error ion-padding\">\n        Document is required.\n      </span>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"4\">\n        <ion-row>\n          <ion-col\n            size=\"12\"\n            class=\"list_2\"\n            (click)=\"showPopup(6)\"\n            *ngIf=\"document_six =='' || document_six ==undefined\"\n          >\n            <img src=\"assets/img/plus.svg\" />\n          </ion-col>\n          <ion-col\n            size=\"12\"\n            class=\"real_image\"\n            (click)=\"showPopup(6)\"\n            *ngIf=\"document_six\"\n          >\n            <img src=\"{{document_six}}\" />\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-row>\n          <ion-col\n            size=\"12\"\n            class=\"list_2\"\n            (click)=\"showPopup(7)\"\n            *ngIf=\"document_seven =='' || document_seven ==undefined\"\n          >\n            <img src=\"assets/img/plus.svg\" />\n          </ion-col>\n          <ion-col\n            size=\"12\"\n            class=\"real_image\"\n            (click)=\"showPopup(7)\"\n            *ngIf=\"document_seven\"\n          >\n            <img src=\"{{document_seven}}\" />\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-row>\n          <ion-col\n            size=\"12\"\n            class=\"list_2\"\n            (click)=\"showPopup(8)\"\n            *ngIf=\"document_eight =='' || document_eight ==undefined\"\n          >\n            <img src=\"assets/img/plus.svg\" />\n          </ion-col>\n          <ion-col\n            size=\"12\"\n            class=\"real_image\"\n            (click)=\"showPopup(8)\"\n            *ngIf=\"document_eight\"\n          >\n            <img src=\"{{document_eight}}\" />\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-row>\n          <ion-col\n            size=\"12\"\n            class=\"list_2\"\n            (click)=\"showPopup(9)\"\n            *ngIf=\"document_nine =='' || document_nine ==undefined\"\n          >\n            <img src=\"assets/img/plus.svg\" />\n          </ion-col>\n          <ion-col\n            size=\"12\"\n            class=\"real_image\"\n            (click)=\"showPopup(9)\"\n            *ngIf=\"document_nine\"\n          >\n            <img src=\"{{document_nine}}\" />\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-row>\n          <ion-col\n            size=\"12\"\n            class=\"list_2\"\n            (click)=\"showPopup(10)\"\n            *ngIf=\"document_ten =='' || document_ten ==undefined\"\n          >\n            <img src=\"assets/img/plus.svg\" />\n          </ion-col>\n          <ion-col\n            size=\"12\"\n            class=\"real_image\"\n            (click)=\"showPopup(10)\"\n            *ngIf=\"document_ten\"\n          >\n            <img src=\"{{document_ten}}\" />\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-row>\n          <ion-col\n            size=\"12\"\n            class=\"list_2\"\n            (click)=\"showPopup(11)\"\n            *ngIf=\"document_eleven =='' || document_eleven ==undefined\"\n          >\n            <img src=\"assets/img/plus.svg\" />\n          </ion-col>\n          <ion-col\n            size=\"12\"\n            class=\"real_image\"\n            (click)=\"showPopup(11)\"\n            *ngIf=\"document_eleven\"\n          >\n            <img src=\"{{document_eleven}}\" />\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-row>\n          <ion-col\n            size=\"12\"\n            class=\"list_2\"\n            (click)=\"showPopup(12)\"\n            *ngIf=\"document_twelve =='' || document_twelve ==undefined\"\n          >\n            <img src=\"assets/img/plus.svg\" />\n          </ion-col>\n          <ion-col\n            size=\"12\"\n            class=\"real_image\"\n            (click)=\"showPopup(7)\"\n            *ngIf=\"document_twelve\"\n          >\n            <img src=\"{{document_twelve}}\" />\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <span *ngIf=\"document_sixError\" class=\"error ion-padding\">\n        Document is required.\n      </span>\n      <span *ngIf=\"document_sevenError\" class=\"error ion-padding\">\n        Document is required.\n      </span>\n      <span *ngIf=\"document_eightError\" class=\"error ion-padding\">\n        Document is required.\n      </span>\n      <span *ngIf=\"document_nineError\" class=\"error ion-padding\">\n        Document is required.\n      </span>\n      <span *ngIf=\"document_tenError\" class=\"error ion-padding\">\n        Document is required.\n      </span>\n      <span *ngIf=\"document_elevenError\" class=\"error ion-padding\">\n        Document is required.\n      </span>\n      <span *ngIf=\"document_new_twevlError\" class=\"error ion-padding\">\n        Document is required.\n      </span>\n    </ion-row>\n  </div>\n\n  <ion-row class=\"btn_footer\">\n    <ion-col size=\"2\"></ion-col>\n    <ion-col size=\"8\">\n      <ion-button\n        color=\"primary\"\n        expand=\"block\"\n        shape=\"round\"\n        (click)=\"goToNext()\"\n        >Next</ion-button\n      >\n    </ion-col>\n  </ion-row>\n</ion-content>\n\n<div\n  [hidden]=\"popupHidden\"\n  style=\"\n    height: 100%;\n    width: 100%;\n    background-color: rgb(0 0 0 / 68%);\n    position: absolute;\n  \"\n>\n  <div\n    style=\"\n      left: 10%;\n      position: absolute;\n      top: 40%;\n      width: 80%;\n      height: 160px;\n      background-color: rgb(255, 255, 255);\n      border-radius: 20px;\n    \"\n  >\n    <ion-row>\n      <ion-col\n        style=\"padding-top: 10 px; padding-right: 10px; text-align: right\"\n      >\n        <img\n          style=\"height: 10px; width: 10px; margin-right: 4px; margin-top: 8px\"\n          src=\"assets/img/close_black.svg\"\n          (click)=\"hidePopup()\"\n        />\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: -4px\">\n      <ion-col (click)=\"CameraSelected()\" style=\"text-align: center\">\n        <img style=\"height: 50px; width: 50px\" src=\"assets/img/camera.svg\" />\n        <p>Camera</p>\n      </ion-col>\n      <ion-col (click)=\"GalerySelected()\" style=\"text-align: center\">\n        <img style=\"height: 50px; width: 50px\" src=\"assets/img/gallery.svg\" />\n        <p>Gallery</p>\n      </ion-col>\n    </ion-row>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "./src/app/listcar9draft/listcar9draft-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/listcar9draft/listcar9draft-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: Listcar9draftPageRoutingModule */

    /***/
    function srcAppListcar9draftListcar9draftRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Listcar9draftPageRoutingModule", function () {
        return Listcar9draftPageRoutingModule;
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


      var _listcar9draft_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./listcar9draft.page */
      "./src/app/listcar9draft/listcar9draft.page.ts");

      var routes = [{
        path: '',
        component: _listcar9draft_page__WEBPACK_IMPORTED_MODULE_3__["Listcar9draftPage"]
      }];

      var Listcar9draftPageRoutingModule = /*#__PURE__*/_createClass(function Listcar9draftPageRoutingModule() {
        _classCallCheck(this, Listcar9draftPageRoutingModule);
      });

      Listcar9draftPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Listcar9draftPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/listcar9draft/listcar9draft.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/listcar9draft/listcar9draft.module.ts ***!
      \*******************************************************/

    /*! exports provided: Listcar9draftPageModule */

    /***/
    function srcAppListcar9draftListcar9draftModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Listcar9draftPageModule", function () {
        return Listcar9draftPageModule;
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


      var _listcar9draft_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./listcar9draft-routing.module */
      "./src/app/listcar9draft/listcar9draft-routing.module.ts");
      /* harmony import */


      var _listcar9draft_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./listcar9draft.page */
      "./src/app/listcar9draft/listcar9draft.page.ts");

      var Listcar9draftPageModule = /*#__PURE__*/_createClass(function Listcar9draftPageModule() {
        _classCallCheck(this, Listcar9draftPageModule);
      });

      Listcar9draftPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _listcar9draft_routing_module__WEBPACK_IMPORTED_MODULE_5__["Listcar9draftPageRoutingModule"]],
        declarations: [_listcar9draft_page__WEBPACK_IMPORTED_MODULE_6__["Listcar9draftPage"]]
      })], Listcar9draftPageModule);
      /***/
    },

    /***/
    "./src/app/listcar9draft/listcar9draft.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/listcar9draft/listcar9draft.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppListcar9draftListcar9draftPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3em 0.1em 8px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n}\n\n.error {\n  color: red;\n}\n\n.real_image {\n  padding: 0px;\n}\n\n.real_image img {\n  width: 100%;\n  height: 100px;\n}\n\n.real_image_2 {\n  padding: 0px;\n}\n\n.real_image_2 img {\n  width: 150px;\n  height: 164px;\n}\n\n.list_1 {\n  padding: 0em 1em;\n}\n\n.list_1 h3 {\n  margin: 0px;\n  margin-top: 0.5em;\n}\n\n.left_4 {\n  margin-left: 0.7em !important;\n}\n\n.input_list {\n  border: 1px solid #d4dce1;\n  background: #f7f8fa;\n  border-radius: 28px;\n  font-size: 13px;\n  color: #000;\n  --placeholder-color: #b2b2b4;\n  --padding-bottom: 1.5em;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n}\n\n.upload_images {\n  color: #c4932f;\n  font-size: 12px;\n  margin: 5px 0px;\n}\n\n.list_2 {\n  text-align: center;\n  background: #f7f8fa;\n  border: 1px dashed #d4dce1;\n  border-radius: 10px;\n  padding: 2.5em 0em;\n}\n\n.list_9 {\n  text-align: center;\n  background: #f7f8fa;\n  border: 1px dashed #d4dce1;\n  border-radius: 10px;\n  padding: 3.7em 0em 2.5em 0em;\n  height: 163px;\n}\n\n.list_9 p {\n  color: #d2d6d8;\n  font-size: 12px;\n  margin: 0px;\n  margin-top: 8px;\n}\n\n.list_3 {\n  background: #f7f8fa;\n  border: 1px solid #d4dce1;\n  border-radius: 10px;\n  color: #000;\n  --placeholder-color: #b2b2b4;\n  font-size: 13px;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n}\n\n@media (orientation: portrait) {\n  .btn_footer {\n    margin: 0.7em 0em 1em 0em;\n    position: absolute;\n    width: 100%;\n    bottom: 10px;\n  }\n}\n\n@media (orientation: landscape) {\n  .btn_footer {\n    margin: 0.7em 0em 1em 0em;\n  }\n}\n\nion-slide span {\n  border: 1px solid #000;\n  border-radius: 22px;\n  padding: 8px 14px;\n  margin-left: 1em;\n}\n\n.num {\n  padding: 9px 10px !important;\n}\n\n.calender_slider {\n  background: #f7f8fa;\n  padding: 0.6em 0em;\n}\n\n.calender_slider_text {\n  margin: 0px;\n  position: relative;\n  top: -2px;\n  font-size: 18px;\n}\n\nion-slide {\n  margin-left: 0.6em;\n}\n\nion-slide:first-child {\n  margin-left: 0em;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n}\n\n.btn_footer {\n  padding: 0.5em 1em 1.2em 1em;\n}\n\n.info {\n  background: #6e6d6d;\n  padding: 0.4em 0em;\n}\n\n.info p {\n  margin: 0px;\n  color: #fff;\n  font-size: 10px;\n}\n\nion-select {\n  background: #f7f8fa;\n  border: 1px solid #d4dce1;\n  border-radius: 30px;\n  --placeholder-color: #b2b2b4;\n  color: #000;\n  font-size: 13px;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n  --padding-bottom: 1.5em;\n  --padding-end: 1.5em;\n}\n\n.list_4 {\n  background: #f7f8fa;\n  border: 1px solid #d4dce1;\n  border-radius: 12px;\n  color: #d4dce1;\n  font-size: 13px;\n}\n\n.list_4 p {\n  margin: 0px;\n  color: #000;\n}\n\n.list_5 {\n  border-left: 1px dashed #c7c7c7;\n  height: 48px;\n  float: right;\n  margin-top: 12px;\n}\n\n.list_6 {\n  margin-bottom: 2em !important;\n}\n\n.list_7 {\n  height: 10px;\n  background: green;\n  width: 10px;\n  float: right;\n  position: relative;\n  right: 5px;\n  border-radius: 50%;\n  margin-top: 3px;\n}\n\n.list_8 {\n  height: 10px;\n  background: red;\n  width: 10px;\n  float: right;\n  position: relative;\n  right: 5px;\n  border-radius: 50%;\n}\n\n.activeState {\n  background: #c4932f;\n  border: 1px solid #c4932f !important;\n  color: #fff !important;\n}\n\n.activeEndState {\n  background: #c4932f;\n  border: 1px solid #c4932f !important;\n  color: #fff !important;\n}\n\n.footer-md::before {\n  left: 0;\n  top: -2px;\n  bottom: auto;\n  background-position: left 0 top 0;\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  background-repeat: repeat-x;\n  content: \"\";\n}\n\n.footer-ios::before {\n  left: 0;\n  top: -2px;\n  bottom: auto;\n  background-position: left 0 top 0;\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  background-repeat: repeat-x;\n  content: \"\";\n}\n\np {\n  display: block;\n  -webkit-margin-before: 0em;\n          margin-block-start: 0em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdGNhcjlkcmFmdC9saXN0Y2FyOWRyYWZ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksd0JBQUE7SUFDQSxxQkFBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0FBQUo7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQUVKOztBQUFBO0VBQ0ksWUFBQTtBQUdKOztBQURBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFJSjs7QUFGQTtFQUNJLGdCQUFBO0FBS0o7O0FBSEE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUFNSjs7QUFKQTtFQUNJLDZCQUFBO0FBT0o7O0FBTEE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBUUo7O0FBTkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFTSjs7QUFQQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFVSjs7QUFSQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0FBV0o7O0FBVEE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBWUo7O0FBVkE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQWFKOztBQVZBO0VBQ0k7SUFDSSx5QkFBQTtJQUVBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUFZTjtBQUNGOztBQVRBO0VBQ0k7SUFDSSx5QkFBQTtFQVdOO0FBQ0Y7O0FBUkE7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQVVKOztBQVJBO0VBQ0ksNEJBQUE7QUFXSjs7QUFUQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUFZSjs7QUFWQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBYUo7O0FBWEE7RUFDSSxrQkFBQTtBQWNKOztBQVpBO0VBQ0ksZ0JBQUE7QUFlSjs7QUFiQTtFQUNJLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQWdCSjs7QUFkQTtFQUNJLDRCQUFBO0FBaUJKOztBQWZBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQWtCSjs7QUFoQkE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFtQko7O0FBakJBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FBb0JKOztBQWxCQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBcUJKOztBQW5CQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FBc0JKOztBQXBCQTtFQUNJLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQXVCSjs7QUFyQkE7RUFDSSw2QkFBQTtBQXdCSjs7QUF0QkE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQXlCSjs7QUF2QkE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUEwQko7O0FBeEJBO0VBQ0ksbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0FBMkJKOztBQXpCQTtFQUNJLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtBQTRCSjs7QUF6QkE7RUFDSSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUE0Qko7O0FBekJBO0VBQ0ksT0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FBNEJKOztBQXpCQTtFQUNJLGNBQUE7RUFDQSwwQkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxxQkFBQTtFQUNBLHlCQUFBO1VBQUEsd0JBQUE7RUFDQSx1QkFBQTtVQUFBLHNCQUFBO0FBNEJKIiwiZmlsZSI6InNyYy9hcHAvbGlzdGNhcjlkcmFmdC9saXN0Y2FyOWRyYWZ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIHBhZGRpbmc6IDAuOGVtIDAuMWVtIDAgMDtcclxuICAgIC0tYmFja2dyb3VuZDogI2M0OTMyZjtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4taGVpZ2h0IDogODAwcHgpIHtcclxuICAgIGlvbi10b29sYmFyIHtcclxuICAgICAgICBwYWRkaW5nOiAzZW0gMC4xZW0gOHB4IDA7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjYzQ5MzJmO1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcbi5yZWFsX2ltYWdlIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG4ucmVhbF9pbWFnZSBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcbi5yZWFsX2ltYWdlXzIge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcbi5yZWFsX2ltYWdlXzIgaW1nIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMTY0cHg7XHJcbn1cclxuLmxpc3RfMSB7XHJcbiAgICBwYWRkaW5nOiAwZW0gMWVtO1xyXG59XHJcbi5saXN0XzEgaDMge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxufVxyXG4ubGVmdF80IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjdlbSAhaW1wb3J0YW50O1xyXG59XHJcbi5pbnB1dF9saXN0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGRjZTE7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjdmOGZhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjhweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogI2IyYjJiNDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEuNWVtO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxLjVlbTtcclxuICAgIC0tcGFkZGluZy10b3A6IDEuNWVtO1xyXG59XHJcbi51cGxvYWRfaW1hZ2VzIHtcclxuICAgIGNvbG9yOiAjYzQ5MzJmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luOiA1cHggMHB4O1xyXG59XHJcbi5saXN0XzIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI2Y3ZjhmYTtcclxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjZDRkY2UxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDIuNWVtIDBlbTtcclxufVxyXG4ubGlzdF85IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNmN2Y4ZmE7XHJcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgI2Q0ZGNlMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAzLjdlbSAwZW0gMi41ZW0gMGVtO1xyXG4gICAgaGVpZ2h0OiAxNjNweDtcclxufVxyXG4ubGlzdF85IHAge1xyXG4gICAgY29sb3I6ICNkMmQ2ZDg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG4ubGlzdF8zIHtcclxuICAgIGJhY2tncm91bmQ6ICNmN2Y4ZmE7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRkY2UxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogI2IyYjJiNDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMS41ZW07XHJcbiAgICAtLXBhZGRpbmctdG9wOiAxLjVlbTtcclxufVxyXG5cclxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgIC5idG5fZm9vdGVyIHtcclxuICAgICAgICBtYXJnaW46IDAuN2VtIDBlbSAxZW0gMGVtO1xyXG5cclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAgIC5idG5fZm9vdGVyIHtcclxuICAgICAgICBtYXJnaW46IDAuN2VtIDBlbSAxZW0gMGVtO1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24tc2xpZGUgc3BhbiB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcclxuICAgIHBhZGRpbmc6IDhweCAxNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxufVxyXG4ubnVtIHtcclxuICAgIHBhZGRpbmc6IDlweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhbGVuZGVyX3NsaWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjdmOGZhO1xyXG4gICAgcGFkZGluZzogMC42ZW0gMGVtO1xyXG59XHJcbi5jYWxlbmRlcl9zbGlkZXJfdGV4dCB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTJweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5pb24tc2xpZGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNmVtO1xyXG59XHJcbmlvbi1zbGlkZTpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMGVtO1xyXG59XHJcbmlvbi1idXR0b24ge1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMS41ZW07XHJcbiAgICAtLXBhZGRpbmctdG9wOiAxLjVlbTtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uYnRuX2Zvb3RlciB7XHJcbiAgICBwYWRkaW5nOiAwLjVlbSAxZW0gMS4yZW0gMWVtO1xyXG59XHJcbi5pbmZvIHtcclxuICAgIGJhY2tncm91bmQ6ICM2ZTZkNmQ7XHJcbiAgICBwYWRkaW5nOiAwLjRlbSAwZW07XHJcbn1cclxuLmluZm8gcCB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcbmlvbi1zZWxlY3Qge1xyXG4gICAgYmFja2dyb3VuZDogI2Y3ZjhmYTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGRjZTE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogI2IyYjJiNDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxLjVlbTtcclxuICAgIC0tcGFkZGluZy10b3A6IDEuNWVtO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMS41ZW07XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxLjVlbTtcclxufVxyXG4ubGlzdF80IHtcclxuICAgIGJhY2tncm91bmQ6ICNmN2Y4ZmE7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRkY2UxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGNvbG9yOiAjZDRkY2UxO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbi5saXN0XzQgcCB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcbi5saXN0XzUge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBkYXNoZWQgI2M3YzdjNztcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbn1cclxuLmxpc3RfNiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyZW0gIWltcG9ydGFudDtcclxufVxyXG4ubGlzdF83IHtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICByaWdodDogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG59XHJcbi5saXN0Xzgge1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICByaWdodDogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5hY3RpdmVTdGF0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYzQ5MzJmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M0OTMyZiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG4uYWN0aXZlRW5kU3RhdGUge1xyXG4gICAgYmFja2dyb3VuZDogI2M0OTMyZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjNDkzMmYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb290ZXItbWQ6OmJlZm9yZSB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAtMnB4O1xyXG4gICAgYm90dG9tOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCAwIHRvcCAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbn1cclxuXHJcbi5mb290ZXItaW9zOjpiZWZvcmUge1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogLTJweDtcclxuICAgIGJvdHRvbTogYXV0bztcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgMCB0b3AgMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG59XHJcblxyXG5wIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwZW07XHJcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAwZW07XHJcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/listcar9draft/listcar9draft.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/listcar9draft/listcar9draft.page.ts ***!
      \*****************************************************/

    /*! exports provided: Listcar9draftPage */

    /***/
    function srcAppListcar9draftListcar9draftPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Listcar9draftPage", function () {
        return Listcar9draftPage;
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


      var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/locales/zh */
      "./node_modules/@angular/common/locales/zh.js");
      /* harmony import */


      var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");

      Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_9___default.a);

      var Listcar9draftPage = /*#__PURE__*/function () {
        function Listcar9draftPage(loadingController, activatedRoute, popoverController, storage, toastController, router, restService, alertCtrl, imageService, menuCtrl, imageCompress, imagePicker, platform, location, navCtrl, transfer) {
          _classCallCheck(this, Listcar9draftPage);

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
          this.document_one = '';
          this.document_two = '';
          this.document_three = '';
          this.document_four = '';
          this.document_five = '';
          this.start_date_month = '';
          this.end_date_month = '';
          this.start_month_index = 1;
          this.end_month_index = 1; //  documentBase64: Array<String> = [];

          this.documentBase64 = [];
          this.days = [];
          this.monthCounter = 1;
          this.document_six = '';
          this.document_seven = '';
          this.document_eight = '';
          this.document_nine = '';
          this.document_ten = '';
          this.document_eleven = '';
          this.document_twelve = '';
          this.validation = false;
          this.fieldMissing = false;
          this.endmonthCounter = 1;
          this.active_start_date = 1;
          this.startmonthCounter = 1;
          this.uploadedImages = [];
          this.base64upload = [];
          this.image1 = '';
          this.image2 = '';
          this.image3 = '';
          this.image4 = '';
          this.image5 = '';
          this.image6 = '';
          this.image7 = '';
          this.popupHidden = true;
        }

        _createClass(Listcar9draftPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.storage.get('mycardraft').then(function (res) {
              console.log('mycardraft ali', res); // this.document_one = res.vehicle_imgs[0]
              // this.min_trip = res.min_trip_duration
              // this.max_trip = res.max_trip_duration
            });
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
            this.takeImageFromCamera(this.popupSelectedVal);
            this.hidePopup();
          }
        }, {
          key: "GalerySelected",
          value: function GalerySelected() {
            console.log('popup cal', this.popupSelectedVal);
            this.uploadDocumentsPhotos(this.popupSelectedVal);
            this.hidePopup();
          }
        }, {
          key: "uploadDocumentsPhotos",
          value: function uploadDocumentsPhotos(params) {
            console.log('params', params);

            if (params == '1' && this.document_one == '') {
              // choose 10 images
              this.pick10image(); //this.pick5image();
            } else if (params == '1' && this.document_one != '') {
              // choose 1 image
              this.pickCustome1image(params);
            } else if (params == '2' && this.document_two == '') {
              // choose 4 image
              this.pick9image(); // this.pick4image();
            } else if (params == '2' && this.document_two != '') {
              // choose 1 image
              this.pickCustome1image(params);
            } else if (params == '3' && this.document_three == '') {
              // choose 3 image
              this.pick8image(); //this.pick3image();
            } else if (params == '3' && this.document_three != '') {
              // choose 1 image
              this.pickCustome1image(params);
            } else if (params == '6' && this.document_six == '') {
              // choose 2 image
              this.pick7image(); //this.pick2image();
            } else if (params == '6' && this.document_six != '') {
              // choose 1 image
              this.pickCustome1image(params);
            } else if (params == '7' && this.document_seven == '') {
              // choose 1 image
              // this.pick1image();
              this.pick6image();
            } else if (params == '7' && this.document_seven != '') {
              // choose 1 image
              this.pickCustome1image(params);
            } else if (params == '8' && this.document_eight == '') {
              // choose 1 image
              this.pick5image();
            } else if (params == '8' && this.document_eight != '') {
              // choose 1 image
              this.pickCustome1image(params);
            } else if (params == '9' && this.document_nine == '') {
              // choose 1 image
              this.pick4image();
            } else if (params == '9' && this.document_nine != '') {
              // choose 1 image
              this.pickCustome1image(params);
            } else if (params == '10' && this.document_ten == '') {
              // choose 1 image
              this.pick3image();
            } else if (params == '10' && this.document_ten != '') {
              // choose 1 image
              this.pickCustome1image(params);
            } else if (params == '11' && this.document_eleven == '') {
              // choose 1 image
              this.pick2image();
            } else if (params == '11' && this.document_eleven != '') {
              // choose 1 image
              this.pickCustome1image(params);
            } else if (params == '12' && this.document_twelve == '') {
              // choose 1 image
              this.pick1image();
            } else if (params == '12' && this.document_twelve != '') {
              // choose 1 image
              this.pickCustome1image(params);
            }
          }
        }, {
          key: "takeImageFromCamera",
          value: function takeImageFromCamera(param) {
            var _this = this;

            //this.imageService.selectImageInCamera().then((imageData) => {
            var options = {
              maximumImagesCount: 1,
              outputType: 1
            };
            this.imageService.selectImageInCamera().then(function (imageData) {
              var base64 = "data:image/png;base64,".concat(imageData); // this.imageCompress.compressFile(base64, 0, 50, 50).then((result) => {

              console.log(base64);
              console.log('Size in bytes is now:', _this.imageCompress.byteCount(base64));

              if (param == 1) {
                _this.image1 = imageData;
                _this.document_one = base64;
              } else if (param == 2) {
                _this.image2 = imageData;
                _this.document_two = base64;
              } else if (param == 3) {
                _this.image3 = imageData;
                _this.document_three = base64;
              } else if (param == 4) {
                _this.image4 = imageData;
                _this.document_four = base64;
              } else if (param == 5) {
                _this.image5 = imageData;
                _this.document_five = base64;
              } else if (param == 6) {
                _this.image6 = imageData;
                _this.document_six = base64;
              } else if (param == 7) {
                _this.image7 = imageData;
                _this.document_seven = base64;
              } else if (param == 8) {
                _this.image8 = imageData;
                _this.document_eight = base64;
              } else if (param == 9) {
                _this.image9 = imageData;
                _this.document_nine = base64;
              } else if (param == 10) {
                _this.image10 = imageData;
                _this.document_ten = base64;
              } else if (param == 11) {
                _this.image11 = imageData;
                _this.document_eleven = base64;
              } else if (param == 12) {
                _this.image12 = imageData;
                _this.document_twelve = base64;
              } // });

            }, function (err) {
              console.log('imagepicker  now:', err);
            }); //   }).catch(err => console.error(err));
          }
        }, {
          key: "pick10image",
          value: function pick10image() {
            var _this2 = this;

            var options = {
              maximumImagesCount: 10,
              outputType: 1,
              quality: 90
            };
            this.imagePicker.getPictures(options).then(function (results) {
              for (var i = 0; i < results.length; i++) {
                _this2.base64upload.push(results[i]);

                if (i == 0) {
                  var base640 = "data:image/png;base64,".concat(results[0]);
                  _this2.image1 = results[0];
                  _this2.document_one = base640;
                }

                if (i == 1) {
                  var base641 = "data:image/png;base64,".concat(results[1]);
                  _this2.image2 = results[1];
                  _this2.document_two = base641;
                }

                if (i == 2) {
                  var base642 = "data:image/png;base64,".concat(results[2]);
                  _this2.image3 = results[2];
                  _this2.document_three = base642;
                }

                if (i == 3) {
                  var base643 = "data:image/png;base64,".concat(results[3]);
                  _this2.image6 = results[3];
                  _this2.document_six = base643;
                }

                if (i == 4) {
                  var base644 = "data:image/png;base64,".concat(results[4]);
                  _this2.image7 = results[4];
                  _this2.document_seven = base644;
                }

                if (i == 5) {
                  var base655 = "data:image/png;base64,".concat(results[5]);
                  _this2.image8 = results[5];
                  _this2.document_eight = base655;
                }

                if (i == 6) {
                  var base6556 = "data:image/png;base64,".concat(results[6]);
                  _this2.image9 = results[6];
                  _this2.document_nine = base6556;
                }

                if (i == 7) {
                  var base6556 = "data:image/png;base64,".concat(results[7]);
                  _this2.image10 = results[7];
                  _this2.document_ten = base6556;
                }

                if (i == 8) {
                  var base65568 = "data:image/png;base64,".concat(results[8]);
                  _this2.image11 = results[8];
                  _this2.document_eleven = base65568;
                }

                if (i == 9) {
                  var base6556833 = "data:image/png;base64,".concat(results[9]);
                  _this2.image12 = results[9];
                  _this2.document_twelve = base6556833;
                }
              }
            }, function (err) {
              console.log(err, 'error in images??');
            });
          }
        }, {
          key: "pick9image",
          value: function pick9image() {
            var _this3 = this;

            var options = {
              maximumImagesCount: 9,
              outputType: 1,
              quality: 90
            };
            this.imagePicker.getPictures(options).then(function (results) {
              for (var i = 0; i < results.length; i++) {
                _this3.base64upload.push(results[i]);

                if (i == 0) {
                  var base641 = "data:image/png;base64,".concat(results[0]);
                  _this3.image2 = results[0];
                  _this3.document_two = base641;
                }

                if (i == 1) {
                  var base642 = "data:image/png;base64,".concat(results[1]);
                  _this3.image3 = results[1];
                  _this3.document_three = base642;
                }

                if (i == 2) {
                  var base643 = "data:image/png;base64,".concat(results[2]);
                  _this3.image6 = results[2];
                  _this3.document_six = base643;
                }

                if (i == 3) {
                  var base644 = "data:image/png;base64,".concat(results[3]);
                  _this3.image7 = results[3];
                  _this3.document_seven = base644;
                }

                if (i == 4) {
                  var base655 = "data:image/png;base64,".concat(results[4]);
                  _this3.image8 = results[4];
                  _this3.document_eight = base655;
                }

                if (i == 5) {
                  var base6556 = "data:image/png;base64,".concat(results[5]);
                  _this3.image9 = results[5];
                  _this3.document_nine = base6556;
                }

                if (i == 6) {
                  var base6556 = "data:image/png;base64,".concat(results[6]);
                  _this3.image10 = results[6];
                  _this3.document_ten = base6556;
                }

                if (i == 7) {
                  var base65568 = "data:image/png;base64,".concat(results[7]);
                  _this3.image11 = results[7];
                  _this3.document_eleven = base65568;
                }

                if (i == 8) {
                  var base6556833 = "data:image/png;base64,".concat(results[8]);
                  _this3.image12 = results[8];
                  _this3.document_twelve = base6556833;
                }
              }
            }, function (err) {
              console.log(err, 'error in images??');
            });
          }
        }, {
          key: "pick8image",
          value: function pick8image() {
            var _this4 = this;

            var options = {
              maximumImagesCount: 8,
              outputType: 1,
              quality: 90
            };
            this.imagePicker.getPictures(options).then(function (results) {
              for (var i = 0; i < results.length; i++) {
                _this4.base64upload.push(results[i]);

                if (i == 0) {
                  var base642 = "data:image/png;base64,".concat(results[0]);
                  _this4.image3 = results[0];
                  _this4.document_three = base642;
                }

                if (i == 1) {
                  var base643 = "data:image/png;base64,".concat(results[1]);
                  _this4.image6 = results[1];
                  _this4.document_six = base643;
                }

                if (i == 2) {
                  var base644 = "data:image/png;base64,".concat(results[2]);
                  _this4.image7 = results[2];
                  _this4.document_seven = base644;
                }

                if (i == 3) {
                  var base655 = "data:image/png;base64,".concat(results[3]);
                  _this4.image8 = results[3];
                  _this4.document_eight = base655;
                }

                if (i == 4) {
                  var base6556 = "data:image/png;base64,".concat(results[4]);
                  _this4.image9 = results[4];
                  _this4.document_nine = base6556;
                }

                if (i == 5) {
                  var base6556 = "data:image/png;base64,".concat(results[5]);
                  _this4.image10 = results[5];
                  _this4.document_ten = base6556;
                }

                if (i == 6) {
                  var base65568 = "data:image/png;base64,".concat(results[6]);
                  _this4.image11 = results[6];
                  _this4.document_eleven = base65568;
                }

                if (i == 7) {
                  var base6556833 = "data:image/png;base64,".concat(results[7]);
                  _this4.image12 = results[7];
                  _this4.document_twelve = base6556833;
                }
              }
            }, function (err) {
              console.log(err, 'error in images??');
            });
          }
        }, {
          key: "pick7image",
          value: function pick7image() {
            var _this5 = this;

            var options = {
              maximumImagesCount: 7,
              outputType: 1,
              quality: 90
            };
            this.imagePicker.getPictures(options).then(function (results) {
              for (var i = 0; i < results.length; i++) {
                _this5.base64upload.push(results[i]);

                if (i == 0) {
                  var base643 = "data:image/png;base64,".concat(results[0]);
                  _this5.image6 = results[0];
                  _this5.document_six = base643;
                }

                if (i == 1) {
                  var base644 = "data:image/png;base64,".concat(results[1]);
                  _this5.image7 = results[1];
                  _this5.document_seven = base644;
                }

                if (i == 2) {
                  var base655 = "data:image/png;base64,".concat(results[2]);
                  _this5.image8 = results[2];
                  _this5.document_eight = base655;
                }

                if (i == 3) {
                  var base6556 = "data:image/png;base64,".concat(results[3]);
                  _this5.image9 = results[3];
                  _this5.document_nine = base6556;
                }

                if (i == 4) {
                  var base6556 = "data:image/png;base64,".concat(results[4]);
                  _this5.image10 = results[4];
                  _this5.document_ten = base6556;
                }

                if (i == 5) {
                  var base65568 = "data:image/png;base64,".concat(results[5]);
                  _this5.image11 = results[5];
                  _this5.document_eleven = base65568;
                }

                if (i == 6) {
                  var base6556833 = "data:image/png;base64,".concat(results[6]);
                  _this5.image12 = results[6];
                  _this5.document_twelve = base6556833;
                }
              }
            }, function (err) {
              console.log(err, 'error in images??');
            });
          }
        }, {
          key: "pick6image",
          value: function pick6image() {
            var _this6 = this;

            var options = {
              maximumImagesCount: 6,
              outputType: 1,
              quality: 90
            };
            this.imagePicker.getPictures(options).then(function (results) {
              for (var i = 0; i < results.length; i++) {
                _this6.base64upload.push(results[i]);

                if (i == 0) {
                  var base644 = "data:image/png;base64,".concat(results[0]);
                  _this6.image7 = results[0];
                  _this6.document_seven = base644;
                }

                if (i == 1) {
                  var base655 = "data:image/png;base64,".concat(results[1]);
                  _this6.image8 = results[1];
                  _this6.document_eight = base655;
                }

                if (i == 2) {
                  var base6556 = "data:image/png;base64,".concat(results[2]);
                  _this6.image9 = results[2];
                  _this6.document_nine = base6556;
                }

                if (i == 3) {
                  var base6556 = "data:image/png;base64,".concat(results[3]);
                  _this6.image10 = results[3];
                  _this6.document_ten = base6556;
                }

                if (i == 4) {
                  var base65568 = "data:image/png;base64,".concat(results[4]);
                  _this6.image11 = results[4];
                  _this6.document_eleven = base65568;
                }

                if (i == 5) {
                  var base6556833 = "data:image/png;base64,".concat(results[5]);
                  _this6.image12 = results[5];
                  _this6.document_twelve = base6556833;
                }
              }
            }, function (err) {
              console.log(err, 'error in images??');
            });
          }
        }, {
          key: "pick5image",
          value: function pick5image() {
            var _this7 = this;

            var options = {
              maximumImagesCount: 5,
              outputType: 1,
              quality: 90
            };
            this.imagePicker.getPictures(options).then(function (results) {
              for (var i = 0; i < results.length; i++) {
                _this7.base64upload.push(results[i]);

                if (i == 0) {
                  var base655 = "data:image/png;base64,".concat(results[0]);
                  _this7.image8 = results[0];
                  _this7.document_eight = base655;
                }

                if (i == 1) {
                  var base6556 = "data:image/png;base64,".concat(results[1]);
                  _this7.image9 = results[1];
                  _this7.document_nine = base6556;
                }

                if (i == 2) {
                  var base6556 = "data:image/png;base64,".concat(results[2]);
                  _this7.image10 = results[2];
                  _this7.document_ten = base6556;
                }

                if (i == 3) {
                  var base65568 = "data:image/png;base64,".concat(results[3]);
                  _this7.image11 = results[3];
                  _this7.document_eleven = base65568;
                }

                if (i == 4) {
                  var base6556833 = "data:image/png;base64,".concat(results[4]);
                  _this7.image12 = results[4];
                  _this7.document_twelve = base6556833;
                }
              }
            }, function (err) {
              console.log(err, 'error in images??');
            });
          }
        }, {
          key: "pick4image",
          value: function pick4image() {
            var _this8 = this;

            var options = {
              maximumImagesCount: 4,
              outputType: 1,
              quality: 90
            };
            this.imagePicker.getPictures(options).then(function (results) {
              for (var i = 0; i < results.length; i++) {
                if (i == 0) {
                  var base6556 = "data:image/png;base64,".concat(results[0]);
                  _this8.image9 = results[0];
                  _this8.document_nine = base6556;
                }

                if (i == 1) {
                  var base6556 = "data:image/png;base64,".concat(results[1]);
                  _this8.image10 = results[1];
                  _this8.document_ten = base6556;
                }

                if (i == 2) {
                  var base65568 = "data:image/png;base64,".concat(results[2]);
                  _this8.image11 = results[2];
                  _this8.document_eleven = base65568;
                }

                if (i == 3) {
                  var base6556833 = "data:image/png;base64,".concat(results[3]);
                  _this8.image12 = results[3];
                  _this8.document_twelve = base6556833;
                }
              }
            }, function (err) {
              console.log(err, 'error in images??');
            });
          }
        }, {
          key: "pick3image",
          value: function pick3image() {
            var _this9 = this;

            var options = {
              maximumImagesCount: 3,
              outputType: 1,
              quality: 90
            };
            this.imagePicker.getPictures(options).then(function (results) {
              for (var i = 0; i < results.length; i++) {
                if (i == 0) {
                  var base6556 = "data:image/png;base64,".concat(results[0]);
                  _this9.image10 = results[0];
                  _this9.document_ten = base6556;
                }

                if (i == 1) {
                  var base65568 = "data:image/png;base64,".concat(results[1]);
                  _this9.image11 = results[1];
                  _this9.document_eleven = base65568;
                }

                if (i == 2) {
                  var base6556833 = "data:image/png;base64,".concat(results[2]);
                  _this9.image12 = results[2];
                  _this9.document_twelve = base6556833;
                }
              }
            }, function (err) {
              console.log(err, 'error in images??');
            });
          }
        }, {
          key: "pick2image",
          value: function pick2image() {
            var _this10 = this;

            var options = {
              maximumImagesCount: 2,
              outputType: 1,
              quality: 90
            };
            this.imagePicker.getPictures(options).then(function (results) {
              for (var i = 0; i < results.length; i++) {
                if (i == 0) {
                  var base65568 = "data:image/png;base64,".concat(results[0]);
                  _this10.image11 = results[0];
                  _this10.document_eleven = base65568;
                }

                if (i == 1) {
                  var base6556833 = "data:image/png;base64,".concat(results[1]);
                  _this10.image12 = results[1];
                  _this10.document_twelve = base6556833;
                }
              }
            }, function (err) {
              console.log(err, 'error in images??');
            });
          }
        }, {
          key: "pick1image",
          value: function pick1image() {
            var _this11 = this;

            var options = {
              maximumImagesCount: 1,
              outputType: 1,
              quality: 90
            };
            this.imagePicker.getPictures(options).then(function (results) {
              for (var i = 0; i < results.length; i++) {
                if (i == 0) {
                  var base6556833 = "data:image/png;base64,".concat(results[0]);
                  _this11.image12 = results[0];
                  _this11.document_twelve = base6556833;
                }
              }
            }, function (err) {
              console.log(err, 'error in images??');
            });
          }
        }, {
          key: "pickCustome1image",
          value: function pickCustome1image(custNum) {
            var _this12 = this;

            var options = {
              maximumImagesCount: 1,
              outputType: 1,
              quality: 90
            };
            this.imagePicker.getPictures(options).then(function (results) {
              for (var i = 0; i < results.length; i++) {
                if (i == 0) {
                  if (custNum == '1') {
                    var base640 = "data:image/png;base64,".concat(results[0]);
                    _this12.image1 = results[0];
                    _this12.document_one = base640;
                  }

                  if (custNum == '2') {
                    var base640 = "data:image/png;base64,".concat(results[0]);
                    _this12.image2 = results[0];
                    _this12.document_two = base640;
                  }

                  if (custNum == '3') {
                    var base640 = "data:image/png;base64,".concat(results[0]);
                    _this12.image3 = results[0];
                    _this12.document_three = base640;
                  }

                  if (custNum == '6') {
                    var base640 = "data:image/png;base64,".concat(results[0]);
                    _this12.image6 = results[0];
                    _this12.document_six = base640;
                  }

                  if (custNum == '7') {
                    var base640 = "data:image/png;base64,".concat(results[0]);
                    _this12.image7 = results[0];
                    _this12.document_seven = base640;
                  }
                }
              }
            }, function (err) {
              console.log(err, 'error in images??');
            });
          } // lastVeh: any;
          // deletePreviousImg() {
          //   var deleteStringy = JSON.stringify({
          //     "requestType": 'delete_images',
          //     "carImagesArray": this.uploadedImages
          //   });
          //   console.log(deleteStringy, "deleteStringydeleteStringy");
          //   this.restService.saveListVehicles(deleteStringy).subscribe(response => {
          //     this.response = JSON.parse(response['_body']);
          //     console.log(response['_body'])
          //     //     alert(response['_body'])
          //     console.log(this.response.status);
          //     if (this.response.status == 'error') {
          //     } else if (this.response.status == 'success') {
          //       console.log(this.uploadedImages, 'after deleting');
          //       this.onceFilled = null;
          //     }
          //   }, err => {
          //     alert('request error')
          //     this.dismiss();
          //   });
          // }

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

              if (this.document_one == '' || this.document_one == undefined) {
                this.document_oneError = true;
                return false;
              } else if (this.document_two == '' || this.document_two == undefined) {
                this.document_twoError = true;
                return false;
              } else if (this.document_three == '' || this.document_three == undefined) {
                this.document_threeError = true;
                return false;
              } else if (this.document_six == '' || this.document_six == undefined) {
                this.document_sixError = true;
                return false;
              } else if (this.document_seven == '' || this.document_seven == undefined) {
                this.document_sevenError = true;
                return false;
              } else {
                return true;
              }
            }
          }
        }, {
          key: "goToNext",
          value: function goToNext() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this13 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingController.create({
                        cssClass: 'ionloading',
                        message: 'Uploading images...'
                      });

                    case 2:
                      loading = _context2.sent;
                      this.storage.get('user_details').then(function (user_details) {
                        console.log(user_details);
                        _this13.userID = user_details.users_id;
                        _this13.documentBase64 = [];
                        _this13.uploadedImages = [];
                        _this13.validation = true;

                        if (_this13.validateForm() == true) {
                          var innerFunction = function innerFunction() {
                            var _this14 = this;

                            var fileTransfer = that.transfer.create();
                            var random = new Date().getTime();
                            console.log(random, 'time_stamptime_stamp');
                            var options = {
                              fileKey: 'photo',
                              fileName: 'mycars_' + random + '.jpg',
                              chunkedMode: false,
                              httpMethod: 'post',
                              mimeType: 'image/jpeg',
                              params: {
                                image: 'YPOP'
                              }
                            };
                            fileTransfer.upload(that.documentBase64[interval], 'https://app.transusdrives.com/webservices/upload_image', options).then(function (data) {
                              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this14, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                                var img;
                                return regeneratorRuntime.wrap(function _callee$(_context) {
                                  while (1) {
                                    switch (_context.prev = _context.next) {
                                      case 0:
                                        console.log('images ---- response array ===== if', data);
                                        img = JSON.parse(data.response);
                                        that.uploadedImages.push(img.message);
                                        interval++;

                                        if (interval < that.documentBase64.length) {
                                          console.log('images array ===== if', that.uploadedImages);
                                          innerFunction();
                                        } else {
                                          console.log('images array ===== else', that.uploadedImages);
                                          loading.dismiss(); // that.storage.set('onceFilled', "Yes");
                                          // that.storage.set('modelID', that.Model);
                                          // that.storage.set('makeID', that.Make);
                                          // that.storage.set('licensePlate', that.LicensePlate);
                                          // that.storage.set('carImages', that.uploadedImages);
                                          // that.storage.set('noOfSeats', that.Seats);
                                          // that.storage.set('description', that.Description);
                                          // that.storage.set('noOfDoors', that.Door);
                                          // that.storage.set('fuelTypeID', that.Gas);
                                          // that.storage.set('gearTypeID', that.GearType);
                                          // that.storage.set('noOfWheels', that.wheels);
                                          // that.storage.set('roofTypeID', that.Convertable);
                                          // that.storage.set('otherFeatures', that.other_features);
                                          // that.documentBase64 = [];

                                          that.submitFormData();
                                        }

                                      case 5:
                                      case "end":
                                        return _context.stop();
                                    }
                                  }
                                }, _callee);
                              }));
                            }, function (err) {
                              loading.dismiss();
                              console.log('Error');
                              console.log(err);
                              return;
                            });
                          };

                          _this13.fieldMissing = false;

                          _this13.submitFormData();

                          _this13.documentBase64.push(_this13.document_one);

                          _this13.documentBase64.push(_this13.document_two);

                          _this13.documentBase64.push(_this13.document_three);

                          _this13.documentBase64.push(_this13.document_six);

                          _this13.documentBase64.push(_this13.document_seven);

                          _this13.documentBase64.push(_this13.document_eight);

                          _this13.documentBase64.push(_this13.document_nine);

                          _this13.documentBase64.push(_this13.document_ten);

                          _this13.documentBase64.push(_this13.document_eleven);

                          _this13.documentBase64.push(_this13.document_twelve);

                          console.log(_this13.documentBase64, 'images_arraysssss');
                          var interval = 0;
                          loading.present();
                          var that = _this13;
                          innerFunction();
                        } else {
                          _this13.fieldMissing = true;
                        }
                      });

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "submitFormData",
          value: function submitFormData() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this15 = this;

              var loading, dataToInsert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.loadingController.create({
                        cssClass: 'ionloading',
                        message: 'Uploading data...'
                      });

                    case 2:
                      loading = _context3.sent;
                      loading.present();
                      dataToInsert = JSON.stringify({
                        requestType: 'patch_7',
                        vehicles_id: localStorage.getItem('vinNumberCarID'),
                        users_id: this.userID,
                        vehicle_img_1: this.uploadedImages[0],
                        vehicle_img_2: this.uploadedImages[1],
                        vehicle_img_3: this.uploadedImages[2],
                        vehicle_img_4: this.uploadedImages[3],
                        vehicle_img_5: this.uploadedImages[4],
                        vehicle_img_6: this.uploadedImages[5],
                        vehicle_img_7: this.uploadedImages[6],
                        vehicle_img_8: this.uploadedImages[7],
                        vehicle_img_9: this.uploadedImages[8],
                        vehicle_img_10: this.uploadedImages[9],
                        vehicle_img_11: this.uploadedImages[10],
                        vehicle_img_12: this.uploadedImages[11]
                      });
                      console.log('data to insert------->', dataToInsert);
                      this.restService.listYourDraftCarAPI(dataToInsert).subscribe(function (resAPI) {
                        loading.dismiss();
                        _this15.response = JSON.parse(resAPI['_body']);

                        if (_this15.response.status == 'success') {
                          _this15.navCtrl.navigateForward('listcar10draft');
                        }
                      });

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "goToHome",
          value: function goToHome() {
            // this.location.back()
            this.router.navigate(['listcar8draft']);
          }
        }]);

        return Listcar9draftPage;
      }();

      Listcar9draftPage.ctorParameters = function () {
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
          type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__["FileTransfer"]
        }];
      };

      Listcar9draftPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listcar9draft',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./listcar9draft.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/listcar9draft/listcar9draft.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./listcar9draft.page.scss */
        "./src/app/listcar9draft/listcar9draft.page.scss"))["default"]]
      })], Listcar9draftPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=listcar9draft-listcar9draft-module-es5.js.map