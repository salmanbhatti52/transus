(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["other-booking-list-other-booking-list-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/other-booking-list/other-booking-list.page.html":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/other-booking-list/other-booking-list.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOtherBookingListOtherBookingListPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar [class.header_pd]=\"plateformCheck == 'android'\" >\r\n    <ion-buttons slot=\"start\">\r\n      <img src=\"assets/img/Arrow.svg\" (click)=\"back()\">\r\n    </ion-buttons>\r\n    <ion-title>Bookings</ion-title>\r\n    \r\n   </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-toolbar class=\"cstomHeader\" no-border-top>\r\n\r\n\r\n    <ion-row class=\"main_tab\">\r\n      <ion-col class=\"name_tabs\"   (click)=\"getpet('cancel')\" [class.active_tab]=\"pet == 'cancel'\" >Cancel</ion-col>\r\n      <ion-col  class=\"name_tabs\"  (click)=\"getpet('previous')\" [class.active_tab]=\"pet == 'previous'\" >Previous</ion-col>\r\n      <ion-col  class=\"name_tabs\"  (click)=\"getpet('current')\" [class.active_tab]=\"pet == 'current'\">Current</ion-col>\r\n      <ion-col  class=\"name_tabs\"  (click)=\"getpet('upcoming')\" [class.active_tab]=\"pet == 'upcoming'\">Upcoming</ion-col>\r\n      <ion-col  class=\"name_tabs\"  (click)=\"getpet('pending')\" [class.active_tab]=\"pet == 'pending'\">Pending</ion-col>\r\n    </ion-row>\r\n    <!-- <ion-segment  [(ngModel)]=\"pet\">\r\n      <ion-segment-button class=\"dark_p_color\"   value=\"cancel\" (ionSelect)=\"getCancel()\">\r\n        Cancel  \r\n      </ion-segment-button>\r\n      <ion-segment-button class=\"dark_p_color\" value=\"previous\" (ionSelect)=\"getPrevious()\">\r\n        Previous  \r\n      </ion-segment-button>\r\n      <ion-segment-button  style=\"max-width: 5px;\" class=\"dark_p_color\" value=\"current\" (ionSelect)=\"getCurrent()\">\r\n        Current  \r\n      </ion-segment-button>\r\n      <ion-segment-button class=\"dark_p_color\"  value=\"upcoming\" (ionSelect)=\"getUpcoming()\">\r\n       Upcoming\r\n      </ion-segment-button>\r\n      <ion-segment-button class=\"dark_p_color\"  value=\"pending\" (ionSelect)=\"getUpcoming()\">\r\n        Pending\r\n       </ion-segment-button>\r\n    </ion-segment> -->\r\n  </ion-toolbar>\r\n  <div [ngSwitch]=\"pet\" style=\"height: calc(100% - 62px);\">\r\n    <div style=\"height: 100%;\" *ngSwitchCase=\"'cancel'\">\r\n      <ion-content >\r\n        <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event,pet)\">\r\n          <ion-refresher-content\r\n            pullingIcon=\"chevron-down-circle-outline\"\r\n            pullingText=\"Pull to refresh\"\r\n            refreshingSpinner=\"circles\"\r\n            refreshingText=\"Refreshing...\">\r\n          </ion-refresher-content>\r\n        </ion-refresher> \r\n        <ion-list >\r\n          <ng-container *ngIf=\"cancelsBooking?.length == 0\">\r\n            <ion-row>\r\n              <ion-col class=\"ion-text-center\">\r\n                  <h2>Data Not Found!</h2>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ng-container>\r\n          <ng-container *ngFor=\"let p of cancelsBooking; let i = index\">\r\n          <ng-container *ngIf=\"p.bookings_id\">\r\n            <ion-row  class=\"pd_bs\" *ngIf=\"i % 2 === 0\">\r\n              <ion-col (click)=\"ViewNow(p)\"  size=\"4\" class=\"lambo\">\r\n                  <h4>{{p.model_name}}</h4>\r\n                  <!-- <img src=\"assets/img/Lambo.svg\"> -->\r\n                  <ng-container *ngIf=\"p.veh_imgs?.length > 0\">\r\n                    <ng-container *ngFor=\"let img of p.veh_imgs; let j = index\">\r\n                      <img style=\"border-radius: 11px;height: 145px;\" *ngIf=\"j == 0\" src=\"{{base_url}}{{img}}\">\r\n                    </ng-container>\r\n                  </ng-container>\r\n                  <ng-container *ngIf=\"p.veh_imgs?.length < 0\">\r\n                    <img src=\"assets/img/Lambo.svg\">\r\n                  </ng-container>\r\n      \r\n              </ion-col>\r\n              <ion-col class=\"trip_dates\" size=\"4\">\r\n                  <p  (click)=\"ViewNow(p)\"  class=\"blue\">Trip Dates</p>\r\n                  <p  (click)=\"ViewNow(p)\"   class=\"primary\">Start Date</p>\r\n                  <p  (click)=\"ViewNow(p)\" >{{p.start_date | customeDate}}</p>\r\n                  <p  (click)=\"ViewNow(p)\"  class=\"primary\">Total Cost</p>\r\n                  <p  (click)=\"ViewNow(p)\" >{{currency_symbol}}{{p.trip_cost}}</p>\r\n                  \r\n              </ion-col>\r\n              <ion-col (click)=\"ViewNow(p)\"  class=\"trip_end_date\" size=\"4\">\r\n                <p class=\"primary\"> End Date</p>\r\n                <p>{{p.end_date | customeDate}}</p>\r\n                <p (click)=\"ViewNow(p)\" class=\"primary\"> Booking Status</p>\r\n                <p (click)=\"ViewNow(p)\">{{p.status}}</p>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row class=\"pd_bs bg_grey\" *ngIf=\"i % 2 != 0\">\r\n              <ion-col (click)=\"ViewNow(p)\"  size=\"4\" class=\"lambo\">\r\n                  <h4>{{p.model_name}}</h4>\r\n                  <!-- <img src=\"assets/img/Lambo.svg\"> -->\r\n                  <ng-container *ngIf=\"p.veh_imgs?.length > 0\">\r\n                    <ng-container *ngFor=\"let img of p.veh_imgs; let j = index\">\r\n                      <img style=\"border-radius: 11px;height: 145px\" *ngIf=\"j == 0\" src=\"{{base_url}}{{img}}\">\r\n                    </ng-container>\r\n                  </ng-container>\r\n                  <ng-container *ngIf=\"p.veh_imgs?.length < 0\">\r\n                    <img src=\"assets/img/Lambo.svg\">\r\n                  </ng-container>\r\n          \r\n              </ion-col>\r\n              <ion-col   class=\"trip_dates\" size=\"4\">\r\n                  <p (click)=\"ViewNow(p)\" class=\"blue\">Trip Dates</p>\r\n                  <p (click)=\"ViewNow(p)\" class=\"primary\">Start Date</p>\r\n                  <p (click)=\"ViewNow(p)\">{{p.start_date | customeDate}}</p>\r\n                  <p (click)=\"ViewNow(p)\" class=\"primary\">Total Cost</p>\r\n                  <p (click)=\"ViewNow(p)\">{{currency_symbol}}{{p.trip_cost}}</p>\r\n    \r\n              </ion-col>\r\n              <ion-col (click)=\"ViewNow(p)\"  class=\"trip_end_date\" size=\"4\">\r\n                <p class=\"primary\"> End Date</p>\r\n                <p>{{p.end_date | customeDate}}</p>\r\n              </ion-col>\r\n            </ion-row> \r\n          </ng-container>\r\n          </ng-container> \r\n        </ion-list>\r\n        <ion-infinite-scroll (ionInfinite)=\"doInfinite($event,pet)\">\r\n          <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"\">\r\n          </ion-infinite-scroll-content>\r\n        </ion-infinite-scroll>\r\n      </ion-content>\r\n    </div>\r\n    <div style=\"height: 100%;\" *ngSwitchCase=\"'previous'\">\r\n      <ion-content >\r\n        <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event,pet)\">\r\n          <ion-refresher-content\r\n            pullingIcon=\"chevron-down-circle-outline\"\r\n            pullingText=\"Pull to refresh\"\r\n            refreshingSpinner=\"circles\"\r\n            refreshingText=\"Refreshing...\">\r\n          </ion-refresher-content>\r\n        </ion-refresher> \r\n        <ion-list >\r\n          <ng-container *ngIf=\"previousBooking?.length == 0\">\r\n            <ion-row>\r\n              <ion-col class=\"ion-text-center\">\r\n                  <h2>Data Not Found!</h2>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ng-container>\r\n          <ng-container *ngFor=\"let p of previousBooking; let i = index\">\r\n          <ng-container *ngIf=\"p.bookings_id\">\r\n            <ion-row  class=\"pd_bs\" *ngIf=\"i % 2 === 0\">\r\n              <ion-col (click)=\"ViewNow(p)\"  size=\"4\" class=\"lambo\">\r\n                  <h4>{{p.model_name}}</h4>\r\n                  <!-- <img src=\"assets/img/Lambo.svg\"> -->\r\n                  <ng-container *ngIf=\"p.veh_imgs?.length > 0\">\r\n                    <ng-container *ngFor=\"let img of p.veh_imgs; let j = index\">\r\n                      <img style=\"border-radius: 11px;height: 145px\" *ngIf=\"j == 0\" src=\"{{base_url}}{{img}}\">\r\n                    </ng-container>\r\n                  </ng-container>\r\n                  <ng-container *ngIf=\"p.veh_imgs?.length < 0\">\r\n                    <img src=\"assets/img/Lambo.svg\">\r\n                  </ng-container>\r\n      \r\n              </ion-col>\r\n              <ion-col class=\"trip_dates\" size=\"4\">\r\n                  <p  (click)=\"ViewNow(p)\"  class=\"blue\">Trip Dates {{p.ratting_stars}}</p>\r\n                  <p  (click)=\"ViewNow(p)\"   class=\"primary\">Start Date</p>\r\n                  <p  (click)=\"ViewNow(p)\" >{{p.start_date | customeDate}}</p>\r\n                  <p  (click)=\"ViewNow(p)\"  class=\"primary\">Total Cost</p>\r\n                  <p  (click)=\"ViewNow(p)\" >{{currency_symbol}}{{p.trip_cost}}</p>\r\n                  <p class=\"give_rating\" (click)=\"giveRating(p.bookings_id)\" *ngIf=\"p.rated =='No'\">Give Ratings</p>\r\n                  <div class=\"star\" *ngIf=\"p.rated =='Yes'\">\r\n                    <p class=\"star_list\" *ngIf=\"p.ratting_stars === '5'\"> \r\n                      <img src=\"assets/img/yellow_star.svg\">\r\n                      <img src=\"assets/img/yellow_star.svg\">\r\n                      <img src=\"assets/img/yellow_star.svg\">\r\n                      <img src=\"assets/img/yellow_star.svg\">\r\n                      <img src=\"assets/img/yellow_star.svg\">\r\n                    </p>\r\n                    <p class=\"star_list\" *ngIf=\"p.ratting_stars === '4'\"> \r\n                      <img src=\"assets/img/yellow_star.svg\">\r\n                      <img src=\"assets/img/yellow_star.svg\">\r\n                      <img src=\"assets/img/yellow_star.svg\">\r\n                      <img src=\"assets/img/yellow_star.svg\">\r\n                      <img src=\"assets/img/grey_star.svg\">\r\n                    </p>\r\n                    <p class=\"star_list\" *ngIf=\"p.ratting_stars === '3'\"> \r\n                      <img src=\"assets/img/yellow_star.svg\">\r\n                      <img src=\"assets/img/yellow_star.svg\">\r\n                      <img src=\"assets/img/yellow_star.svg\">\r\n                      <img src=\"assets/img/grey_star.svg\">\r\n                      <img src=\"assets/img/grey_star.svg\">\r\n                    </p>\r\n                    <p class=\"star_list\" *ngIf=\"p.ratting_stars === '2'\"> \r\n                      <img src=\"assets/img/yellow_star.svg\">\r\n                      <img src=\"assets/img/yellow_star.svg\">\r\n                      <img src=\"assets/img/grey_star.svg\">\r\n                      <img src=\"assets/img/grey_star.svg\">\r\n                      <img src=\"assets/img/grey_star.svg\">\r\n                    </p>\r\n                    <p class=\"star_list\" *ngIf=\"p.ratting_stars === '1'\"> \r\n                      <img src=\"assets/img/yellow_star.svg\">\r\n                      <img src=\"assets/img/grey_star.svg\">\r\n                      <img src=\"assets/img/grey_star.svg\">\r\n                      <img src=\"assets/img/grey_star.svg\">\r\n                      <img src=\"assets/img/grey_star.svg\">\r\n                    </p>\r\n                  </div>\r\n              </ion-col>\r\n              <ion-col (click)=\"ViewNow(p)\"  class=\"trip_end_date\" size=\"4\">\r\n                <p class=\"primary\"> End Date</p>\r\n                <p>{{p.end_date | customeDate}}</p>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row class=\"pd_bs bg_grey\" *ngIf=\"i % 2 != 0\">\r\n              <ion-col (click)=\"ViewNow(p)\"  size=\"4\" class=\"lambo\">\r\n                  <h4>{{p.model_name}}</h4>\r\n                  <!-- <img src=\"assets/img/Lambo.svg\"> -->\r\n                  <ng-container *ngIf=\"p.veh_imgs?.length > 0\">\r\n                    <ng-container *ngFor=\"let img of p.veh_imgs; let j = index\">\r\n                      <img style=\"border-radius: 11px;height: 145px\" *ngIf=\"j == 0\" src=\"{{base_url}}{{img}}\">\r\n                    </ng-container>\r\n                  </ng-container>\r\n                  <ng-container *ngIf=\"p.veh_imgs?.length < 0\">\r\n                    <img src=\"assets/img/Lambo.svg\">\r\n                  </ng-container>\r\n          \r\n              </ion-col>\r\n              <ion-col   class=\"trip_dates\" size=\"4\">\r\n                  <p (click)=\"ViewNow(p)\" class=\"blue\">Trip Dates</p>\r\n                  <p (click)=\"ViewNow(p)\" class=\"primary\">Start Date</p>\r\n                  <p (click)=\"ViewNow(p)\">{{p.start_date | customeDate}}</p>\r\n                  <p (click)=\"ViewNow(p)\" class=\"primary\">Total Cost</p>\r\n                  <p (click)=\"ViewNow(p)\">{{currency_symbol}}{{p.trip_cost}}</p>\r\n                  <p class=\"give_rating\" (click)=\"giveRating(p.bookings_id)\" *ngIf=\"p.rated =='No'\">Give Ratings</p>\r\n                  <div class=\"star\" *ngIf=\"p.rated =='Yes'\">\r\n                    <p class=\"star_list\" *ngIf=\"p.ratting_stars === '5'\"> \r\n                      <img src=\"assets/img/yellow_star.svg\">\r\n                      <img src=\"assets/img/yellow_star.svg\">\r\n                      <img src=\"assets/img/yellow_star.svg\">\r\n                      <img src=\"assets/img/yellow_star.svg\">\r\n                      <img src=\"assets/img/yellow_star.svg\">\r\n                    </p>\r\n                    <p class=\"star_list\" *ngIf=\"p.ratting_stars === '4'\"> \r\n                      <img src=\"assets/img/yellow_star.svg\">\r\n                      <img src=\"assets/img/yellow_star.svg\">\r\n                      <img src=\"assets/img/yellow_star.svg\">\r\n                      <img src=\"assets/img/yellow_star.svg\">\r\n                      <img src=\"assets/img/grey_star.svg\">\r\n                    </p>\r\n                    <p class=\"star_list\" *ngIf=\"p.ratting_stars === '3'\"> \r\n                      <img src=\"assets/img/yellow_star.svg\">\r\n                      <img src=\"assets/img/yellow_star.svg\">\r\n                      <img src=\"assets/img/yellow_star.svg\">\r\n                      <img src=\"assets/img/grey_star.svg\">\r\n                      <img src=\"assets/img/grey_star.svg\">\r\n                    </p>\r\n                    <p class=\"star_list\" *ngIf=\"p.ratting_stars === '2'\"> \r\n                      <img src=\"assets/img/yellow_star.svg\">\r\n                      <img src=\"assets/img/yellow_star.svg\">\r\n                      <img src=\"assets/img/grey_star.svg\">\r\n                      <img src=\"assets/img/grey_star.svg\">\r\n                      <img src=\"assets/img/grey_star.svg\">\r\n                    </p>\r\n                    <p class=\"star_list\" *ngIf=\"p.ratting_stars === '1'\"> \r\n                      <img src=\"assets/img/yellow_star.svg\">\r\n                      <img src=\"assets/img/grey_star.svg\">\r\n                      <img src=\"assets/img/grey_star.svg\">\r\n                      <img src=\"assets/img/grey_star.svg\">\r\n                      <img src=\"assets/img/grey_star.svg\">\r\n                    </p>\r\n                  </div>\r\n              </ion-col>\r\n              <ion-col (click)=\"ViewNow(p)\"  class=\"trip_end_date\" size=\"4\">\r\n                <p class=\"primary\"> End Date</p>\r\n                <p>{{p.end_date | customeDate}}</p>\r\n              </ion-col>\r\n            </ion-row> \r\n          </ng-container>\r\n          </ng-container> \r\n        </ion-list>\r\n        <ion-infinite-scroll (ionInfinite)=\"doInfinite($event,pet)\">\r\n          <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"\">\r\n          </ion-infinite-scroll-content>\r\n        </ion-infinite-scroll>\r\n      </ion-content>\r\n    </div>\r\n    <div style=\"height: 100%;\" *ngSwitchCase=\"'current'\">\r\n      <ion-content >\r\n        <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event,pet)\">\r\n          <ion-refresher-content\r\n            pullingIcon=\"chevron-down-circle-outline\"\r\n            pullingText=\"Pull to refresh\"\r\n            refreshingSpinner=\"circles\"\r\n            refreshingText=\"Refreshing...\">\r\n          </ion-refresher-content>\r\n        </ion-refresher> \r\n        <ion-list >\r\n          <ng-container *ngIf=\"currentBooking?.length == 0\">\r\n            <ion-row>\r\n              <ion-col class=\"ion-text-center\">\r\n                  <h2>Data Not Found!</h2>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ng-container>\r\n          <ng-container *ngFor=\"let p of currentBooking; let i = index\">\r\n          <ng-container *ngIf=\"p.bookings_id\">\r\n            <ion-row  class=\"pd_bs\" *ngIf=\"i % 2 === 0\">\r\n              <ion-col (click)=\"ViewNow(p)\"  size=\"4\" class=\"lambo\">\r\n                  <h4>{{p.model_name}}</h4>\r\n                  <!-- <img src=\"assets/img/Lambo.svg\"> -->\r\n                  <ng-container *ngIf=\"p.veh_imgs?.length > 0\">\r\n                    <ng-container *ngFor=\"let img of p.veh_imgs; let j = index\">\r\n                      <img style=\"border-radius: 11px;height: 145px\" *ngIf=\"j == 0\" src=\"{{base_url}}{{img}}\">\r\n                    </ng-container>\r\n                  </ng-container>\r\n                  <ng-container *ngIf=\"p.veh_imgs?.length < 0\">\r\n                    <img src=\"assets/img/Lambo.svg\">\r\n                  </ng-container>\r\n      \r\n              </ion-col>\r\n              <ion-col class=\"trip_dates\" size=\"4\">\r\n                  <p  (click)=\"ViewNow(p)\"  class=\"blue\">Trip Dates</p>\r\n                  <p  (click)=\"ViewNow(p)\"   class=\"primary\">Start Date</p>\r\n                  <p  (click)=\"ViewNow(p)\" >{{p.start_date | customeDate}}</p>\r\n                  <p  (click)=\"ViewNow(p)\"  class=\"primary\">Total Cost</p>\r\n                  <p  (click)=\"ViewNow(p)\" >{{currency_symbol}}{{p.trip_cost}}</p>\r\n                  <p class=\"chatBtn\"  *ngIf=\"p.payment_status == 'Paid'\" (click)=\"chatRequest('other_booking','',p)\">Start chat</p>\r\n                  \r\n              </ion-col>\r\n              <!-- <ion-col (click)=\"ViewNow(p)\"  class=\"trip_end_date\" size=\"4\"> -->\r\n              <ion-col   class=\"trip_end_date\" size=\"4\">\r\n                <p class=\"primary\"> End Date</p>\r\n                <p>{{p.end_date | customeDate}}</p>\r\n                <p (click)=\"ViewNow(p)\" class=\"primary\"> Booking Status</p>\r\n                <p (click)=\"ViewNow(p)\">{{p.status}}</p>\r\n                <p class=\"complete\"  (click)=\"completeBooking(p,i)\">Complete</p>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row class=\"pd_bs bg_grey\" *ngIf=\"i % 2 != 0\">\r\n              <ion-col (click)=\"ViewNow(p)\"  size=\"4\" class=\"lambo\">\r\n                  <h4>{{p.model_name}}</h4>\r\n                  <!-- <img src=\"assets/img/Lambo.svg\"> -->\r\n                  <ng-container *ngIf=\"p.veh_imgs?.length > 0\">\r\n                    <ng-container *ngFor=\"let img of p.veh_imgs; let j = index\">\r\n                      <img style=\"border-radius: 11px;height: 145px\" *ngIf=\"j == 0\" src=\"{{base_url}}{{img}}\">\r\n                    </ng-container>\r\n                  </ng-container>\r\n                  <ng-container *ngIf=\"p.veh_imgs?.length < 0\">\r\n                    <img src=\"assets/img/Lambo.svg\">\r\n                  </ng-container>\r\n          \r\n              </ion-col>\r\n              <ion-col   class=\"trip_dates\" size=\"4\">\r\n                  <p (click)=\"ViewNow(p)\" class=\"blue\">Trip Dates</p>\r\n                  <p (click)=\"ViewNow(p)\" class=\"primary\">Start Date</p>\r\n                  <p (click)=\"ViewNow(p)\">{{p.start_date | customeDate}}</p>\r\n                  <p (click)=\"ViewNow(p)\" class=\"primary\">Total Cost</p>\r\n                  <p (click)=\"ViewNow(p)\">{{currency_symbol}}{{p.trip_cost}}</p>\r\n                  <p class=\"chatBtn\"  *ngIf=\"p.payment_status == 'Paid'\" (click)=\"chatRequest('other_booking','',p)\">Start chat</p>\r\n              </ion-col>\r\n              <ion-col (click)=\"ViewNow(p)\"  class=\"trip_end_date\" size=\"4\">\r\n                <p class=\"primary\"> End Date</p>\r\n                <p>{{p.end_date | customeDate}}</p>\r\n                <p (click)=\"ViewNow(p)\" class=\"primary\"> Booking Status</p>\r\n                <p (click)=\"ViewNow(p)\">{{p.status}}</p>\r\n                <p class=\"complete\"  (click)=\"completeBooking(p, i)\">Complete</p>\r\n              </ion-col>\r\n            </ion-row> \r\n          </ng-container>\r\n          </ng-container> \r\n        </ion-list>\r\n        <ion-infinite-scroll (ionInfinite)=\"doInfinite($event,pet)\">\r\n          <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"\">\r\n          </ion-infinite-scroll-content>\r\n        </ion-infinite-scroll>\r\n      </ion-content>\r\n    </div>\r\n    <div style=\"height: 100%;\"  *ngSwitchCase=\"'upcoming'\">\r\n      <ion-content>\r\n        <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event,pet)\">\r\n          <ion-refresher-content\r\n            pullingIcon=\"chevron-down-circle-outline\"\r\n            pullingText=\"Pull to refresh\"\r\n            refreshingSpinner=\"circles\"\r\n            refreshingText=\"Refreshing...\">\r\n          </ion-refresher-content>\r\n        </ion-refresher> \r\n        <ion-list >\r\n          <ng-container *ngIf=\"upcomingBooking?.length == 0\">\r\n            <ion-row>\r\n              <ion-col class=\"ion-text-center\">\r\n                  <h2>Data Not Found!</h2>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ng-container>\r\n          <ng-container *ngFor=\"let p of upcomingBooking; let i = index\">\r\n          <ion-row   class=\"pd_bs\" *ngIf=\"i % 2 === 0\">\r\n            <ion-col (click)=\"ViewNow(p)\" size=\"4\" class=\"lambo\">\r\n                <h4>{{p.model_name}}</h4>\r\n                <!-- <img src=\"assets/img/Lambo.svg\"> -->\r\n                <ng-container *ngIf=\"p.veh_imgs?.length > 0\">\r\n                  <ng-container *ngFor=\"let img of p.veh_imgs; let j = index\">\r\n                    <img style=\"border-radius: 11px;height: 145px\" *ngIf=\"j == 0\" src=\"{{base_url}}{{img}}\">\r\n                  </ng-container>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"p.veh_imgs?.length < 0\">\r\n                  <img src=\"assets/img/Lambo.svg\">\r\n                </ng-container>\r\n      \r\n            </ion-col>\r\n            <ion-col  class=\"trip_dates\" size=\"4\">\r\n                <p (click)=\"ViewNow(p)\" class=\"blue\">Trip Dates</p>\r\n                <p (click)=\"ViewNow(p)\" class=\"primary\">Start Date</p>\r\n                <p (click)=\"ViewNow(p)\">{{p.start_date | customeDate}}</p>\r\n                <p (click)=\"ViewNow(p)\" class=\"primary\">Total Cost</p>\r\n                <p (click)=\"ViewNow(p)\">{{currency_symbol}}{{p.trip_cost}}</p>\r\n                <p class=\"danger\"  *ngIf=\"p.status != 'Waiting' && p.payment_status!='Paid'\" (click)=\"cancelBooking(p,i)\">Cancel</p>\r\n               \r\n                \r\n            </ion-col>\r\n            <ion-col  class=\"trip_end_date\" size=\"4\">\r\n              <p (click)=\"ViewNow(p)\" class=\"primary\"> End Date</p>\r\n              <p (click)=\"ViewNow(p)\">{{p.end_date | customeDate}}</p>\r\n              <p class=\"chatBtn\"  *ngIf=\"p.payment_status == 'Paid'\" (click)=\"chatRequest('other_booking','',p)\">Start chat</p>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row  class=\"pd_bs bg_grey\" *ngIf=\"i % 2 != 0\">\r\n            <ion-col (click)=\"ViewNow(p)\" size=\"4\" class=\"lambo\">\r\n                <h4>{{p.model_name}}</h4>\r\n                <!-- <img src=\"assets/img/Lambo.svg\"> -->\r\n                <ng-container *ngIf=\"p.veh_imgs?.length > 0\">\r\n                  <ng-container *ngFor=\"let img of p.veh_imgs; let j = index\">\r\n                    <img style=\"border-radius: 11px;height: 145px\" *ngIf=\"j == 0\" src=\"{{base_url}}{{img}}\">\r\n                  </ng-container>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"p.veh_imgs?.length < 0\">\r\n                  <img src=\"assets/img/Lambo.svg\">\r\n                </ng-container>\r\n        \r\n            </ion-col>\r\n            <ion-col   class=\"trip_dates\" size=\"4\">\r\n                <p (click)=\"ViewNow(p)\" class=\"blue\">Trip Dates</p>\r\n                <p (click)=\"ViewNow(p)\" class=\"primary\">Start Date</p>\r\n                <p (click)=\"ViewNow(p)\">{{p.start_date | customeDate}}</p>\r\n                <p (click)=\"ViewNow(p)\" class=\"primary\">Total Cost</p>\r\n                <p (click)=\"ViewNow(p)\">{{currency_symbol}}{{p.trip_cost}}</p>\r\n                <p class=\"danger\"  *ngIf=\"p.status != 'Waiting' && p.payment_status!='Paid'\" (click)=\"cancelBooking(p,i)\">Cancel</p>\r\n               \r\n            </ion-col>\r\n            <ion-col  class=\"trip_end_date\" size=\"4\">\r\n              <p (click)=\"ViewNow(p)\" class=\"primary\"> End Date</p>\r\n              <p (click)=\"ViewNow(p)\">{{p.end_date | customeDate}}</p>\r\n              <p class=\"chatBtn\"  *ngIf=\"p.payment_status == 'Paid'\" (click)=\"chatRequest('other_booking','',p)\">Start chat</p>\r\n            </ion-col>\r\n          </ion-row> \r\n        </ng-container>\r\n        </ion-list>\r\n        <ion-infinite-scroll (ionInfinite)=\"doInfinite($event,pet)\">\r\n          <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"\">\r\n          </ion-infinite-scroll-content>\r\n        </ion-infinite-scroll>\r\n      </ion-content>\r\n    </div>\r\n    <div  style=\"height: 100%;\" *ngSwitchCase=\"'pending'\">\r\n      <ion-content >\r\n        <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event,pet)\">\r\n          <ion-refresher-content\r\n            pullingIcon=\"chevron-down-circle-outline\"\r\n            pullingText=\"Pull to refresh\"\r\n            refreshingSpinner=\"circles\"\r\n            refreshingText=\"Refreshing...\">\r\n          </ion-refresher-content>\r\n        </ion-refresher> \r\n        <ion-list >\r\n          <ng-container *ngIf=\"pending_bookings?.length == 0\">\r\n            <ion-row>\r\n              <ion-col class=\"ion-text-center\">\r\n                  <h2>Data Not Found!</h2>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ng-container>\r\n          <ng-container *ngFor=\"let p of pending_bookings; let i = index\">\r\n          <ion-row   class=\"pd_bs\" *ngIf=\"i % 2 === 0\">\r\n            <ion-col (click)=\"ViewNow(p)\" size=\"4\" class=\"lambo\">\r\n                <h4>{{p.model_name}}</h4>\r\n                \r\n            \r\n                \r\n                  <!-- <img src=\"assets/img/Lambo.svg\"> -->\r\n                  <ng-container *ngIf=\"p.veh_imgs?.length > 0\">\r\n                    <ng-container *ngFor=\"let img of p.veh_imgs; let j = index\">\r\n                      <img style=\"border-radius: 11px;height: 145px\" *ngIf=\"j == 0\" src=\"{{base_url}}{{img}}\">\r\n                    </ng-container>\r\n                  </ng-container>\r\n                  <ng-container *ngIf=\"p.veh_imgs?.length < 0\">\r\n                    <img src=\"assets/img/Lambo.svg\">\r\n                  </ng-container>\r\n        \r\n            </ion-col>\r\n            <ion-col   class=\"trip_dates\" size=\"4\">\r\n                <p (click)=\"ViewNow(p)\" class=\"blue\">Trip Dates</p>\r\n                <p (click)=\"ViewNow(p)\" class=\"primary\">Start Date</p>\r\n                <p (click)=\"ViewNow(p)\" >{{p.start_date | customeDate}}</p>\r\n                <p (click)=\"ViewNow(p)\" class=\"primary\">Total Cost</p>\r\n                <p (click)=\"ViewNow(p)\">{{currency_symbol}}{{p.trip_cost}}</p>\r\n                <p class=\"danger\"  *ngIf=\"p.status != 'Waiting' && p.payment_status!='Paid'\" (click)=\"cancelBooking(p,i)\">Cancel</p>\r\n               \r\n                \r\n            </ion-col>\r\n            <ion-col  class=\"trip_end_date\" size=\"4\">\r\n              <p (click)=\"ViewNow(p)\" class=\"primary\"> End Date</p>\r\n              <p (click)=\"ViewNow(p)\">{{p.end_date | customeDate}}</p>\r\n              <p (click)=\"ViewNow(p)\" class=\"primary\"> Booking Status</p>\r\n              <p (click)=\"ViewNow(p)\">{{p.status}}</p>\r\n              <p *ngIf=\"p.status == 'Pending' \" (click)=\"pendingAlert()\"  class=\"give_rating-status-panding\"  >Pending</p>\r\n             <!--  <p   *ngIf=\"p.status == 'Accepted' \" (click)=\"paynow(p)\"  class=\"give_rating-status-approved\"  >Pay Now</p> -->\r\n             <p   *ngIf=\"p.status == 'Accepted' \" (click)=\"alertBooking(p)\"  class=\"give_rating-status-approved\"  >Pay Now</p>\r\n              <p   *ngIf=\"p.status == 'Waiting' \" (click) = \"waitingAlert()\"   class=\"give_rating-status-approved\"  >Waiting</p>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row   class=\"pd_bs bg_grey\" *ngIf=\"i % 2 != 0\">\r\n            <ion-col (click)=\"ViewNow(p)\" size=\"4\" class=\"lambo\">\r\n                <h4>{{p.model_name}}</h4>\r\n                <!-- <img src=\"assets/img/Lambo.svg\"> -->\r\n                <ng-container *ngIf=\"p.veh_imgs?.length > 0\">\r\n                  <ng-container *ngFor=\"let img of p.veh_imgs; let j = index\">\r\n                    <img style=\"border-radius: 11px;height: 145px\" *ngIf=\"j == 0\" src=\"{{base_url}}{{img}}\">\r\n                  </ng-container>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"p.veh_imgs?.length < 0\">\r\n                  <img src=\"assets/img/Lambo.svg\">\r\n                </ng-container>\r\n      \r\n            </ion-col>\r\n            <ion-col   class=\"trip_dates\" size=\"4\">\r\n                <p (click)=\"ViewNow(p)\" class=\"blue\">Trip Dates</p>\r\n                <p (click)=\"ViewNow(p)\" class=\"primary\">Start Date</p>\r\n                <p (click)=\"ViewNow(p)\">{{p.start_date | customeDate}}</p>\r\n                <p (click)=\"ViewNow(p)\" class=\"primary\">Total Cost</p>\r\n                <p (click)=\"ViewNow(p)\">{{currency_symbol}}{{p.trip_cost}}</p>\r\n                <p class=\"danger\" *ngIf=\"p.status != 'Waiting' && p.payment_status!='Paid'\" (click)=\"cancelBooking(p,i)\">Cancel</p>\r\n             \r\n            </ion-col>\r\n            <ion-col class=\"trip_end_date\" size=\"4\">\r\n              <p (click)=\"ViewNow(p)\" class=\"primary\"> End Date</p>\r\n              <p (click)=\"ViewNow(p)\">{{p.end_date | customeDate}}</p>\r\n              <p (click)=\"ViewNow(p)\" class=\"primary\"> Booking Status</p>\r\n              <p (click)=\"ViewNow(p)\">{{p.status}}</p>\r\n              <p *ngIf=\"p.status == 'Pending' \" (click)=\"pendingAlert()\" class=\"give_rating-status-panding\"  >Pending</p>\r\n              <p *ngIf=\"p.status == 'Accepted' \"  (click)=\"alertBooking(p)\" class=\"give_rating-status-approved\"  >Pay Now</p>\r\n            </ion-col>\r\n          </ion-row> \r\n        </ng-container>\r\n        </ion-list>\r\n        <ion-infinite-scroll (ionInfinite)=\"doInfinite($event,pet)\">\r\n          <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"\">\r\n          </ion-infinite-scroll-content>\r\n        </ion-infinite-scroll>\r\n      </ion-content>\r\n    </div>\r\n\r\n \r\n  </div>\r\n\r\n</ion-content>\r\n<ion-footer>\r\n  <div class=\"btn_fixed\">\r\n    <ion-button color=\"secondary\" expand=\"block\" shape=\"round\" (click)=\"BookNow()\">Book Now</ion-button>\r\n  </div>\r\n</ion-footer>\r\n";
      /***/
    },

    /***/
    "./src/app/other-booking-list/other-booking-list-routing.module.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/other-booking-list/other-booking-list-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: OtherBookingListPageRoutingModule */

    /***/
    function srcAppOtherBookingListOtherBookingListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtherBookingListPageRoutingModule", function () {
        return OtherBookingListPageRoutingModule;
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


      var _other_booking_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./other-booking-list.page */
      "./src/app/other-booking-list/other-booking-list.page.ts");

      var routes = [{
        path: '',
        component: _other_booking_list_page__WEBPACK_IMPORTED_MODULE_3__["OtherBookingListPage"]
      }];

      var OtherBookingListPageRoutingModule = /*#__PURE__*/_createClass(function OtherBookingListPageRoutingModule() {
        _classCallCheck(this, OtherBookingListPageRoutingModule);
      });

      OtherBookingListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OtherBookingListPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/other-booking-list/other-booking-list.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/other-booking-list/other-booking-list.module.ts ***!
      \*****************************************************************/

    /*! exports provided: OtherBookingListPageModule */

    /***/
    function srcAppOtherBookingListOtherBookingListModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtherBookingListPageModule", function () {
        return OtherBookingListPageModule;
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


      var _other_booking_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./other-booking-list-routing.module */
      "./src/app/other-booking-list/other-booking-list-routing.module.ts");
      /* harmony import */


      var _other_booking_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./other-booking-list.page */
      "./src/app/other-booking-list/other-booking-list.page.ts");
      /* harmony import */


      var _custome_date_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../custome-date.pipe */
      "./src/app/custome-date.pipe.ts");

      var OtherBookingListPageModule = /*#__PURE__*/_createClass(function OtherBookingListPageModule() {
        _classCallCheck(this, OtherBookingListPageModule);
      });

      OtherBookingListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _other_booking_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["OtherBookingListPageRoutingModule"]],
        declarations: [_other_booking_list_page__WEBPACK_IMPORTED_MODULE_6__["OtherBookingListPage"], _custome_date_pipe__WEBPACK_IMPORTED_MODULE_7__["CustomeDatePipe"]]
      })], OtherBookingListPageModule);
      /***/
    },

    /***/
    "./src/app/other-booking-list/other-booking-list.page.scss":
    /*!*****************************************************************!*\
      !*** ./src/app/other-booking-list/other-booking-list.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOtherBookingListOtherBookingListPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --background: #C4932F;\n}\n\n@media only screen and (min-height: 800px) {\n  .header_pd {\n    padding: 0.5em 0.1em 8px 0;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n  text-transform: capitalize;\n}\n\n.cstomHeader {\n  --background: #fff;\n}\n\n.segment-button-checked {\n  background: #F7F8FA;\n  color: #464646;\n  max-width: 25px;\n}\n\n.bg_grey {\n  background: #F9F9F9;\n}\n\n.pd_bs {\n  padding: 0.7em 1em;\n}\n\n.lambo h4 {\n  margin: 0px;\n  margin-bottom: 3px;\n}\n\n.trip_dates {\n  font-size: 10px;\n  padding-top: 2.4em;\n  padding-left: 1.3em;\n}\n\n.trip_dates p {\n  margin: 0px;\n  margin-top: 6px;\n}\n\n.blue {\n  color: #1A6BBE;\n}\n\n.primary {\n  color: #C4932F;\n}\n\n.trip_end_date {\n  font-size: 10px;\n  padding-top: 4.2em;\n  padding-left: 1.3em;\n}\n\n.trip_end_date p {\n  margin: 0px;\n  margin-top: 6px;\n}\n\n.star img:first-child {\n  margin-left: 0px !important;\n}\n\n.star img {\n  margin-left: 4px;\n}\n\n.give_rating {\n  background: #C4932F;\n  color: #fff;\n  padding: 0.7em;\n  border-radius: 25px;\n  width: 100%;\n  text-align: center;\n  margin: 0px;\n  margin-top: 10px !important;\n}\n\n.danger {\n  background: #D93A3A;\n  color: #fff;\n  padding: 0.7em;\n  border-radius: 25px;\n  width: 100%;\n  text-align: center;\n  margin: 0px;\n  margin-top: 10px !important;\n}\n\n.complete {\n  background: #1a6bbe;\n  color: #fff;\n  padding: 0.7em;\n  border-radius: 25px;\n  width: 100%;\n  text-align: center;\n  margin: 0px;\n  margin-top: 10px !important;\n}\n\n.btn_fixed {\n  /*   position: fixed;\n  bottom: 1em;\n  left: 3em;\n  right: 3em;\n  text-align: center; */\n  position: relative;\n  text-align: center;\n  padding: 15px 10px;\n}\n\n.give_rating-status-panding {\n  background: #0d0f0b;\n  color: #fff;\n  padding: 0.7em;\n  border-radius: 25px;\n  width: 100%;\n  text-align: center;\n  position: relative;\n  margin: 0px;\n  margin-top: 10.3px !important;\n}\n\n.give_rating-status-approved {\n  background: #82d93a;\n  color: #fff;\n  padding: 0.7em;\n  border-radius: 25px;\n  width: 100%;\n  text-align: center;\n  position: relative;\n  margin: 0px;\n  margin-top: 10px !important;\n}\n\n.name_tabs {\n  font-size: 13px;\n  font-weight: 400;\n  display: grid;\n  justify-content: center;\n  padding: 17px 14px;\n}\n\n.main_tab {\n  display: grid;\n  justify-content: center;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-gap: 1px;\n}\n\n.active_tab {\n  background-color: #f7f8fa;\n  border-bottom: 2px solid #c4932f;\n  font-weight: 500;\n}\n\nh4 {\n  font-size: 18px !important;\n}\n\n.chatBtn {\n  background: #c4932f;\n  color: #fff;\n  padding: 0.7em;\n  border-radius: 25px;\n  width: 100%;\n  text-align: center;\n  margin: 0px;\n  /* margin-top: 10px !important; */\n  position: absolute;\n  width: 85%;\n  position: absolute;\n  border: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3RoZXItYm9va2luZy1saXN0L290aGVyLWJvb2tpbmctbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQU9BO0VBQ0k7SUFDSSwwQkFBQTtFQUpOO0FBQ0Y7O0FBT0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBTEo7O0FBUUE7RUFDSSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQUxKOztBQVFBO0VBQ0ksa0JBQUE7QUFMSjs7QUFRQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFMSjs7QUFRQTtFQUNJLG1CQUFBO0FBTEo7O0FBUUE7RUFDSSxrQkFBQTtBQUxKOztBQVFBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBTEo7O0FBUUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUxKOztBQVFBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFMSjs7QUFRQTtFQUNJLGNBQUE7QUFMSjs7QUFRQTtFQUNJLGNBQUE7QUFMSjs7QUFRQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBTEo7O0FBUUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQUxKOztBQVFBO0VBQ0ksMkJBQUE7QUFMSjs7QUFRQTtFQUNJLGdCQUFBO0FBTEo7O0FBUUE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUFMSjs7QUFRQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQUxKOztBQVFBO0VBQ0ksbUJBQUE7RUFFQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FBTko7O0FBU0E7RUFDSTs7Ozt1QkFBQTtFQUtBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQU5KOztBQVNBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBQ0EsNkJBQUE7QUFQSjs7QUFXQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtFQUNBLDJCQUFBO0FBVEo7O0FBYUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQVZKOztBQWFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsMENBQUE7RUFDQSxhQUFBO0FBVko7O0FBYUE7RUFDSSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUFWSjs7QUFhQTtFQUNJLDBCQUFBO0FBVko7O0FBYUE7RUFVSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFuQkoiLCJmaWxlIjoic3JjL2FwcC9vdGhlci1ib29raW5nLWxpc3Qvb3RoZXItYm9va2luZy1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogI0M0OTMyRjtcclxuICAgIC8vIHBhZGRpbmc6IDAuM2VtIDAuNWVtO1xyXG59XHJcblxyXG4uaGVhZGVyX3BkIHtcclxuICAgIC8vIHBhZGRpbmc6IDAuOGVtIDAuMWVtIDAgMDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4taGVpZ2h0IDogODAwcHgpIHtcclxuICAgIC5oZWFkZXJfcGQge1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNWVtIDAuMWVtIDhweCAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMS41ZW07XHJcbiAgICAtLXBhZGRpbmctdG9wOiAxLjVlbTtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4uY3N0b21IZWFkZXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG4uc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjdGOEZBO1xyXG4gICAgY29sb3I6ICM0NjQ2NDY7XHJcbiAgICBtYXgtd2lkdGg6IDI1cHg7XHJcbn1cclxuXHJcbi5iZ19ncmV5IHtcclxuICAgIGJhY2tncm91bmQ6ICNGOUY5Rjk7XHJcbn1cclxuXHJcbi5wZF9icyB7XHJcbiAgICBwYWRkaW5nOiAwLjdlbSAxZW07XHJcbn1cclxuXHJcbi5sYW1ibyBoNCB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxufVxyXG5cclxuLnRyaXBfZGF0ZXMge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDIuNGVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxLjNlbTtcclxufVxyXG5cclxuLnRyaXBfZGF0ZXMgcCB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxufVxyXG5cclxuLmJsdWUge1xyXG4gICAgY29sb3I6ICMxQTZCQkU7XHJcbn1cclxuXHJcbi5wcmltYXJ5IHtcclxuICAgIGNvbG9yOiAjQzQ5MzJGO1xyXG59XHJcblxyXG4udHJpcF9lbmRfZGF0ZSB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNC4yZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEuM2VtO1xyXG59XHJcblxyXG4udHJpcF9lbmRfZGF0ZSBwIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG59XHJcblxyXG4uc3RhciBpbWc6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3RhciBpbWcge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcclxufVxyXG5cclxuLmdpdmVfcmF0aW5nIHtcclxuICAgIGJhY2tncm91bmQ6ICNDNDkzMkY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDAuN2VtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kYW5nZXIge1xyXG4gICAgYmFja2dyb3VuZDogI0Q5M0EzQTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMC43ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbXBsZXRlIHtcclxuICAgIGJhY2tncm91bmQ6ICMxYTZiYmU7XHJcbiAgICA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDAuN2VtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG5fZml4ZWQge1xyXG4gICAgLyogICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDFlbTtcclxuICAgIGxlZnQ6IDNlbTtcclxuICAgIHJpZ2h0OiAzZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XHJcbn1cclxuXHJcbi5naXZlX3JhdGluZy1zdGF0dXMtcGFuZGluZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMGQwZjBiO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAwLjdlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwLjNweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmdpdmVfcmF0aW5nLXN0YXR1cy1hcHByb3ZlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjODJkOTNhO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAwLjdlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5uYW1lX3RhYnMge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE3cHggMTRweDtcclxufVxyXG5cclxuLm1haW5fdGFiIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDIwJSAyMCUgMjAlIDIwJTtcclxuICAgIGdyaWQtZ2FwOiAxcHg7XHJcbn1cclxuXHJcbi5hY3RpdmVfdGFiIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y4ZmE7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2M0OTMyZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbmg0IHtcclxuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2hhdEJ0biB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAjRDkzQTNBO1xyXG4gICAgLy8gY29sb3I6ICNmZmY7XHJcbiAgICAvLyBwYWRkaW5nOiAwLjdlbTtcclxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8vIG1hcmdpbjogMHB4O1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMTRweCAhaW1wb3J0YW50O1xyXG5cclxuICAgIGJhY2tncm91bmQ6ICNjNDkzMmY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDAuN2VtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICAvKiBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7ICovXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/other-booking-list/other-booking-list.page.ts":
    /*!***************************************************************!*\
      !*** ./src/app/other-booking-list/other-booking-list.page.ts ***!
      \***************************************************************/

    /*! exports provided: OtherBookingListPage */

    /***/
    function srcAppOtherBookingListOtherBookingListPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtherBookingListPage", function () {
        return OtherBookingListPage;
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


      var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../rest.service */
      "./src/app/rest.service.ts");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _give_rating_give_rating_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../give-rating/give-rating.page */
      "./src/app/give-rating/give-rating.page.ts");
      /* harmony import */


      var _action_booking_action_booking_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../action-booking/action-booking.page */
      "./src/app/action-booking/action-booking.page.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var OtherBookingListPage = /*#__PURE__*/function () {
        // baseURL:any;
        function OtherBookingListPage(toastController, popoverController, restService, storage, router, menuCtrl, location, activatedRoute, alertController, plateform, loadingController, navController) {
          _classCallCheck(this, OtherBookingListPage);

          this.toastController = toastController;
          this.popoverController = popoverController;
          this.restService = restService;
          this.storage = storage;
          this.router = router;
          this.menuCtrl = menuCtrl;
          this.location = location;
          this.activatedRoute = activatedRoute;
          this.alertController = alertController;
          this.plateform = plateform;
          this.loadingController = loadingController;
          this.navController = navController;
          this.pet = "puppies";
          this.page_number = 0;
          this.page_number_all = 0;
        }

        _createClass(OtherBookingListPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            /*   this.menuCtrl.enable(false); */
            this.activatedRoute.queryParams.subscribe(function (res) {
              _this.valres = res.value;
              console.log(res);
              console.log(_this.valres);

              if (_this.valres) {
                if (_this.valres == "pending") {
                  _this.pet = 'pending';
                } else if (_this.valres == "upcoming") {
                  _this.pet = 'upcoming';
                } else if (_this.valres == "cancel") {
                  _this.pet = 'cancel';
                }
              } else {
                _this.pet = 'pending';
                console.log('pending');
              }
            });
            this.storage.get('user_details').then(function (user_details) {
              console.log(user_details);
              _this.userID = user_details.users_id;
              _this.Email = user_details.email;
              _this.currencyID = user_details.currencies_id;

              _this.getCarList();

              _this.storage.get('base_urls').then(function (base_url) {
                _this.base_url = base_url;
              });

              _this.storage.get('currency_symbol').then(function (currency_symbol) {
                _this.currency_symbol = currency_symbol;
              });
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.plateform.is('ios')) {
              this.plateformCheck = "ios";
            } else {
              this.plateformCheck = "android";
            }
          }
        }, {
          key: "giveRating",
          value: function giveRating(bookingId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var popover;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.popoverController.create({
                        component: _give_rating_give_rating_page__WEBPACK_IMPORTED_MODULE_6__["GiveRatingPage"],
                        backdropDismiss: false,
                        translucent: true,
                        componentProps: {
                          "data": bookingId,
                          "booking": 'cancel_booking'
                        }
                      });

                    case 2:
                      popover = _context.sent;
                      popover.onWillDismiss().then(function (data) {
                        console.log(data);
                        console.log(data.data.val);

                        if (data.data.val == 'ok') {
                          _this2.getCarList();
                        }
                      });
                      _context.next = 6;
                      return popover.present();

                    case 6:
                      return _context.abrupt("return", _context.sent);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "doInfinite",
          value: function doInfinite(event, type) {
            this.getOtherBookings(true, event, type);
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event, type) {
            console.log(type, "typetypetype");
            console.log('Begin async operation');
            this.getOtherBookings(false, event, type, "refresher"); //this.getCarList(event)  
          }
        }, {
          key: "getOtherBookings",
          value: function getOtherBookings(isFirstLoad, event, type, refresher, loader) {
            var _this3 = this;

            if (loader) {
              this.present();
            }

            var offset = 0;

            if (isFirstLoad == false) {
              this.page_number = offset;
            }

            var stringy = JSON.stringify({
              "requestType": "others_" + type,
              "usersID": this.userID,
              "currencyID": this.currencyID,
              "limit": 3,
              "offset": this.page_number
            });
            console.log(stringy);
            this.restService.bookings(stringy).subscribe(function (response) {
              var _a, _b, _c, _d;

              if (isFirstLoad) {
                event.target.complete();
              }

              _this3.page_number = _this3.page_number + 3;

              if (refresher) {
                event.target.complete();
              }

              _this3.response = JSON.parse(response['_body']);

              if (loader) {
                _this3.dismiss();
              }

              console.log(_this3.response);

              if (type == "previous") {
                if (isFirstLoad == false) {
                  _this3.previousBooking = [];
                }

                console.log("previous_arraysss", _this3.previousBooking);
                _this3.previousBooking = [].concat(_toConsumableArray(_this3.previousBooking), _toConsumableArray(_this3.response.previous_bookings));

                if (_this3.previousBooking) {
                  if (_this3.previousBooking[0].bookings_id == null) {
                    _this3.previousBooking = [];
                  }
                }
              } else if (type == "cancel") {
                if (isFirstLoad == false) {
                  _this3.cancelsBooking = [];
                }

                _this3.cancelsBooking = [].concat(_toConsumableArray(_this3.cancelsBooking), _toConsumableArray(_this3.response.canceled_bookings));

                if (_this3.cancelsBooking) {
                  if (((_a = _this3.cancelsBooking[0]) === null || _a === void 0 ? void 0 : _a.bookings_id) == null) {
                    _this3.cancelsBooking = [];
                  }
                }
              } else if (type == "current") {
                if (isFirstLoad == false) {
                  _this3.currentBooking = [];
                }

                _this3.currentBooking = [].concat(_toConsumableArray(_this3.currentBooking), _toConsumableArray(_this3.response.current_bookings));

                if (_this3.currentBooking) {
                  if (((_b = _this3.currentBooking[0]) === null || _b === void 0 ? void 0 : _b.bookings_id) == null) {
                    _this3.currentBooking = [];
                  }
                }
              } else if (type == "upcoming") {
                if (isFirstLoad == false) {
                  _this3.upcomingBooking = [];
                }

                _this3.upcomingBooking = [].concat(_toConsumableArray(_this3.upcomingBooking), _toConsumableArray(_this3.response.upcoming_bookings));

                if (_this3.upcomingBooking.length != 0) {
                  if (((_c = _this3.upcomingBooking[0]) === null || _c === void 0 ? void 0 : _c.bookings_id) == null || undefined) {
                    _this3.upcomingBooking = [];
                  }
                }
              } else if (type == "pending") {
                if (isFirstLoad == false) {
                  _this3.pending_bookings = [];
                }

                _this3.pending_bookings = [].concat(_toConsumableArray(_this3.pending_bookings), _toConsumableArray(_this3.response.pending_bookings));

                if (_this3.pending_bookings.length != 0) {
                  if (((_d = _this3.pending_bookings[0]) === null || _d === void 0 ? void 0 : _d.bookings_id) == null) {
                    _this3.pending_bookings = [];
                  }
                }
              }
            }, function (err) {});
          }
        }, {
          key: "getCarList",
          value: function getCarList(event) {
            var _this4 = this;

            this.page_number = 0;
            this.present();
            var stringy = JSON.stringify({
              "requestType": "others_cars",
              "usersID": this.userID,
              "currencyID": this.currencyID,
              "limit": 3,
              "offset": this.page_number
            });
            console.log(stringy);
            this.restService.bookings(stringy).subscribe(function (response) {
              _this4.dismiss();

              if (event) {
                event.target.complete();
              }

              _this4.page_number = _this4.page_number + 3;
              _this4.response = JSON.parse(response['_body']);
              console.log(_this4.response);
              _this4.previousBooking = _this4.response.previous_bookings;
              _this4.cancelsBooking = _this4.response.canceled_bookings;
              _this4.currentBooking = _this4.response.current_bookings;
              _this4.pending_bookings = _this4.response.pending_bookings;
              _this4.upcomingBooking = _this4.response.upcoming_bookings;

              if (_this4.previousBooking) {
                if (_this4.previousBooking[0].bookings_id == null) {
                  _this4.previousBooking = [];
                }
              }

              if (_this4.cancelsBooking) {
                if (_this4.cancelsBooking[0].bookings_id == null) {
                  _this4.cancelsBooking = [];
                }
              }

              if (_this4.currentBooking) {
                if (_this4.currentBooking[0].bookings_id == null) {
                  _this4.currentBooking = [];
                }
              }

              if (_this4.pending_bookings.length != 0) {
                if (_this4.pending_bookings[0].bookings_id == null) {
                  _this4.pending_bookings = [];
                }
              }

              if (_this4.upcomingBooking.length != 0) {
                if (_this4.upcomingBooking[0].bookings_id == null || undefined) {
                  _this4.upcomingBooking = [];
                }
              }

              console.log(_this4.pending_bookings); //  if(this.pending_bookings[0].bookings_id == null){
              //   this.upcomingBooking = [];
              //  }
            }, function (err) {});
          }
        }, {
          key: "getpet",
          value: function getpet(val) {
            this.pet = val;
          }
        }, {
          key: "alertBooking",
          value: function alertBooking(booking) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this5 = this;

              var popover;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.data = booking;
                      console.log(booking, "booking from html");
                      console.log(this.data, "get from booking ");
                      _context2.next = 5;
                      return this.popoverController.create({
                        component: _action_booking_action_booking_page__WEBPACK_IMPORTED_MODULE_7__["ActionBookingPage"],
                        backdropDismiss: false,
                        translucent: true,
                        componentProps: {
                          "data": this.data.bookings_id,
                          "booking": 'payment_booking',
                          "ownerID": this.data.veh_users_id,
                          "userID": this.data.booked_by_users_id
                        }
                      });

                    case 5:
                      popover = _context2.sent;
                      popover.onWillDismiss().then(function (data) {
                        console.log(data);
                        console.log(data.data.val);

                        if (data.data.val == 'ok') {
                          _this5.pet = "cancel";

                          _this5.paynow(booking);
                        }
                      });
                      _context2.next = 9;
                      return popover.present();

                    case 9:
                      return _context2.abrupt("return", _context2.sent);

                    case 10:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "completeBooking",
          value: function completeBooking(booking, index) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this6 = this;

              var popover;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.data = booking;
                      console.log(booking, "booking from html");
                      console.log(this.data, "get from booking ");
                      _context3.next = 5;
                      return this.popoverController.create({
                        component: _action_booking_action_booking_page__WEBPACK_IMPORTED_MODULE_7__["ActionBookingPage"],
                        backdropDismiss: false,
                        translucent: true,
                        componentProps: {
                          "data": this.data.bookings_id,
                          "booking": 'complete_booking',
                          "ownerID": this.data.veh_users_id,
                          "userID": this.data.booked_by_users_id
                        }
                      });

                    case 5:
                      popover = _context3.sent;
                      popover.onWillDismiss().then(function (data) {
                        console.log(data);
                        console.log(data.data.val);

                        if (data.data.val == 'ok') {
                          _this6.getOtherBookings(false, null, "previous", null, "loader");

                          _this6.currentBooking.splice(index, 1);

                          _this6.pet = "previous"; // -- Give ratting -- //

                          _this6.giveRating(_this6.data.bookings_id); // -- Give ratting -- //

                        }
                      });
                      _context3.next = 9;
                      return popover.present();

                    case 9:
                      return _context3.abrupt("return", _context3.sent);

                    case 10:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "cancelBooking",
          value: function cancelBooking(booking, index) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this7 = this;

              var popover;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.data = booking;
                      console.log(booking, "booking from html");
                      console.log(this.data, "get from booking ");
                      _context4.next = 5;
                      return this.popoverController.create({
                        component: _action_booking_action_booking_page__WEBPACK_IMPORTED_MODULE_7__["ActionBookingPage"],
                        backdropDismiss: false,
                        translucent: true,
                        componentProps: {
                          "data": this.data.bookings_id,
                          "booking": 'cancel_booking',
                          "ownerID": this.data.veh_users_id,
                          "userID": this.data.booked_by_users_id
                        }
                      });

                    case 5:
                      popover = _context4.sent;
                      popover.onWillDismiss().then(function (data) {
                        console.log(data);
                        console.log(data.data.val);

                        if (data.data.val == 'ok') {
                          _this7.getOtherBookings(false, null, "cancel", null, "loader");

                          _this7.pending_bookings.splice(index, 1);

                          _this7.pet = "cancel"; //this.getCarList();
                        }
                      });
                      _context4.next = 9;
                      return popover.present();

                    case 9:
                      return _context4.abrupt("return", _context4.sent);

                    case 10:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "paynow",
          value: function paynow(bookingdetails) {
            console.log(bookingdetails);
            console.log(bookingdetails.veh_imgs);
            var myData = JSON.stringify({
              booking_details: bookingdetails,
              vehicle_imgs: bookingdetails.veh_imgs
            });
            this.router.navigate(['/summary'], {
              queryParams: {
                value: myData
              }
            });
          }
        }, {
          key: "ViewNow",
          value: function ViewNow(bookingdetails) {
            console.log(bookingdetails);
            console.log(bookingdetails.veh_imgs);
            var myData = JSON.stringify({
              booking_details: bookingdetails,
              vehicle_imgs: bookingdetails.veh_imgs
            });
            this.router.navigate(['/booking-detail-view'], {
              queryParams: {
                pageType: "others_booking",
                tabType: this.pet,
                value: myData
              }
            });
          }
        }, {
          key: "toggleMenu",
          value: function toggleMenu() {
            this.menuCtrl.toggle();
          }
        }, {
          key: "back",
          value: function back() {
            // this.router.navigate(['/bookings']);
            this.navController.navigateRoot(['/bookings']);
          }
        }, {
          key: "BookNow",
          value: function BookNow() {
            var _this8 = this;

            this.present();
            var stringy = JSON.stringify({
              "requestType": 'all_cars_list',
              "usersID": this.userID,
              "currencyID": this.currencyID,
              "limit": 4,
              "offset": this.page_number_all
            });
            console.log(stringy);
            this.restService.filters(stringy).subscribe(function (response) {
              _this8.response = JSON.parse(response['_body']);

              if (_this8.response.status == 'NotFound') {
                _this8.presentToast('Data Not Found!');
              } else if (_this8.response.status == 'Found') {
                console.log(_this8.response.cars_list_result);
                var myData = JSON.stringify({
                  cars_list_result: _this8.response.cars_list_result
                });
                _this8.restService.fromHomeToSearch = myData;

                _this8.dismiss();

                _this8.router.navigate(['/car-list']);
              }
            }, function (err) {});
          }
        }, {
          key: "presentToast",
          value: function presentToast(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var toast;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.toastController.create({
                        message: msg,
                        duration: 2000,
                        position: 'top'
                      });

                    case 2:
                      toast = _context5.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "pendingAlert",
          value: function pendingAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var alert, _yield$alert$onDidDis, role;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Booking Infomation',
                        subHeader: 'Booking Status Pending',
                        message: 'Your booking status is Pending, you can proceed when it is Accepted by the owner',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context6.sent;
                      _context6.next = 5;
                      return alert.present();

                    case 5:
                      _context6.next = 7;
                      return alert.onDidDismiss();

                    case 7:
                      _yield$alert$onDidDis = _context6.sent;
                      role = _yield$alert$onDidDis.role;
                      console.log('onDidDismiss resolved with role', role);

                    case 10:
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
          key: "waitingAlert",
          value: function waitingAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var msg, alert, _yield$alert$onDidDis2, role;

              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      msg = "";
                      msg = "Your payment is received waiting for admin response";
                      _context9.next = 4;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Waiting for approval',
                        message: msg,
                        buttons: ['OK']
                      });

                    case 4:
                      alert = _context9.sent;
                      _context9.next = 7;
                      return alert.present();

                    case 7:
                      _context9.next = 9;
                      return alert.onDidDismiss();

                    case 9:
                      _yield$alert$onDidDis2 = _context9.sent;
                      role = _yield$alert$onDidDis2.role;
                      console.log('onDidDismiss resolved with role', role);

                    case 12:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "chatRequest",
          value: function chatRequest(pageType, tabType, bookingDetails) {
            var _this9 = this;

            console.log("bookingDetails", bookingDetails);
            var current_date = new Date();
            var end_dates = new Date(bookingDetails.end_date);

            if (end_dates.getTime() < current_date.getTime() && bookingDetails.status === "Accepted") {
              this.chatAlert(bookingDetails.status, bookingDetails.end_date, bookingDetails.payment_status);
            } else {
              if (this.userID) {
                if (pageType == "listed_booking") {
                  var stringy = JSON.stringify({
                    "requestType": 'chatRequest',
                    "otherUserId": bookingDetails.booked_by_users_id,
                    "usersID": this.userID
                  });
                } else {
                  var stringy = JSON.stringify({
                    "requestType": 'chatRequest',
                    "otherUserId": bookingDetails.veh_users_id,
                    "usersID": this.userID
                  });
                }

                console.log(stringy);
                this.restService.update_messages(stringy).subscribe(function (response) {
                  _this9.response = JSON.parse(response['_body']);
                  console.log(_this9.response);

                  if (_this9.response.status == 'error') {} else if (_this9.response.status == 'AlreadySent' || _this9.response.status == 'RequestSend') {
                    if (pageType == "listed_booking") {
                      var myData = JSON.stringify({
                        otherUserId: bookingDetails.booked_by_users_id,
                        userID: _this9.userID,
                        user_name: _this9.response.user_name,
                        profile_img: _this9.response.profile_img
                      });
                    } else {
                      var myData = JSON.stringify({
                        otherUserId: bookingDetails.veh_users_id,
                        userID: _this9.userID,
                        user_name: _this9.response.user_name,
                        profile_img: _this9.response.profile_img
                      });
                    }

                    console.log(myData);

                    _this9.router.navigate(['/chat-detail'], {
                      queryParams: {
                        value: myData
                      }
                    });
                  }
                }, function (err) {});
              } else {
                this.router.navigate(['/login']);
              }
            }

            console.log("bookingDetailsbookingDetails", bookingDetails);
          }
        }, {
          key: "chatAlert",
          value: function chatAlert(status, end_date, paymentStatus) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var msg, current_date, end_dates, alert, _yield$alert$onDidDis3, role;

              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      msg = "";
                      current_date = new Date();
                      end_dates = new Date(end_date);
                      console.log(end_dates.getTime(), "end_dateend_dateend_date");
                      console.log(current_date.getTime(), "current_datecurrent_date");
                      console.log("currentStatus", status);

                      if (status === "Completed" && paymentStatus == "Paid" || end_dates.getTime() < current_date.getTime() && status === "Accepted" && paymentStatus == "Paid") {
                        msg = "Booking is completed";
                      } else if (status === "Cancelled") {
                        msg = "Booking is cancelled";
                      } else if (status === "Rejected") {
                        msg = "Booking is rejected";
                      } else {
                        msg = "Chat can't be started until booking is confirmed";
                      }

                      _context10.next = 9;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Chat is disabled',
                        message: msg,
                        buttons: ['OK']
                      });

                    case 9:
                      alert = _context10.sent;
                      _context10.next = 12;
                      return alert.present();

                    case 12:
                      _context10.next = 14;
                      return alert.onDidDismiss();

                    case 14:
                      _yield$alert$onDidDis3 = _context10.sent;
                      role = _yield$alert$onDidDis3.role;
                      console.log('onDidDismiss resolved with role', role);

                    case 17:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }]);

        return OtherBookingListPage;
      }();

      OtherBookingListPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
        }, {
          type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }];
      };

      OtherBookingListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-other-booking-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./other-booking-list.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/other-booking-list/other-booking-list.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./other-booking-list.page.scss */
        "./src/app/other-booking-list/other-booking-list.page.scss"))["default"]]
      })], OtherBookingListPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=other-booking-list-other-booking-list-module-es5.js.map