(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["earning-earning-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/earning/earning.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/earning/earning.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [class.ios-headers]=\"plateformCheck == 'ios'\">\r\n  <ion-toolbar>\r\n    <ion-buttons class=\"mf\" slot=\"start\">\r\n      <img src=\"assets/img/Menu.svg\" class=\"mleft\" (click)=\"toggleMenu()\" />\r\n    </ion-buttons>\r\n    <ion-title [class.globe_title]=\"plateformCheck == 'ios'\"\r\n      >Earnings</ion-title\r\n    >\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"wallet_main\">\r\n    <ion-row class=\"wallet_inner\">\r\n      <ion-col size=\"6\">\r\n        <p class=\"dark_p_color\">Wallet Balance</p>\r\n        <h3 class=\"dark_p_color\">{{currency_symbol}}{{wallet_amount}}</h3>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-button\r\n          color=\"secondary\"\r\n          expand=\"block\"\r\n          shape=\"round\"\r\n          (click)=\"withdrawRequest()\"\r\n          >Withdraw</ion-button\r\n        >\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n\r\n  <ion-row class=\"graph_main\">\r\n    <ion-col size=\"12\" class=\"graph_inner\">\r\n      <div style=\"display: block\">\r\n        <canvas\r\n          baseChart\r\n          height=\"350\"\r\n          [colors]=\"chartColors\"\r\n          [datasets]=\"barChartData\"\r\n          [labels]=\"barChartLabels\"\r\n          [options]=\"barChartOptions\"\r\n          [plugins]=\"barChartPlugins\"\r\n          [legend]=\"barChartLegend\"\r\n          [chartType]=\"barChartType\"\r\n        >\r\n        </canvas>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n  <div class=\"total_main alura\">\r\n    <ion-row>\r\n      <ion-col size=\"6\">Earnings</ion-col>\r\n      <ion-col size=\"6\" class=\"ion-text-right\"\r\n        >{{currency_symbol}}{{total_earning}}</ion-col\r\n      >\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"6\">Trip Earnings</ion-col>\r\n      <ion-col size=\"6\" class=\"ion-text-right\"\r\n        >{{currency_symbol}}{{total_trip_cost}}</ion-col\r\n      >\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"6\">Taxes</ion-col>\r\n      <ion-col size=\"6\" class=\"ion-text-right\"\r\n        >{{currency_symbol}}{{total_tax}}</ion-col\r\n      >\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"6\">Total bookings</ion-col>\r\n      <ion-col size=\"6\" class=\"ion-text-right\">{{totalBookings}}</ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/earning/earning-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/earning/earning-routing.module.ts ***!
  \***************************************************/
/*! exports provided: EarningPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarningPageRoutingModule", function() { return EarningPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _earning_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./earning.page */ "./src/app/earning/earning.page.ts");




const routes = [
    {
        path: '',
        component: _earning_page__WEBPACK_IMPORTED_MODULE_3__["EarningPage"]
    }
];
let EarningPageRoutingModule = class EarningPageRoutingModule {
};
EarningPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EarningPageRoutingModule);



/***/ }),

/***/ "./src/app/earning/earning.module.ts":
/*!*******************************************!*\
  !*** ./src/app/earning/earning.module.ts ***!
  \*******************************************/
/*! exports provided: EarningPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarningPageModule", function() { return EarningPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _earning_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./earning-routing.module */ "./src/app/earning/earning-routing.module.ts");
/* harmony import */ var _earning_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./earning.page */ "./src/app/earning/earning.page.ts");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");








let EarningPageModule = class EarningPageModule {
};
EarningPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _earning_routing_module__WEBPACK_IMPORTED_MODULE_5__["EarningPageRoutingModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"]
        ],
        declarations: [_earning_page__WEBPACK_IMPORTED_MODULE_6__["EarningPage"]]
    })
], EarningPageModule);



/***/ }),

/***/ "./src/app/earning/earning.page.scss":
/*!*******************************************!*\
  !*** ./src/app/earning/earning.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3em 0.1em 8px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n  padding-left: 0px;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n  text-transform: capitalize;\n}\n\n.mleft {\n  position: relative;\n  left: 10px;\n}\n\nion-button {\n  --padding-bottom: 1em;\n  --padding-top: 1em;\n  --box-shadow: none;\n}\n\n.wallet_main {\n  background: #c4932f;\n  padding: 1em 2em 5em 2em;\n}\n\n.wallet_inner {\n  background: #fff;\n  border-radius: 12px;\n  padding: 1em 1em;\n}\n\n.wallet_inner p,\nh3 {\n  margin: 0px;\n}\n\nion-content {\n  --background: #f7f8fa;\n}\n\n.graph_main {\n  padding: 0em 2em;\n  margin-top: -4em;\n}\n\n.graph_inner {\n  background: #fff;\n  border-radius: 12px;\n  padding: 1em 1em;\n}\n\n.total_main {\n  background: #fff;\n  border-radius: 12px;\n  margin: 1em 2em;\n  padding: 1em 1em;\n}\n\n.header-md::after {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWFybmluZy9lYXJuaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksd0JBQUE7SUFDQSxxQkFBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUFFSjs7QUFDQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksbUJBQUE7RUFDQSx3QkFBQTtBQUdKOztBQURBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBSUo7O0FBRkE7O0VBRUksV0FBQTtBQUtKOztBQUhBO0VBQ0kscUJBQUE7QUFNSjs7QUFKQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFPSjs7QUFMQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQVFKOztBQU5BO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVNKOztBQVBBO0VBQ0ksYUFBQTtBQVVKIiwiZmlsZSI6InNyYy9hcHAvZWFybmluZy9lYXJuaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICBwYWRkaW5nOiAwLjhlbSAwLjFlbSAwIDA7XG4gICAgLS1iYWNrZ3JvdW5kOiAjYzQ5MzJmO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi1oZWlnaHQgOiA4MDBweCkge1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgcGFkZGluZzogM2VtIDAuMWVtIDhweCAwO1xuICAgICAgICAtLWJhY2tncm91bmQ6ICNjNDkzMmY7XG4gICAgfVxufVxuXG5pb24tdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5pb24tYnV0dG9uIHtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxLjVlbTtcbiAgICAtLXBhZGRpbmctdG9wOiAxLjVlbTtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4ubWxlZnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAxMHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxZW07XG4gICAgLS1wYWRkaW5nLXRvcDogMWVtO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cbi53YWxsZXRfbWFpbiB7XG4gICAgYmFja2dyb3VuZDogI2M0OTMyZjtcbiAgICBwYWRkaW5nOiAxZW0gMmVtIDVlbSAyZW07XG59XG4ud2FsbGV0X2lubmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgcGFkZGluZzogMWVtIDFlbTtcbn1cbi53YWxsZXRfaW5uZXIgcCxcbmgzIHtcbiAgICBtYXJnaW46IDBweDtcbn1cbmlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICNmN2Y4ZmE7XG59XG4uZ3JhcGhfbWFpbiB7XG4gICAgcGFkZGluZzogMGVtIDJlbTtcbiAgICBtYXJnaW4tdG9wOiAtNGVtO1xufVxuLmdyYXBoX2lubmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgcGFkZGluZzogMWVtIDFlbTtcbn1cbi50b3RhbF9tYWluIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgbWFyZ2luOiAxZW0gMmVtO1xuICAgIHBhZGRpbmc6IDFlbSAxZW07XG59XG4uaGVhZGVyLW1kOjphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/earning/earning.page.ts":
/*!*****************************************!*\
  !*** ./src/app/earning/earning.page.ts ***!
  \*****************************************/
/*! exports provided: EarningPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarningPage", function() { return EarningPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");






let EarningPage = class EarningPage {
    constructor(loadingController, toastController, storage, restService, themeService, menuCtrl, plateform) {
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.storage = storage;
        this.restService = restService;
        this.themeService = themeService;
        this.menuCtrl = menuCtrl;
        this.plateform = plateform;
        /* animation: {
                 onComplete: function () {
                     var chartInstance = this.chart,
                     ctx = chartInstance.ctx;
                     ctx.textAlign = 'center';
                     ctx.textBaseline = 'bottom';
                     this.data.datasets.forEach(function (dataset, i) {
                         var meta = chartInstance.controller.getDatasetMeta(i);
                         meta.data.forEach(function (bar, index) {
                             var data = dataset.data[index];
                             if (data > 0) {
                               ctx.fillText(data, bar._model.x, bar._model.y - 5);
                            }
                         });
                     });
                 }
             } */
        this.barChartOptions = {
            responsive: true,
            scales: {
                yAxes: [
                    {
                        display: false,
                    },
                ],
            },
            // legend: { display: false },
            animation: {
                onComplete: function () {
                    var chartInstance = this.chart, ctx = chartInstance.ctx;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'bottom';
                    this.data.datasets.forEach(function (dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        meta.data.forEach(function (bar, index) {
                            var data = dataset.data[index];
                            ctx.fillText(data, bar._model.x, bar._model.y - 5);
                        });
                    });
                },
                onProgress: function () {
                    var chartInstance = this.chart, ctx = chartInstance.ctx;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'bottom';
                    this.data.datasets.forEach(function (dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        meta.data.forEach(function (bar, index) {
                            var data = dataset.data[index];
                            ctx.fillText(data, bar._model.x, bar._model.y - 5);
                        });
                    });
                },
            },
        };
        this.barChartLabels = [
            'Sun',
            'Mon',
            'Tue',
            'Wed',
            'Thur',
            'Fri',
            'Sat',
        ];
        this.barChartType = 'bar';
        this.barChartLegend = false;
        this.barChartPlugins = [];
        this.barChartData = [
            { data: [0, 0, 0, 0, 0, 0, 0], label: 'Series A' },
        ];
        this.chartColors = [
            {
                // first color
                backgroundColor: '#E2AC3C',
                borderColor: '#E2AC3C',
                pointBackgroundColor: '#E2AC3C',
                pointBorderColor: '#E2AC3C',
                pointHoverBackgroundColor: '#E2AC3C',
                pointHoverBorderColor: '#E2AC3C',
            },
        ];
        this.total_earning = 0;
        this.total_tax = 0;
        this.total_trip_cost = 0;
        this.wallet_amount = 0;
        this.sundayEarning = 0;
        this.mondayEarning = 0;
        this.tuesdayEarning = 0;
        this.wednesdayEarning = 0;
        this.thursdayEarning = 0;
        this.fridayEarning = 0;
        this.saturdayEarning = 0;
    }
    ngOnInit() {
        if (this.plateform.is('ios')) {
            this.plateformCheck = 'ios';
        }
        else {
            this.plateformCheck = 'android';
        }
        this.storage.get('currency_symbol').then((currency_symbol) => {
            this.currency_symbol = currency_symbol;
        });
        this.storage.get('user_details').then((user_details) => {
            console.log(user_details);
            this.userID = user_details.users_id;
            this.currencies_id = user_details.currencies_id;
            this.earning_stats();
        });
    }
    earning_stats() {
        var stringy = JSON.stringify({
            requestType: 'owner_earning',
            usersID: this.userID,
            currencyID: this.currencies_id,
        });
        console.log(stringy);
        this.restService.transactions(stringy).subscribe((response) => {
            this.response = JSON.parse(response['_body']);
            console.log(this.response);
            if (this.response.status == 'NotFound') {
            }
            else if (this.response.status == 'Found') {
                this.total_earning = this.response.total_earning;
                this.total_tax = this.response.total_tax;
                this.totalBookings = this.response.totalBookings;
                this.total_trip_cost = this.response.total_trip_cost;
                this.wallet_amount = this.response.wallet_amount;
                this.earning_details = this.response.earning_details;
                for (var i = 0; i < this.earning_details.length; i++) {
                    if (this.earning_details[i].day_name == 'Sunday') {
                        this.sundayEarning =
                            this.sundayEarning + Number(this.earning_details[i].earning);
                    }
                    else if (this.earning_details[i].day_name == 'Monday') {
                        this.mondayEarning =
                            this.mondayEarning + Number(this.earning_details[i].earning);
                    }
                    else if (this.earning_details[i].day_name == 'Tuesday') {
                        this.tuesdayEarning =
                            this.tuesdayEarning + Number(this.earning_details[i].earning);
                    }
                    else if (this.earning_details[i].day_name == 'Wednesday') {
                        this.wednesdayEarning =
                            this.wednesdayEarning + Number(this.earning_details[i].earning);
                    }
                    else if (this.earning_details[i].day_name == 'Thursday') {
                        this.thursdayEarning =
                            this.thursdayEarning + Number(this.earning_details[i].earning);
                    }
                    else if (this.earning_details[i].day_name == 'Friday') {
                        this.fridayEarning =
                            this.fridayEarning + Number(this.earning_details[i].earning);
                    }
                    else if (this.earning_details[i].day_name == 'Saturday') {
                        this.saturdayEarning =
                            this.saturdayEarning + Number(this.earning_details[i].earning);
                    }
                    this.barChartData = [
                        {
                            data: [
                                this.sundayEarning,
                                this.mondayEarning,
                                this.tuesdayEarning,
                                this.wednesdayEarning,
                                this.thursdayEarning,
                                this.fridayEarning,
                                this.saturdayEarning,
                            ],
                            label: 'Earning(' + this.currency_symbol + ')',
                        },
                    ];
                }
                console.log(this.sundayEarning);
            }
        }, (err) => { });
    }
    withdrawRequest(amount) {
        this.present();
        var stringy = JSON.stringify({
            usersID: this.userID,
            currencyID: this.currencies_id,
            requestType: 'send_request',
        });
        console.log(stringy);
        this.restService.withdrawal(stringy).subscribe((response) => {
            this.response = JSON.parse(response['_body']);
            console.log(this.response.status);
            if (this.response.status == 'success') {
                this.presentToast(this.response.msg);
            }
            else if (this.response.status == 'error') {
                this.presentToast(this.response.msg);
            }
            this.dismiss();
        }, (err) => {
            this.dismiss();
        });
    }
    toggleMenu() {
        this.menuCtrl.toggle();
    }
    presentToast(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000,
                position: 'top',
            });
            toast.present();
        });
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
EarningPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"] },
    { type: ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ThemeService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
EarningPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-earning',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./earning.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/earning/earning.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./earning.page.scss */ "./src/app/earning/earning.page.scss")).default]
    })
], EarningPage);



/***/ })

}]);
//# sourceMappingURL=earning-earning-module-es2015.js.map