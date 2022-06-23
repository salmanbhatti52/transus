(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["topdest-topdest-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/topdest/topdest.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/topdest/topdest.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTopdestTopdestPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"header_pd\" style=\"--background: #c4932f\">\n    <ion-buttons slot=\"start\">\n      <img src=\"assets/img/Menu.svg\" (click)=\"toggleMenu()\" />\n    </ion-buttons>\n    <ion-searchbar\n      style=\"margin-top: 0px\"\n      (ionChange)=\"onInput($event)\"\n      placeholder=\"Search for cars\"\n    >\n    </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div *ngIf=\"searchData == ''\">\n    <div\n      style=\"\n      height: 150px;\n      width: 100%;\n      background-image: url('{{place.destination_pic}}');\n      background-size: cover; \"\n      *ngFor=\"let place of toprateddest\"\n      (click)=\"goToTopRated(place)\"\n    >\n      <div\n        style=\"height: 150px; width: 100%; background-color: rgb(0 0 0 / 51%)\"\n      >\n        <ion-row style=\"font-size: 25px; padding-top: 50px; color: white\">\n          <ion-col style=\"text-align: center\">\n            <p>{{place.destination_name}}</p>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"searchData != ''\">\n    <div\n      style=\"\n  height: 150px;\n  width: 100%;\n  background-image: url('{{place.destination_pic}}');\n  background-size: cover; \"\n      *ngFor=\"let place of filteredTopDest\"\n      (click)=\"goToTopRated(place)\"\n    >\n      <div\n        style=\"height: 150px; width: 100%; background-color: rgb(0 0 0 / 51%)\"\n      >\n        <ion-row style=\"font-size: 25px; padding-top: 50px; color: white\">\n          <ion-col style=\"text-align: center\">\n            <p>{{place.destination_name}}</p>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n  </div>\n\n  <!-- <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\"\n    >\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll> -->\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/topdest/topdest-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/topdest/topdest-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: TopdestPageRoutingModule */

    /***/
    function srcAppTopdestTopdestRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TopdestPageRoutingModule", function () {
        return TopdestPageRoutingModule;
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


      var _topdest_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./topdest.page */
      "./src/app/topdest/topdest.page.ts");

      var routes = [{
        path: '',
        component: _topdest_page__WEBPACK_IMPORTED_MODULE_3__["TopdestPage"]
      }];

      var TopdestPageRoutingModule = /*#__PURE__*/_createClass(function TopdestPageRoutingModule() {
        _classCallCheck(this, TopdestPageRoutingModule);
      });

      TopdestPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TopdestPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/topdest/topdest.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/topdest/topdest.module.ts ***!
      \*******************************************/

    /*! exports provided: TopdestPageModule */

    /***/
    function srcAppTopdestTopdestModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TopdestPageModule", function () {
        return TopdestPageModule;
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


      var _topdest_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./topdest-routing.module */
      "./src/app/topdest/topdest-routing.module.ts");
      /* harmony import */


      var _topdest_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./topdest.page */
      "./src/app/topdest/topdest.page.ts");

      var TopdestPageModule = /*#__PURE__*/_createClass(function TopdestPageModule() {
        _classCallCheck(this, TopdestPageModule);
      });

      TopdestPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _topdest_routing_module__WEBPACK_IMPORTED_MODULE_5__["TopdestPageRoutingModule"]],
        declarations: [_topdest_page__WEBPACK_IMPORTED_MODULE_6__["TopdestPage"]]
      })], TopdestPageModule);
      /***/
    },

    /***/
    "./src/app/topdest/topdest.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/topdest/topdest.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppTopdestTopdestPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "p {\n  display: block;\n  -webkit-margin-before: 0em;\n          margin-block-start: 0em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n\nion-searchbar {\n  --border-radius: 22px;\n  --box-shadow: none;\n}\n\nion-toolbar.ios {\n  margin-top: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wZGVzdC90b3BkZXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxxQkFBQTtFQUNBLHlCQUFBO1VBQUEsd0JBQUE7RUFDQSx1QkFBQTtVQUFBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBR0E7RUFDRSxlQUFBO0FBQUYiLCJmaWxlIjoic3JjL2FwcC90b3BkZXN0L3RvcGRlc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDBlbTtcbiAgbWFyZ2luLWJsb2NrLWVuZDogMGVtO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICAtLWJvcmRlci1yYWRpdXM6IDIycHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuXG5pb24tdG9vbGJhci5pb3Mge1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/topdest/topdest.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/topdest/topdest.page.ts ***!
      \*****************************************/

    /*! exports provided: TopdestPage */

    /***/
    function srcAppTopdestTopdestPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TopdestPage", function () {
        return TopdestPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../users.service */
      "./src/app/users.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../rest.service */
      "./src/app/rest.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

      var TopdestPage = /*#__PURE__*/function () {
        function TopdestPage(restservice, router, userService, menuCtrl, loadingController, storage) {
          _classCallCheck(this, TopdestPage);

          this.restservice = restservice;
          this.router = router;
          this.userService = userService;
          this.menuCtrl = menuCtrl;
          this.loadingController = loadingController;
          this.storage = storage;
          this.toprateddest = '';
          this.filteredTopDest = '';
          this.response = '';
          this.offset = 0;
          this.userID = '';
          this.filterCars = '';
          this.searchData = '';
          this.baseUrl = 'https://app.transusdrives.com/uploads/';
        }

        _createClass(TopdestPage, [{
          key: "toggleMenu",
          value: function toggleMenu() {
            this.menuCtrl.toggle();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            // this.present();
            var data = JSON.stringify({
              limit: '5',
              offset: this.offset
            });
            console.log('data', data);
            this.restservice.getDestination(data).subscribe(function (res) {
              console.log('dest----------', res); // this.dismiss();

              _this.response = JSON.parse(res['_body']);
              console.log(_this.response);
              _this.toprateddest = _this.response.data;
            }, function (err) {// this.dismiss();
              // this.ShowLoading = false;
            });
          }
        }, {
          key: "goToTopRated",
          value: function goToTopRated(place) {
            this.filterFound(place);
          } //===============================================

        }, {
          key: "filterFound",
          value: function filterFound(place) {
            var _this2 = this;

            this.storage.get('user_details').then(function (user_details) {
              console.log('user data is here', user_details);

              if (user_details) {
                _this2.userID = user_details.users_id;
                _this2.currencyID = user_details.currencies_id;
              } else {
                _this2.userID = '';
              }

              console.log('loader present ali');

              _this2.present();

              var data = JSON.stringify({
                requestType: 'searchBysearch',
                users_id: _this2.userID,
                textToSearch: place.destination_name,
                currency_id: _this2.currencyID,
                limit_val: '5',
                offset_val: '0'
              });
              console.log('ali', data);

              _this2.restservice.filtersTopRated(data).subscribe(function (res) {
                _this2.filterCars = res;
                console.log('ali wants to remove');
                console.log(JSON.parse(_this2.filterCars['_body']), "JSON.parse(this.filterCars['_body']JSON.parse(this.filterCars['_body']");
                _this2.allser = JSON.parse(_this2.filterCars['_body']);
                var myData = JSON.stringify({
                  cars_list_result: _this2.allser.cars_list_result
                });

                _this2.dismiss();

                console.log('loader dismiss ali'); // this.router.navigate(['/car-list'], {
                //   queryParams: {
                //     value: myData,
                //   },
                // });

                _this2.restservice.fromHomeToSearch = myData;

                _this2.router.navigate(['/car-list']);
              }, function (err) {
                _this2.dismiss();

                console.log(err);
              });
            });
          } //=======================================================

        }, {
          key: "present",
          value: function present() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingController.create({
                        message: 'Please wait...'
                      });

                    case 2:
                      this.loading = _context.sent;
                      _context.next = 5;
                      return this.loading.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loading.dismiss();

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "loadData",
          value: function loadData(event) {
            var _this3 = this;

            this.offset++;
            var data = JSON.stringify({
              limit: '5',
              offset: this.offset
            });
            console.log('data', data);
            this.restservice.getDestination(data).subscribe(function (res) {
              console.log('dest----------', res);
              event.target.disabled = true;
              _this3.response = JSON.parse(res['_body']);
              console.log(_this3.response);
              _this3.toprateddest = _this3.toprateddest.concat(_this3.response.data);
            }, function (err) {
              event.target.disabled = true; // this.ShowLoading = false;
            });
          }
        }, {
          key: "toggleInfiniteScroll",
          value: function toggleInfiniteScroll() {
            this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
          }
        }, {
          key: "onInput",
          value: function onInput(event) {
            console.log(event.detail.value);
            this.searchData = event.detail.value;
            console.log('searchData', this.searchData);
            console.log('toprateddest-----------', this.toprateddest);
            this.filteredTopDest = this.toprateddest.filter(function (item) {
              if (item.destination_name != null) {
                return item.destination_name.toLowerCase().includes(event.detail.value.toLowerCase());
              }
            });
            console.log('filter-----------', this.filteredTopDest);
          }
        }]);

        return TopdestPage;
      }();

      TopdestPage.ctorParameters = function () {
        return [{
          type: _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
        }];
      };

      TopdestPage.propDecorators = {
        infiniteScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"]]
        }]
      };
      TopdestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-topdest',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./topdest.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/topdest/topdest.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./topdest.page.scss */
        "./src/app/topdest/topdest.page.scss"))["default"]]
      })], TopdestPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=topdest-topdest-module-es5.js.map