(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["listcar6draft-listcar6draft-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/listcar6draft/listcar6draft.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/listcar6draft/listcar6draft.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppListcar6draftListcar6draftPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header *ngIf=\"showSlide == 'no'\" [class.ios-headers]=\"plateformCheck == 'ios'\">\n  <ion-toolbar>\n    <ion-buttons [class.back_button]=\"plateformCheck == 'ios'\" slot=\"start\">\n      <img src=\"assets/img/Arrow.svg\" (click)=\"goToHome()\" />\n    </ion-buttons>\n    <ion-title [class.globe_title]=\"plateformCheck == 'ios'\"\n      >List your car</ion-title\n    >\n  </ion-toolbar>\n</ion-header>\n<ion-content *ngIf=\"showSlide == 'no'\">\n  <div class=\"list_1\">\n    <ion-row>\n      <ion-col>\n        <h3>Documents</h3>\n        <p class=\"upload_images\">Upload Road Worthy and Insurance documents</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-row>\n          <ion-col\n            size=\"12\"\n            class=\"list_9\"\n            (click)=\"showPopup(4)\"\n            *ngIf=\"document_four =='' || document_four == undefined\"\n          >\n            <img src=\"assets/img/Menu_Plus.svg\" />\n            <p>Road Worthy</p>\n          </ion-col>\n          <ion-col\n          style=\"position:relative\"\n            size=\"12\"\n            class=\"real_image_2\"\n            (click)=\"showPopup(4)\"\n            *ngIf=\"document_four\"\n          >\n          <div *ngIf=\"document_four\" (click)=\"previewImage(document_four)\" class=\"view_btn\">\n            <p>View</p>\n          </div>\n            <img src=\"{{document_four}}\" />\n          </ion-col>\n          <span *ngIf=\"document_fourError\" class=\"error ion-padding\">\n            Document is required.\n          </span>\n        </ion-row>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-row>\n          <ion-col\n            size=\"12\"\n            class=\"list_9\"\n            (click)=\"showPopup(5)\"\n            *ngIf=\"document_five =='' || document_five ==undefined\"\n          >\n            <img src=\"assets/img/Menu_Plus.svg\" />\n            <p>Insurance</p>\n          </ion-col>\n          <ion-col\n          style=\"position:relative\"\n            size=\"12\"\n            class=\"real_image_2\"\n            (click)=\"showPopup(5)\"\n            *ngIf=\"document_five\"\n          >\n          <div *ngIf=\"document_five\" (click)=\"previewImage(document_five)\" class=\"view_btn\">\n            <p>View</p>\n          </div>\n            <img src=\"{{document_five}}\" />\n          </ion-col>\n          <span *ngIf=\"document_fiveError\" class=\"error ion-padding\">\n            Document is required.\n          </span>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h3>Owner???s Details</h3>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-textarea\n          rows=\"6\"\n          placeholder=\"About\"\n          [(ngModel)]=\"about\"\n          class=\"list_3\"\n          (ionBlur)=\"validateForm()\"\n        >\n        </ion-textarea>\n        <span *ngIf=\"aboutError\" class=\"error ion-padding\">\n          about is required.\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-select\n          placeholder=\"Country\"\n          [(ngModel)]=\"Lives\"\n          (ionBlur)=\"validateForm()\"\n          value=\"{{lives}}\"\n        >\n          <ion-select-option\n            value=\"{{p.id}}\"\n            *ngFor=\"let p of countries; let i = index\"\n            >{{p.name}}</ion-select-option\n          >\n        </ion-select>\n        <span *ngIf=\"LivesError\" class=\"error ion-padding\">\n          Country is required.\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-input\n          placeholder=\"Work\"\n          [(ngModel)]=\"work\"\n          class=\"input_list\"\n          (ionBlur)=\"validateForm()\"\n        ></ion-input>\n        <span *ngIf=\"workError\" class=\"error ion-padding\">\n          Work is required.\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-select\n          placeholder=\"Language\"\n          [(ngModel)]=\"Language\"\n          (ionBlur)=\"validateForm()\"\n          value=\"{{language}}\"\n        >\n          <ion-select-option\n            value=\"{{p.languages_id}}\"\n            *ngFor=\"let p of languages; let i = index\"\n            >{{p.name}}\n          </ion-select-option>\n        </ion-select>\n        <span *ngIf=\"LanguageError\" class=\"error ion-padding\">\n          Language is required.\n        </span>\n      </ion-col>\n    </ion-row>\n\n    <!-- <ion-row>\n      <ion-col>\n        <h3>Location Info</h3>\n      </ion-col>\n    </ion-row> -->\n    <!-- <ion-row>\n      <ion-col class=\"list_4\">\n        <ion-row>\n          <ion-col size=\"1\">\n            <div class=\"list_7\"></div>\n            <div class=\"list_5\"></div>\n            <div class=\"list_8\"></div>\n          </ion-col>\n          <ion-col size=\"11\">\n            <span (click)=\"goToLocation()\">Pickup</span>\n            <p class=\"list_6\" (click)=\"goToLocation()\">{{pickup}}</p>\n            <span (click)=\"goToLocation()\">Dropoff</span>\n            <p (click)=\"goToLocation()\">{{dropoff}}</p>\n          </ion-col>\n        </ion-row>\n        <span *ngIf=\"RouteError\" class=\"error ion-padding\">\n          Route is required.\n        </span>\n      </ion-col>\n    </ion-row> -->\n\n    <ion-row>\n      <ion-col>\n        <!-- <h3>Charges Info - ({{currency_symbol}})</h3> -->\n\n        <h3>Price per day</h3>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-input\n          type=\"number\"\n          pattern=\"[0-9]*\"\n          inputmode=\"numeric\"\n          placeholder=\"Charges/day\"\n          class=\"input_list\"\n          [(ngModel)]=\"ChargesInfo\"\n          (ionBlur)=\"validateForm()\"\n        ></ion-input>\n        <span *ngIf=\"ChargesInfoError\" class=\"error ion-padding\">\n          Price per day is required.\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h3>Availability Calender</h3>\n        <p class=\"upload_images left_4\">Start Date</p>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div class=\"calender_slider\">\n    <ion-calendar\n      (click)=\"newDate()\"\n      [(ngModel)]=\"dateRange\"\n      (onChange)=\"onChange($event)\"\n      [type]=\"type\"\n      [options]=\"optionsRange\"\n      [disabled]=\"false\"\n      [format]=\"'YYYY-MM-DD'\"\n    >\n    </ion-calendar>\n  </div>\n  <p\n    *ngIf=\"dateStartError\"\n    class=\"error ion-padding ion-text-center sz\"\n    style=\"padding: 0px\"\n  >\n    End Date Cannot be smaller then Start Date\n  </p>\n  <ion-row>\n    <ion-col>\n      <span *ngIf=\"fieldMissing\" class=\"error ion-padding ion-text-center\">\n        Please fill all the required fields.\n      </span>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"btn_footer\">\n    <ion-col size=\"2\"></ion-col>\n    <ion-col size=\"8\">\n      <ion-button\n        color=\"primary\"\n        expand=\"block\"\n        shape=\"round\"\n        (click)=\"uploadDocuments()\"\n        >Done</ion-button\n      >\n    </ion-col>\n  </ion-row>\n</ion-content>\n\n<div\n  [hidden]=\"popupHidden\"\n  style=\"\n    height: 100%;\n    width: 100%;\n    background-color: rgb(0 0 0 / 68%);\n    position: absolute;\n  \"\n>\n  <div\n    style=\"\n      left: 10%;\n      position: absolute;\n      top: 40%;\n      width: 80%;\n      height: 160px;\n      background-color: rgb(255, 255, 255);\n      border-radius: 20px;\n    \"\n  >\n    <ion-row>\n      <ion-col\n        style=\"padding-top: 10 px; padding-right: 10px; text-align: right\"\n      >\n        <img\n          style=\"height: 10px; width: 10px; margin-right: 4px; margin-top: 8px\"\n          src=\"assets/img/close_black.svg\"\n          (click)=\"hidePopup()\"\n        />\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: -4px\">\n      <ion-col (click)=\"CameraSelected()\" style=\"text-align: center\">\n        <img style=\"height: 50px; width: 50px\" src=\"assets/img/camera.svg\" />\n        <p>Camera</p>\n      </ion-col>\n      <ion-col (click)=\"GalerySelected()\" style=\"text-align: center\">\n        <img style=\"height: 50px; width: 50px\" src=\"assets/img/gallery.svg\" />\n        <p>Gallery</p>\n      </ion-col>\n    </ion-row>\n  </div>\n</div>\n\n\n<div\n    *ngIf=\"showSlide == 'yes'\"\n    [class.for_ios_pad]=\"plateformCheck == 'ios'\"\n    style=\"background: #000000f5; height: 100%\"\n  >\n    <ion-row>\n      <ion-col style=\"padding-left: 20px; padding-top: 20px\">\n        <img\n          src=\"assets/img/close.png\"\n          (click)=\"closeModel()\"\n          style=\"height: 20px; width: 20px; padding: 3px; border-radius: 10px\"\n        />\n      </ion-col>  \n    </ion-row>\n\n    <ion-row class=\"center\">\n      <ion-col class=\"slider_main_slide\" style=\"display: flex\">\n        <ion-slides >\n          <ng-container >\n            <ion-slide style=\"width: 100%;\">\n              <img style=\"max-height: 80%;\" src=\"{{imageToShow}}\" class=\"s_img_slide\" />\n            </ion-slide>\n          </ng-container>\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n\n  \n</div>";
      /***/
    },

    /***/
    "./src/app/listcar6draft/listcar6draft-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/listcar6draft/listcar6draft-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: Listcar6draftPageRoutingModule */

    /***/
    function srcAppListcar6draftListcar6draftRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Listcar6draftPageRoutingModule", function () {
        return Listcar6draftPageRoutingModule;
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


      var _listcar6draft_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./listcar6draft.page */
      "./src/app/listcar6draft/listcar6draft.page.ts");

      var routes = [{
        path: '',
        component: _listcar6draft_page__WEBPACK_IMPORTED_MODULE_3__["Listcar6draftPage"]
      }];

      var Listcar6draftPageRoutingModule = /*#__PURE__*/_createClass(function Listcar6draftPageRoutingModule() {
        _classCallCheck(this, Listcar6draftPageRoutingModule);
      });

      Listcar6draftPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Listcar6draftPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/listcar6draft/listcar6draft.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/listcar6draft/listcar6draft.module.ts ***!
      \*******************************************************/

    /*! exports provided: Listcar6draftPageModule */

    /***/
    function srcAppListcar6draftListcar6draftModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Listcar6draftPageModule", function () {
        return Listcar6draftPageModule;
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


      var _listcar6draft_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./listcar6draft-routing.module */
      "./src/app/listcar6draft/listcar6draft-routing.module.ts");
      /* harmony import */


      var _listcar6draft_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./listcar6draft.page */
      "./src/app/listcar6draft/listcar6draft.page.ts");
      /* harmony import */


      var ion2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ion2-calendar */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/index.js");
      /* harmony import */


      var ion2_calendar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_7__);

      var Listcar6draftPageModule = /*#__PURE__*/_createClass(function Listcar6draftPageModule() {
        _classCallCheck(this, Listcar6draftPageModule);
      });

      Listcar6draftPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _listcar6draft_routing_module__WEBPACK_IMPORTED_MODULE_5__["Listcar6draftPageRoutingModule"], ion2_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"]],
        declarations: [_listcar6draft_page__WEBPACK_IMPORTED_MODULE_6__["Listcar6draftPage"]]
      })], Listcar6draftPageModule);
      /***/
    },

    /***/
    "./src/app/listcar6draft/listcar6draft.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/listcar6draft/listcar6draft.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppListcar6draftListcar6draftPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3em 0.1em 8px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n}\n\n.view_btn {\n  position: absolute;\n  right: 7px;\n  top: -12px;\n  color: #c4932f;\n}\n\n.error {\n  color: red;\n}\n\n.real_image {\n  padding: 0px;\n}\n\n.real_image img {\n  width: 100%;\n  height: 100px;\n}\n\n.real_image_2 {\n  padding: 0px;\n}\n\n.real_image_2 img {\n  width: 150px;\n  height: 164px;\n}\n\n.list_1 {\n  padding: 0em 1em;\n}\n\n.list_1 h3 {\n  margin: 0px;\n  margin-top: 0.5em;\n}\n\n.left_4 {\n  margin-left: 0.7em !important;\n}\n\n.input_list {\n  border: 1px solid #d4dce1;\n  background: #F7F8FA;\n  border-radius: 28px;\n  font-size: 13px;\n  color: #000;\n  --placeholder-color: #b2b2b4;\n  --padding-bottom: 1.5em;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n}\n\n.upload_images {\n  color: #C4932F;\n  font-size: 12px;\n  margin: 5px 0px;\n}\n\n.list_2 {\n  text-align: center;\n  background: #F7F8FA;\n  border: 1px dashed #D4DCE1;\n  border-radius: 10px;\n  padding: 2.5em 0em;\n}\n\n.list_9 {\n  text-align: center;\n  background: #F7F8FA;\n  border: 1px dashed #D4DCE1;\n  border-radius: 10px;\n  padding: 3.7em 0em 2.5em 0em;\n  height: 163px;\n}\n\n.list_9 p {\n  color: #d2d6d8;\n  font-size: 12px;\n  margin: 0px;\n  margin-top: 8px;\n}\n\n.list_3 {\n  background: #F7F8FA;\n  border: 1px solid #D4DCE1;\n  border-radius: 10px;\n  color: #000;\n  --placeholder-color: #b2b2b4;\n  font-size: 13px;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n}\n\n.btn_footer {\n  margin: 0.7em 0em 1em 0em;\n}\n\nion-slide span {\n  border: 1px solid #000;\n  border-radius: 22px;\n  padding: 8px 14px;\n  margin-left: 1em;\n}\n\n.num {\n  padding: 9px 10px !important;\n}\n\n.calender_slider {\n  background: #F7F8FA;\n  padding: 0.6em 0em;\n}\n\n.calender_slider_text {\n  margin: 0px;\n  position: relative;\n  top: -2px;\n  font-size: 18px;\n}\n\nion-slide {\n  margin-left: 0.6em;\n}\n\nion-slide:first-child {\n  margin-left: 0em;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n}\n\n.btn_footer {\n  padding: 0.5em 1em 1.2em 1em;\n}\n\n.info {\n  background: #6E6D6D;\n  padding: 0.4em 0em;\n}\n\n.info p {\n  margin: 0px;\n  color: #fff;\n  font-size: 10px;\n}\n\nion-select {\n  background: #F7F8FA;\n  border: 1px solid #D4DCE1;\n  border-radius: 30px;\n  --placeholder-color: #b2b2b4;\n  color: #000;\n  font-size: 13px;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n  --padding-bottom: 1.5em;\n  --padding-end: 1.5em;\n}\n\n.list_4 {\n  background: #F7F8FA;\n  border: 1px solid #D4DCE1;\n  border-radius: 12px;\n  color: #D4DCE1;\n  font-size: 13px;\n}\n\n.list_4 p {\n  margin: 0px;\n  color: #000;\n}\n\n.list_5 {\n  border-left: 1px dashed #c7c7c7;\n  height: 48px;\n  float: right;\n  margin-top: 12px;\n}\n\n.list_6 {\n  margin-bottom: 2em !important;\n}\n\n.list_7 {\n  height: 10px;\n  background: green;\n  width: 10px;\n  float: right;\n  position: relative;\n  right: 5px;\n  border-radius: 50%;\n  margin-top: 3px;\n}\n\n.list_8 {\n  height: 10px;\n  background: red;\n  width: 10px;\n  float: right;\n  position: relative;\n  right: 5px;\n  border-radius: 50%;\n}\n\n.activeState {\n  background: #c4932f;\n  border: 1px solid #c4932f !important;\n  color: #fff !important;\n}\n\n.activeEndState {\n  background: #c4932f;\n  border: 1px solid #c4932f !important;\n  color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdGNhcjZkcmFmdC9saXN0Y2FyNmRyYWZ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksd0JBQUE7SUFDQSxxQkFBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQUo7O0FBRUE7RUFDSSxrQkFBQTtFQUVBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUVBO0VBQ0ksVUFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtBQUVKOztBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFHSjs7QUFEQTtFQUNJLFlBQUE7QUFJSjs7QUFGQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBS0o7O0FBSEE7RUFDSSxnQkFBQTtBQU1KOztBQUpBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBT0o7O0FBTEE7RUFDSSw2QkFBQTtBQVFKOztBQU5BO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQVNKOztBQVBBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBVUo7O0FBUkE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBV0o7O0FBVEE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtBQVlKOztBQVZBO0VBRUksY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQVlKOztBQVZBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFhSjs7QUFYQTtFQUNJLHlCQUFBO0FBY0o7O0FBWkE7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQWVKOztBQWJBO0VBQ0ksNEJBQUE7QUFnQko7O0FBZEE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FBaUJKOztBQWZBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFrQko7O0FBaEJBO0VBQ0ksa0JBQUE7QUFtQko7O0FBakJBO0VBQ0ksZ0JBQUE7QUFvQko7O0FBbEJBO0VBQ0ksdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBcUJKOztBQW5CQTtFQUNJLDRCQUFBO0FBc0JKOztBQXBCQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUF1Qko7O0FBckJBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBd0JKOztBQXRCQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtBQXlCSjs7QUF2QkE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQTBCSjs7QUF4QkE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQTJCSjs7QUF6QkE7RUFDSSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUE0Qko7O0FBMUJBO0VBQ0ksNkJBQUE7QUE2Qko7O0FBM0JBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUE4Qko7O0FBNUJBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBK0JKOztBQTdCQTtFQUNJLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtBQWdDSjs7QUE5QkE7RUFDSSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7QUFpQ0oiLCJmaWxlIjoic3JjL2FwcC9saXN0Y2FyNmRyYWZ0L2xpc3RjYXI2ZHJhZnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gICAgcGFkZGluZzogMC44ZW0gMC4xZW0gMCAwO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjYzQ5MzJmO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi1oZWlnaHQgOiA4MDBweCkge1xyXG4gICAgaW9uLXRvb2xiYXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDNlbSAwLjFlbSA4cHggMDtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICNjNDkzMmY7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi10aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcbi52aWV3X2J0biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gICAgcmlnaHQ6IDdweDtcclxuICAgIHRvcDogLTEycHg7XHJcbiAgICBjb2xvcjogI2M0OTMyZjtcclxufVxyXG4uZXJyb3J7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbn1cclxuLnJlYWxfaW1hZ2V7XHJcbiAgICBwYWRkaW5nOjBweDtcclxufVxyXG4ucmVhbF9pbWFnZSBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbn1cclxuLnJlYWxfaW1hZ2VfMntcclxuICAgIHBhZGRpbmc6MHB4O1xyXG59XHJcbi5yZWFsX2ltYWdlXzIgaW1ne1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxNjRweDtcclxufVxyXG4ubGlzdF8xe1xyXG4gICAgcGFkZGluZzogMGVtIDFlbTtcclxufVxyXG4ubGlzdF8xIGgze1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxufVxyXG4ubGVmdF80e1xyXG4gICAgbWFyZ2luLWxlZnQ6MC43ZW0gIWltcG9ydGFudDtcclxufVxyXG4uaW5wdXRfbGlzdHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGRjZTE7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjdGOEZBO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjhweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogI2IyYjJiNDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEuNWVtO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxLjVlbTtcclxuICAgIC0tcGFkZGluZy10b3A6IDEuNWVtO1xyXG59XHJcbi51cGxvYWRfaW1hZ2Vze1xyXG4gICAgY29sb3I6I0M0OTMyRjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbjogNXB4IDBweDtcclxufVxyXG4ubGlzdF8ye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI0Y3RjhGQTtcclxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjRDREQ0UxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDIuNWVtIDBlbTtcclxufVxyXG4ubGlzdF85e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI0Y3RjhGQTtcclxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjRDREQ0UxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6My43ZW0gMGVtIDIuNWVtIDBlbTtcclxuICAgIGhlaWdodDogMTYzcHg7XHJcbn1cclxuLmxpc3RfOSBwe1xyXG4gICAgXHJcbiAgICBjb2xvcjogI2QyZDZkODtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcbi5saXN0XzN7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjdGOEZBO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Q0RENFMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICNiMmIyYjQ7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEuNWVtO1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMS41ZW07XHJcbn1cclxuLmJ0bl9mb290ZXJ7XHJcbiAgICBtYXJnaW46IDAuN2VtIDBlbSAxZW0gMGVtO1xyXG59XHJcbmlvbi1zbGlkZSBzcGFue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMTRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbn1cclxuLm51bXtcclxuICAgIHBhZGRpbmc6IDlweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhbGVuZGVyX3NsaWRlcntcclxuICAgIGJhY2tncm91bmQ6ICNGN0Y4RkE7XHJcbiAgICBwYWRkaW5nOiAwLjZlbSAwZW07XHJcbn1cclxuLmNhbGVuZGVyX3NsaWRlcl90ZXh0e1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0ycHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuaW9uLXNsaWRle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNmVtO1xyXG59XHJcbmlvbi1zbGlkZTpmaXJzdC1jaGlsZHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwZW07XHJcbn1cclxuaW9uLWJ1dHRvbntcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEuNWVtO1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMS41ZW07XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmJ0bl9mb290ZXJ7XHJcbiAgICBwYWRkaW5nOiAwLjVlbSAxZW0gMS4yZW0gMWVtO1xyXG59XHJcbi5pbmZve1xyXG4gICAgYmFja2dyb3VuZDogIzZFNkQ2RDtcclxuICAgIHBhZGRpbmc6IDAuNGVtIDBlbTtcclxufVxyXG4uaW5mbyBwe1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5pb24tc2VsZWN0e1xyXG4gICAgYmFja2dyb3VuZDogI0Y3RjhGQTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNENERDRTE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogI2IyYjJiNDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxLjVlbTtcclxuICAgIC0tcGFkZGluZy10b3A6IDEuNWVtO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMS41ZW07XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxLjVlbTtcclxufVxyXG4ubGlzdF80e1xyXG4gICAgYmFja2dyb3VuZDogI0Y3RjhGQTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNENERDRTE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgY29sb3I6ICNENERDRTE7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuLmxpc3RfNCBwe1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBjb2xvcjojMDAwO1xyXG59XHJcbi5saXN0XzV7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IGRhc2hlZCAjYzdjN2M3O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxufVxyXG4ubGlzdF82e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuLmxpc3RfN3tcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICByaWdodDogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG59XHJcbi5saXN0Xzh7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHJpZ2h0OiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLmFjdGl2ZVN0YXRle1xyXG4gICAgYmFja2dyb3VuZDogI2M0OTMyZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjNDkzMmYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuLmFjdGl2ZUVuZFN0YXRle1xyXG4gICAgYmFja2dyb3VuZDogI2M0OTMyZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjNDkzMmYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7IFxyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/listcar6draft/listcar6draft.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/listcar6draft/listcar6draft.page.ts ***!
      \*****************************************************/

    /*! exports provided: Listcar6draftPage */

    /***/
    function srcAppListcar6draftListcar6draftPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Listcar6draftPage", function () {
        return Listcar6draftPage;
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

      var Listcar6draftPage = /*#__PURE__*/function () {
        function Listcar6draftPage(loadingController, activatedRoute, popoverController, storage, toastController, router, restService, alertCtrl, imageService, menuCtrl, imageCompress, imagePicker, platform, location, navCtrl, transfer) {
          _classCallCheck(this, Listcar6draftPage);

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
          this.indexOfSLide = 1;
          this.showSlide = 'no';
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
          this.baseURLofImage = 'https://app.transusdrives.com/uploads/vehicles/';
          this.roadWorthyImageUpdated = 0;
          this.insuranceImageUpdated = 0;
          this.dateRange = {
            from: new Date(),
            to: new Date()
          };
          this.optionsRange = {
            pickMode: 'range'
          }; // dateRanges: {
          //   from: Date;
          //   to: Date
          // } = {
          //   from:  new Date(Date.now() + 24 * 60 * 60 * 1000 *2),
          //   to: new Date(Date.now() + 24 * 60 * 60 * 1000 * 90)
          // };

          this.invalidDates = ['2021-06-10', '2021-06-13'];
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

        _createClass(Listcar6draftPage, [{
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

              _this2.storage.get('mycardraft').then(function (res) {
                console.log('mycardraft ali', res);
                _this2.imgRoadworthy = res.roadworthy_doc_img;
                _this2.imgInsurence = res.insurance_img;

                if (res.roadworthy_doc_img) {
                  _this2.document_four = _this2.baseURLofImage + res.roadworthy_doc_img;
                }

                if (res.insurance_img) {
                  _this2.document_five = _this2.baseURLofImage + res.insurance_img;
                }

                _this2.about = res.about;
                _this2.lives = res.countries_id;
                _this2.language = res.languages_id;
                _this2.work = res.work;
                _this2.ChargesInfo = res.charge_per_day;
                _this2.start_date = res.start_date;
                _this2.end_date = res.end_date;
                _this2.dbStartDate = _this2.start_date.split('-');
                _this2.dbEndDate = _this2.end_date.split('-');

                if (_this2.start_date != '0000-00-00' && _this2.end_date != '0000-00-00') {
                  _this2.dateRange = {
                    from: new Date(_this2.dbStartDate[0], _this2.dbStartDate[1] - 1, _this2.dbStartDate[2]),
                    to: new Date(_this2.dbEndDate[0], _this2.dbEndDate[1] - 1, _this2.dbEndDate[2])
                  };
                }

                console.log('doc 5555555555555', _this2.document_five);
              });

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

              if (this.about == '' || this.about == undefined) {
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this3 = this;

              var roadworthy, insurance, fileTransfer, random, optionRoad, optionInsurance, loading_uploading, _fileTransfer, _random, _optionRoad, _loading_uploading, _fileTransfer2, _random2, _optionInsurance, _loading_uploading2, _loading_uploading3;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (!(this.roadWorthyImageUpdated == 1 && this.insuranceImageUpdated == 1)) {
                        _context4.next = 21;
                        break;
                      }

                      // Both roadWorthy and insurance images are uploadding
                      this.validation = true;

                      if (!(this.validateForm() == true)) {
                        _context4.next = 18;
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
                      _context4.next = 12;
                      return this.loadingController.create({
                        cssClass: 'ionloading',
                        message: 'Uploading images...'
                      });

                    case 12:
                      loading_uploading = _context4.sent;
                      _context4.next = 15;
                      return loading_uploading.present();

                    case 15:
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
                      _context4.next = 19;
                      break;

                    case 18:
                      this.fieldMissing = true;

                    case 19:
                      _context4.next = 74;
                      break;

                    case 21:
                      if (!(this.roadWorthyImageUpdated == 1 && this.insuranceImageUpdated == 0)) {
                        _context4.next = 39;
                        break;
                      }

                      // Only roadWorthy is uploading
                      this.validation = true;

                      if (!(this.validateForm() == true)) {
                        _context4.next = 36;
                        break;
                      }

                      this.fieldMissing = false;
                      _fileTransfer = this.transfer.create();
                      _random = new Date().getTime();
                      _optionRoad = {
                        fileKey: 'photo',
                        fileName: 'imgroadworthy_' + '_' + this.userID + '_' + _random + '.jpg',
                        chunkedMode: false,
                        httpMethod: 'post',
                        mimeType: 'image/jpeg',
                        params: {
                          image: 'YPOP'
                        }
                      };
                      _context4.next = 30;
                      return this.loadingController.create({
                        cssClass: 'ionloading',
                        message: 'Uploading images...'
                      });

                    case 30:
                      _loading_uploading = _context4.sent;
                      _context4.next = 33;
                      return _loading_uploading.present();

                    case 33:
                      _fileTransfer.upload(this.document_four, 'https://app.transusdrives.com/webservices/upload_image', _optionRoad).then(function (res) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                          var img2;
                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  _loading_uploading.dismiss();

                                  console.log(res.response, 'imgRoadworthyimgRoadworthy');
                                  img2 = JSON.parse(res.response);
                                  console.log(img2, 'mgRoadworthymgRoadworthy');
                                  this.imgRoadworthy = img2.message;
                                  this.imgInsurence = null;
                                  console.log(this.imgRoadworthy, 'this.imgRoadworthy this.imgRoadworthy');
                                  this.submitForm();

                                case 8:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee3, this);
                        }));
                      }, function (err) {
                        console.log('Error');

                        _loading_uploading.dismiss();

                        console.log(err);
                      });

                      _context4.next = 37;
                      break;

                    case 36:
                      this.fieldMissing = true;

                    case 37:
                      _context4.next = 74;
                      break;

                    case 39:
                      if (!(this.insuranceImageUpdated == 1 && this.roadWorthyImageUpdated == 0)) {
                        _context4.next = 59;
                        break;
                      }

                      // Only insurance is uploading
                      this.validation = true;

                      if (!(this.validateForm() == true)) {
                        _context4.next = 56;
                        break;
                      }

                      this.fieldMissing = false;
                      roadworthy = this.document_four.split(',')[1];
                      insurance = this.document_five.split(',')[1];
                      _fileTransfer2 = this.transfer.create();
                      _random2 = new Date().getTime();
                      _optionInsurance = {
                        fileKey: 'photo',
                        fileName: 'imginsurance_' + '_' + this.userID + '_' + _random2 + '.jpg',
                        chunkedMode: false,
                        httpMethod: 'post',
                        mimeType: 'image/jpeg',
                        params: {
                          image: 'YPOP'
                        }
                      };
                      _context4.next = 50;
                      return this.loadingController.create({
                        cssClass: 'ionloading',
                        message: 'Uploading images...'
                      });

                    case 50:
                      _loading_uploading2 = _context4.sent;
                      _context4.next = 53;
                      return _loading_uploading2.present();

                    case 53:
                      _fileTransfer2.upload(this.document_five, 'https://app.transusdrives.com/webservices/upload_image', _optionInsurance).then(function (data) {
                        console.log(data.response, 'imgInsurenceimgInsurence');
                        var img1 = JSON.parse(data.response);
                        console.log(img1, 'InsurenceimgInsurence');
                        _this3.imgInsurence = img1.message;
                        _this3.imgRoadworthy = null;
                        console.log(_this3.imgInsurence, 'this.imgInsurencethis.imgInsurence');

                        _loading_uploading2.dismiss();

                        _this3.submitForm();
                      }, function (err) {
                        console.log('Error');

                        _loading_uploading2.dismiss();

                        console.log(err);
                      });

                      _context4.next = 57;
                      break;

                    case 56:
                      this.fieldMissing = true;

                    case 57:
                      _context4.next = 74;
                      break;

                    case 59:
                      this.validation = true;

                      if (!(this.validateForm() == true)) {
                        _context4.next = 73;
                        break;
                      }

                      this.fieldMissing = false;
                      _context4.next = 64;
                      return this.loadingController.create({
                        cssClass: 'ionloading',
                        message: 'Uploading images...'
                      });

                    case 64:
                      _loading_uploading3 = _context4.sent;
                      _context4.next = 67;
                      return _loading_uploading3.present();

                    case 67:
                      this.imgRoadworthy = null;
                      this.imgInsurence = null;
                      this.submitForm();

                      _loading_uploading3.dismiss();

                      _context4.next = 74;
                      break;

                    case 73:
                      this.fieldMissing = true;

                    case 74:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
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
              this.restService.listYourDraftCarAPI(stringy).subscribe(function (response) {
                _this4.response = JSON.parse(response['_body']);
                console.log(response['_body']); //     alert(response['_body'])

                console.log(_this4.response.status);

                if (_this4.response.status == 'error') {
                  _this4.dismiss();

                  _this4.presentToast(_this4.response.msg);
                } else if (_this4.response.status == 'success') {
                  _this4.presentToast('Document Added Successfully');

                  _this4.dismiss(); //this.navCtrl.navigateRoot(['/']);


                  _this4.navCtrl.navigateForward('listcar7draft');
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.takeImageFromCamera(param);

                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "takeImageFromCamera",
          value: function takeImageFromCamera(param) {
            var _this5 = this;

            console.log('u ahve param', param);
            var options = {
              maximumImagesCount: 1,
              outputType: 1,
              quality: 90
            };
            this.imagePicker.getPictures(options).then(function (imageData) {
              var base64 = "data:image/png;base64,".concat(imageData); // this.imageCompress.compressFile(base64, 0, 50, 50).then((result) => {

              if (param == 4) {
                _this5.roadWorthyImageUpdated = 1;
                _this5.image4 = imageData;
                _this5.document_four = base64;
              } else if (param == 5) {
                _this5.insuranceImageUpdated = 1;
                _this5.image5 = imageData;
                _this5.document_five = base64;
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
              var base64 = "data:image/png;base64,".concat(imageData); // this.imageCompress.compressFile(base64, 0, 50, 50).then((result) => {

              if (param == 4) {
                _this6.roadWorthyImageUpdated = 1;
                _this6.image4 = imageData;
                _this6.document_four = base64;
                console.log('this.roadWorthyImageUpdated----', _this6.roadWorthyImageUpdated);
              } else if (param == 5) {
                _this6.insuranceImageUpdated = 1;
                _this6.image5 = imageData;
                _this6.document_five = base64;
                console.log('this.insuranceImageUpdated----', _this6.insuranceImageUpdated);
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
            // this.navCtrl.navigateBack(['/list-your-car']);
            //this.location.back();
            this.router.navigate(['listcar5draft']);
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var toast;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.toastController.create({
                        message: msg,
                        duration: 2000,
                        position: 'top'
                      });

                    case 2:
                      toast = _context6.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "present",
          value: function present() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.loadingController.create({
                        message: 'Please wait...'
                      });

                    case 2:
                      this.loading = _context7.sent;
                      _context7.next = 5;
                      return this.loading.present();

                    case 5:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.loading.dismiss();

                    case 2:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
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
          key: "previewImage",
          value: function previewImage(image) {
            console.log('photo viewer');
            this.imageToShow = image;
            this.showSlide = 'yes';
            this.indexOfSLide = 1; //this.photoViewer.show(this.base_urls + '' + p);
          }
        }, {
          key: "closeModel",
          value: function closeModel() {
            this.showSlide = 'no';
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

        return Listcar6draftPage;
      }();

      Listcar6draftPage.ctorParameters = function () {
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

      Listcar6draftPage.propDecorators = {
        startSlides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['startSlides']
        }],
        endSlides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['endSlides']
        }]
      };
      Listcar6draftPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listcar6draft',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./listcar6draft.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/listcar6draft/listcar6draft.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./listcar6draft.page.scss */
        "./src/app/listcar6draft/listcar6draft.page.scss"))["default"]]
      })], Listcar6draftPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=listcar6draft-listcar6draft-module-es5.js.map