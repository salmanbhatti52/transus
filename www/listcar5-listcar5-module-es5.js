(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["listcar5-listcar5-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/listcar5/listcar5.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/listcar5/listcar5.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppListcar5Listcar5PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header  [class.ios-headers]=\"plateformCheck == 'ios'\">\n  <ion-toolbar>\n    <ion-buttons [class.back_button]=\"plateformCheck == 'ios'\" slot=\"start\">\n      <img src=\"assets/img/Arrow.svg\" (click)=\"goToHome()\" />\n    </ion-buttons>\n    <ion-title [class.globe_title]=\"plateformCheck == 'ios'\"\n      >List your car</ion-title\n    >\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div style=\"padding: 0px 20px 20px 20px\">\n    <ion-row>\n      <ion-col>\n        <h3>Advance Notice</h3>\n      </ion-col>\n    </ion-row>\n \n    <ion-row style=\"margin-top: -15px\">\n      <ion-col>\n        <p style=\"font-size: 10px; color: #c4932f\">\n          How much advance notice do you need before a trip starts?\n        </p>\n      </ion-col>\n    </ion-row>\n\n    <ion-radio-group (ionChange)=\"advanceNoticeChange($event)\">\n      <ion-row style=\"margin-top: 10px\">\n        <ion-col size=\"2\" style=\"text-align: left\">\n          <ion-radio mode=\"md\" value=\"6 hours\"></ion-radio>\n        </ion-col>\n\n        <ion-col size=\"10\" style=\"padding-top: 7px\">\n          <p style=\"font-size: 13px; color: #000000\">6 hours</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"2\" style=\"text-align: left\">\n          <ion-radio mode=\"md\" value=\"12 hours\"></ion-radio>\n        </ion-col>\n\n        <ion-col size=\"10\" style=\"padding-top: 7px\">\n          <p style=\"font-size: 13px; color: #000000\">12 hours</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"2\" style=\"text-align: left\">\n          <ion-radio mode=\"md\" value=\"1 day\"></ion-radio>\n        </ion-col>\n\n        <ion-col size=\"10\" style=\"padding-top: 7px\">\n          <p style=\"font-size: 13px; color: #000000\">1 day</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"2\" style=\"text-align: left\">\n          <ion-radio mode=\"md\" value=\"Instant\"></ion-radio>\n        </ion-col>\n\n        <ion-col size=\"10\" style=\"padding-top: 7px\">\n          <p style=\"font-size: 13px; color: #000000\">Instant</p>\n        </ion-col>\n      </ion-row>\n    </ion-radio-group>\n\n    <!-- ---------------------------------2-------------------------------------- -->\n\n    <ion-row>\n      <ion-col>\n        <h3>Minimum Trip Duration</h3>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: -15px\">\n      <ion-col>\n        <p style=\"font-size: 10px; color: #c4932f\">\n          What's the shortest possible trip you'll accept?\n        </p>\n      </ion-col>\n    </ion-row>\n\n    <ion-radio-group (ionChange)=\"maximumTripChange($event)\">\n      <ion-row style=\"margin-top: 10px\">\n        <ion-col size=\"2\" style=\"text-align: left\">\n          <ion-radio mode=\"md\" value=\"1 day\"></ion-radio>\n        </ion-col>\n\n        <ion-col size=\"10\" style=\"padding-top: 7px\">\n          <p style=\"font-size: 13px; color: #000000\">1 day</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"2\" style=\"text-align: left\">\n          <ion-radio mode=\"md\" value=\"2 day\"></ion-radio>\n        </ion-col>\n\n        <ion-col size=\"10\" style=\"padding-top: 7px\">\n          <p style=\"font-size: 13px; color: #000000\">2 day</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"2\" style=\"text-align: left\">\n          <ion-radio mode=\"md\" value=\"3 day\"></ion-radio>\n        </ion-col>\n\n        <ion-col size=\"10\" style=\"padding-top: 7px\">\n          <p style=\"font-size: 13px; color: #000000\">3 day</p>\n        </ion-col>\n      </ion-row>\n    </ion-radio-group>\n\n    <!-- ------------------------3------------------------------ -->\n\n    <ion-row>\n      <ion-col>\n        <h3>Maximum Trip Duration</h3>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: -15px\">\n      <ion-col>\n        <p style=\"font-size: 10px; color: #c4932f\">\n          What's the shortest possible trip you'll accept?\n        </p>\n      </ion-col>\n    </ion-row>\n\n    <ion-radio-group (ionChange)=\"maximumTripDurationChange($event)\">\n      <ion-row style=\"margin-top: 10px\">\n        <ion-col size=\"2\" style=\"text-align: left\">\n          <ion-radio mode=\"md\" value=\"5 day\"></ion-radio>\n        </ion-col>\n\n        <ion-col size=\"10\" style=\"padding-top: 7px\">\n          <p style=\"font-size: 13px; color: #000000\">5 days</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"2\" style=\"text-align: left\">\n          <ion-radio mode=\"md\" value=\"1 week\"></ion-radio>\n        </ion-col>\n\n        <ion-col size=\"10\" style=\"padding-top: 7px\">\n          <p style=\"font-size: 13px; color: #000000\">1 week</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"2\" style=\"text-align: left\">\n          <ion-radio mode=\"md\" value=\"2 week\"></ion-radio>\n        </ion-col>\n\n        <ion-col size=\"10\" style=\"padding-top: 7px\">\n          <p style=\"font-size: 13px; color: #000000\">2 weeks</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"2\" style=\"text-align: left\">\n          <ion-radio mode=\"md\" value=\"1 month\"></ion-radio>\n        </ion-col>\n\n        <ion-col size=\"10\" style=\"padding-top: 7px\">\n          <p style=\"font-size: 13px; color: #000000\">1 month</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"2\" style=\"text-align: left\">\n          <ion-radio mode=\"md\" value=\"3 month\"></ion-radio>\n        </ion-col>\n\n        <ion-col size=\"10\" style=\"padding-top: 7px\">\n          <p style=\"font-size: 13px; color: #000000\">3 month</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"2\" style=\"text-align: left\">\n          <ion-radio mode=\"md\" value=\"any\"></ion-radio>\n        </ion-col>\n\n        <ion-col size=\"10\" style=\"padding-top: 7px\">\n          <p style=\"font-size: 13px; color: #000000\">Any</p>\n        </ion-col>\n      </ion-row>\n    </ion-radio-group>\n\n    <ion-row>\n      <ion-col size=\"2\"></ion-col>\n      <ion-col size=\"8\">\n        <ion-button\n          color=\"primary\"\n          expand=\"block\"\n          shape=\"round\"\n          (click)=\"submitForm()\"\n          >Next</ion-button\n        >\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/listcar5/listcar5-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/listcar5/listcar5-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: Listcar5PageRoutingModule */

    /***/
    function srcAppListcar5Listcar5RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Listcar5PageRoutingModule", function () {
        return Listcar5PageRoutingModule;
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


      var _listcar5_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./listcar5.page */
      "./src/app/listcar5/listcar5.page.ts");

      var routes = [{
        path: '',
        component: _listcar5_page__WEBPACK_IMPORTED_MODULE_3__["Listcar5Page"]
      }];

      var Listcar5PageRoutingModule = /*#__PURE__*/_createClass(function Listcar5PageRoutingModule() {
        _classCallCheck(this, Listcar5PageRoutingModule);
      });

      Listcar5PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Listcar5PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/listcar5/listcar5.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/listcar5/listcar5.module.ts ***!
      \*********************************************/

    /*! exports provided: Listcar5PageModule */

    /***/
    function srcAppListcar5Listcar5ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Listcar5PageModule", function () {
        return Listcar5PageModule;
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


      var _listcar5_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./listcar5-routing.module */
      "./src/app/listcar5/listcar5-routing.module.ts");
      /* harmony import */


      var _listcar5_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./listcar5.page */
      "./src/app/listcar5/listcar5.page.ts");

      var Listcar5PageModule = /*#__PURE__*/_createClass(function Listcar5PageModule() {
        _classCallCheck(this, Listcar5PageModule);
      });

      Listcar5PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _listcar5_routing_module__WEBPACK_IMPORTED_MODULE_5__["Listcar5PageRoutingModule"]],
        declarations: [_listcar5_page__WEBPACK_IMPORTED_MODULE_6__["Listcar5Page"]]
      })], Listcar5PageModule);
      /***/
    },

    /***/
    "./src/app/listcar5/listcar5.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/listcar5/listcar5.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppListcar5Listcar5PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3em 0.1em 8px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n}\n\n.error {\n  color: red;\n}\n\n.real_image {\n  padding: 0px;\n}\n\n.real_image img {\n  width: 100%;\n  height: 100px;\n}\n\n.real_image_2 {\n  padding: 0px;\n}\n\n.real_image_2 img {\n  width: 150px;\n  height: 164px;\n}\n\n.list_1 {\n  padding: 0em 1em;\n}\n\n.list_1 h3 {\n  margin: 0px;\n  margin-top: 0.5em;\n}\n\n.left_4 {\n  margin-left: 0.7em !important;\n}\n\n.input_list {\n  border: 1px solid #d4dce1;\n  background: #f7f8fa;\n  border-radius: 28px;\n  font-size: 13px;\n  color: #000;\n  --placeholder-color: #b2b2b4;\n  --padding-bottom: 1.5em;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n}\n\n.upload_images {\n  color: #c4932f;\n  font-size: 12px;\n  margin: 5px 0px;\n}\n\n.list_2 {\n  text-align: center;\n  background: #f7f8fa;\n  border: 1px dashed #d4dce1;\n  border-radius: 10px;\n  padding: 2.5em 0em;\n}\n\n.list_9 {\n  text-align: center;\n  background: #f7f8fa;\n  border: 1px dashed #d4dce1;\n  border-radius: 10px;\n  padding: 3.7em 0em 2.5em 0em;\n  height: 163px;\n}\n\n.list_9 p {\n  color: #d2d6d8;\n  font-size: 12px;\n  margin: 0px;\n  margin-top: 8px;\n}\n\n.list_3 {\n  background: #f7f8fa;\n  border: 1px solid #d4dce1;\n  border-radius: 10px;\n  color: #000;\n  --placeholder-color: #b2b2b4;\n  font-size: 13px;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n}\n\n@media (orientation: portrait) {\n  .btn_footer {\n    margin: 0.7em 0em 1em 0em;\n    position: absolute;\n    width: 100%;\n    bottom: 10px;\n  }\n}\n\n@media (orientation: landscape) {\n  .btn_footer {\n    margin: 0.7em 0em 1em 0em;\n  }\n}\n\nion-slide span {\n  border: 1px solid #000;\n  border-radius: 22px;\n  padding: 8px 14px;\n  margin-left: 1em;\n}\n\n.num {\n  padding: 9px 10px !important;\n}\n\n.calender_slider {\n  background: #f7f8fa;\n  padding: 0.6em 0em;\n}\n\n.calender_slider_text {\n  margin: 0px;\n  position: relative;\n  top: -2px;\n  font-size: 18px;\n}\n\nion-slide {\n  margin-left: 0.6em;\n}\n\nion-slide:first-child {\n  margin-left: 0em;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n}\n\n.btn_footer {\n  padding: 0.5em 1em 1.2em 1em;\n}\n\n.info {\n  background: #6e6d6d;\n  padding: 0.4em 0em;\n}\n\n.info p {\n  margin: 0px;\n  color: #fff;\n  font-size: 10px;\n}\n\nion-select {\n  background: #f7f8fa;\n  border: 1px solid #d4dce1;\n  border-radius: 30px;\n  --placeholder-color: #b2b2b4;\n  color: #000;\n  font-size: 13px;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n  --padding-bottom: 1.5em;\n  --padding-end: 1.5em;\n}\n\n.list_4 {\n  background: #f7f8fa;\n  border: 1px solid #d4dce1;\n  border-radius: 12px;\n  color: #d4dce1;\n  font-size: 13px;\n}\n\n.list_4 p {\n  margin: 0px;\n  color: #000;\n}\n\n.list_5 {\n  border-left: 1px dashed #c7c7c7;\n  height: 48px;\n  float: right;\n  margin-top: 12px;\n}\n\n.list_6 {\n  margin-bottom: 2em !important;\n}\n\n.list_7 {\n  height: 10px;\n  background: green;\n  width: 10px;\n  float: right;\n  position: relative;\n  right: 5px;\n  border-radius: 50%;\n  margin-top: 3px;\n}\n\n.list_8 {\n  height: 10px;\n  background: red;\n  width: 10px;\n  float: right;\n  position: relative;\n  right: 5px;\n  border-radius: 50%;\n}\n\n.activeState {\n  background: #c4932f;\n  border: 1px solid #c4932f !important;\n  color: #fff !important;\n}\n\n.activeEndState {\n  background: #c4932f;\n  border: 1px solid #c4932f !important;\n  color: #fff !important;\n}\n\n.footer-md::before {\n  left: 0;\n  top: -2px;\n  bottom: auto;\n  background-position: left 0 top 0;\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  background-repeat: repeat-x;\n  content: \"\";\n}\n\n.footer-ios::before {\n  left: 0;\n  top: -2px;\n  bottom: auto;\n  background-position: left 0 top 0;\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  background-repeat: repeat-x;\n  content: \"\";\n}\n\np {\n  display: block;\n  -webkit-margin-before: 0em;\n          margin-block-start: 0em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdGNhcjUvbGlzdGNhcjUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSx3QkFBQTtJQUNBLHFCQUFBO0VBQ047QUFDRjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFBSjs7QUFHQTtFQUNJLFVBQUE7QUFBSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBRUo7O0FBQUE7RUFDSSxZQUFBO0FBR0o7O0FBREE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQUlKOztBQUZBO0VBQ0ksZ0JBQUE7QUFLSjs7QUFIQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQU1KOztBQUpBO0VBQ0ksNkJBQUE7QUFPSjs7QUFMQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFRSjs7QUFOQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQVNKOztBQVBBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQVVKOztBQVJBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7QUFXSjs7QUFUQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFZSjs7QUFWQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBYUo7O0FBVkE7RUFDSTtJQUNJLHlCQUFBO0lBRUEsa0JBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtFQVlOO0FBQ0Y7O0FBVEE7RUFDSTtJQUNJLHlCQUFBO0VBV047QUFDRjs7QUFSQTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBVUo7O0FBUkE7RUFDSSw0QkFBQTtBQVdKOztBQVRBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQVlKOztBQVZBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFhSjs7QUFYQTtFQUNJLGtCQUFBO0FBY0o7O0FBWkE7RUFDSSxnQkFBQTtBQWVKOztBQWJBO0VBQ0ksdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBZ0JKOztBQWRBO0VBQ0ksNEJBQUE7QUFpQko7O0FBZkE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FBa0JKOztBQWhCQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQW1CSjs7QUFqQkE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7QUFvQko7O0FBbEJBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFxQko7O0FBbkJBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUFzQko7O0FBcEJBO0VBQ0ksK0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBdUJKOztBQXJCQTtFQUNJLDZCQUFBO0FBd0JKOztBQXRCQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBeUJKOztBQXZCQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQTBCSjs7QUF4QkE7RUFDSSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7QUEyQko7O0FBekJBO0VBQ0ksbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0FBNEJKOztBQXpCQTtFQUNJLE9BQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQTRCSjs7QUF6QkE7RUFDSSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUE0Qko7O0FBekJBO0VBQ0ksY0FBQTtFQUNBLDBCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLHFCQUFBO0VBQ0EseUJBQUE7VUFBQSx3QkFBQTtFQUNBLHVCQUFBO1VBQUEsc0JBQUE7QUE0QkoiLCJmaWxlIjoic3JjL2FwcC9saXN0Y2FyNS9saXN0Y2FyNS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgICBwYWRkaW5nOiAwLjhlbSAwLjFlbSAwIDA7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNjNDkzMmY7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLWhlaWdodCA6IDgwMHB4KSB7XHJcbiAgICBpb24tdG9vbGJhciB7XHJcbiAgICAgICAgcGFkZGluZzogM2VtIDAuMWVtIDhweCAwO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogI2M0OTMyZjtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG4ucmVhbF9pbWFnZSB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuLnJlYWxfaW1hZ2UgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG4ucmVhbF9pbWFnZV8yIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG4ucmVhbF9pbWFnZV8yIGltZyB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE2NHB4O1xyXG59XHJcbi5saXN0XzEge1xyXG4gICAgcGFkZGluZzogMGVtIDFlbTtcclxufVxyXG4ubGlzdF8xIGgzIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMC41ZW07XHJcbn1cclxuLmxlZnRfNCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC43ZW0gIWltcG9ydGFudDtcclxufVxyXG4uaW5wdXRfbGlzdCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRkY2UxO1xyXG4gICAgYmFja2dyb3VuZDogI2Y3ZjhmYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI4cHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICNiMmIyYjQ7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxLjVlbTtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMS41ZW07XHJcbiAgICAtLXBhZGRpbmctdG9wOiAxLjVlbTtcclxufVxyXG4udXBsb2FkX2ltYWdlcyB7XHJcbiAgICBjb2xvcjogI2M0OTMyZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbjogNXB4IDBweDtcclxufVxyXG4ubGlzdF8yIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNmN2Y4ZmE7XHJcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgI2Q0ZGNlMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAyLjVlbSAwZW07XHJcbn1cclxuLmxpc3RfOSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjdmOGZhO1xyXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICNkNGRjZTE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMy43ZW0gMGVtIDIuNWVtIDBlbTtcclxuICAgIGhlaWdodDogMTYzcHg7XHJcbn1cclxuLmxpc3RfOSBwIHtcclxuICAgIGNvbG9yOiAjZDJkNmQ4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuLmxpc3RfMyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjdmOGZhO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZGNlMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICNiMmIyYjQ7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEuNWVtO1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMS41ZW07XHJcbn1cclxuXHJcbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgICAuYnRuX2Zvb3RlciB7XHJcbiAgICAgICAgbWFyZ2luOiAwLjdlbSAwZW0gMWVtIDBlbTtcclxuXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvdHRvbTogMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgICAuYnRuX2Zvb3RlciB7XHJcbiAgICAgICAgbWFyZ2luOiAwLjdlbSAwZW0gMWVtIDBlbTtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLXNsaWRlIHNwYW4ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMTRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbn1cclxuLm51bSB7XHJcbiAgICBwYWRkaW5nOiA5cHggMTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5jYWxlbmRlcl9zbGlkZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2Y3ZjhmYTtcclxuICAgIHBhZGRpbmc6IDAuNmVtIDBlbTtcclxufVxyXG4uY2FsZW5kZXJfc2xpZGVyX3RleHQge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0ycHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuaW9uLXNsaWRlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjZlbTtcclxufVxyXG5pb24tc2xpZGU6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBlbTtcclxufVxyXG5pb24tYnV0dG9uIHtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEuNWVtO1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMS41ZW07XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmJ0bl9mb290ZXIge1xyXG4gICAgcGFkZGluZzogMC41ZW0gMWVtIDEuMmVtIDFlbTtcclxufVxyXG4uaW5mbyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNmU2ZDZkO1xyXG4gICAgcGFkZGluZzogMC40ZW0gMGVtO1xyXG59XHJcbi5pbmZvIHAge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5pb24tc2VsZWN0IHtcclxuICAgIGJhY2tncm91bmQ6ICNmN2Y4ZmE7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRkY2UxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICNiMmIyYjQ7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMS41ZW07XHJcbiAgICAtLXBhZGRpbmctdG9wOiAxLjVlbTtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEuNWVtO1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMS41ZW07XHJcbn1cclxuLmxpc3RfNCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjdmOGZhO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZGNlMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBjb2xvcjogI2Q0ZGNlMTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG4ubGlzdF80IHAge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG4ubGlzdF81IHtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggZGFzaGVkICNjN2M3Yzc7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG59XHJcbi5saXN0XzYge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuLmxpc3RfNyB7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBncmVlbjtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcmlnaHQ6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxufVxyXG4ubGlzdF84IHtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcmlnaHQ6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uYWN0aXZlU3RhdGUge1xyXG4gICAgYmFja2dyb3VuZDogI2M0OTMyZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjNDkzMmYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuLmFjdGl2ZUVuZFN0YXRlIHtcclxuICAgIGJhY2tncm91bmQ6ICNjNDkzMmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzQ5MzJmICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9vdGVyLW1kOjpiZWZvcmUge1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogLTJweDtcclxuICAgIGJvdHRvbTogYXV0bztcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgMCB0b3AgMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG59XHJcblxyXG4uZm9vdGVyLWlvczo6YmVmb3JlIHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IC0ycHg7XHJcbiAgICBib3R0b206IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IDAgdG9wIDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xyXG4gICAgY29udGVudDogXCJcIjtcclxufVxyXG5cclxucCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMGVtO1xyXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMGVtO1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/listcar5/listcar5.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/listcar5/listcar5.page.ts ***!
      \*******************************************/

    /*! exports provided: Listcar5Page */

    /***/
    function srcAppListcar5Listcar5PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Listcar5Page", function () {
        return Listcar5Page;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../rest.service */
      "./src/app/rest.service.ts");

      var Listcar5Page = /*#__PURE__*/function () {
        function Listcar5Page(restService, location, navCtrl, toastController, loadingController) {
          _classCallCheck(this, Listcar5Page);

          this.restService = restService;
          this.location = location;
          this.navCtrl = navCtrl;
          this.toastController = toastController;
          this.loadingController = loadingController;
          this.advance_notice = "";
          this.min_trip = "";
          this.max_trip = "";
          this.oneDataSet = "";
        }

        _createClass(Listcar5Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
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
              var _this = this;

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
                        this.restService.listYourCarAPI(data).subscribe(function (responseData) {
                          _this.oneDataSet = JSON.parse(responseData["_body"]);
                          console.log(_this.oneDataSet, "getiing from oneset");

                          if (_this.oneDataSet.status == "success") {
                            _this.navCtrl.navigateForward("listcar6");
                          }
                        }, function (err) {
                          _this.presentToast("Error");
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
            this.location.back();
          }
        }]);

        return Listcar5Page;
      }();

      Listcar5Page.ctorParameters = function () {
        return [{
          type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }];
      };

      Listcar5Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-listcar5",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./listcar5.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/listcar5/listcar5.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./listcar5.page.scss */
        "./src/app/listcar5/listcar5.page.scss"))["default"]]
      })], Listcar5Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=listcar5-listcar5-module-es5.js.map