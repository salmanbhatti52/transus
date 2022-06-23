(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reviews-or-rating-reviews-or-rating-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reviews-or-rating/reviews-or-rating.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reviews-or-rating/reviews-or-rating.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [class.ios-headers]=\"plateformCheck == 'ios'\">\n  <ion-toolbar>\n    <ion-buttons [class.back_button]=\"plateformCheck == 'ios'\" slot=\"start\">\n      <img src=\"assets/img/Arrow.svg\" (click)=\"back()\">\n    </ion-buttons>\n    <ion-title [class.globe_title]=\"plateformCheck == 'ios'\">User Reviews & Ratings</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n   \n\n  <div>\n    <ion-list  >\n      <ng-container *ngIf=\"owns_reviews?.length == 0\">\n        <ion-row>\n          <ion-col class=\"ion-text-center\">\n            <h2>Data Not Found!</h2>\n          </ion-col>\n        </ion-row>\n      </ng-container>\n      <ion-row class=\"pdtop\" *ngFor=\"let review of owns_reviews\">\n        <ion-col size=\"2\" class=\"notify_image_main\">\n          <!-- <img src=\"{{profileImage}}\"> -->\n          \n          <img src=\"{{base_url}}{{review.profile_img_url}} \">\n\n        </ion-col>\n        <ion-col class=\"notify_content\" size=\"10\">\n          <ion-row>\n            <ion-col size=\"6\" class=\"ion-text-left\">\n              <p class=\"notfy_title\">{{review.user_name}}</p>\n            </ion-col>\n            <ion-col size=\"12\" class=\"ion-text-left notify_desc_main\">\n              <p class=\"notify_desc\">{{review.feedback}}</p>\n              <p class=\"star_list\" *ngIf=\"review.ratting_stars === '5'\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n              </p>\n              <p class=\"star_list\" *ngIf=\"review.ratting_stars === '4'\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n              </p>\n              <p class=\"star_list\" *ngIf=\"review.ratting_stars === '3'\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n              </p>\n              <p class=\"star_list\" *ngIf=\"review.ratting_stars === '2'\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n              </p>\n              <p class=\"star_list\" *ngIf=\"review.ratting_stars === '1'\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n              </p>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-list>\n\n\n\n\n    <!-- <ion-list *ngSwitchCase=\"'forYou'\">\n      <div class=\"pb5\">\n        <ion-row>\n          <ion-col>\n            <h4>User Reviews</h4>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"8\">\n            <ion-row class=\"progres_bar\">\n              <ion-col size=\"1\">\n                5\n              </ion-col>\n              <ion-col size=\"1\">\n                <img src=\"assets/img/Gray_star.svg\">\n              </ion-col>\n              <ion-col size=\"8\">\n                <ion-progress-bar *ngIf=\"fillUpFive == 0\" color=\"dark\" class=\"pb1\" value=\"{{fillUpFive}}\"></ion-progress-bar>\n                <ion-progress-bar *ngIf=\"fillUpFive > 0\" color=\"success\" class=\"pb1\" value=\"{{fillUpFive}}\"></ion-progress-bar>\n              </ion-col>\n              <ion-col size=\"2\">\n                {{count_stars_five}}\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"progres_bar\">\n              <ion-col size=\"1\">\n                4\n              </ion-col>\n              <ion-col size=\"1\">\n                <img src=\"assets/img/Gray_star.svg\">\n              </ion-col>\n              <ion-col size=\"8\">\n                <ion-progress-bar *ngIf=\"fillUpFour == 0\" color=\"dark\" class=\"pb1\" value=\"{{fillUpFour}}\"></ion-progress-bar>\n                <ion-progress-bar *ngIf=\"fillUpFour > 0\"  color=\"success\" class=\"pb1\" value=\"{{fillUpFour}}\"></ion-progress-bar>\n              </ion-col>\n              <ion-col size=\"2\">\n                {{count_stars_four}}\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"progres_bar\">\n              <ion-col size=\"1\">\n                3\n              </ion-col>\n              <ion-col size=\"1\">\n                <img src=\"assets/img/Gray_star.svg\">\n              </ion-col>\n              <ion-col size=\"8\">\n                <ion-progress-bar *ngIf=\"fillUpThree == 0\" color=\"dark\" class=\"pb1\" value=\"{{fillUpThree}}\"></ion-progress-bar>\n                <ion-progress-bar  *ngIf=\"fillUpThree > 0\" color=\"warning\" class=\"pb1\" value=\"{{fillUpThree}}\"></ion-progress-bar>\n              </ion-col>\n              <ion-col size=\"2\">\n                {{count_stars_three}}\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"progres_bar\">\n              <ion-col size=\"1\">\n                2\n              </ion-col>\n              <ion-col size=\"1\">\n                <img src=\"assets/img/Gray_star.svg\">\n              </ion-col>\n              <ion-col size=\"8\">\n                <ion-progress-bar *ngIf=\"fillUpTwo == 0\" color=\"dark\" class=\"pb1\" value=\"{{fillUpTwo}}\"></ion-progress-bar>\n                <ion-progress-bar  *ngIf=\"fillUpTwo > 0\" color=\"danger\" class=\"pb1\" value=\"{{fillUpTwo}}\"></ion-progress-bar>\n              </ion-col>\n              <ion-col size=\"2\">\n                {{count_stars_two}}\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"progres_bar\">\n              <ion-col size=\"1\">\n                1\n              </ion-col>\n              <ion-col size=\"1\">\n                <img src=\"assets/img/Gray_star.svg\">\n              </ion-col>\n              <ion-col size=\"8\">\n                <ion-progress-bar *ngIf=\"fillUpOne == 0\" color=\"dark\" class=\"pb1\" value=\"{{fillUpOne}}\"></ion-progress-bar>\n                <ion-progress-bar *ngIf=\"fillUpOne > 0\" color=\"danger\" class=\"pb1\" value=\"{{fillUpOne}}\"></ion-progress-bar>\n              </ion-col>\n              <ion-col size=\"2\">\n                {{count_stars_one}}\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-row>\n              <ion-col size=\"12\" class=\"ion-text-center\">\n                <img src=\"assets/img/Main_star.svg\">\n                <div class=\"pb2\">\n                  <h4>{{avg_total_rating}}</h4>\n                </div>\n                <p class=\"pb3\">Based on</p>\n                <p class=\"pb4\">{{count_total_ratings}} Reviews</p>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div class=\"pb7\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-label class=\"pb6 dark_p_color\" (click)=\"Reviews('Helpful')\">Most Helpful</ion-label>\n            <ion-label class=\"pb6 dark_p_color\" (click)=\"Reviews('Recent')\">Recent</ion-label>\n            <ion-label class=\"pb6 dark_p_color\" (click)=\"Reviews('Critical')\">Critical</ion-label>\n          </ion-col>\n        </ion-row>\n        <ng-container *ngIf=\"others_reviews?.length == 0\">\n          <ion-row>\n            <ion-col class=\"ion-text-center\">\n              <h2  class=\"dark_p_color\">Data Not Found!</h2>\n            </ion-col>\n          </ion-row>\n        </ng-container>\n        <ion-row *ngFor=\"let review of others_reviews; let i = index\">\n          <ion-col size=\"12\">\n            <p class=\"pb10\"><img src=\"assets/img/cot_Star.svg \"><span class=\"pb8\">{{review.ratting_stars}} out\n                5.0</span></p>\n            <p class=\"pb9\" class=\"feedback_{{review.ratings_id}}\">\n              {{review.feedback}} ..<span (click)=\"View('view_review',review.ratings_id,i)\">View More</span>\n            <p>\n          </ion-col>\n          <ion-col size=\"2\">\n            <img src=\"assets/img/Profile.svg\">\n          </ion-col>\n          <ion-col size=\"10\">\n            <h5 class=\"pb11\">{{review.user_name}}</h5>\n            <p class=\"pb12\">Nov 10,2020</p>\n          </ion-col>\n          <ion-col class=\"lce\" size=\"12\">\n            <img src=\"assets/img/like.svg\" (click)=\"favourite('like_review',review.ratings_id,i)\"\n              *ngIf=\"review.is_liked ==0\">\n            <img src=\"assets/img/heart_red.svg\" (click)=\"favourite('unlike_review',review.ratings_id,i)\"\n              *ngIf=\"review.is_liked ==1\">\n            <span class=\"like_count_{{review.ratings_id}}\">{{review.count_hearts}}</span>\n\n            <img src=\"assets/img/eye.svg\"><span class=\"view_count_{{review.ratings_id}}\">{{review.count_views}}</span>\n          </ion-col>\n          <div class=\"pb13\"></div>\n        </ion-row>\n\n      </div>\n    </ion-list> -->\n\n\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/reviews-or-rating/reviews-or-rating-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/reviews-or-rating/reviews-or-rating-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ReviewsOrRatingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsOrRatingPageRoutingModule", function() { return ReviewsOrRatingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _reviews_or_rating_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reviews-or-rating.page */ "./src/app/reviews-or-rating/reviews-or-rating.page.ts");




const routes = [
    {
        path: '',
        component: _reviews_or_rating_page__WEBPACK_IMPORTED_MODULE_3__["ReviewsOrRatingPage"]
    }
];
let ReviewsOrRatingPageRoutingModule = class ReviewsOrRatingPageRoutingModule {
};
ReviewsOrRatingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReviewsOrRatingPageRoutingModule);



/***/ }),

/***/ "./src/app/reviews-or-rating/reviews-or-rating.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/reviews-or-rating/reviews-or-rating.module.ts ***!
  \***************************************************************/
/*! exports provided: ReviewsOrRatingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsOrRatingPageModule", function() { return ReviewsOrRatingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _reviews_or_rating_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reviews-or-rating-routing.module */ "./src/app/reviews-or-rating/reviews-or-rating-routing.module.ts");
/* harmony import */ var _reviews_or_rating_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reviews-or-rating.page */ "./src/app/reviews-or-rating/reviews-or-rating.page.ts");







let ReviewsOrRatingPageModule = class ReviewsOrRatingPageModule {
};
ReviewsOrRatingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _reviews_or_rating_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReviewsOrRatingPageRoutingModule"]
        ],
        declarations: [_reviews_or_rating_page__WEBPACK_IMPORTED_MODULE_6__["ReviewsOrRatingPage"]]
    })
], ReviewsOrRatingPageModule);



/***/ }),

/***/ "./src/app/reviews-or-rating/reviews-or-rating.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/reviews-or-rating/reviews-or-rating.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3em 0.1em 8px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n  text-transform: capitalize;\n}\n\n.progres_bar {\n  color: #b0b0b0;\n  font-size: 14px;\n}\n\n.pb1 {\n  margin-top: 6px;\n}\n\n.pb2 {\n  position: absolute;\n  top: 13%;\n  left: 0px;\n  right: 0px;\n  text-align: center;\n  color: #fff;\n}\n\n.pb3 {\n  margin: 0px;\n}\n\n.pb4 {\n  margin: 0px;\n  font-size: 13px;\n  color: #1A6BBE;\n}\n\n.pb5 {\n  padding: 0em 1em;\n}\n\n.pb6 {\n  color: #464646;\n  background: #fff;\n  box-shadow: 1px 1px 5px 1px #00000014;\n  border-radius: 10px;\n  padding: 4px 16px;\n  font-size: 13px;\n  margin-right: 10px;\n}\n\n.pb7 {\n  padding: 0.5em 1em;\n  background: #fefefe;\n  border-top: 7px solid #F7F8FA;\n}\n\n.pb8 {\n  position: relative;\n  left: 3%;\n  top: -4px;\n}\n\n.pb9 {\n  font-size: 13px;\n  margin-top: 0px;\n}\n\n.pb10 {\n  margin-bottom: 5px;\n}\n\n.pb11 {\n  margin: 0px;\n  font-size: 14px;\n  margin-top: 7px;\n}\n\n.pb12 {\n  margin: 0px;\n  color: #B0B0B0;\n  font-size: 10px;\n}\n\n.pb13 {\n  border-bottom: 2px solid #D3D3D3;\n  width: 100%;\n  height: 2px;\n  margin: 0.7em 0em;\n}\n\n.lce span {\n  font-size: 14px;\n  position: relative;\n  margin-right: 10px;\n  margin-left: 6px;\n  top: -1px;\n}\n\n.mf {\n  margin-left: 0.5em;\n}\n\n.cstomHeader {\n  --background: #fff;\n}\n\n.segment-button-checked {\n  background: #F7F8FA;\n  color: #464646;\n}\n\n.bg_grey {\n  background: #F9F9F9;\n}\n\n.pd_bs {\n  padding: 0.7em 1em;\n}\n\n.lambo h4 {\n  margin: 0px;\n  margin-bottom: 3px;\n}\n\n.trip_dates {\n  font-size: 10px;\n  padding-top: 2.4em;\n  padding-left: 1.3em;\n}\n\n.trip_dates p {\n  margin: 0px;\n  margin-top: 6px;\n}\n\n.blue {\n  color: #1A6BBE;\n}\n\n.primary {\n  color: #C4932F;\n}\n\n.trip_end_date {\n  font-size: 10px;\n  padding-top: 4.2em;\n  padding-left: 1.3em;\n}\n\n.trip_end_date p {\n  margin: 0px;\n  margin-top: 6px;\n}\n\n.star img:first-child {\n  margin-left: 0px !important;\n}\n\n.star img {\n  margin-left: 4px;\n}\n\n.give_rating {\n  background: #C4932F;\n  color: #fff;\n  padding: 0.7em;\n  border-radius: 25px;\n  width: 100%;\n  text-align: center;\n  margin: 0px;\n  margin-top: 10px !important;\n}\n\n.danger {\n  background: #D93A3A;\n  color: #fff;\n  padding: 0.7em;\n  border-radius: 25px;\n  width: 100%;\n  text-align: center;\n  margin: 0px;\n  margin-top: 10px !important;\n}\n\n.btn_fixed {\n  position: fixed;\n  bottom: 1em;\n  left: 3em;\n  right: 3em;\n  text-align: center;\n}\n\n.notify_image_main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.notify_image_main img {\n  border-radius: 50%;\n}\n\n.notify_content p {\n  margin: 0px;\n}\n\n.notify_desc {\n  font-size: 10px;\n  color: #0091EA;\n}\n\n.notify_desc_main {\n  padding-top: 0px;\n}\n\n.notfy_title {\n  color: #1A6BBE;\n  font-size: 10px;\n}\n\n.notify_time {\n  color: #C4932F;\n  font-size: 10px;\n}\n\n.notify_bg {\n  background: #F9F9F9;\n}\n\n.pdtop {\n  padding: 10px 20px 0px 20px;\n}\n\n.star_list img {\n  margin-right: 5px;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV2aWV3cy1vci1yYXRpbmcvcmV2aWV3cy1vci1yYXRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSx3QkFBQTtJQUNBLHFCQUFBO0VBQ047QUFDRjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFBSjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUFBO0VBQ0ksZUFBQTtBQUdKOztBQURBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFJSjs7QUFGQTtFQUNJLFdBQUE7QUFLSjs7QUFIQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQU1KOztBQUpBO0VBQ0ksZ0JBQUE7QUFPSjs7QUFMQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQVFKOztBQU5BO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBU0o7O0FBUEE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBVUo7O0FBUkE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQVdKOztBQVRBO0VBQ0ksa0JBQUE7QUFZSjs7QUFWQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQWFKOztBQVhBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBY0o7O0FBWkE7RUFDSSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFlSjs7QUFiQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBZ0JKOztBQWJBO0VBQ0ksa0JBQUE7QUFnQko7O0FBZEE7RUFDSSxrQkFBQTtBQWlCSjs7QUFmQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQWtCSjs7QUFoQkE7RUFDSSxtQkFBQTtBQW1CSjs7QUFqQkE7RUFDSSxrQkFBQTtBQW9CSjs7QUFsQkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUFxQko7O0FBbkJBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFzQko7O0FBcEJBO0VBQ0csV0FBQTtFQUNBLGVBQUE7QUF1Qkg7O0FBckJBO0VBQ0ksY0FBQTtBQXdCSjs7QUF0QkE7RUFDSSxjQUFBO0FBeUJKOztBQXZCQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBMEJKOztBQXhCQTtFQUNHLFdBQUE7RUFDQSxlQUFBO0FBMkJIOztBQXpCQTtFQUNJLDJCQUFBO0FBNEJKOztBQTFCQTtFQUNJLGdCQUFBO0FBNkJKOztBQTNCQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQThCSjs7QUE1QkE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUErQko7O0FBN0JBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBZ0NKOztBQTdCQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBZ0NKOztBQTlCQTtFQUNJLGtCQUFBO0FBaUNKOztBQS9CQTtFQUNJLFdBQUE7QUFrQ0o7O0FBaENBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFtQ0o7O0FBakNBO0VBQ0ssZ0JBQUE7QUFvQ0w7O0FBbENBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFxQ0o7O0FBbkNBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFzQ0o7O0FBcENBO0VBQ0ksbUJBQUE7QUF1Q0o7O0FBckNBO0VBRUksMkJBQUE7QUF1Q0o7O0FBbENBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FBcUNKIiwiZmlsZSI6InNyYy9hcHAvcmV2aWV3cy1vci1yYXRpbmcvcmV2aWV3cy1vci1yYXRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gICAgcGFkZGluZzogMC44ZW0gMC4xZW0gMCAwO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjYzQ5MzJmO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi1oZWlnaHQgOiA4MDBweCkge1xyXG4gICAgaW9uLXRvb2xiYXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDNlbSAwLjFlbSA4cHggMDtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICNjNDkzMmY7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi10aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcbmlvbi1idXR0b257XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxLjVlbTtcclxuICAgIC0tcGFkZGluZy10b3A6IDEuNWVtO1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuLnByb2dyZXNfYmFye1xyXG4gICAgY29sb3I6ICNiMGIwYjA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLnBiMXtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxufVxyXG4ucGIye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMyU7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLnBiM3tcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcbi5wYjR7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiMxQTZCQkU7XHJcbn1cclxuLnBiNXtcclxuICAgIHBhZGRpbmc6IDBlbSAxZW07XHJcbn1cclxuLnBiNntcclxuICAgIGNvbG9yOiAjNDY0NjQ2O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IDFweCAjMDAwMDAwMTQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzo0cHggMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4ucGI3e1xyXG4gICAgcGFkZGluZzogMC41ZW0gMWVtO1xyXG4gICAgYmFja2dyb3VuZDogI2ZlZmVmZTtcclxuICAgIGJvcmRlci10b3A6IDdweCBzb2xpZCAjRjdGOEZBO1xyXG59XHJcbi5wYjh7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAzJTtcclxuICAgIHRvcDogLTRweDtcclxufVxyXG4ucGI5e1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcbi5wYjEwe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4XHJcbn1cclxuLnBiMTF7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi10b3A6IDdweDtcclxufVxyXG4ucGIxMntcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgY29sb3I6ICNCMEIwQjA7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuLnBiMTN7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0QzRDNEMztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBtYXJnaW46IDAuN2VtIDBlbTtcclxufVxyXG4ubGNlIHNwYW57XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gICAgdG9wOiAtMXB4O1xyXG59XHJcblxyXG4ubWZ7XHJcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XHJcbn1cclxuLmNzdG9tSGVhZGVye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcbi5zZWdtZW50LWJ1dHRvbi1jaGVja2Vke1xyXG4gICAgYmFja2dyb3VuZDogI0Y3RjhGQTtcclxuICAgIGNvbG9yOiAjNDY0NjQ2O1xyXG59XHJcbi5iZ19ncmV5e1xyXG4gICAgYmFja2dyb3VuZDojRjlGOUY5O1xyXG59XHJcbi5wZF9ic3tcclxuICAgIHBhZGRpbmc6IDAuN2VtIDFlbTtcclxufVxyXG4ubGFtYm8gaDR7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxufVxyXG4udHJpcF9kYXRlc3tcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAyLjRlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMS4zZW07XHJcbn1cclxuLnRyaXBfZGF0ZXMgcHtcclxuICAgbWFyZ2luOiAwcHg7IFxyXG4gICBtYXJnaW4tdG9wOiA2cHg7XHJcbn1cclxuLmJsdWV7XHJcbiAgICBjb2xvcjojMUE2QkJFO1xyXG59XHJcbi5wcmltYXJ5e1xyXG4gICAgY29sb3I6I0M0OTMyRjtcclxufVxyXG4udHJpcF9lbmRfZGF0ZXtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiA0LjJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMS4zZW07XHJcbn1cclxuLnRyaXBfZW5kX2RhdGUgcHtcclxuICAgbWFyZ2luOiAwcHg7IFxyXG4gICBtYXJnaW4tdG9wOiA2cHg7XHJcbn1cclxuLnN0YXIgaW1nOmZpcnN0LWNoaWxke1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5zdGFyIGltZ3tcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbn1cclxuLmdpdmVfcmF0aW5ne1xyXG4gICAgYmFja2dyb3VuZDogI0M0OTMyRjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMC43ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG4uZGFuZ2Vye1xyXG4gICAgYmFja2dyb3VuZDogI0Q5M0EzQTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMC43ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG4uYnRuX2ZpeGVke1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAxZW07XHJcbiAgICBsZWZ0OiAzZW07XHJcbiAgICByaWdodDogM2VtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubm90aWZ5X2ltYWdlX21haW57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5ub3RpZnlfaW1hZ2VfbWFpbiBpbWd7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLm5vdGlmeV9jb250ZW50IHB7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4ubm90aWZ5X2Rlc2N7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBjb2xvcjogIzAwOTFFQTtcclxufVxyXG4ubm90aWZ5X2Rlc2NfbWFpbntcclxuICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG59XHJcbi5ub3RmeV90aXRsZXtcclxuICAgIGNvbG9yOiMxQTZCQkU7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuLm5vdGlmeV90aW1le1xyXG4gICAgY29sb3I6I0M0OTMyRjtcclxuICAgIGZvbnQtc2l6ZTogMTBweDsgIFxyXG59XHJcbi5ub3RpZnlfYmd7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjlGOUY5O1xyXG59XHJcbi5wZHRvcHtcclxuICAgIC8vIHBhZGRpbmc6IDVweCAwZW07XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMHB4IDIwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLnN0YXJfbGlzdCBpbWd7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/reviews-or-rating/reviews-or-rating.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/reviews-or-rating/reviews-or-rating.page.ts ***!
  \*************************************************************/
/*! exports provided: ReviewsOrRatingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsOrRatingPage", function() { return ReviewsOrRatingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");







let ReviewsOrRatingPage = class ReviewsOrRatingPage {
    constructor(restService, storage, router, menuCtrl, location, plateform) {
        this.restService = restService;
        this.storage = storage;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.location = location;
        this.plateform = plateform;
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
        if (this.plateform.is('ios')) {
            this.plateformCheck = "ios";
        }
        else {
            this.plateformCheck = "android";
        }
        this.vehID = localStorage.getItem("vehicles_id");
        this.storage.get('user_details').then((user_details) => {
            console.log(user_details);
            this.storage.get('base_urls').then((base_url) => {
                this.base_url = base_url;
                console.log(this.base_url);
            });
            this.userID = user_details.users_id;
            this.giveRating();
        });
    }
    toggleMenu() {
        this.menuCtrl.toggle();
    }
    BookNow() {
        this.router.navigate(['/car-booking']);
    }
    giveRating() {
        var stringy = JSON.stringify({
            "requestType": "get_veh_reviews",
            "veh_id": this.vehID
            // {"requestType": "get_veh_reviews", "veh_id": "1"}
        });
        console.log(stringy);
        this.restService.reviews(stringy).subscribe(response => {
            this.response = JSON.parse(response['_body']);
            console.log(this.response);
            //  this.others_reviews  = this.response.others_reviews;
            this.owns_reviews = this.response.veh_reviews;
            //  this.critical_ratings_others    = this.response.critical_ratings_others;
            this.storage.get('profile_img_url').then((profile_img_url) => {
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
            this.others_reviews = this.response.others_reviews;
        }
        else if (title == 'Recent') {
            this.others_reviews = this.response.others_reviews;
        }
        else if (title == 'Critical') {
            console.log(this.response.critical_ratings_others);
            this.others_reviews = this.response.critical_ratings_others;
            // alert(title);
        }
    }
    selectIndex(i) {
        this.sliderStartBoolean = i;
    }
    back() {
        this.location.back();
    }
};
ReviewsOrRatingPage.ctorParameters = () => [
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
ReviewsOrRatingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-reviews-or-rating',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./reviews-or-rating.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reviews-or-rating/reviews-or-rating.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./reviews-or-rating.page.scss */ "./src/app/reviews-or-rating/reviews-or-rating.page.scss")).default]
    })
], ReviewsOrRatingPage);



/***/ })

}]);
//# sourceMappingURL=reviews-or-rating-reviews-or-rating-module-es2015.js.map