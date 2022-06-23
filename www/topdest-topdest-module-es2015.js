(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["topdest-topdest-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/topdest/topdest.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/topdest/topdest.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"header_pd\" style=\"--background: #c4932f\">\n    <ion-buttons slot=\"start\">\n      <img src=\"assets/img/Menu.svg\" (click)=\"toggleMenu()\" />\n    </ion-buttons>\n    <ion-searchbar\n      style=\"margin-top: 0px\"\n      (ionChange)=\"onInput($event)\"\n      placeholder=\"Search for cars\"\n    >\n    </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div *ngIf=\"searchData == ''\">\n    <div\n      style=\"\n      height: 150px;\n      width: 100%;\n      background-image: url('{{place.destination_pic}}');\n      background-size: cover; \"\n      *ngFor=\"let place of toprateddest\"\n      (click)=\"goToTopRated(place)\"\n    >\n      <div\n        style=\"height: 150px; width: 100%; background-color: rgb(0 0 0 / 51%)\"\n      >\n        <ion-row style=\"font-size: 25px; padding-top: 50px; color: white\">\n          <ion-col style=\"text-align: center\">\n            <p>{{place.destination_name}}</p>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"searchData != ''\">\n    <div\n      style=\"\n  height: 150px;\n  width: 100%;\n  background-image: url('{{place.destination_pic}}');\n  background-size: cover; \"\n      *ngFor=\"let place of filteredTopDest\"\n      (click)=\"goToTopRated(place)\"\n    >\n      <div\n        style=\"height: 150px; width: 100%; background-color: rgb(0 0 0 / 51%)\"\n      >\n        <ion-row style=\"font-size: 25px; padding-top: 50px; color: white\">\n          <ion-col style=\"text-align: center\">\n            <p>{{place.destination_name}}</p>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n  </div>\n\n  <!-- <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\"\n    >\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll> -->\n</ion-content>\n");

/***/ }),

/***/ "./src/app/topdest/topdest-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/topdest/topdest-routing.module.ts ***!
  \***************************************************/
/*! exports provided: TopdestPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopdestPageRoutingModule", function() { return TopdestPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _topdest_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./topdest.page */ "./src/app/topdest/topdest.page.ts");




const routes = [
    {
        path: '',
        component: _topdest_page__WEBPACK_IMPORTED_MODULE_3__["TopdestPage"]
    }
];
let TopdestPageRoutingModule = class TopdestPageRoutingModule {
};
TopdestPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TopdestPageRoutingModule);



/***/ }),

/***/ "./src/app/topdest/topdest.module.ts":
/*!*******************************************!*\
  !*** ./src/app/topdest/topdest.module.ts ***!
  \*******************************************/
/*! exports provided: TopdestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopdestPageModule", function() { return TopdestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _topdest_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./topdest-routing.module */ "./src/app/topdest/topdest-routing.module.ts");
/* harmony import */ var _topdest_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./topdest.page */ "./src/app/topdest/topdest.page.ts");







let TopdestPageModule = class TopdestPageModule {
};
TopdestPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _topdest_routing_module__WEBPACK_IMPORTED_MODULE_5__["TopdestPageRoutingModule"]
        ],
        declarations: [_topdest_page__WEBPACK_IMPORTED_MODULE_6__["TopdestPage"]]
    })
], TopdestPageModule);



/***/ }),

/***/ "./src/app/topdest/topdest.page.scss":
/*!*******************************************!*\
  !*** ./src/app/topdest/topdest.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  display: block;\n  -webkit-margin-before: 0em;\n          margin-block-start: 0em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n\nion-searchbar {\n  --border-radius: 22px;\n  --box-shadow: none;\n}\n\nion-toolbar.ios {\n  margin-top: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wZGVzdC90b3BkZXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxxQkFBQTtFQUNBLHlCQUFBO1VBQUEsd0JBQUE7RUFDQSx1QkFBQTtVQUFBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBR0E7RUFDRSxlQUFBO0FBQUYiLCJmaWxlIjoic3JjL2FwcC90b3BkZXN0L3RvcGRlc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDBlbTtcbiAgbWFyZ2luLWJsb2NrLWVuZDogMGVtO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICAtLWJvcmRlci1yYWRpdXM6IDIycHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuXG5pb24tdG9vbGJhci5pb3Mge1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/topdest/topdest.page.ts":
/*!*****************************************!*\
  !*** ./src/app/topdest/topdest.page.ts ***!
  \*****************************************/
/*! exports provided: TopdestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopdestPage", function() { return TopdestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../users.service */ "./src/app/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");







let TopdestPage = class TopdestPage {
    constructor(restservice, router, userService, menuCtrl, loadingController, storage) {
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
    toggleMenu() {
        this.menuCtrl.toggle();
    }
    ngOnInit() {
        // this.present();
        var data = JSON.stringify({
            limit: '5',
            offset: this.offset,
        });
        console.log('data', data);
        this.restservice.getDestination(data).subscribe((res) => {
            console.log('dest----------', res);
            // this.dismiss();
            this.response = JSON.parse(res['_body']);
            console.log(this.response);
            this.toprateddest = this.response.data;
        }, (err) => {
            // this.dismiss();
            // this.ShowLoading = false;
        });
    }
    goToTopRated(place) {
        this.filterFound(place);
    }
    //===============================================
    filterFound(place) {
        this.storage.get('user_details').then((user_details) => {
            console.log('user data is here', user_details);
            if (user_details) {
                this.userID = user_details.users_id;
                this.currencyID = user_details.currencies_id;
            }
            else {
                this.userID = '';
            }
            console.log('loader present ali');
            this.present();
            var data = JSON.stringify({
                requestType: 'searchBysearch',
                users_id: this.userID,
                textToSearch: place.destination_name,
                currency_id: this.currencyID,
                limit_val: '5',
                offset_val: '0',
            });
            console.log('ali', data);
            this.restservice.filtersTopRated(data).subscribe((res) => {
                this.filterCars = res;
                console.log('ali wants to remove');
                console.log(JSON.parse(this.filterCars['_body']), "JSON.parse(this.filterCars['_body']JSON.parse(this.filterCars['_body']");
                this.allser = JSON.parse(this.filterCars['_body']);
                var myData = JSON.stringify({
                    cars_list_result: this.allser.cars_list_result,
                });
                this.dismiss();
                console.log('loader dismiss ali');
                // this.router.navigate(['/car-list'], {
                //   queryParams: {
                //     value: myData,
                //   },
                // });
                this.restservice.fromHomeToSearch = myData;
                this.router.navigate(['/car-list']);
            }, (err) => {
                this.dismiss();
                console.log(err);
            });
        });
    }
    //=======================================================
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
    loadData(event) {
        this.offset++;
        var data = JSON.stringify({
            limit: '5',
            offset: this.offset,
        });
        console.log('data', data);
        this.restservice.getDestination(data).subscribe((res) => {
            console.log('dest----------', res);
            event.target.disabled = true;
            this.response = JSON.parse(res['_body']);
            console.log(this.response);
            this.toprateddest = this.toprateddest.concat(this.response.data);
        }, (err) => {
            event.target.disabled = true;
            // this.ShowLoading = false;
        });
    }
    toggleInfiniteScroll() {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    }
    onInput(event) {
        console.log(event.detail.value);
        this.searchData = event.detail.value;
        console.log('searchData', this.searchData);
        console.log('toprateddest-----------', this.toprateddest);
        this.filteredTopDest = this.toprateddest.filter((item) => {
            if (item.destination_name != null) {
                return item.destination_name
                    .toLowerCase()
                    .includes(event.detail.value.toLowerCase());
            }
        });
        console.log('filter-----------', this.filteredTopDest);
    }
};
TopdestPage.ctorParameters = () => [
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] }
];
TopdestPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"],] }]
};
TopdestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-topdest',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./topdest.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/topdest/topdest.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./topdest.page.scss */ "./src/app/topdest/topdest.page.scss")).default]
    })
], TopdestPage);



/***/ })

}]);
//# sourceMappingURL=topdest-topdest-module-es2015.js.map