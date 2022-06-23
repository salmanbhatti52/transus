(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["filters-filters-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/filters/filters.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/filters/filters.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [class.ios-search]=\"plateformCheck == 'ios'\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <img src=\"assets/img/Menu.svg\" (click)=\"toggleMenu()\">\n    </ion-buttons>\n\n    <!-- <ion-searchbar [(ngModel)]=\"source\" (ionInput)=\"UpdateSearchResults()\" placeholder=\"Search for Cars\"></ion-searchbar> -->\n\n  </ion-toolbar>\n  <!-- <ion-list class=\"bg_list\" [hidden]=\"autocompleteItems.length == 0\">\n    <ion-item lines=\"full\" style=\"--padding-top: 4px; --padding-bottom: 4px;\" *ngFor=\"let item of autocompleteItems\" button=\"true\" (click)=\"SelectSearchResult(item.description)\">\n      <ion-label><h2>{{ item.description }}</h2></ion-label>\n    </ion-item>\n  </ion-list> -->\n</ion-header>\n<ion-content>\n\n  <ion-row class=\"sort\">\n    <ion-col size=\"6\" class=\"ion-text-left\">\n      <p class=\"text1 SFUIText-HeavyItalic\">Sort</p>\n    </ion-col>\n    <ion-col size=\"6\" class=\"ion-text-right\">\n      <!--p class=\"text2\">Relevance <img src=\"assets/img/pecil_curve.svg\"></p-->\n    </ion-col>\n  </ion-row>\n  <div class=\"bg_grey calender_slider\">\n    <ion-calendar style=\"background-color: #f9f9f9;\" [(ngModel)]=\"choosenDate\" (click)=\"onChange($event)\" type=\"string\"\n      [options]=\"optionsRange\" [format]=\"'YYYY-MM-DD'\">\n    </ion-calendar>\n    <!-- <ion-row>\n      <ion-col size=\"3\" class=\"ion-text-right\">\n        <img src=\"assets/img/left.svg\" (click)=\"slidePrev()\" >\n      </ion-col>\n      <ion-col size=\"6\" class=\"ion-text-center\">\n        <h4 class=\"SFUIText-HeavyItalic calender_slider_text  dark_p_color\">{{start_date_month}} , {{currentYear}}</h4>\n      </ion-col>\n      <ion-col size=\"3\" class=\"ion-text-left\">\n        <img src=\"assets/img/right.svg\" (click)=\"slideNext()\">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-slides class=\"start_date\" [options]=\"option1\"   #startSlides>\n          <ion-slide class=\"dark_p_color\" *ngFor=\"let i of days\"  (click)=\"getStartIndex(i)\">\n              <span  *ngIf=\"i<=9\" [class.activeState]=\"sliderStartBoolean == i\">{{i}}</span>\n              <span  *ngIf=\"i>9\" class=\"num\" [class.activeState]=\"sliderStartBoolean == i\">{{i}}</span>\n          </ion-slide>\n          \n      </ion-slides>\n      </ion-col>\n    </ion-row> -->\n  </div>\n  <ion-row class=\"m_price\">\n    <ion-col size=\"12\" class=\"price\">\n      <b class=\"SFUIText-HeavyItalic\">PRICE</b>\n    </ion-col>\n    <ion-col class=\"ion-text-center\">\n      <!-- <ion-label class=\"huly\">{{currencySymbol}} {{min_price}}-{{currencySymbol}} {{max_price}}/hour</ion-label> -->\n      <ion-label class=\"huly\">{{currencySymbol}} {{lowerPrice}}-{{currencySymbol}} {{upperPrice}}/hour</ion-label>\n\n      <ion-range style=\"margin-top: 17px;\" (ionChange)=\"onSliderChanged($event)\" id=\"dual-range\"  [(ngModel)]=\"price\" dual-knobs pin color=\"primary\">\n      </ion-range>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"tog_main \">\n    <ion-col size=\"9\" class=\"tog1\">\n      <h4 class=\"SFUIText-HeavyItalic\">Comfort</h4>\n      <p>Cars for comfort </p>\n    </ion-col>\n    <ion-col size=\"3\" class=\"ion-text-right\">\n      <ion-item lines=\"none\">\n        <ion-toggle slot=\"start\" [(ngModel)]=\"comfortClass\" name=\"blueberry\" color=\"tertiary\" checked></ion-toggle>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"tog_main bg_none\">\n    <ion-col size=\"9\" class=\"tog1\">\n      <h4 class=\"SFUIText-HeavyItalic\">BUSINESS CLASS</h4>\n      <p>Cars for business tarvel</p>\n    </ion-col>\n    <ion-col size=\"3\" class=\"ion-text-right\">\n      <ion-item lines=\"none\">\n        <ion-toggle slot=\"start\" [(ngModel)]=\"businessClass\" name=\"blueberry\" color=\"tertiary\" checked></ion-toggle>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"tog_main \">\n    <ion-col size=\"9\" class=\"tog1\">\n      <h4 class=\"SFUIText-HeavyItalic\">DELUXE CLASS</h4>\n      <p>Exclusive cars for guests ages 25+</p>\n    </ion-col>\n    <ion-col size=\"3\" class=\"ion-text-right\">\n      <ion-item lines=\"none\">\n        <ion-toggle slot=\"start\" [(ngModel)]=\"deluxClass\" name=\"blueberry\" color=\"tertiary\" checked></ion-toggle>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"tog_main bg_none\">\n    <ion-col size=\"9\" class=\"tog1\">\n      <h4 class=\"SFUIText-HeavyItalic\">SUPER DELUXE CLASS</h4>\n      <p>Super exclusive cars for guests ages 30+</p>\n    </ion-col>\n    <ion-col size=\"3\" class=\"ion-text-right\">\n      <ion-item lines=\"none\">\n        <ion-toggle slot=\"start\" [(ngModel)]=\"superDeluxClass\" name=\"blueberry\" color=\"tertiary\" checked></ion-toggle>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"main_drop\" style=\"padding-top: 4px;\">\n\n\n    <ion-col size=\"6\" class=\"m_f\">\n      <ion-row class=\"m_s\" (click)=\"openVehicle()\">\n        <ion-col size=\"10\" class=\"m_t\">\n          <h5 class=\"SFUIText-HeavyItalic\">VEHICLE TYPE</h5>\n          <p>{{vehicleTypeText}}</p>\n        </ion-col>\n        <ion-col class=\"arrow_down\" size=\"2\">\n          <img src=\"assets/img/Arrow_Down.svg\">\n        </ion-col>\n      </ion-row>\n      <ion-select [(ngModel)]=\"vehicleType\" (ionChange)=\"getVehicleVal()\" [hidden]=\"vehicleShowList\" #vehicleSelect>\n        <ion-select-option value=\"{{p.vehicles_type_id}},{{p.type_name}}\"\n          *ngFor=\"let p of vehicle_types; let i = index\">{{p.type_name}}</ion-select-option>\n      </ion-select>\n    </ion-col>\n    <ion-col size=\"6\" class=\"m_r\">\n      <ion-row class=\"m_s\" (click)=\"openTransmission()\">\n        <ion-col size=\"10\" class=\"m_t\">\n          <h5 class=\"SFUIText-HeavyItalic\">TRANSMISSION</h5>\n          <p>{{transmissionText}}</p>\n        </ion-col>\n        <ion-col class=\"arrow_down\" size=\"2\">\n          <img src=\"assets/img/Arrow_Down.svg\">\n        </ion-col>\n      </ion-row>\n      <ion-select [(ngModel)]=\"transmission\" (ionChange)=\"getTransmissionVal()\" [hidden]=\"transmissionShowList\"\n        #transmissionSelect>\n        <ion-select-option value=\"{{p.gear_type_id}},{{p.name}}\" *ngFor=\"let p of transmissions; let i = index\">\n          {{p.name}}</ion-select-option>\n      </ion-select>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"main_drop\">\n    <ion-col size=\"6\" class=\"m_f\">\n      <ion-row class=\"m_s\" (click)=\"openMake()\">\n        <ion-col size=\"10\" class=\"m_t\">\n          <h5 class=\"SFUIText-HeavyItalic\">MAKE</h5>\n          <p>{{makeText}}</p>\n        </ion-col>\n        <ion-col class=\"arrow_down\" size=\"2\">\n          <img src=\"assets/img/Arrow_Down.svg\">\n        </ion-col>\n      </ion-row>\n      <ion-select [(ngModel)]=\"make\" (ionChange)=\"getMakeVal()\" [hidden]=\"makeShowList\" #makeSelect>\n        <ion-select-option value=\"{{p.veh_make_id}},{{p.name}}\" *ngFor=\"let p of makes; let i = index\">{{p.name}}\n        </ion-select-option>\n      </ion-select>\n    </ion-col>\n    <ion-col size=\"6\" class=\"m_r\">\n      <ion-row class=\"m_s\" (click)=\"openModel()\">\n        <ion-col size=\"10\" class=\"m_t\">\n          <h5 class=\"SFUIText-HeavyItalic\">MODEL</h5>\n          <p>{{modelText}}</p>\n        </ion-col>\n        <ion-col class=\"arrow_down\" size=\"2\">\n          <img src=\"assets/img/Arrow_Down.svg\">\n        </ion-col>\n      </ion-row>\n      <ion-select [(ngModel)]=\"model\" (ionChange)=\"getModelVal()\" [hidden]=\"modelShowList\" #modelSelect>\n        <ion-select-option value=\"{{p.model_id}},{{p.name}}\" *ngFor=\"let p of models; let i = index\">{{p.name}}\n        </ion-select-option>\n      </ion-select>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"main_drop\">\n    <!-- <ion-col size=\"6\" class=\"m_f\">\n      <ion-row class=\"m_s\" (click)=\"openYears()\">\n        <ion-col size=\"10\" class=\"m_t\">\n          <h5 class=\"SFUIText-HeavyItalic\">YEARS</h5>\n          <p>{{yearsText}}</p>\n        </ion-col>\n        <ion-col class=\"arrow_down\" size=\"2\">\n          <img src=\"assets/img/Arrow_Down.svg\">\n        </ion-col>\n      </ion-row>\n      <ion-select  [(ngModel)]=\"years\" (ionChange)=\"getYearsVal()\" [hidden]=\"yearsShowList\" #yearsSelect>\n        <ion-select-option value=\"2018,2018\" >2018</ion-select-option>\n        <ion-select-option value=\"2020,2020\" >2020</ion-select-option>\n      </ion-select>\n    </ion-col> -->\n    <ion-col size=\"6\" class=\"m_r\">\n      <ion-row class=\"m_s\" (click)=\"openNos()\">\n        <ion-col size=\"10\" class=\"m_t\">\n          <h5 class=\"SFUIText-HeavyItalic\">NUMBER OF SEATS</h5>\n          <p>{{nosText}}</p>\n        </ion-col>\n        <ion-col class=\"arrow_down\" size=\"2\">\n          <img src=\"assets/img/Arrow_Down.svg\">\n        </ion-col>\n      </ion-row>\n      <ion-select [(ngModel)]=\"nos\" (ionChange)=\"getnosVal()\" [hidden]=\"nosShowList\" #nosSelect>\n        <ion-select-option value=\"{{p.veh_seats_id}},{{p.seat_no}}\" *ngFor=\"let p of vehSeats; let i = index\">\n          {{p.seat_no}}</ion-select-option>\n      </ion-select>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"view_result\">\n    <ion-col size=\"2\"></ion-col>\n    <ion-col size=\"8\">\n      <ion-button color=\"secondary\" expand=\"block\" (click)=\"submitForm()\" shape=\"round\">View Result</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content>");

/***/ }),

/***/ "./src/app/filters/filters-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/filters/filters-routing.module.ts ***!
  \***************************************************/
/*! exports provided: FiltersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersPageRoutingModule", function() { return FiltersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _filters_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filters.page */ "./src/app/filters/filters.page.ts");




const routes = [
    {
        path: '',
        component: _filters_page__WEBPACK_IMPORTED_MODULE_3__["FiltersPage"]
    }
];
let FiltersPageRoutingModule = class FiltersPageRoutingModule {
};
FiltersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FiltersPageRoutingModule);



/***/ }),

/***/ "./src/app/filters/filters.module.ts":
/*!*******************************************!*\
  !*** ./src/app/filters/filters.module.ts ***!
  \*******************************************/
/*! exports provided: FiltersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersPageModule", function() { return FiltersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _filters_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filters-routing.module */ "./src/app/filters/filters-routing.module.ts");
/* harmony import */ var _filters_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filters.page */ "./src/app/filters/filters.page.ts");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ion2-calendar */ "./node_modules/ion2-calendar/__ivy_ngcc__/dist/index.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_7__);








let FiltersPageModule = class FiltersPageModule {
};
FiltersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _filters_routing_module__WEBPACK_IMPORTED_MODULE_5__["FiltersPageRoutingModule"],
            ion2_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"],
        ],
        declarations: [_filters_page__WEBPACK_IMPORTED_MODULE_6__["FiltersPage"]]
    })
], FiltersPageModule);



/***/ }),

/***/ "./src/app/filters/filters.page.scss":
/*!*******************************************!*\
  !*** ./src/app/filters/filters.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  padding: 0em 0em 0 0;\n  --background: #c4932f;\n}\n\nion-toolbar.ios {\n  margin-top: 3px;\n}\n\nion-searchbar {\n  --border-radius: 22px;\n  --box-shadow: none;\n  padding: 0em 2em 0em 1.5em;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 0px 0px 5px 0;\n    --background: #c4932f;\n  }\n\n  ion-searchbar {\n    --border-radius: 22px;\n    --box-shadow: none;\n    padding: 0em 2em 0em 12px;\n  }\n}\n\n.bg_list {\n  background: #fff;\n  position: absolute;\n  height: 300px;\n  width: 100%;\n  z-index: 10;\n}\n\n.bg_list ion-item {\n  width: 100%;\n}\n\n.sort {\n  margin: 0.6em 0.4em;\n}\n\n.sort .text1 {\n  font-size: 18px;\n  margin: 0px;\n}\n\n.sort .text2 {\n  margin: 0px;\n  font-size: 14px;\n}\n\n.sort .text2 img {\n  position: relative;\n  top: 3px;\n  margin-left: 10px;\n}\n\n.month {\n  padding: 1em 0.4em 0.5em 0.4em;\n}\n\n.bg_grey {\n  background: #f9f9f9;\n  padding: 0em 0.4em;\n}\n\n.month_slider {\n  margin-top: 0px;\n  margin-bottom: 1em;\n  display: flex;\n  overflow: auto;\n}\n\n.month_slider span {\n  border: 1px solid #000;\n  border-radius: 22px;\n  padding: 8px 14px;\n  margin-left: 1em;\n}\n\n.num {\n  padding: 9px 10px !important;\n}\n\n.month_slider span:first-child {\n  margin-left: 0em;\n}\n\nion-range {\n  --bar-height: 6px;\n  --knob-size: 24px;\n  --knob-box-shadow: 0px 0px 0px 3px #fff;\n  padding: 0px 3px;\n  --bar-border-radius: 10px;\n}\n\n.m_price {\n  margin: 0.6em 0.4em;\n}\n\n.huly {\n  color: #272727;\n}\n\n.price {\n  padding: 1em 0.4em 0em 0.4em;\n}\n\n.tog1 {\n  font-size: 13px;\n  color: #272727;\n}\n\n.tog1 h4 {\n  margin: 0px;\n}\n\n.tog1 p {\n  margin: 0px;\n}\n\n.tog_main {\n  background: #f9f9f9;\n  padding: 1em 0.3em;\n}\n\nion-item {\n  --background: transparent;\n  float: right;\n}\n\nion-toggle {\n  height: 22px;\n  padding-right: 0px;\n  padding-top: 0px;\n}\n\n.bg_none {\n  background: none;\n}\n\n.main_drop {\n  background: #f9f9f9;\n}\n\n.m_f {\n  padding: 0px;\n  padding-right: 4px;\n  padding-bottom: 4px;\n}\n\n.m_s {\n  background: #fff;\n}\n\n.m_t {\n  padding: 1em 0.5em;\n}\n\n.m_t h5 {\n  margin: 0px;\n  font-size: 13px;\n}\n\n.m_t p {\n  margin: 0px;\n  font-size: 12px;\n  color: #272727;\n}\n\n.m_r {\n  padding-left: 4px;\n  padding-bottom: 4px;\n  padding: 0px;\n}\n\n.view_result {\n  background: #f9f9f9;\n  padding: 0.5em 0em;\n}\n\nion-toggle.toggle-checked::part(track) {\n  background: #c4932f !important;\n}\n\nion-range::part(bar) {\n  background: rgba(var(--ion-color-base-rgb), 1);\n}\n\n.arrow_down {\n  text-align: center;\n  margin-top: 1em;\n}\n\n.arrow_down img {\n  width: 8px;\n}\n\n.activeState {\n  background: #c4932f;\n  border: 1px solid #c4932f !important;\n  color: #fff !important;\n}\n\nion-slide span {\n  border: 1px solid #000;\n  border-radius: 22px;\n  padding: 8px 14px;\n  margin-left: 1em;\n}\n\n.num {\n  padding: 9px 10px !important;\n}\n\n.calender_slider {\n  background: #f9f9f9;\n  padding: 0.6em 0em;\n}\n\n.calender_slider_text {\n  margin: 0px;\n  position: relative;\n  top: -2px;\n  font-size: 18px;\n}\n\nion-slide {\n  margin-left: 0.6em;\n}\n\nion-slide:first-child {\n  margin-left: 0em;\n}\n\nion-select {\n  position: absolute;\n  color: #fff;\n  z-index: -10;\n}\n\nion-select::part(text) {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsdGVycy9maWx0ZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFDQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQUVKOztBQUFBO0VBQ0k7SUFDSSxzQkFBQTtJQUNBLHFCQUFBO0VBR047O0VBREU7SUFDSSxxQkFBQTtJQUNBLGtCQUFBO0lBQ0EseUJBQUE7RUFJTjtBQUNGOztBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUFBO0VBQ0ksV0FBQTtBQUdKOztBQURBO0VBQ0ksbUJBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBS0o7O0FBSEE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQU1KOztBQUpBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7QUFPSjs7QUFMQTtFQUNJLDhCQUFBO0FBUUo7O0FBTkE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FBU0o7O0FBUEE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQVVKOztBQVJBO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFXSjs7QUFUQTtFQUNJLDRCQUFBO0FBWUo7O0FBVkE7RUFDSSxnQkFBQTtBQWFKOztBQVhBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVDQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQWNKOztBQVpBO0VBQ0ksbUJBQUE7QUFlSjs7QUFiQTtFQUNJLGNBQUE7QUFnQko7O0FBZEE7RUFDSSw0QkFBQTtBQWlCSjs7QUFmQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBa0JKOztBQWhCQTtFQUNJLFdBQUE7QUFtQko7O0FBakJBO0VBQ0ksV0FBQTtBQW9CSjs7QUFsQkE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FBcUJKOztBQW5CQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQXNCSjs7QUFwQkE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQXVCSjs7QUFyQkE7RUFDSSxnQkFBQTtBQXdCSjs7QUF0QkE7RUFDSSxtQkFBQTtBQXlCSjs7QUF2QkE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQTBCSjs7QUF4QkE7RUFDSSxnQkFBQTtBQTJCSjs7QUF6QkE7RUFDSSxrQkFBQTtBQTRCSjs7QUExQkE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQTZCSjs7QUEzQkE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUE4Qko7O0FBNUJBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUErQko7O0FBN0JBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQWdDSjs7QUE3QkE7RUFDSSw4QkFBQTtBQWdDSjs7QUE5QkE7RUFDSSw4Q0FBQTtBQWlDSjs7QUEvQkE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUFrQ0o7O0FBaENBO0VBQ0ksVUFBQTtBQW1DSjs7QUFqQ0E7RUFDSSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7QUFvQ0o7O0FBbENBO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFxQ0o7O0FBbkNBO0VBQ0ksNEJBQUE7QUFzQ0o7O0FBcENBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQXVDSjs7QUFyQ0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQXdDSjs7QUF0Q0E7RUFDSSxrQkFBQTtBQXlDSjs7QUF2Q0E7RUFDSSxnQkFBQTtBQTBDSjs7QUF4Q0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBMkNKOztBQXpDQTtFQUNJLGFBQUE7QUE0Q0oiLCJmaWxlIjoic3JjL2FwcC9maWx0ZXJzL2ZpbHRlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIHBhZGRpbmc6IDBlbSAwZW0gMCAwO1xuICAgIC0tYmFja2dyb3VuZDogI2M0OTMyZjtcbn1cblxuaW9uLXRvb2xiYXIuaW9zIHtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG59XG5pb24tc2VhcmNoYmFyIHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIycHg7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIHBhZGRpbmc6IDBlbSAyZW0gMGVtIDEuNWVtO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4taGVpZ2h0IDogODAwcHgpIHtcbiAgICBpb24tdG9vbGJhciB7XG4gICAgICAgIHBhZGRpbmc6IDBweCAwcHggNXB4IDA7XG4gICAgICAgIC0tYmFja2dyb3VuZDogI2M0OTMyZjtcbiAgICB9XG4gICAgaW9uLXNlYXJjaGJhciB7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMjJweDtcbiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwZW0gMmVtIDBlbSAxMnB4O1xuICAgIH1cbn1cblxuXG4uYmdfbGlzdCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAxMDtcbn1cbi5iZ19saXN0IGlvbi1pdGVtIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5zb3J0IHtcbiAgICBtYXJnaW46IDAuNmVtIDAuNGVtO1xufVxuLnNvcnQgLnRleHQxIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luOiAwcHg7XG59XG4uc29ydCAudGV4dDIge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5zb3J0IC50ZXh0MiBpbWcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDNweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5tb250aCB7XG4gICAgcGFkZGluZzogMWVtIDAuNGVtIDAuNWVtIDAuNGVtO1xufVxuLmJnX2dyZXkge1xuICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gICAgcGFkZGluZzogMGVtIDAuNGVtO1xufVxuLm1vbnRoX3NsaWRlciB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuLm1vbnRoX3NsaWRlciBzcGFuIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gICAgcGFkZGluZzogOHB4IDE0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbn1cbi5udW0ge1xuICAgIHBhZGRpbmc6IDlweCAxMHB4ICFpbXBvcnRhbnQ7XG59XG4ubW9udGhfc2xpZGVyIHNwYW46Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1sZWZ0OiAwZW07XG59XG5pb24tcmFuZ2Uge1xuICAgIC0tYmFyLWhlaWdodDogNnB4O1xuICAgIC0ta25vYi1zaXplOiAyNHB4O1xuICAgIC0ta25vYi1ib3gtc2hhZG93OiAwcHggMHB4IDBweCAzcHggI2ZmZjtcbiAgICBwYWRkaW5nOiAwcHggM3B4O1xuICAgIC0tYmFyLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ubV9wcmljZSB7XG4gICAgbWFyZ2luOiAwLjZlbSAwLjRlbTtcbn1cbi5odWx5IHtcbiAgICBjb2xvcjogIzI3MjcyNztcbn1cbi5wcmljZSB7XG4gICAgcGFkZGluZzogMWVtIDAuNGVtIDBlbSAwLjRlbTtcbn1cbi50b2cxIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICMyNzI3Mjc7XG59XG4udG9nMSBoNCB7XG4gICAgbWFyZ2luOiAwcHg7XG59XG4udG9nMSBwIHtcbiAgICBtYXJnaW46IDBweDtcbn1cbi50b2dfbWFpbiB7XG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgICBwYWRkaW5nOiAxZW0gMC4zZW07XG59XG5pb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5pb24tdG9nZ2xlIHtcbiAgICBoZWlnaHQ6IDIycHg7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG59XG4uYmdfbm9uZSB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi5tYWluX2Ryb3Age1xuICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG59XG4ubV9mIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG59XG4ubV9zIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLm1fdCB7XG4gICAgcGFkZGluZzogMWVtIDAuNWVtO1xufVxuLm1fdCBoNSB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuLm1fdCBwIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICMyNzI3Mjc7XG59XG4ubV9yIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbn1cbi52aWV3X3Jlc3VsdCB7XG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgICBwYWRkaW5nOiAwLjVlbSAwZW07XG59XG5cbmlvbi10b2dnbGUudG9nZ2xlLWNoZWNrZWQ6OnBhcnQodHJhY2spIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTk2IDE0NyA0NykgIWltcG9ydGFudDtcbn1cbmlvbi1yYW5nZTo6cGFydChiYXIpIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1iYXNlLXJnYiksIDEpO1xufVxuLmFycm93X2Rvd24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG59XG4uYXJyb3dfZG93biBpbWcge1xuICAgIHdpZHRoOiA4cHg7XG59XG4uYWN0aXZlU3RhdGUge1xuICAgIGJhY2tncm91bmQ6ICNjNDkzMmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M0OTMyZiAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5pb24tc2xpZGUgc3BhbiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICAgIHBhZGRpbmc6IDhweCAxNHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG59XG4ubnVtIHtcbiAgICBwYWRkaW5nOiA5cHggMTBweCAhaW1wb3J0YW50O1xufVxuLmNhbGVuZGVyX3NsaWRlciB7XG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgICBwYWRkaW5nOiAwLjZlbSAwZW07XG59XG4uY2FsZW5kZXJfc2xpZGVyX3RleHQge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0ycHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuaW9uLXNsaWRlIHtcbiAgICBtYXJnaW4tbGVmdDogMC42ZW07XG59XG5pb24tc2xpZGU6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1sZWZ0OiAwZW07XG59XG5pb24tc2VsZWN0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgei1pbmRleDogLTEwO1xufVxuaW9uLXNlbGVjdDo6cGFydCh0ZXh0KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/filters/filters.page.ts":
/*!*****************************************!*\
  !*** ./src/app/filters/filters.page.ts ***!
  \*****************************************/
/*! exports provided: FiltersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersPage", function() { return FiltersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");






let FiltersPage = class FiltersPage {
    constructor(storage, zone, router, toastController, restService, menuCtrl, plateform, loadingController) {
        this.storage = storage;
        this.zone = zone;
        this.router = router;
        this.toastController = toastController;
        this.restService = restService;
        this.menuCtrl = menuCtrl;
        this.plateform = plateform;
        this.loadingController = loadingController;
        this.option1 = {
            loop: true,
            slidesPerView: 8
        };
        this.start_date_month = 'January';
        this.start_month_index = 1;
        this.monthCounter = 1;
        this.feature = 'All features';
        this.featureText = 'All features';
        this.vehicleType = 'All Types';
        this.vehicleTypeText = 'All Types';
        this.make = 'Select Make';
        this.makeText = 'Select Make';
        this.model = 'Select Model';
        this.modelText = 'Select Model';
        this.years = 'Select Year';
        this.yearsText = 'Select Year';
        this.nos = 'Select NOS';
        this.nosText = 'Select NOS';
        this.color = 'Select Color';
        this.colorText = 'Select Color';
        this.transmission = 'Select Transmission';
        this.transmissionText = 'Select Transmission';
        this.featureShowList = true;
        this.vehicleShowList = true;
        this.makeShowList = true;
        this.modelShowList = true;
        this.yearsShowList = true;
        this.nosShowList = true;
        this.colorShowList = true;
        this.transmissionShowList = true;
        this.lowerPrice = 0;
        this.upperPrice = 0;
        this.max_price = 30;
        this.min_price = 10;
        this.currencyID = '';
        this.price = {
            upper: 30,
            lower: 10
        };
        this.pricea = {
            upper: 30,
            lower: 10
        };
        this.comfortClass = false;
        this.businessClass = false;
        this.deluxClass = false;
        this.superDeluxClass = false;
        this.NoDataFount = [];
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        this.autocomplete = { input: '' };
        this.autocompleteItems = [];
        this.detinationCompleteItems = [];
        this.optionsRange = {
            pickMode: 'single',
        };
    }
    ngOnInit() {
        if (this.plateform.is('ios')) {
            this.plateformCheck = "ios";
        }
        else {
            this.plateformCheck = "android";
        }
        this.days = Array.from({ length: 30 }, (v, k) => k + 1);
        this.getStartIndex(1);
        this.storage.get('user_details').then((user_details) => {
            this.storage.get('currency_symbol').then((currency_symbol) => {
                console.log('currency_symbol', currency_symbol);
                this.currencySymbol = currency_symbol;
                console.log('currency', this.currencyID);
                // this.getDropDownData();
                if (user_details) {
                    console.log(user_details);
                    this.userID = user_details.users_id;
                    this.currencyID = user_details.currencies_id;
                    this.getDropDownData();
                }
                else {
                    this.userID = '';
                    this.getDropDownData();
                }
            });
        });
    }
    SelectSearchResult(address) {
        this.source = address; //May be delete
        this.restService.sourceToSearch = this.source;
        console.log(this.source);
        this.router.navigate(['/car-list']);
        this.autocompleteItems = [];
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
    getDropDownData() {
        this.present();
        var stringy = JSON.stringify({
            "requestType": "get_page_data",
            "currencyID": this.currencyID
        });
        console.log('data', stringy);
        this.restService.filters(stringy).subscribe(response => {
            this.response = JSON.parse(response['_body']);
            console.log('resssspppppp---------', this.response);
            this.dismiss();
            this.makes = this.response.makes;
            this.models = this.response.models;
            this.transmissions = this.response.transmission;
            this.vehSeats = this.response.veh_seats;
            this.vehicle_types = this.response.vehicle_types;
            this.max_price = parseInt(this.response.max_price);
            this.min_price = parseInt(this.response.min_price);
            this.upperPrice = this.max_price;
            this.lowerPrice = this.min_price;
            console.log(this.max_price, this.min_price);
            this.price = {
                upper: this.max_price,
                lower: this.min_price
            };
            console.log(this.response);
        }, err => {
        });
    }
    onChange(event) {
        console.log("choosenDatechoosenDate", this.choosenDate);
    }
    getStartIndex(i) {
        this.sliderStartBoolean = i;
    }
    onSliderChanged(event) {
        console.log(event);
        // console.log(this.price.lower)
        // console.log(this.price.upper);
        this.lowerPrice = this.price.lower;
        this.upperPrice = this.price.upper;
    }
    getVehicleVal() {
        this.vehicleTypeText = this.vehicleType.split(',')[1];
        this.vehicleShowList = true;
    }
    openVehicle() {
        this.vehicleShowList = false;
        this.vehicleSelect.open();
    }
    getMakeVal() {
        this.makeText = this.make.split(',')[1];
        this.makeShowList = true;
    }
    openMake() {
        this.makeShowList = false;
        this.makeSelect.open();
    }
    getModelVal() {
        this.modelText = this.model.split(',')[1];
        this.modelShowList = true;
    }
    openModel() {
        this.modelShowList = false;
        this.modelSelect.open();
    }
    getYearsVal() {
        this.yearsText = this.years.split(',')[1];
        this.yearsShowList = true;
    }
    openYears() {
        this.yearsShowList = false;
        this.yearsSelect.open();
    }
    getnosVal() {
        this.nosText = this.nos.split(',')[1];
        this.nosShowList = true;
    }
    openNos() {
        this.nosShowList = false;
        this.nosSelect.open();
    }
    getTransmissionVal() {
        this.transmissionText = this.transmission.split(',')[1];
        this.transmissionShowList = true;
    }
    openTransmission() {
        this.transmissionShowList = false;
        this.transmissionSelect.open();
    }
    submitForm() {
        var vehicleType = this.vehicleType.split(',')[0];
        var make = this.make.split(',')[0];
        var model = this.model.split(',')[0];
        var years = this.years.split(',')[0];
        var nos = this.nos.split(',')[0];
        var transmission = this.transmission.split(',')[0];
        console.log(this.price);
        if (vehicleType == 'All Types') {
            vehicleType = '';
        }
        if (make == 'Select Make') {
            make = '';
        }
        if (model == 'Select Model') {
            model = '';
        }
        if (years == 'Select Year') {
            years = '';
        }
        if (nos == 'Select NOS') {
            nos = '';
        }
        if (transmission == 'Select Transmission') {
            transmission = '';
        }
        if (this.price == undefined) {
            this.lowerPrice = 0;
            this.upperPrice = 0;
        }
        else if (this.price.lower == undefined && this.price.upper == undefined) {
            this.lowerPrice = 0;
            this.upperPrice = 0;
            //alert('2'+this.lowerPrice);
        }
        this.present();
        var stringy = JSON.stringify({
            "requestType": 'searchByfilter',
            "modelID": model,
            "makeID": make,
            "transmissionID": transmission,
            "vehTypeID": vehicleType,
            "minPrice": this.lowerPrice,
            "maxPrice": this.upperPrice,
            "choosenDate": this.choosenDate,
            "numOfSeats": nos,
            "usersID": this.userID,
            "currencyID": this.currencyID,
            "comfortClass": this.comfortClass,
            "businessClass": this.businessClass,
            "deluxClass": this.deluxClass,
            "superDeluxClass": this.superDeluxClass
        });
        console.log(stringy);
        this.restService.filters(stringy).subscribe(response => {
            this.response = JSON.parse(response['_body']);
            this.dismiss();
            if (this.response.status == 'NotFound') {
                var myData = JSON.stringify({
                    cars_list_result: this.NoDataFount
                });
                this.restService.fromHomeToSearch = myData;
                this.router.navigate(['/car-list']);
                // this.presentToast('Data Not Found!');
            }
            else if (this.response.status == 'Found') {
                console.log(this.response.cars_list_result);
                var myData = JSON.stringify({
                    cars_list_result: this.response.cars_list_result
                });
                this.restService.fromHomeToSearch = myData;
                this.restService.scroolFlag = false;
                this.restService.sourceToSearch = null;
                console.log(this.restService.fromHomeToSearch, "fromHomeToSearch");
                this.router.navigate(['/car-list']);
            }
        }, err => {
        });
    }
    monthList(param) {
        this.monthCounter = param;
        if (param == 1) {
            this.month = 'January';
        }
        else if (param == 2) {
            this.month = 'February';
        }
        else if (param == 3) {
            this.month = 'March';
        }
        else if (param == 4) {
            this.month = 'April';
        }
        else if (param == 5) {
            this.month = 'May';
        }
        else if (param == 6) {
            this.month = 'June';
        }
        else if (param == 7) {
            this.month = 'July';
        }
        else if (param == 8) {
            this.month = 'August';
        }
        else if (param == 9) {
            this.month = 'September';
        }
        else if (param == 10) {
            this.month = 'October';
        }
        else if (param == 11) {
            this.month = 'November';
        }
        else if (param == 12) {
            this.month = 'December';
        }
        return this.month;
    }
    toggleMenu() {
        this.menuCtrl.toggle();
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
FiltersPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
FiltersPage.propDecorators = {
    startSlides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['startSlides',] }],
    featureSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['featureSelect',] }],
    vehicleSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['vehicleSelect',] }],
    makeSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['makeSelect',] }],
    modelSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['modelSelect',] }],
    yearsSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['yearsSelect',] }],
    nosSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['nosSelect',] }],
    colorSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['colorSelect',] }],
    transmissionSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['transmissionSelect',] }]
};
FiltersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-filters',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./filters.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/filters/filters.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./filters.page.scss */ "./src/app/filters/filters.page.scss")).default]
    })
], FiltersPage);



/***/ })

}]);
//# sourceMappingURL=filters-filters-module-es2015.js.map