(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["car-list-car-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/car-list/car-list.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/car-list/car-list.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [class.ios-search]=\"plateformCheck == 'ios'\">\n  <ion-toolbar class=\"header_pd\">\n    <ion-buttons slot=\"start\">\n      <img src=\"assets/img/Menu.svg\" (click)=\"toggleMenu()\" />\n    </ion-buttons>\n    <ion-searchbar\n      class=\"marginSearch\"\n      style=\"margin-top: 0px\"\n      (ionChange)=\"onInput()\"\n      [(ngModel)]=\"searchText\"\n      placeholder=\"Search for Cars\"\n    ></ion-searchbar>\n    <ion-buttons style=\"margin-top: 3px\" slot=\"end\" (click)=\"goToFilter()\">\n      <img src=\"assets/img/filter.svg\" />\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-list class=\"bg_list\" [hidden]=\"autocompleteItems.length == 0\">\n    <ion-item\n      lines=\"full\"\n      style=\"--padding-top: 4px; --padding-bottom: 4px\"\n      *ngFor=\"let item of autocompleteItems\"\n      button=\"true\"\n      (click)=\"SelectSearchResult(item.description)\"\n    >\n      <ion-label>\n        <h2>{{ item.description }}</h2>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-header>\n<ion-content>\n  <p style=\"text-align: center\" *ngIf=\"nocarlist == 0\">No car available.</p>\n\n  <ng-container *ngIf=\"nocarlist != 0\">\n    <ion-grid *ngFor=\"let p of cars_list_result; let i = index\">\n      <ng-container *ngIf=\"p.veh_imgs\">\n        <ion-row class=\"\">\n          <ion-col class=\"main_div\" >\n            <ng-container *ngFor=\"let image of p.veh_imgs;  let j = index\">\n              <div class=\"heart\">\n                <img\n                  src=\"assets/img/heart.svg\"\n                  class=\"\"\n                  (click)=\"favourite('add_fav',p.vehicles_id,p)\"\n                  *ngIf=\"p.favourite == 'No'\"\n                />\n                <img\n                  src=\"assets/img/heart_red.svg\"\n                  class=\"\"\n                  (click)=\"favourite('remove_fav',p.vehicles_id,p)\"\n                  *ngIf=\"p.favourite == 'Yes'\"\n                />\n              </div>\n              <img \n              (click)=\"gotoDetail(p)\"\n                *ngIf=\"j == 0 \"\n                style=\"border-radius: 12px; height: 154px; width: 100%\"\n                src=\"{{base_urls}}{{image}}\"\n              />\n            </ng-container>\n            <div class=\"pentagon\">\n              <img src=\"assets/img/pentagon.svg\"  style=\"height: 65px;\"  class=\"\" />\n              <div class=\"badge\">\n                <span class=\"badge_dollar\">{{currency_symbol}}</span>\n                <span class=\"badge_price\">{{p.charge_per_day}}</span>\n                <span class=\"badge_per\">PER DAY</span>\n              </div>\n            </div>\n            <div class=\"bg_bottom\">\n              <ion-row>\n                <ion-col size=\"8\" class=\"fav_1\">\n                  <h2>{{p.model_id}}</h2>\n                  <h5>{{p.make_id}}, {{p.year}}</h5>\n                </ion-col>\n              </ion-row>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ng-container>\n    </ion-grid>\n  </ng-container>\n\n  <ng-container *ngIf=\"notFound_error == true \">\n    <ion-row>\n      <ion-col style=\"text-align: center\">\n        <img src=\"assets/img/noresult.PNG\" />\n      </ion-col>\n    </ion-row>\n  </ng-container>\n  <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"\" loadingText=\"\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/car-list/car-list-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/car-list/car-list-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CarListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarListPageRoutingModule", function() { return CarListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _car_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./car-list.page */ "./src/app/car-list/car-list.page.ts");




const routes = [
    {
        path: '',
        component: _car_list_page__WEBPACK_IMPORTED_MODULE_3__["CarListPage"]
    }
];
let CarListPageRoutingModule = class CarListPageRoutingModule {
};
CarListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CarListPageRoutingModule);



/***/ }),

/***/ "./src/app/car-list/car-list.module.ts":
/*!*********************************************!*\
  !*** ./src/app/car-list/car-list.module.ts ***!
  \*********************************************/
/*! exports provided: CarListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarListPageModule", function() { return CarListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _car_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./car-list-routing.module */ "./src/app/car-list/car-list-routing.module.ts");
/* harmony import */ var _car_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./car-list.page */ "./src/app/car-list/car-list.page.ts");







let CarListPageModule = class CarListPageModule {
};
CarListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _car_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["CarListPageRoutingModule"],
        ],
        declarations: [_car_list_page__WEBPACK_IMPORTED_MODULE_6__["CarListPage"]]
    })
], CarListPageModule);



/***/ }),

/***/ "./src/app/car-list/car-list.page.scss":
/*!*********************************************!*\
  !*** ./src/app/car-list/car-list.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  padding: 0em 0em 0 0;\n  --background: #c4932f;\n}\n\nion-toolbar.ios {\n  margin-top: 3px;\n}\n\n.marginSearch.md {\n  margin-top: 5px !important;\n}\n\n.heart {\n  position: absolute;\n  right: 1em;\n  top: 1.3em;\n  z-index: 10;\n}\n\n.heart img {\n  z-index: 9999;\n  width: 24px;\n}\n\n.new-bottom {\n  position: relative;\n  bottom: 29px;\n  color: #ffffff;\n  background: #00000063;\n  width: 100%;\n  border-radius: 0px 0px 10px 10px;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 0px 0px 5px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n  padding-left: 0px;\n}\n\nion-header {\n  margin-bottom: 10px;\n}\n\nion-searchbar {\n  --border-radius: 22px;\n  --box-shadow: none;\n  /*  padding: 0em 2em 0em 1.5em; */\n}\n\n.b_list1 {\n  margin: 0px;\n  font-size: 14px;\n}\n\n.s_img {\n  width: 100%;\n  border-radius: 12px;\n}\n\n.main_div {\n  width: 100%;\n  margin: 0px 8px;\n  height: 168px;\n}\n\n.pentagon {\n  position: absolute;\n  top: 17px;\n  left: 17px;\n  text-align: center;\n}\n\n.bg_bottom {\n  border-bottom-left-radius: 10px;\n  position: absolute;\n  right: 1.2%;\n  left: 1.2%;\n  background: #00000063;\n  color: #fff;\n  border-bottom-right-radius: 10px;\n  bottom: 9px;\n  padding-top: 10px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.fav_1 {\n  text-align: left;\n}\n\n.fav_2 {\n  text-align: right;\n}\n\n.fav_1 h2,\nh5 {\n  margin: 0px;\n}\n\n.fav_1 h5 {\n  font-size: 16px;\n}\n\n.fav_2 p {\n  margin: 0px;\n}\n\n.star_list img {\n  margin-left: 5px;\n  margin-bottom: 5px;\n}\n\n.badge {\n  position: absolute;\n  top: 14px;\n  left: 0px;\n  right: 0px;\n  line-height: 1.3;\n}\n\n.badge_dollar {\n  color: #c4932f;\n  font-size: 13px;\n  display: block;\n}\n\n.badge_price {\n  font-size: 13px;\n  color: #c4932f;\n  position: relative;\n  top: -9px;\n}\n\n.badge_per {\n  color: #fff;\n  font-size: 8px;\n  display: block;\n  margin-left: 1px;\n  margin-top: -11px;\n}\n\n.tumbNail {\n  width: 100%;\n  height: 154.08px;\n  border-radius: 12px;\n  overflow: hidden;\n}\n\n.tumbdiv {\n  padding: 3px 20px;\n  width: 100%;\n  margin-top: 6px;\n  margin-bottom: 13px;\n}\n\n.hidd_image {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyLWxpc3QvY2FyLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksMEJBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQUU7RUFDRSxhQUFBO0VBRUEsV0FBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0FBR0o7O0FBQUE7RUFDSTtJQUNJLHNCQUFBO0lBQ0EscUJBQUE7RUFHTjtBQUNGOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUE7RUFDSSxtQkFBQTtBQUdKOztBQUFBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FBR0o7O0FBREE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQUlKOztBQURBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FBSUo7O0FBRkE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFLSjs7QUFIQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQU1KOztBQUpBO0VBQ0ksK0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBT0o7O0FBSkE7RUFDSSxnQkFBQTtBQU9KOztBQUxBO0VBQ0ksaUJBQUE7QUFRSjs7QUFOQTs7RUFFSSxXQUFBO0FBU0o7O0FBUEE7RUFDSSxlQUFBO0FBVUo7O0FBUkE7RUFDSSxXQUFBO0FBV0o7O0FBVEE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBWUo7O0FBVkE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBYUo7O0FBWEU7RUFDRSxjQUFBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFjTjs7QUFaRTtFQUNFLGVBQUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBZU47O0FBYkU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBZ0JKOztBQWRBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQWlCSjs7QUFmQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQWtCSjs7QUFoQkE7RUFDSSxhQUFBO0FBbUJKIiwiZmlsZSI6InNyYy9hcHAvY2FyLWxpc3QvY2FyLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIHBhZGRpbmc6IDBlbSAwZW0gMCAwO1xuICAgIC0tYmFja2dyb3VuZDogI2M0OTMyZjtcbn1cblxuaW9uLXRvb2xiYXIuaW9zIHtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbi5tYXJnaW5TZWFyY2gubWQge1xuICAgIG1hcmdpbi10b3A6IDVweCAhaW1wb3J0YW50O1xufVxuLmhlYXJ0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDFlbTtcbiAgICB0b3A6IDEuM2VtO1xuICAgIHotaW5kZXg6IDEwO1xuICB9XG4gIC5oZWFydCBpbWcge1xuICAgIHotaW5kZXg6IDk5OTk7XG4gIFxuICAgIHdpZHRoOiAyNHB4O1xuICB9XG4ubmV3LWJvdHRvbSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogMjlweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwNjM7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDEwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLWhlaWdodCA6IDgwMHB4KSB7XG4gICAgaW9uLXRvb2xiYXIge1xuICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDVweCAwO1xuICAgICAgICAtLWJhY2tncm91bmQ6ICNjNDkzMmY7XG4gICAgfVxufVxuXG5pb24tdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5pb24taGVhZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIycHg7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIC8qICBwYWRkaW5nOiAwZW0gMmVtIDBlbSAxLjVlbTsgKi9cbn1cbi5iX2xpc3QxIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5zX2ltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cbi5tYWluX2RpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwcHggOHB4O1xuICAgIGhlaWdodDogMTY4cHg7XG59XG4ucGVudGFnb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE3cHg7XG4gICAgbGVmdDogMTdweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYmdfYm90dG9tIHtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMS4yJTtcbiAgICBsZWZ0OiAxLjIlO1xuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA2MztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICBib3R0b206IDlweDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLmZhdl8xIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmZhdl8yIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5mYXZfMSBoMixcbmg1IHtcbiAgICBtYXJnaW46IDBweDtcbn1cbi5mYXZfMSBoNSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuLmZhdl8yIHAge1xuICAgIG1hcmdpbjogMHB4O1xufVxuLnN0YXJfbGlzdCBpbWcge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmJhZGdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIH1cbiAgLmJhZGdlX2RvbGxhciB7XG4gICAgY29sb3I6ICNjNDkzMmY7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuYmFkZ2VfcHJpY2Uge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGNvbG9yOiAjYzQ5MzJmO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdG9wOiAtOXB4O1xuICB9XG4gIC5iYWRnZV9wZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiAxcHg7XG4gICAgbWFyZ2luLXRvcDogLTExcHg7XG4gIH1cbi50dW1iTmFpbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxNTQuMDhweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4udHVtYmRpdiB7XG4gICAgcGFkZGluZzogM3B4IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEzcHg7XG59XG4uaGlkZF9pbWFnZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLy8gLmltYWdlc19sb2Fkbmd7XG4vLyAgICAgYmFja2dyb3VuZDp1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvaW1hZ2VMb2FkZXIuZ2lmJylcbi8vIH1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/car-list/car-list.page.ts":
/*!*******************************************!*\
  !*** ./src/app/car-list/car-list.page.ts ***!
  \*******************************************/
/*! exports provided: CarListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarListPage", function() { return CarListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");






let CarListPage = class CarListPage {
    constructor(menuCtrl, storage, router, activatedRoute, plateform, loadingController, restService, toastController, zone) {
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.plateform = plateform;
        this.loadingController = loadingController;
        this.restService = restService;
        this.toastController = toastController;
        this.zone = zone;
        this.page_number_all = 4;
        this.sklect_off = true;
        this.sing_sklect_off = true;
        this.page_number_search = 0;
        this.searching = false;
        this.notFound_error = false;
        this.searchFromsearch = false;
        this.infiniteScrool = true;
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        this.autocomplete = { input: "" };
        this.autocompleteItems = [];
        this.detinationCompleteItems = [];
        this.cars_list_result = [];
        if (this.restService.fromHomeToSearch) {
            var res = this.restService.fromHomeToSearch;
            this.response = JSON.parse(res);
            console.log("data from home", this.response);
            if (this.response.cars_list_result.length == 0) {
                this.notFound_error = true;
            }
            if (this.response.cars_list_result != []) {
                this.storage.get("base_urls").then((base_urls) => {
                    // this.base_urls = base_urls;
                    this.storage.get("currency_symbol").then((currency_symbol) => {
                        console.log("currency_symbol", currency_symbol);
                        this.currency_symbol = currency_symbol;
                        this.cars_list_result = this.response.cars_list_result;
                    });
                });
            }
            else {
                this.notFound_error = true;
                console.log(this.response.cars_list_result, "from else");
            }
        }
        this.storage.get("user_details").then((user_details) => {
            console.log("asdasdad", user_details);
            this.userID = user_details.users_id;
            this.currencyID = user_details.currencies_id;
        });
        if (this.restService.sourceToSearch) {
            this.searchText = this.restService.sourceToSearch;
            this.onInput();
            this.infiniteScrool = false;
        }
        this.infiniteScrool = this.restService.scroolFlag;
    }
    gotoDetail(data) {
        var myData = JSON.stringify({
            cars_list_result: data,
            redirect: "/car-list",
        });
        this.router.navigate(["/car-detail"], {
            queryParams: {
                value: myData,
            },
        });
    }
    ngOnInit() {
        // this.base_urls = this.restService.domainOfCar;
        this.base_urls = "https://app.transusdrives.com/";
        console.log("data------------------", this.restService.fromHomeToSearch);
        if (this.restService.fromHomeToSearch) {
            this.cars_list_result = JSON.parse(this.restService.fromHomeToSearch).cars_list_result;
            console.log(this.sklect_off);
            console.log("data------------------", this.cars_list_result);
        }
        if (this.cars_list_result.length == 0) {
            this.nocarlist = 0;
        }
        if (this.plateform.is("ios")) {
            this.plateformCheck = "ios";
        }
        else {
            this.plateformCheck = "android";
        }
    }
    favourite(request, vehicle_id, obj) {
        console.log("cars details with index", obj.favourite);
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
                        obj.favourite = "Yes";
                    }
                    else {
                        obj.favourite = "No";
                    }
                }
            }, (err) => { });
        }
        else {
            this.router.navigate(['/login']);
        }
    }
    onInput() {
        this.infiniteScrool = true;
        this.page_number_all = 4;
        this.searchFromsearch = true;
        this.notFound_error = false;
        this.searching = true;
        this.cars_list_result = [];
        console.log(this.searchText);
        var stringy = JSON.stringify({
            requestType: "searchBysearch",
            usersID: this.userID,
            textToSearch: this.searchText,
            currencyID: this.currencyID,
            limit: 4,
            offset: this.page_number_search,
        });
        console.log(stringy);
        this.restService.filters(stringy).subscribe((response) => {
            var response_comming = JSON.parse(response["_body"]);
            if (response_comming.status == "NotFound") {
                this.sing_sklect_off = true;
                this.searching = false;
                this.notFound_error = true;
                this.cars_list_result = [];
            }
            else if (response_comming.status == "Found") {
                this.notFound_error = false;
                this.cars_list_result = response_comming.cars_list_result;
                this.searching = false;
            }
        }, (err) => { });
    }
    goToFilter() {
        this.router.navigate(["/filters"]);
    }
    toggleMenu() {
        this.menuCtrl.toggle();
    }
    doInfinite(ev) {
        if (this.infiniteScrool == true) {
            this.sing_sklect_off = false;
            if (this.searchFromsearch == false) {
                var stringy = JSON.stringify({
                    requestType: "all_cars_list",
                    usersID: this.userID,
                    currencyID: this.currencyID,
                    limit: 4,
                    offset: this.page_number_all,
                });
            }
            else {
                var stringy = JSON.stringify({
                    requestType: "searchBysearch",
                    usersID: this.userID,
                    textToSearch: this.searchText,
                    currencyID: this.currencyID,
                    limit: 4,
                    offset: this.page_number_all,
                });
            }
            console.log(stringy);
            this.restService.filters(stringy).subscribe((response) => {
                var response_comming = JSON.parse(response["_body"]);
                if (response_comming.status == "NotFound") {
                    ev.target.complete();
                    this.sing_sklect_off = true;
                }
                else if (response_comming.status == "Found") {
                    this.notFound_error = false;
                    this.cars_list_result = [
                        ...this.cars_list_result,
                        ...response_comming.cars_list_result,
                    ];
                    ev.target.complete();
                    this.page_number_all = this.page_number_all + 4;
                }
            }, (err) => { });
        }
    }
    onImageLoad(idx) {
        console.log(idx);
        var orginalEle = document.getElementsByClassName(`original_${idx}`)[0];
        var placeHolderEle = document.getElementsByClassName(`placeholder_${idx}`)[0];
        placeHolderEle.classList.add("hidd_image");
        orginalEle.classList.remove("hidd_image");
    }
    SelectSearchResult(address) {
        this.searchText = address; //May be delete
        console.log(this.searchText);
        this.autocompleteItems = [];
    }
    UpdateSearchResults() {
        console.log("location .....");
        if (this.searchText == "") {
            this.autocompleteItems = [];
            return;
        }
        console.log("source .....", this.searchText);
        //componentRestrictions: {country: 'AE'}
        this.GoogleAutocomplete.getPlacePredictions({ input: this.searchText }, (predictions, status) => {
            this.autocompleteItems = [];
            this.zone.run(() => {
                console.log("predictions .....", predictions);
                predictions.forEach((prediction) => {
                    console.log(prediction);
                    this.autocompleteItems.push(prediction);
                    console.log("prediction .....", prediction);
                });
            });
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
};
CarListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
CarListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-car-list",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./car-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/car-list/car-list.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./car-list.page.scss */ "./src/app/car-list/car-list.page.scss")).default]
    })
], CarListPage);



/***/ })

}]);
//# sourceMappingURL=car-list-car-list-module-es2015.js.map