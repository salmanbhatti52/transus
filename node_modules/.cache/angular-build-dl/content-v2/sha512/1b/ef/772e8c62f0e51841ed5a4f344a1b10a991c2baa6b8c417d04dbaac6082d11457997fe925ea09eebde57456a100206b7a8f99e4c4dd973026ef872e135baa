(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rating-rating-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/rating/rating.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rating/rating.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [class.ios-headers]=\"plateformCheck == 'ios'\">\n  <ion-toolbar>\n    <ion-buttons  class=\"mf\" slot=\"start\">\n      <img src=\"assets/img/Menu.svg\" (click)=\"toggleMenu()\">\n    </ion-buttons>\n    <ion-title [class.globe_title]=\"plateformCheck == 'ios'\">User Reviews & Ratings</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"chevron-down-circle-outline\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher> \n  <ion-toolbar class=\"cstomHeader\" no-border-top>\n    <ion-segment [(ngModel)]=\"pet\">\n      <ion-segment-button style='padding: 7px 10px;' class=\"dark_p_color\" value=\"byYou\">\n        Reviews by you\n      </ion-segment-button>\n      <ion-segment-button style='padding: 7px 10px;' class=\"dark_p_color\" value=\"forYou\">\n        Reviews for you\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n  <div [ngSwitch]=\"pet\">\n    <ion-list *ngSwitchCase=\"'byYou'\">\n      <ng-container *ngIf=\"owns_reviews?.length == 0\">\n        <ion-row>\n          <ion-col class=\"ion-text-center\">\n            <h2>Data Not Found!</h2>\n          </ion-col>\n        </ion-row>\n      </ng-container>\n      <ion-row class=\"pdtop\" *ngFor=\"let review of owns_reviews\">\n        <ion-col size=\"2\" class=\"notify_image_main\">\n          <img src=\"{{profileImage}}\">\n        </ion-col>\n        <ion-col class=\"notify_content\" size=\"10\">\n          <ion-row>\n            <ion-col size=\"6\" class=\"ion-text-left\">\n              <p class=\"notfy_title\">{{review.user_name}}</p>\n            </ion-col>\n            <ion-col size=\"12\" class=\"ion-text-left notify_desc_main\">\n              <p class=\"notify_desc\">{{review.feedback}}</p>\n              <p class=\"star_list\" *ngIf=\"review.ratting_stars === '5'\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n              </p>\n              <p class=\"star_list\" *ngIf=\"review.ratting_stars === '4'\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n              </p>\n              <p class=\"star_list\" *ngIf=\"review.ratting_stars === '3'\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n              </p>\n              <p class=\"star_list\" *ngIf=\"review.ratting_stars === '2'\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n              </p>\n              <p class=\"star_list\" *ngIf=\"review.ratting_stars === '1'\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n              </p>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-list>\n    <ion-list *ngSwitchCase=\"'forYou'\">\n      <div class=\"pb5\">\n        <ion-row>\n          <ion-col>\n            <h4>User Reviews</h4>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"8\">\n            <ion-row class=\"progres_bar\">\n              <ion-col size=\"1\">\n                5\n              </ion-col>\n              <ion-col size=\"1\">\n                <img src=\"assets/img/Gray_star.svg\">\n              </ion-col>\n              <ion-col size=\"8\">\n                <ion-progress-bar *ngIf=\"fillUpFive == 0\" color=\"dark\" class=\"pb1\" value=\"{{fillUpFive}}\"></ion-progress-bar>\n                <ion-progress-bar *ngIf=\"fillUpFive > 0\" color=\"success\" class=\"pb1\" value=\"{{fillUpFive}}\"></ion-progress-bar>\n              </ion-col>\n              <ion-col size=\"2\">\n                {{count_stars_five}}\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"progres_bar\">\n              <ion-col size=\"1\">\n                4\n              </ion-col>\n              <ion-col size=\"1\">\n                <img src=\"assets/img/Gray_star.svg\">\n              </ion-col>\n              <ion-col size=\"8\">\n                <ion-progress-bar *ngIf=\"fillUpFour == 0\" color=\"dark\" class=\"pb1\" value=\"{{fillUpFour}}\"></ion-progress-bar>\n                <ion-progress-bar *ngIf=\"fillUpFour > 0\"  color=\"success\" class=\"pb1\" value=\"{{fillUpFour}}\"></ion-progress-bar>\n              </ion-col>\n              <ion-col size=\"2\">\n                {{count_stars_four}}\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"progres_bar\">\n              <ion-col size=\"1\">\n                3\n              </ion-col>\n              <ion-col size=\"1\">\n                <img src=\"assets/img/Gray_star.svg\">\n              </ion-col>\n              <ion-col size=\"8\">\n                <ion-progress-bar *ngIf=\"fillUpThree == 0\" color=\"dark\" class=\"pb1\" value=\"{{fillUpThree}}\"></ion-progress-bar>\n                <ion-progress-bar  *ngIf=\"fillUpThree > 0\" color=\"warning\" class=\"pb1\" value=\"{{fillUpThree}}\"></ion-progress-bar>\n              </ion-col>\n              <ion-col size=\"2\">\n                {{count_stars_three}}\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"progres_bar\">\n              <ion-col size=\"1\">\n                2\n              </ion-col>\n              <ion-col size=\"1\">\n                <img src=\"assets/img/Gray_star.svg\">\n              </ion-col>\n              <ion-col size=\"8\">\n                <ion-progress-bar *ngIf=\"fillUpTwo == 0\" color=\"dark\" class=\"pb1\" value=\"{{fillUpTwo}}\"></ion-progress-bar>\n                <ion-progress-bar  *ngIf=\"fillUpTwo > 0\" color=\"danger\" class=\"pb1\" value=\"{{fillUpTwo}}\"></ion-progress-bar>\n              </ion-col>\n              <ion-col size=\"2\">\n                {{count_stars_two}}\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"progres_bar\">\n              <ion-col size=\"1\">\n                1\n              </ion-col>\n              <ion-col size=\"1\">\n                <img src=\"assets/img/Gray_star.svg\">\n              </ion-col>\n              <ion-col size=\"8\">\n                <ion-progress-bar *ngIf=\"fillUpOne == 0\" color=\"dark\" class=\"pb1\" value=\"{{fillUpOne}}\"></ion-progress-bar>\n                <ion-progress-bar *ngIf=\"fillUpOne > 0\" color=\"danger\" class=\"pb1\" value=\"{{fillUpOne}}\"></ion-progress-bar>\n              </ion-col>\n              <ion-col size=\"2\">\n                {{count_stars_one}}\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-row>\n              <ion-col size=\"12\" class=\"ion-text-center\">\n                <img src=\"assets/img/Main_star.svg\">\n                <div class=\"pb2\">\n                  <h4>{{avg_total_rating}}</h4>\n                </div>\n                <p class=\"pb3\">Based on</p>\n                <p class=\"pb4\">{{count_total_ratings}} Reviews</p>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div class=\"pb7\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-label class=\"pb6 dark_p_color\"  [class.active_filter]=\"activeFilter == 'Helpful'\"  (click)=\"Reviews('Helpful')\">Most Helpful</ion-label>\n            <ion-label class=\"pb6 dark_p_color\" [class.active_filter]=\"activeFilter == 'Recent'\" (click)=\"Reviews('Recent')\">Recent</ion-label>\n            <ion-label class=\"pb6 dark_p_color\" [class.active_filter]=\"activeFilter == 'Critical'\" (click)=\"Reviews('Critical')\">Critical</ion-label>\n          </ion-col>\n        </ion-row>\n        <ng-container *ngIf=\"others_reviews?.length == 0\">\n          <ion-row>\n            <ion-col class=\"ion-text-center\">\n              <h2  class=\"dark_p_color\">Data Not Found!</h2>\n            </ion-col>\n          </ion-row>\n        </ng-container>\n        <ion-row *ngFor=\"let review of others_reviews; let i = index\">\n          <ion-col size=\"12\">\n            <p class=\"pb10\"><img src=\"assets/img/cot_Star.svg \"><span class=\"pb8\">{{review.ratting_stars}} out\n                5.0</span></p>\n            <p class=\"pb9\" class=\"feedback_{{review.ratings_id}}\">\n              {{review.feedback}} ..<span (click)=\"View('view_review',review.ratings_id,i)\">View More</span>\n            <p>\n          </ion-col>\n          <ion-col size=\"2\">\n            <img class=\"review_img\" [src]=\"review.profile_img_url\">\n          </ion-col>\n          <ion-col size=\"10\">\n            <h5 class=\"pb11\">{{review.user_name}}</h5>\n            <p class=\"pb12\">{{review.date_added}}</p>\n          </ion-col>\n          <ion-col class=\"lce\" size=\"12\">\n            <img src=\"assets/img/like.svg\" (click)=\"favourite('like_review',review.ratings_id,i)\"\n              *ngIf=\"review.is_liked ==0\">\n            <img src=\"assets/img/heart_red.svg\" (click)=\"favourite('unlike_review',review.ratings_id,i)\"\n              *ngIf=\"review.is_liked ==1\">\n            <span class=\"like_count_{{review.ratings_id}}\">{{review.count_hearts}}</span>\n\n            <img src=\"assets/img/eye.svg\"><span class=\"view_count_{{review.ratings_id}}\">{{review.count_views}}</span>\n          </ion-col>\n          <div class=\"pb13\"></div>\n        </ion-row>\n\n      </div>\n    </ion-list>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/image.pipe.ts":
/*!*******************************!*\
  !*** ./src/app/image.pipe.ts ***!
  \*******************************/
/*! exports provided: ImagePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePipe", function() { return ImagePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ImagePipe = class ImagePipe {
    transform(value, ...args) {
        console.log(value);
        return null;
    }
};
ImagePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'image'
    })
], ImagePipe);



/***/ }),

/***/ "./src/app/rating/rating-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/rating/rating-routing.module.ts ***!
  \*************************************************/
/*! exports provided: RatingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingPageRoutingModule", function() { return RatingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _rating_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rating.page */ "./src/app/rating/rating.page.ts");




const routes = [
    {
        path: '',
        component: _rating_page__WEBPACK_IMPORTED_MODULE_3__["RatingPage"]
    }
];
let RatingPageRoutingModule = class RatingPageRoutingModule {
};
RatingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RatingPageRoutingModule);



/***/ }),

/***/ "./src/app/rating/rating.module.ts":
/*!*****************************************!*\
  !*** ./src/app/rating/rating.module.ts ***!
  \*****************************************/
/*! exports provided: RatingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingPageModule", function() { return RatingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _rating_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rating-routing.module */ "./src/app/rating/rating-routing.module.ts");
/* harmony import */ var _rating_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rating.page */ "./src/app/rating/rating.page.ts");
/* harmony import */ var _image_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../image.pipe */ "./src/app/image.pipe.ts");








let RatingPageModule = class RatingPageModule {
};
RatingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _rating_routing_module__WEBPACK_IMPORTED_MODULE_5__["RatingPageRoutingModule"]
        ],
        declarations: [_rating_page__WEBPACK_IMPORTED_MODULE_6__["RatingPage"], _image_pipe__WEBPACK_IMPORTED_MODULE_7__["ImagePipe"]]
    })
], RatingPageModule);



/***/ }),

/***/ "./src/app/rating/rating.page.scss":
/*!*****************************************!*\
  !*** ./src/app/rating/rating.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  padding: 0em 0em 0 0;\n  --background: #c4932f;\n}\n\nion-toolbar.ios {\n  margin-top: 3px;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 0em 0em 0px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n  text-transform: capitalize;\n}\n\n.progres_bar {\n  color: #b0b0b0;\n  font-size: 14px;\n}\n\n.pb1 {\n  margin-top: 6px;\n}\n\n.pb2 {\n  position: absolute;\n  top: 13%;\n  left: 0px;\n  right: 0px;\n  text-align: center;\n  color: #fff;\n}\n\n.pb3 {\n  margin: 0px;\n}\n\n.pb4 {\n  margin: 0px;\n  font-size: 13px;\n  color: #1a6bbe;\n}\n\n.pb5 {\n  padding: 0em 1em;\n}\n\n.pb6 {\n  color: #464646;\n  background: #fff;\n  box-shadow: 1px 1px 5px 1px #00000014;\n  border-radius: 10px;\n  padding: 4px 16px;\n  font-size: 13px;\n  margin-right: 10px;\n}\n\n.pb7 {\n  padding: 0.5em 1em;\n  background: #fefefe;\n  border-top: 7px solid #f7f8fa;\n}\n\n.pb8 {\n  position: relative;\n  left: 3%;\n  top: -4px;\n}\n\n.pb9 {\n  font-size: 13px;\n  margin-top: 0px;\n}\n\n.pb10 {\n  margin-bottom: 5px;\n}\n\n.pb11 {\n  margin: 0px;\n  font-size: 14px;\n  margin-top: 7px;\n}\n\n.pb12 {\n  margin: 0px;\n  color: #b0b0b0;\n  font-size: 10px;\n}\n\n.pb13 {\n  border-bottom: 2px solid #d3d3d3;\n  width: 100%;\n  height: 2px;\n  margin: 0.7em 0em;\n}\n\n.lce span {\n  font-size: 14px;\n  position: relative;\n  margin-right: 10px;\n  margin-left: 6px;\n  top: -1px;\n}\n\n.mf {\n  /*  margin-left: 0.5em; */\n}\n\n.cstomHeader {\n  --background: #fff;\n}\n\n.segment-button-checked {\n  background: #f7f8fa;\n  color: #464646;\n}\n\n.bg_grey {\n  background: #f9f9f9;\n}\n\n.pd_bs {\n  padding: 0.7em 1em;\n}\n\n.lambo h4 {\n  margin: 0px;\n  margin-bottom: 3px;\n}\n\n.trip_dates {\n  font-size: 10px;\n  padding-top: 2.4em;\n  padding-left: 1.3em;\n}\n\n.trip_dates p {\n  margin: 0px;\n  margin-top: 6px;\n}\n\n.blue {\n  color: #1a6bbe;\n}\n\n.primary {\n  color: #c4932f;\n}\n\n.trip_end_date {\n  font-size: 10px;\n  padding-top: 4.2em;\n  padding-left: 1.3em;\n}\n\n.trip_end_date p {\n  margin: 0px;\n  margin-top: 6px;\n}\n\n.star img:first-child {\n  margin-left: 0px !important;\n}\n\n.star img {\n  margin-left: 4px;\n}\n\n.give_rating {\n  background: #c4932f;\n  color: #fff;\n  padding: 0.7em;\n  border-radius: 25px;\n  width: 100%;\n  text-align: center;\n  margin: 0px;\n  margin-top: 10px !important;\n}\n\n.danger {\n  background: #d93a3a;\n  color: #fff;\n  padding: 0.7em;\n  border-radius: 25px;\n  width: 100%;\n  text-align: center;\n  margin: 0px;\n  margin-top: 10px !important;\n}\n\n.btn_fixed {\n  position: fixed;\n  bottom: 1em;\n  left: 3em;\n  right: 3em;\n  text-align: center;\n}\n\n.notify_image_main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.notify_image_main img {\n  border-radius: 50%;\n}\n\n.review_img {\n  border-radius: 50%;\n}\n\n.notify_content p {\n  margin: 0px;\n}\n\n.notify_desc {\n  font-size: 10px;\n  color: #0091ea;\n}\n\n.notify_desc_main {\n  padding-top: 0px;\n}\n\n.notfy_title {\n  color: #1a6bbe;\n  font-size: 10px;\n}\n\n.notify_time {\n  color: #c4932f;\n  font-size: 10px;\n}\n\n.notify_bg {\n  background: #f9f9f9;\n}\n\n.pdtop {\n  padding: 5px 0em;\n}\n\n.star_list img {\n  margin-right: 5px;\n  margin-top: 5px;\n}\n\n.active_filter {\n  border: 1px solid #c4932f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmF0aW5nL3JhdGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLHNCQUFBO0lBQ0EscUJBQUE7RUFDTjtBQUNGOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0FBR0o7O0FBREE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUlKOztBQUZBO0VBQ0ksV0FBQTtBQUtKOztBQUhBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBTUo7O0FBSkE7RUFDSSxnQkFBQTtBQU9KOztBQUxBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBUUo7O0FBTkE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFTSjs7QUFQQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFVSjs7QUFSQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBV0o7O0FBVEE7RUFDSSxrQkFBQTtBQVlKOztBQVZBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBYUo7O0FBWEE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFjSjs7QUFaQTtFQUNJLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQWVKOztBQWJBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFnQko7O0FBYkE7RUFDSSx5QkFBQTtBQWdCSjs7QUFkQTtFQUNJLGtCQUFBO0FBaUJKOztBQWZBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FBa0JKOztBQWhCQTtFQUNJLG1CQUFBO0FBbUJKOztBQWpCQTtFQUNJLGtCQUFBO0FBb0JKOztBQWxCQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQXFCSjs7QUFuQkE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQXNCSjs7QUFwQkE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQXVCSjs7QUFyQkE7RUFDSSxjQUFBO0FBd0JKOztBQXRCQTtFQUNJLGNBQUE7QUF5Qko7O0FBdkJBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUEwQko7O0FBeEJBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUEyQko7O0FBekJBO0VBQ0ksMkJBQUE7QUE0Qko7O0FBMUJBO0VBQ0ksZ0JBQUE7QUE2Qko7O0FBM0JBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FBOEJKOztBQTVCQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQStCSjs7QUE3QkE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFnQ0o7O0FBN0JBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFnQ0o7O0FBOUJBO0VBQ0ksa0JBQUE7QUFpQ0o7O0FBL0JBO0VBQ0ksa0JBQUE7QUFrQ0o7O0FBaENBO0VBQ0ksV0FBQTtBQW1DSjs7QUFqQ0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQW9DSjs7QUFsQ0E7RUFDSSxnQkFBQTtBQXFDSjs7QUFuQ0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQXNDSjs7QUFwQ0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQXVDSjs7QUFyQ0E7RUFDSSxtQkFBQTtBQXdDSjs7QUF0Q0E7RUFDSSxnQkFBQTtBQXlDSjs7QUF2Q0E7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUEwQ0o7O0FBeENBO0VBQ0kseUJBQUE7QUEyQ0oiLCJmaWxlIjoic3JjL2FwcC9yYXRpbmcvcmF0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICBwYWRkaW5nOiAwZW0gMGVtIDAgMDtcbiAgICAtLWJhY2tncm91bmQ6ICNjNDkzMmY7XG59XG5cbmlvbi10b29sYmFyLmlvcyB7ICBcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLWhlaWdodCA6IDgwMHB4KSB7XG4gICAgaW9uLXRvb2xiYXIge1xuICAgICAgICBwYWRkaW5nOiAwZW0gMGVtIDBweCAwO1xuICAgICAgICAtLWJhY2tncm91bmQ6ICNjNDkzMmY7XG4gICAgfVxufVxuXG5pb24tdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDI0cHg7XG59XG5pb24tYnV0dG9uIHtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxLjVlbTtcbiAgICAtLXBhZGRpbmctdG9wOiAxLjVlbTtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4ucHJvZ3Jlc19iYXIge1xuICAgIGNvbG9yOiAjYjBiMGIwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5wYjEge1xuICAgIG1hcmdpbi10b3A6IDZweDtcbn1cbi5wYjIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEzJTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG59XG4ucGIzIHtcbiAgICBtYXJnaW46IDBweDtcbn1cbi5wYjQge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogIzFhNmJiZTtcbn1cbi5wYjUge1xuICAgIHBhZGRpbmc6IDBlbSAxZW07XG59XG4ucGI2IHtcbiAgICBjb2xvcjogIzQ2NDY0NjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IDFweCAjMDAwMDAwMTQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiA0cHggMTZweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnBiNyB7XG4gICAgcGFkZGluZzogMC41ZW0gMWVtO1xuICAgIGJhY2tncm91bmQ6ICNmZWZlZmU7XG4gICAgYm9yZGVyLXRvcDogN3B4IHNvbGlkICNmN2Y4ZmE7XG59XG4ucGI4IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMyU7XG4gICAgdG9wOiAtNHB4O1xufVxuLnBiOSB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG1hcmdpbi10b3A6IDBweDtcbn1cbi5wYjEwIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ucGIxMSB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi10b3A6IDdweDtcbn1cbi5wYjEyIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBjb2xvcjogI2IwYjBiMDtcbiAgICBmb250LXNpemU6IDEwcHg7XG59XG4ucGIxMyB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkM2QzZDM7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgbWFyZ2luOiAwLjdlbSAwZW07XG59XG4ubGNlIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgdG9wOiAtMXB4O1xufVxuXG4ubWYge1xuICAgIC8qICBtYXJnaW4tbGVmdDogMC41ZW07ICovXG59XG4uY3N0b21IZWFkZXIge1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjdmOGZhO1xuICAgIGNvbG9yOiAjNDY0NjQ2O1xufVxuLmJnX2dyZXkge1xuICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG59XG4ucGRfYnMge1xuICAgIHBhZGRpbmc6IDAuN2VtIDFlbTtcbn1cbi5sYW1ibyBoNCB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xufVxuLnRyaXBfZGF0ZXMge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBwYWRkaW5nLXRvcDogMi40ZW07XG4gICAgcGFkZGluZy1sZWZ0OiAxLjNlbTtcbn1cbi50cmlwX2RhdGVzIHAge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG1hcmdpbi10b3A6IDZweDtcbn1cbi5ibHVlIHtcbiAgICBjb2xvcjogIzFhNmJiZTtcbn1cbi5wcmltYXJ5IHtcbiAgICBjb2xvcjogI2M0OTMyZjtcbn1cbi50cmlwX2VuZF9kYXRlIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDQuMmVtO1xuICAgIHBhZGRpbmctbGVmdDogMS4zZW07XG59XG4udHJpcF9lbmRfZGF0ZSBwIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG59XG4uc3RhciBpbWc6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbn1cbi5zdGFyIGltZyB7XG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cbi5naXZlX3JhdGluZyB7XG4gICAgYmFja2dyb3VuZDogI2M0OTMyZjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAwLjdlbTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG4uZGFuZ2VyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZDkzYTNhO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDAuN2VtO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cbi5idG5fZml4ZWQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDFlbTtcbiAgICBsZWZ0OiAzZW07XG4gICAgcmlnaHQ6IDNlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ub3RpZnlfaW1hZ2VfbWFpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm5vdGlmeV9pbWFnZV9tYWluIGltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnJldmlld19pbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5ub3RpZnlfY29udGVudCBwIHtcbiAgICBtYXJnaW46IDBweDtcbn1cbi5ub3RpZnlfZGVzYyB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiAjMDA5MWVhO1xufVxuLm5vdGlmeV9kZXNjX21haW4ge1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG59XG4ubm90ZnlfdGl0bGUge1xuICAgIGNvbG9yOiAjMWE2YmJlO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5ub3RpZnlfdGltZSB7XG4gICAgY29sb3I6ICNjNDkzMmY7XG4gICAgZm9udC1zaXplOiAxMHB4O1xufVxuLm5vdGlmeV9iZyB7XG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbn1cbi5wZHRvcCB7XG4gICAgcGFkZGluZzogNXB4IDBlbTtcbn1cbi5zdGFyX2xpc3QgaW1nIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uYWN0aXZlX2ZpbHRlciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M0OTMyZjtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/rating/rating.page.ts":
/*!***************************************!*\
  !*** ./src/app/rating/rating.page.ts ***!
  \***************************************/
/*! exports provided: RatingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingPage", function() { return RatingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");






let RatingPage = class RatingPage {
    constructor(restService, storage, router, menuCtrl, plateform, loadingController) {
        this.restService = restService;
        this.storage = storage;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.plateform = plateform;
        this.loadingController = loadingController;
        this.pet = "puppies";
        this.count_total_ratings = 0;
        this.avg_total_rating = 0;
        this.fillUpOne = 0;
        this.fillUpTwo = 0;
        this.fillUpThree = 0;
        this.fillUpFour = 0;
        this.fillUpFive = 0;
        this.pet = 'byYou';
        //console.log(Number((6.688689).toFixed(1)));
    }
    ngOnInit() {
        this.storage.get('base_urls').then((base_url) => {
            this.profile_img_url = base_url;
        });
        if (this.plateform.is('ios')) {
            this.plateformCheck = "ios";
        }
        else {
            this.plateformCheck = "android";
        }
        this.storage.get('user_details').then((user_details) => {
            console.log(user_details);
            this.userID = user_details.users_id;
            this.giveRating();
        });
    }
    toggleMenu() {
        this.menuCtrl.toggle();
    }
    doRefresh(event) {
        console.log('Begin async operation');
        this.giveRating(event);
    }
    BookNow() {
        this.router.navigate(['/car-booking']);
    }
    giveRating(event) {
        var stringy = JSON.stringify({
            "requestType": "get_reviews",
            "usersID": this.userID
        });
        this.present();
        console.log(stringy);
        this.restService.reviews(stringy).subscribe(response => {
            this.response = JSON.parse(response['_body']);
            this.dismiss();
            if (event) {
                event.target.complete();
            }
            this.others_reviews = this.response.others_reviews;
            console.log(this.response.review_for_you_stats, "this.others_reviewsthis.others_reviewsthis.others_reviews");
            this.owns_reviews = this.response.owns_reviews;
            this.critical_ratings_others = this.response.critical_ratings_others;
            if (this.response.review_for_you_stats) {
                this.each_row = this.response.review_for_you_stats.each_row;
                this.count_total_ratings = this.response.review_for_you_stats.count_total_ratings;
                this.avg_total_rating = this.response.review_for_you_stats.average;
                this.avg_total_rating = (this.avg_total_rating).toFixed(1);
                this.rating_star_one = this.each_row[0].ratting_stars;
                this.count_stars_one = this.each_row[0].count_stars;
                this.fillUpOne = (this.each_row[0].count_stars * 100) / this.count_total_ratings;
                this.fillUpOne = Number((this.fillUpOne / 10).toFixed(1));
                this.rating_star_two = this.each_row[1].ratting_stars;
                this.count_stars_two = this.each_row[1].count_stars;
                this.fillUpTwo = (this.each_row[1].count_stars * 100) / this.count_total_ratings;
                this.fillUpTwo = Number((this.fillUpTwo / 10).toFixed(1));
                this.rating_star_three = this.each_row[2].ratting_stars;
                this.count_stars_three = this.each_row[2].count_stars;
                this.fillUpThree = (this.each_row[2].count_stars * 100) / this.count_total_ratings;
                this.fillUpThree = Number((this.fillUpThree / 10).toFixed(1));
                this.rating_star_four = this.each_row[3].ratting_stars;
                this.count_stars_four = this.each_row[3].count_stars;
                this.fillUpFour = (this.each_row[3].count_stars * 100) / this.count_total_ratings;
                this.fillUpFour = Number((this.fillUpFour / 10).toFixed(1));
                this.rating_star_five = this.each_row[4].ratting_stars;
                this.count_stars_five = this.each_row[4].count_stars;
                this.fillUpFive = (this.each_row[4].count_stars * 100) / this.count_total_ratings;
                this.fillUpFive = Number((this.fillUpFive / 10).toFixed(1));
            }
            this.storage.get('profile_img_url').then((profile_img_url) => {
                this.storage.get('base_urls').then((base_url) => {
                    this.profileImage = base_url + '' + profile_img_url;
                    console.log(this.profileImage);
                });
            });
        }, err => {
        });
    }
    favourite(request, ratingsID, i) {
        if (this.userID) {
            console.log(ratingsID);
            var stringy = JSON.stringify({
                "requestType": request,
                "ratingsID": ratingsID,
                "usersID": this.userID
            });
            console.log(stringy);
            this.restService.reviews(stringy).subscribe(response => {
                this.favResponse = JSON.parse(response['_body']);
                console.log(this.favResponse.status);
                if (this.favResponse.status == 'error') {
                }
                else if (this.favResponse.status == 'success') {
                    if (request == 'like_review') {
                        var count = document.querySelector('.like_count_' + ratingsID).textContent;
                        var newCount = parseInt(count) + 1;
                        document.querySelector('.like_count_' + ratingsID).textContent = newCount.toString();
                        this.others_reviews[i].is_liked = 1;
                        this.others_reviews = this.others_reviews;
                    }
                    else if (request == 'unlike_review') {
                        var count = document.querySelector('.like_count_' + ratingsID).textContent;
                        var newCount = parseInt(count) - 1;
                        document.querySelector('.like_count_' + ratingsID).textContent = newCount.toString();
                        this.others_reviews[i].is_liked = 0;
                        this.others_reviews = this.others_reviews;
                    }
                }
            }, err => {
            });
        }
        else {
            this.router.navigate(['/login']);
        }
    }
    View(request, ratingsID, feedback) {
        if (this.userID) {
            console.log(feedback);
            var stringy = JSON.stringify({
                "requestType": request,
                "ratingsID": ratingsID,
                "usersID": this.userID
            });
            console.log(stringy);
            this.restService.reviews(stringy).subscribe(response => {
                this.viewResponse = JSON.parse(response['_body']);
                console.log(this.viewResponse.status);
                if (this.viewResponse.status == 'error') {
                }
                else if (this.viewResponse.status == 'success') {
                    if (request == 'view_review') {
                        document.querySelector('.feedback_' + ratingsID).textContent = this.others_reviews[feedback].feedback;
                        var count = document.querySelector('.view_count_' + ratingsID).textContent;
                        var newCount = parseInt(count) + 1;
                        document.querySelector('.view_count_' + ratingsID).textContent = newCount.toString();
                    }
                }
            }, err => {
            });
        }
        else {
            this.router.navigate(['/login']);
        }
    }
    Reviews(title) {
        if (title == 'Helpful') {
            this.activeFilter = "Helpful";
            this.others_reviews = this.response.others_reviews;
        }
        else if (title == 'Recent') {
            this.activeFilter = "Recent";
            this.others_reviews = this.response.others_reviews;
        }
        else if (title == 'Critical') {
            this.activeFilter = "Critical";
            console.log(this.response.critical_ratings_others);
            this.others_reviews = this.response.critical_ratings_others;
            // alert(title);
        }
    }
    selectIndex(i) {
        this.sliderStartBoolean = i;
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
};
RatingPage.ctorParameters = () => [
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
RatingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rating',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./rating.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/rating/rating.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./rating.page.scss */ "./src/app/rating/rating.page.scss")).default]
    })
], RatingPage);



/***/ })

}]);
//# sourceMappingURL=rating-rating-module-es2015.js.map