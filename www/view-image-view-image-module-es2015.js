(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-image-view-image-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-image/view-image.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-image/view-image.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n    \n    [class.for_ios_pad]=\"plateformCheck == 'ios'\"\n    style=\"background: #000000f5; height: 100%\"\n  >\n    <!-- <ion-row>\n      <ion-col style=\"padding-left: 20px; padding-top: 20px\">\n        <img\n          src=\"assets/img/close.png\"\n          (click)=\"closeModel()\"\n          style=\"height: 20px; width: 20px; padding: 3px; border-radius: 10px\"\n        />\n      </ion-col>\n    </ion-row> -->\n\n    <ion-row class=\"center\">\n      <ion-col class=\"slider_main_slide\" style=\"display: flex\">\n        <ion-slides >\n          <ng-container >\n            <ion-slide >\n              <img src=\"https://app.transusdrives.com/uploads/vehicles/mycars_1653904596313.jpg\" class=\"s_img_slide\" />\n            </ion-slide>\n          </ng-container>\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n\n  \n</div>");

/***/ }),

/***/ "./src/app/view-image/view-image-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/view-image/view-image-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ViewImagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewImagePageRoutingModule", function() { return ViewImagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _view_image_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-image.page */ "./src/app/view-image/view-image.page.ts");




const routes = [
    {
        path: '',
        component: _view_image_page__WEBPACK_IMPORTED_MODULE_3__["ViewImagePage"]
    }
];
let ViewImagePageRoutingModule = class ViewImagePageRoutingModule {
};
ViewImagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewImagePageRoutingModule);



/***/ }),

/***/ "./src/app/view-image/view-image.module.ts":
/*!*************************************************!*\
  !*** ./src/app/view-image/view-image.module.ts ***!
  \*************************************************/
/*! exports provided: ViewImagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewImagePageModule", function() { return ViewImagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _view_image_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-image-routing.module */ "./src/app/view-image/view-image-routing.module.ts");
/* harmony import */ var _view_image_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-image.page */ "./src/app/view-image/view-image.page.ts");







let ViewImagePageModule = class ViewImagePageModule {
};
ViewImagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _view_image_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewImagePageRoutingModule"]
        ],
        declarations: [_view_image_page__WEBPACK_IMPORTED_MODULE_6__["ViewImagePage"]]
    })
], ViewImagePageModule);



/***/ }),

/***/ "./src/app/view-image/view-image.page.scss":
/*!*************************************************!*\
  !*** ./src/app/view-image/view-image.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctaW1hZ2Uvdmlldy1pbWFnZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/view-image/view-image.page.ts":
/*!***********************************************!*\
  !*** ./src/app/view-image/view-image.page.ts ***!
  \***********************************************/
/*! exports provided: ViewImagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewImagePage", function() { return ViewImagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ViewImagePage = class ViewImagePage {
    constructor() { }
    ngOnInit() {
    }
};
ViewImagePage.ctorParameters = () => [];
ViewImagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-image',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./view-image.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-image/view-image.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./view-image.page.scss */ "./src/app/view-image/view-image.page.scss")).default]
    })
], ViewImagePage);



/***/ })

}]);
//# sourceMappingURL=view-image-view-image-module-es2015.js.map