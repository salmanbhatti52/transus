(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["booking-list-booking-list-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/booking-list/booking-list.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/booking-list/booking-list.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppBookingListBookingListPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"header_pdds\">\n    <ion-buttons slot=\"start\">\n      <img src=\"assets/img/Arrow.svg\" (click)=\"back()\">\n    </ion-buttons>\n    <ion-title>Bookings</ion-title>\n    \n   </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"chevron-down-circle-outline\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher> \n  <ion-toolbar class=\"cstomHeader\" no-border-top>\n    <ion-row class=\"main_tab\">\n      <ion-col class=\"name_tabs\"   (click)=\"getpet('cancel')\" [class.active_tab]=\"pet == 'cancel'\" >Cancel</ion-col>\n      <ion-col  class=\"name_tabs\"  (click)=\"getpet('previous')\" [class.active_tab]=\"pet == 'previous'\" >Previous</ion-col>\n      <ion-col  class=\"name_tabs\"  (click)=\"getpet('current')\" [class.active_tab]=\"pet == 'current'\">Current</ion-col>\n      <ion-col  class=\"name_tabs\"  (click)=\"getpet('upcoming')\" [class.active_tab]=\"pet == 'upcoming'\">Upcoming</ion-col>\n      <ion-col  class=\"name_tabs\"  (click)=\"getpet('request')\" [class.active_tab]=\"pet == 'request'\">Requests</ion-col>\n    </ion-row>\n    <!-- <ion-segment [(ngModel)]=\"pet\">\n      <ion-segment-button class=\"dark_p_color\"  value=\"cancel\" (ionSelect)=\"getCancel()\">\n        Cancel  \n      </ion-segment-button>\n      <ion-segment-button class=\"dark_p_color\"  value=\"previous\" (ionSelect)=\"getPrevious()\">\n        Previous  \n      </ion-segment-button>\n      <ion-segment-button class=\"dark_p_color\"  value=\"current\" (ionSelect)=\"getCurrent()\">\n        Current  \n      </ion-segment-button>\n      <ion-segment-button class=\"dark_p_color\"  value=\"upcoming\" (ionSelect)=\"getUpcoming()\">\n       Upcoming\n      </ion-segment-button>\n      <ion-segment-button  class=\"dark_p_color\" value=\"request\" (ionSelect)=\"getRequest()\">\n        Requests\n       </ion-segment-button>\n    </ion-segment> -->\n  </ion-toolbar>\n\n \n  <div [ngSwitch]=\"pet\">\n\n    <ion-list *ngSwitchCase=\"'cancel'\">\n      <ng-container *ngIf=\"cancelsBooking?.length == 0\">\n        <ion-row>\n          <ion-col class=\"ion-text-center\">\n              <h2>Data Not Found!</h2>\n          </ion-col>\n        </ion-row>\n      </ng-container>\n      <ng-container *ngFor=\"let p of cancelsBooking; let i = index\">\n        <ng-container *ngIf=\"p.bookings_id\">\n        <ion-row   class=\"pd_bs\" *ngIf=\"i % 2 === 0\">\n          <ion-col (click)=\"ViewNow(p)\" size=\"4\" class=\"lambo\">\n              <h4>{{p.model_name}}</h4>\n              <!-- <img src=\"assets/img/Lambo.svg\"> -->\n              <ng-container *ngIf=\"p.veh_imgs?.length > 0\">\n                <ng-container *ngFor=\"let img of p.veh_imgs; let j = index\">\n                  <img style=\"border-radius: 11px;\n    height: 145px;\" *ngIf=\"j == 0\" src=\"{{base_url}}{{img}}\">\n                </ng-container>\n              </ng-container>\n              <ng-container *ngIf=\"p.veh_imgs?.length < 0\">\n                <img src=\"assets/img/Lambo.svg\">\n              </ng-container>\n          </ion-col>\n          <ion-col (click)=\"ViewNow(p)\" class=\"trip_dates\" size=\"4\">\n              <p class=\"blue\">Trip Dates</p>\n              <p class=\"primary\">Start Date</p>\n              <p>{{p.start_date | customeDate}}</p>\n              <p class=\"primary\">Total Cost</p>\n              <p>{{currency_symbol}} {{p.trip_cost}}</p>\n              \n           \n          </ion-col>\n          <ion-col (click)=\"ViewNow(p)\" class=\"trip_end_date\" size=\"4\">\n            <p class=\"primary\"> End Date</p>\n            <p>{{p.end_date | customeDate}}</p>\n           \n            <p class=\"primary\"> Booking Status</p>\n            <p>{{p.status}}</p>\n          </ion-col>\n        </ion-row>\n        <ion-row   class=\"pd_bs bg_grey\" *ngIf=\"i % 2 != 0\">\n          <ion-col (click)=\"ViewNow(p)\" size=\"4\" class=\"lambo\">\n              <h4>{{p.model_name}}</h4>\n              <!-- <img src=\"assets/img/Lambo.svg\"> -->\n              <ng-container *ngIf=\"p.veh_imgs?.length > 0\">\n                <ng-container *ngFor=\"let img of p.veh_imgs; let j = index\">\n                  <img style=\"border-radius: 11px;\n    height: 145px;\" *ngIf=\"j == 0\" src=\"{{base_url}}{{img}}\">\n                </ng-container>\n              </ng-container>\n              <ng-container *ngIf=\"p.veh_imgs?.length < 0\">\n                <img src=\"assets/img/Lambo.svg\">\n              </ng-container>\n          </ion-col>\n          <ion-col (click)=\"ViewNow(p)\" class=\"trip_dates\" size=\"4\">\n              <p class=\"blue\">Trip Dates</p>\n              <p class=\"primary\">Start Date</p>\n              <p>{{p.start_date | customeDate}}</p>\n              <p class=\"primary\">Total Cost</p>\n              <p>{{currency_symbol}} {{p.trip_cost}}</p>\n              <!--p class=\"give_rating\">Give Ratings</p-->\n          </ion-col>\n          <ion-col (click)=\"ViewNow(p)\" class=\"trip_end_date\" size=\"4\">\n            <p class=\"primary\"> End Date</p>\n            <p>{{p.end_date | customeDate}}</p>\n            <p (click)=\"ViewNow(p)\" class=\"primary\"> Booking Status</p>\n            <p (click)=\"ViewNow(p)\">{{p.status}}</p>\n          </ion-col>\n        </ion-row> \n      </ng-container>\n      </ng-container> \n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase=\"'previous'\">\n      <ng-container *ngIf=\"previousBooking?.length == 0\">\n        <ion-row>\n          <ion-col class=\"ion-text-center\">\n              <h2>Data Not Found!</h2>\n          </ion-col>\n        </ion-row>\n      </ng-container>\n      <ng-container *ngFor=\"let p of previousBooking; let i = index\">\n        <ng-container *ngIf=\"p.bookings_id\">\n        <ion-row   class=\"pd_bs\" *ngIf=\"i % 2 === 0\">\n          <ion-col (click)=\"ViewNow(p)\" size=\"4\" class=\"lambo\">\n              <h4>{{p.model_name}}</h4>\n              <!-- <img src=\"assets/img/Lambo.svg\"> -->\n              <ng-container *ngIf=\"p.veh_imgs?.length > 0\">\n                <ng-container *ngFor=\"let img of p.veh_imgs; let j = index\">\n                  <img style=\"border-radius: 11px;\n    height: 145px;\" *ngIf=\"j == 0\" src=\"{{base_url}}{{img}}\">\n                </ng-container>\n              </ng-container>\n              <ng-container *ngIf=\"p.veh_imgs?.length < 0\">\n                <img src=\"assets/img/Lambo.svg\">\n              </ng-container>\n          </ion-col>\n          <ion-col (click)=\"ViewNow(p)\" class=\"trip_dates\" size=\"4\">\n              <p class=\"blue\">Trip Dates</p>\n              <p class=\"primary\">Start Date</p>\n              <p>{{p.start_date | customeDate}}</p>\n              <p class=\"primary\">Total Cost</p>\n              <p>{{currency_symbol}} {{p.trip_cost}}</p>\n              <div class=\"star\" >\n                <p class=\"star_list\" *ngIf=\"p.ratting_stars === '5'\"> \n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/yellow_star.svg\">\n                </p>\n                <p class=\"star_list\" *ngIf=\"p.ratting_stars === '4'\"> \n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/grey_star.svg\">\n                </p>\n                <p class=\"star_list\" *ngIf=\"p.ratting_stars === '3'\"> \n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/grey_star.svg\">\n                  <img src=\"assets/img/grey_star.svg\">\n                </p>\n                <p class=\"star_list\" *ngIf=\"p.ratting_stars === '2'\"> \n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/grey_star.svg\">\n                  <img src=\"assets/img/grey_star.svg\">\n                  <img src=\"assets/img/grey_star.svg\">\n                </p>\n                <p class=\"star_list\" *ngIf=\"p.ratting_stars === '1'\"> \n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/grey_star.svg\">\n                  <img src=\"assets/img/grey_star.svg\">\n                  <img src=\"assets/img/grey_star.svg\">\n                  <img src=\"assets/img/grey_star.svg\">\n                </p>\n              </div>\n          </ion-col>\n          <ion-col (click)=\"ViewNow(p)\" class=\"trip_end_date\" size=\"4\">\n            <p class=\"primary\"> End Date</p>\n            <p>{{p.end_date | customeDate}}</p>\n            <p (click)=\"ViewNow(p)\" class=\"primary\"> Booking Status</p>\n            <p (click)=\"ViewNow(p)\">{{p.status}}</p>\n          </ion-col>\n        </ion-row>\n        <ion-row   class=\"pd_bs bg_grey\" *ngIf=\"i % 2 != 0\">\n          <ion-col (click)=\"ViewNow(p)\" size=\"4\" class=\"lambo\">\n              <h4>{{p.model_name}}</h4>\n              <!-- <img src=\"assets/img/Lambo.svg\"> -->\n              <ng-container *ngIf=\"p.veh_imgs?.length > 0\">\n                <ng-container *ngFor=\"let img of p.veh_imgs; let j = index\">\n                  <img style=\"border-radius: 11px;\n    height: 145px;\" *ngIf=\"j == 0\" src=\"{{base_url}}{{img}}\">\n                </ng-container>\n              </ng-container>\n              <ng-container *ngIf=\"p.veh_imgs?.length < 0\">\n                <img src=\"assets/img/Lambo.svg\">\n              </ng-container>\n          </ion-col>\n          <ion-col (click)=\"ViewNow(p)\" class=\"trip_dates\" size=\"4\">\n              <p class=\"blue\">Trip Dates</p>\n              <p class=\"primary\">Start Date</p>\n              <p>{{p.start_date | customeDate}}</p>\n              <p class=\"primary\">Total Cost</p>\n              <p>{{currency_symbol}} {{p.trip_cost}}</p>\n              <!--p class=\"give_rating\">Give Ratings</p-->\n          </ion-col>\n          <ion-col  class=\"trip_end_date\" size=\"4\">\n            <p class=\"primary\"> End Date</p>\n            <p>{{p.end_date | customeDate}}</p>\n            <p (click)=\"ViewNow(p)\" class=\"primary\"> Booking Status</p>\n            <p (click)=\"ViewNow(p)\">{{p.status}}</p>\n            <p class=\"chatBtn\"  *ngIf=\"p.payment_status == 'Paid'\" (click)=\"chatRequest('listed_booking','',p)\">Start chat</p>\n          </ion-col>\n        </ion-row> \n      </ng-container>\n      </ng-container> \n    </ion-list>\n\n    <ion-list *ngSwitchCase=\"'current'\">\n      <ng-container *ngIf=\"currentBooking?.length == 0\">\n        <ion-row>\n          <ion-col class=\"ion-text-center\">\n              <h2>Data Not Found!</h2>\n          </ion-col>\n        </ion-row>\n      </ng-container>\n      <ng-container *ngFor=\"let p of currentBooking; let i = index\">\n        <ng-container *ngIf=\"p.bookings_id\">\n        <ion-row   class=\"pd_bs\" *ngIf=\"i % 2 === 0\">\n          <ion-col (click)=\"ViewNow(p)\" size=\"4\" class=\"lambo\">\n              <h4>{{p.model_name}}</h4>\n              <!-- <img src=\"assets/img/Lambo.svg\"> -->\n              <ng-container *ngIf=\"p.veh_imgs?.length > 0\">\n                <ng-container *ngFor=\"let img of p.veh_imgs; let j = index\">\n                  <img style=\"border-radius: 11px;\n    height: 145px;\" *ngIf=\"j == 0\" src=\"{{base_url}}{{img}}\">\n                </ng-container>\n              </ng-container>\n              <ng-container *ngIf=\"p.veh_imgs?.length < 0\">\n                <img src=\"assets/img/Lambo.svg\">\n              </ng-container>\n          </ion-col>\n          <ion-col  class=\"trip_dates\" size=\"4\">\n              <p (click)=\"ViewNow(p)\" class=\"blue\">Trip Dates</p>\n              <p (click)=\"ViewNow(p)\" class=\"primary\">Start Date</p>\n              <p (click)=\"ViewNow(p)\">{{p.start_date | customeDate}}</p>\n              <p  (click)=\"ViewNow(p)\" class=\"primary\">Total Cost</p>\n              <p (click)=\"ViewNow(p)\" >{{currency_symbol}} {{p.trip_cost}}</p>\n              <p class=\"action\"  *ngIf=\"p.payment_status == 'Paid' && p.owner_response == 'notDeliver' && p.renter_response == 'notRecevied'\" (click)=\"finalAction('listed_booking',p,'Deliver',i)\">Deliver</p>\n\n              <p class=\"action\"  *ngIf=\"p.payment_status == 'Paid' && p.owner_response == 'Delivered' && p.renter_response == 'notRecevied'\" >Waiting</p>\n\n              <p class=\"action\" style=\"background-color:#57be1a\"  *ngIf=\"p.payment_status == 'Paid' && p.owner_response == 'Delivered' && p.renter_response == 'Recevied'\" >Delivered</p>\n\n              <p class=\"action\"  *ngIf=\"p.payment_status == 'Paid' && p.owner_response == 'notRecevied' && p.renter_response == 'Delivered'\" (click)=\"finalAction('listed_booking',p,'Recevie',i)\">Recevie</p>\n\n               <p class=\"action\"  *ngIf=\"p.payment_status == 'Paid' && p.owner_response == 'Recevied' && p.renter_response == 'Delivered'\" >Recevied</p>\n\n          </ion-col>\n          <ion-col class=\"trip_end_date\" size=\"4\">\n            <p class=\"primary\"> End Date</p>\n            <p>{{p.end_date | customeDate}}</p>\n            <p class=\"primary\"> Booking Status</p>\n            <p>{{p.status}}</p>\n            <p class=\"chatBtn\"  *ngIf=\"p.payment_status == 'Paid'\" (click)=\"chatRequest('listed_booking','',p)\">Start chat</p>\n          </ion-col>\n        </ion-row>\n        <ion-row   class=\"pd_bs bg_grey\" *ngIf=\"i % 2 != 0\">\n          <ion-col (click)=\"ViewNow(p)\" size=\"4\" class=\"lambo\">\n              <h4>{{p.model_name}}</h4>\n              <!-- <img src=\"assets/img/Lambo.svg\"> -->\n              <ng-container *ngIf=\"p.veh_imgs?.length > 0\">\n                <ng-container *ngFor=\"let img of p.veh_imgs; let j = index\">\n                  <img style=\"border-radius: 11px;\n    height: 145px;\" *ngIf=\"j == 0\" src=\"{{base_url}}{{img}}\">\n                </ng-container>\n              </ng-container>\n              <ng-container *ngIf=\"p.veh_imgs?.length < 0\">\n                <img src=\"assets/img/Lambo.svg\">\n              </ng-container>\n          </ion-col>\n          <ion-col (click)=\"ViewNow(p)\" class=\"trip_dates\" size=\"4\">\n              <p class=\"blue\">Trip Dates</p>\n              <p class=\"primary\">Start Date</p>\n              <p>{{p.start_date | customeDate}}</p>\n              <p class=\"primary\">Total Cost</p>\n              <p>{{currency_symbol}} {{p.trip_cost}}</p>\n              <!--p class=\"give_rating\">Give Ratings</p-->\n              <p class=\"action\"  *ngIf=\"p.payment_status == 'Paid' && p.owner_response == 'notDeliver' && p.renter_response == 'notRecevied'\" (click)=\"finalAction('listed_booking',p,'Deliver',i)\">Deliver</p>\n\n              <p class=\"action\"  *ngIf=\"p.payment_status == 'Paid' && p.owner_response == 'Delivered' && p.renter_response == 'notRecevied'\" >Waiting</p>\n\n              <p class=\"action\" style=\"background-color:#57be1a\"  *ngIf=\"p.payment_status == 'Paid' && p.owner_response == 'Delivered' && p.renter_response == 'Recevied'\" >Delivered</p>\n\n              <p class=\"action\"  *ngIf=\"p.payment_status == 'Paid' && p.owner_response == 'notRecevied' && p.renter_response == 'Delivered'\" (click)=\"finalAction('listed_booking',p,'Recevie',i)\">Recevie</p>\n\n               <p class=\"action\"  *ngIf=\"p.payment_status == 'Paid' && p.owner_response == 'Recevied' && p.renter_response == 'Delivered'\" >Recevied</p>\n          </ion-col>\n          <ion-col  class=\"trip_end_date\" size=\"4\">\n            <p class=\"primary\"> End Date</p>\n            <p>{{p.end_date | customeDate}}</p>\n            <p (click)=\"ViewNow(p)\" class=\"primary\"> Booking Status</p>\n            <p (click)=\"ViewNow(p)\">{{p.status}}</p>\n            <p class=\"chatBtn\"  *ngIf=\"p.payment_status == 'Paid'\" (click)=\"chatRequest('listed_booking','',p)\">Start chat</p>\n          </ion-col>\n        </ion-row> \n      </ng-container>\n      </ng-container> \n    </ion-list>\n\n\n    <ion-list *ngSwitchCase=\"'upcoming'\">\n      <ng-container *ngIf=\"upcomingBooking?.length == 0\">\n        <ion-row>\n          <ion-col class=\"ion-text-center\">\n              <h2>Data Not Found!</h2>\n          </ion-col>\n        </ion-row>\n      </ng-container>\n      <ng-container *ngFor=\"let p of upcomingBooking; let i = index\">\n        <ng-container *ngIf=\"p.bookings_id\">\n      <ion-row   class=\"pd_bs\" *ngIf=\"i % 2 === 0\">\n        <ion-col (click)=\"ViewNow(p)\" size=\"4\" class=\"lambo\">\n            <h4>{{p.model_name}}</h4>\n            <!-- <img src=\"assets/img/Lambo.svg\"> -->\n            <ng-container *ngIf=\"p.veh_imgs?.length > 0\">\n              <ng-container *ngFor=\"let img of p.veh_imgs; let j = index\">\n                <img style=\"border-radius: 11px;\n    height:145px;\" *ngIf=\"j == 0\" src=\"{{base_url}}{{img}}\">\n              </ng-container>\n            </ng-container>\n            <ng-container *ngIf=\"p.veh_imgs?.length < 0\">\n              <img src=\"assets/img/Lambo.svg\">\n            </ng-container>\n        </ion-col>\n        <ion-col (click)=\"ViewNow(p)\" class=\"trip_dates\" size=\"4\">\n            <p class=\"blue\">Trip Dates</p>\n            <p class=\"primary\">Start Date</p>\n            <p>{{p.start_date | customeDate}}</p>\n            <p class=\"primary\">Total Cost</p>\n            <p>{{currency_symbol}} {{p.trip_cost}}</p>\n            <p class=\"danger\"  *ngIf=\"p.payment_status != 'Paid'\" (click)=\"cancel(p)\">Cancel</p>\n            <!--p class=\"star\">\n              <img src=\"assets/img/yellow_star.svg\">\n              <img src=\"assets/img/yellow_star.svg\">\n              <img src=\"assets/img/yellow_star.svg\">\n              <img src=\"assets/img/yellow_star.svg\">\n              <img src=\"assets/img/grey_star.svg\">\n            </p-->\n        </ion-col>\n        <ion-col  class=\"trip_end_date\" size=\"4\">\n          <p class=\"primary\"> End Date</p>\n          <p>{{p.end_date | customeDate}}</p>\n          <p (click)=\"ViewNow(p)\" class=\"primary\"> Booking Status</p>\n          <p (click)=\"ViewNow(p)\">{{p.status}}</p>\n          <p class=\"chatBtn\"  *ngIf=\"p.payment_status == 'Paid'\" (click)=\"chatRequest('listed_booking','',p)\">Start chat</p>\n        </ion-col>\n        \n      </ion-row>\n      <ion-row   class=\"pd_bs bg_grey\" *ngIf=\"i % 2 != 0\">\n        <ion-col (click)=\"ViewNow(p)\" size=\"4\" class=\"lambo\">\n            <h4>{{p.model_name}}</h4>\n            <!-- <img src=\"assets/img/Lambo.svg\"> -->\n            <ng-container *ngIf=\"p.veh_imgs?.length > 0\">\n              <ng-container *ngFor=\"let img of p.veh_imgs; let j = index\">\n                <img style=\"border-radius: 11px;\n    height:145px;\" *ngIf=\"j == 0\" src=\"{{base_url}}{{img}}\">\n              </ng-container>\n            </ng-container>\n            <ng-container *ngIf=\"p.veh_imgs?.length < 0\">\n              <img src=\"assets/img/Lambo.svg\">\n            </ng-container>\n        </ion-col>\n        <ion-col (click)=\"ViewNow(p)\" class=\"trip_dates\" size=\"4\">\n            <p class=\"blue\">Trip Dates</p>\n            <p class=\"primary\">Start Date</p>\n            <p>{{p.start_date | customeDate}}</p>\n            <p class=\"primary\">Total Cost</p>\n            <p>{{currency_symbol}} {{p.trip_cost}}</p>\n            <p class=\"danger\"  *ngIf=\"p.payment_status != 'Paid'\" (click)=\"cancel(p)\">Cancel</p>\n        </ion-col>\n        <ion-col  class=\"trip_end_date\" size=\"4\">\n          <p class=\"primary\"> End Date</p>\n          <p>{{p.end_date | customeDate}}</p>\n          <p (click)=\"ViewNow(p)\" class=\"primary\"> Booking Status</p>\n          <p (click)=\"ViewNow(p)\">{{p.status}}</p>\n          <p class=\"chatBtn\"  *ngIf=\"p.payment_status == 'Paid'\" (click)=\"chatRequest('listed_booking','',p)\">Start chat</p>\n        </ion-col>\n        \n      </ion-row> \n    </ng-container>\n    </ng-container>\n    </ion-list>\n\n\n    <ion-list *ngSwitchCase=\"'request'\">\n      <ng-container *ngIf=\"requested_bookings?.length == 0\">\n        <ion-row>\n          <ion-col class=\"ion-text-center\">\n              <h2>Data Not Found!</h2>\n          </ion-col>\n        </ion-row>\n      </ng-container>\n      <ng-container *ngFor=\"let p of requested_bookings; let i = index\">\n        <ng-container *ngIf=\"p.bookings_id\">\n        <ion-row   class=\"pd_bs\" *ngIf=\"i % 2 === 0\">\n          <ion-col (click)=\"ViewNow(p)\" size=\"4\" class=\"lambo\">\n              <h4>{{p.model_name}}</h4>\n              <!-- <img src=\"assets/img/Lambo.svg\"> -->\n              <ng-container *ngIf=\"p.veh_imgs?.length > 0\">\n                <ng-container *ngFor=\"let img of p.veh_imgs; let j = index\">\n                  <img style=\"border-radius: 11px;\n    height: 145px;\" *ngIf=\"j == 0\" src=\"{{base_url}}{{img}}\">\n                </ng-container>\n              </ng-container>\n              <ng-container *ngIf=\"p.veh_imgs?.length < 0\">\n                <img src=\"assets/img/Lambo.svg\">\n              </ng-container>\n     \n          </ion-col>\n          <ion-col  class=\"trip_dates\" size=\"4\">\n              <p class=\"blue\" (click)=\"ViewNow(p)\">Trip Dates</p>\n              <p class=\"primary\" (click)=\"ViewNow(p)\">Start Date</p>\n              <p (click)=\"ViewNow(p)\">{{p.start_date | customeDate}}</p>\n              <p class=\"primary\" (click)=\"ViewNow(p)\">Total Cost</p>\n              <p (click)=\"ViewNow(p)\">{{currency_symbol}} {{p.trip_cost}}</p>\n              <p class=\"danger\" *ngIf=\"p.status != 'Waiting' \" (click)=\"reject(p)\">Reject</p>\n              \n          </ion-col>\n          <ion-col class=\"trip_end_date\" size=\"4\">\n            <p class=\"primary\"> End Date</p>\n            <p>{{p.end_date | customeDate}}</p>\n            <p (click)=\"ViewNow(p)\" class=\"primary\"> Booking Status</p>\n            <p (click)=\"ViewNow(p)\">{{p.status}}</p>\n            <p class=\"accept\" *ngIf=\"p.status == 'Pending' \" (click)=\"accept(p)\">Accept</p>\n            <p class=\"accept-unpaid\" *ngIf=\"p.status == 'Accepted' \" (click)=\"acceptUnapid()\">Unpaid</p>\n         \n\n          </ion-col>\n        </ion-row>\n        <ion-row  class=\"pd_bs bg_grey\" *ngIf=\"i % 2 != 0\">\n          <ion-col (click)=\"ViewNow(p)\" size=\"4\" class=\"lambo\">\n              <h4>{{p.model_name}}</h4>\n              <!-- <img src=\"assets/img/Lambo.svg\"> -->\n              <ng-container *ngIf=\"p.veh_imgs?.length > 0\">\n                <ng-container *ngFor=\"let img of p.veh_imgs; let j = index\">\n                  <img style=\"border-radius: 11px;\n    height: 145px;\" *ngIf=\"j == 0\" src=\"{{base_url}}{{img}}\">\n                </ng-container>\n              </ng-container>\n              <ng-container *ngIf=\"p.veh_imgs?.length < 0\">\n                <img src=\"assets/img/Lambo.svg\">\n              </ng-container>\n          </ion-col>\n          <ion-col  class=\"trip_dates\" size=\"4\">\n              <p class=\"blue\" (click)=\"ViewNow(p)\">Trip Dates</p>\n              <p class=\"primary\" (click)=\"ViewNow(p)\">Start Date</p>\n              <p (click)=\"ViewNow(p)\">{{p.start_date | customeDate}}</p>\n              <p class=\"primary\" (click)=\"ViewNow(p)\">Total Cost</p>\n              <p (click)=\"ViewNow(p)\">{{currency_symbol}} {{p.trip_cost}}</p>\n              <p class=\"danger\"  *ngIf=\"p.status != 'Waiting'\" (click)=\"reject(p)\">Reject</p>\n          </ion-col>\n          <ion-col class=\"trip_end_date\" size=\"4\">\n            <p class=\"primary\"> End Date</p>\n            <p>{{p.end_date | customeDate}}</p>\n            <p (click)=\"ViewNow(p)\" class=\"primary\"> Booking Status</p>\n            <p (click)=\"ViewNow(p)\">{{p.status}}</p>\n            <p class=\"accept\" *ngIf=\"p.status == 'Pending' \" (click)=\"accept(p)\">Accept</p>\n            <p class=\"accept-unpaid\" *ngIf=\"p.status == 'Accepted' \" (click)=\"acceptUnapid()\">Unpaid</p>\n          </ion-col>\n        </ion-row>\n      </ng-container> \n      </ng-container>\n    </ion-list>\n  </div>\n\n</ion-content>\n<ion-footer>\n  <div class=\"btn_fixed\">\n    <ion-button color=\"secondary\" expand=\"block\" shape=\"round\" (click)=\"BookNow()\">Book Now</ion-button>\n  </div>\n</ion-footer>\n";
      /***/
    },

    /***/
    "./src/app/booking-list/booking-list-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/booking-list/booking-list-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: BookingListPageRoutingModule */

    /***/
    function srcAppBookingListBookingListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookingListPageRoutingModule", function () {
        return BookingListPageRoutingModule;
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


      var _booking_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./booking-list.page */
      "./src/app/booking-list/booking-list.page.ts");

      var routes = [{
        path: '',
        component: _booking_list_page__WEBPACK_IMPORTED_MODULE_3__["BookingListPage"]
      }];

      var BookingListPageRoutingModule = /*#__PURE__*/_createClass(function BookingListPageRoutingModule() {
        _classCallCheck(this, BookingListPageRoutingModule);
      });

      BookingListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BookingListPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/booking-list/booking-list.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/booking-list/booking-list.module.ts ***!
      \*****************************************************/

    /*! exports provided: BookingListPageModule */

    /***/
    function srcAppBookingListBookingListModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookingListPageModule", function () {
        return BookingListPageModule;
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


      var _booking_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./booking-list-routing.module */
      "./src/app/booking-list/booking-list-routing.module.ts");
      /* harmony import */


      var _booking_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./booking-list.page */
      "./src/app/booking-list/booking-list.page.ts");
      /* harmony import */


      var _custome_date_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../custome-date.pipe */
      "./src/app/custome-date.pipe.ts");

      var BookingListPageModule = /*#__PURE__*/_createClass(function BookingListPageModule() {
        _classCallCheck(this, BookingListPageModule);
      });

      BookingListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _booking_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookingListPageRoutingModule"]],
        declarations: [_booking_list_page__WEBPACK_IMPORTED_MODULE_6__["BookingListPage"], _custome_date_pipe__WEBPACK_IMPORTED_MODULE_7__["CustomeDatePipe"]]
      })], BookingListPageModule);
      /***/
    },

    /***/
    "./src/app/booking-list/booking-list.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/booking-list/booking-list.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppBookingListBookingListPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --background: #C4932F;\n}\n\n.header_pd {\n  padding: 0.8em 0.1em 0 0;\n}\n\n@media only screen and (min-height: 800px) {\n  .header_pd {\n    padding: 0.5em 0.1em 8px 0;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n  text-transform: capitalize;\n}\n\n.cstomHeader {\n  --background: #fff;\n}\n\n.segment-button-checked {\n  background: #F7F8FA;\n  color: #464646;\n}\n\n.bg_grey {\n  background: #F9F9F9;\n}\n\n.pd_bs {\n  padding: 0.7em 1em;\n  position: relative;\n  padding-bottom: 35px !important;\n}\n\n.lambo h4 {\n  margin: 0px;\n  margin-bottom: 3px;\n}\n\n.trip_dates {\n  font-size: 10px;\n  padding-top: 2.4em;\n  padding-left: 1.3em;\n}\n\n.trip_dates p {\n  margin: 0px;\n  margin-top: 6px;\n}\n\n.blue {\n  color: #1A6BBE;\n}\n\n.primary {\n  color: #C4932F;\n}\n\n.trip_end_date {\n  font-size: 10px;\n  padding-top: 4.2em;\n  padding-left: 1.3em;\n}\n\n.trip_end_date p {\n  margin: 0px;\n  margin-top: 6.2px;\n}\n\n.star img:first-child {\n  margin-left: 0px !important;\n}\n\n.star img {\n  margin-left: 4px;\n}\n\n.give_rating {\n  background: #C4932F;\n  color: #fff;\n  padding: 0.7em;\n  border-radius: 25px;\n  width: 100%;\n  text-align: center;\n  margin: 0px;\n  margin-top: 10px !important;\n}\n\n.danger {\n  background: #D93A3A;\n  color: #fff;\n  padding: 0.7em;\n  border-radius: 25px;\n  width: 100%;\n  text-align: center;\n  margin: 0px;\n  /* margin-top: 10px !important; */\n  position: absolute;\n  width: 85%;\n  position: absolute;\n  border: 0px;\n}\n\n.chatBtn {\n  background: #c4932f;\n  color: #fff;\n  padding: 0.7em;\n  border-radius: 25px;\n  width: 100%;\n  text-align: center;\n  margin: 0px;\n  /* margin-top: 10px !important; */\n  position: absolute;\n  width: 85%;\n  position: absolute;\n  border: 0px;\n}\n\n.action {\n  background: #1a6bbe;\n  color: #fff;\n  padding: 0.7em;\n  border-radius: 25px;\n  width: 100%;\n  text-align: center;\n  margin: 0px;\n  /* margin-top: 10px !important; */\n  position: absolute;\n  width: 85%;\n  position: absolute;\n  border: 0px;\n}\n\n.accept {\n  background: #1A6BBE;\n  color: #fff;\n  padding: 0.7em;\n  border-radius: 25px;\n  text-align: center;\n  margin: 0px;\n  /* margin-top: 10px !important; */\n  position: absolute;\n  width: 85%;\n  position: absolute;\n}\n\n.accept-unpaid {\n  background: #82d93a;\n  color: #fff;\n  padding: 0.7em;\n  border-radius: 25px;\n  text-align: center;\n  margin: 0px;\n  position: absolute;\n  width: 85%;\n}\n\n.name_tabs {\n  font-size: 13px;\n  font-weight: 400;\n  display: grid;\n  justify-content: center;\n  padding: 17px 14px;\n}\n\n.main_tab {\n  display: grid;\n  justify-content: center;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-gap: 1px;\n}\n\n.active_tab {\n  background-color: #f7f8fa;\n  border-bottom: 2px solid #c4932f;\n  font-weight: 500;\n}\n\n.btn_fixed {\n  position: relative;\n  left: auto;\n  right: auto;\n  text-align: center;\n  bottom: 13px;\n  justify-content: center;\n  margin: 6px 20px;\n}\n\n.footer-md::before {\n  background: none;\n}\n\n.footer-ios::before {\n  background: none;\n}\n\nh4 {\n  font-size: 18px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va2luZy1saXN0L2Jvb2tpbmctbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUdBO0VBQ0ksd0JBQUE7QUFBSjs7QUFHQTtFQUNJO0lBQ0ksMEJBQUE7RUFBTjtBQUNGOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlBO0VBQ0ksdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUFESjs7QUFJQTtFQUNJLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQURKOztBQUlBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUE7RUFDSSxjQUFBO0FBREo7O0FBSUE7RUFDSSxjQUFBO0FBREo7O0FBSUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBREo7O0FBSUE7RUFDSSwyQkFBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7QUFESjs7QUFJQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQURKOztBQUlBO0VBVUksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBVko7O0FBYUE7RUFVSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFuQko7O0FBcUJBO0VBVUksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBM0JKOztBQThCQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUEzQko7O0FBOEJBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBM0JKOztBQStCQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBNUJKOztBQStCQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDBDQUFBO0VBQ0EsYUFBQTtBQTVCSjs7QUErQkE7RUFDSSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUE1Qko7O0FBK0JBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUE1Qko7O0FBK0JBO0VBQ0ksZ0JBQUE7QUE1Qko7O0FBK0JBO0VBQ0ksZ0JBQUE7QUE1Qko7O0FBK0JBO0VBQ0ksMEJBQUE7QUE1QkoiLCJmaWxlIjoic3JjL2FwcC9ib29raW5nLWxpc3QvYm9va2luZy1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICNDNDkzMkY7XG4gICAgLy8gcGFkZGluZzogMC4zZW0gMC41ZW07XG59XG5cbi5oZWFkZXJfcGQge1xuICAgIHBhZGRpbmc6IDAuOGVtIDAuMWVtIDAgMDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4taGVpZ2h0IDogODAwcHgpIHtcbiAgICAuaGVhZGVyX3BkIHtcbiAgICAgICAgcGFkZGluZzogMC41ZW0gMC4xZW0gOHB4IDA7XG4gICAgfVxufVxuXG5pb24tdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDI0cHg7XG59XG5cbmlvbi1idXR0b24ge1xuICAgIC0tcGFkZGluZy1ib3R0b206IDEuNWVtO1xuICAgIC0tcGFkZGluZy10b3A6IDEuNWVtO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmNzdG9tSGVhZGVyIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcbiAgICBiYWNrZ3JvdW5kOiAjRjdGOEZBO1xuICAgIGNvbG9yOiAjNDY0NjQ2O1xufVxuXG4uYmdfZ3JleSB7XG4gICAgYmFja2dyb3VuZDogI0Y5RjlGOTtcbn1cblxuLnBkX2JzIHtcbiAgICBwYWRkaW5nOiAwLjdlbSAxZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctYm90dG9tOiAzNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5sYW1ibyBoNCB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xufVxuXG4udHJpcF9kYXRlcyB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiAyLjRlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuM2VtO1xufVxuXG4udHJpcF9kYXRlcyBwIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG59XG5cbi5ibHVlIHtcbiAgICBjb2xvcjogIzFBNkJCRTtcbn1cblxuLnByaW1hcnkge1xuICAgIGNvbG9yOiAjQzQ5MzJGO1xufVxuXG4udHJpcF9lbmRfZGF0ZSB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiA0LjJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuM2VtO1xufVxuXG4udHJpcF9lbmRfZGF0ZSBwIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBtYXJnaW4tdG9wOiA2LjJweDtcbn1cblxuLnN0YXIgaW1nOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zdGFyIGltZyB7XG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLmdpdmVfcmF0aW5nIHtcbiAgICBiYWNrZ3JvdW5kOiAjQzQ5MzJGO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDAuN2VtO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmRhbmdlciB7XG4gICAgLy8gYmFja2dyb3VuZDogI0Q5M0EzQTtcbiAgICAvLyBjb2xvcjogI2ZmZjtcbiAgICAvLyBwYWRkaW5nOiAwLjdlbTtcbiAgICAvLyBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIC8vIHdpZHRoOiAxMDAlO1xuICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvLyBtYXJnaW46IDBweDtcbiAgICAvLyBtYXJnaW4tdG9wOiAxNHB4ICFpbXBvcnRhbnQ7XG5cbiAgICBiYWNrZ3JvdW5kOiAjRDkzQTNBO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDAuN2VtO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIC8qIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDsgKi9cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyOiAwcHg7XG59XG5cbi5jaGF0QnRuIHtcbiAgICAvLyBiYWNrZ3JvdW5kOiAjRDkzQTNBO1xuICAgIC8vIGNvbG9yOiAjZmZmO1xuICAgIC8vIHBhZGRpbmc6IDAuN2VtO1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgLy8gd2lkdGg6IDEwMCU7XG4gICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8vIG1hcmdpbjogMHB4O1xuICAgIC8vIG1hcmdpbi10b3A6IDE0cHggIWltcG9ydGFudDtcblxuICAgIGJhY2tncm91bmQ6ICNjNDkzMmY7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMC43ZW07XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgLyogbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50OyAqL1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogODUlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXI6IDBweDtcbn1cbi5hY3Rpb24ge1xuICAgIC8vIGJhY2tncm91bmQ6ICNEOTNBM0E7XG4gICAgLy8gY29sb3I6ICNmZmY7XG4gICAgLy8gcGFkZGluZzogMC43ZW07XG4gICAgLy8gYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAvLyB3aWR0aDogMTAwJTtcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLy8gbWFyZ2luOiAwcHg7XG4gICAgLy8gbWFyZ2luLXRvcDogMTRweCAhaW1wb3J0YW50O1xuXG4gICAgYmFja2dyb3VuZDogIzFhNmJiZTs7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMC43ZW07XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgLyogbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50OyAqL1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogODUlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXI6IDBweDtcbn1cblxuLmFjY2VwdCB7XG4gICAgYmFja2dyb3VuZDogIzFBNkJCRTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAwLjdlbTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDBweDtcbiAgICAvKiBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7ICovXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA4NSU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uYWNjZXB0LXVucGFpZCB7XG4gICAgYmFja2dyb3VuZDogIzgyZDkzYTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAwLjdlbTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDg1JTtcblxufVxuXG4ubmFtZV90YWJzIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDE3cHggMTRweDtcbn1cblxuLm1haW5fdGFiIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDIwJSAyMCUgMjAlIDIwJTtcbiAgICBncmlkLWdhcDogMXB4O1xufVxuXG4uYWN0aXZlX3RhYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjhmYTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2M0OTMyZjtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uYnRuX2ZpeGVkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogYXV0bztcbiAgICByaWdodDogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm90dG9tOiAxM3B4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogNnB4IDIwcHg7XG59XG5cbi5mb290ZXItbWQ6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLmZvb3Rlci1pb3M6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuaDQge1xuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/booking-list/booking-list.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/booking-list/booking-list.page.ts ***!
      \***************************************************/

    /*! exports provided: BookingListPage */

    /***/
    function srcAppBookingListBookingListPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookingListPage", function () {
        return BookingListPage;
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


      var _action_booking_action_booking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../action-booking/action-booking.page */
      "./src/app/action-booking/action-booking.page.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var BookingListPage = /*#__PURE__*/function () {
        function BookingListPage(popoverController, toastController, restService, storage, router, menuCtrl, activatedRoute, location, alertController, loadingController, navController) {
          _classCallCheck(this, BookingListPage);

          this.popoverController = popoverController;
          this.toastController = toastController;
          this.restService = restService;
          this.storage = storage;
          this.router = router;
          this.menuCtrl = menuCtrl;
          this.activatedRoute = activatedRoute;
          this.location = location;
          this.alertController = alertController;
          this.loadingController = loadingController;
          this.navController = navController;
          this.pet = 'puppies';
          this.page_number_all = 0;
        }

        _createClass(BookingListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            // this.pet = 'request';
            this.activatedRoute.queryParams.subscribe(function (res) {
              _this.valres = res.value;
              console.log(res);
              console.log(_this.valres);

              if (_this.valres) {
                if (_this.valres == 'request') {
                  _this.pet = 'request';
                } else if (_this.valres == 'upcoming') {
                  _this.pet = 'upcoming';
                } else if (_this.valres == 'cancel') {
                  _this.pet = 'cancel';
                }
              } else {
                _this.pet = 'request';
                console.log('request');
              }
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            this.storage.get('user_details').then(function (user_details) {
              console.log(user_details);
              _this2.userID = user_details.users_id;
              _this2.Email = user_details.email;
              _this2.currencyID = user_details.currencies_id;

              _this2.getCarList();

              _this2.storage.get('base_urls').then(function (base_url) {
                _this2.base_url = base_url;
              });

              _this2.storage.get('currency_symbol').then(function (currency_symbol) {
                _this2.currency_symbol = currency_symbol;
              });
            });
            /*  this.menuCtrl.enable(false); */
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            console.log('Begin async operation');
            this.getCarList(event);
          }
        }, {
          key: "getCarList",
          value: function getCarList(event) {
            var _this3 = this;

            this.present();
            var stringy = JSON.stringify({
              requestType: 'listed_cars',
              usersID: this.userID,
              currencyID: this.currencyID
            });
            console.log(stringy);
            this.restService.bookings(stringy).subscribe(function (response) {
              _this3.response = JSON.parse(response['_body']);

              _this3.dismiss();

              if (event) {
                event.target.complete();
              }

              _this3.cancelsBooking = _this3.response.canceled_bookings;
              _this3.previousBooking = _this3.response.previous_bookings;
              _this3.upcomingBooking = _this3.response.upcoming_bookings;
              _this3.currentBooking = _this3.response.current_bookings;
              _this3.requested_bookings = _this3.response.requested_bookings;

              if (_this3.currentBooking) {
                if (_this3.currentBooking[0].bookings_id == null) {
                  _this3.currentBooking = [];
                }
              }

              if (_this3.cancelsBooking) {
                if (_this3.cancelsBooking[0].bookings_id == null) {
                  _this3.cancelsBooking = [];
                }
              }

              if (_this3.previousBooking) {
                if (_this3.previousBooking[0].bookings_id == null) {
                  _this3.previousBooking = [];
                }
              }

              if (_this3.upcomingBooking) {
                if (_this3.upcomingBooking[0].bookings_id == null) {
                  _this3.upcomingBooking = [];
                }
              }

              if (_this3.requested_bookings) {
                if (_this3.requested_bookings[0].bookings_id == null) {
                  _this3.requested_bookings = [];
                }
              }
            }, function (err) {});
          }
        }, {
          key: "finalAction",
          value: function finalAction(actionType, bookingDetails, type, index) {
            var _this4 = this;

            console.log("bookingDetails----", bookingDetails); // this.currentBooking[0].owner_response = 'Delivered';

            console.log("currentBooking----", this.currentBooking);
            this.present();
            var stringy = JSON.stringify({
              requestType: 'action',
              usersID: this.userID,
              actionType: actionType,
              type: type,
              bookingID: bookingDetails.bookings_id
            });
            console.log(stringy);
            this.restService.booking_action(stringy).subscribe(function (response) {
              _this4.response = JSON.parse(response['_body']);

              _this4.dismiss();

              console.log("this.response------ booking action", _this4.response);

              if (_this4.response.status == 'success') {
                if (type == 'Deliver') {
                  bookingDetails.owner_response = 'Delivered';
                }

                if (type == 'Recevie') {
                  bookingDetails.owner_response = 'Recevied';

                  _this4.currentBooking.splice(index, 1);

                  _this4.pet = "previous";
                }
              }
            }, function (err) {});
          }
        }, {
          key: "toggleMenu",
          value: function toggleMenu() {
            this.menuCtrl.toggle();
          }
        }, {
          key: "back",
          value: function back() {
            this.navController.navigateRoot(['/bookings']);
          }
        }, {
          key: "BookNow",
          value: function BookNow() {
            var _this5 = this;

            this.present();
            var stringy = JSON.stringify({
              requestType: 'all_cars_list',
              usersID: this.userID,
              currencyID: this.currencyID,
              limit: 4,
              offset: this.page_number_all
            });
            console.log(stringy);
            this.restService.filters(stringy).subscribe(function (response) {
              _this5.response = JSON.parse(response['_body']);

              if (_this5.response.status == 'NotFound') {
                _this5.presentToast('Data Not Found!');
              } else if (_this5.response.status == 'Found') {
                console.log(_this5.response.cars_list_result);
                var myData = JSON.stringify({
                  cars_list_result: _this5.response.cars_list_result
                });
                _this5.restService.fromHomeToSearch = myData;

                _this5.dismiss();

                _this5.router.navigate(['/car-list']);
              }
            }, function (err) {});
          }
        }, {
          key: "cancel",
          value: function cancel(booking) {
            console.log(booking);
            this.data = booking; // bookingid , action/requestType, userID, ownerid,

            this.action(this.data.bookings_id, 'cancel_booking', this.data.booked_by_users_id, this.data.veh_users_id, 'cancel');
          }
        }, {
          key: "reject",
          value: function reject(booking) {
            console.log(booking);
            console.log(this.pet, 'peeee');
            this.data = booking;
            this.pet = 'request'; // bookingid , action/requestType, userID, ownerid,

            this.action(this.data.bookings_id, 'reject_booking', this.data.booked_by_users_id, this.data.veh_users_id, 'cancel');
          }
        }, {
          key: "accept",
          value: function accept(booking) {
            console.log(booking);
            this.data = booking; // bookingid , action/requestType, userID, ownerid,

            this.action(this.data.bookings_id, 'accept_booking', this.data.booked_by_users_id, this.data.veh_users_id, 'request');
          }
        }, {
          key: "action",
          value: function action(bookingId, _action, userID, OwnerID, petValue) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this6 = this;

              var popover;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.popoverController.create({
                        component: _action_booking_action_booking_page__WEBPACK_IMPORTED_MODULE_6__["ActionBookingPage"],
                        translucent: true,
                        backdropDismiss: false,
                        componentProps: {
                          data: bookingId,
                          booking: _action,
                          ownerID: OwnerID,
                          userID: userID
                        }
                      });

                    case 2:
                      popover = _context.sent;
                      popover.onWillDismiss().then(function (data) {
                        console.log(data);
                        console.log(data.data.val);

                        if (data.data.val == 'ok') {
                          _this6.getCarList();

                          _this6.pet = petValue;
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
          key: "presentToast",
          value: function presentToast(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toastController.create({
                        message: msg,
                        duration: 2000,
                        position: 'top'
                      });

                    case 2:
                      toast = _context2.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "ViewNow",
          value: function ViewNow(bookingdetails) {
            console.log("all bookings---", bookingdetails);
            console.log(bookingdetails.veh_imgs);
            var myData = JSON.stringify({
              booking_details: bookingdetails,
              vehicle_imgs: bookingdetails.veh_imgs
            });
            this.router.navigate(['/booking-detail-view'], {
              queryParams: {
                pageType: 'listed_booking',
                tabType: this.pet,
                value: myData
              }
            });
          }
        }, {
          key: "acceptUnapid",
          value: function acceptUnapid() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var alert, _yield$alert$onDidDis, role;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Booking Infomation',
                        subHeader: 'Booking Status Pending',
                        message: 'You Accepted the booking and payment status is pending by user',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                      _context3.next = 7;
                      return alert.onDidDismiss();

                    case 7:
                      _yield$alert$onDidDis = _context3.sent;
                      role = _yield$alert$onDidDis.role;
                      console.log('onDidDismiss resolved with role', role);

                    case 10:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "getpet",
          value: function getpet(val) {
            this.pet = val;
          }
        }, {
          key: "present",
          value: function present() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.loadingController.create({
                        message: 'Please wait...'
                      });

                    case 2:
                      this.loading = _context4.sent;
                      _context4.next = 5;
                      return this.loading.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.loading.dismiss();

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "chatRequest",
          value: function chatRequest(pageType, tabType, bookingDetails) {
            var _this7 = this;

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
                  _this7.response = JSON.parse(response['_body']);
                  console.log(_this7.response);

                  if (_this7.response.status == 'error') {} else if (_this7.response.status == 'AlreadySent' || _this7.response.status == 'RequestSend') {
                    if (pageType == "listed_booking") {
                      var myData = JSON.stringify({
                        otherUserId: bookingDetails.booked_by_users_id,
                        userID: _this7.userID,
                        user_name: _this7.response.user_name,
                        profile_img: _this7.response.profile_img
                      });
                    } else {
                      var myData = JSON.stringify({
                        otherUserId: bookingDetails.veh_users_id,
                        userID: _this7.userID,
                        user_name: _this7.response.user_name,
                        profile_img: _this7.response.profile_img
                      });
                    }

                    console.log(myData);

                    _this7.router.navigate(['/chat-detail'], {
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var msg, current_date, end_dates, alert, _yield$alert$onDidDis2, role;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
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

                      _context6.next = 9;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Chat is disabled',
                        message: msg,
                        buttons: ['OK']
                      });

                    case 9:
                      alert = _context6.sent;
                      _context6.next = 12;
                      return alert.present();

                    case 12:
                      _context6.next = 14;
                      return alert.onDidDismiss();

                    case 14:
                      _yield$alert$onDidDis2 = _context6.sent;
                      role = _yield$alert$onDidDis2.role;
                      console.log('onDidDismiss resolved with role', role);

                    case 17:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }]);

        return BookingListPage;
      }();

      BookingListPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }];
      };

      BookingListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-booking-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./booking-list.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/booking-list/booking-list.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./booking-list.page.scss */
        "./src/app/booking-list/booking-list.page.scss"))["default"]]
      })], BookingListPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=booking-list-booking-list-module-es5.js.map