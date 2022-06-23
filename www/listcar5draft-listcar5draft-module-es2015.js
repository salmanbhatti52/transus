(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["listcar5draft-listcar5draft-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/listcar5draft/listcar5draft.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/listcar5draft/listcar5draft.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header *ngIf=\"showSlide == 'no'\" [class.ios-headers]=\"plateformCheck == 'ios'\">\n  <ion-toolbar>\n    <ion-buttons [class.back_button]=\"plateformCheck == 'ios'\" slot=\"start\">\n      <img src=\"assets/img/Arrow.svg\" (click)=\"goToHome()\" />\n    </ion-buttons>\n    <ion-title [class.globe_title]=\"plateformCheck == 'ios'\"\n      >List your car</ion-title\n    >\n  </ion-toolbar>\n</ion-header>\n<ion-content *ngIf=\"showSlide == 'no'\">\n  <div class=\"list_1\">\n    <ion-row>\n      <ion-col>\n        <p style=\"font-size: 13px; margin: 1em 0em 1em 0em\">\n          Enter your info exactly as it appears on your license so we can verify\n          your eligibility to drive.\n        </p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col style=\"position:relative\">\n        <div\n          *ngIf=\"document_one =='' || document_one ==undefined\"\n          style=\"\n            border-radius: 10px;\n            width: 100%;\n            height: 150px;\n            background: #f7f8fa;\n            border: 1px dashed #d4dce1;\n          \"\n          (click)=\"showPopup(1)\"\n        >\n          <ion-row style=\"margin-top: 45px\">\n            <ion-col style=\"text-align: center\">\n              <img\n                src=\"assets/img/plusblack.png\"\n                style=\"height: 20px; width: 20px\"\n              />\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col style=\"text-align: center\">\n              <p style=\"font-size: 13px; color: #b0b0b0\">License</p>\n            </ion-col>\n          </ion-row> \n        </div>\n\n        <!-- <img\n          style=\"width: 100%; border-radius: 10px; height: 150px\"\n          (click)=\"showPopup(1)\"\n          *ngIf=\"document_one\"\n          src=\"https://app.transusdrives.com/uploads/vehicles/mycars_1653904596313.jpg\"\n        /> -->\n        <div *ngIf=\"document_one\" (click)=\"previewImage(document_one)\" class=\"view_btn\">\n          <p>View</p>\n        </div>\n        <img\n        *ngIf=\"document_one\"\n        style=\"width: 100%; border-radius: 10px; height: 150px\"\n        (click)=\"showPopup(1)\"\n       \n        src=\"{{document_one}}\"\n      />\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col> \n        <ion-input\n          placeholder=\"License Plate\"\n          [(ngModel)]=\"LicensePlate\"\n          class=\"input_list\"\n          (keyup)=\"checkingLiNo()\"\n          (ionBlur)=\"checkingLiNo()\"\n          (ionBlur)=\"validateForm()\"\n        >\n        </ion-input>\n        <span *ngIf=\"LicensePlateUnique\" class=\"error ion-padding\">\n          License Plate already exists.\n        </span>\n        <span *ngIf=\"LicensePlateError\" class=\"error ion-padding\">\n          License Plate is required.\n        </span>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-select\n          placeholder=\"Comfort Type\"\n          [(ngModel)]=\"comfort\"\n          (ionBlur)=\"validateForm()\"\n        >\n          <ion-select-option\n            value=\"{{p.car_classes_id}}\"\n            *ngFor=\"let p of comfortArray; let i = index\"\n            >{{p.name}}\n          </ion-select-option>\n        </ion-select>\n        <span *ngIf=\"SeatsError\" class=\"error ion-padding\">\n          Comfort is required.\n        </span>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-select\n          placeholder=\"Car Type\"\n          [(ngModel)]=\"carType\"\n          (ionBlur)=\"validateForm()\"\n        >\n          <ion-select-option\n            value=\"{{p.car_types_id}}\"\n            *ngFor=\"let p of carTypeArray; let i = index\"\n            >{{p.name}}\n          </ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-input\n          type=\"tel\"\n          placeholder=\"Mobile Number\"\n          [(ngModel)]=\"mobileNum\"\n          class=\"input_list\"\n          (ionBlur)=\"validateForm()\"\n        >\n        </ion-input>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-select\n          placeholder=\"No. of seats\"\n          [(ngModel)]=\"Seats\"\n          (ionBlur)=\"validateForm()\"\n        >\n          <ion-select-option\n            value=\"{{p.veh_seats_id}}\"\n            *ngFor=\"let p of seats; let i = index\"\n            >{{p.seat_no}}\n          </ion-select-option>\n        </ion-select>\n        <span *ngIf=\"SeatsError\" class=\"error ion-padding\">\n          Seat is required.\n        </span>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-textarea\n          rows=\"6\"\n          placeholder=\"Description\"\n          [(ngModel)]=\"Description\"\n          class=\"list_3\"\n          (ionBlur)=\"validateForm()\"\n        ></ion-textarea>\n        <span *ngIf=\"DescriptionError\" class=\"error ion-padding\">\n          Description is required.\n        </span>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-select\n          placeholder=\"No. of Door\"\n          [(ngModel)]=\"Door\"\n          (ionBlur)=\"validateForm()\"\n          value=\"{{Door}}\"\n        >\n          <ion-select-option\n            value=\"{{p.veh_doors_id}}\"\n            *ngFor=\"let p of doors; let i = index\"\n            >{{p.door_no}}\n          </ion-select-option>\n        </ion-select>\n        <span *ngIf=\"DoorError\" class=\"error ion-padding\">\n          Door is required.\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-select\n          placeholder=\"Gas\"\n          [(ngModel)]=\"Gas\"\n          (ionBlur)=\"validateForm()\"\n        >\n          <ion-select-option\n            value=\"{{p.fuel_type_id}}\"\n            *ngFor=\"let p of fuel_type; let i = index\"\n            >{{p.name}}\n          </ion-select-option>\n        </ion-select>\n        <span *ngIf=\"GasError\" class=\"error ion-padding\">\n          Fuel Type is required.\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-select\n          placeholder=\"Gear Type\"\n          [(ngModel)]=\"GearType\"\n          (ionBlur)=\"validateForm()\"\n          value=\"{{GearType}}\"\n        >\n          <ion-select-option\n            value=\"{{p.gear_type_id}}\"\n            *ngFor=\"let p of gear_type; let i = index\"\n            >{{p.name}}\n          </ion-select-option>\n        </ion-select>\n        <span *ngIf=\"GearTypeError\" class=\"error ion-padding\">\n          Gear Type is required.\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-select\n          placeholder=\"Convertable\"\n          [(ngModel)]=\"Convertable\"\n          (ionBlur)=\"validateForm()\"\n        >\n          <ion-select-option\n            value=\"{{p.engine_type_id}}\"\n            *ngFor=\"let p of roof_type; let i = index\"\n            >{{p.name}}\n          </ion-select-option>\n        </ion-select>\n        <span *ngIf=\"ConvertableError\" class=\"error ion-padding\">\n          Roof Type is required.\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-select\n          placeholder=\"No. of wheels\"\n          [(ngModel)]=\"wheels\"\n          (ionBlur)=\"validateForm()\"\n          value=\"{{wheels}}\"\n        >\n          <ion-select-option\n            value=\"{{p.veh_wheels_id}}\"\n            *ngFor=\"let p of wheelss; let i = index\"\n            >{{p.wheels_no}}\n          </ion-select-option>\n        </ion-select>\n        <span *ngIf=\"wheelsError\" class=\"error ion-padding\">\n          wheel is required.\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-textarea\n          rows=\"6\"\n          placeholder=\"Other features\"\n          [(ngModel)]=\"other_features\"\n          class=\"list_3\"\n          (ionBlur)=\"validateForm()\"\n        >\n        </ion-textarea>\n        <span *ngIf=\"other_featuresError\" class=\"error ion-padding\">\n          other features is required.\n        </span>\n      </ion-col>\n    </ion-row>\n  </div>\n  <ion-row>\n    <ion-col>\n      <span *ngIf=\"fieldMissing\" class=\"error ion-padding ion-text-center\">\n        Please fill all the required fields.\n      </span>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"btn_footer\">\n    <ion-col size=\"2\"></ion-col>\n    <ion-col size=\"8\">\n      <ion-button\n        color=\"primary\"\n        expand=\"block\"\n        shape=\"round\"\n        (click)=\"goToNext()\"\n        >Next</ion-button\n      >\n    </ion-col>\n  </ion-row>\n</ion-content>\n\n<div\n  [hidden]=\"popupHidden\"\n  style=\"\n    height: 100%;\n    width: 100%;\n    background-color: rgb(0 0 0 / 68%);\n    position: absolute;\n  \"\n>\n  <div\n    style=\"\n      left: 10%;\n      position: absolute;\n      top: 40%;\n      width: 80%;\n      height: 160px;\n      background-color: rgb(255, 255, 255);\n      border-radius: 20px;\n    \"\n  >\n    <ion-row>\n      <ion-col\n        style=\"padding-top: 10 px; padding-right: 10px; text-align: right\"\n      >\n        <img\n          style=\"height: 10px; width: 10px; margin-right: 4px; margin-top: 8px\"\n          src=\"assets/img/close_black.svg\"\n          (click)=\"hidePopup()\"\n        />\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: -4px\">\n      <ion-col (click)=\"CameraSelected()\" style=\"text-align: center\">\n        <img style=\"height: 50px; width: 50px\" src=\"assets/img/camera.svg\" />\n        <p>Camera</p>\n      </ion-col>\n      <ion-col (click)=\"GalerySelected()\" style=\"text-align: center\">\n        <img style=\"height: 50px; width: 50px\" src=\"assets/img/gallery.svg\" />\n        <p>Gallery</p>\n      </ion-col>\n    </ion-row>\n  </div>\n</div>\n\n\n<div\n    *ngIf=\"showSlide == 'yes'\"\n    [class.for_ios_pad]=\"plateformCheck == 'ios'\"\n    style=\"background: #000000f5; height: 100%\"\n  >\n    <ion-row>\n      <ion-col style=\"padding-left: 20px; padding-top: 20px\">\n        <img\n          src=\"assets/img/close.png\"\n          (click)=\"closeModel()\"\n          style=\"height: 20px; width: 20px; padding: 3px; border-radius: 10px\"\n        />\n      </ion-col>  \n    </ion-row>\n\n    <ion-row class=\"center\">\n      <ion-col class=\"slider_main_slide\" style=\"display: flex\">\n        <ion-slides >\n          <ng-container >\n            <ion-slide style=\"width: 100%;\">\n              <img style=\"max-height: 80%;\" src=\"{{imageToShow}}\" class=\"s_img_slide\" />\n            </ion-slide>\n          </ng-container>\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n\n  \n</div>\n");

/***/ }),

/***/ "./src/app/listcar5draft/listcar5draft-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/listcar5draft/listcar5draft-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: Listcar5draftPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Listcar5draftPageRoutingModule", function() { return Listcar5draftPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _listcar5draft_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listcar5draft.page */ "./src/app/listcar5draft/listcar5draft.page.ts");




const routes = [
    {
        path: '',
        component: _listcar5draft_page__WEBPACK_IMPORTED_MODULE_3__["Listcar5draftPage"]
    }
];
let Listcar5draftPageRoutingModule = class Listcar5draftPageRoutingModule {
};
Listcar5draftPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Listcar5draftPageRoutingModule);



/***/ }),

/***/ "./src/app/listcar5draft/listcar5draft.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/listcar5draft/listcar5draft.module.ts ***!
  \*******************************************************/
/*! exports provided: Listcar5draftPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Listcar5draftPageModule", function() { return Listcar5draftPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _listcar5draft_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listcar5draft-routing.module */ "./src/app/listcar5draft/listcar5draft-routing.module.ts");
/* harmony import */ var _listcar5draft_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listcar5draft.page */ "./src/app/listcar5draft/listcar5draft.page.ts");







let Listcar5draftPageModule = class Listcar5draftPageModule {
};
Listcar5draftPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _listcar5draft_routing_module__WEBPACK_IMPORTED_MODULE_5__["Listcar5draftPageRoutingModule"]
        ],
        declarations: [_listcar5draft_page__WEBPACK_IMPORTED_MODULE_6__["Listcar5draftPage"]]
    })
], Listcar5draftPageModule);



/***/ }),

/***/ "./src/app/listcar5draft/listcar5draft.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/listcar5draft/listcar5draft.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3em 0.1em 8px 0;\n    --background: #c4932f;\n  }\n}\n\n.view_btn {\n  position: absolute;\n  right: 7px;\n  top: -30px;\n  color: #c4932f;\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n}\n\n.error {\n  color: red;\n}\n\n.real_image {\n  padding: 0px;\n}\n\n.real_image img {\n  width: 100%;\n  height: 100px;\n}\n\n.real_image_2 {\n  padding: 0px;\n}\n\n.real_image_2 img {\n  width: 150px;\n  height: 164px;\n}\n\n.list_1 {\n  padding: 0em 1em;\n}\n\n.list_1 h3 {\n  margin: 0px;\n  margin-top: 0.5em;\n}\n\n.left_4 {\n  margin-left: 0.7em !important;\n}\n\n.input_list {\n  border: 1px solid #d4dce1;\n  background: #F7F8FA;\n  border-radius: 28px;\n  font-size: 13px;\n  color: #000;\n  --placeholder-color: #b2b2b4;\n  --padding-bottom: 1.5em;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n}\n\n.upload_images {\n  color: #C4932F;\n  font-size: 12px;\n  margin: 5px 0px;\n}\n\n.list_2 {\n  text-align: center;\n  background: #F7F8FA;\n  border: 1px dashed #D4DCE1;\n  border-radius: 10px;\n  padding: 2.5em 0em;\n}\n\n.list_9 {\n  text-align: center;\n  background: #F7F8FA;\n  border: 1px dashed #D4DCE1;\n  border-radius: 10px;\n  padding: 3.7em 0em 2.5em 0em;\n  height: 163px;\n}\n\n.list_9 p {\n  color: #d2d6d8;\n  font-size: 12px;\n  margin: 0px;\n  margin-top: 8px;\n}\n\n.list_3 {\n  background: #F7F8FA;\n  border: 1px solid #D4DCE1;\n  border-radius: 10px;\n  color: #000;\n  --placeholder-color: #b2b2b4;\n  font-size: 13px;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n}\n\n.btn_footer {\n  margin: 0.7em 0em 1em 0em;\n}\n\nion-slide span {\n  border: 1px solid #000;\n  border-radius: 22px;\n  padding: 8px 14px;\n  margin-left: 1em;\n}\n\n.num {\n  padding: 9px 10px !important;\n}\n\n.calender_slider {\n  background: #F7F8FA;\n  padding: 0.6em 0em;\n}\n\n.calender_slider_text {\n  margin: 0px;\n  position: relative;\n  top: -2px;\n  font-size: 18px;\n}\n\nion-slide {\n  margin-left: 0.6em;\n}\n\nion-slide:first-child {\n  margin-left: 0em;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n}\n\n.btn_footer {\n  padding: 0.5em 1em 1.2em 1em;\n}\n\n.info {\n  background: #6E6D6D;\n  padding: 0.4em 0em;\n}\n\n.info p {\n  margin: 0px;\n  color: #fff;\n  font-size: 10px;\n}\n\nion-select {\n  background: #F7F8FA;\n  border: 1px solid #D4DCE1;\n  border-radius: 30px;\n  --placeholder-color: #b2b2b4;\n  color: #000;\n  font-size: 13px;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n  --padding-bottom: 1.5em;\n  --padding-end: 1.5em;\n}\n\n.list_4 {\n  background: #F7F8FA;\n  border: 1px solid #D4DCE1;\n  border-radius: 12px;\n  color: #D4DCE1;\n  font-size: 13px;\n}\n\n.list_4 p {\n  margin: 0px;\n  color: #000;\n}\n\n.list_5 {\n  border-left: 1px dashed #c7c7c7;\n  height: 48px;\n  float: right;\n  margin-top: 12px;\n}\n\n.list_6 {\n  margin-bottom: 2em !important;\n}\n\n.list_7 {\n  height: 10px;\n  background: green;\n  width: 10px;\n  float: right;\n  position: relative;\n  right: 5px;\n  border-radius: 50%;\n  margin-top: 3px;\n}\n\n.list_8 {\n  height: 10px;\n  background: red;\n  width: 10px;\n  float: right;\n  position: relative;\n  right: 5px;\n  border-radius: 50%;\n}\n\n.activeState {\n  background: #c4932f;\n  border: 1px solid #c4932f !important;\n  color: #fff !important;\n}\n\n.activeEndState {\n  background: #c4932f;\n  border: 1px solid #c4932f !important;\n  color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdGNhcjVkcmFmdC9saXN0Y2FyNWRyYWZ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksd0JBQUE7SUFDQSxxQkFBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdBO0VBQ0ksVUFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSw2QkFBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUdBO0VBRUksY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFESjs7QUFJQTtFQUNJLHlCQUFBO0FBREo7O0FBSUE7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksNEJBQUE7QUFESjs7QUFJQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7QUFESjs7QUFJQTtFQUNJLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQURKOztBQUlBO0VBQ0ksNEJBQUE7QUFESjs7QUFJQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FBREo7O0FBSUE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUFESjs7QUFJQTtFQUNJLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksNkJBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtBQURKOztBQUlBO0VBQ0ksbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0FBREoiLCJmaWxlIjoic3JjL2FwcC9saXN0Y2FyNWRyYWZ0L2xpc3RjYXI1ZHJhZnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gICAgcGFkZGluZzogMC44ZW0gMC4xZW0gMCAwO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjYzQ5MzJmO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi1oZWlnaHQgOiA4MDBweCkge1xyXG4gICAgaW9uLXRvb2xiYXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDNlbSAwLjFlbSA4cHggMDtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICNjNDkzMmY7XHJcbiAgICB9XHJcbn1cclxuXHJcbi52aWV3X2J0biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogN3B4O1xyXG4gICAgdG9wOiAtMzBweDtcclxuICAgIGNvbG9yOiAjYzQ5MzJmO1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4ucmVhbF9pbWFnZSB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5yZWFsX2ltYWdlIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5yZWFsX2ltYWdlXzIge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4ucmVhbF9pbWFnZV8yIGltZyB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE2NHB4O1xyXG59XHJcblxyXG4ubGlzdF8xIHtcclxuICAgIHBhZGRpbmc6IDBlbSAxZW07XHJcbn1cclxuXHJcbi5saXN0XzEgaDMge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxufVxyXG5cclxuLmxlZnRfNCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC43ZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlucHV0X2xpc3Qge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZGNlMTtcclxuICAgIGJhY2tncm91bmQ6ICNGN0Y4RkE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyOHB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjYjJiMmI0O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMS41ZW07XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEuNWVtO1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMS41ZW07XHJcbn1cclxuXHJcbi51cGxvYWRfaW1hZ2VzIHtcclxuICAgIGNvbG9yOiAjQzQ5MzJGO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luOiA1cHggMHB4O1xyXG59XHJcblxyXG4ubGlzdF8yIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNGN0Y4RkE7XHJcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgI0Q0RENFMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAyLjVlbSAwZW07XHJcbn1cclxuXHJcbi5saXN0Xzkge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI0Y3RjhGQTtcclxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjRDREQ0UxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDMuN2VtIDBlbSAyLjVlbSAwZW07XHJcbiAgICBoZWlnaHQ6IDE2M3B4O1xyXG59XHJcblxyXG4ubGlzdF85IHAge1xyXG5cclxuICAgIGNvbG9yOiAjZDJkNmQ4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuXHJcbi5saXN0XzMge1xyXG4gICAgYmFja2dyb3VuZDogI0Y3RjhGQTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNENERDRTE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjYjJiMmI0O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxLjVlbTtcclxuICAgIC0tcGFkZGluZy10b3A6IDEuNWVtO1xyXG59XHJcblxyXG4uYnRuX2Zvb3RlciB7XHJcbiAgICBtYXJnaW46IDAuN2VtIDBlbSAxZW0gMGVtO1xyXG59XHJcblxyXG5pb24tc2xpZGUgc3BhbiB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcclxuICAgIHBhZGRpbmc6IDhweCAxNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxufVxyXG5cclxuLm51bSB7XHJcbiAgICBwYWRkaW5nOiA5cHggMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FsZW5kZXJfc2xpZGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNGN0Y4RkE7XHJcbiAgICBwYWRkaW5nOiAwLjZlbSAwZW07XHJcbn1cclxuXHJcbi5jYWxlbmRlcl9zbGlkZXJfdGV4dCB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTJweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuaW9uLXNsaWRlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjZlbTtcclxufVxyXG5cclxuaW9uLXNsaWRlOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwZW07XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMS41ZW07XHJcbiAgICAtLXBhZGRpbmctdG9wOiAxLjVlbTtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmJ0bl9mb290ZXIge1xyXG4gICAgcGFkZGluZzogMC41ZW0gMWVtIDEuMmVtIDFlbTtcclxufVxyXG5cclxuLmluZm8ge1xyXG4gICAgYmFja2dyb3VuZDogIzZFNkQ2RDtcclxuICAgIHBhZGRpbmc6IDAuNGVtIDBlbTtcclxufVxyXG5cclxuLmluZm8gcCB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG5pb24tc2VsZWN0IHtcclxuICAgIGJhY2tncm91bmQ6ICNGN0Y4RkE7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDREQ0UxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICNiMmIyYjQ7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMS41ZW07XHJcbiAgICAtLXBhZGRpbmctdG9wOiAxLjVlbTtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEuNWVtO1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMS41ZW07XHJcbn1cclxuXHJcbi5saXN0XzQge1xyXG4gICAgYmFja2dyb3VuZDogI0Y3RjhGQTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNENERDRTE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgY29sb3I6ICNENERDRTE7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5saXN0XzQgcCB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4ubGlzdF81IHtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggZGFzaGVkICNjN2M3Yzc7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG59XHJcblxyXG4ubGlzdF82IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGlzdF83IHtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICByaWdodDogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG59XHJcblxyXG4ubGlzdF84IHtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcmlnaHQ6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmFjdGl2ZVN0YXRlIHtcclxuICAgIGJhY2tncm91bmQ6ICNjNDkzMmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzQ5MzJmICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWN0aXZlRW5kU3RhdGUge1xyXG4gICAgYmFja2dyb3VuZDogI2M0OTMyZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjNDkzMmYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/listcar5draft/listcar5draft.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/listcar5draft/listcar5draft.page.ts ***!
  \*****************************************************/
/*! exports provided: Listcar5draftPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Listcar5draftPage", function() { return Listcar5draftPage; });
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


let Listcar5draftPage = class Listcar5draftPage {
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
        this.document_one = "";
        this.document_two = "";
        this.document_three = "";
        this.document_four = "";
        this.document_five = "";
        this.start_date_month = "";
        this.end_date_month = "";
        this.start_month_index = 1;
        this.end_month_index = 1;
        //  documentBase64: Array<String> = [];
        this.documentBase64 = [];
        this.days = [];
        this.monthCounter = 1;
        this.document_six = "";
        this.document_seven = "";
        this.validation = false;
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
        this.comfort = "";
        this.oneDataSet = "";
        this.mobileNum = "";
        this.carType = "";
        this.baseURLofImage = "https://app.transusdrives.com/uploads/vehicles/";
        // comfortArray = [
        //   { comfort_id: '1', comfort: 'Comfort' },
        //   { comfort_id: '2', comfort: 'Business Class' },
        //   { comfort_id: '3', comfort: 'Deluxe' },
        //   { comfort_id: '4', comfort: 'Super Deluxe' },
        // ];
        this.comfortArray = [];
        // carTypeArray = [
        //   { type_id: '1', type: 'Van' },
        //   { type_id: '2', type: 'Mini Van' },
        //   { type_id: '3', type: 'SUV' },
        //   { type_id: '4', type: 'Truck' },
        // ];
        this.carTypeArray = [];
        this.popupHidden = true;
        this.vehicleImageUpdated = 0;
        this.optionsRange = {
            pickMode: "range",
        };
        // dateRanges: {
        //   from: Date;
        //   to: Date
        // } = {
        //   from:  new Date(Date.now() + 24 * 60 * 60 * 1000 *2),
        //   to: new Date(Date.now() + 24 * 60 * 60 * 1000 * 90)
        // };
        this.invalidDates = ["2021-06-10", "2021-06-13"];
        this.base_urls = this.restService.domainOfCar;
        // geting car types
        this.getCarTypes();
        var month = new Date().getMonth() + 1;
        console.log(month, "date From Month");
        var getname = this.monthList(month);
        console.log("getmonth from monthlist", getname);
        this.start_date_month = getname;
        this.end_date_month = getname;
        this.end_month_index = month;
        this.startMonthCounter = month;
        this.endMonthCounter = month;
        this.days = Array.from({ length: 30 }, (v, k) => k + 1);
    }
    getCarTypes() {
        var stringys = JSON.stringify({
            requestType: "get_parts_details",
        });
        console.log(stringys);
        this.restService.get_parts_details(stringys).subscribe((response) => {
            let resee = JSON.parse(response["_body"]);
            console.log("carTypes", resee);
            this.carTypeArray = resee.car_types;
            this.comfortArray = resee.car_classes;
        }, (err) => { });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Image pikcer permission
            this.imagePicker.requestReadPermission();
            // Image pikcer permission
            if (this.platform.is("ios")) {
                this.plateformCheck = "ios";
            }
            else {
                this.plateformCheck = "android";
            }
            this.getDropDownData();
            this.storage.get("user_details").then((user_details) => {
                console.log(user_details);
                this.userID = user_details.users_id;
                this.Email = user_details.email;
                this.about = user_details.about;
                this.work = user_details.work;
                this.currencyID = user_details.currencies_id;
                setTimeout(() => {
                    this.Language = user_details.languages_id;
                    this.Lives = user_details.countries_id;
                    console.log("ok");
                }, 2000);
                this.storage.get("base_urls").then((base_url) => {
                    this.base_url = base_url;
                    this.storage.get("currency_symbol").then((currency_symbol) => {
                        this.currency_symbol = currency_symbol;
                    });
                });
                this.currentYear = new Date().getFullYear();
                this.currentYearTwo = new Date().getFullYear();
                this.getStartIndex(1);
                this.getEndIndex(1);
                this.storage.get("lastVeh").then((lastVeh) => {
                    this.lastVeh = lastVeh;
                });
            });
        });
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.storage.get("pickup").then((pickup) => {
                this.storage.get("dropoff").then((dropoff) => {
                    this.storage.get("pickuplong").then((pickuplong) => {
                        this.storage.get("pickuplat").then((pickuplat) => {
                            this.storage.get("dropofflong").then((dropofflong) => {
                                this.storage.get("dropofflat").then((dropofflat) => {
                                    this.pickup = pickup;
                                    this.dropoff = dropoff;
                                    this.pickuplong = pickuplong;
                                    this.pickuplat = pickuplat;
                                    this.dropofflong = dropofflong;
                                    this.dropofflat = dropofflat;
                                });
                            });
                        });
                    });
                });
            });
            this.onceFilled = yield this.storage.get("onceFilled");
        });
    }
    checkingLiNo() {
        var stringys = JSON.stringify({
            requestType: "check_license_plate",
            licenseText: this.LicensePlate,
            veh_id: null,
        });
        console.log(stringys);
        this.restService.getDdlData(stringys).subscribe((response) => {
            this.response = JSON.parse(response["_body"]);
            if (this.response.msg == "exist") {
                this.LicensePlateUnique = true;
            }
            else {
                this.LicensePlateUnique = false;
            }
            console.log("check_license_plate Response", this.response);
        }, (err) => { });
    }
    getStartIndex(i) {
        this.sliderStartBoolean = i;
        console.log(this.sliderEndBoolean, "nice days start");
        this.validateStartDate();
    }
    getEndIndex(i) {
        this.sliderEndBoolean = i;
        console.log(this.sliderEndBoolean, "nice days ");
        this.validateEndDate();
    }
    goToLocation() {
        var myData = JSON.stringify({
            location: "/list-your-car",
        });
        this.router.navigate(["/location"], {
            queryParams: {
                value: myData,
            },
        });
    }
    getDropDownData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var stringy = JSON.stringify({
                requestType: "list_car_page",
            });
            console.log(stringy);
            this.restService.getDdlData(stringy).subscribe((response) => {
                this.response = JSON.parse(response["_body"]);
                this.model = this.response.model;
                this.make = this.response.make;
                this.fuel_type = this.response.fuel_type;
                this.gear_type = this.response.gear_type;
                this.roof_type = this.response.roof_type;
                this.countries = this.response.countries;
                this.languages = this.response.languages;
                this.wheelss = this.response.no_of_wheels;
                this.seats = this.response.no_of_seats;
                this.doors = this.response.no_of_doors;
                this.storage.get("mycardraft").then((res) => {
                    this.reposn = res;
                    console.log("mycardraft ali", res);
                    this.LicensePlate = res.license_no_plate;
                    if (res.license_img) {
                        this.document_one = this.base_urls + res.license_img;
                    }
                    else {
                        this.document_one = res.license_img;
                    }
                    console.log("this.document_one urlllll", this.document_one);
                    this.Description = res.description;
                    this.comfort = res.comfort;
                    this.carType = res.car_types_id;
                    this.Seats = res.no_of_seats;
                    this.Door = res.no_of_doors;
                    this.Gas = res.fuel_type_id;
                    this.mobileNum = res.mobile_number;
                    this.GearType = res.gear_type_id;
                    this.Convertable = res.roof_type_id;
                    this.wheels = res.no_of_wheels;
                    this.other_features = res.other_features;
                    console.log("wheelsssssss-----", this.Seats);
                });
                console.log(this.response);
            }, (err) => { });
        });
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
            if (this.LicensePlate == "" || this.LicensePlate == undefined) {
                this.LicensePlateError = true;
                return false;
            }
            else if (this.LicensePlateUnique == true) {
                return false;
            }
            else if (this.Description == "" || this.Description == undefined) {
                this.DescriptionError = true;
                return false;
            }
            else if (this.Seats == "" || this.Seats == undefined) {
                this.SeatsError = true;
                return false;
            }
            else if (this.Door == "" || this.Door == undefined) {
                this.DoorError = true;
                return false;
            }
            else if (this.Gas == "" || this.Gas == undefined) {
                this.GasError = true;
                return false;
            }
            else if (this.GearType == "" || this.GearType == undefined) {
                this.GearTypeError = true;
                return false;
            }
            else if (this.Convertable == "" || this.Convertable == undefined) {
                this.ConvertableError = true;
                return false;
            }
            else if (this.wheels == "" || this.wheels == undefined) {
                this.wheelsError = true;
                return false;
            }
            else if (this.other_features == "" ||
                this.other_features == undefined) {
                this.other_featuresError = true;
                return false;
            }
            else if (this.document_one == "" || this.document_one == undefined) {
                this.document_oneError = true;
                return false;
            }
            else {
                return true;
            }
        }
    }
    deletePreviousImg() {
        var deleteStringy = JSON.stringify({
            requestType: "delete_images",
            carImagesArray: this.uploadedImages,
        });
        console.log(deleteStringy, "deleteStringydeleteStringy");
        this.restService.saveListVehicles(deleteStringy).subscribe((response) => {
            this.response = JSON.parse(response["_body"]);
            console.log(response["_body"]);
            //     alert(response['_body'])
            console.log(this.response.status);
            if (this.response.status == "error") {
            }
            else if (this.response.status == "success") {
                console.log(this.uploadedImages, "after deleting");
                this.onceFilled = null;
            }
        }, (err) => {
            alert("request error");
            this.dismiss();
        });
    }
    goToNext() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.vehicleImageUpdated == 1) {
                //when user update the document image
                this.documentBase64 = [];
                this.uploadedImages = [];
                this.validation = true;
                console.log("Validation---", this.validateForm());
                if (this.validateForm() == true) {
                    this.fieldMissing = false;
                    this.documentBase64.push(this.document_one);
                    console.log("images_dataaaaaa", this.document_one);
                    let interval = 0;
                    let loading = yield this.loadingController.create({
                        cssClass: "ionloading",
                        message: "Uploading images...",
                    });
                    yield loading.present();
                    const that = this;
                    const fileTransfer = that.transfer.create();
                    const random = new Date().getTime();
                    console.log(random, "time_stamptime_stamp");
                    const options = {
                        fileKey: "photo",
                        fileName: "imglicense_" + "_" + this.userID + "_" + random + ".jpg",
                        chunkedMode: false,
                        httpMethod: "post",
                        mimeType: "image/jpeg",
                        params: {
                            image: "YPOP",
                        },
                    };
                    fileTransfer
                        .upload(that.document_one, "https://app.transusdrives.com/webservices/upload_image", options)
                        .then((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        const img = JSON.parse(data.response);
                        console.log("uploadig images", data);
                        var APIdata = JSON.stringify({
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
                            carType: this.carType,
                        });
                        console.log("outgoing Data", APIdata);
                        this.restService.listYourDraftCarAPI(APIdata).subscribe((responseData) => {
                            console.log("incomming response list-your-car", responseData);
                            loading.dismiss();
                            this.oneDataSet = JSON.parse(responseData["_body"]);
                            console.log(this.oneDataSet, "getiing from oneset");
                            if (this.oneDataSet.status == "success") {
                                localStorage.setItem("vinNumberCarID", this.oneDataSet.vehicle_id.toString());
                                that.navCtrl.navigateForward("listcar6draft");
                            }
                        }, (err) => {
                            loading.dismiss();
                        });
                    }), (err) => {
                        loading.dismiss();
                        console.log("Error");
                        console.log(err);
                        return;
                    });
                }
                else {
                    this.fieldMissing = true;
                }
            }
            else {
                console.log("Validation", this.validateForm());
                // document image not updating
                if (this.validateForm() == true) {
                    let loading = yield this.loadingController.create({
                        cssClass: "ionloading",
                        message: "Please wait...",
                    });
                    yield loading.present();
                    const that = this;
                    //localStorage.setItem('vinNumberCarID', this.oneDataSet.vehicle_id.toString())
                    var APIdata = JSON.stringify({
                        requestType: "patch_4",
                        vehicles_id: localStorage.getItem("vinNumberCarID"),
                        license_img: null,
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
                        carType: this.carType,
                    });
                    console.log("outgoing Data", APIdata);
                    this.restService.listYourDraftCarAPI(APIdata).subscribe((responseData) => {
                        console.log("incomming response list-your-car", responseData);
                        loading.dismiss();
                        this.oneDataSet = JSON.parse(responseData["_body"]);
                        console.log(this.oneDataSet, "getiing from oneset");
                        if (this.oneDataSet.status == "success") {
                            localStorage.setItem("vinNumberCarID", this.oneDataSet.vehicle_id.toString());
                            that.navCtrl.navigateForward("listcar6draft");
                        }
                    }, (err) => {
                        loading.dismiss();
                    });
                }
                else {
                    this.fieldMissing = true;
                }
            }
        });
    }
    uploadDocumentsPhotos(params) {
        this.pickCustome1image(params);
    }
    pickCustome1image(custNum) {
        var options = {
            maximumImagesCount: 1,
            outputType: 1,
            quality: 90,
        };
        this.imagePicker.getPictures(options).then((imageData) => {
            this.vehicleImageUpdated = 1;
            var base64 = `data:image/png;base64,${imageData}`;
            // this.imageCompress.compressFile(base64, 0, 80, 80).then((result) => {
            if (custNum == 1) {
                this.image1 = imageData;
                this.document_one = base64;
            }
            // });
        }, (err) => {
            console.log(err, "error in images??");
        });
    }
    takeImageFromCamera(param) {
        this.imageService.selectImageInCamera().then((imageData) => {
            this.vehicleImageUpdated = 1;
            var base64 = `data:image/png;base64,${imageData}`;
            // this.imageCompress.compressFile(base64, 0, 80, 80).then((result) => {
            console.log(base64);
            console.log("Size in bytes is now:", this.imageCompress.byteCount(base64));
            if (param == 1) {
                this.image1 = imageData;
                this.document_one = base64;
            }
            // });
        }, (err) => {
            console.log("imagepicker  now:", err);
        });
        //   }).catch(err => console.error(err));
    }
    getImageFromGallery(param) {
        this.imageService
            .selectImageInGallery()
            .then((imageData) => {
            var base64 = `data:image/png;base64,${imageData}`;
            this.imageCompress.compressFile(base64, 0, 80, 80).then((result) => {
                console.log(result);
                console.log("Size in bytes is now:", this.imageCompress.byteCount(result));
                if (param == 1) {
                    this.image1 = imageData;
                    this.document_one = result;
                }
                else if (param == 2) {
                    this.image2 = imageData;
                    this.document_two = result;
                }
                else if (param == 3) {
                    this.image3 = imageData;
                    this.document_three = result;
                }
                else if (param == 4) {
                    this.image4 = imageData;
                    this.document_four = result;
                }
                else if (param == 5) {
                    this.image5 = imageData;
                    this.document_five = result;
                }
                else if (param == 6) {
                    this.image6 = imageData;
                    this.document_six = result;
                }
                else if (param == 7) {
                    this.image7 = imageData;
                    this.document_seven = result;
                }
            });
        })
            .catch((err) => console.error(err));
    }
    validateStartDate() {
        setTimeout(() => {
            var _a, _b;
            this.dateStartError = false;
            /**** end date ****/
            this.active_end_date = (_a = document.querySelector(".end_date .activeEndState")) === null || _a === void 0 ? void 0 : _a.textContent;
            let cEndDate = new Date(this.currentYear, this.endmonthCounter - 1, this.active_end_date).getTime();
            /**** end date ****/
            this.active_start_date = (_b = document.querySelector(".start_date .activeState")) === null || _b === void 0 ? void 0 : _b.textContent;
            let cDate = new Date(this.currentYear, this.startmonthCounter - 1, this.active_start_date).getTime();
            if (cDate > cEndDate) {
                console.log("start date ");
                this.dateStartError = true;
                console.log(this.dateStartError);
                //this.validateEndDate();
            }
        }, 300);
    }
    validateEndDate() {
        setTimeout(() => {
            var _a, _b;
            this.dateStartError = false;
            this.active_start_date = (_a = document.querySelector(".start_date .activeState")) === null || _a === void 0 ? void 0 : _a.textContent;
            let cStartDate = new Date(this.currentYear, this.startmonthCounter - 1, this.active_start_date).getTime();
            this.active_end_date = (_b = document.querySelector(".end_date .activeEndState")) === null || _b === void 0 ? void 0 : _b.textContent;
            let cDate = new Date(this.currentYear, this.endmonthCounter - 1, this.active_end_date).getTime();
            if (cStartDate > cDate) {
                console.log("end date ");
                this.dateStartError = true;
                console.log(this.dateStartError);
            }
        }, 300);
    }
    goToHome() {
        // this.router.navigate(['/listed-car']);
        // this.location.back();
        this.router.navigate(["listcar4draft"]);
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
            this.month = "January";
        }
        else if (param == 2) {
            this.month = "February";
        }
        else if (param == 3) {
            this.month = "March";
        }
        else if (param == 4) {
            this.month = "April";
        }
        else if (param == 5) {
            this.month = "May";
        }
        else if (param == 6) {
            this.month = "June";
        }
        else if (param == 7) {
            this.month = "July";
        }
        else if (param == 8) {
            this.month = "August";
        }
        else if (param == 9) {
            this.month = "September";
        }
        else if (param == 10) {
            this.month = "October";
        }
        else if (param == 11) {
            this.month = "November";
        }
        else if (param == 12) {
            this.month = "December";
        }
        return this.month;
    }
    presentToast(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000,
                position: "top",
            });
            toast.present();
        });
    }
    present() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: "Please wait...",
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
        var ddff = moment__WEBPACK_IMPORTED_MODULE_9__(this.dateRange.from);
        var dateStart = ddff.format("YYYY-MM-DD");
        console.log(dateStart);
        this.start_date = dateStart;
        var dd = moment__WEBPACK_IMPORTED_MODULE_9__(this.dateRange.to);
        var dateEnd = dd.format("YYYY-MM-DD");
        //  console.log(dd)
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
    CameraSelected() {
        console.log("popup cal", this.popupSelectedVal);
        this.takeImageFromCamera(this.popupSelectedVal);
        this.hidePopup();
    }
    GalerySelected() {
        console.log("popup cal", this.popupSelectedVal);
        this.uploadDocumentsPhotos(this.popupSelectedVal);
        this.hidePopup();
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
};
Listcar5draftPage.ctorParameters = () => [
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
Listcar5draftPage.propDecorators = {
    startSlides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ["startSlides",] }],
    endSlides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ["endSlides",] }]
};
Listcar5draftPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-listcar5draft",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./listcar5draft.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/listcar5draft/listcar5draft.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./listcar5draft.page.scss */ "./src/app/listcar5draft/listcar5draft.page.scss")).default]
    })
], Listcar5draftPage);



/***/ })

}]);
//# sourceMappingURL=listcar5draft-listcar5draft-module-es2015.js.map