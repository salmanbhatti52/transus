(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["topratedplacecar-topratedplacecar-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/topratedplacecar/topratedplacecar.page.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/topratedplacecar/topratedplacecar.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTopratedplacecarTopratedplacecarPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"header_pd\" style=\"--background: #c4932f\">\n    <ion-buttons slot=\"start\">\n      <img src=\"assets/img/Menu.svg\" (click)=\"toggleMenu()\" />\n    </ion-buttons>\n    <ion-searchbar\n      style=\"margin-top: 6px\"\n      (click)=\"ifFound()\"\n      (ionChange)=\"onInput()\"\n      placeholder=\"Search for cars\"\n    ></ion-searchbar>\n    <ion-buttons style=\"margin-top: 6px\" slot=\"end\" (click)=\"goToFilter()\">\n      <img src=\"assets/img/filter.svg\" />\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content> </ion-content>\n";
      /***/
    },

    /***/
    "./src/app/topratedplacecar/topratedplacecar-routing.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/topratedplacecar/topratedplacecar-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: TopratedplacecarPageRoutingModule */

    /***/
    function srcAppTopratedplacecarTopratedplacecarRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TopratedplacecarPageRoutingModule", function () {
        return TopratedplacecarPageRoutingModule;
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


      var _topratedplacecar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./topratedplacecar.page */
      "./src/app/topratedplacecar/topratedplacecar.page.ts");

      var routes = [{
        path: '',
        component: _topratedplacecar_page__WEBPACK_IMPORTED_MODULE_3__["TopratedplacecarPage"]
      }];

      var TopratedplacecarPageRoutingModule = /*#__PURE__*/_createClass(function TopratedplacecarPageRoutingModule() {
        _classCallCheck(this, TopratedplacecarPageRoutingModule);
      });

      TopratedplacecarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TopratedplacecarPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/topratedplacecar/topratedplacecar.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/topratedplacecar/topratedplacecar.module.ts ***!
      \*************************************************************/

    /*! exports provided: TopratedplacecarPageModule */

    /***/
    function srcAppTopratedplacecarTopratedplacecarModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TopratedplacecarPageModule", function () {
        return TopratedplacecarPageModule;
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


      var _topratedplacecar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./topratedplacecar-routing.module */
      "./src/app/topratedplacecar/topratedplacecar-routing.module.ts");
      /* harmony import */


      var _topratedplacecar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./topratedplacecar.page */
      "./src/app/topratedplacecar/topratedplacecar.page.ts");

      var TopratedplacecarPageModule = /*#__PURE__*/_createClass(function TopratedplacecarPageModule() {
        _classCallCheck(this, TopratedplacecarPageModule);
      });

      TopratedplacecarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _topratedplacecar_routing_module__WEBPACK_IMPORTED_MODULE_5__["TopratedplacecarPageRoutingModule"]],
        declarations: [_topratedplacecar_page__WEBPACK_IMPORTED_MODULE_6__["TopratedplacecarPage"]]
      })], TopratedplacecarPageModule);
      /***/
    },

    /***/
    "./src/app/topratedplacecar/topratedplacecar.page.scss":
    /*!*************************************************************!*\
      !*** ./src/app/topratedplacecar/topratedplacecar.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppTopratedplacecarTopratedplacecarPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "p {\n  display: block;\n  -webkit-margin-before: 0em;\n          margin-block-start: 0em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n\nion-searchbar {\n  --border-radius: 22px;\n  --box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wcmF0ZWRwbGFjZWNhci90b3ByYXRlZHBsYWNlY2FyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxxQkFBQTtFQUNBLHlCQUFBO1VBQUEsd0JBQUE7RUFDQSx1QkFBQTtVQUFBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC90b3ByYXRlZHBsYWNlY2FyL3RvcHJhdGVkcGxhY2VjYXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDBlbTtcbiAgbWFyZ2luLWJsb2NrLWVuZDogMGVtO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICAtLWJvcmRlci1yYWRpdXM6IDIycHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/topratedplacecar/topratedplacecar.page.ts":
    /*!***********************************************************!*\
      !*** ./src/app/topratedplacecar/topratedplacecar.page.ts ***!
      \***********************************************************/

    /*! exports provided: TopratedplacecarPage */

    /***/
    function srcAppTopratedplacecarTopratedplacecarPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TopratedplacecarPage", function () {
        return TopratedplacecarPage;
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var TopratedplacecarPage = /*#__PURE__*/function () {
        function TopratedplacecarPage(router, userService) {
          _classCallCheck(this, TopratedplacecarPage);

          this.router = router;
          this.userService = userService;
          this.place = '';
        }

        _createClass(TopratedplacecarPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.place = this.userService.topratedplace;
            console.log('place', this.place);
          }
        }]);

        return TopratedplacecarPage;
      }();

      TopratedplacecarPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]
        }];
      };

      TopratedplacecarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-topratedplacecar',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./topratedplacecar.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/topratedplacecar/topratedplacecar.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./topratedplacecar.page.scss */
        "./src/app/topratedplacecar/topratedplacecar.page.scss"))["default"]]
      })], TopratedplacecarPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=topratedplacecar-topratedplacecar-module-es5.js.map