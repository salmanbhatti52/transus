(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"header_pd\">\r\n    <ion-buttons style=\"margin-top: 2px\" slot=\"start\">\r\n      <img src=\"assets/img/Menu.svg\" (click)=\"toggleMenu()\" />\r\n    </ion-buttons>\r\n    <ion-searchbar\r\n      class=\"marginTopSearch\"\r\n      style=\"margin-top: 0px\"\r\n      (click)=\"ifFound()\"\r\n      (ionChange)=\"onInput()\"\r\n      placeholder=\"Search for cars\"\r\n    ></ion-searchbar>\r\n    <ion-buttons style=\"margin-top: 3px\" slot=\"end\" (click)=\"goToFilter()\">\r\n      <img src=\"assets/img/filter.svg\" />\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  \r\n\r\n  <div [ngSwitch]=\"pet\">\r\n    <ion-list *ngSwitchCase=\"'cars'\">\r\n      <div class=\"horizental_slider\">\r\n        <ng-container *ngIf=\"notifications?.length > 0\">\r\n          <ion-row>\r\n            <ion-col size=\"2\"></ion-col>\r\n            <ion-col size=\"8\" class=\"ion-text-center\">\r\n              <h4 style=\"color: black\">Notification</h4>\r\n            </ion-col>\r\n            <ion-col size=\"2\">\r\n              <p class=\"view_all\" (click)=\"viewAllNotifications()\">View all</p>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n              <ion-slides [options]=\"option1\" >\r\n                <ion-slide *ngFor=\"let p of notifications; let i = index\">\r\n                  <ion-row (click)=\"accptOffer(p)\">\r\n                    <!-- <ion-col size=\"2\" class=\"notify_image_main\">\r\n                      <img src=\"{{base_urls}}{{p.sender_img_url}}\" />\r\n                    </ion-col> -->\r\n                    <!-- <ion-col size=\"10\"> -->\r\n                      <ion-col size=\"12\"> \r\n                      <ion-row>\r\n                        <ion-col size=\"6\" class=\"ion-text-left\">\r\n                          <p class=\"notfy_title\">{{p.sender_name}}</p>\r\n                        </ion-col>\r\n                        <ion-col size=\"6\" class=\"ion-text-right\">\r\n                          <p class=\"notify_time\">{{p.time_added}}</p>\r\n                        </ion-col>\r\n                        <ion-col\r\n                          size=\"12\"\r\n                          class=\"ion-text-left notify_desc_main\"\r\n                        >\r\n                          <p style=\"color: black\" class=\"notify_desc\">\r\n                            {{p.content}}\r\n                          </p>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-slide>\r\n              </ion-slides>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"notifications?.length == 0\">\r\n          <ion-row *ngIf=\"user_name\">\r\n            <ion-col class=\"ion-text-center\">\r\n              <h3 class=\"marginZero\">Welcome, {{user_name}}</h3>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ng-container>\r\n      </div>\r\n      <ion-row>\r\n        <ion-col class=\"ion-text-center\">\r\n          <h3 class=\"marginZero\">What are you looking for?</h3>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <div class=\"h_slider\">\r\n          <!-- car_types -->\r\n          <!-- New_car_types -->\r\n          <ion-col\r\n            style=\"\r\n              display: flex;\r\n              justify-content: space-around;\r\n              flex-direction: column;\r\n              align-items: center;\r\n            \"\r\n            size=\"3\"\r\n            class=\"bg ion-text-center\"\r\n            *ngFor=\"let p of New_car_types; let i = index\"\r\n            (click)=\"getStartIndexClick(p,i)\"\r\n            [class.bg_active]=\"sliderStartBoolean == i\"\r\n          >\r\n            <img src=\"{{p.type_icon_img}}\" />\r\n            <p style=\"margin-top: 1.31em\">{{p.name}}</p>\r\n          </ion-col>\r\n        </div>\r\n      </ion-row>\r\n\r\n      <ion-row\r\n        *ngIf=\"ShowLoading\"\r\n        style=\"position: absolute; width: 100%; z-index: 9999\"\r\n      >\r\n        <ion-col style=\"text-align: center\">\r\n          <img style=\"width: 90px\" src=\"assets/img/Loader.gif\" />\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-grid class=\"main_penta\">\r\n        <ion-row>\r\n          <ion-col class=\"ion-text-center\">\r\n            <h3 class=\"marginZero\">Top Rented</h3>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <!-- <ion-row>\r\n          <div style=\"height: 175px; width: 100%\" #scroll>\r\n            <ion-content\r\n              style=\"--background: #f9f9f9\"\r\n              [scrollEvents]=\"true\"\r\n              scroll-x=\"true\"\r\n              scroll-y=\"false\"\r\n            >\r\n              <div class=\"c_slider\">\r\n                <ng-container *ngFor=\"let p of top_rated_cars; let i = index\">\r\n                  <ion-col size=\"4\">\r\n                    <div class=\"ion-text-center\" (click)=\"gotoDetail(p)\">\r\n                      <div\r\n                        class=\"pentagon\"\r\n                        style=\"background: url({{base_urls}}{{p.veh_imgs[0]}});\"\r\n                      ></div>\r\n                      <img src=\"assets/img/Polygon_New_2.svg\" class=\"bg_uper\" />\r\n                      <div class=\"penta_main\">\r\n                        <span class=\"penta_1\">{{currency_symbol}}</span>\r\n                        <span class=\"penta_2\">{{p.charge_per_day}}</span>\r\n                        <span class=\"penta_3\">per day</span>\r\n\r\n                        <p class=\"penta_5\">{{p.total_trips}} trips</p>\r\n                      </div>\r\n                      <div style=\"padding-top: 7px\">\r\n                        <p class=\"penta_6\">{{p.model_name}}</p>\r\n                        <p class=\"penta_7\">{{p.make_name}}</p>\r\n                      </div>\r\n                    </div>\r\n                  </ion-col>\r\n                </ng-container>\r\n              </div>\r\n            </ion-content>\r\n          </div>\r\n        </ion-row> -->\r\n        <ion-row>\r\n          <div style=\"height: 175px; width: 100%\" #scroll>\r\n            <ion-content\r\n              style=\"--background: #f9f9f9\"\r\n              [scrollEvents]=\"true\"\r\n              scroll-x=\"true\"\r\n              scroll-y=\"false\"\r\n            >\r\n              <div class=\"c_slider\">\r\n                <ng-container *ngFor=\"let p of top_rated_cars; let i = index\">\r\n                  <ion-col size=\"6\">\r\n                    <div class=\"ion-text-center\" (click)=\"gotoDetail(p)\">\r\n                      <div class=\"pentagon\">\r\n                        <img\r\n                          class=\"top_rated_img\"\r\n                          src=\"{{base_urls}}{{p.veh_imgs[0]}}\"\r\n                        />\r\n                        <div class=\"penta_main\">\r\n                          <span class=\"penta_2\">\r\n                            {{p.manufacturer}},{{p.year}}\r\n                          </span>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"ratting_row\">\r\n                        <span class=\"penta_6\"\r\n                          ><span style=\"font-size: 12px\"\r\n                            >{{currency_symbol}}</span\r\n                          >{{p.charge_pe_day}}\r\n                          <span style=\"font-size: 10px\">per day</span></span\r\n                        >\r\n\r\n                        <span class=\"penta_7\">\r\n                          <ion-col class=\"stars\" style=\"padding: 0px\">\r\n                            <p\r\n                              style=\"margin: 0px\"\r\n                              class=\"star_list\"\r\n                              *ngIf=\"p.ratting_stars == '5'\"\r\n                            >\r\n                              <img\r\n                                class=\"starss\"\r\n                                src=\"assets/img/yellow_star.svg\"\r\n                              />\r\n                              <img\r\n                                class=\"starss\"\r\n                                src=\"assets/img/yellow_star.svg\"\r\n                              />\r\n                              <img\r\n                                class=\"starss\"\r\n                                src=\"assets/img/yellow_star.svg\"\r\n                              />\r\n                              <img\r\n                                class=\"starss\"\r\n                                src=\"assets/img/yellow_star.svg\"\r\n                              />\r\n                              <img\r\n                                class=\"starss\"\r\n                                src=\"assets/img/yellow_star.svg\"\r\n                              />\r\n                            </p>\r\n                            <p\r\n                              style=\"margin: 0px\"\r\n                              class=\"star_list\"\r\n                              *ngIf=\"p.ratting_stars == '4'\"\r\n                            >\r\n                              <img\r\n                                class=\"starss\"\r\n                                src=\"assets/img/yellow_star.svg\"\r\n                              />\r\n                              <img\r\n                                class=\"starss\"\r\n                                src=\"assets/img/yellow_star.svg\"\r\n                              />\r\n                              <img\r\n                                class=\"starss\"\r\n                                src=\"assets/img/yellow_star.svg\"\r\n                              />\r\n                              <img\r\n                                class=\"starss\"\r\n                                src=\"assets/img/yellow_star.svg\"\r\n                              />\r\n                              <img\r\n                                class=\"starss\"\r\n                                src=\"assets/img/grey_star.svg\"\r\n                              />\r\n                            </p>\r\n                            <p\r\n                              style=\"margin: 0px\"\r\n                              class=\"star_list\"\r\n                              *ngIf=\"p.ratting_stars == '3'\"\r\n                            >\r\n                              <img\r\n                                class=\"starss\"\r\n                                src=\"assets/img/yellow_star.svg\"\r\n                              />\r\n                              <img\r\n                                class=\"starss\"\r\n                                src=\"assets/img/yellow_star.svg\"\r\n                              />\r\n                              <img\r\n                                class=\"starss\"\r\n                                src=\"assets/img/yellow_star.svg\"\r\n                              />\r\n                              <img\r\n                                class=\"starss\"\r\n                                src=\"assets/img/grey_star.svg\"\r\n                              />\r\n                              <img\r\n                                class=\"starss\"\r\n                                src=\"assets/img/grey_star.svg\"\r\n                              />\r\n                            </p>\r\n                            <p\r\n                              style=\"margin: 0px\"\r\n                              class=\"star_list\"\r\n                              *ngIf=\"p.ratting_stars == '2'\"\r\n                            >\r\n                              <img\r\n                                class=\"starss\"\r\n                                src=\"assets/img/yellow_star.svg\"\r\n                              />\r\n                              <img\r\n                                class=\"starss\"\r\n                                src=\"assets/img/yellow_star.svg\"\r\n                              />\r\n                              <img\r\n                                class=\"starss\"\r\n                                src=\"assets/img/grey_star.svg\"\r\n                              />\r\n                              <img\r\n                                class=\"starss\"\r\n                                src=\"assets/img/grey_star.svg\"\r\n                              />\r\n                              <img\r\n                                class=\"starss\"\r\n                                src=\"assets/img/grey_star.svg\"\r\n                              />\r\n                            </p>\r\n                            <p\r\n                              style=\"margin: 0px\"\r\n                              class=\"star_list\"\r\n                              *ngIf=\"p.ratting_stars == '1'\"\r\n                            >\r\n                              <img\r\n                                class=\"starss\"\r\n                                src=\"assets/img/yellow_star.svg\"\r\n                              />\r\n                              <img\r\n                                class=\"starss\"\r\n                                src=\"assets/img/grey_star.svg\"\r\n                              />\r\n                              <img\r\n                                class=\"starss\"\r\n                                src=\"assets/img/grey_star.svg\"\r\n                              />\r\n                              <img\r\n                                class=\"starss\"\r\n                                src=\"assets/img/grey_star.svg\"\r\n                              />\r\n                              <img\r\n                                class=\"starss\"\r\n                                src=\"assets/img/grey_star.svg\"\r\n                              />\r\n                            </p>\r\n\r\n                            <p\r\n                              style=\"margin: 0px\"\r\n                              class=\"star_list\"\r\n                              *ngIf=\"p.ratting_stars == '0'\"\r\n                            >\r\n                              <img\r\n                                class=\"starss\"\r\n                                src=\"assets/img/grey_star.svg\"\r\n                              />\r\n                              <img\r\n                                class=\"starss\"\r\n                                src=\"assets/img/grey_star.svg\"\r\n                              />\r\n                              <img\r\n                                class=\"starss\"\r\n                                src=\"assets/img/grey_star.svg\"\r\n                              />\r\n                              <img\r\n                                class=\"starss\"\r\n                                src=\"assets/img/grey_star.svg\"\r\n                              />\r\n                              <img\r\n                                class=\"starss\"\r\n                                src=\"assets/img/grey_star.svg\"\r\n                              />\r\n                            </p>\r\n\r\n                            <p\r\n                              style=\"margin: 0px\"\r\n                              class=\"star_list\"\r\n                              *ngIf=\"p.ratting_stars == null\"\r\n                            >\r\n                              <img\r\n                                class=\"starss\"\r\n                                src=\"assets/img/grey_star.svg\"\r\n                              />\r\n                              <img\r\n                                class=\"starss\"\r\n                                src=\"assets/img/grey_star.svg\"\r\n                              />\r\n                              <img\r\n                                class=\"starss\"\r\n                                src=\"assets/img/grey_star.svg\"\r\n                              />\r\n                              <img\r\n                                class=\"starss\"\r\n                                src=\"assets/img/grey_star.svg\"\r\n                              />\r\n                              <img\r\n                                class=\"starss\"\r\n                                src=\"assets/img/grey_star.svg\"\r\n                              />\r\n                            </p>\r\n                          </ion-col>\r\n\r\n                          <span>{{p.total_trips}} trips</span>\r\n                        </span>\r\n                      </div>\r\n                    </div>\r\n                  </ion-col>\r\n                </ng-container>\r\n              </div>\r\n            </ion-content>\r\n          </div>\r\n        </ion-row>\r\n        <!-- <ion-row >\r\n        <div class=\"c_slider\" (scroll)=\"doInfinite($event)\">\r\n\r\n          <ng-container *ngFor=\"let p of top_rated_cars; let i = index\">\r\n            <ion-col size=\"4\" >\r\n                <div class=\"ion-text-center\" (click)=\"gotoDetail(p)\">\r\n\r\n                  <div class=\"pentagon\" style=\"background: url({{base_urls}}{{p.veh_imgs[0]}});\"></div>\r\n                  <img src=\"assets/img/Polygon_New_2.svg\" class=\"bg_uper\">\r\n                  <div class=\"penta_main\">\r\n                    <span class=\"penta_1\">{{currency_symbol}}</span>\r\n                    <span class=\"penta_2\">{{p.charge_per_day}}</span>\r\n                    <span class=\"penta_3\">per day</span>\r\n\r\n                    <p class=\"penta_5\">{{p.total_trips}} trips</p>\r\n                  </div>\r\n                  <p class=\"penta_6\">{{p.model_name}}</p>\r\n                  <p  class=\"penta_7\">{{p.make_name}}</p>\r\n                </div>\r\n              </ion-col>\r\n         </ng-container>\r\n\r\n\r\n\r\n        </div>\r\n      </ion-row> -->\r\n      </ion-grid>\r\n      <ion-row>\r\n        <ion-col class=\"ion-text-center\">\r\n          <h3 class=\"marginZero\">\r\n            The car that pays<br />\r\n            for itself\r\n          </h3>\r\n          <p class=\"ft\">\r\n            List your car with few simple steps and start earning easily.\r\n          </p>\r\n          <ion-row>\r\n            <ion-col size=\"2\"></ion-col>\r\n            <ion-col size=\"8\">\r\n              <ion-button\r\n                color=\"secondary\"\r\n                expand=\"block\"\r\n                shape=\"round\"\r\n                (click)=\"goToCarList()\"\r\n                >List your car\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"tup\">\r\n        <ion-col class=\"ion-text-center\">\r\n          <h3 class=\"marginZero\">Invite Friends</h3>\r\n          <!-- <p class=\"earn\">And spread the word</p> -->\r\n          <ion-row>\r\n            <ion-col size=\"2\"></ion-col>\r\n            <ion-col size=\"8\">\r\n              <ion-button\r\n                (click)=\"inviteFrnds()\"\r\n                color=\"primary\"\r\n                expand=\"block\"\r\n                shape=\"round\"\r\n                >Invite</ion-button\r\n              >\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-list>\r\n    <ion-list *ngSwitchCase=\"'bikes'\">\r\n      <ion-row>\r\n        <ion-col class=\"ion-text-center\">\r\n          <h3 class=\"marginZero\">Available for Motor Delivery</h3>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ng-container *ngFor=\"let p of top_rated_motors; let i = index\">\r\n        <ion-row class=\"pd_8\" *ngIf=\"i % 2 === 0\">\r\n          <ion-col size=\"2\">\r\n            <div\r\n              class=\"pentagon1\"\r\n              style=\"background: url({{base_urls}}{{p.insurance_img}});\"\r\n            ></div>\r\n            <img src=\"assets/img/white.svg\" class=\"bg_uper_1\" />\r\n          </ion-col>\r\n          <ion-col size=\"6\" class=\"b_list4\">\r\n            <p class=\"b_list1\">{{p.user_name}}</p>\r\n            <span class=\"view_details\" (click)=\"viewMotorDetail(p)\"\r\n              >View Details</span\r\n            >\r\n            <!--p class=\"b_list2\"><span class=\"b_list3\">$6</span>/delivery</p-->\r\n          </ion-col>\r\n          <ion-col size=\"4\" class=\"ion-text-right\">\r\n            <p class=\"b_list5\">\r\n              <img src=\"assets/img/Star_colored.svg\" />\r\n              <span class=\"b_list6\">({{p.ratting_stars}})</span>\r\n            </p>\r\n            <p class=\"b_list7\" *ngIf=\"availability == 'Yes'\">\r\n              <b class=\"bullet\"></b> Available\r\n            </p>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"b_list8 pd_8\" *ngIf=\"i % 2 != 0\">\r\n          <ion-col size=\"2\">\r\n            <div\r\n              class=\"pentagon1\"\r\n              style=\"background: url({{base_urls}}{{p.insurance_img}});\"\r\n            ></div>\r\n            <img src=\"assets/img/white.svg\" class=\"bg_uper_1\" />\r\n          </ion-col>\r\n          <ion-col size=\"6\" class=\"b_list4\">\r\n            <p class=\"b_list1\">{{p.user_name}}</p>\r\n            <span class=\"view_details\" (click)=\"viewMotorDetail(p)\"\r\n              >View Details</span\r\n            >\r\n            <!--p class=\"b_list2\"><span class=\"b_list3\">$6</span>/delivery</p-->\r\n          </ion-col>\r\n          <ion-col size=\"4\" class=\"ion-text-right\">\r\n            <p class=\"b_list5\">\r\n              <img src=\"assets/img/Star_colored.svg\" />\r\n              <span class=\"b_list6\">({{p.ratting_stars}})</span>\r\n            </p>\r\n            <p class=\"b_list7\" *ngIf=\"availability == 'Yes'\">\r\n              <b class=\"bullet\"></b> Available\r\n            </p>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ng-container>\r\n      <ion-row class=\"b_list9\">\r\n        <ion-col class=\"ion-text-center\">\r\n          <h3 class=\"marginZero\">Fast Delivery Service</h3>\r\n          <p class=\"ft\">Earn Extra cash for deliveries.</p>\r\n          <ion-row>\r\n            <ion-col size=\"2\"></ion-col>\r\n            <ion-col size=\"8\">\r\n              <ion-button\r\n                color=\"secondary\"\r\n                expand=\"block\"\r\n                shape=\"round\"\r\n                (click)=\"GotoList()\"\r\n                >List your motor\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"tup\">\r\n        <ion-col class=\"ion-text-center\">\r\n          <h3 class=\"marginZero\">Invite Friends</h3>\r\n          <p class=\"earn\">And earn credits</p>\r\n          <ion-row>\r\n            <ion-col size=\"2\"></ion-col>\r\n            <ion-col size=\"8\">\r\n              <ion-button color=\"primary\" expand=\"block\" shape=\"round\"\r\n                >Invite</ion-button\r\n              >\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-list>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #c4932f;\n}\n\nion-toolbar.ios {\n  margin-top: 3px;\n}\n\n.marginTopSearch.md {\n  margin-top: 6px !important;\n}\n\nion-searchbar {\n  --border-radius: 22px;\n  --box-shadow: none;\n}\n\n.cstomHeader {\n  --background: #fff;\n}\n\n.segment-button-checked {\n  background: #f7f8fa;\n  color: #464646;\n}\n\n.marginZero {\n  margin: 0px;\n}\n\n.bg {\n  background: #efeeee;\n  padding: 1.5em 0.8em 0.7em 0.8em;\n  border-radius: 13px;\n  margin: 8px;\n}\n\n.bg p {\n  margin: 0px;\n  font-size: 12px;\n  margin-top: 4px;\n}\n\n.bg img {\n  width: 100%;\n}\n\n.h_slider {\n  display: flex;\n  overflow: auto;\n  width: 100%;\n  margin: 0em 9px;\n}\n\n.pentagon {\n  position: relative;\n  border-radius: 10px;\n  height: 98px;\n  margin: 0 auto;\n  width: 100%;\n  background-size: cover !important;\n}\n\n.bg_uper {\n  position: absolute;\n  top: 4px;\n  left: 43px;\n  right: 0px;\n  width: 123px;\n  text-align: center;\n}\n\n.main_penta {\n  background-color: #f9f9f9;\n  margin: 1em 0em;\n  padding: 1em 0em;\n}\n\n.ft {\n  font-size: 12px;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n}\n\n.tup {\n  background: #f9f9f9;\n  padding: 1em 0em;\n  margin-top: 1em;\n}\n\nion-list {\n  padding-bottom: 0px;\n}\n\n.earn {\n  margin-top: 5px;\n  margin-bottom: 7px;\n  font-size: 14px;\n}\n\n.bg_active {\n  background: #c4932f;\n  color: #fff;\n}\n\n.penta_main {\n  position: absolute;\n  text-align: center;\n  color: #fff;\n  bottom: 0px;\n  width: 100%;\n  background: #00000080;\n  border-radius: 0px 0px 10px 10px;\n  padding: 6px 8px;\n}\n\n.ratting_row {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 7px;\n}\n\n.penta_1 {\n  display: block;\n}\n\n.penta_2 {\n  font-size: 14px;\n  float: left;\n}\n\n.penta_3 {\n  display: block;\n  font-size: 10px;\n}\n\n.penta_4 {\n  margin-top: 3px;\n  margin-bottom: 0px;\n}\n\n.penta_4 img {\n  width: 11px;\n  margin-right: 2px;\n}\n\n.penta_5 {\n  margin: 0px;\n  font-size: 7px;\n}\n\n.penta_6 {\n  color: #c4932f;\n  margin: 0px;\n  font-size: 18px;\n}\n\n.penta_7 {\n  color: #000;\n  margin: 0px;\n  font-size: 12px;\n  margin-top: 0px;\n  display: grid;\n}\n\n.c_slider {\n  display: flex;\n  overflow: auto;\n}\n\n.b_list1 {\n  margin: 0px;\n  font-size: 14px;\n}\n\n.b_list2 {\n  color: #e2ac3c;\n  margin: 0px;\n  font-size: 14px;\n  margin-left: 10px;\n}\n\n.b_list3 {\n  font-size: 20px;\n}\n\n.pentagon1 {\n  width: 100%;\n  height: 55px;\n  margin: 0 auto;\n  background-size: cover !important;\n  -webkit-clip-path: polygon(50% 0%, 100% 30%, 100% 75%, 50% 100%, 0% 75%, 0% 28%);\n  clip-path: polygon(50% 0%, 100% 30%, 100% 75%, 50% 100%, 0% 75%, 0% 28%);\n}\n\n.bg_uper_1 {\n  position: absolute;\n  top: 4px;\n  left: 0px;\n  right: 0px;\n  text-align: center;\n}\n\n.b_list4 {\n  padding-top: 1.2em;\n}\n\n.b_list5 {\n  margin-top: 13px;\n  margin-bottom: 0px;\n}\n\n.b_list5 img {\n  width: 13px;\n  margin-right: 2px;\n}\n\n.b_list6 {\n  font-size: 12px;\n  margin-left: 5px;\n}\n\n.b_list7 {\n  margin: 0px;\n  font-size: 12px;\n  text-align: right;\n}\n\n.b_list7 span {\n  color: #e2ac3c;\n}\n\n.b_list8 {\n  background: #f7f8fa;\n  padding-bottom: 4px;\n  padding-top: 2px;\n}\n\n.b_list9 {\n  margin-top: 0.8em;\n}\n\nion-slides {\n  height: 150px;\n  padding-right: 1.8em;\n  padding-left: 0.6em;\n}\n\nion-slide p {\n  margin: 0px;\n}\n\nion-slide {\n  border-top: 1px solid #fff;\n}\n\n.notify_image_main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.starss {\n  height: 10px;\n}\n\n.notify_image_main img {\n  border-radius: 50%;\n}\n\n.notify_desc {\n  font-size: 10px;\n}\n\n.notify_desc_main {\n  padding-top: 0px;\n}\n\n.notfy_title {\n  color: #1a6bbe;\n  font-size: 10px;\n}\n\n.notify_time {\n  color: #c4932f;\n  font-size: 10px;\n}\n\n.horizental_slider {\n  background: #efeeee;\n  margin: 0em 0.5em;\n  border-radius: 12px;\n}\n\n.view_all {\n  font-size: 12px;\n  color: #c4932f;\n  text-decoration: underline;\n  margin-top: 1.6em;\n}\n\n.pd_8 {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.bullet {\n  height: 8px;\n  width: 8px;\n  background: #0ec10e;\n  margin: 0px;\n  display: inline-grid;\n  border-radius: 16px;\n}\n\n.view_all_motor {\n  font-size: 12px;\n  color: #c4932f;\n  text-decoration: underline;\n  margin-top: 1.6em;\n  margin-left: 1em;\n}\n\n.view_details {\n  color: #fff;\n  background: #e2ae42;\n  padding: 3px 7px;\n  font-size: 11px;\n  border-radius: 2px;\n}\n\n@media screen and (max-width: 414px) {\n  .bg_uper {\n    left: 0px;\n  }\n}\n\n.top_rated_img {\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 10px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBR0E7RUFDRSxlQUFBO0FBQUY7O0FBR0E7RUFDRSwwQkFBQTtBQUFGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7QUFFRjs7QUFBQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQUdGOztBQURBO0VBQ0UsV0FBQTtBQUlGOztBQUZBO0VBQ0UsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUtGOztBQUhBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBTUY7O0FBSkE7RUFDRSxXQUFBO0FBT0Y7O0FBTEE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBUUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7QUFBRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtBQUdGOztBQURBO0VBQ0UsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBSUY7O0FBRkE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUtGOztBQUhBO0VBQ0UsbUJBQUE7QUFNRjs7QUFKQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFPRjs7QUFMQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQVFGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFBQTtFQUNFLGNBQUE7QUFHRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBR0Y7O0FBREE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUFJRjs7QUFGQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FBS0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFPQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBSkY7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQUhGOztBQUtBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFGRjs7QUFJQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBREY7O0FBR0E7RUFDRSxlQUFBO0FBQUY7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLGdGQUFBO0VBUUEsd0VBQUE7QUFORjs7QUFRQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFMRjs7QUFPQTtFQUNFLGtCQUFBO0FBSkY7O0FBTUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBS0E7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUFGRjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQURGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUNBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQUE7RUFDRSxpQkFBQTtBQUdGOztBQURBO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUFJRjs7QUFGQTtFQUNFLFdBQUE7QUFLRjs7QUFIQTtFQUNFLDBCQUFBO0FBTUY7O0FBSkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQU9GOztBQUxBO0VBQ0UsWUFBQTtBQVFGOztBQUxBO0VBQ0Usa0JBQUE7QUFRRjs7QUFOQTtFQUNFLGVBQUE7QUFTRjs7QUFQQTtFQUNFLGdCQUFBO0FBVUY7O0FBUkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQVdGOztBQVRBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFZRjs7QUFWQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQWFGOztBQVhBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FBY0Y7O0FBWkE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBZUY7O0FBYkE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUFnQkY7O0FBZEE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQWlCRjs7QUFmQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBa0JGOztBQUpBO0VBSUU7SUFDRSxTQUFBO0VBSUY7QUFDRjs7QUF5QkE7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQXZCRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogI2M0OTMyZjtcbiAgLy8gcGFkZGluZzogMC4zZW0gMC4yZW07XG59XG5cbmlvbi10b29sYmFyLmlvcyB7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuLm1hcmdpblRvcFNlYXJjaC5tZCB7XG4gIG1hcmdpbi10b3A6IDZweCAhaW1wb3J0YW50O1xufVxuaW9uLXNlYXJjaGJhciB7XG4gIC0tYm9yZGVyLXJhZGl1czogMjJweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuLmNzdG9tSGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xufVxuLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuICBiYWNrZ3JvdW5kOiAjZjdmOGZhO1xuICBjb2xvcjogIzQ2NDY0Njtcbn1cbi5tYXJnaW5aZXJvIHtcbiAgbWFyZ2luOiAwcHg7XG59XG4uYmcge1xuICBiYWNrZ3JvdW5kOiAjZWZlZWVlO1xuICBwYWRkaW5nOiAxLjVlbSAwLjhlbSAwLjdlbSAwLjhlbTtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgbWFyZ2luOiA4cHg7XG59XG4uYmcgcCB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cbi5iZyBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbi5oX3NsaWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwZW0gOXB4O1xufVxuLy8gLnBlbnRhZ29uIHtcbi8vICAgICBoZWlnaHQ6IDEyOHB4O1xuLy8gICAgIG1hcmdpbjogMCBhdXRvO1xuLy8gICAgIHdpZHRoOiAxMTJweDtcbi8vICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4vLyAgICAgLy8gYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuLy8gICAgIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAwJSwgMTAwJSAzMCUsIDEwMCUgNzUlLCA1MCUgMTAwJSwgMCUgNzUlLCAwJSAyOCUpO1xuLy8gICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgMCUsIDEwMCUgMzAlLCAxMDAlIDc1JSwgNTAlIDEwMCUsIDAlIDc1JSwgMCUgMjglKTtcbi8vIH1cbi5wZW50YWdvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgaGVpZ2h0OiA5OHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbn1cbi5iZ191cGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDRweDtcbiAgbGVmdDogNDNweDtcbiAgcmlnaHQ6IDBweDtcbiAgd2lkdGg6IDEyM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFpbl9wZW50YSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIG1hcmdpbjogMWVtIDBlbTtcbiAgcGFkZGluZzogMWVtIDBlbTtcbn1cbi5mdCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbmlvbi1idXR0b24ge1xuICAtLXBhZGRpbmctYm90dG9tOiAxLjVlbTtcbiAgLS1wYWRkaW5nLXRvcDogMS41ZW07XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cbi50dXAge1xuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICBwYWRkaW5nOiAxZW0gMGVtO1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5pb24tbGlzdCB7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG4uZWFybiB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uYmdfYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2M0OTMyZjtcbiAgY29sb3I6ICNmZmY7XG59XG4vLyAucGVudGFfbWFpbiB7XG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgdG9wOiAyMCU7XG4vLyAgIGxlZnQ6IDBweDtcbi8vICAgcmlnaHQ6IDBweDtcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICBjb2xvcjogI2ZmZjtcbi8vIH1cbi5wZW50YV9tYWluIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBib3R0b206IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA4MDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDEwcHg7XG4gIHBhZGRpbmc6IDZweCA4cHg7XG59XG4ucmF0dGluZ19yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEwcHggN3B4O1xufVxuLnBlbnRhXzEge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi8vIC5wZW50YV8yIHtcbi8vICAgZm9udC1zaXplOiAyMHB4O1xuLy8gfVxuLnBlbnRhXzIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLnBlbnRhXzMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLnBlbnRhXzQge1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5wZW50YV80IGltZyB7XG4gIHdpZHRoOiAxMXB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbn1cbi5wZW50YV81IHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogN3B4O1xufVxuLy8gLnBlbnRhXzYge1xuLy8gICBjb2xvcjogIzAwMDtcbi8vICAgbWFyZ2luOiAwcHg7XG4vLyAgIGZvbnQtc2l6ZTogMTRweDtcbi8vIH1cbi5wZW50YV82IHtcbiAgY29sb3I6ICNjNDkzMmY7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG4vLyAucGVudGFfNyB7XG4vLyAgIGNvbG9yOiAjMDAwO1xuLy8gICBtYXJnaW46IDBweDtcbi8vICAgZm9udC1zaXplOiAxMHB4O1xuLy8gICBtYXJnaW4tdG9wOiA3cHg7XG4vLyB9XG4ucGVudGFfNyB7XG4gIGNvbG9yOiAjMDAwO1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG59XG4uY19zbGlkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5iX2xpc3QxIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5iX2xpc3QyIHtcbiAgY29sb3I6ICNlMmFjM2M7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmJfbGlzdDMge1xuICBmb250LXNpemU6IDIwcHg7XG59XG4ucGVudGFnb24xIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oXG4gICAgNTAlIDAlLFxuICAgIDEwMCUgMzAlLFxuICAgIDEwMCUgNzUlLFxuICAgIDUwJSAxMDAlLFxuICAgIDAlIDc1JSxcbiAgICAwJSAyOCVcbiAgKTtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAwJSwgMTAwJSAzMCUsIDEwMCUgNzUlLCA1MCUgMTAwJSwgMCUgNzUlLCAwJSAyOCUpO1xufVxuLmJnX3VwZXJfMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0cHg7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJfbGlzdDQge1xuICBwYWRkaW5nLXRvcDogMS4yZW07XG59XG4uYl9saXN0NSB7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5iX2xpc3Q1IGltZyB7XG4gIHdpZHRoOiAxM3B4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbn1cbi5iX2xpc3Q2IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLmJfbGlzdDcge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5iX2xpc3Q3IHNwYW4ge1xuICBjb2xvcjogI2UyYWMzYztcbn1cbi5iX2xpc3Q4IHtcbiAgYmFja2dyb3VuZDogI2Y3ZjhmYTtcbiAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgcGFkZGluZy10b3A6IDJweDtcbn1cbi5iX2xpc3Q5IHtcbiAgbWFyZ2luLXRvcDogMC44ZW07XG59XG5pb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgcGFkZGluZy1yaWdodDogMS44ZW07XG4gIHBhZGRpbmctbGVmdDogMC42ZW07XG59XG5pb24tc2xpZGUgcCB7XG4gIG1hcmdpbjogMHB4O1xufVxuaW9uLXNsaWRlIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmY7XG59XG4ubm90aWZ5X2ltYWdlX21haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zdGFyc3Mge1xuICBoZWlnaHQ6IDEwcHg7XG59XG5cbi5ub3RpZnlfaW1hZ2VfbWFpbiBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ubm90aWZ5X2Rlc2Mge1xuICBmb250LXNpemU6IDEwcHg7XG59XG4ubm90aWZ5X2Rlc2NfbWFpbiB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG4ubm90ZnlfdGl0bGUge1xuICBjb2xvcjogIzFhNmJiZTtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLm5vdGlmeV90aW1lIHtcbiAgY29sb3I6ICNjNDkzMmY7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5ob3JpemVudGFsX3NsaWRlciB7XG4gIGJhY2tncm91bmQ6ICNlZmVlZWU7XG4gIG1hcmdpbjogMGVtIDAuNWVtO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuLnZpZXdfYWxsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2M0OTMyZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIG1hcmdpbi10b3A6IDEuNmVtO1xufVxuLnBkXzgge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG4uYnVsbGV0IHtcbiAgaGVpZ2h0OiA4cHg7XG4gIHdpZHRoOiA4cHg7XG4gIGJhY2tncm91bmQ6ICMwZWMxMGU7XG4gIG1hcmdpbjogMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbn1cbi52aWV3X2FsbF9tb3RvciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNjNDkzMmY7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBtYXJnaW4tdG9wOiAxLjZlbTtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbn1cbi52aWV3X2RldGFpbHMge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogI2UyYWU0MjtcbiAgcGFkZGluZzogM3B4IDdweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi8vIC8qIGlwaG9uZSA2KywgNnMrLCA3KywgOCsgKi9cbi8vIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQxNHB4KSBhbmQgKG1heC1kZXZpY2UtaGVpZ2h0OiA3MzZweCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMykge1xuLy8gICAgIGlvbi1oZWFkZXIge1xuLy8gICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4vLyAgICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xuLy8gICAgICAgICBwYWRkaW5nLXRvcDogMC41ZW07XG4vLyAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4vLyAgICAgICAgIGJhY2tncm91bmQ6ICNjNDkzMmY7XG4vLyAgICAgfVxuLy8gfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTRweCkge1xuICAucGVudGFnb24ge1xuICAgIC8vIHdpZHRoOiA5NiU7XG4gIH1cbiAgLmJnX3VwZXIge1xuICAgIGxlZnQ6IDBweDtcbiAgfVxufVxuXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xuLy8gICAgIC5wZW50YWdvbiB7XG4vLyAgICAgICAgIHdpZHRoOiA5NiU7XG4vLyAgICAgfVxuLy8gICAgIC5iZ191cGVyIHtcbi8vICAgICAgICAgbGVmdDogNHB4O1xuLy8gICAgIH1cbi8vIH1cblxuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbi8vICAgICAucGVudGFnb24ge1xuLy8gICAgICAgICB3aWR0aDogOTglO1xuLy8gICAgIH1cbi8vICAgICAuYmdfdXBlciB7XG4vLyAgICAgICAgIGxlZnQ6IDFweDtcbi8vICAgICB9XG4vLyB9XG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuLy8gICAgIC5wZW50YWdvbiB7XG4vLyAgICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgICAgICBoZWlnaHQ6IDExMHB4O1xuLy8gICAgIH1cbi8vICAgICAuYmdfdXBlciB7XG4vLyAgICAgICAgIGxlZnQ6IDFweDtcbi8vICAgICB9XG4vLyB9XG4udG9wX3JhdGVkX2ltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _accept_offer_accept_offer_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../accept-offer/accept-offer.page */ "./src/app/accept-offer/accept-offer.page.ts");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../users.service */ "./src/app/users.service.ts");











let HomePage = class HomePage {
    constructor(loadingController, storage, router, menuCtrl, restService, popoverController, oneSignal, gestureCtrl, socialSharing, usersService, navCtrl, ngZone) {
        this.loadingController = loadingController;
        this.storage = storage;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.restService = restService;
        this.popoverController = popoverController;
        this.oneSignal = oneSignal;
        this.gestureCtrl = gestureCtrl;
        this.socialSharing = socialSharing;
        this.usersService = usersService;
        this.navCtrl = navCtrl;
        this.ngZone = ngZone;
        this.pet = "puppies";
        this.option1 = {
            loop: true,
            direction: "vertical",
            slidesPerView: 2,
        };
        this.userID = "";
        this.base_urls = "https://app.transusdrives.com/";
        this.top_rated_cars = [];
        //baseUrl: string = 'https://app.transusdrives.com/';
        this.baseUrl = "https://app.transusdrives.com/";
        this.page_number_all = 0;
        this.currencies_id = "";
        this.data1 = {
            "notification": {
                "shown": true,
                "payload": {
                    "body": "Your car rejected",
                    "additionalData": {
                        "type_id": 1,
                        "type_name": "Chat"
                    },
                    "notificationID": "notiid1234",
                    "actionbuttons": [],
                }
            }
        };
        this.ShowLoading = false;
        this.New_car_types = [];
        this.page_number = 0;
        this.pages_number = 4;
        this.pet = "cars";
        this.storage.set("base_urls", this.baseUrl);
        this.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        console.log('Data-----', this.data1.notification.payload.additionalData.type_name);
    }
    ngOnInit() { }
    onMoveHandler(event) {
        if (event.deltaX < 0) {
            this.reloadRentedCars(true, event);
        }
    }
    ionViewWillEnter() {
        this.restService.imageofuserprofile = localStorage.getItem('imageofuserprofile');
    }
    ionViewDidEnter() {
        const gesture = this.gestureCtrl.create({
            el: this.scroll.nativeElement,
            threshold: 15,
            gestureName: "my-gesture",
            onStart: (ev) => this.onMoveHandler(ev),
        }, true);
        gesture.enable();
        this.present();
        this.storage.get("user_details").then((user_details) => {
            this.usersDetail = user_details;
            if (user_details) {
                this.userDetail = user_details;
                var get_Setting = JSON.stringify({
                    requestType: "get_core_settings",
                });
                this.restService.CoreSettingOneSignal(get_Setting).subscribe((res) => {
                    this.oneDataSet = JSON.parse(res["_body"]);
                    this.oneSignal.startInit(this.oneDataSet.onesignal_app_key, this.oneDataSet.onesignal_server_id);
                    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
                    this.oneSignal.handleNotificationReceived().subscribe(() => { });
                    this.oneSignal.handleNotificationOpened().subscribe((data) => {
                        ///ali
                        if (data.notification.payload.additionalData.type_name == "Chat" || data.notification.payload.additionalData.type_name == "Chat Request") {
                            this.ngZone.run(() => this.router.navigate(['chat-list']));
                        }
                        if (data.notification.payload.additionalData.type_name == "Booking" || data.notification.payload.additionalData.type_name == "cancel_booking" || data.notification.payload.additionalData.type_name == "Reject_booking" ||
                            data.notification.payload.additionalData.type_name == "accept_booking" ||
                            data.notification.payload.additionalData.type_name == "Rider Offer") {
                            this.ngZone.run(() => this.router.navigate(['bookings']));
                        }
                        if (data.notification.payload.additionalData.type_name == "payment_done") {
                            this.ngZone.run(() => this.router.navigate(['earning']));
                        }
                        if (data.notification.payload.additionalData.type_name == "Car Approve" || data.notification.payload.additionalData.type_name == "Motor Approve" || data.notification.payload.additionalData.type_name == "Car Rejected" || data.notification.payload.additionalData.type_name == "Motor Rejected" || data.notification.payload.additionalData.type_name == "motor_added_successfuly") {
                            this.ngZone.run(() => this.router.navigate(['listed-car']));
                        }
                        console.log('data open notification-----', data);
                        alert('data==' + data);
                        alert('data==' + JSON.stringify(data));
                        alert('type name==' + data.notification.payload.additionalData.type_name);
                        //ali
                    });
                    this.oneSignal.endInit();
                    this.oneSignal.getIds().then((id) => {
                        this.oneSignalData = id;
                        this.OneSignal_userid = this.oneSignalData.userId;
                        this.oneSignal_pushToken = this.oneSignalData.pushToken;
                        var update = JSON.stringify({
                            requestType: "user",
                            email: this.userDetail.email,
                            oneSignalID: this.OneSignal_userid,
                        });
                        this.restService.upDateOnesignal(update).subscribe((res) => {
                            console.log(res, " update one signal");
                        }, (err) => {
                            console.log(err);
                        });
                    });
                }, (err) => {
                    console.log(err);
                });
                this.userID = user_details.users_id;
                this.currencies_id = user_details.currencies_id;
            }
        });
        this.storage.get("base_urls").then((base_urls) => {
            this.base_urls = base_urls;
            this.storage.get("user_details").then((user_details) => {
                this.storage.get("currency_symbol").then((currency_symbol) => {
                    this.currency_symbol = currency_symbol;
                    if (user_details) {
                        this.userID = user_details.users_id;
                        this.user_name = user_details.user_name;
                        this.currencyID = user_details.currencies_id;
                        this.homeData(false);
                    }
                    else {
                        this.userID = "";
                        this.getDropDownData();
                    }
                });
            });
        });
    }
    showCar() {
        this.getStartIndex(this.sliderStartBoolean);
    }
    getStartIndex(i) {
        if (this.sliderStartBoolean == undefined) {
            this.sliderStartBoolean = i;
            setTimeout(() => {
                document
                    .querySelector(".bg_active img")
                    .setAttribute("src", this.New_car_types[this.sliderStartBoolean].type_icon_img);
            }, 50);
        }
        else {
            document
                .querySelector(".bg_active img")
                .setAttribute("src", this.New_car_types[this.sliderStartBoolean].type_icon_img);
        }
        this.sliderStartBoolean = i;
        setTimeout(() => {
            document
                .querySelector(".bg_active img")
                .setAttribute("src", this.New_car_types[this.sliderStartBoolean].white_icon_img);
        }, 50);
    }
    getStartIndexClick(data, i) {
        this.sliderStartBoolean = i;
        if (this.sliderStartBoolean == undefined) {
            setTimeout(() => {
                document
                    .querySelector(".bg_active img")
                    .setAttribute("src", this.New_car_types[this.sliderStartBoolean].white_icon_img);
                // this.ifFound();
                this.filterFound(data.car_types_id);
            }, 50);
        }
        else {
            setTimeout(() => {
                document
                    .querySelector(".bg_active img")
                    .setAttribute("src", this.New_car_types[this.sliderStartBoolean].white_icon_img);
                this.filterFound(data.car_types_id);
            }, 50);
        }
    }
    getDropDownData() {
        var stringy = JSON.stringify({
            requestType: "currencies",
        });
        this.restService.getDdlData(stringy).subscribe((response) => {
            this.response = JSON.parse(response["_body"]);
            this.storage.set("currency_symbol", this.response.default_currency.symbol);
            localStorage.setItem("currencies_id", this.response.default_currency.currencies_id);
            this.currencyID = this.response.default_currency.currencies_id;
            this.homeData(false);
        }, (err) => { });
    }
    reloadRentedCars(isFirstLoad, event, refresher) {
        if (this.pages_number == 4) {
            this.present();
        }
        var stringy = JSON.stringify({
            requestType: "home_page",
            usersID: this.userID,
            currencyID: this.currencyID,
            limit: 4,
            offset: this.pages_number,
            readFilter: "",
        });
        this.restService.homeData(stringy).subscribe((response) => {
            this.New_car_types = [];
            if (this.pages_number == 4) {
                this.dismiss();
            }
            this.response = JSON.parse(response["_body"]);
            localStorage.setItem("shareText", this.response.text_to_share);
            this.New_car_types = this.response.car_types.sort((a, b) => a.name.toString().localeCompare(b.name));
            for (let i = 0; i < this.response.top_rated_cars.cars_list_result.length; i++) {
                this.top_rated_cars.push(this.response.top_rated_cars.cars_list_result[i]);
            }
            this.pages_number = this.pages_number + 4;
        }, (err) => {
            this.dismiss();
            // this.ShowLoading = false;
        });
    }
    homeData(isFirstLoad, event, refresher) {
        var stringy = JSON.stringify({
            requestType: "home_page",
            usersID: this.userID,
            currencyID: this.currencyID,
            limit: 4,
            offset: this.page_number,
            readFilter: "",
        });
        this.restService.homeData(stringy).subscribe((response) => {
            this.New_car_types = [];
            this.dismiss();
            this.response = JSON.parse(response["_body"]);
            localStorage.setItem("shareText", this.response.text_to_share);
            this.shareText = this.response.text_to_share;
            this.New_car_types = this.response.car_types;
            for (let i = 0; i < this.response.top_rated_cars.cars_list_result.length; i++) {
                this.top_rated_cars.push(this.response.top_rated_cars.cars_list_result[i]);
            }
            if (isFirstLoad) {
                event.target.complete();
            }
            this.page_number = this.page_number + 4;
            this.top_rated_motors =
                this.response.top_rated_motors.motors_list_result;
            var stringfy = JSON.stringify({
                requestType: "get_all",
                usersID: this.userID,
                limit: 4,
                offset: 0,
                readFilter: "Unread",
                timeZone: this.timeZone,
            });
            this.restService.notifications(stringfy).subscribe((response) => {
                this.response = JSON.parse(response["_body"]);
                this.dismiss();
                if (this.response.status != "NotFound") {
                    this.dismiss();
                    this.notifications = this.response.notifications;
                    if (this.notifications.length == 1) {
                        this.option1 = {
                            loop: false,
                            direction: "vertical",
                            slidesPerView: 1,
                        };
                    }
                    else {
                        this.option1 = {
                            loop: false,
                            direction: "vertical",
                            slidesPerView: 2,
                        };
                    }
                }
            }, (err) => {
                this.dismiss();
            });
        }, (err) => {
            this.dismiss();
        });
        var SearchingData = JSON.stringify({
            currencyID: this.currencyID,
            requestType: "all_veh",
            userID: this.userID,
            limit: 4,
            offset: this.page_number_all,
        });
        this.restService.allVehicles(SearchingData).subscribe((resSearching) => {
            this.responsess = JSON.parse(resSearching["_body"]);
            if (this.responsess.status == "NotFound") {
            }
            else if (this.responsess.status == "Found") {
            }
        });
    }
    ifFound() {
        var myData = JSON.stringify({
            cars_list_result: this.responsess.all_approved_cars,
        });
        this.restService.fromHomeToSearch = myData;
        this.restService.scroolFlag = true;
        this.navCtrl.navigateRoot(["/car-list"]);
    }
    compare(prop) {
        return function (a, b) {
            return -1; // sort stuff
        };
    }
    filterFound(id) {
        this.present();
        var data = JSON.stringify({
            currencyID: this.currencyID,
            requestType: "select_veh",
            carTypeID: id,
            usersID: this.userID,
        });
        this.restService.filterSearching(data).subscribe((res) => {
            this.filterCars = res;
            this.allser = JSON.parse(this.filterCars["_body"]);
            var myData = JSON.stringify({
                cars_list_result: this.allser.selected_approved_car,
            });
            this.dismiss();
            this.restService.fromHomeToSearch = myData;
            this.router.navigate(["/car-list"]);
        }, (err) => {
            this.dismiss();
            console.log(err);
        });
    }
    gotoDetail(data) {
        var myData = JSON.stringify({
            cars_list_result: data,
            redirect: "/",
        });
        this.router.navigate(["/car-detail"], {
            queryParams: {
                value: myData,
            },
        });
    }
    toggleMenu() {
        this.menuCtrl.toggle();
    }
    carDetail() {
        this.router.navigate(["/car-detail"]);
    }
    goToFilter() {
        this.navCtrl.navigateRoot(["/filters"]);
    }
    GotoList() {
        this.storage.get("user_details").then((user_details) => {
            if (user_details) {
                this.router.navigate(["/list-your-bike"]);
            }
            else {
                this.router.navigate(["/login"]);
            }
        });
    }
    goToCarList() {
        if (this.usersDetail) {
            this.router.navigate(["/listed-car"]);
        }
        else {
            this.router.navigate(["/login"]);
        }
    }
    viewMotorDetail(p) {
        var myData = JSON.stringify({
            motor_detail: p,
        });
        this.router.navigate(["/view-bike-detail"], {
            queryParams: {
                value: myData,
            },
        });
    }
    refer() {
        window.open("https://play.google.com/store/apps", "_system", "location=yes");
    }
    viewAllNotifications() {
        this.storage.get("user_details").then((user_details) => {
            if (user_details) {
                var readall = JSON.stringify({
                    requestType: "read_all",
                    usersID: user_details.users_id,
                });
                this.restService.notifications(readall).subscribe((res) => {
                    this.usersService.noty_length = 0;
                    this.navCtrl.navigateRoot(["/view-all-notifications"]);
                }, (err) => {
                    console.log(err);
                });
                this.router.navigate(["/view-all-notifications"]);
            }
            else {
                this.router.navigate(["/login"]);
            }
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
    presentTheloader() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadingPresent = yield this.loadingController.create({
                message: "Please wait...",
            });
            yield this.loadingPresent.present();
        });
    }
    dismissTheLoader() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loadingPresent.dismiss();
        });
    }
    dismiss() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loading.dismiss();
        });
    }
    accptOffer(p) {
        if (p.offer_id) {
            var stringy = JSON.stringify({
                requestType: "check_offer_by_id",
                customerID: this.userID,
                offerID: p.offer_id,
                currencyID: this.currencies_id,
            });
            this.restService.inquire_charges(stringy).subscribe((response) => {
                this.response = JSON.parse(response["_body"]);
                if (this.response.status == "NotFound") {
                }
                else if (this.response.status == "Found") {
                    this.offerPopup(this.response.offers, p.offer_id);
                }
            }, (err) => { });
        }
        if (p.type_id == "1" || p.type_id == "3") {
            var myData = JSON.stringify({
                userID: p.receiver_id,
                otherUserId: p.sender_id,
                user_name: p.sender_name,
                profile_img: p.sender_img_url,
            });
            this.router.navigate(["/chat-detail"], {
                queryParams: {
                    value: myData,
                },
            });
        }
        else if (p.type_id == "2") {
            this.router.navigate(["/booking-list"]);
        }
        else if (p.type_id == "5" ||
            p.type_id == "6" ||
            p.type_id == "7" ||
            p.type_id == "8" ||
            p.type_id == "13") {
            this.router.navigate(["/listed-car"]);
        }
        else if (p.type_id == "9") {
            this.router.navigate(["/bookings"]);
        }
        else if (p.type_id == "10") {
            var gerValue = "cancel";
            this.router.navigate(["/other-booking-list"], {
                queryParams: {
                    value: gerValue,
                },
            });
        }
        else if (p.type_id == "11") {
            var gerValue = "upcoming";
            this.router.navigate(["/booking-list"], {
                queryParams: {
                    value: gerValue,
                },
            });
        }
        else if (p.type_id == "12") {
            this.router.navigate(["/other-booking-list"]);
        }
        else if (p.type_id == "14") {
            var gerValue = "cancel";
            this.router.navigate(["/booking-list"], {
                queryParams: {
                    value: gerValue,
                },
            });
        }
    }
    offerPopup(p, offer_id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _accept_offer_accept_offer_page__WEBPACK_IMPORTED_MODULE_7__["AcceptOfferPage"],
                componentProps: {
                    data: p,
                    offer_id: offer_id,
                },
                translucent: true,
            });
            popover.onWillDismiss().then((data) => {
            });
            return yield popover.present();
        });
    }
    inviteFrnds() {
        var text = this.shareText;
        var options = {
            message: text +
                "\nAppstore -> https://apps.apple.com/ae/app/transus-transport-for-us-all/id1552863113\n\nPlaystore -> https://play.google.com/store/apps/details?id=com.transus.app",
        };
        this.socialSharing.shareWithOptions(options).then((res) => {
            console.log(res);
        }, (err) => {
            console.log(err);
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_8__["RestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"] },
    { type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_3__["OneSignal"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["GestureController"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__["SocialSharing"] },
    { type: _users_service__WEBPACK_IMPORTED_MODULE_9__["UsersService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
HomePage.propDecorators = {
    scroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ["scroll",] }]
};
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map