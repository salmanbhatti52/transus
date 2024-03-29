(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["car-detail-car-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/car-detail/car-detail.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/car-detail/car-detail.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header\n  *ngIf=\"showSlide == 'no'\"\n  [class.ios-headers]=\"plateformCheck == 'ios'\"\n>\n  <ion-toolbar>\n    <ion-buttons [class.back_button]=\"plateformCheck == 'ios'\" slot=\"start\">\n      <img src=\"assets/img/Arrow.svg\" (click)=\"goToHome()\" />\n    </ion-buttons>\n\n    <ion-title [class.globe_title]=\"plateformCheck == 'ios'\"\n      >{{model_name}}</ion-title\n    >\n\n    <ion-buttons\n      [class.share_btn]=\"plateformCheck == 'ios'\"\n      style=\"padding-right: 10px\"\n      slot=\"end\"\n      (click)=\"share()\"\n    >\n      <img src=\"assets/img/share.svg\" />\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div *ngIf=\"showSlide == 'no'\">\n    <ion-row>\n      <ion-col class=\"slider_main\">\n        <ion-slides pager=\"true\">\n          <ng-container *ngIf=\"veh_imgs?.length >0\">\n            <ion-slide *ngFor=\"let p of veh_imgs; let i = index\">\n              <div class=\"slide\">\n                <img\n                  (click)=\"previewImage(p)\"\n                  src=\"{{base_urls}}{{p}}\"\n                  class=\"s_img\"\n                />\n                <div (click)=\"previewImage(p)\" class=\"pentagon\">\n                  <img src=\"assets/img/pentagon.svg\" style=\"    height: 65px;\" class=\"\" />\n                  <div class=\"badge\">\n                    <span class=\"badge_dollar\">{{currency_symbol}}</span>\n                    <span class=\"badge_price\">{{charge_per_day}}</span>\n                    <span class=\"badge_per\">PER DAY</span>\n                  </div>\n                </div>\n                <div class=\"heart\">\n                  <img\n                    src=\"assets/img/heart.svg\"\n                    class=\"\"\n                    (click)=\"favourite('add_fav',cars_list_result.vehicles_id)\"\n                    *ngIf=\"favouriteVehicle == false\"\n                  />\n                  <img\n                    src=\"assets/img/heart_red.svg\"\n                    class=\"\"\n                    (click)=\"favourite('remove_fav',cars_list_result.vehicles_id)\"\n                    *ngIf=\"favouriteVehicle\"\n                  />\n                </div>\n              </div>\n            </ion-slide>\n          </ng-container>\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"descr\">\n        <h3>Description</h3>\n        <p>{{description}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"descr\">\n        <h3>Owner’s Details</h3>\n        <ion-row>\n          <ion-col size=\"6\" style=\"padding-left: 0px\">\n            <small>About</small>\n            <p>{{about_owner}}</p>\n          </ion-col>\n          <ion-col size=\"6\">\n            <small>Availability start date</small>\n            <p>{{availablityStartDate}}</p>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"6\" style=\"padding-left: 0px\">\n            <small>Lives</small>\n            <p>{{country_name}}</p>\n          </ion-col>\n          <ion-col size=\"6\">\n            <small>Availability end date</small>\n            <p>{{availablityEndDate }}</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\" style=\"padding-left: 0px\">\n            <small>Work</small>\n            <p>{{owner_work}}</p>\n          </ion-col>\n          <ion-col size=\"6\">\n            <small>Language</small>\n            <p>{{language_name}}</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\" style=\"padding-left: 0px\">\n            <small>Advance notice</small>\n            <p>{{advance_notice}}</p>\n          </ion-col>\n          <ion-col size=\"6\">\n            <small>Max trip duration</small>\n            <p>{{max_trip_duration}}</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\" style=\"padding-left: 0px\">\n            <small>Min trip duration</small>\n            <p>{{min_trip_duration}}</p>\n          </ion-col>\n          \n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"rating\">\n      <ion-col size=\"6\">\n        <h3>Ratings</h3>\n      </ion-col>\n      <ion-col size=\"6\">\n        <h3 (click)=\"ratingview()\" class=\"view_all\">View All</h3>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"stars\">\n        <p class=\"star_list\" *ngIf=\"ratting_stars === '5'\">\n          <img src=\"assets/img/yellow_star.svg\" />\n          <img src=\"assets/img/yellow_star.svg\" />\n          <img src=\"assets/img/yellow_star.svg\" />\n          <img src=\"assets/img/yellow_star.svg\" />\n          <img src=\"assets/img/yellow_star.svg\" />\n        </p>\n        <p class=\"star_list\" *ngIf=\"ratting_stars === '4'\">\n          <img src=\"assets/img/yellow_star.svg\" />\n          <img src=\"assets/img/yellow_star.svg\" />\n          <img src=\"assets/img/yellow_star.svg\" />\n          <img src=\"assets/img/yellow_star.svg\" />\n          <img src=\"assets/img/grey_star.svg\" />\n        </p>\n        <p class=\"star_list\" *ngIf=\"ratting_stars === '3'\">\n          <img src=\"assets/img/yellow_star.svg\" />\n          <img src=\"assets/img/yellow_star.svg\" />\n          <img src=\"assets/img/yellow_star.svg\" />\n          <img src=\"assets/img/grey_star.svg\" />\n          <img src=\"assets/img/grey_star.svg\" />\n        </p>\n        <p class=\"star_list\" *ngIf=\"ratting_stars === '2'\">\n          <img src=\"assets/img/yellow_star.svg\" />\n          <img src=\"assets/img/yellow_star.svg\" />\n          <img src=\"assets/img/grey_star.svg\" />\n          <img src=\"assets/img/grey_star.svg\" />\n          <img src=\"assets/img/grey_star.svg\" />\n        </p>\n        <p class=\"star_list\" *ngIf=\"ratting_stars === '1'\">\n          <img src=\"assets/img/yellow_star.svg\" />\n          <img src=\"assets/img/grey_star.svg\" />\n          <img src=\"assets/img/grey_star.svg\" />\n          <img src=\"assets/img/grey_star.svg\" />\n          <img src=\"assets/img/grey_star.svg\" />\n        </p>\n        <span class=\"left_star\">{{total_trips}} trips</span>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"btn_footer\">\n      <!-- <ion-col size=\"6\">\n        <ion-button color=\"primary\" (click)=\"chatRequest()\" expand=\"block\" shape=\"round\">Chat</ion-button>\n      </ion-col> -->\n      <ion-col size=\"12\">\n        <ion-button\n          color=\"secondary\"\n          (click)=\"bookNow()\"\n          expand=\"block\"\n          shape=\"round\"\n          >Book Now</ion-button\n        >\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div\n    *ngIf=\"showSlide == 'yes'\"\n    [class.for_ios_pad]=\"plateformCheck == 'ios'\"\n    style=\"background: #000000f5; height: 100%\"\n  >\n    <ion-row>\n      <ion-col style=\"padding-left: 20px; padding-top: 20px\">\n        <img \n          src=\"assets/img/close.png\"\n          (click)=\"closeModel()\"\n          style=\"height: 20px; width: 20px; padding: 3px; border-radius: 10px\"\n        />\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"center\">\n      <ion-col class=\"slider_main_slide\" style=\"display: flex\">\n        <ion-slides (ionSlideDidChange)=\"slideChanged($event)\" #slides>\n          <ng-container *ngIf=\"veh_imgs.length >0\">\n            <ion-slide *ngFor=\"let p of veh_imgs; let i = index\">\n              <img src=\"{{base_urls}}{{p}}\" class=\"s_img_slide\" />\n            </ion-slide>\n          </ng-container>\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n\n    <ion-row\n      style=\"position: absolute; text-align: center; bottom: 80px; width: 100%\"\n    >\n      <ion-col style=\"text-align: center\">\n        <ion-text style=\"color: white\"\n          >{{indexOfSLide}} of {{veh_imgs.length}}</ion-text\n        >\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <!-- <ion-row class=\"info\">\n    <ion-col class=\"ion-text-center\" (click)=\"info()\">\n      <img src=\"assets/img/info.svg\">\n      <p>Further Details</p>\n    </ion-col>\n  </ion-row> -->\n  <!--  <ion-row class=\"info\">\n    <ion-col class=\"ion-text-center\" (click)=\"info()\">\n      <img src=\"assets/img/info.svg\">\n      <p>Further Details</p>\n    </ion-col>\n  </ion-row> -->\n</ion-content>\n<ion-footer>\n  <ion-row class=\"info\">\n    <ion-col class=\"ion-text-center\" (click)=\"info()\">\n      <img src=\"assets/img/info.svg\" />\n      <p>Further Details</p>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/car-detail/car-detail-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/car-detail/car-detail-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CarDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarDetailPageRoutingModule", function() { return CarDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _car_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./car-detail.page */ "./src/app/car-detail/car-detail.page.ts");




const routes = [
    {
        path: '',
        component: _car_detail_page__WEBPACK_IMPORTED_MODULE_3__["CarDetailPage"]
    }
];
let CarDetailPageRoutingModule = class CarDetailPageRoutingModule {
};
CarDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CarDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/car-detail/car-detail.module.ts":
/*!*************************************************!*\
  !*** ./src/app/car-detail/car-detail.module.ts ***!
  \*************************************************/
/*! exports provided: CarDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarDetailPageModule", function() { return CarDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _car_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./car-detail-routing.module */ "./src/app/car-detail/car-detail-routing.module.ts");
/* harmony import */ var _car_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./car-detail.page */ "./src/app/car-detail/car-detail.page.ts");
/* harmony import */ var _custome_date_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../custome-date.pipe */ "./src/app/custome-date.pipe.ts");








let CarDetailPageModule = class CarDetailPageModule {
};
CarDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _car_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["CarDetailPageRoutingModule"],
        ],
        declarations: [_car_detail_page__WEBPACK_IMPORTED_MODULE_6__["CarDetailPage"], _custome_date_pipe__WEBPACK_IMPORTED_MODULE_7__["CustomeDatePipe"]]
    })
], CarDetailPageModule);



/***/ }),

/***/ "./src/app/car-detail/car-detail.page.scss":
/*!*************************************************!*\
  !*** ./src/app/car-detail/car-detail.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #c4932f;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3px 1px 8px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n}\n\n.slider_main {\n  padding: 1em 0.6em;\n}\n\n.s_img {\n  width: 100%;\n  border-radius: 14px;\n  height: 180px;\n}\n\n.slide {\n  width: 100%;\n}\n\n.slider_main_slide {\n  padding: 0em 0em;\n}\n\n.s_img_slide {\n  width: 100%;\n  border-radius: 0px;\n}\n\n.slide_slide {\n  width: 100%;\n}\n\n.pentagon {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n}\n\n.badge {\n  position: absolute;\n  top: 14px;\n  left: 0px;\n  right: 0px;\n  line-height: 1.3;\n}\n\n.badge_dollar {\n  color: #c4932f;\n  font-size: 13px;\n  display: block;\n}\n\n.badge_price {\n  font-size: 13px;\n  color: #c4932f;\n  position: relative;\n  top: -9px;\n}\n\n.badge_per {\n  color: #fff;\n  font-size: 8px;\n  display: block;\n  margin-left: 1px;\n  margin-top: -11px;\n}\n\n.descr {\n  padding: 0em 0.6em;\n}\n\n.descr h3 {\n  margin-top: 0px;\n  margin-bottom: 5px;\n}\n\n.descr p {\n  font-size: 12px;\n  margin-top: 0px;\n}\n\n.descr small {\n  color: #c4932f;\n}\n\n.rating {\n  padding: 0em 0.3em;\n}\n\n.view_all {\n  font-size: 10px;\n  text-align: right;\n  padding-right: 1em;\n  color: #c4932f;\n  padding-top: 1em;\n}\n\n.stars img {\n  margin-left: 4px;\n}\n\n.left_star {\n  margin-left: 1em;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n}\n\n.btn_footer {\n  padding: 0.5em 1em 1.2em 1em;\n  margin-bottom: 2.5em;\n}\n\n.info {\n  background: #6e6d6d;\n  padding: 0.4em 0em;\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n}\n\n.info p {\n  margin: 0px;\n  color: #fff;\n  font-size: 10px;\n}\n\n.heart {\n  position: absolute;\n  right: 1em;\n  top: 1.3em;\n  z-index: 10;\n}\n\n.heart img {\n  z-index: 9999;\n  width: 24px;\n}\n\n.toolbar_padding {\n  padding: 6px;\n}\n\n.for_ios_pad {\n  padding: 8px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyLWRldGFpbC9jYXItZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLHFCQUFBO0FBQUY7O0FBR0E7RUFDRTtJQUNFLHNCQUFBO0lBQ0EscUJBQUE7RUFBRjtBQUNGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQURGOztBQUdBO0VBQ0Usa0JBQUE7QUFBRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFDQTtFQUNFLFdBQUE7QUFFRjs7QUFDQTtFQUNFLGdCQUFBO0FBRUY7O0FBQUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFEQTtFQUNFLFdBQUE7QUFJRjs7QUFGQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFLRjs7QUFGQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFLRjs7QUFIQTtFQUNFLGNBQUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQU1KOztBQUpBO0VBQ0UsZUFBQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFPSjs7QUFMQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFRRjs7QUFOQTtFQUNFLGtCQUFBO0FBU0Y7O0FBUEE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFVRjs7QUFSQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBV0Y7O0FBVEE7RUFDRSxjQUFBO0FBWUY7O0FBVkE7RUFDRSxrQkFBQTtBQWFGOztBQVhBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFjRjs7QUFaQTtFQUNFLGdCQUFBO0FBZUY7O0FBYkE7RUFDRSxnQkFBQTtBQWdCRjs7QUFkQTtFQUNFLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQWlCRjs7QUFmQTtFQUNFLDRCQUFBO0VBQ0Esb0JBQUE7QUFrQkY7O0FBaEJBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFtQkY7O0FBakJBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBb0JGOztBQWxCQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBcUJGOztBQW5CQTtFQUNFLGFBQUE7RUFFQSxXQUFBO0FBcUJGOztBQW5CQTtFQUNFLFlBQUE7QUFzQkY7O0FBcEJBO0VBQ0UsZ0JBQUE7QUF1QkYiLCJmaWxlIjoic3JjL2FwcC9jYXItZGV0YWlsL2Nhci1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAvLyBwYWRkaW5nOiAwLjhlbSAwLjFlbSAwIDA7XG4gIC0tYmFja2dyb3VuZDogI2M0OTMyZjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4taGVpZ2h0IDogODAwcHgpIHtcbiAgaW9uLXRvb2xiYXIge1xuICAgIHBhZGRpbmc6IDNweCAxcHggOHB4IDA7XG4gICAgLS1iYWNrZ3JvdW5kOiAjYzQ5MzJmO1xuICB9XG59XG5cbmlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5zbGlkZXJfbWFpbiB7XG4gIHBhZGRpbmc6IDFlbSAwLjZlbTtcbn1cbi5zX2ltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBoZWlnaHQ6IDE4MHB4O1xufVxuLnNsaWRlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zbGlkZXJfbWFpbl9zbGlkZSB7XG4gIHBhZGRpbmc6IDBlbSAwZW07XG59XG4uc19pbWdfc2xpZGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuLnNsaWRlX3NsaWRlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucGVudGFnb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTJweDtcbiAgbGVmdDogMTJweDtcbn1cblxuLmJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE0cHg7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbn1cbi5iYWRnZV9kb2xsYXIge1xuICBjb2xvcjogI2M0OTMyZjtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4uYmFkZ2VfcHJpY2Uge1xuICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICNjNDkzMmY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTlweDtcbn1cbi5iYWRnZV9wZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiA4cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogMXB4O1xuICBtYXJnaW4tdG9wOiAtMTFweDtcbn1cbi5kZXNjciB7XG4gIHBhZGRpbmc6IDBlbSAwLjZlbTtcbn1cbi5kZXNjciBoMyB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmRlc2NyIHAge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cbi5kZXNjciBzbWFsbCB7XG4gIGNvbG9yOiAjYzQ5MzJmO1xufVxuLnJhdGluZyB7XG4gIHBhZGRpbmc6IDBlbSAwLjNlbTtcbn1cbi52aWV3X2FsbCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcbiAgY29sb3I6ICNjNDkzMmY7XG4gIHBhZGRpbmctdG9wOiAxZW07XG59XG4uc3RhcnMgaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cbi5sZWZ0X3N0YXIge1xuICBtYXJnaW4tbGVmdDogMWVtO1xufVxuaW9uLWJ1dHRvbiB7XG4gIC0tcGFkZGluZy1ib3R0b206IDEuNWVtO1xuICAtLXBhZGRpbmctdG9wOiAxLjVlbTtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuLmJ0bl9mb290ZXIge1xuICBwYWRkaW5nOiAwLjVlbSAxZW0gMS4yZW0gMWVtO1xuICBtYXJnaW4tYm90dG9tOiAyLjVlbTtcbn1cbi5pbmZvIHtcbiAgYmFja2dyb3VuZDogIzZlNmQ2ZDtcbiAgcGFkZGluZzogMC40ZW0gMGVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDA7XG59XG4uaW5mbyBwIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEwcHg7XG59XG4uaGVhcnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxZW07XG4gIHRvcDogMS4zZW07XG4gIHotaW5kZXg6IDEwO1xufVxuLmhlYXJ0IGltZyB7XG4gIHotaW5kZXg6IDk5OTk7XG5cbiAgd2lkdGg6IDI0cHg7XG59XG4udG9vbGJhcl9wYWRkaW5nIHtcbiAgcGFkZGluZzogNnB4O1xufVxuLmZvcl9pb3NfcGFkIHtcbiAgcGFkZGluZzogOHB4IDBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/car-detail/car-detail.page.ts":
/*!***********************************************!*\
  !*** ./src/app/car-detail/car-detail.page.ts ***!
  \***********************************************/
/*! exports provided: CarDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarDetailPage", function() { return CarDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "./node_modules/@ionic-native/photo-viewer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









let CarDetailPage = class CarDetailPage {
    constructor(photoViewer, restService, storage, router, activatedRoute, location, modalCtrl, socialSharing, plateform) {
        this.photoViewer = photoViewer;
        this.restService = restService;
        this.storage = storage;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.modalCtrl = modalCtrl;
        this.socialSharing = socialSharing;
        this.plateform = plateform;
        this.favouriteVehicle = false;
        this.showSlide = 'no';
        this.total_trips = 0;
        this.indexOfSLide = 1;
        this.plateForm = this.plateform.is('android');
        this.activatedRoute.queryParams.subscribe((res) => {
            this.response = JSON.parse(res.value);
            this.storage.get('base_urls').then((base_urls) => {
                this.base_urls = base_urls;
                if (this.response.redirect != '/notification') {
                    this.cars_list_result = this.response.cars_list_result;
                    this.model_name = this.cars_list_result.model_name;
                    this.veh_imgs = this.cars_list_result.veh_imgs;
                    this.charge_per_day = this.cars_list_result.charge_per_day;
                    this.description = this.cars_list_result.description;
                    this.about_owner = this.cars_list_result.about_owner;
                    this.country_name = this.cars_list_result.country_name;
                    this.owner_work = this.cars_list_result.owner_work;
                    this.max_trip_duration = this.cars_list_result.max_trip_duration;
                    this.min_trip_duration = this.cars_list_result.min_trip_duration;
                    this.advance_notice = this.cars_list_result.advance_notice;
                    this.language_name = this.cars_list_result.language_name;
                    this.ratting_stars = this.cars_list_result.ratting_stars;
                    this.total_trips = this.cars_list_result.total_trips;
                    this.availablityStartDate = this.monthList(this.cars_list_result.start_date);
                    this.availablityEndDate = this.monthList(this.cars_list_result.end_date);
                    this.redirect = this.response.redirect;
                    if (this.cars_list_result.favourite == 'Yes') {
                        this.favouriteVehicle = true;
                    }
                    else {
                        this.favouriteVehicle = false;
                    }
                }
                else {
                    this.cars_list_result = this.response.cars_list_result;
                    this.model_name = this.cars_list_result.model_name;
                    this.veh_imgs = this.cars_list_result.vehicle_imgs;
                    this.charge_per_day = this.cars_list_result.charge_per_day;
                    this.description = this.cars_list_result.description;
                    this.about_owner = this.cars_list_result.about;
                    this.country_name = this.cars_list_result.country_name;
                    this.owner_work = this.cars_list_result.owner_work;
                    this.language_name = this.cars_list_result.language_name;
                    this.ratting_stars = this.cars_list_result.ratting_stars;
                    this.redirect = this.response.redirect;
                    if (this.cars_list_result.favourite == 'Yes') {
                        this.favouriteVehicle = true;
                    }
                    else {
                        this.favouriteVehicle = false;
                    }
                }
            });
        });
    }
    ionViewWillEnter() {
        this.showSlide = 'no';
    }
    ngOnInit() {
        if (this.plateform.is('ios')) {
            this.plateformCheck = 'ios';
        }
        else {
            this.plateformCheck = 'android';
        }
        this.storage.get('base_urls').then((base_urls) => {
            this.base_urls = base_urls;
            this.storage.get('user_details').then((user_details) => {
                if (user_details) {
                    this.userID = user_details.users_id;
                }
                this.storage.get('currency_symbol').then((currency_symbol) => {
                    this.currency_symbol = currency_symbol;
                });
            });
        });
    }
    share() {
        var text = 'Owner :\t' +
            this.about_owner +
            '\n Lives : \t' +
            this.country_name +
            '\n Image : \t' +
            this.base_urls +
            this.veh_imgs[0] +
            '\n';
        var options = {
            message: text +
                '\nAppstore -> https://apps.apple.com/de/app/trans-US/id1497697781\n\nPlaystore -> https://play.google.com/store/apps/details?id=com.transus.app',
        };
        this.socialSharing.shareWithOptions(options).then((res) => {
            console.log(res);
        }, (err) => {
            console.log(err);
        });
    }
    previewImage(p) {
        this.showSlide = 'yes';
        this.indexOfSLide = 1;
    }
    closeModel() {
        this.showSlide = 'no';
    }
    slideChanged(e) {
        this.slides.getActiveIndex().then((index) => {
            this.indexOfSLide = index + 1;
        });
    }
    favourite(request, vehicle_id) {
        if (this.userID) {
            var stringy = JSON.stringify({
                requestType: request,
                vehicleID: vehicle_id,
                usersID: this.userID,
            });
            this.restService.favourite_settings(stringy).subscribe((response) => {
                this.response = JSON.parse(response['_body']);
                if (this.response.status == 'error') {
                }
                else if (this.response.status == 'success') {
                    if (request == 'add_fav') {
                        this.favouriteVehicle = true;
                    }
                    else {
                        this.favouriteVehicle = false;
                    }
                }
            }, (err) => { });
        }
        else {
            this.router.navigate(['/login']);
        }
    }
    chatRequest() {
        if (this.userID) {
            var stringy = JSON.stringify({
                requestType: 'chatRequest',
                otherUserId: this.cars_list_result.users_id,
                usersID: this.userID,
            });
            this.restService.update_messages(stringy).subscribe((response) => {
                this.response = JSON.parse(response['_body']);
                if (this.response.status == 'error') {
                }
                else if (this.response.status == 'AlreadySent' ||
                    this.response.status == 'RequestSend') {
                    var myData = JSON.stringify({
                        otherUserId: this.cars_list_result.users_id,
                        userID: this.userID,
                        user_name: this.response.user_name,
                        profile_img: this.response.profile_img,
                    });
                    this.router.navigate(['/chat-detail'], {
                        queryParams: {
                            value: myData,
                        },
                    });
                }
            }, (err) => { });
        }
        else {
            this.router.navigate(['/login']);
        }
    }
    goToHome() {
        // this.router.navigate([this.redirect]);
        this.location.back();
    }
    furtherDetail() {
        this.router.navigate(['/further-detail']);
    }
    gotoDetail() { }
    bookNow() {
        if (this.userID) {
            var myData = JSON.stringify({
                vehicle_id: this.cars_list_result.vehicles_id,
                start_date: this.cars_list_result.start_date,
                end_date: this.cars_list_result.end_date,
                booked_dates: this.cars_list_result.booked_dates,
                model_name: this.model_name,
                charge_per_day: this.charge_per_day,
                max_trip_duration: this.max_trip_duration,
                min_trip_duration: this.min_trip_duration,
                advance_notice: this.advance_notice,
            });
            this.router.navigate(['/car-booking'], {
                queryParams: {
                    value: myData,
                },
            });
        }
        else {
            this.router.navigate(['/login']);
        }
    }
    info() {
        var myData = JSON.stringify({
            cars_list_result: this.cars_list_result,
        });
        this.router.navigate(['/further-detail'], {
            queryParams: {
                value: myData,
            },
        });
    }
    monthList(dates) {
        var dateIndex = dates.split('-');
        // this.dbEndDate     = this.vehicles_list.end_date.split('-');
        //param = parseInt(param)+1;
        var param = dateIndex[1];
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
        return dateIndex[2] + ' ' + this.month + ' ' + dateIndex[0];
    }
    ratingview() {
        //  this.router.navigate(['/rating'])
        localStorage.setItem('vehicles_id', this.cars_list_result.vehicles_id);
        this.router.navigate(['/reviews-or-rating']);
        // this.router.navigate(['/give-rating'])
    }
};
CarDetailPage.ctorParameters = () => [
    { type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_5__["PhotoViewer"] },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] }
];
CarDetailPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['slides', { static: false },] }]
};
CarDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-car-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./car-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/car-detail/car-detail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./car-detail.page.scss */ "./src/app/car-detail/car-detail.page.scss")).default]
    })
], CarDetailPage);



/***/ })

}]);
//# sourceMappingURL=car-detail-car-detail-module-es2015.js.map