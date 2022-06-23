(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-detail-chat-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat-detail/chat-detail.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat-detail/chat-detail.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border [class.ios-headers]=\"plateformCheck == 'ios'\">\n  <ion-toolbar class=\"bg_header\">\n    <ion-buttons [class.back_button]=\"plateformCheck == 'ios'\" slot=\"start\">\n      <img src=\"assets/img/Arrow.svg\" (click)=\"back()\" />\n    </ion-buttons>\n    <ion-title class=\"alura\">\n      <img src=\"{{profileImg}}\" class=\"img_avatar\" />\n      <span style=\"font-size: 17px\" class=\"imgtitle\">{{sender_name}}</span>\n    </ion-title>\n    <ion-button\n      color=\"secondary\"\n      shape=\"round\"\n      slot=\"end\"\n      class=\"send_price\"\n      (click)=\"sendOffer()\"\n      *ngIf=\"btnSendPrice\"\n      >Send Price</ion-button\n    >\n  </ion-toolbar>\n</ion-header>\n<ion-content #IonContent padding>\n  <!--<ion-card class=\"card_div\">\n    <ion-card-content class=\"chatDivHeight\">-->\n  <ion-list>\n    <div *ngFor=\"let chat of msgList; let i = index; \">\n      <ion-row *ngIf=\"chat.date\">\n        <ion-col>\n          <ion-text>{{chat.date}}</ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"chat.userId == User\">\n        <ion-col\n          class=\"right\"\n          no-padding\n          [ngClass]=\"{'clubbed':((msgList[i+1] && msgList[i+1].userId != chat.userId)|| !msgList[i+1])}\"\n        >\n          <div class=\"imageAvatarRight\">\n            <div class=\"imageAvatarBottom\">\n              <!--<ion-avatar class=\"avatar\" [ngClass]=\"(msgList[i+1] && msgList[i+1].userId == chat.userId)?'hidden':''\">\n                <div class=\"imageAvatarBottomIcon\">\n                  <ion-icon name=\"add\" expand=\"icon-only\" color=\"light\"> </ion-icon>\n                </div>\n                <ion-img [src]=\"chat.userAvatar\"></ion-img>\n              </ion-avatar>-->\n            </div>\n            <ion-label color=\"light\">\n              <div\n                class=\"chatDiv\"\n                [ngClass]=\"{'sharper':((msgList[i+1] && msgList[i+1].userId == chat.userId) &&\n              (msgList[i-1] && msgList[i-1].userId == chat.userId)),\n              'sharper-top':(msgList[i-1] && msgList[i-1].userId == chat.userId),\n              'sharper-bottom':(msgList[i+1] && msgList[i+1].userId == chat.userId)}\"\n              >\n                <p class=\"reciver\" text-wrap padding>{{chat.message}}</p>\n              </div>\n            </ion-label>\n            <span class=\"lefttime\">{{chat.time }} </span>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"chat.userId == toUser\">\n        <ion-col\n          class=\"left\"\n          no-padding\n          [ngClass]=\"{'clubbed':((msgList[i+1] && msgList[i+1].userId != chat.userId)|| !msgList[i+1])}\"\n        >\n          <div class=\"imageAvatarLeft\">\n            <span class=\"righttime\">{{chat.time }} </span>\n            <ion-label color=\"light\">\n              <div\n                class=\"chatDiv\"\n                [ngClass]=\"{'sharper':((msgList[i+1] && msgList[i+1].userId == chat.userId) &&\n              (msgList[i-1] && msgList[i-1].userId == chat.userId)),\n              'sharper-top':(msgList[i-1] && msgList[i-1].userId == chat.userId),\n              'sharper-bottom':(msgList[i+1] && msgList[i+1].userId == chat.userId)}\"\n              >\n                <p class=\"sender\" text-wrap padding>{{chat.message}}</p>\n                <!--<div class=\"corner-parent-left\">\n                  <div class=\"corner-child-left\">\n\n                  </div>\n                </div>-->\n              </div>\n            </ion-label>\n            <div class=\"imageAvatarBottom\">\n              <!-- <ion-icon class=\"imageAvatarBottomIcon\" name=\"add\" expand=\"icon-only\" color=\"success\"></ion-icon> -->\n              <!--<ion-avatar class=\"avatar\" [ngClass]=\"(msgList[i+1] && msgList[i+1].userId == chat.userId)?'hidden':''\">\n                <div class=\"imageAvatarBottomIcon\">\n                  <ion-icon name=\"add\" expand=\"icon-only\" color=\"light\"> </ion-icon>\n                </div>\n                <ion-img [src]=\"chat.userAvatar\"></ion-img>\n              </ion-avatar>-->\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n      <!--<ion-row *ngIf=\"((msgList[i+1] && msgList[i+1].userId != chat.userId)|| !msgList[i+1])\">\n        <ion-col>\n          <ion-text>{{chat.time}}</ion-text>\n        </ion-col>\n      </ion-row>-->\n    </div>\n  </ion-list>\n  <!--</ion-card-content>\n</ion-card>-->\n  <!--<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\" sendMsg()\">\n      <ion-icon name=\"send\" expand=\"icon-only\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>-->\n\n  <ion-row *ngIf=\"loader\">\n    <ion-col no-padding class=\"loading-col\">\n      <div class=\"imageAvatarRight\">\n        <div class=\"imageAvatarBottomLoader\">\n          <!--<ion-avatar class=\"avatar\">\n            <div class=\"imageAvatarBottomIcon\">\n              <ion-icon name=\"add\" expand=\"icon-only\" color=\"light\"> </ion-icon>\n            </div>\n            <ion-img src=\"assets/img/chat/chat5.jpg\"></ion-img>\n          </ion-avatar>-->\n        </div>\n        <ion-label>\n          <div class=\"chatDivLoader\">\n            <ion-spinner name=\"dots\" color=\"light\"></ion-spinner>\n            <!-- <ion-img src=\"../../assets/chat/loader.gif\"></ion-img> -->\n            <!-- <p text-wrap padding> {{paramData.name || 'Pam'}} is typing...</p> -->\n            <div class=\"corner-parent-right\">\n              <div class=\"corner-child-right\"></div>\n            </div>\n          </div>\n        </ion-label>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-content>\n\n<ion-footer translucent>\n  <ion-item class=\"chat\" lines=\"none\">\n    <ion-icon\n      slot=\"end\"\n      name=\"send\"\n      expand=\"icon-only\"\n      (click)=\"sendMsg()\"\n      class=\"footerIcon\"\n    ></ion-icon>\n    <ion-input\n      class=\"input-box\"\n      type=\"text\"\n      placeholder=\"Type your message here\"\n      [(ngModel)]=\"user_input\"\n      (keypress)=\"userTyping($event)\"\n    ></ion-input>\n  </ion-item>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/chat-detail/chat-detail-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/chat-detail/chat-detail-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ChatDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatDetailPageRoutingModule", function() { return ChatDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _chat_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-detail.page */ "./src/app/chat-detail/chat-detail.page.ts");




const routes = [
    {
        path: '',
        component: _chat_detail_page__WEBPACK_IMPORTED_MODULE_3__["ChatDetailPage"]
    }
];
let ChatDetailPageRoutingModule = class ChatDetailPageRoutingModule {
};
ChatDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChatDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/chat-detail/chat-detail.module.ts":
/*!***************************************************!*\
  !*** ./src/app/chat-detail/chat-detail.module.ts ***!
  \***************************************************/
/*! exports provided: ChatDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatDetailPageModule", function() { return ChatDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _chat_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-detail-routing.module */ "./src/app/chat-detail/chat-detail-routing.module.ts");
/* harmony import */ var _chat_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-detail.page */ "./src/app/chat-detail/chat-detail.page.ts");







let ChatDetailPageModule = class ChatDetailPageModule {
};
ChatDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _chat_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatDetailPageRoutingModule"]
        ],
        declarations: [_chat_detail_page__WEBPACK_IMPORTED_MODULE_6__["ChatDetailPage"]]
    })
], ChatDetailPageModule);



/***/ }),

/***/ "./src/app/chat-detail/chat-detail.page.scss":
/*!***************************************************!*\
  !*** ./src/app/chat-detail/chat-detail.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header.md.header-md.header-collapse-none.hydrated {\n  padding-top: 8px !important;\n  padding-bottom: 8px !important;\n}\n\n.bg_header {\n  --background: #c4932f;\n  color: #fff;\n}\n\nion-title {\n  text-align: left;\n  font-size: 20px;\n  margin-right: 1em;\n  height: 43px;\n}\n\n.ios ion-title {\n  font-size: 21px;\n  margin-right: 1em;\n  position: absolute;\n  top: -2px;\n  left: 35px;\n  height: 43px;\n}\n\n.img_title {\n  margin-top: 10px;\n}\n\n.ios .img_title {\n  margin-top: 1px;\n}\n\n.b_both {\n  background-color: #efeeee;\n  height: 20px;\n  position: fixed;\n  width: 100%;\n  margin-top: -2px;\n}\n\n.b_div {\n  background-color: #000;\n  height: 23px;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n  margin-top: 0em;\n  position: fixed;\n  width: 100%;\n}\n\nion-header {\n  overflow: hidden;\n}\n\nion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3em 0.1em 8px 0;\n    --background: #c4932f;\n  }\n}\n\nion-item {\n  --background: #f7f8fa;\n}\n\nion-list {\n  background: transparent;\n  padding-top: 20px;\n  margin-bottom: 0;\n}\n\n.imageAvatarRight {\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n}\n\n.imageAvatarRight .imageAvatarBottom {\n  max-width: 214px;\n  align-items: flex-end;\n  display: flex;\n  border-radius: 50%;\n  position: relative;\n  top: 6px;\n  z-index: 11;\n}\n\n.imageAvatarRight .avatar {\n  width: 50px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.imageAvatarRight .imageAvatarBottomIcon {\n  width: 12px;\n  height: 12px;\n  border-radius: 50px;\n  background: var(--ion-color-tertiary-tint);\n  position: absolute;\n  top: 17%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  right: 10.1%;\n  color: white;\n}\n\n.imageAvatarRight .chatDiv {\n  text-align: justify;\n  position: relative;\n  background: #fff;\n  color: #000;\n  border-radius: 6px;\n  border-bottom-left-radius: 0;\n  max-width: 72vw;\n  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.04);\n  padding: 15px;\n  border-radius: 20px;\n}\n\n.imageAvatarRight ion-img {\n  width: 35px;\n  height: 35px;\n}\n\n.imageAvatarRight .sharper.chatDiv {\n  border-radius: 20px;\n}\n\n.imageAvatarLeft {\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-end;\n}\n\n.imageAvatarLeft .imageAvatarBottom {\n  max-width: 214px;\n  align-items: flex-end;\n  display: flex;\n  border-radius: 50%;\n  position: relative;\n  top: 6px;\n  z-index: 11;\n}\n\n.imageAvatarLeft .avatar {\n  width: 50px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.imageAvatarLeft .imageAvatarBottomIcon {\n  width: 12px;\n  height: 12px;\n  border-radius: 50px;\n  background: var(--ion-color-tertiary-tint);\n  position: absolute;\n  top: 17%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  right: 10.1%;\n  color: white;\n}\n\n.imageAvatarLeft .chatDiv {\n  text-align: left;\n  position: relative;\n  background: #efeeee;\n  border-radius: 20px;\n  max-width: 72vw;\n  padding: 15px;\n}\n\n.imageAvatarLeft ion-img {\n  width: 35px;\n  height: 35px;\n}\n\n.imageAvatarLeft .sharper.chatDiv {\n  border-radius: 20px;\n}\n\nion-fab-button {\n  width: 47px !important;\n  height: 47px !important;\n}\n\nion-fab {\n  bottom: 0px !important;\n}\n\n.footerIcon {\n  color: #000;\n}\n\nion-input {\n  --placeholder-color: rgba(244, 245, 248, 0.7);\n}\n\n.chatDivLoader {\n  position: relative;\n  background: #9164ac7a;\n  border-radius: 16px;\n  min-width: 80px;\n  max-width: 80px;\n  display: flex;\n  align-items: center;\n  color: white;\n  padding: 2px;\n  display: flex;\n  justify-content: center;\n}\n\n.chatDivLoader .corner-parent-right {\n  background: #9164ac7a;\n  height: 10px;\n  width: 10px;\n  position: absolute;\n  left: -4px;\n  bottom: -2px;\n  border-radius: 0;\n  border-radius: 5px;\n}\n\n.chatDivLoader .corner-parent-right .corner-child-right {\n  width: 6px;\n  height: 6px;\n  border-radius: 3px;\n  background: #9164ac7a;\n  position: absolute;\n  top: 7px;\n  left: -7px;\n}\n\nion-text {\n  font-size: 12px;\n  color: #e3e3e3;\n}\n\nion-col {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.imageAvatarBottomLoader {\n  max-width: 214px;\n  align-items: flex-end;\n  display: flex;\n  border-radius: 50%;\n  position: relative;\n  top: 8px;\n  z-index: 11;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n.loading-col {\n  justify-content: flex-start;\n  padding-left: 20px;\n}\n\n.right {\n  justify-content: flex-start;\n  padding-left: 20px;\n}\n\n.left {\n  justify-content: flex-end;\n  padding-right: 20px;\n}\n\n.clubbed .imageAvatarRight .chatDiv .corner-parent-right {\n  height: 30px;\n  width: 30px;\n  background: transparent;\n  position: absolute;\n  left: -30px;\n  bottom: 0;\n  overflow: hidden;\n  border-radius: 0;\n}\n\n.clubbed .imageAvatarRight .chatDiv .corner-parent-right .corner-child-right {\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n  background: transparent;\n  box-shadow: 15px 12px 0 0px #9164ac7a;\n}\n\n.clubbed .imageAvatarLeft .chatDiv .corner-parent-left {\n  height: 30px;\n  width: 30px;\n  background: transparent;\n  position: absolute;\n  right: -30px;\n  bottom: 0;\n  overflow: hidden;\n  border-radius: 0;\n}\n\n.clubbed .imageAvatarLeft .chatDiv .corner-parent-left .corner-child-left {\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n  background: transparent;\n  box-shadow: -15px 12px 0 0px #20b1d4;\n}\n\n.input-box {\n  color: #000;\n}\n\n.bg_img {\n  background: #000;\n  position: fixed;\n  width: 100%;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.header_text {\n  font-size: 29px;\n  color: #fff;\n  position: absolute;\n  bottom: 25%;\n  text-align: left;\n  width: 100%;\n  left: 3%;\n}\n\n.num {\n  font-size: 31px;\n  background: #8d8d8d;\n  color: #fff;\n  border-radius: 50%;\n  padding: 4px 0px;\n  width: 51px;\n  height: 50px;\n}\n\n.both_pad {\n  padding: 0px 1em;\n}\n\n.num_div {\n  position: relative;\n  top: 0.3em;\n  font-family: \"RobotoSlab-Regular\";\n}\n\n.chat {\n  padding: 9px 9px;\n  --border-radius: 12px;\n}\n\nion-input {\n  --placeholder-color: #b0b0b0;\n  --placeholder-opacity: 1;\n}\n\n.card_div {\n  position: relative;\n  top: 15%;\n  border-radius: 15px;\n}\n\n/*ion-content {\n    --overflow: hidden;\n  }\n  .chatDivHeight{\n    overflow-y: scroll;\n    height: 36em;\n  }*/\n\n.country {\n  font-size: 12px;\n  color: #dedede;\n  margin-top: 0px;\n}\n\n.p_img {\n  height: 60px;\n  width: 56px;\n  border-radius: 14px;\n  border: 2px solid #e3e3e3;\n}\n\n.display {\n  display: block;\n}\n\n.heading {\n  margin: 0px;\n}\n\nion-footer {\n  background-color: #f7f8fa;\n}\n\n.img_avatar {\n  width: 40px;\n  border-radius: 50%;\n  height: 40px;\n  position: relative;\n  top: 7px;\n  border: 1px solid #fff;\n  margin-right: 12px;\n  margin-bottom: 2px;\n}\n\n.ios .img_avatar {\n  width: 40px;\n  border-radius: 50%;\n  height: 40px;\n  position: relative;\n  top: 8px;\n  border: 2px solid #fff;\n  margin-right: 12px;\n}\n\n.imgtitle {\n  position: relative;\n  top: -9px;\n}\n\n.ios .imgtitle {\n  position: relative;\n  top: -7px;\n}\n\n.righttime {\n  color: #1a6bbe;\n  font-size: 12px;\n  margin-right: 10px;\n  margin-bottom: 1.5em;\n}\n\n.lefttime {\n  color: #1a6bbe;\n  font-size: 12px;\n  margin-left: 10px;\n  margin-bottom: 1.5em;\n}\n\n.sender {\n  color: #000;\n}\n\n.send_price {\n  font-size: 10px;\n  --padding-start: 14px;\n  --padding-end: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC1kZXRhaWwvY2hhdC1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0UsMkJBQUE7RUFDQSw4QkFBQTtBQU5GOztBQVNBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0FBTkY7O0FBVUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFQRjs7QUFVQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBUEY7O0FBVUE7RUFFRSxnQkFBQTtBQVJGOztBQVVBO0VBRUUsZUFBQTtBQVJGOztBQVVBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQVBGOztBQVNBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQU5GOztBQVFBO0VBQ0UsZ0JBQUE7QUFMRjs7QUFPQTtFQUNFLHdCQUFBO0VBQ0EscUJBQUE7QUFKRjs7QUFPQTtFQUNFO0lBQ0Usd0JBQUE7SUFDQSxxQkFBQTtFQUpGO0FBQ0Y7O0FBT0E7RUFDRSxxQkFBQTtBQUxGOztBQU9BO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBSkY7O0FBT0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQUpGOztBQUtFO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFKSjs7QUFNRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFKSjs7QUFNRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNB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QUFuQkY7O0FBcUJBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBbEJGOztBQXFCQTtFQUNFLFdBQUE7QUFsQkY7O0FBb0JBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFqQkYiLCJmaWxlIjoic3JjL2FwcC9jaGF0LWRldGFpbC9jaGF0LWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIC5pb3Mge1xuICAvLyBoZWlnaHQ6IDY1cHg7XG59XG5cbmlvbi10b29sYmFyIC5pb3Mge1xuICAvLyBoZWlnaHQ6IDY1cHg7XG59XG5pb24taGVhZGVyLm1kLmhlYWRlci1tZC5oZWFkZXItY29sbGFwc2Utbm9uZS5oeWRyYXRlZHtcbiAgcGFkZGluZy10b3A6IDhweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5iZ19oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6ICNjNDkzMmY7XG4gIGNvbG9yOiAjZmZmO1xuICAvLyAtLXBhZGRpbmctdG9wOiAxLjJlbTtcbiAgLy8gLS1wYWRkaW5nLWJvdHRvbTogMi41ZW07XG59XG5pb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xuICBoZWlnaHQ6IDQzcHg7XG59XG5cbi5pb3MgaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0ycHg7XG4gIGxlZnQ6IDM1cHg7XG4gIGhlaWdodDogNDNweDtcbn1cblxuLmltZ190aXRsZSB7XG4gIC8vIG1hcmdpbi1sZWZ0OiAxZW07XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uaW9zIC5pbWdfdGl0bGUge1xuICAvLyBtYXJnaW4tbGVmdDogMWVtO1xuICBtYXJnaW4tdG9wOiAxcHg7XG59XG4uYl9ib3RoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWVlZTtcbiAgaGVpZ2h0OiAyMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAtMnB4O1xufVxuLmJfZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgaGVpZ2h0OiAyM3B4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjVweDtcbiAgbWFyZ2luLXRvcDogMGVtO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWhlYWRlciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5pb24tdG9vbGJhciB7XG4gIHBhZGRpbmc6IDAuOGVtIDAuMWVtIDAgMDtcbiAgLS1iYWNrZ3JvdW5kOiAjYzQ5MzJmO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi1oZWlnaHQgOiA4MDBweCkge1xuICBpb24tdG9vbGJhciB7XG4gICAgcGFkZGluZzogM2VtIDAuMWVtIDhweCAwO1xuICAgIC0tYmFja2dyb3VuZDogI2M0OTMyZjtcbiAgfVxufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogI2Y3ZjhmYTtcbn1cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICAvLyBtYXJnaW4tdG9wOiAzMyU7XG59XG4uaW1hZ2VBdmF0YXJSaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIC5pbWFnZUF2YXRhckJvdHRvbSB7XG4gICAgbWF4LXdpZHRoOiAyMTRweDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgLy8gYmFja2dyb3VuZDogIzVCMjU3MztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA2cHg7XG4gICAgei1pbmRleDogMTE7XG4gIH1cbiAgLmF2YXRhciB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuaW1hZ2VBdmF0YXJCb3R0b21JY29uIHtcbiAgICB3aWR0aDogMTJweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktdGludCk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTclO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICByaWdodDogMTAuMSU7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIC5jaGF0RGl2IHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICAgIG1heC13aWR0aDogNzJ2dztcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDVweCAycHggcmdiKDAgMCAwIC8gNCUpO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgfVxuICBpb24taW1nIHtcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gIH1cbiAgLnNoYXJwZXIge1xuICAgICYuY2hhdERpdiB7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIH1cbiAgfVxuICAuc2hhcnBlci1ib3R0b20ge1xuICAgICYuY2hhdERpdiB7XG4gICAgICAvLyBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgLy8gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICAgIH1cbiAgfVxuICAuc2hhcnBlci10b3Age1xuICAgICYuY2hhdERpdiB7XG4gICAgICAvLyAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICAgIC8vICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICB9XG4gIH1cbn1cblxuLmltYWdlQXZhdGFyTGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgLmltYWdlQXZhdGFyQm90dG9tIHtcbiAgICBtYXgtd2lkdGg6IDIxNHB4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAvLyBiYWNrZ3JvdW5kOiAjNUIyNTczO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDZweDtcbiAgICB6LWluZGV4OiAxMTtcbiAgfVxuICAuYXZhdGFyIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5pbWFnZUF2YXRhckJvdHRvbUljb24ge1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNyU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHJpZ2h0OiAxMC4xJTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLmNoYXREaXYge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQ6ICNlZmVlZWU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAvL2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICAgIG1heC13aWR0aDogNzJ2dztcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG4gIGlvbi1pbWcge1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgfVxuICAuc2hhcnBlciB7XG4gICAgJi5jaGF0RGl2IHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgfVxuICB9XG4gIC5zaGFycGVyLWJvdHRvbSB7XG4gICAgJi5jaGF0RGl2IHtcbiAgICAgIC8vICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgLy8gICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgICB9XG4gIH1cbiAgLnNoYXJwZXItdG9wIHtcbiAgICAmLmNoYXREaXYge1xuICAgICAgLy8gICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgLy8gICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICB9XG4gIH1cbn1cbmlvbi1mYWItYnV0dG9uIHtcbiAgd2lkdGg6IDQ3cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0N3B4ICFpbXBvcnRhbnQ7XG59XG5pb24tZmFiIHtcbiAgYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cbi5mb290ZXJJY29uIHtcbiAgY29sb3I6ICMwMDA7XG59XG5pb24taW5wdXQge1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiByZ2JhKDI0NCwgMjQ1LCAyNDgsIDAuNyk7XG59XG4uY2hhdERpdkxvYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogIzkxNjRhYzdhO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBtaW4td2lkdGg6IDgwcHg7XG4gIG1heC13aWR0aDogODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAuY29ybmVyLXBhcmVudC1yaWdodCB7XG4gICAgYmFja2dyb3VuZDogIzkxNjRhYzdhO1xuICAgIGhlaWdodDogMTBweDtcbiAgICB3aWR0aDogMTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTRweDtcbiAgICBib3R0b206IC0ycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgLmNvcm5lci1jaGlsZC1yaWdodCB7XG4gICAgICB3aWR0aDogNnB4O1xuICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjOTE2NGFjN2E7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDdweDtcbiAgICAgIGxlZnQ6IC03cHg7XG4gICAgfVxuICB9XG59XG5pb24tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNlM2UzZTM7XG59XG5pb24tY29sIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaW1hZ2VBdmF0YXJCb3R0b21Mb2FkZXIge1xuICBtYXgtd2lkdGg6IDIxNHB4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDhweDtcbiAgei1pbmRleDogMTE7XG59XG4uaGlkZGVuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLmxvYWRpbmctY29sIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5yaWdodCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuLmxlZnQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG4uY2x1YmJlZCB7XG4gIC5pbWFnZUF2YXRhclJpZ2h0IHtcbiAgICAuY2hhdERpdiB7XG4gICAgICAuY29ybmVyLXBhcmVudC1yaWdodCB7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IC0zMHB4O1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIC5jb3JuZXItY2hpbGQtcmlnaHQge1xuICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDE1cHggMTJweCAwIDBweCAjOTE2NGFjN2E7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmltYWdlQXZhdGFyTGVmdCB7XG4gICAgLmNoYXREaXYge1xuICAgICAgLmNvcm5lci1wYXJlbnQtbGVmdCB7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAtMzBweDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAuY29ybmVyLWNoaWxkLWxlZnQge1xuICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJveC1zaGFkb3c6IC0xNXB4IDEycHggMCAwcHggIzIwYjFkNDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLmlucHV0LWJveCB7XG4gIGNvbG9yOiAjMDAwO1xufVxuLmJnX2ltZyB7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIC8vICBwYWRkaW5nLWJvdHRvbTogMTMlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRleHQtbGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4udGV4dC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmhlYWRlcl90ZXh0IHtcbiAgZm9udC1zaXplOiAyOXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDI1JTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDMlO1xufVxuLm51bSB7XG4gIGZvbnQtc2l6ZTogMzFweDtcbiAgYmFja2dyb3VuZDogIzhkOGQ4ZDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogNHB4IDBweDtcbiAgd2lkdGg6IDUxcHg7XG4gIGhlaWdodDogNTBweDtcbn1cbi5ib3RoX3BhZCB7XG4gIHBhZGRpbmc6IDBweCAxZW07XG59XG4ubnVtX2RpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwLjNlbTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvU2xhYi1SZWd1bGFyXCI7XG59XG4uY2hhdCB7XG4gIHBhZGRpbmc6IDlweCA5cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbn1cbmlvbi1pbnB1dCB7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6ICNiMGIwYjA7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbn1cbi5jYXJkX2RpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxNSU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi8qaW9uLWNvbnRlbnQge1xuICAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICAuY2hhdERpdkhlaWdodHtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgaGVpZ2h0OiAzNmVtO1xuICB9Ki9cbi5jb3VudHJ5IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2RlZGVkZTtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuLnBfaW1nIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNTZweDtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2UzZTNlMztcbn1cbi5kaXNwbGF5IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaGVhZGluZyB7XG4gIG1hcmdpbjogMHB4O1xufVxuaW9uLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y4ZmE7XG59XG4uaW1nX2F2YXRhciB7XG4gIHdpZHRoOiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogNDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDdweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbi5pb3MgLmltZ19hdmF0YXIge1xuICB3aWR0aDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA4cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cblxuLmltZ3RpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC05cHg7XG59XG5cbi5pb3MgLmltZ3RpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC03cHg7XG59XG4ucmlnaHR0aW1lIHtcbiAgY29sb3I6ICMxYTZiYmU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcbn1cbi5sZWZ0dGltZSB7XG4gIGNvbG9yOiAjMWE2YmJlO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcbn1cblxuLnNlbmRlciB7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnNlbmRfcHJpY2Uge1xuICBmb250LXNpemU6IDEwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTRweDtcbiAgLS1wYWRkaW5nLWVuZDogMTRweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/chat-detail/chat-detail.page.ts":
/*!*************************************************!*\
  !*** ./src/app/chat-detail/chat-detail.page.ts ***!
  \*************************************************/
/*! exports provided: ChatDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatDetailPage", function() { return ChatDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _enter_offer_enter_offer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../enter-offer/enter-offer.page */ "./src/app/enter-offer/enter-offer.page.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








let ChatDetailPage = class ChatDetailPage {
    constructor(popoverController, restService, storage, router, activatedRoute, location, plateform) {
        this.popoverController = popoverController;
        this.restService = restService;
        this.storage = storage;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.plateform = plateform;
        this.user_input = '';
        this.User = 0;
        this.toUser = 0;
        this.btnSendPrice = false;
        this.activatedRoute.queryParams.subscribe((res) => {
            this.storage.get('base_urls').then((base_urls) => {
                this.base_url = base_urls;
                this.userData = JSON.parse(res.value);
                console.log(res);
                this.sender_id = this.userData.userID;
                this.receiver_id = this.userData.otherUserId;
                this.toUser = this.sender_id;
                this.User = this.receiver_id;
                this.profileImg = this.base_url + '' + this.userData.profile_img;
                this.sender_name = this.userData.user_name;
                console.log(this.sender_name);
                if (this.userData.motor_detail) {
                    console.log(this.userData.motor_detail);
                    this.btnSendPrice = true;
                }
            });
        });
    }
    ngOnInit() {
        //this.sendOffer();
        if (this.plateform.is('ios')) {
            this.plateformCheck = 'ios';
        }
        else {
            this.plateformCheck = 'android';
        }
    }
    ionViewWillEnter() {
        this.storage.get('base_urls').then((base_urls) => {
            this.base_url = base_urls;
            this.storage.get('user_details').then((user_details) => {
                console.log(user_details);
                /* if(user_details){
                  this.storage.get('profile_img_url').then((profile_img_url) => {
                     this.profileImg = this.base_url+''+profile_img_url;
                  });
                }*/
                //  this.sender_name = user_details.user_name;
                this.userId = user_details.users_id;
                this.autoSaveInterval = setInterval(() => {
                    this.senderSends();
                }, 2000);
                this.getMesges();
            });
        });
    }
    ionViewWillLeave() {
        clearInterval(this.autoSaveInterval);
        console.log('clear');
    }
    sendOffer() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _enter_offer_enter_offer_page__WEBPACK_IMPORTED_MODULE_6__["EnterOfferPage"],
                componentProps: {
                    data: this.userData.motor_detail,
                },
                translucent: true,
            });
            popover.onWillDismiss().then((data) => {
                // console.log('dismiss');
            });
            return yield popover.present();
        });
    }
    getMesges() {
        var stringy = JSON.stringify({
            requestType: 'getMessages',
            usersID: this.receiver_id,
            otherUserId: this.sender_id,
        });
        this.restService.update_messages(stringy).subscribe((response) => {
            this.getMessages = JSON.parse(response['_body']);
            this.msgList = this.getMessages.chat_messages;
            console.log(this.getMessages);
            this.scrollDown();
            //this.router.navigate(['/matches']);
        });
    }
    sendMsg() {
        var time = new Date();
        console.log(time.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        }));
        this.currentTime = time.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        });
        console.log(this.currentTime, 'curent');
        if (this.user_input !== '') {
            this.msgList.push({
                userId: this.toUser,
                time: this.currentTime,
                message: this.user_input,
            });
            var stringy = JSON.stringify({
                requestType: 'sendMessage',
                usersID: this.sender_id,
                otherUserId: this.receiver_id,
                chatMsg: this.user_input,
                time_send: this.currentTime,
            });
            this.user_input = '';
            this.restService.update_messages(stringy).subscribe((response) => {
                this.getResponse = JSON.parse(response['_body']);
                console.log(this.getMessages);
                if (this.getResponse.status) {
                    /*this.msgList.push({
                      userId: this.toUser,
                      time:  this.currentTime,
                      message: this.user_input
                    })
                    this.user_input = ""; */
                    this.scrollDown();
                }
                else {
                    this.msgList.splice(this.msgList.length - 1, 1);
                }
                //this.router.navigate(['/matches']);
            });
            /* setTimeout(() => {
              this.senderSends()
            }, 500); */
        }
    }
    senderSends() {
        //this.loader = true;
        var stringy = JSON.stringify({
            requestType: 'unreadMessages',
            usersID: this.sender_id,
            otherUserId: this.receiver_id,
            chatMsg: this.user_input,
        });
        this.restService.update_messages(stringy).subscribe((response) => {
            this.getResponse = JSON.parse(response['_body']);
            this.unreadMessages = this.getResponse.unread_messages;
            this.chatLength = this.getResponse.chat_length;
            console.log(this.msgList.length + '--' + this.chatLength);
            if (this.msgList.length > 0) {
                if (this.chatLength != this.msgList.length) {
                    for (var i = 0; i < this.unreadMessages.length; i++) {
                        console.log(i);
                        this.msgList.push({
                            userId: this.unreadMessages[i].userId,
                            time: this.unreadMessages[i].time,
                            message: this.unreadMessages[i].message,
                        });
                    }
                    this.scrollDown();
                }
            }
            //this.loader = false;
        });
        //  this.scrollDown()
    }
    scrollDown() {
        // document.querySelector('.chat_8').scrollIntoView();
        setTimeout(() => {
            // this.content.scrollToBottom(50)
            this.content.scrollToBottom(50);
        }, 170);
    }
    userTyping(event) {
        console.log(event);
        this.start_typing = event.target.value;
        // this.scrollDown()
    }
    back() {
        //this.router.navigate(['/chat-list']);
        this.location.back();
        clearInterval(this.autoSaveInterval);
    }
};
ChatDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"] },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] }
];
ChatDetailPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['IonContent', { static: true },] }]
};
ChatDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./chat-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat-detail/chat-detail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./chat-detail.page.scss */ "./src/app/chat-detail/chat-detail.page.scss")).default]
    })
], ChatDetailPage);



/***/ })

}]);
//# sourceMappingURL=chat-detail-chat-detail-module-es2015.js.map