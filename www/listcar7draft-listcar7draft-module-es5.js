(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["listcar7draft-listcar7draft-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/listcar7draft/listcar7draft.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/listcar7draft/listcar7draft.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppListcar7draftListcar7draftPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [class.ios-headers]=\"plateformCheck == 'ios'\">\n  <ion-toolbar>\n    <ion-buttons [class.back_button]=\"plateformCheck == 'ios'\" slot=\"start\">\n      <img src=\"assets/img/Arrow.svg\" (click)=\"goToHome()\" />\n    </ion-buttons>\n    <ion-title [class.globe_title]=\"plateformCheck == 'ios'\"\n      >List your car</ion-title\n    >\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div style=\"padding: 0px 20px 20px 20px\">\n    <ion-row>\n      <ion-col>\n        <h3>Advance Notice</h3>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: -15px\">\n      <ion-col>\n        <p style=\"font-size: 10px; color: #c4932f\">\n          How much advance notice do you need before a trip starts?\n        </p>\n      </ion-col>\n    </ion-row>\n\n    <ion-radio-group\n      (ionChange)=\"advanceNoticeChange($event)\"\n      value=\"{{advance_notice}}\"\n    >\n      <ion-row style=\"margin-top: 10px\">\n        <ion-col size=\"2\" style=\"text-align: left\">\n          <ion-radio mode=\"md\" value=\"6 hours\"></ion-radio>\n        </ion-col>\n\n        <ion-col size=\"10\" style=\"padding-top: 7px\">\n          <p style=\"font-size: 13px; color: #000000\">6 hours</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"2\" style=\"text-align: left\">\n          <ion-radio mode=\"md\" value=\"12 hours\"></ion-radio>\n        </ion-col>\n\n        <ion-col size=\"10\" style=\"padding-top: 7px\">\n          <p style=\"font-size: 13px; color: #000000\">12 hours</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"2\" style=\"text-align: left\">\n          <ion-radio mode=\"md\" value=\"1 day\"></ion-radio>\n        </ion-col>\n\n        <ion-col size=\"10\" style=\"padding-top: 7px\">\n          <p style=\"font-size: 13px; color: #000000\">1 day</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"2\" style=\"text-align: left\">\n          <ion-radio mode=\"md\" value=\"Instant\"></ion-radio>\n        </ion-col>\n\n        <ion-col size=\"10\" style=\"padding-top: 7px\">\n          <p style=\"font-size: 13px; color: #000000\">Instant</p>\n        </ion-col>\n      </ion-row>\n    </ion-radio-group>\n\n    <!-- ---------------------------------2-------------------------------------- -->\n\n    <ion-row>\n      <ion-col>\n        <h3>Minimum Trip Duration</h3>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: -15px\">\n      <ion-col>\n        <p style=\"font-size: 10px; color: #c4932f\">\n          What's the shortest possible trip you'll accept?\n        </p>\n      </ion-col>\n    </ion-row>\n\n    <ion-radio-group\n      (ionChange)=\"maximumTripChange($event)\"\n      value=\"{{min_trip}}\"\n    >\n      <ion-row style=\"margin-top: 10px\">\n        <ion-col size=\"2\" style=\"text-align: left\">\n          <ion-radio mode=\"md\" value=\"1 day\"></ion-radio>\n        </ion-col>\n\n        <ion-col size=\"10\" style=\"padding-top: 7px\">\n          <p style=\"font-size: 13px; color: #000000\">1 day</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"2\" style=\"text-align: left\">\n          <ion-radio mode=\"md\" value=\"2 day\"></ion-radio>\n        </ion-col>\n\n        <ion-col size=\"10\" style=\"padding-top: 7px\">\n          <p style=\"font-size: 13px; color: #000000\">2 day</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"2\" style=\"text-align: left\">\n          <ion-radio mode=\"md\" value=\"3 day\"></ion-radio>\n        </ion-col>\n\n        <ion-col size=\"10\" style=\"padding-top: 7px\">\n          <p style=\"font-size: 13px; color: #000000\">3 day</p>\n        </ion-col>\n      </ion-row>\n    </ion-radio-group>\n\n    <!-- ------------------------3------------------------------ -->\n\n    <ion-row>\n      <ion-col>\n        <h3>Maximum Trip Duration</h3>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: -15px\">\n      <ion-col>\n        <p style=\"font-size: 10px; color: #c4932f\">\n          What's the shortest possible trip you'll accept?\n        </p>\n      </ion-col>\n    </ion-row>\n\n    <ion-radio-group\n      (ionChange)=\"maximumTripDurationChange($event)\"\n      value=\"{{max_trip}}\"\n    >\n      <ion-row style=\"margin-top: 10px\">\n        <ion-col size=\"2\" style=\"text-align: left\">\n          <ion-radio mode=\"md\" value=\"5 day\"></ion-radio>\n        </ion-col>\n\n        <ion-col size=\"10\" style=\"padding-top: 7px\">\n          <p style=\"font-size: 13px; color: #000000\">5 days</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"2\" style=\"text-align: left\">\n          <ion-radio mode=\"md\" value=\"1 week\"></ion-radio>\n        </ion-col>\n\n        <ion-col size=\"10\" style=\"padding-top: 7px\">\n          <p style=\"font-size: 13px; color: #000000\">1 week</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"2\" style=\"text-align: left\">\n          <ion-radio mode=\"md\" value=\"2 week\"></ion-radio>\n        </ion-col>\n\n        <ion-col size=\"10\" style=\"padding-top: 7px\">\n          <p style=\"font-size: 13px; color: #000000\">2 weeks</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"2\" style=\"text-align: left\">\n          <ion-radio mode=\"md\" value=\"1 month\"></ion-radio>\n        </ion-col>\n\n        <ion-col size=\"10\" style=\"padding-top: 7px\">\n          <p style=\"font-size: 13px; color: #000000\">1 month</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"2\" style=\"text-align: left\">\n          <ion-radio mode=\"md\" value=\"3 month\"></ion-radio>\n        </ion-col>\n\n        <ion-col size=\"10\" style=\"padding-top: 7px\">\n          <p style=\"font-size: 13px; color: #000000\">3 month</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"2\" style=\"text-align: left\">\n          <ion-radio mode=\"md\" value=\"any\"></ion-radio>\n        </ion-col>\n\n        <ion-col size=\"10\" style=\"padding-top: 7px\">\n          <p style=\"font-size: 13px; color: #000000\">Any</p>\n        </ion-col>\n      </ion-row>\n    </ion-radio-group>\n\n    <ion-row>\n      <ion-col size=\"2\"></ion-col>\n      <ion-col size=\"8\">\n        <ion-button\n          color=\"primary\"\n          expand=\"block\"\n          shape=\"round\"\n          (click)=\"submitForm()\"\n          >Next</ion-button\n        >\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/listcar7draft/listcar7draft-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/listcar7draft/listcar7draft-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: Listcar7draftPageRoutingModule */

    /***/
    function srcAppListcar7draftListcar7draftRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Listcar7draftPageRoutingModule", function () {
        return Listcar7draftPageRoutingModule;
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


      var _listcar7draft_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./listcar7draft.page */
      "./src/app/listcar7draft/listcar7draft.page.ts");

      var routes = [{
        path: '',
        component: _listcar7draft_page__WEBPACK_IMPORTED_MODULE_3__["Listcar7draftPage"]
      }];

      var Listcar7draftPageRoutingModule = /*#__PURE__*/_createClass(function Listcar7draftPageRoutingModule() {
        _classCallCheck(this, Listcar7draftPageRoutingModule);
      });

      Listcar7draftPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Listcar7draftPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/listcar7draft/listcar7draft.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/listcar7draft/listcar7draft.module.ts ***!
      \*******************************************************/

    /*! exports provided: Listcar7draftPageModule */

    /***/
    function srcAppListcar7draftListcar7draftModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Listcar7draftPageModule", function () {
        return Listcar7draftPageModule;
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


      var _listcar7draft_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./listcar7draft-routing.module */
      "./src/app/listcar7draft/listcar7draft-routing.module.ts");
      /* harmony import */


      var _listcar7draft_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./listcar7draft.page */
      "./src/app/listcar7draft/listcar7draft.page.ts");

      var Listcar7draftPageModule = /*#__PURE__*/_createClass(function Listcar7draftPageModule() {
        _classCallCheck(this, Listcar7draftPageModule);
      });

      Listcar7draftPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _listcar7draft_routing_module__WEBPACK_IMPORTED_MODULE_5__["Listcar7draftPageRoutingModule"]],
        declarations: [_listcar7draft_page__WEBPACK_IMPORTED_MODULE_6__["Listcar7draftPage"]]
      })], Listcar7draftPageModule);
      /***/
    },

    /***/
    "./src/app/listcar7draft/listcar7draft.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/listcar7draft/listcar7draft.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppListcar7draftListcar7draftPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3em 0.1em 8px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n}\n\n.error {\n  color: red;\n}\n\n.real_image {\n  padding: 0px;\n}\n\n.real_image img {\n  width: 100%;\n  height: 100px;\n}\n\n.real_image_2 {\n  padding: 0px;\n}\n\n.real_image_2 img {\n  width: 150px;\n  height: 164px;\n}\n\n.list_1 {\n  padding: 0em 1em;\n}\n\n.list_1 h3 {\n  margin: 0px;\n  margin-top: 0.5em;\n}\n\n.left_4 {\n  margin-left: 0.7em !important;\n}\n\n.input_list {\n  border: 1px solid #d4dce1;\n  background: #f7f8fa;\n  border-radius: 28px;\n  font-size: 13px;\n  color: #000;\n  --placeholder-color: #b2b2b4;\n  --padding-bottom: 1.5em;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n}\n\n.upload_images {\n  color: #c4932f;\n  font-size: 12px;\n  margin: 5px 0px;\n}\n\n.list_2 {\n  text-align: center;\n  background: #f7f8fa;\n  border: 1px dashed #d4dce1;\n  border-radius: 10px;\n  padding: 2.5em 0em;\n}\n\n.list_9 {\n  text-align: center;\n  background: #f7f8fa;\n  border: 1px dashed #d4dce1;\n  border-radius: 10px;\n  padding: 3.7em 0em 2.5em 0em;\n  height: 163px;\n}\n\n.list_9 p {\n  color: #d2d6d8;\n  font-size: 12px;\n  margin: 0px;\n  margin-top: 8px;\n}\n\n.list_3 {\n  background: #f7f8fa;\n  border: 1px solid #d4dce1;\n  border-radius: 10px;\n  color: #000;\n  --placeholder-color: #b2b2b4;\n  font-size: 13px;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n}\n\n@media (orientation: portrait) {\n  .btn_footer {\n    margin: 0.7em 0em 1em 0em;\n    position: absolute;\n    width: 100%;\n    bottom: 10px;\n  }\n}\n\n@media (orientation: landscape) {\n  .btn_footer {\n    margin: 0.7em 0em 1em 0em;\n  }\n}\n\nion-slide span {\n  border: 1px solid #000;\n  border-radius: 22px;\n  padding: 8px 14px;\n  margin-left: 1em;\n}\n\n.num {\n  padding: 9px 10px !important;\n}\n\n.calender_slider {\n  background: #f7f8fa;\n  padding: 0.6em 0em;\n}\n\n.calender_slider_text {\n  margin: 0px;\n  position: relative;\n  top: -2px;\n  font-size: 18px;\n}\n\nion-slide {\n  margin-left: 0.6em;\n}\n\nion-slide:first-child {\n  margin-left: 0em;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n}\n\n.btn_footer {\n  padding: 0.5em 1em 1.2em 1em;\n}\n\n.info {\n  background: #6e6d6d;\n  padding: 0.4em 0em;\n}\n\n.info p {\n  margin: 0px;\n  color: #fff;\n  font-size: 10px;\n}\n\nion-select {\n  background: #f7f8fa;\n  border: 1px solid #d4dce1;\n  border-radius: 30px;\n  --placeholder-color: #b2b2b4;\n  color: #000;\n  font-size: 13px;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n  --padding-bottom: 1.5em;\n  --padding-end: 1.5em;\n}\n\n.list_4 {\n  background: #f7f8fa;\n  border: 1px solid #d4dce1;\n  border-radius: 12px;\n  color: #d4dce1;\n  font-size: 13px;\n}\n\n.list_4 p {\n  margin: 0px;\n  color: #000;\n}\n\n.list_5 {\n  border-left: 1px dashed #c7c7c7;\n  height: 48px;\n  float: right;\n  margin-top: 12px;\n}\n\n.list_6 {\n  margin-bottom: 2em !important;\n}\n\n.list_7 {\n  height: 10px;\n  background: green;\n  width: 10px;\n  float: right;\n  position: relative;\n  right: 5px;\n  border-radius: 50%;\n  margin-top: 3px;\n}\n\n.list_8 {\n  height: 10px;\n  background: red;\n  width: 10px;\n  float: right;\n  position: relative;\n  right: 5px;\n  border-radius: 50%;\n}\n\n.activeState {\n  background: #c4932f;\n  border: 1px solid #c4932f !important;\n  color: #fff !important;\n}\n\n.activeEndState {\n  background: #c4932f;\n  border: 1px solid #c4932f !important;\n  color: #fff !important;\n}\n\n.footer-md::before {\n  left: 0;\n  top: -2px;\n  bottom: auto;\n  background-position: left 0 top 0;\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  background-repeat: repeat-x;\n  content: \"\";\n}\n\n.footer-ios::before {\n  left: 0;\n  top: -2px;\n  bottom: auto;\n  background-position: left 0 top 0;\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  background-repeat: repeat-x;\n  content: \"\";\n}\n\np {\n  display: block;\n  -webkit-margin-before: 0em;\n          margin-block-start: 0em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdGNhcjdkcmFmdC9saXN0Y2FyN2RyYWZ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksd0JBQUE7SUFDQSxxQkFBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0FBQUo7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQUVKOztBQUFBO0VBQ0ksWUFBQTtBQUdKOztBQURBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFJSjs7QUFGQTtFQUNJLGdCQUFBO0FBS0o7O0FBSEE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUFNSjs7QUFKQTtFQUNJLDZCQUFBO0FBT0o7O0FBTEE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBUUo7O0FBTkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFTSjs7QUFQQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFVSjs7QUFSQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0FBV0o7O0FBVEE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBWUo7O0FBVkE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQWFKOztBQVZBO0VBQ0k7SUFDSSx5QkFBQTtJQUVBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUFZTjtBQUNGOztBQVRBO0VBQ0k7SUFDSSx5QkFBQTtFQVdOO0FBQ0Y7O0FBUkE7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQVVKOztBQVJBO0VBQ0ksNEJBQUE7QUFXSjs7QUFUQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUFZSjs7QUFWQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBYUo7O0FBWEE7RUFDSSxrQkFBQTtBQWNKOztBQVpBO0VBQ0ksZ0JBQUE7QUFlSjs7QUFiQTtFQUNJLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQWdCSjs7QUFkQTtFQUNJLDRCQUFBO0FBaUJKOztBQWZBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQWtCSjs7QUFoQkE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFtQko7O0FBakJBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FBb0JKOztBQWxCQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBcUJKOztBQW5CQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FBc0JKOztBQXBCQTtFQUNJLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQXVCSjs7QUFyQkE7RUFDSSw2QkFBQTtBQXdCSjs7QUF0QkE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQXlCSjs7QUF2QkE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUEwQko7O0FBeEJBO0VBQ0ksbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0FBMkJKOztBQXpCQTtFQUNJLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtBQTRCSjs7QUF6QkE7RUFDSSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUE0Qko7O0FBekJBO0VBQ0ksT0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FBNEJKOztBQXpCQTtFQUNJLGNBQUE7RUFDQSwwQkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxxQkFBQTtFQUNBLHlCQUFBO1VBQUEsd0JBQUE7RUFDQSx1QkFBQTtVQUFBLHNCQUFBO0FBNEJKIiwiZmlsZSI6InNyYy9hcHAvbGlzdGNhcjdkcmFmdC9saXN0Y2FyN2RyYWZ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIHBhZGRpbmc6IDAuOGVtIDAuMWVtIDAgMDtcclxuICAgIC0tYmFja2dyb3VuZDogI2M0OTMyZjtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4taGVpZ2h0IDogODAwcHgpIHtcclxuICAgIGlvbi10b29sYmFyIHtcclxuICAgICAgICBwYWRkaW5nOiAzZW0gMC4xZW0gOHB4IDA7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjYzQ5MzJmO1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcbi5yZWFsX2ltYWdlIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG4ucmVhbF9pbWFnZSBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcbi5yZWFsX2ltYWdlXzIge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcbi5yZWFsX2ltYWdlXzIgaW1nIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMTY0cHg7XHJcbn1cclxuLmxpc3RfMSB7XHJcbiAgICBwYWRkaW5nOiAwZW0gMWVtO1xyXG59XHJcbi5saXN0XzEgaDMge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxufVxyXG4ubGVmdF80IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjdlbSAhaW1wb3J0YW50O1xyXG59XHJcbi5pbnB1dF9saXN0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGRjZTE7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjdmOGZhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjhweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogI2IyYjJiNDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEuNWVtO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxLjVlbTtcclxuICAgIC0tcGFkZGluZy10b3A6IDEuNWVtO1xyXG59XHJcbi51cGxvYWRfaW1hZ2VzIHtcclxuICAgIGNvbG9yOiAjYzQ5MzJmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luOiA1cHggMHB4O1xyXG59XHJcbi5saXN0XzIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI2Y3ZjhmYTtcclxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjZDRkY2UxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDIuNWVtIDBlbTtcclxufVxyXG4ubGlzdF85IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNmN2Y4ZmE7XHJcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgI2Q0ZGNlMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAzLjdlbSAwZW0gMi41ZW0gMGVtO1xyXG4gICAgaGVpZ2h0OiAxNjNweDtcclxufVxyXG4ubGlzdF85IHAge1xyXG4gICAgY29sb3I6ICNkMmQ2ZDg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG4ubGlzdF8zIHtcclxuICAgIGJhY2tncm91bmQ6ICNmN2Y4ZmE7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRkY2UxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogI2IyYjJiNDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMS41ZW07XHJcbiAgICAtLXBhZGRpbmctdG9wOiAxLjVlbTtcclxufVxyXG5cclxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgIC5idG5fZm9vdGVyIHtcclxuICAgICAgICBtYXJnaW46IDAuN2VtIDBlbSAxZW0gMGVtO1xyXG5cclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAgIC5idG5fZm9vdGVyIHtcclxuICAgICAgICBtYXJnaW46IDAuN2VtIDBlbSAxZW0gMGVtO1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24tc2xpZGUgc3BhbiB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcclxuICAgIHBhZGRpbmc6IDhweCAxNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxufVxyXG4ubnVtIHtcclxuICAgIHBhZGRpbmc6IDlweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhbGVuZGVyX3NsaWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjdmOGZhO1xyXG4gICAgcGFkZGluZzogMC42ZW0gMGVtO1xyXG59XHJcbi5jYWxlbmRlcl9zbGlkZXJfdGV4dCB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTJweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5pb24tc2xpZGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNmVtO1xyXG59XHJcbmlvbi1zbGlkZTpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMGVtO1xyXG59XHJcbmlvbi1idXR0b24ge1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMS41ZW07XHJcbiAgICAtLXBhZGRpbmctdG9wOiAxLjVlbTtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uYnRuX2Zvb3RlciB7XHJcbiAgICBwYWRkaW5nOiAwLjVlbSAxZW0gMS4yZW0gMWVtO1xyXG59XHJcbi5pbmZvIHtcclxuICAgIGJhY2tncm91bmQ6ICM2ZTZkNmQ7XHJcbiAgICBwYWRkaW5nOiAwLjRlbSAwZW07XHJcbn1cclxuLmluZm8gcCB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcbmlvbi1zZWxlY3Qge1xyXG4gICAgYmFja2dyb3VuZDogI2Y3ZjhmYTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGRjZTE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogI2IyYjJiNDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxLjVlbTtcclxuICAgIC0tcGFkZGluZy10b3A6IDEuNWVtO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMS41ZW07XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxLjVlbTtcclxufVxyXG4ubGlzdF80IHtcclxuICAgIGJhY2tncm91bmQ6ICNmN2Y4ZmE7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRkY2UxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGNvbG9yOiAjZDRkY2UxO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbi5saXN0XzQgcCB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcbi5saXN0XzUge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBkYXNoZWQgI2M3YzdjNztcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbn1cclxuLmxpc3RfNiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyZW0gIWltcG9ydGFudDtcclxufVxyXG4ubGlzdF83IHtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICByaWdodDogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG59XHJcbi5saXN0Xzgge1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICByaWdodDogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5hY3RpdmVTdGF0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYzQ5MzJmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M0OTMyZiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG4uYWN0aXZlRW5kU3RhdGUge1xyXG4gICAgYmFja2dyb3VuZDogI2M0OTMyZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjNDkzMmYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb290ZXItbWQ6OmJlZm9yZSB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAtMnB4O1xyXG4gICAgYm90dG9tOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCAwIHRvcCAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbn1cclxuXHJcbi5mb290ZXItaW9zOjpiZWZvcmUge1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogLTJweDtcclxuICAgIGJvdHRvbTogYXV0bztcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgMCB0b3AgMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG59XHJcblxyXG5wIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwZW07XHJcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAwZW07XHJcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/listcar7draft/listcar7draft.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/listcar7draft/listcar7draft.page.ts ***!
      \*****************************************************/

    /*! exports provided: Listcar7draftPage */

    /***/
    function srcAppListcar7draftListcar7draftPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Listcar7draftPage", function () {
        return Listcar7draftPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../rest.service */
      "./src/app/rest.service.ts");

      var Listcar7draftPage = /*#__PURE__*/function () {
        function Listcar7draftPage(restService, location, navCtrl, toastController, loadingController, router, storage) {
          _classCallCheck(this, Listcar7draftPage);

          this.restService = restService;
          this.location = location;
          this.navCtrl = navCtrl;
          this.toastController = toastController;
          this.loadingController = loadingController;
          this.router = router;
          this.storage = storage;
          this.advance_notice = "";
          this.min_trip = "";
          this.max_trip = "";
          this.oneDataSet = "";
          this.val = "6 hours";
        }

        _createClass(Listcar7draftPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.storage.get("mycardraft").then(function (res) {
              console.log("mycardraft ali", res);
              _this.advance_notice = res.advance_notice;
              _this.min_trip = res.min_trip_duration;
              _this.max_trip = res.max_trip_duration;
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {}
        }, {
          key: "advanceNoticeChange",
          value: function advanceNoticeChange(event) {
            console.log(event.detail.value);
            this.advance_notice = event.detail.value;
          }
        }, {
          key: "maximumTripChange",
          value: function maximumTripChange(event) {
            console.log(event.detail.value);
            this.min_trip = event.detail.value;
          }
        }, {
          key: "maximumTripDurationChange",
          value: function maximumTripDurationChange(event) {
            console.log(event.detail.value);
            this.max_trip = event.detail.value;
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var data;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (this.advance_notice != "" && this.min_trip != "" && this.max_trip != "") {
                        data = JSON.stringify({
                          requestType: "patch_6",
                          vehicles_id: localStorage.getItem("vinNumberCarID"),
                          advance_notice: this.advance_notice,
                          min_trip: this.min_trip,
                          max_trip: this.max_trip
                        });
                        this.restService.listYourDraftCarAPI(data).subscribe(function (responseData) {
                          _this2.oneDataSet = JSON.parse(responseData["_body"]);
                          console.log(_this2.oneDataSet, "getiing from oneset");

                          if (_this2.oneDataSet.status == "success") {
                            _this2.navCtrl.navigateForward("listcar8draft");
                          }
                        }, function (err) {
                          _this2.presentToast("Error");
                        });
                      } else {
                        this.presentToast("Indufficient Data");
                      }

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentToast",
          value: function presentToast(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toastController.create({
                        message: msg,
                        duration: 2000,
                        position: "top"
                      });

                    case 2:
                      toast = _context2.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "goToHome",
          value: function goToHome() {
            // this.location.back()
            this.router.navigate(["listcar6draft"]);
          }
        }]);

        return Listcar7draftPage;
      }();

      Listcar7draftPage.ctorParameters = function () {
        return [{
          type: _rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
        }];
      };

      Listcar7draftPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-listcar7draft",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./listcar7draft.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/listcar7draft/listcar7draft.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./listcar7draft.page.scss */
        "./src/app/listcar7draft/listcar7draft.page.scss"))["default"]]
      })], Listcar7draftPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=listcar7draft-listcar7draft-module-es5.js.map