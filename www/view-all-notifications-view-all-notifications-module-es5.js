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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-all-notifications-view-all-notifications-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/view-all-notifications/view-all-notifications.page.html":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-all-notifications/view-all-notifications.page.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppViewAllNotificationsViewAllNotificationsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header style=\"height: 60px\" [class.ios-headers]=\"plateformCheck == 'ios'\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <img src=\"assets/img/Menu.svg\" (click)=\"toggleMenu()\" />\n    </ion-buttons>\n    <ion-title [class.globe_title]=\"plateformCheck == 'ios'\"\n      >Notifications</ion-title\n    >\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"chevron-down-circle-outline\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\"\n    >\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ng-container *ngIf=\"notifications?.length >0\">\n   \n      <div class=\"clear_div\">\n        <p class=\"clear_p\" (click)=\"clearNotifcation()\">Clear all</p>\n      </div>\n  \n    <ion-row\n      class=\"pdtop\"\n      *ngFor=\"let notification of notifications\"\n      (click)=\"accptOffer(notification)\"\n    >\n      <ion-col size=\"2\" class=\"notify_image_main\">\n        <img src=\"{{base_url}}{{notification.sender_img_url}}\" />\n      </ion-col>\n      <ion-col class=\"notify_content\" size=\"10\">\n        <ion-row>\n          <ion-col size=\"6\" class=\"ion-text-left\">\n            <p class=\"notfy_title\">{{notification.sender_name}}</p>\n          </ion-col>\n          <ion-col size=\"6\" class=\"ion-text-right\">\n            <p class=\"notify_time\">{{notification.time_added}}</p>\n          </ion-col>\n          <ion-col size=\"12\" class=\"ion-text-left notify_desc_main\">\n            <p class=\"notify_desc\">{{notification.content}}</p>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"notificationError == null\">\n      <ion-col class=\"ion-text-center\">\n        <h2>{{dataError}}</h2>\n      </ion-col>\n    </ion-row>\n  </ng-container>\n  <ng-container *ngIf=\"notifications?.length < 1 \">\n  <ion-row>\n    <ion-col class=\"ion-text-center\">\n        <h2>No notification found</h2>\n    </ion-col>\n  </ion-row>\n</ng-container>\n  <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/view-all-notifications/view-all-notifications-routing.module.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/view-all-notifications/view-all-notifications-routing.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: ViewAllNotificationsPageRoutingModule */

    /***/
    function srcAppViewAllNotificationsViewAllNotificationsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewAllNotificationsPageRoutingModule", function () {
        return ViewAllNotificationsPageRoutingModule;
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


      var _view_all_notifications_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./view-all-notifications.page */
      "./src/app/view-all-notifications/view-all-notifications.page.ts");

      var routes = [{
        path: '',
        component: _view_all_notifications_page__WEBPACK_IMPORTED_MODULE_3__["ViewAllNotificationsPage"]
      }];

      var ViewAllNotificationsPageRoutingModule = /*#__PURE__*/_createClass(function ViewAllNotificationsPageRoutingModule() {
        _classCallCheck(this, ViewAllNotificationsPageRoutingModule);
      });

      ViewAllNotificationsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ViewAllNotificationsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/view-all-notifications/view-all-notifications.module.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/view-all-notifications/view-all-notifications.module.ts ***!
      \*************************************************************************/

    /*! exports provided: ViewAllNotificationsPageModule */

    /***/
    function srcAppViewAllNotificationsViewAllNotificationsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewAllNotificationsPageModule", function () {
        return ViewAllNotificationsPageModule;
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


      var _view_all_notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./view-all-notifications-routing.module */
      "./src/app/view-all-notifications/view-all-notifications-routing.module.ts");
      /* harmony import */


      var _view_all_notifications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./view-all-notifications.page */
      "./src/app/view-all-notifications/view-all-notifications.page.ts");

      var ViewAllNotificationsPageModule = /*#__PURE__*/_createClass(function ViewAllNotificationsPageModule() {
        _classCallCheck(this, ViewAllNotificationsPageModule);
      });

      ViewAllNotificationsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _view_all_notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewAllNotificationsPageRoutingModule"]],
        declarations: [_view_all_notifications_page__WEBPACK_IMPORTED_MODULE_6__["ViewAllNotificationsPage"]]
      })], ViewAllNotificationsPageModule);
      /***/
    },

    /***/
    "./src/app/view-all-notifications/view-all-notifications.page.scss":
    /*!*************************************************************************!*\
      !*** ./src/app/view-all-notifications/view-all-notifications.page.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppViewAllNotificationsViewAllNotificationsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  padding: 0em 0em 0 0;\n  --background: #c4932f;\n}\n\nion-toolbar.ios {\n  margin-top: 6px;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 0em 0em 0px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n  padding-left: 0px;\n}\n\n.b_list1 {\n  margin: 0px;\n  font-size: 14px;\n}\n\n.clear_div {\n  display: grid;\n  justify-content: center;\n  padding: 0px;\n}\n\n.clear_p {\n  padding-top: 5px;\n  margin: 0px;\n  color: #c4932f;\n  text-decoration: underline;\n  font-size: 14px;\n}\n\n.notify_image_main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.notify_image_main img {\n  border-radius: 50%;\n}\n\n.notify_content p {\n  margin: 0px;\n}\n\n.notify_desc {\n  font-size: 10px;\n}\n\n.notify_desc_main {\n  padding-top: 0px;\n}\n\n.notfy_title {\n  color: #1a6bbe;\n  font-size: 10px;\n}\n\n.notify_time {\n  color: #c4932f;\n  font-size: 10px;\n}\n\n.notify_bg {\n  background: #f9f9f9;\n}\n\n.pdtop {\n  padding-right: 10px;\n  padding-left: 10px;\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1hbGwtbm90aWZpY2F0aW9ucy92aWV3LWFsbC1ub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksc0JBQUE7SUFDQSxxQkFBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7QUFBSjs7QUFHQTtFQUNJLFdBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFBSjs7QUFHQTtFQUNJLG1CQUFBO0FBQUo7O0FBR0E7RUFFSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFESiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctYWxsLW5vdGlmaWNhdGlvbnMvdmlldy1hbGwtbm90aWZpY2F0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgcGFkZGluZzogMGVtIDBlbSAwIDA7XG4gICAgLS1iYWNrZ3JvdW5kOiAjYzQ5MzJmO1xufVxuXG5pb24tdG9vbGJhci5pb3Mge1xuICAgIG1hcmdpbi10b3A6IDZweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4taGVpZ2h0IDogODAwcHgpIHtcbiAgICBpb24tdG9vbGJhciB7XG4gICAgICAgIHBhZGRpbmc6IDBlbSAwZW0gMHB4IDA7XG4gICAgICAgIC0tYmFja2dyb3VuZDogI2M0OTMyZjtcbiAgICB9XG59XG5cbmlvbi10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cblxuLmJfbGlzdDEge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNsZWFyX2RpdiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG5cbi5jbGVhcl9wIHtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGNvbG9yOiAjYzQ5MzJmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm5vdGlmeV9pbWFnZV9tYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ub3RpZnlfaW1hZ2VfbWFpbiBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLm5vdGlmeV9jb250ZW50IHAge1xuICAgIG1hcmdpbjogMHB4O1xufVxuXG4ubm90aWZ5X2Rlc2Mge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLm5vdGlmeV9kZXNjX21haW4ge1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi5ub3RmeV90aXRsZSB7XG4gICAgY29sb3I6ICMxYTZiYmU7XG4gICAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4ubm90aWZ5X3RpbWUge1xuICAgIGNvbG9yOiAjYzQ5MzJmO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLm5vdGlmeV9iZyB7XG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbn1cblxuLnBkdG9wIHtcbiAgICAvLyBwYWRkaW5nOiA1cHggMGVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/view-all-notifications/view-all-notifications.page.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/view-all-notifications/view-all-notifications.page.ts ***!
      \***********************************************************************/

    /*! exports provided: ViewAllNotificationsPage */

    /***/
    function srcAppViewAllNotificationsViewAllNotificationsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewAllNotificationsPage", function () {
        return ViewAllNotificationsPage;
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


      var _accept_offer_accept_offer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../accept-offer/accept-offer.page */
      "./src/app/accept-offer/accept-offer.page.ts");

      var ViewAllNotificationsPage = /*#__PURE__*/function () {
        function ViewAllNotificationsPage(popoverController, restService, storage, router, menuCtrl, plateform, loadingController) {
          _classCallCheck(this, ViewAllNotificationsPage);

          this.popoverController = popoverController;
          this.restService = restService;
          this.storage = storage;
          this.router = router;
          this.menuCtrl = menuCtrl;
          this.plateform = plateform;
          this.loadingController = loadingController;
          this.notifications = [];
          this.dataError = "Data Not Found!";
          this.page_number = 0;
          this.notificationError = 0;
          this.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
          console.log(this.timeZone, "timeZonetimeZone");
        }

        _createClass(ViewAllNotificationsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            if (this.plateform.is('ios')) {
              this.plateformCheck = "ios";
            } else {
              this.plateformCheck = "android";
            }

            this.storage.get('user_details').then(function (user_details) {
              console.log(user_details);
              _this.userID = user_details.users_id;
              _this.currencies_id = user_details.currencies_id;

              _this.storage.get('base_urls').then(function (base_url) {
                _this.base_url = base_url;
                console.log("baseeeeee---eeeeee", _this.base_url);

                _this.viewAll(false);
              });
            }); // this.callInterval = setInterval(() => {
            //   this.viewAll();
            // }, 3000
            // );
          }
        }, {
          key: "clearNotifcation",
          value: function clearNotifcation() {
            var _this2 = this;

            this.present();
            var stringy = JSON.stringify({
              "requestType": "clear_all",
              "usersID": this.userID
            });
            this.restService.notifications(stringy).subscribe(function (response) {
              _this2.response = JSON.parse(response['_body']);
              console.log("clear response", _this2.response);

              if (_this2.response.status == 'success') {
                _this2.notifications = [];
              }

              _this2.dismiss();
            }, function (error) {
              console.log(error);

              _this2.dismiss();
            });
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            clearInterval(this.callInterval);
            console.log('clear');
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            console.log('Begin async operation');
            this.viewAll(false, event, "refresher");
          }
        }, {
          key: "toggleMenu",
          value: function toggleMenu() {
            this.menuCtrl.toggle();
          }
        }, {
          key: "viewAll",
          value: function viewAll(isFirstLoad, event, refresher) {
            var _this3 = this;

            var offset = 0;

            if (isFirstLoad == false) {
              this.page_number = offset;
            }

            var stringy = JSON.stringify({
              "requestType": "get_all",
              "usersID": this.userID,
              "limit": 10,
              "offset": this.page_number,
              "readFilter": '',
              'timeZone': this.timeZone
            });
            this.restService.notifications(stringy).subscribe(function (response) {
              _this3.response = JSON.parse(response['_body']);

              if (isFirstLoad == false) {
                _this3.notifications = [];
              }

              console.log("this.response.queryyyy", _this3.response.queryyyy);

              if (_this3.response.status == 'NotFound') {
                if (isFirstLoad) {
                  _this3.notificationError = null;
                  _this3.dataError = "No more notifications";
                  event.target.complete();
                }
              } else if (_this3.response.status == 'Found') {
                _this3.response.notifications;
                _this3.notifications = [].concat(_toConsumableArray(_this3.notifications), _toConsumableArray(_this3.response.notifications));
                if (isFirstLoad) event.target.complete();
                _this3.page_number = _this3.page_number + 10;
              }

              if (refresher) {
                event.target.complete();
              }
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "doInfinite",
          value: function doInfinite(event) {
            this.viewAll(true, event);
          }
        }, {
          key: "accptOffer",
          value: function accptOffer(p) {
            var _this4 = this;

            console.log(p);

            if (p.offer_id) {
              this.readNotification(p);
              var stringy = JSON.stringify({
                "requestType": "check_offer_by_id",
                "customerID": this.userID,
                "offerID": p.offer_id,
                "currencyID": this.currencies_id
              });
              this.restService.inquire_charges(stringy).subscribe(function (response) {
                _this4.response = JSON.parse(response['_body']);
                console.log(_this4.response);

                if (_this4.response.status == 'NotFound') {
                  console.log('NotFound');
                } else if (_this4.response.status == 'Found') {
                  _this4.offerPopup(_this4.response.offers, p.offer_id);
                }
              }, function (err) {});
            } // if (p.type_id == '5' || p.type_id == '7') {
            // //  this.readNotification(p);
            //   var vhDetails = JSON.stringify({
            //     requestType: "get_car_details_by_id",
            //     usersID: this.userID,
            //     vehicleID: p.vehicle_id,
            //     currencyID: this.currencies_id
            //   })
            //   console.log(vhDetails);
            //   this.router.navigate(['/listed-car']);
            //   // this.restService.list_vehicles(vhDetails).subscribe(vhRes =>{
            //   //   console.log(JSON.parse(vhRes['_body'])," resss wheel");
            //   //   this.gotoDetails =JSON.parse(vhRes['_body'])
            //   //   console.log(this.gotoDetails.vehicles_list[0], "listing")
            //   //   var myData = JSON.stringify({
            //   //     cars_list_result: this.gotoDetails.vehicles_list[0],
            //   //     redirect: '/notification'
            //   //   });
            //   //   this.router.navigate(['/car-detail'], {
            //   //     queryParams: {
            //   //       value: myData  
            //   //     },
            //   //   });
            //   // },(err)=>{
            //   //   console.log(err);
            //   // });
            // }


            if (p.type_id == '1' || p.type_id == '3') {
              console.log('msggggggggggg', p);
              var myData = JSON.stringify({
                userID: p.receiver_id,
                otherUserId: p.sender_id,
                user_name: p.sender_name,
                profile_img: p.sender_img_url
              });
              console.log(myData);
              this.router.navigate(['/chat-detail'], {
                queryParams: {
                  value: myData
                }
              });
            } else if (p.type_id == '2') {
              //  this.router.navigate(['/bookings'])
              this.router.navigate(['/booking-list']);
            } else if (p.type_id == '5' || p.type_id == '6' || p.type_id == '7' || p.type_id == '8' || p.type_id == '13') {
              //  this.router.navigate(['/bookings'])
              this.router.navigate(['/listed-car']);
            } else if (p.type_id == '9') {
              this.router.navigate(['/bookings']); //  this.router.navigate(['/other-booking-list'])

              console.log("cancel booking");
            } else if (p.type_id == '10') {
              //  this.router.navigate(['/bookings'])
              var gerValue = 'cancel';
              this.router.navigate(['/other-booking-list'], {
                queryParams: {
                  value: gerValue
                }
              }); //  this.router.navigate(['/other-booking-list'])

              console.log("reject booking");
            } else if (p.type_id == '11') {
              //  this.router.navigate(['/bookings'])
              // this.router.navigate(['/booking-list'])
              var gerValue = 'upcoming';
              this.router.navigate(['/booking-list'], {
                queryParams: {
                  value: gerValue
                }
              });
              console.log("payment done");
            } else if (p.type_id == '12') {
              //  this.router.navigate(['/bookings'])
              this.router.navigate(['/other-booking-list']);
            } else if (p.type_id == '14') {
              //  this.router.navigate(['/bookings'])
              var gerValue = 'cancel';
              this.router.navigate(['/booking-list'], {
                queryParams: {
                  value: gerValue
                }
              }); //  this.router.navigate(['/other-booking-list'])

              console.log("reject booking");
            }
          }
        }, {
          key: "readNotification",
          value: function readNotification(notification) {
            var read = JSON.stringify({
              requestType: 'mark_read',
              usersID: this.userID,
              notifyID: notification.notifications_id
            });
            this.restService.notifications(read).subscribe(function (res) {
              console.log(res);
            }, function (readError) {
              console.log(readError);
            });
          }
        }, {
          key: "offerPopup",
          value: function offerPopup(p, offer_id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var popover;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.popoverController.create({
                        component: _accept_offer_accept_offer_page__WEBPACK_IMPORTED_MODULE_6__["AcceptOfferPage"],
                        componentProps: {
                          "data": p,
                          "offer_id": offer_id
                        },
                        translucent: true
                      });

                    case 2:
                      popover = _context.sent;
                      popover.onWillDismiss().then(function (data) {// console.log('dismiss');
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
          key: "present",
          value: function present() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingController.create({
                        message: 'Please wait...'
                      });

                    case 2:
                      this.loading = _context2.sent;
                      _context2.next = 5;
                      return this.loading.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.loading.dismiss();

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return ViewAllNotificationsPage;
      }();

      ViewAllNotificationsPage.ctorParameters = function () {
        return [{
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
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }];
      };

      ViewAllNotificationsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-all-notifications',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./view-all-notifications.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/view-all-notifications/view-all-notifications.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./view-all-notifications.page.scss */
        "./src/app/view-all-notifications/view-all-notifications.page.scss"))["default"]]
      })], ViewAllNotificationsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=view-all-notifications-view-all-notifications-module-es5.js.map