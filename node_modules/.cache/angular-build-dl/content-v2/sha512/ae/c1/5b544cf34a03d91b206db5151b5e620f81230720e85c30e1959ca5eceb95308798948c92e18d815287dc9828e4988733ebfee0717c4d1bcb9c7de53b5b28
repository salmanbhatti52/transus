(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-list-chat-list-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/chat-list/chat-list.page.html":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat-list/chat-list.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppChatListChatListPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [class.ios-headers]=\"plateformCheck == 'ios'\">\n  <ion-toolbar>\n    <ion-buttons class=\"mf\" [class.menu_headers]=\"plateformCheck == 'ios'\"  slot=\"start\">\n      <img src=\"assets/img/Menu.svg\" class=\"mleft\" (click)=\"toggleMenu()\">\n    </ion-buttons>\n    <ion-title [class.globe_title]=\"plateformCheck == 'ios'\">Messages</ion-title>\n    \n   </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row *ngIf=\"chatData?.length == 0\">\n    <ion-col class=\"ion-text-center\">\n        <p class=\"not_found\" >No chat found!</p>\n    </ion-col>\n  </ion-row>\n  <ion-list  class=\"list_top\" *ngIf=\"chatData?.length > 0\" no-padding >\n    <ion-item *ngFor=\"let chat of chatData\" (click)=\"Detail(chat.user_id,chat.profile_image,chat.name,chat.booking_check)\" lines=\"none\">\n      <div class=\"borderBottomLine\"></div>\n      <div class=\"listSection\">\n        <div class=\"UserimgSection\">\n          <ion-avatar class=\"chatImage\" slot=\"start\">\n            <ion-img src=\"{{base_url}}{{chat.profile_image}}\"></ion-img>\n            <!--<span class=\"onlineOffline_icon\" [ngStyle]=\"{'background-color':(chat.status === 'online'? '#4cd137' : '#c23616')}\"></span>-->\n          </ion-avatar>\n        </div>\n        <div class=\"usernameSection\" padding-start padding>\n          <h5 class=\"alura\">\n           <!--<ion-icon *ngIf=\"chat.group\" name=\"people\" color=\"medium\"></ion-icon>--> \n           <!-- <ion-icon name=\"microphone\" *ngIf=\"chat.broadcast\" color=\"medium\"></ion-icon>-->\n             {{chat.name}}\n            </h5>\n       <p class=\"descText alura\" no-margin no-padding>{{chat.message}}</p>\n        </div>\n      </div>\n      <!--div slot=\"end\" class=\"lastSection\">\n         <ion-note *ngIf=\"chat.badge || !chat.time\" class=\"sendTime\">{{chat.sendTime}}</ion-note>\n         <ion-badge slot=\"end\" class=\"userBadge\" *ngIf=\"chat.badge\">{{chat.badge}}</ion-badge>\n          <ion-note slot=\"end\" *ngIf=\"chat.time\">{{chat.time}}</ion-note>\n      </div-->\n      \n    </ion-item>\n  </ion-list>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/chat-list/chat-list-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/chat-list/chat-list-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: ChatListPageRoutingModule */

    /***/
    function srcAppChatListChatListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatListPageRoutingModule", function () {
        return ChatListPageRoutingModule;
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


      var _chat_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./chat-list.page */
      "./src/app/chat-list/chat-list.page.ts");

      var routes = [{
        path: '',
        component: _chat_list_page__WEBPACK_IMPORTED_MODULE_3__["ChatListPage"]
      }];

      var ChatListPageRoutingModule = /*#__PURE__*/_createClass(function ChatListPageRoutingModule() {
        _classCallCheck(this, ChatListPageRoutingModule);
      });

      ChatListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ChatListPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/chat-list/chat-list.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/chat-list/chat-list.module.ts ***!
      \***********************************************/

    /*! exports provided: ChatListPageModule */

    /***/
    function srcAppChatListChatListModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatListPageModule", function () {
        return ChatListPageModule;
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


      var _chat_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./chat-list-routing.module */
      "./src/app/chat-list/chat-list-routing.module.ts");
      /* harmony import */


      var _chat_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./chat-list.page */
      "./src/app/chat-list/chat-list.page.ts");

      var ChatListPageModule = /*#__PURE__*/_createClass(function ChatListPageModule() {
        _classCallCheck(this, ChatListPageModule);
      });

      ChatListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _chat_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatListPageRoutingModule"]],
        declarations: [_chat_list_page__WEBPACK_IMPORTED_MODULE_6__["ChatListPage"]]
      })], ChatListPageModule);
      /***/
    },

    /***/
    "./src/app/chat-list/chat-list.page.scss":
    /*!***********************************************!*\
      !*** ./src/app/chat-list/chat-list.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppChatListChatListPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  padding: 0em 0em 0 0;\n  --background: #c4932f;\n}\n\nion-toolbar.ios {\n  margin-top: 6px;\n}\n\nion-header.md.header-md.header-collapse-none.hydrated {\n  padding-top: 0;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 0em 0em 0px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n  padding-left: 0px;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n  text-transform: capitalize;\n}\n\nion-content {\n  --background: #f7f8fa;\n}\n\n.mleft {\n  position: relative;\n  left: 10px;\n}\n\n.contentBg {\n  --background: #2f517c;\n  /* fallback for old browsers */\n  --background: -webkit-linear-gradient(to bottom, #2f517c, #56b4d3);\n  /* Chrome 10-25, Safari 5.1-6 */\n  --background: linear-gradient(\n      to bottom,\n      #2f517c,\n      #56b4d3\n  );\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  padding-bottom: 0 !important;\n  --padding-bootm: 0 !important;\n}\n\n.onlineOffline_icon {\n  position: absolute;\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  bottom: 0.2em;\n  right: 0;\n  border: 1.5px solid white;\n}\n\n.UserimgSection {\n  position: relative;\n}\n\n.userBadge {\n  border-radius: 90px;\n  width: 24px;\n  height: 24px;\n  background: #fff;\n  color: #000;\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: center;\n  position: absolute;\n  top: 2.6em;\n}\n\n.usernameSection {\n  overflow: hidden;\n  padding-top: 0;\n  padding-bottom: 15px;\n}\n\n.descText {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 100%;\n  color: #000;\n  font-size: 14px;\n  margin: 0px;\n}\n\nion-img {\n  width: 90%;\n  height: 90%;\n  border: 1px solid #fff;\n}\n\n.listSection {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-top: 0.7em;\n  padding-bottom: 0.7em;\n}\n\n.borderBottomLine {\n  display: block;\n  width: 100%;\n  position: absolute;\n  height: 100%;\n  left: 0%;\n}\n\n.lastSection {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-end;\n  height: 73%;\n  padding-top: 2px;\n}\n\n.fontSize {\n  font-size: 30px;\n}\n\nh5 {\n  margin-top: 12px;\n}\n\nion-note {\n  font-size: 14px;\n}\n\n.bg_img {\n  background: #000;\n  position: fixed;\n  top: 0px;\n  width: 100%;\n  z-index: 999;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.header_text {\n  font-size: 35px;\n  color: #fff;\n  position: absolute;\n  bottom: 0px;\n  text-align: center;\n  width: 100%;\n}\n\n.num {\n  font-size: 31px;\n  background: #8d8d8d;\n  color: #fff;\n  border-radius: 50%;\n  padding: 4px 0px;\n  width: 51px;\n  height: 50px;\n}\n\n.both_pad {\n  padding: 0px 1em;\n}\n\n.num_div {\n  position: relative;\n  top: 0.3em;\n}\n\n.query {\n  font-size: 18px;\n  color: #000;\n}\n\n.chk {\n  position: relative;\n  top: -4px;\n  left: 5px;\n  color: #8d8d8d;\n  font-size: 13px;\n}\n\nion-checkbox {\n  --border-width: 1px;\n  --border-radius: 5px;\n  --background-checked: #bebebe;\n  --checkmark-color: #fff;\n  --border-color-checked: #bebebe;\n}\n\n.b_botom {\n  border-bottom: 0.1px solid #bebebe;\n}\n\n.subtitle {\n  color: #8d8d8d;\n  width: 100%;\n}\n\n.bg_grey {\n  background: #e3e3e3;\n  text-align: center;\n  padding: 3em 0em;\n  border-radius: 10px;\n}\n\n.white {\n  color: #fff;\n  font-size: 37px;\n  font-weight: bold;\n}\n\nh5 {\n  color: #1a6bbe;\n  font-size: 18px;\n  margin-bottom: 5px;\n}\n\nion-avatar {\n  margin-right: 0.5em;\n}\n\nion-item {\n  --ion-background-color: #fff;\n}\n\nion-list {\n  background: transparent;\n}\n\n.not_found {\n  color: #969696;\n  width: 100%;\n  margin-top: 17%;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC1saXN0L2NoYXQtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLHNCQUFBO0lBQ0EscUJBQUE7RUFDTjtBQUNGOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQUNKOztBQUNBO0VBQ0kscUJBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQUdKOztBQUFBO0VBQ0kscUJBQUE7RUFBdUIsOEJBQUE7RUFDdkIsa0VBQUE7RUFBb0UsK0JBQUE7RUFDcEU7Ozs7R0FBQTtFQUlHLHFFQUFBO0VBQ0gsNEJBQUE7RUFDQSw2QkFBQTtBQU1KOztBQUhBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSx5QkFBQTtBQUtKOztBQUhBO0VBQ0ksa0JBQUE7QUFNSjs7QUFIQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFNSjs7QUFIQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBTUo7O0FBSkE7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBT0o7O0FBTEE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBUUo7O0FBTkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLGtCQUFBO0VBQ0EscUJBQUE7QUFRSjs7QUFMQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFFQSxZQUFBO0VBQ0EsUUFBQTtBQU9KOztBQUxBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQVFKOztBQU5BO0VBQ0ksZUFBQTtBQVNKOztBQVBBO0VBQ0ksZ0JBQUE7QUFVSjs7QUFSQTtFQUNJLGVBQUE7QUFXSjs7QUFUQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVlKOztBQVZBO0VBQ0ksa0JBQUE7QUFhSjs7QUFYQTtFQUNJLGdCQUFBO0FBY0o7O0FBWkE7RUFDSSxpQkFBQTtBQWVKOztBQWJBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFnQko7O0FBZEE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBaUJKOztBQWZBO0VBQ0ksZ0JBQUE7QUFrQko7O0FBaEJBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FBbUJKOztBQWpCQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBb0JKOztBQWxCQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQXFCSjs7QUFuQkE7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLCtCQUFBO0FBc0JKOztBQXBCQTtFQUNJLGtDQUFBO0FBdUJKOztBQXJCQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0FBd0JKOztBQXJCQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBd0JKOztBQXRCQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUF5Qko7O0FBdkJBO0VBRUksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQXlCSjs7QUF0QkE7RUFDSSxtQkFBQTtBQXlCSjs7QUF2QkE7RUFDSSw0QkFBQTtBQTBCSjs7QUF4QkE7RUFDSSx1QkFBQTtBQTJCSjs7QUF6QkE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBNEJKIiwiZmlsZSI6InNyYy9hcHAvY2hhdC1saXN0L2NoYXQtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgcGFkZGluZzogMGVtIDBlbSAwIDA7XG4gICAgLS1iYWNrZ3JvdW5kOiAjYzQ5MzJmO1xufVxuXG5pb24tdG9vbGJhci5pb3Mge1xuICAgIG1hcmdpbi10b3A6IDZweDtcbn1cblxuaW9uLWhlYWRlci5tZC5oZWFkZXItbWQuaGVhZGVyLWNvbGxhcHNlLW5vbmUuaHlkcmF0ZWR7XG4gICAgcGFkZGluZy10b3A6IDA7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLWhlaWdodCA6IDgwMHB4KSB7XG4gICAgaW9uLXRvb2xiYXIge1xuICAgICAgICBwYWRkaW5nOiAwZW0gMGVtIDBweCAwO1xuICAgICAgICAtLWJhY2tncm91bmQ6ICNjNDkzMmY7XG4gICAgfVxufVxuXG5pb24tdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5pb24tYnV0dG9uIHtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxLjVlbTtcbiAgICAtLXBhZGRpbmctdG9wOiAxLjVlbTtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5pb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjdmOGZhO1xufVxuLm1sZWZ0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMTBweDtcbn1cblxuLmNvbnRlbnRCZyB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMmY1MTdjOyAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gICAgLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyZjUxN2MsICM1NmI0ZDMpOyAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICB0byBib3R0b20sXG4gICAgICAgICMyZjUxN2MsXG4gICAgICAgICM1NmI0ZDNcbiAgICApOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG4gICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICAtLXBhZGRpbmctYm9vdG06IDAgIWltcG9ydGFudDtcbn1cblxuLm9ubGluZU9mZmxpbmVfaWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTVweDtcbiAgICB3aWR0aDogMTVweDtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiA7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvdHRvbTogMC4yZW07XG4gICAgcmlnaHQ6IDA7XG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCB3aGl0ZTtcbn1cbi5Vc2VyaW1nU2VjdGlvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udXNlckJhZGdlIHtcbiAgICBib3JkZXItcmFkaXVzOiA5MHB4O1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMi42ZW07XG59XG5cbi51c2VybmFtZVNlY3Rpb24ge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZy10b3A6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG4uZGVzY1RleHQge1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5pb24taW1nIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogOTAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG59XG4ubGlzdFNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvLyB3aWR0aDogOTclO1xuICAgIHBhZGRpbmctdG9wOiAwLjdlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC43ZW07XG59XG5cbi5ib3JkZXJCb3R0b21MaW5lIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy8gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMmUyZTJlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBsZWZ0OiAwJTtcbn1cbi5sYXN0U2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgaGVpZ2h0OiA3MyU7XG4gICAgcGFkZGluZy10b3A6IDJweDtcbn1cbi5mb250U2l6ZSB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuaDUge1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG59XG5pb24tbm90ZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLmJnX2ltZyB7XG4gICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogOTk5O1xufVxuLnRleHQtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGV4dC1sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnRleHQtcmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmhlYWRlcl90ZXh0IHtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5udW0ge1xuICAgIGZvbnQtc2l6ZTogMzFweDtcbiAgICBiYWNrZ3JvdW5kOiAjOGQ4ZDhkO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwYWRkaW5nOiA0cHggMHB4O1xuICAgIHdpZHRoOiA1MXB4O1xuICAgIGhlaWdodDogNTBweDtcbn1cbi5ib3RoX3BhZCB7XG4gICAgcGFkZGluZzogMHB4IDFlbTtcbn1cbi5udW1fZGl2IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAwLjNlbTtcbn1cbi5xdWVyeSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjMDAwO1xufVxuLmNoayB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTRweDtcbiAgICBsZWZ0OiA1cHg7XG4gICAgY29sb3I6ICM4ZDhkOGQ7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuaW9uLWNoZWNrYm94IHtcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjYmViZWJlO1xuICAgIC0tY2hlY2ttYXJrLWNvbG9yOiAjZmZmO1xuICAgIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6ICNiZWJlYmU7XG59XG4uYl9ib3RvbSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMC4xcHggc29saWQgI2JlYmViZTtcbn1cbi5zdWJ0aXRsZSB7XG4gICAgY29sb3I6ICM4ZDhkOGQ7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5iZ19ncmV5IHtcbiAgICBiYWNrZ3JvdW5kOiAjZTNlM2UzO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAzZW0gMGVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ud2hpdGUge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMzdweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbmg1IHtcbiAgICAvL2ZvbnQtZmFtaWx5OiBcIkFsbHVyYS1SZWd1bGFyXCIgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzFhNmJiZTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG5pb24tYXZhdGFyIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xufVxuaW9uLWl0ZW0ge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5pb24tbGlzdCB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4ubm90X2ZvdW5kIHtcbiAgICBjb2xvcjogIzk2OTY5NjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxNyU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/chat-list/chat-list.page.ts":
    /*!*********************************************!*\
      !*** ./src/app/chat-list/chat-list.page.ts ***!
      \*********************************************/

    /*! exports provided: ChatListPage */

    /***/
    function srcAppChatListChatListPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatListPage", function () {
        return ChatListPage;
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

      var ChatListPage = /*#__PURE__*/function () {
        function ChatListPage(menuCtrl, router, restService, storage, plateform, alertController) {
          _classCallCheck(this, ChatListPage);

          this.menuCtrl = menuCtrl;
          this.router = router;
          this.restService = restService;
          this.storage = storage;
          this.plateform = plateform;
          this.alertController = alertController;
          this.loader = false;
        }

        _createClass(ChatListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.plateform.is('ios')) {
              this.plateformCheck = 'ios';
            } else {
              this.plateformCheck = 'android';
            }
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.storage.get('base_urls').then(function (base_urls) {
              _this.base_url = base_urls;

              _this.storage.get('user_details').then(function (user_details) {
                _this.userId = user_details.users_id;

                _this.getChatList(); // this.callInterval = setInterval(() => {
                //   this.callApi();
                // }, 2000
                // );

              });
            });
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            clearInterval(this.callInterval);
            console.log('clear');
          }
        }, {
          key: "getChatList",
          value: function getChatList() {
            var _this2 = this;

            this.loader = true;
            var stringy = JSON.stringify({
              requestType: 'getChatList',
              usersID: this.userId
            });
            this.restService.update_messages(stringy).subscribe(function (response) {
              _this2.getResponse = JSON.parse(response['_body']);

              if (_this2.getResponse.status == 'NoListFound') {
                console.log(_this2.getResponse);
              } else {
                _this2.chatData = _this2.getResponse.chat_list_details;
              }

              _this2.loader = false; //this.router.navigate(['/matches']);
            });
          }
        }, {
          key: "callApi",
          value: function callApi() {
            var _this3 = this;

            var stringy = JSON.stringify({
              requestType: 'getChatList',
              usersID: this.userId
            });
            this.restService.update_messages(stringy).subscribe(function (response) {
              _this3.apiResponse = JSON.parse(response['_body']);

              if (_this3.apiResponse.status == 'NoListFound') {
                console.log(_this3.getResponse);
                _this3.chatData = [];
              } else {
                _this3.chatListLength = _this3.apiResponse.chat_length;
                console.log(_this3.chatListLength, _this3.chatData.length); // if(this.chatListLength != this.chatData.length){

                _this3.chatData = _this3.apiResponse.chat_list_details; // }
                //this.router.navigate(['/matches']);
              }
            });
          }
        }, {
          key: "Detail",
          value: function Detail(user_id, profile_img, user_name, checkBooking) {
            if (checkBooking > 0) {
              clearInterval(this.callInterval);
              console.log(profile_img, user_name);
              var myData = JSON.stringify({
                userID: this.userId,
                otherUserId: user_id,
                user_name: user_name,
                profile_img: profile_img
              });
              console.log(myData);
              this.router.navigate(['/chat-detail'], {
                queryParams: {
                  value: myData
                }
              });
            } else {
              this.chatAlert("Chat can't be started until booking is confirmed");
            }
          }
        }, {
          key: "toggleMenu",
          value: function toggleMenu() {
            this.menuCtrl.toggle();
          }
        }, {
          key: "chatAlert",
          value: function chatAlert(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert, _yield$alert$onDidDis, role;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Chat is disabled',
                        message: msg,
                        backdropDismiss: true,
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                      _context.next = 7;
                      return alert.onDidDismiss();

                    case 7:
                      _yield$alert$onDidDis = _context.sent;
                      role = _yield$alert$onDidDis.role;
                      console.log('onDidDismiss resolved with role', role);

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return ChatListPage;
      }();

      ChatListPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }];
      };

      ChatListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./chat-list.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/chat-list/chat-list.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./chat-list.page.scss */
        "./src/app/chat-list/chat-list.page.scss"))["default"]]
      })], ChatListPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=chat-list-chat-list-module-es5.js.map