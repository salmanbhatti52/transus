(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["listcar6draft-listcar6draft-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/listcar6draft/listcar6draft.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/listcar6draft/listcar6draft.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header *ngIf=\"showSlide == 'no'\" [class.ios-headers]=\"plateformCheck == 'ios'\">\n  <ion-toolbar>\n    <ion-buttons [class.back_button]=\"plateformCheck == 'ios'\" slot=\"start\">\n      <img src=\"assets/img/Arrow.svg\" (click)=\"goToHome()\" />\n    </ion-buttons>\n    <ion-title [class.globe_title]=\"plateformCheck == 'ios'\"\n      >List your car</ion-title\n    >\n  </ion-toolbar>\n</ion-header>\n<ion-content *ngIf=\"showSlide == 'no'\">\n  <div class=\"list_1\">\n    <ion-row>\n      <ion-col>\n        <h3>Documents</h3>\n        <p class=\"upload_images\">Upload Road Worthy and Insurance documents</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-row>\n          <ion-col\n            size=\"12\"\n            class=\"list_9\"\n            (click)=\"showPopup(4)\"\n            *ngIf=\"document_four =='' || document_four == undefined\"\n          >\n            <img src=\"assets/img/Menu_Plus.svg\" />\n            <p>Road Worthy</p>\n          </ion-col>\n          <ion-col\n          style=\"position:relative\"\n            size=\"12\"\n            class=\"real_image_2\"\n            (click)=\"showPopup(4)\"\n            *ngIf=\"document_four\"\n          >\n          <div *ngIf=\"document_four\" (click)=\"previewImage(document_four)\" class=\"view_btn\">\n            <p>View</p>\n          </div>\n            <img src=\"{{document_four}}\" />\n          </ion-col>\n          <span *ngIf=\"document_fourError\" class=\"error ion-padding\">\n            Document is required.\n          </span>\n        </ion-row>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-row>\n          <ion-col\n            size=\"12\"\n            class=\"list_9\"\n            (click)=\"showPopup(5)\"\n            *ngIf=\"document_five =='' || document_five ==undefined\"\n          >\n            <img src=\"assets/img/Menu_Plus.svg\" />\n            <p>Insurance</p>\n          </ion-col>\n          <ion-col\n          style=\"position:relative\"\n            size=\"12\"\n            class=\"real_image_2\"\n            (click)=\"showPopup(5)\"\n            *ngIf=\"document_five\"\n          >\n          <div *ngIf=\"document_five\" (click)=\"previewImage(document_five)\" class=\"view_btn\">\n            <p>View</p>\n          </div>\n            <img src=\"{{document_five}}\" />\n          </ion-col>\n          <span *ngIf=\"document_fiveError\" class=\"error ion-padding\">\n            Document is required.\n          </span>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h3>Owner’s Details</h3>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-textarea\n          rows=\"6\"\n          placeholder=\"About\"\n          [(ngModel)]=\"about\"\n          class=\"list_3\"\n          (ionBlur)=\"validateForm()\"\n        >\n        </ion-textarea>\n        <span *ngIf=\"aboutError\" class=\"error ion-padding\">\n          about is required.\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-select\n          placeholder=\"Country\"\n          [(ngModel)]=\"Lives\"\n          (ionBlur)=\"validateForm()\"\n          value=\"{{lives}}\"\n        >\n          <ion-select-option\n            value=\"{{p.id}}\"\n            *ngFor=\"let p of countries; let i = index\"\n            >{{p.name}}</ion-select-option\n          >\n        </ion-select>\n        <span *ngIf=\"LivesError\" class=\"error ion-padding\">\n          Country is required.\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-input\n          placeholder=\"Work\"\n          [(ngModel)]=\"work\"\n          class=\"input_list\"\n          (ionBlur)=\"validateForm()\"\n        ></ion-input>\n        <span *ngIf=\"workError\" class=\"error ion-padding\">\n          Work is required.\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-select\n          placeholder=\"Language\"\n          [(ngModel)]=\"Language\"\n          (ionBlur)=\"validateForm()\"\n          value=\"{{language}}\"\n        >\n          <ion-select-option\n            value=\"{{p.languages_id}}\"\n            *ngFor=\"let p of languages; let i = index\"\n            >{{p.name}}\n          </ion-select-option>\n        </ion-select>\n        <span *ngIf=\"LanguageError\" class=\"error ion-padding\">\n          Language is required.\n        </span>\n      </ion-col>\n    </ion-row>\n\n    <!-- <ion-row>\n      <ion-col>\n        <h3>Location Info</h3>\n      </ion-col>\n    </ion-row> -->\n    <!-- <ion-row>\n      <ion-col class=\"list_4\">\n        <ion-row>\n          <ion-col size=\"1\">\n            <div class=\"list_7\"></div>\n            <div class=\"list_5\"></div>\n            <div class=\"list_8\"></div>\n          </ion-col>\n          <ion-col size=\"11\">\n            <span (click)=\"goToLocation()\">Pickup</span>\n            <p class=\"list_6\" (click)=\"goToLocation()\">{{pickup}}</p>\n            <span (click)=\"goToLocation()\">Dropoff</span>\n            <p (click)=\"goToLocation()\">{{dropoff}}</p>\n          </ion-col>\n        </ion-row>\n        <span *ngIf=\"RouteError\" class=\"error ion-padding\">\n          Route is required.\n        </span>\n      </ion-col>\n    </ion-row> -->\n\n    <ion-row>\n      <ion-col>\n        <!-- <h3>Charges Info - ({{currency_symbol}})</h3> -->\n\n        <h3>Price per day</h3>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-input\n          type=\"number\"\n          pattern=\"[0-9]*\"\n          inputmode=\"numeric\"\n          placeholder=\"Charges/day\"\n          class=\"input_list\"\n          [(ngModel)]=\"ChargesInfo\"\n          (ionBlur)=\"validateForm()\"\n        ></ion-input>\n        <span *ngIf=\"ChargesInfoError\" class=\"error ion-padding\">\n          Price per day is required.\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h3>Availability Calender</h3>\n        <p class=\"upload_images left_4\">Start Date</p>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div class=\"calender_slider\">\n    <ion-calendar\n      (click)=\"newDate()\"\n      [(ngModel)]=\"dateRange\"\n      (onChange)=\"onChange($event)\"\n      [type]=\"type\"\n      [options]=\"optionsRange\"\n      [disabled]=\"false\"\n      [format]=\"'YYYY-MM-DD'\"\n    >\n    </ion-calendar>\n  </div>\n  <p\n    *ngIf=\"dateStartError\"\n    class=\"error ion-padding ion-text-center sz\"\n    style=\"padding: 0px\"\n  >\n    End Date Cannot be smaller then Start Date\n  </p>\n  <ion-row>\n    <ion-col>\n      <span *ngIf=\"fieldMissing\" class=\"error ion-padding ion-text-center\">\n        Please fill all the required fields.\n      </span>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"btn_footer\">\n    <ion-col size=\"2\"></ion-col>\n    <ion-col size=\"8\">\n      <ion-button\n        color=\"primary\"\n        expand=\"block\"\n        shape=\"round\"\n        (click)=\"uploadDocuments()\"\n        >Done</ion-button\n      >\n    </ion-col>\n  </ion-row>\n</ion-content>\n\n<div\n  [hidden]=\"popupHidden\"\n  style=\"\n    height: 100%;\n    width: 100%;\n    background-color: rgb(0 0 0 / 68%);\n    position: absolute;\n  \"\n>\n  <div\n    style=\"\n      left: 10%;\n      position: absolute;\n      top: 40%;\n      width: 80%;\n      height: 160px;\n      background-color: rgb(255, 255, 255);\n      border-radius: 20px;\n    \"\n  >\n    <ion-row>\n      <ion-col\n        style=\"padding-top: 10 px; padding-right: 10px; text-align: right\"\n      >\n        <img\n          style=\"height: 10px; width: 10px; margin-right: 4px; margin-top: 8px\"\n          src=\"assets/img/close_black.svg\"\n          (click)=\"hidePopup()\"\n        />\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: -4px\">\n      <ion-col (click)=\"CameraSelected()\" style=\"text-align: center\">\n        <img style=\"height: 50px; width: 50px\" src=\"assets/img/camera.svg\" />\n        <p>Camera</p>\n      </ion-col>\n      <ion-col (click)=\"GalerySelected()\" style=\"text-align: center\">\n        <img style=\"height: 50px; width: 50px\" src=\"assets/img/gallery.svg\" />\n        <p>Gallery</p>\n      </ion-col>\n    </ion-row>\n  </div>\n</div>\n\n\n<div\n    *ngIf=\"showSlide == 'yes'\"\n    [class.for_ios_pad]=\"plateformCheck == 'ios'\"\n    style=\"background: #000000f5; height: 100%\"\n  >\n    <ion-row>\n      <ion-col style=\"padding-left: 20px; padding-top: 20px\">\n        <img\n          src=\"assets/img/close.png\"\n          (click)=\"closeModel()\"\n          style=\"height: 20px; width: 20px; padding: 3px; border-radius: 10px\"\n        />\n      </ion-col>  \n    </ion-row>\n\n    <ion-row class=\"center\">\n      <ion-col class=\"slider_main_slide\" style=\"display: flex\">\n        <ion-slides >\n          <ng-container >\n            <ion-slide style=\"width: 100%;\">\n              <img style=\"max-height: 80%;\" src=\"{{imageToShow}}\" class=\"s_img_slide\" />\n            </ion-slide>\n          </ng-container>\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n\n  \n</div>");

/***/ }),

/***/ "./src/app/listcar6draft/listcar6draft-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/listcar6draft/listcar6draft-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: Listcar6draftPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Listcar6draftPageRoutingModule", function() { return Listcar6draftPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _listcar6draft_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listcar6draft.page */ "./src/app/listcar6draft/listcar6draft.page.ts");




const routes = [
    {
        path: '',
        component: _listcar6draft_page__WEBPACK_IMPORTED_MODULE_3__["Listcar6draftPage"]
    }
];
let Listcar6draftPageRoutingModule = class Listcar6draftPageRoutingModule {
};
Listcar6draftPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Listcar6draftPageRoutingModule);



/***/ }),

/***/ "./src/app/listcar6draft/listcar6draft.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/listcar6draft/listcar6draft.module.ts ***!
  \*******************************************************/
/*! exports provided: Listcar6draftPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Listcar6draftPageModule", function() { return Listcar6draftPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _listcar6draft_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listcar6draft-routing.module */ "./src/app/listcar6draft/listcar6draft-routing.module.ts");
/* harmony import */ var _listcar6draft_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listcar6draft.page */ "./src/app/listcar6draft/listcar6draft.page.ts");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ion2-calendar */ "./node_modules/ion2-calendar/__ivy_ngcc__/dist/index.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_7__);








let Listcar6draftPageModule = class Listcar6draftPageModule {
};
Listcar6draftPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _listcar6draft_routing_module__WEBPACK_IMPORTED_MODULE_5__["Listcar6draftPageRoutingModule"],
            ion2_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"]
        ],
        declarations: [_listcar6draft_page__WEBPACK_IMPORTED_MODULE_6__["Listcar6draftPage"]]
    })
], Listcar6draftPageModule);



/***/ }),

/***/ "./src/app/listcar6draft/listcar6draft.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/listcar6draft/listcar6draft.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3em 0.1em 8px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n}\n\n.view_btn {\n  position: absolute;\n  right: 7px;\n  top: -12px;\n  color: #c4932f;\n}\n\n.error {\n  color: red;\n}\n\n.real_image {\n  padding: 0px;\n}\n\n.real_image img {\n  width: 100%;\n  height: 100px;\n}\n\n.real_image_2 {\n  padding: 0px;\n}\n\n.real_image_2 img {\n  width: 150px;\n  height: 164px;\n}\n\n.list_1 {\n  padding: 0em 1em;\n}\n\n.list_1 h3 {\n  margin: 0px;\n  margin-top: 0.5em;\n}\n\n.left_4 {\n  margin-left: 0.7em !important;\n}\n\n.input_list {\n  border: 1px solid #d4dce1;\n  background: #F7F8FA;\n  border-radius: 28px;\n  font-size: 13px;\n  color: #000;\n  --placeholder-color: #b2b2b4;\n  --padding-bottom: 1.5em;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n}\n\n.upload_images {\n  color: #C4932F;\n  font-size: 12px;\n  margin: 5px 0px;\n}\n\n.list_2 {\n  text-align: center;\n  background: #F7F8FA;\n  border: 1px dashed #D4DCE1;\n  border-radius: 10px;\n  padding: 2.5em 0em;\n}\n\n.list_9 {\n  text-align: center;\n  background: #F7F8FA;\n  border: 1px dashed #D4DCE1;\n  border-radius: 10px;\n  padding: 3.7em 0em 2.5em 0em;\n  height: 163px;\n}\n\n.list_9 p {\n  color: #d2d6d8;\n  font-size: 12px;\n  margin: 0px;\n  margin-top: 8px;\n}\n\n.list_3 {\n  background: #F7F8FA;\n  border: 1px solid #D4DCE1;\n  border-radius: 10px;\n  color: #000;\n  --placeholder-color: #b2b2b4;\n  font-size: 13px;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n}\n\n.btn_footer {\n  margin: 0.7em 0em 1em 0em;\n}\n\nion-slide span {\n  border: 1px solid #000;\n  border-radius: 22px;\n  padding: 8px 14px;\n  margin-left: 1em;\n}\n\n.num {\n  padding: 9px 10px !important;\n}\n\n.calender_slider {\n  background: #F7F8FA;\n  padding: 0.6em 0em;\n}\n\n.calender_slider_text {\n  margin: 0px;\n  position: relative;\n  top: -2px;\n  font-size: 18px;\n}\n\nion-slide {\n  margin-left: 0.6em;\n}\n\nion-slide:first-child {\n  margin-left: 0em;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n}\n\n.btn_footer {\n  padding: 0.5em 1em 1.2em 1em;\n}\n\n.info {\n  background: #6E6D6D;\n  padding: 0.4em 0em;\n}\n\n.info p {\n  margin: 0px;\n  color: #fff;\n  font-size: 10px;\n}\n\nion-select {\n  background: #F7F8FA;\n  border: 1px solid #D4DCE1;\n  border-radius: 30px;\n  --placeholder-color: #b2b2b4;\n  color: #000;\n  font-size: 13px;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n  --padding-bottom: 1.5em;\n  --padding-end: 1.5em;\n}\n\n.list_4 {\n  background: #F7F8FA;\n  border: 1px solid #D4DCE1;\n  border-radius: 12px;\n  color: #D4DCE1;\n  font-size: 13px;\n}\n\n.list_4 p {\n  margin: 0px;\n  color: #000;\n}\n\n.list_5 {\n  border-left: 1px dashed #c7c7c7;\n  height: 48px;\n  float: right;\n  margin-top: 12px;\n}\n\n.list_6 {\n  margin-bottom: 2em !important;\n}\n\n.list_7 {\n  height: 10px;\n  background: green;\n  width: 10px;\n  float: right;\n  position: relative;\n  right: 5px;\n  border-radius: 50%;\n  margin-top: 3px;\n}\n\n.list_8 {\n  height: 10px;\n  background: red;\n  width: 10px;\n  float: right;\n  position: relative;\n  right: 5px;\n  border-radius: 50%;\n}\n\n.activeState {\n  background: #c4932f;\n  border: 1px solid #c4932f !important;\n  color: #fff !important;\n}\n\n.activeEndState {\n  background: #c4932f;\n  border: 1px solid #c4932f !important;\n  color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdGNhcjZkcmFmdC9saXN0Y2FyNmRyYWZ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksd0JBQUE7SUFDQSxxQkFBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQUo7O0FBRUE7RUFDSSxrQkFBQTtFQUVBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUVBO0VBQ0ksVUFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtBQUVKOztBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFHSjs7QUFEQTtFQUNJLFlBQUE7QUFJSjs7QUFGQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBS0o7O0FBSEE7RUFDSSxnQkFBQTtBQU1KOztBQUpBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBT0o7O0FBTEE7RUFDSSw2QkFBQTtBQVFKOztBQU5BO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQVNKOztBQVBBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBVUo7O0FBUkE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBV0o7O0FBVEE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtBQVlKOztBQVZBO0VBRUksY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQVlKOztBQVZBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFhSjs7QUFYQTtFQUNJLHlCQUFBO0FBY0o7O0FBWkE7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQWVKOztBQWJBO0VBQ0ksNEJBQUE7QUFnQko7O0FBZEE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FBaUJKOztBQWZBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFrQko7O0FBaEJBO0VBQ0ksa0JBQUE7QUFtQko7O0FBakJBO0VBQ0ksZ0JBQUE7QUFvQko7O0FBbEJBO0VBQ0ksdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBcUJKOztBQW5CQTtFQUNJLDRCQUFBO0FBc0JKOztBQXBCQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUF1Qko7O0FBckJBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBd0JKOztBQXRCQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtBQXlCSjs7QUF2QkE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQTBCSjs7QUF4QkE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQTJCSjs7QUF6QkE7RUFDSSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUE0Qko7O0FBMUJBO0VBQ0ksNkJBQUE7QUE2Qko7O0FBM0JBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUE4Qko7O0FBNUJBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBK0JKOztBQTdCQTtFQUNJLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtBQWdDSjs7QUE5QkE7RUFDSSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7QUFpQ0oiLCJmaWxlIjoic3JjL2FwcC9saXN0Y2FyNmRyYWZ0L2xpc3RjYXI2ZHJhZnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gICAgcGFkZGluZzogMC44ZW0gMC4xZW0gMCAwO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjYzQ5MzJmO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi1oZWlnaHQgOiA4MDBweCkge1xyXG4gICAgaW9uLXRvb2xiYXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDNlbSAwLjFlbSA4cHggMDtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICNjNDkzMmY7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi10aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcbi52aWV3X2J0biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gICAgcmlnaHQ6IDdweDtcclxuICAgIHRvcDogLTEycHg7XHJcbiAgICBjb2xvcjogI2M0OTMyZjtcclxufVxyXG4uZXJyb3J7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbn1cclxuLnJlYWxfaW1hZ2V7XHJcbiAgICBwYWRkaW5nOjBweDtcclxufVxyXG4ucmVhbF9pbWFnZSBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbn1cclxuLnJlYWxfaW1hZ2VfMntcclxuICAgIHBhZGRpbmc6MHB4O1xyXG59XHJcbi5yZWFsX2ltYWdlXzIgaW1ne1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxNjRweDtcclxufVxyXG4ubGlzdF8xe1xyXG4gICAgcGFkZGluZzogMGVtIDFlbTtcclxufVxyXG4ubGlzdF8xIGgze1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxufVxyXG4ubGVmdF80e1xyXG4gICAgbWFyZ2luLWxlZnQ6MC43ZW0gIWltcG9ydGFudDtcclxufVxyXG4uaW5wdXRfbGlzdHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGRjZTE7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjdGOEZBO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjhweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogI2IyYjJiNDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEuNWVtO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxLjVlbTtcclxuICAgIC0tcGFkZGluZy10b3A6IDEuNWVtO1xyXG59XHJcbi51cGxvYWRfaW1hZ2Vze1xyXG4gICAgY29sb3I6I0M0OTMyRjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbjogNXB4IDBweDtcclxufVxyXG4ubGlzdF8ye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI0Y3RjhGQTtcclxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjRDREQ0UxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDIuNWVtIDBlbTtcclxufVxyXG4ubGlzdF85e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI0Y3RjhGQTtcclxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjRDREQ0UxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6My43ZW0gMGVtIDIuNWVtIDBlbTtcclxuICAgIGhlaWdodDogMTYzcHg7XHJcbn1cclxuLmxpc3RfOSBwe1xyXG4gICAgXHJcbiAgICBjb2xvcjogI2QyZDZkODtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcbi5saXN0XzN7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjdGOEZBO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Q0RENFMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICNiMmIyYjQ7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEuNWVtO1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMS41ZW07XHJcbn1cclxuLmJ0bl9mb290ZXJ7XHJcbiAgICBtYXJnaW46IDAuN2VtIDBlbSAxZW0gMGVtO1xyXG59XHJcbmlvbi1zbGlkZSBzcGFue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMTRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbn1cclxuLm51bXtcclxuICAgIHBhZGRpbmc6IDlweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhbGVuZGVyX3NsaWRlcntcclxuICAgIGJhY2tncm91bmQ6ICNGN0Y4RkE7XHJcbiAgICBwYWRkaW5nOiAwLjZlbSAwZW07XHJcbn1cclxuLmNhbGVuZGVyX3NsaWRlcl90ZXh0e1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0ycHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuaW9uLXNsaWRle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNmVtO1xyXG59XHJcbmlvbi1zbGlkZTpmaXJzdC1jaGlsZHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwZW07XHJcbn1cclxuaW9uLWJ1dHRvbntcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEuNWVtO1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMS41ZW07XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmJ0bl9mb290ZXJ7XHJcbiAgICBwYWRkaW5nOiAwLjVlbSAxZW0gMS4yZW0gMWVtO1xyXG59XHJcbi5pbmZve1xyXG4gICAgYmFja2dyb3VuZDogIzZFNkQ2RDtcclxuICAgIHBhZGRpbmc6IDAuNGVtIDBlbTtcclxufVxyXG4uaW5mbyBwe1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5pb24tc2VsZWN0e1xyXG4gICAgYmFja2dyb3VuZDogI0Y3RjhGQTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNENERDRTE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogI2IyYjJiNDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxLjVlbTtcclxuICAgIC0tcGFkZGluZy10b3A6IDEuNWVtO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMS41ZW07XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxLjVlbTtcclxufVxyXG4ubGlzdF80e1xyXG4gICAgYmFja2dyb3VuZDogI0Y3RjhGQTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNENERDRTE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgY29sb3I6ICNENERDRTE7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuLmxpc3RfNCBwe1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBjb2xvcjojMDAwO1xyXG59XHJcbi5saXN0XzV7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IGRhc2hlZCAjYzdjN2M3O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxufVxyXG4ubGlzdF82e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuLmxpc3RfN3tcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICByaWdodDogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG59XHJcbi5saXN0Xzh7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHJpZ2h0OiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLmFjdGl2ZVN0YXRle1xyXG4gICAgYmFja2dyb3VuZDogI2M0OTMyZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjNDkzMmYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuLmFjdGl2ZUVuZFN0YXRle1xyXG4gICAgYmFja2dyb3VuZDogI2M0OTMyZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjNDkzMmYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7IFxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/listcar6draft/listcar6draft.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/listcar6draft/listcar6draft.page.ts ***!
  \*****************************************************/
/*! exports provided: Listcar6draftPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Listcar6draftPage", function() { return Listcar6draftPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _cameraimage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cameraimage.service */ "./src/app/cameraimage.service.ts");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var ngx_image_compress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-image-compress */ "./node_modules/ngx-image-compress/__ivy_ngcc__/fesm2015/ngx-image-compress.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");













Object(_angular_common__WEBPACK_IMPORTED_MODULE_11__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_10___default.a);


let Listcar6draftPage = class Listcar6draftPage {
    constructor(loadingController, activatedRoute, popoverController, storage, toastController, router, restService, alertCtrl, imageService, menuCtrl, imageCompress, imagePicker, platform, location, navCtrl, transfer) {
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
            slidesPerView: 8,
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
            to: new Date(),
        };
        this.optionsRange = {
            pickMode: 'range',
        };
        // dateRanges: {
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
        this.days = Array.from({ length: 30 }, (v, k) => k + 1);
    }
    ngOnInit() {
        if (this.platform.is('ios')) {
            this.plateformCheck = 'ios';
        }
        else {
            this.plateformCheck = 'android';
        }
        this.getDropDownData();
        this.storage.get('user_details').then((user_details) => {
            console.log(user_details);
            this.userID = user_details.users_id;
            this.Email = user_details.email;
            this.about = user_details.about;
            this.work = user_details.work;
            this.currencyID = user_details.currencies_id;
            this.storage.get('base_urls').then((base_url) => {
                this.base_url = base_url;
                this.storage.get('currency_symbol').then((currency_symbol) => {
                    this.currency_symbol = currency_symbol;
                });
            });
        });
        this.storage.get('lastVeh').then((lastVeh) => {
            this.lastVeh = lastVeh;
        });
        this.currentYear = new Date().getFullYear();
        this.currentYearTwo = new Date().getFullYear();
        this.getStartIndex(1);
        this.getEndIndex(1);
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.pickup = yield this.storage.get('pickup');
            this.dropoff = yield this.storage.get('dropoff');
            this.pickuplong = yield this.storage.get('pickuplong');
            this.pickuplat = yield this.storage.get('pickuplat');
            this.dropofflong = yield this.storage.get('dropofflong');
            this.dropofflat = yield this.storage.get('dropofflat');
            this.Model = yield this.storage.get('modelID');
            this.Make = yield this.storage.get('makeID');
            this.LicensePlate = yield this.storage.get('licensePlate');
            this.uploadedImages = yield this.storage.get('carImages');
            this.Seats = yield this.storage.get('noOfSeats');
            this.Description = yield this.storage.get('description');
            this.Door = yield this.storage.get('noOfDoors');
            this.Gas = yield this.storage.get('fuelTypeID');
            this.GearType = yield this.storage.get('gearTypeID');
            this.wheels = yield this.storage.get('noOfWheels');
            this.Convertable = yield this.storage.get('roofTypeID');
            this.other_features = yield this.storage.get('otherFeatures');
            console.log(this.uploadedImages, 'this.uploadedImagesthis.uploadedImages');
        });
    }
    getStartIndex(i) {
        this.sliderStartBoolean = i;
        console.log(this.sliderEndBoolean, 'nice days start');
        this.validateStartDate();
    }
    getEndIndex(i) {
        this.sliderEndBoolean = i;
        console.log(this.sliderEndBoolean, 'nice days ');
        this.validateEndDate();
    }
    goToLocation() {
        var myData = JSON.stringify({
            location: '/car-documents',
        });
        this.navCtrl.navigateForward('location', {
            queryParams: {
                value: myData,
            },
        });
    }
    getDropDownData() {
        var stringy = JSON.stringify({
            requestType: 'list_car_page',
        });
        console.log(stringy);
        this.restService.getDdlData(stringy).subscribe((response) => {
            this.response = JSON.parse(response['_body']);
            this.model = this.response.model;
            this.make = this.response.make;
            this.fuel_type = this.response.fuel_type;
            this.gear_type = this.response.gear_type;
            this.roof_type = this.response.roof_type;
            this.countries = this.response.countries;
            this.languages = this.response.languages;
            this.storage.get('mycardraft').then((res) => {
                console.log('mycardraft ali', res);
                this.imgRoadworthy = res.roadworthy_doc_img;
                this.imgInsurence = res.insurance_img;
                if (res.roadworthy_doc_img) {
                    this.document_four = this.baseURLofImage + res.roadworthy_doc_img;
                }
                if (res.insurance_img) {
                    this.document_five = this.baseURLofImage + res.insurance_img;
                }
                this.about = res.about;
                this.lives = res.countries_id;
                this.language = res.languages_id;
                this.work = res.work;
                this.ChargesInfo = res.charge_per_day;
                this.start_date = res.start_date;
                this.end_date = res.end_date;
                this.dbStartDate = this.start_date.split('-');
                this.dbEndDate = this.end_date.split('-');
                if (this.start_date != '0000-00-00' &&
                    this.end_date != '0000-00-00') {
                    this.dateRange = {
                        from: new Date(this.dbStartDate[0], this.dbStartDate[1] - 1, this.dbStartDate[2]),
                        to: new Date(this.dbEndDate[0], this.dbEndDate[1] - 1, this.dbEndDate[2]),
                    };
                }
                console.log('doc 5555555555555', this.document_five);
            });
            console.log(this.response);
        }, (err) => { });
    }
    validateForm() {
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
            }
            else if (this.Lives == '' || this.Lives == undefined) {
                this.LivesError = true;
                return false;
            }
            else if (this.work == '' || this.work == undefined) {
                this.workError = true;
                return false;
            }
            else if (this.Language == '' || this.Language == undefined) {
                this.LanguageError = true;
                return false;
            }
            else if (this.ChargesInfo == '' || this.ChargesInfo == undefined) {
                this.ChargesInfoError = true;
                return false;
            }
            else {
                if (this.end_date == '' || this.start_date == '') {
                    this.dateStartError = true;
                    console.log(this.dateStartError);
                    console.log(this.start_date, 'start date');
                    console.log(this.end_date, 'end date');
                }
                else {
                    console.log(this.start_date, 'start date');
                    console.log(this.end_date, 'end date');
                    return true;
                }
            }
        }
    }
    uploadDocuments() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.roadWorthyImageUpdated == 1 && this.insuranceImageUpdated == 1) {
                // Both roadWorthy and insurance images are uploadding
                this.validation = true;
                if (this.validateForm() == true) {
                    this.fieldMissing = false;
                    var roadworthy = this.document_four.split(',')[1];
                    var insurance = this.document_five.split(',')[1];
                    const fileTransfer = this.transfer.create();
                    const random = new Date().getTime();
                    const optionRoad = {
                        fileKey: 'photo',
                        fileName: 'imgroadworthy_' + '_' + this.userID + '_' + random + '.jpg',
                        chunkedMode: false,
                        httpMethod: 'post',
                        mimeType: 'image/jpeg',
                        params: {
                            image: 'YPOP',
                        },
                    };
                    const optionInsurance = {
                        fileKey: 'photo',
                        fileName: 'imginsurance_' + '_' + this.userID + '_' + random + '.jpg',
                        chunkedMode: false,
                        httpMethod: 'post',
                        mimeType: 'image/jpeg',
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
                        .upload(this.document_four, 'https://app.transusdrives.com/webservices/upload_image', optionInsurance)
                        .then((data) => {
                        console.log(data.response, 'imgInsurenceimgInsurence');
                        const img1 = JSON.parse(data.response);
                        console.log(img1, 'InsurenceimgInsurence');
                        this.imgInsurence = img1.message;
                        console.log(this.imgInsurence, 'this.imgInsurencethis.imgInsurence');
                        fileTransfer
                            .upload(this.document_five, 'https://app.transusdrives.com/webservices/upload_image', optionRoad)
                            .then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            loading_uploading.dismiss();
                            console.log(res.response, 'imgRoadworthyimgRoadworthy');
                            const img2 = JSON.parse(res.response);
                            console.log(img2, 'mgRoadworthymgRoadworthy');
                            this.imgRoadworthy = img2.message;
                            console.log(this.imgRoadworthy, 'this.imgRoadworthy this.imgRoadworthy');
                            this.submitForm();
                        }), (err) => {
                            console.log('Error');
                            loading_uploading.dismiss();
                            console.log(err);
                        });
                    }, (err) => {
                        console.log('Error');
                        loading_uploading.dismiss();
                        console.log(err);
                    });
                }
                else {
                    this.fieldMissing = true;
                }
            }
            else if (this.roadWorthyImageUpdated == 1 &&
                this.insuranceImageUpdated == 0) {
                // Only roadWorthy is uploading
                this.validation = true;
                if (this.validateForm() == true) {
                    this.fieldMissing = false;
                    const fileTransfer = this.transfer.create();
                    const random = new Date().getTime();
                    const optionRoad = {
                        fileKey: 'photo',
                        fileName: 'imgroadworthy_' + '_' + this.userID + '_' + random + '.jpg',
                        chunkedMode: false,
                        httpMethod: 'post',
                        mimeType: 'image/jpeg',
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
                        .upload(this.document_four, 'https://app.transusdrives.com/webservices/upload_image', optionRoad)
                        .then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        loading_uploading.dismiss();
                        console.log(res.response, 'imgRoadworthyimgRoadworthy');
                        const img2 = JSON.parse(res.response);
                        console.log(img2, 'mgRoadworthymgRoadworthy');
                        this.imgRoadworthy = img2.message;
                        this.imgInsurence = null;
                        console.log(this.imgRoadworthy, 'this.imgRoadworthy this.imgRoadworthy');
                        this.submitForm();
                    }), (err) => {
                        console.log('Error');
                        loading_uploading.dismiss();
                        console.log(err);
                    });
                }
                else {
                    this.fieldMissing = true;
                }
            }
            else if (this.insuranceImageUpdated == 1 &&
                this.roadWorthyImageUpdated == 0) {
                // Only insurance is uploading
                this.validation = true;
                if (this.validateForm() == true) {
                    this.fieldMissing = false;
                    var roadworthy = this.document_four.split(',')[1];
                    var insurance = this.document_five.split(',')[1];
                    const fileTransfer = this.transfer.create();
                    const random = new Date().getTime();
                    const optionInsurance = {
                        fileKey: 'photo',
                        fileName: 'imginsurance_' + '_' + this.userID + '_' + random + '.jpg',
                        chunkedMode: false,
                        httpMethod: 'post',
                        mimeType: 'image/jpeg',
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
                        .upload(this.document_five, 'https://app.transusdrives.com/webservices/upload_image', optionInsurance)
                        .then((data) => {
                        console.log(data.response, 'imgInsurenceimgInsurence');
                        const img1 = JSON.parse(data.response);
                        console.log(img1, 'InsurenceimgInsurence');
                        this.imgInsurence = img1.message;
                        this.imgRoadworthy = null;
                        console.log(this.imgInsurence, 'this.imgInsurencethis.imgInsurence');
                        loading_uploading.dismiss();
                        this.submitForm();
                    }, (err) => {
                        console.log('Error');
                        loading_uploading.dismiss();
                        console.log(err);
                    });
                }
                else {
                    this.fieldMissing = true;
                }
            }
            else {
                this.validation = true;
                if (this.validateForm() == true) {
                    this.fieldMissing = false;
                    let loading_uploading = yield this.loadingController.create({
                        cssClass: 'ionloading',
                        message: 'Uploading images...',
                    });
                    yield loading_uploading.present();
                    this.imgRoadworthy = null;
                    this.imgInsurence = null;
                    this.submitForm();
                    loading_uploading.dismiss();
                }
                else {
                    this.fieldMissing = true;
                }
            }
        });
    }
    submitForm() {
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
                end_date: this.end_date,
            });
            console.log(stringy, 'stringystringystringy');
            this.restService.listYourDraftCarAPI(stringy).subscribe((response) => {
                this.response = JSON.parse(response['_body']);
                console.log(response['_body']);
                //     alert(response['_body'])
                console.log(this.response.status);
                if (this.response.status == 'error') {
                    this.dismiss();
                    this.presentToast(this.response.msg);
                }
                else if (this.response.status == 'success') {
                    this.presentToast('Document Added Successfully');
                    this.dismiss();
                    //this.navCtrl.navigateRoot(['/']);
                    this.navCtrl.navigateForward('listcar7draft');
                }
            }, (err) => {
                alert('request error');
                this.dismiss();
            });
        }
        else {
            this.fieldMissing = true;
        }
    }
    uploadDocument(param) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.takeImageFromCamera(param);
        });
    }
    takeImageFromCamera(param) {
        console.log('u ahve param', param);
        var options = {
            maximumImagesCount: 1,
            outputType: 1,
            quality: 90,
        };
        this.imagePicker.getPictures(options).then((imageData) => {
            var base64 = `data:image/png;base64,${imageData}`;
            // this.imageCompress.compressFile(base64, 0, 50, 50).then((result) => {
            if (param == 4) {
                this.roadWorthyImageUpdated = 1;
                this.image4 = imageData;
                this.document_four = base64;
            }
            else if (param == 5) {
                this.insuranceImageUpdated = 1;
                this.image5 = imageData;
                this.document_five = base64;
            }
            // });
        }, (err) => {
            console.log('imagepicker  now:', err);
        });
        //   }).catch(err => console.error(err));
    }
    takeImageFromCameraAli(param) {
        this.imageService.selectImageInCamera().then((imageData) => {
            var base64 = `data:image/png;base64,${imageData}`;
            // this.imageCompress.compressFile(base64, 0, 50, 50).then((result) => {
            if (param == 4) {
                this.roadWorthyImageUpdated = 1;
                this.image4 = imageData;
                this.document_four = base64;
                console.log('this.roadWorthyImageUpdated----', this.roadWorthyImageUpdated);
            }
            else if (param == 5) {
                this.insuranceImageUpdated = 1;
                this.image5 = imageData;
                this.document_five = base64;
                console.log('this.insuranceImageUpdated----', this.insuranceImageUpdated);
            }
            // });
        }, (err) => {
            console.log('imagepicker  now:', err);
        });
        //   }).catch(err => console.error(err));
    }
    validateStartDate() {
        setTimeout(() => {
            var _a, _b;
            this.dateStartError = false;
            /**** end date ****/
            this.active_end_date = (_a = document.querySelector('.end_date .activeEndState')) === null || _a === void 0 ? void 0 : _a.textContent;
            let cEndDate = new Date(this.currentYear, this.endmonthCounter - 1, this.active_end_date).getTime();
            /**** end date ****/
            this.active_start_date = (_b = document.querySelector('.start_date .activeState')) === null || _b === void 0 ? void 0 : _b.textContent;
            let cDate = new Date(this.currentYear, this.startmonthCounter - 1, this.active_start_date).getTime();
            if (cDate > cEndDate) {
                console.log('start date ');
                this.dateStartError = true;
                console.log(this.dateStartError);
                //this.validateEndDate();
            }
        }, 300);
    }
    validateEndDate() {
        setTimeout(() => {
            var _a, _b, _c, _d;
            this.dateStartError = false;
            this.active_start_date = (_a = document.querySelector('.start_date .activeState')) === null || _a === void 0 ? void 0 : _a.textContent;
            let cStartDate = (_b = new Date(this.currentYear, this.startmonthCounter - 1, this.active_start_date)) === null || _b === void 0 ? void 0 : _b.getTime();
            this.active_end_date = (_c = document.querySelector('.end_date .activeEndState')) === null || _c === void 0 ? void 0 : _c.textContent;
            let cDate = (_d = new Date(this.currentYear, this.endmonthCounter - 1, this.active_end_date)) === null || _d === void 0 ? void 0 : _d.getTime();
            if (cStartDate > cDate) {
                console.log('end date ');
                this.dateStartError = true;
                console.log(this.dateStartError);
            }
        }, 300);
    }
    goToHome() {
        // this.router.navigate(['/listed-car']);
        // this.navCtrl.navigateBack(['/list-your-car']);
        //this.location.back();
        this.router.navigate(['listcar5draft']);
    }
    slidePrev() {
        this.start_month_index--;
        if (this.start_month_index < 1) {
            this.currentYear = this.currentYear - 1;
            this.start_month_index = 12;
        }
        this.start_date_month = this.monthList(this.start_month_index);
        this.startMonthCounter = this.start_month_index;
        // this.startSlides.slidePrev();
        this.validateStartDate();
    }
    slideNext() {
        this.start_month_index++;
        if (this.start_month_index == 13) {
            this.currentYear = this.currentYear + 1;
            this.start_month_index = 1;
        }
        this.start_date_month = this.monthList(this.start_month_index);
        this.startMonthCounter = this.start_month_index;
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
        this.endMonthCounter = this.end_month_index;
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
        this.endMonthCounter = this.end_month_index;
        this.validateEndDate();
        // this.endSlides.slideNext();
    }
    monthList(param) {
        // console.log(param);
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
    presentToast(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000,
                position: 'top',
            });
            toast.present();
        });
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
    onChange(event) {
        console.log(event);
    }
    newDate() {
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
    showPopup(val) {
        this.popupHidden = false;
        console.log(val);
        this.popupSelectedVal = val;
    }
    hidePopup() {
        this.popupHidden = true;
    }
    previewImage(image) {
        console.log('photo viewer');
        this.imageToShow = image;
        this.showSlide = 'yes';
        this.indexOfSLide = 1;
        //this.photoViewer.show(this.base_urls + '' + p);
    }
    closeModel() {
        this.showSlide = 'no';
    }
    CameraSelected() {
        console.log('popup cal', this.popupSelectedVal);
        this.takeImageFromCameraAli(this.popupSelectedVal);
        this.hidePopup();
    }
    GalerySelected() {
        console.log('popup cal', this.popupSelectedVal);
        this.uploadDocument(this.popupSelectedVal);
        this.hidePopup();
    }
};
Listcar6draftPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _cameraimage_service__WEBPACK_IMPORTED_MODULE_4__["CameraimageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: ngx_image_compress__WEBPACK_IMPORTED_MODULE_7__["NgxImageCompressService"] },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__["ImagePicker"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_12__["FileTransfer"] }
];
Listcar6draftPage.propDecorators = {
    startSlides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['startSlides',] }],
    endSlides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['endSlides',] }]
};
Listcar6draftPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listcar6draft',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./listcar6draft.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/listcar6draft/listcar6draft.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./listcar6draft.page.scss */ "./src/app/listcar6draft/listcar6draft.page.scss")).default]
    })
], Listcar6draftPage);



/***/ })

}]);
//# sourceMappingURL=listcar6draft-listcar6draft-module-es2015.js.map