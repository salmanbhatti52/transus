(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["location-location-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/location/location.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/location/location.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <ion-header [class.ios-headers]=\"plateformCheck == 'ios'\">\n  <ion-toolbar>\n    <ion-buttons [class.back_button]=\"plateformCheck == 'ios'\" slot=\"start\">\n      <img src=\"assets/img/Arrow.svg\" (click)=\"goToHome()\">\n    </ion-buttons>\n    <ion-title [class.globe_title]=\"plateformCheck == 'ios'\">Set Route</ion-title>\n   </ion-toolbar>\n</ion-header>\n<!--ion-content class=\"location-page\">\n  <ion-searchbar [(ngModel)]=\"userAddress\" mode=\"ios\" animated placeholder=\"Enter your  address\" (ionInput)=\"UpdateSearchResults()\" (ionClear)=\"ClearAutocomplete()\">\n  </ion-searchbar>\n  <ion-list [hidden]=\"autocompleteItems.length == 0\">\n    <ion-item lines=\"full\" style=\"--padding-top: 4px; --padding-bottom: 4px;\" *ngFor=\"let item of autocompleteItems\" button=\"true\" (click)=\"SelectSearchResult(item.description)\">\n      <ion-label><h2>{{ item.description }}</h2></ion-label>\n    </ion-item>\n  </ion-list>\n  <div class=\"map-wrapper\">\n    <div id=\"map_center\">\n      <img src=\"assets/img/pin.png\" style=\"width: 55%;\"/>\n    </div>\n    <div #map id=\"map\"></div>\n  </div>\n</ion-content>\n\n<ion-footer>\n    <p style=\"margin-left: 15px;margin-bottom: 0px;\" *ngIf=\"pAdress\">{{pAdress}}</p>\n    <ion-button color=\"success\" expand=\"full\" (click)=\"apply()\" [disabled]=\"btnApply\">Deliver here</ion-button>\n</ion-footer-->\n<ion-content>\n    <ion-row class=\"list_1\">\n\n    <ion-col size=\"12\">\n      <ion-input  class=\"input_list\" [(ngModel)]=\"source\" (ionInput)=\"UpdateSearchResults()\" placeholder=\"Pickup\"></ion-input>\n      <span *ngIf=\"showSourceError\" class=\"error ion-padding\">\n        pickup location is required.\n      </span>\n      <ion-list [hidden]=\"autocompleteItems.length == 0\">\n        <ion-item lines=\"full\" style=\"--padding-top: 4px; --padding-bottom: 4px;\" *ngFor=\"let item of autocompleteItems\" button=\"true\" (click)=\"SelectSearchResult(item.description)\">\n          <ion-label><h2>{{ item.description }}</h2></ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-col>\n\n    <ion-col size=\"12\">\n      <ion-input class=\"input_list\" placeholder=\"Drop off\" [(ngModel)]=\"destination\" (ionInput)=\"UpdateDestinationResults()\"></ion-input>\n      <span *ngIf=\"showDestinationError\" class=\"error ion-padding\">\n        dropoff location is required.\n      </span>\n      <ion-list [hidden]=\"detinationCompleteItems.length == 0\">\n        <ion-item lines=\"full\" style=\"--padding-top: 4px; --padding-bottom: 4px;\" *ngFor=\"let item of detinationCompleteItems\" button=\"true\" (click)=\"SelectDestinationResult(item.description)\">\n          <ion-label><h2>{{ item.description }}</h2></ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-button color=\"primary\" expand=\"block\" shape=\"round\"  (click)=\"calculateAndDisplayRoute()\">Show Route</ion-button>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-button color=\"secondary\" expand=\"block\" shape=\"round\"  (click)=\"backToList()\">Get Route</ion-button>\n    </ion-col>\n  </ion-row>\n  <div #mapElement class=\"map\"></div>\n</ion-content>");

/***/ }),

/***/ "./src/app/location/location-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/location/location-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LocationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPageRoutingModule", function() { return LocationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./location.page */ "./src/app/location/location.page.ts");




const routes = [
    {
        path: '',
        component: _location_page__WEBPACK_IMPORTED_MODULE_3__["LocationPage"]
    }
];
let LocationPageRoutingModule = class LocationPageRoutingModule {
};
LocationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LocationPageRoutingModule);



/***/ }),

/***/ "./src/app/location/location.module.ts":
/*!*********************************************!*\
  !*** ./src/app/location/location.module.ts ***!
  \*********************************************/
/*! exports provided: LocationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPageModule", function() { return LocationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _location_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./location-routing.module */ "./src/app/location/location-routing.module.ts");
/* harmony import */ var _location_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./location.page */ "./src/app/location/location.page.ts");







let LocationPageModule = class LocationPageModule {
};
LocationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _location_routing_module__WEBPACK_IMPORTED_MODULE_5__["LocationPageRoutingModule"]
        ],
        declarations: [_location_page__WEBPACK_IMPORTED_MODULE_6__["LocationPage"]]
    })
], LocationPageModule);



/***/ }),

/***/ "./src/app/location/location.page.scss":
/*!*********************************************!*\
  !*** ./src/app/location/location.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3em 0.1em 8px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n}\n\n.map {\n  width: 100%;\n  height: 100%;\n}\n\nion-list {\n  position: relative;\n  width: 100%;\n  z-index: 9999;\n}\n\n.error {\n  color: red;\n  padding: 0px;\n}\n\n.input_list {\n  border: 1px solid #d4dce1;\n  background: #F7F8FA;\n  border-radius: 28px;\n  font-size: 13px;\n  color: #000;\n  --placeholder-color: #b2b2b4;\n  --padding-bottom: 1.5em;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n}\n\nion-item {\n  margin: 1em 0em;\n}\n\n.list_1 {\n  padding: 1em 1em;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n}\n\n/*.location-page{ \n\n    #map_canvas {\n        width: 90%;\n        height: 80%;\n        border: 1px solid red;\n    }\n    #address {\n      padding: 10px;\n      font-size: 18px;\n      font-weight: bold;\n    }\n    #map {\n      width: 100%;\n      height: 73vh;\n    }\n    .map-wrapper {\n      position: relative;\n      #map_center {\n        position: absolute;\n        z-index: 99;\n        height: 40px;\n        width: 40px;\n        top: 50%;\n        left: 50%;\n        margin-left: -21px;\n        margin-top: -41px;\n      }\n    }\n\n    .name-section{\n      text-align: center;\n      margin: 30px 0;\n      h1{\n        font-size: 25px;\n        text-transform: uppercase;\n        color: var(--ion-color-primary);\n        font-weight: bold;\n      }\n      h4{\n        font-size: 14px;\n      }\n    }\n\n    .current-location{\n      padding: 0px;\n      ion-icon{\n        margin-right: 5px;\n      }\n      .button{\n        margin-bottom: 20px;\n      }\n      .location_button{\n        font-size: 12px;\n      }\n    }\n\n    .account{\n      margin-bottom: 30px;\n      .sign-in-button{\n        text-align: center;\n      }\n\n      .sign-up-button{\n        text-align: center;\n        margin-top: 20px;\n      } \n    }\n\n    ion-searchbar{\n      padding: 0 20px;\n    }\n\n    .searchbar-input.sc-ion-searchbar-md {\n      border: 1px solid #fff !important;\n    }\n    .searchbar-search-icon{\n      display: none;\n    }\n}*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYXRpb24vbG9jYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDSSx3QkFBQTtJQUNBLHFCQUFBO0VBQ0o7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFBRjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBRUY7O0FBQ0E7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUNBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtBQUdGOztBQURBO0VBQ0UsZ0JBQUE7QUFJRjs7QUFGQTtFQUNFLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQUtGOztBQUhBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQUEiLCJmaWxlIjoic3JjL2FwcC9sb2NhdGlvbi9sb2NhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gIHBhZGRpbmc6IDAuOGVtIDAuMWVtIDAgMDtcbiAgLS1iYWNrZ3JvdW5kOiAjYzQ5MzJmO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi1oZWlnaHQgOiA4MDBweCkge1xuICBpb24tdG9vbGJhciB7XG4gICAgICBwYWRkaW5nOiAzZW0gMC4xZW0gOHB4IDA7XG4gICAgICAtLWJhY2tncm91bmQ6ICNjNDkzMmY7XG4gIH1cbn1cblxuaW9uLXRpdGxle1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDI0cHg7XG59XG4ubWFwe1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbmlvbi1saXN0e1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4uZXJyb3J7XG4gIGNvbG9yOiByZWQ7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLmlucHV0X2xpc3R7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNGRjZTE7XG4gIGJhY2tncm91bmQ6ICNGN0Y4RkE7XG4gIGJvcmRlci1yYWRpdXM6IDI4cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICMwMDA7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6ICNiMmIyYjQ7XG4gIC0tcGFkZGluZy1ib3R0b206IDEuNWVtO1xuICAtLXBhZGRpbmctc3RhcnQ6IDEuNWVtO1xuICAtLXBhZGRpbmctdG9wOiAxLjVlbTtcbn1cbmlvbi1pdGVte1xuICBtYXJnaW46IDFlbSAwZW07XG59XG4ubGlzdF8xe1xuICBwYWRkaW5nOiAxZW0gMWVtO1xufVxuaW9uLWJ1dHRvbntcbiAgLS1wYWRkaW5nLWJvdHRvbTogMS41ZW07XG4gIC0tcGFkZGluZy10b3A6IDEuNWVtO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG4vKi5sb2NhdGlvbi1wYWdleyBcblxuICAgICNtYXBfY2FudmFzIHtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgaGVpZ2h0OiA4MCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICB9XG4gICAgI2FkZHJlc3Mge1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICAjbWFwIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA3M3ZoO1xuICAgIH1cbiAgICAubWFwLXdyYXBwZXIge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgI21hcF9jZW50ZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDk5O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTIxcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC00MXB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5uYW1lLXNlY3Rpb257XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW46IDMwcHggMDtcbiAgICAgIGgxe1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgICAgaDR7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY3VycmVudC1sb2NhdGlvbntcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgIGlvbi1pY29ue1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgIH1cbiAgICAgIC5idXR0b257XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICB9XG4gICAgICAubG9jYXRpb25fYnV0dG9ue1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5hY2NvdW50e1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgIC5zaWduLWluLWJ1dHRvbntcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICBcbiAgICAgIC5zaWduLXVwLWJ1dHRvbntcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgfSBcbiAgICB9XG5cbiAgICBpb24tc2VhcmNoYmFye1xuICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgIH1cblxuICAgIC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1tZCB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5zZWFyY2hiYXItc2VhcmNoLWljb257XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn0qLyJdfQ== */");

/***/ }),

/***/ "./src/app/location/location.page.ts":
/*!*******************************************!*\
  !*** ./src/app/location/location.page.ts ***!
  \*******************************************/
/*! exports provided: LocationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPage", function() { return LocationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");









let LocationPage = class LocationPage {
    constructor(storage, fb, activatedRoute, toastController, geolocation, nativeGeocoder, zone, router, plateform, navController, loadingController, locationPlugin) {
        this.storage = storage;
        this.fb = fb;
        this.activatedRoute = activatedRoute;
        this.toastController = toastController;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.zone = zone;
        this.router = router;
        this.plateform = plateform;
        this.navController = navController;
        this.loadingController = loadingController;
        this.locationPlugin = locationPlugin;
        this.map = {};
        this.userAddress = '';
        this.btnApply = true;
        this.address = '';
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
        this.activatedRoute.queryParams.subscribe((res) => {
            this.response = JSON.parse(res.value);
            console.log(this.response);
            this.back = this.response.location;
            this.lastVeh = this.response.vehId;
        });
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        this.autocomplete = { input: '' };
        this.autocompleteItems = [];
        this.detinationCompleteItems = [];
    }
    ngOnInit() {
        //this.loadMap();
        if (this.plateform.is('ios')) {
            this.plateformCheck = "ios";
        }
        else {
            this.plateformCheck = "android";
        }
    }
    goToHome() {
        //this.router.navigate([this.back]);
        this.navController.navigateBack(this.back);
    }
    backToList() {
        this.showSourceError = false;
        this.showDestinationError = false;
        if (this.source == '' || this.source == undefined) {
            this.showSourceError = true;
            return false;
        }
        else if (this.destination == '' || this.destination == undefined) {
            this.showDestinationError = true;
            return false;
        }
        this.getpickuplatlog(this.source);
        this.storage.set('pickup', this.source);
        this.storage.set('dropoff', this.destination);
        //this.navController.navigateBack(this.back);
        //this.router.navigate(['/car-documents']);
        //this.router.navigate(['..']);
    }
    ngAfterViewInit() {
        const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
            zoom: 7,
            center: { lat: 41.85, lng: -87.65 }
        });
        this.directionsDisplay.setMap(map);
    }
    calculateAndDisplayRoute() {
        this.showSourceError = false;
        this.showDestinationError = false;
        if (this.source == '' || this.source == undefined) {
            this.showSourceError = true;
            return false;
        }
        else if (this.destination == '' || this.destination == undefined) {
            this.showDestinationError = true;
            return false;
        }
        const that = this;
        this.directionsService.route({
            origin: this.source,
            destination: this.destination,
            travelMode: 'DRIVING'
        }, (response, status) => {
            console.log(response);
            if (status === 'OK') {
                that.directionsDisplay.setDirections(response);
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    }
    UpdateSearchResults() {
        if (this.source == '') {
            this.autocompleteItems = [];
            return;
        }
        //componentRestrictions: {country: 'AE'}
        this.GoogleAutocomplete.getPlacePredictions({ input: this.source }, (predictions, status) => {
            this.autocompleteItems = [];
            this.zone.run(() => {
                predictions.forEach((prediction) => {
                    console.log(prediction);
                    this.autocompleteItems.push(prediction);
                });
            });
        });
    }
    SelectSearchResult(address) {
        this.source = address; //May be delete
        console.log(this.source);
        this.autocompleteItems = [];
    }
    UpdateDestinationResults() {
        if (this.destination == '') {
            this.detinationCompleteItems = [];
            return;
        }
        //componentRestrictions: {country: 'AE'}
        this.GoogleAutocomplete.getPlacePredictions({ input: this.destination }, (predictions, status) => {
            this.detinationCompleteItems = [];
            this.zone.run(() => {
                predictions.forEach((prediction) => {
                    console.log(prediction);
                    this.detinationCompleteItems.push(prediction);
                });
            });
        });
    }
    SelectDestinationResult(address) {
        this.destination = address; //May be delete
        console.log(this.destination);
        this.detinationCompleteItems = [];
    }
    getpickuplatlog(address) {
        this.present();
        let options = {
            useLocale: true,
            maxResults: 5
        };
        this.nativeGeocoder.forwardGeocode(address, options)
            .then((result) => {
            console.log('getpickuplatlog--->', result[0].latitude, result[0].longitude);
            this.storage.set('pickuplong', result[0].longitude);
            this.storage.set('pickuplat', result[0].latitude);
            this.getdropofflatlog(this.destination);
            this.dismiss();
        }).catch((error) => {
            this.errorMsg = JSON.stringify(error);
            console.log(this.errorMsg);
            this.dismiss();
            this.presentToast(this.errorMsg);
        });
    }
    getdropofflatlog(address) {
        let options = {
            useLocale: true,
            maxResults: 5
        };
        this.nativeGeocoder.forwardGeocode(address, options)
            .then((result) => {
            console.log(result[0].latitude, result[0].longitude);
            this.storage.set('dropofflong', result[0].longitude);
            this.storage.set('dropofflat', result[0].latitude);
            this.locationPlugin.back();
        }).catch((error) => {
            this.errorMsg = JSON.stringify(error);
            console.log(this.errorMsg);
            this.presentToast(this.errorMsg);
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
    presentToast(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000,
                position: 'top'
            });
            toast.present();
        });
    }
};
LocationPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeGeocoder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }
];
LocationPage.propDecorators = {
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['map', { static: true },] }],
    mapNativeElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['mapElement',] }]
};
LocationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-location',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./location.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/location/location.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./location.page.scss */ "./src/app/location/location.page.scss")).default]
    })
], LocationPage);



/***/ })

}]);
//# sourceMappingURL=location-location-module-es2015.js.map