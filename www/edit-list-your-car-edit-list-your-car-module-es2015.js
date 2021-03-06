(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-list-your-car-edit-list-your-car-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-list-your-car/edit-list-your-car.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-list-your-car/edit-list-your-car.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header  *ngIf=\"showSlide == 'no'\" >\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <img src=\"assets/img/Arrow.svg\" (click)=\"goToHome()\" />\r\n    </ion-buttons>\r\n    <ion-title >\r\n      Edit Car</ion-title\r\n    >\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content  *ngIf=\"showSlide == 'no'\">\r\n  <div class=\"list_1\">\r\n    <ion-row>\r\n      <ion-col>\r\n        <h3>Vehicle Info</h3>\r\n      </ion-col>\r\n    </ion-row>\r\n    <!-- <ion-row>\r\n      <ion-col>\r\n        <ion-select placeholder=\"Model\" [(ngModel)]=\"Model\" (ionBlur)=\"validateForm()\">\r\n          <ion-select-option value=\"{{p.model_id}}\" *ngFor=\"let p of model; let i = index\">{{p.name}}</ion-select-option>\r\n        </ion-select>\r\n        <span *ngIf=\"ModelError\" class=\"error ion-padding\">\r\n          Model is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row> -->\r\n    <!-- <ion-row>\r\n      <ion-col>\r\n        <ion-select placeholder=\"Make\" [(ngModel)]=\"Make\" (ionBlur)=\"validateForm()\">\r\n          <ion-select-option value=\"{{p.veh_make_id}}\" *ngFor=\"let p of make; let i = index\">{{p.name}}</ion-select-option>\r\n        </ion-select>\r\n        <span *ngIf=\"MakeError\" class=\"error ion-padding\">\r\n          Make is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row> -->\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <div\r\n          *ngIf=\"document_oneLicencePlateToShow =='' || document_oneLicencePlateToShow ==undefined\"\r\n          style=\"\r\n            border-radius: 10px;\r\n            width: 100%;\r\n            height: 150px;\r\n            background: #f7f8fa;\r\n            border: 1px dashed #d4dce1;\r\n          \"\r\n          (click)=\"showPopup(0)\"\r\n        >\r\n          <ion-row style=\"margin-top: 45px\">\r\n            <ion-col style=\"text-align: center\">\r\n              <img\r\n                src=\"assets/img/plusblack.png\"\r\n                style=\"height: 20px; width: 20px\"\r\n              />\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col style=\"text-align: center\">\r\n              <p style=\"font-size: 13px; color: #b0b0b0\">License</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n        <div *ngIf=\"document_oneLicencePlateToShow\" (click)=\"previewImage(document_oneLicencePlateToShow)\" class=\"view_btn\">\r\n          <p>View</p>\r\n        </div>\r\n        <img\r\n          style=\"width: 100%; border-radius: 10px; height: 150px\"\r\n          (click)=\"showPopup(0)\"\r\n          *ngIf=\"document_oneLicencePlateToShow\"\r\n          src=\"{{document_oneLicencePlateToShow}}\"\r\n        />\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-input\r\n          placeholder=\"License Plate\"\r\n          [(ngModel)]=\"LicensePlate\"\r\n          class=\"input_list\"\r\n          (ionBlur)=\"checkingLiNo()\"\r\n          (keyup)=\"checkingLiNo()\"\r\n          (ionBlur)=\"validateForm()\"\r\n        ></ion-input>\r\n        <span *ngIf=\"LicensePlateError\" class=\"error ion-padding\">\r\n          License Plate is required.\r\n        </span>\r\n        <span *ngIf=\"LicensePlateUnique\" class=\"error ion-padding\">\r\n          License Plate already exists.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <p class=\"upload_images\">Upload Images</p>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"4\">\r\n        <ion-row>\r\n          <ion-col\r\n            size=\"12\"\r\n            class=\"list_2\"\r\n            (click)=\"showPopup(1)\"\r\n            *ngIf=\"document_one =='' || document_one ==undefined\"\r\n          >\r\n            <img src=\"assets/img/plus.svg\" />\r\n          </ion-col>\r\n          <ion-icon\r\n            name=\"trash\"\r\n            class=\"bin\"\r\n            (click)=\"removeImage(document_one_id,1)\"\r\n            *ngIf=\"document_one\"\r\n          ></ion-icon>\r\n          <ion-col size=\"12\" class=\"real_image\" *ngIf=\"document_one\">\r\n            <img src=\"{{document_one}}\" />\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <ion-row>\r\n          <ion-col\r\n            size=\"12\"\r\n            class=\"list_2\"\r\n            (click)=\"showPopup(2)\"\r\n            *ngIf=\"document_two =='' || document_two ==undefined\"\r\n          >\r\n            <img src=\"assets/img/plus.svg\" />\r\n          </ion-col>\r\n          <ion-icon\r\n            name=\"trash\"\r\n            class=\"bin\"\r\n            (click)=\"removeImage(document_two_id,2)\"\r\n            *ngIf=\"document_two\"\r\n          ></ion-icon>\r\n          <ion-col size=\"12\" class=\"real_image\" *ngIf=\"document_two\">\r\n            <img src=\"{{document_two}}\" />\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <ion-row>\r\n          <ion-col\r\n            size=\"12\"\r\n            class=\"list_2\"\r\n            (click)=\"showPopup(3)\"\r\n            *ngIf=\"document_three =='' || document_three ==undefined\"\r\n          >\r\n            <img src=\"assets/img/plus.svg\" />\r\n          </ion-col>\r\n          <ion-icon\r\n            name=\"trash\"\r\n            class=\"bin\"\r\n            (click)=\"removeImage(document_three_id,3)\"\r\n            *ngIf=\"document_three\"\r\n          >\r\n          </ion-icon>\r\n          <ion-col size=\"12\" class=\"real_image\" *ngIf=\"document_three\">\r\n            <img src=\"{{document_three}}\" />\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n      <span *ngIf=\"document_oneError\" class=\"error ion-padding\">\r\n        Document is required.\r\n      </span>\r\n      <span *ngIf=\"document_twoError\" class=\"error ion-padding\">\r\n        Document is required.\r\n      </span>\r\n      <span *ngIf=\"document_threeError\" class=\"error ion-padding\">\r\n        Document is required.\r\n      </span>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"4\">\r\n        <ion-row>\r\n          <ion-col\r\n            size=\"12\"\r\n            class=\"list_2\"\r\n            (click)=\"showPopup(6)\"\r\n            *ngIf=\"document_six =='' || document_six ==undefined\"\r\n          >\r\n            <img src=\"assets/img/plus.svg\" />\r\n          </ion-col>\r\n          <ion-icon\r\n            name=\"trash\"\r\n            class=\"bin\"\r\n            (click)=\"removeImage(document_six_id,6)\"\r\n            *ngIf=\"document_six\"\r\n          ></ion-icon>\r\n          <ion-col size=\"12\" class=\"real_image\" *ngIf=\"document_six\">\r\n            <img src=\"{{document_six}}\" />\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <ion-row>\r\n          <ion-col\r\n            size=\"12\"\r\n            class=\"list_2\"\r\n            (click)=\"showPopup(7)\"\r\n            *ngIf=\"document_seven =='' || document_seven ==undefined\"\r\n          >\r\n            <img src=\"assets/img/plus.svg\" />\r\n          </ion-col>\r\n          <ion-icon\r\n            name=\"trash\"\r\n            class=\"bin\"\r\n            (click)=\"removeImage(document_seven_id,7)\"\r\n            *ngIf=\"document_seven\"\r\n          >\r\n          </ion-icon>\r\n          <ion-col size=\"12\" class=\"real_image\" *ngIf=\"document_seven\">\r\n            <img src=\"{{document_seven}}\" />\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"4\">\r\n        <ion-row>\r\n          <ion-col\r\n            size=\"12\"\r\n            class=\"list_2\"\r\n            (click)=\"showPopup(8)\"\r\n            *ngIf=\"document_eight =='' || document_eight ==undefined\"\r\n          >\r\n            <img src=\"assets/img/plus.svg\" />\r\n          </ion-col>\r\n          <ion-icon\r\n            name=\"trash\"\r\n            class=\"bin\"\r\n            (click)=\"removeImage(document_eight,8)\"\r\n            *ngIf=\"document_eight\"\r\n          >\r\n          </ion-icon>\r\n          <ion-col size=\"12\" class=\"real_image\" *ngIf=\"document_eight\">\r\n            <img src=\"{{document_eight}}\" />\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n      <!-- 9th -->\r\n      <ion-col size=\"4\">\r\n        <ion-row>\r\n          <ion-col\r\n            size=\"12\"\r\n            class=\"list_2\"\r\n            (click)=\"showPopup(9)\"\r\n            *ngIf=\"document_nine =='' || document_nine ==undefined\"\r\n          >\r\n            <img src=\"assets/img/plus.svg\" />\r\n          </ion-col>\r\n          <ion-icon\r\n            name=\"trash\"\r\n            class=\"bin\"\r\n            (click)=\"removeImage(document_nine_id,9)\"\r\n            *ngIf=\"document_nine\"\r\n          >\r\n          </ion-icon>\r\n          <ion-col size=\"12\" class=\"real_image\" *ngIf=\"document_nine\">\r\n            <img src=\"{{document_nine}}\" />\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n      <!-- 10th -->\r\n      <ion-col size=\"4\">\r\n        <ion-row>\r\n          <ion-col\r\n            size=\"12\"\r\n            class=\"list_2\"\r\n            (click)=\"showPopup(10)\"\r\n            *ngIf=\"document_ten =='' || document_ten ==undefined\"\r\n          >\r\n            <img src=\"assets/img/plus.svg\" />\r\n          </ion-col>\r\n          <ion-icon\r\n            name=\"trash\"\r\n            class=\"bin\"\r\n            (click)=\"removeImage(document_ten_id,10)\"\r\n            *ngIf=\"document_ten\"\r\n          >\r\n          </ion-icon>\r\n          <ion-col size=\"12\" class=\"real_image\" *ngIf=\"document_ten\">\r\n            <img src=\"{{document_ten}}\" />\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n      <!-- 11th -->\r\n      <ion-col size=\"4\">\r\n        <ion-row>\r\n          <ion-col\r\n            size=\"12\"\r\n            class=\"list_2\"\r\n            (click)=\"showPopup(11)\"\r\n            *ngIf=\"document_eleven =='' || document_eleven ==undefined\"\r\n          >\r\n            <img src=\"assets/img/plus.svg\" />\r\n          </ion-col>\r\n          <ion-icon\r\n            name=\"trash\"\r\n            class=\"bin\"\r\n            (click)=\"removeImage(document_eleven_id,11)\"\r\n            *ngIf=\"document_eleven\"\r\n          >\r\n          </ion-icon>\r\n          <ion-col size=\"12\" class=\"real_image\" *ngIf=\"document_eleven\">\r\n            <!-- <div *ngIf=\"document_eleven\" (click)=\"previewImage(document_eleven)\" class=\"view_btn\">\r\n              <p>View</p>\r\n            </div> -->\r\n            <img src=\"{{document_eleven}}\" />\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n      <!-- 12th -->\r\n      <ion-col size=\"4\">\r\n        <ion-row>\r\n          <ion-col\r\n            size=\"12\"\r\n            class=\"list_2\"\r\n            (click)=\"showPopup(12)\"\r\n            *ngIf=\"document_twelve =='' || document_twelve ==undefined\"\r\n          >\r\n            <img src=\"assets/img/plus.svg\" />\r\n          </ion-col>\r\n          <ion-icon\r\n            name=\"trash\"\r\n            class=\"bin\"\r\n            (click)=\"removeImage(document_twelve_id,12)\"\r\n            *ngIf=\"document_twelve\"\r\n          >\r\n          </ion-icon>\r\n          <ion-col size=\"12\" class=\"real_image\" *ngIf=\"document_twelve\">\r\n            <!-- <div *ngIf=\"document_twelve\" (click)=\"previewImage(document_twelve)\" class=\"view_btn\">\r\n              <p>View</p>\r\n            </div> -->\r\n            <img src=\"{{document_twelve}}\" />\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n      <span *ngIf=\"document_sixError\" class=\"error ion-padding\">\r\n        Document is required.\r\n      </span>\r\n      <span *ngIf=\"document_sevenError\" class=\"error ion-padding\">\r\n        Document is required.\r\n      </span>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-textarea\r\n          rows=\"6\"\r\n          placeholder=\"Description\"\r\n          [(ngModel)]=\"Description\"\r\n          class=\"list_3\"\r\n          (ionBlur)=\"validateForm()\"\r\n        ></ion-textarea>\r\n        <span *ngIf=\"DescriptionError\" class=\"error ion-padding\">\r\n          Description is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-select\r\n          placeholder=\"Comfort Type\"\r\n          [(ngModel)]=\"comfort\"\r\n          (ionBlur)=\"validateForm()\"\r\n        >\r\n          <ion-select-option\r\n            value=\"{{p.car_classes_id}}\"\r\n            *ngFor=\"let p of comfortArray; let i = index\"\r\n            >{{p.name}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <span *ngIf=\"SeatsError\" class=\"error ion-padding\">\r\n          Comfort is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-select\r\n          placeholder=\"Car Type\"\r\n          [(ngModel)]=\"carType\"\r\n          (ionBlur)=\"validateForm()\"\r\n        >\r\n          <ion-select-option\r\n            value=\"{{p.car_types_id}}\"\r\n            *ngFor=\"let p of carTypeArray; let i = index\"\r\n            >{{p.name}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-input\r\n          type=\"tel\"\r\n          placeholder=\"Mobile Number\"\r\n          [(ngModel)]=\"mobileNum\"\r\n          class=\"input_list\"\r\n          (ionBlur)=\"validateForm()\"\r\n        >\r\n        </ion-input>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-select\r\n          placeholder=\"No. of seats\"\r\n          [(ngModel)]=\"Seats\"\r\n          (ionBlur)=\"validateForm()\"\r\n        >\r\n          <ion-select-option\r\n            value=\"{{p.veh_seats_id}}\"\r\n            *ngFor=\"let p of seats; let i = index\"\r\n            >{{p.seat_no}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <span *ngIf=\"SeatsError\" class=\"error ion-padding\">\r\n          Seat is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-select\r\n          placeholder=\"No. of Door\"\r\n          [(ngModel)]=\"Door\"\r\n          (ionBlur)=\"validateForm()\"\r\n        >\r\n          <ion-select-option\r\n            value=\"{{p.veh_doors_id}}\"\r\n            *ngFor=\"let p of doors; let i = index\"\r\n            >{{p.door_no}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <span *ngIf=\"DoorError\" class=\"error ion-padding\">\r\n          Door is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-select\r\n          placeholder=\"Gas\"\r\n          [(ngModel)]=\"Gas\"\r\n          (ionBlur)=\"validateForm()\"\r\n        >\r\n          <ion-select-option\r\n            value=\"{{p.fuel_type_id}}\"\r\n            *ngFor=\"let p of fuel_type; let i = index\"\r\n            >{{p.name}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <span *ngIf=\"GasError\" class=\"error ion-padding\">\r\n          Fuel Type is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-select\r\n          placeholder=\"Gear Type\"\r\n          [(ngModel)]=\"GearType\"\r\n          (ionBlur)=\"validateForm()\"\r\n        >\r\n          <ion-select-option\r\n            value=\"{{p.gear_type_id}}\"\r\n            *ngFor=\"let p of gear_type; let i = index\"\r\n            >{{p.name}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <span *ngIf=\"GearTypeError\" class=\"error ion-padding\">\r\n          Gear Type is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-select\r\n          placeholder=\"Convertable\"\r\n          [(ngModel)]=\"Convertable\"\r\n          (ionBlur)=\"validateForm()\"\r\n        >\r\n          <ion-select-option\r\n            value=\"{{p.engine_type_id}}\"\r\n            *ngFor=\"let p of roof_type; let i = index\"\r\n            >{{p.name}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <span *ngIf=\"ConvertableError\" class=\"error ion-padding\">\r\n          Roof Type is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-select\r\n          placeholder=\"No. of wheels\"\r\n          [(ngModel)]=\"wheels\"\r\n          (ionBlur)=\"validateForm()\"\r\n        >\r\n          <ion-select-option\r\n            value=\"{{p.veh_wheels_id}}\"\r\n            *ngFor=\"let p of wheelss; let i = index\"\r\n            >{{p.wheels_no}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <span *ngIf=\"wheelsError\" class=\"error ion-padding\">\r\n          wheel is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-textarea\r\n          rows=\"6\"\r\n          placeholder=\"Other features\"\r\n          [(ngModel)]=\"other_features\"\r\n          class=\"list_3\"\r\n          (ionBlur)=\"validateForm()\"\r\n        >\r\n        </ion-textarea>\r\n        <span *ngIf=\"other_featuresError\" class=\"error ion-padding\">\r\n          other features is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n<!-- ---------------------------------1-------------------------------------- -->\r\n    <ion-row>\r\n      <ion-col>\r\n        <h3>Advance Notice</h3>\r\n        <p class=\"upload_images\">How much advance notice do you need before a trip starts?</p>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-select\r\n          placeholder=\"Advance Notice\"\r\n          [(ngModel)]=\"AdNotice\"\r\n          (ionBlur)=\"validateForm()\"\r\n        >\r\n          <ion-select-option value=\"6 hours\">6 hours</ion-select-option>\r\n          <ion-select-option value=\"12 hours\">12 hours</ion-select-option>\r\n          <ion-select-option value=\"1 day\">1 day</ion-select-option>\r\n          <ion-select-option value=\"Instant\">Instant</ion-select-option>\r\n        </ion-select>\r\n        <span *ngIf=\"AdNoticeError\" class=\"error ion-padding\">\r\n          Advance Notice is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n<!-- ---------------------------------2-------------------------------------- -->\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <h3>Minimum Trip Duration</h3>\r\n        <p class=\"upload_images\">What's the shortest possible trip you'll accept?</p>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-select\r\n          placeholder=\"Min Trip Duration\"\r\n          [(ngModel)]=\"MinTrip\"\r\n          (ionBlur)=\"validateForm()\"\r\n        >\r\n          <ion-select-option value=\"1 day\">1 day</ion-select-option>\r\n          <ion-select-option value=\"2 day\">2 day</ion-select-option>\r\n          <ion-select-option value=\"3 day\">3 day</ion-select-option>\r\n        </ion-select>\r\n        <span *ngIf=\"MinTripError\" class=\"error ion-padding\">\r\n         Min trip duration is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n<!-- ---------------------------------3-------------------------------------- -->\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <h3>Maximum Trip Duration</h3>\r\n        <p class=\"upload_images\">What's the longest possible trip you'll accept?</p>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-select\r\n          placeholder=\"Max Trip Duration\"\r\n          [(ngModel)]=\"MaxTrip\"\r\n          (ionBlur)=\"validateForm()\"\r\n        >\r\n          <ion-select-option value=\"5 day\">5 day</ion-select-option>\r\n          <ion-select-option value=\"1 week\">1 week</ion-select-option>\r\n          <ion-select-option value=\"2 week\">2 week</ion-select-option>\r\n          <ion-select-option value=\"2 week\">1 month</ion-select-option>\r\n          <ion-select-option value=\"3 month\">3 month</ion-select-option>\r\n          <ion-select-option value=\"Any\">Any</ion-select-option>\r\n        </ion-select>\r\n        <span *ngIf=\"MaxTripError\" class=\"error ion-padding\">\r\n        Max trip duration is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <h3>Documents</h3>\r\n        <p class=\"upload_images\">Upload Road Worthy and Insurance documents</p>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"6\">\r\n        <ion-row>\r\n          <ion-col\r\n            size=\"12\"\r\n            class=\"list_9\"\r\n            (click)=\"showPopup(4)\"\r\n            *ngIf=\"document_four =='' || document_four ==undefined\"\r\n          >\r\n            <img src=\"assets/img/Menu_Plus.svg\" />\r\n            <p>Road Worthy</p>\r\n          </ion-col>\r\n          <ion-col\r\n            size=\"12\"\r\n            class=\"real_image_2\"\r\n            (click)=\"showPopup(4)\"\r\n            *ngIf=\"document_four\"\r\n          >\r\n            <img src=\"{{document_four}}\" />\r\n          </ion-col>\r\n          <span *ngIf=\"document_fourError\" class=\"error ion-padding\">\r\n            Document is required.\r\n          </span>\r\n        </ion-row>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-row>\r\n          <ion-col\r\n            size=\"12\"\r\n            class=\"list_9\"\r\n            (click)=\"showPopup(5)\"\r\n            *ngIf=\"document_five =='' || document_five ==undefined\"\r\n          >\r\n            <img src=\"assets/img/Menu_Plus.svg\" />\r\n            <p>Insurance</p>\r\n          </ion-col>\r\n          <ion-col\r\n            size=\"12\"\r\n            class=\"real_image_2\"\r\n            (click)=\"showPopup(5)\"\r\n            *ngIf=\"document_five\"\r\n          >\r\n            <img src=\"{{document_five}}\" />\r\n          </ion-col>\r\n          <span *ngIf=\"document_fiveError\" class=\"error ion-padding\">\r\n            Document is required.\r\n          </span>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <h3>Owner???s Details</h3>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-textarea\r\n          rows=\"6\"\r\n          placeholder=\"About\"\r\n          [(ngModel)]=\"about\"\r\n          class=\"list_3\"\r\n          (ionBlur)=\"validateForm()\"\r\n        >\r\n        </ion-textarea>\r\n        <span *ngIf=\"aboutError\" class=\"error ion-padding\">\r\n          about is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-select\r\n          placeholder=\"Lives\"\r\n          [(ngModel)]=\"Lives\"\r\n          (ionBlur)=\"validateForm()\"\r\n        >\r\n          <ion-select-option\r\n            value=\"{{p.id}}\"\r\n            *ngFor=\"let p of countries; let i = index\"\r\n            >{{p.name}}</ion-select-option\r\n          >\r\n        </ion-select>\r\n        <span *ngIf=\"LivesError\" class=\"error ion-padding\">\r\n          Lives is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-input\r\n          placeholder=\"Work\"\r\n          [(ngModel)]=\"work\"\r\n          class=\"input_list\"\r\n          (ionBlur)=\"validateForm()\"\r\n        ></ion-input>\r\n        <span *ngIf=\"workError\" class=\"error ion-padding\">\r\n          Work is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-select\r\n          placeholder=\"Language\"\r\n          [(ngModel)]=\"Language\"\r\n          (ionBlur)=\"validateForm()\"\r\n        >\r\n          <ion-select-option\r\n            value=\"{{p.languages_id}}\"\r\n            *ngFor=\"let p of languages; let i = index\"\r\n            >{{p.name}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <span *ngIf=\"LanguageError\" class=\"error ion-padding\">\r\n          Language is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <h3>Location Info</h3>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"list_4\">\r\n        <ion-row>\r\n          <ion-col size=\"1\">\r\n            <div class=\"list_7\"></div>\r\n            <div class=\"list_5\"></div>\r\n            <div class=\"list_8\"></div>\r\n          </ion-col>\r\n          <ion-col size=\"11\">\r\n            <span (click)=\"goToLocation()\">Pickup</span>\r\n            <p class=\"list_6\" (click)=\"goToLocation()\">{{pickup}}</p>\r\n            <span (click)=\"goToLocation()\">Dropoff</span>\r\n            <p (click)=\"goToLocation()\">{{dropoff}}</p>\r\n          </ion-col>\r\n        </ion-row>\r\n        <span *ngIf=\"RouteError\" class=\"error ion-padding\">\r\n          Route is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <h3>Price per day - ({{currency_symbol}})</h3>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-input\r\n          type=\"number\"\r\n          pattern=\"[0-9]*\"\r\n          inputmode=\"numeric\"\r\n          placeholder=\"Charges/day\"\r\n          class=\"input_list\"\r\n          [(ngModel)]=\"ChargesInfo\"\r\n          (ionBlur)=\"validateForm()\"\r\n        ></ion-input>\r\n        <span *ngIf=\"ChargesInfoError\" class=\"error ion-padding\">\r\n          Price per day is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <h3>Availability Calender</h3>\r\n        <p class=\"upload_images left_4\">Start Date</p>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n\r\n  <div class=\"calender_slider\">\r\n    <ion-calendar\r\n      (click)=\"newDate()\"\r\n      [(ngModel)]=\"dateRange\"\r\n      (onChange)=\"onChange($event)\"\r\n      [type]=\"type\"\r\n      [options]=\"optionsRange\"\r\n      [disabled]=\"false\"\r\n      [format]=\"'YYYY-MM-DD'\"\r\n    >\r\n    </ion-calendar>\r\n  </div>\r\n\r\n  <ion-row>\r\n    <ion-col>\r\n      <span *ngIf=\"fieldMissing\" class=\"error ion-padding ion-text-center\">\r\n        Please fill all the required fields.\r\n      </span>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"btn_footer\">\r\n    <ion-col size=\"2\"></ion-col>\r\n    <ion-col size=\"8\">\r\n      <ion-button\r\n        color=\"primary\"\r\n        expand=\"block\"\r\n        shape=\"round\"\r\n        (click)=\"submitForm()\"\r\n        >Done</ion-button\r\n      >\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n<div\r\n  [hidden]=\"popupHidden\"\r\n  style=\"\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: rgb(0 0 0 / 68%);\r\n    position: absolute;\r\n  \"\r\n>\r\n  <div\r\n    style=\"\r\n      left: 10%;\r\n      position: absolute;\r\n      top: 40%;\r\n      width: 80%;\r\n      height: 160px;\r\n      background-color: rgb(255, 255, 255);\r\n      border-radius: 20px;\r\n    \"\r\n  >\r\n    <ion-row>\r\n      <ion-col\r\n        style=\"padding-top: 10 px; padding-right: 10px; text-align: right\"\r\n      >\r\n        <img\r\n          style=\"height: 10px; width: 10px; margin-right: 4px; margin-top: 8px\"\r\n          src=\"assets/img/close_black.svg\"\r\n          (click)=\"hidePopup()\"\r\n        />\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row style=\"margin-top: -4px\">\r\n      <ion-col (click)=\"CameraSelected()\" style=\"text-align: center\">\r\n        <img style=\"height: 50px; width: 50px\" src=\"assets/img/camera.svg\" />\r\n        <p>Camera</p>\r\n      </ion-col>\r\n      <ion-col (click)=\"GalerySelected()\" style=\"text-align: center\">\r\n        <img style=\"height: 50px; width: 50px\" src=\"assets/img/gallery.svg\" />\r\n        <p>Gallery</p>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div\r\n    *ngIf=\"showSlide == 'yes'\"\r\n    [class.for_ios_pad]=\"plateformCheck == 'ios'\"\r\n    style=\"background: #000000f5; height: 100%\"\r\n  >\r\n    <ion-row>\r\n      <ion-col style=\"padding-left: 20px; padding-top: 20px\">\r\n        <img\r\n          src=\"assets/img/close.png\"\r\n          (click)=\"closeModel()\"\r\n          style=\"height: 20px; width: 20px; padding: 3px; border-radius: 10px\"\r\n        />\r\n      </ion-col>  \r\n    </ion-row>\r\n\r\n    <ion-row class=\"center\">\r\n      <ion-col class=\"slider_main_slide\" style=\"display: flex\">\r\n        <ion-slides >\r\n          <ng-container >\r\n            <ion-slide style=\"width: 100%;\">\r\n              <img style=\"max-height: 80%;\" src=\"{{imageToShow}}\" class=\"s_img_slide\" />\r\n            </ion-slide>\r\n          </ng-container>\r\n        </ion-slides>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  \r\n</div>");

/***/ }),

/***/ "./src/app/edit-list-your-car/edit-list-your-car-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/edit-list-your-car/edit-list-your-car-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: EditListYourCarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditListYourCarPageRoutingModule", function() { return EditListYourCarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _edit_list_your_car_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-list-your-car.page */ "./src/app/edit-list-your-car/edit-list-your-car.page.ts");




const routes = [
    {
        path: '',
        component: _edit_list_your_car_page__WEBPACK_IMPORTED_MODULE_3__["EditListYourCarPage"]
    }
];
let EditListYourCarPageRoutingModule = class EditListYourCarPageRoutingModule {
};
EditListYourCarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditListYourCarPageRoutingModule);



/***/ }),

/***/ "./src/app/edit-list-your-car/edit-list-your-car.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/edit-list-your-car/edit-list-your-car.module.ts ***!
  \*****************************************************************/
/*! exports provided: EditListYourCarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditListYourCarPageModule", function() { return EditListYourCarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _edit_list_your_car_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-list-your-car-routing.module */ "./src/app/edit-list-your-car/edit-list-your-car-routing.module.ts");
/* harmony import */ var _edit_list_your_car_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-list-your-car.page */ "./src/app/edit-list-your-car/edit-list-your-car.page.ts");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ion2-calendar */ "./node_modules/ion2-calendar/__ivy_ngcc__/dist/index.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_7__);








let EditListYourCarPageModule = class EditListYourCarPageModule {
};
EditListYourCarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ion2_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"],
            _edit_list_your_car_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditListYourCarPageRoutingModule"]
        ],
        declarations: [_edit_list_your_car_page__WEBPACK_IMPORTED_MODULE_6__["EditListYourCarPage"]],
        providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'zh-CN' }]
    })
], EditListYourCarPageModule);



/***/ }),

/***/ "./src/app/edit-list-your-car/edit-list-your-car.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/edit-list-your-car/edit-list-your-car.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3em 0.1em 8px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n}\n\n.view_btn {\n  position: absolute;\n  right: 7px;\n  top: -30px;\n  color: #c4932f;\n}\n\n.error {\n  color: red;\n}\n\n.real_image {\n  padding: 0px;\n}\n\n.real_image img {\n  width: 100%;\n  height: 100px;\n}\n\n.real_image_2 {\n  padding: 0px;\n}\n\n.real_image_2 img {\n  width: 100%;\n  height: 125px;\n}\n\n.list_1 {\n  padding: 0em 1em;\n}\n\n.list_1 h3 {\n  margin: 0px;\n  margin-top: 0.5em;\n}\n\n.left_4 {\n  margin-left: 0.7em !important;\n}\n\n.input_list {\n  border: 1px solid #d4dce1;\n  background: #f7f8fa;\n  border-radius: 28px;\n  font-size: 13px;\n  color: #000;\n  --placeholder-color: #b2b2b4;\n  --padding-bottom: 1.5em;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n}\n\n.upload_images {\n  color: #c4932f;\n  font-size: 12px;\n  margin: 5px 0px;\n}\n\n.list_2 {\n  text-align: center;\n  background: #f7f8fa;\n  border: 1px dashed #d4dce1;\n  border-radius: 10px;\n  padding: 2.5em 0em;\n}\n\n.list_9 {\n  text-align: center;\n  background: #f7f8fa;\n  border: 1px dashed #d4dce1;\n  border-radius: 10px;\n  padding: 2.7em 0em 2.5em 0em;\n}\n\n.list_9 p {\n  color: #d2d6d8;\n  font-size: 12px;\n  margin: 0px;\n  margin-top: 8px;\n}\n\n.list_3 {\n  background: #f7f8fa;\n  border: 1px solid #d4dce1;\n  border-radius: 10px;\n  color: #000;\n  --placeholder-color: #b2b2b4;\n  font-size: 13px;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n}\n\n.btn_footer {\n  margin: 0.7em 0em 1em 0em;\n}\n\nion-slide span {\n  border: 1px solid #000;\n  border-radius: 22px;\n  padding: 8px 14px;\n  margin-left: 1em;\n}\n\n.num {\n  padding: 9px 10px !important;\n}\n\n.calender_slider {\n  background: #f7f8fa;\n  padding: 0.6em 0em;\n}\n\n.calender_slider_text {\n  margin: 0px;\n  position: relative;\n  top: -2px;\n  font-size: 18px;\n}\n\nion-slide {\n  margin-left: 0.6em;\n}\n\nion-slide:first-child {\n  margin-left: 0em;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n}\n\n.btn_footer {\n  padding: 0.5em 1em 1.2em 1em;\n}\n\n.info {\n  background: #6e6d6d;\n  padding: 0.4em 0em;\n}\n\n.info p {\n  margin: 0px;\n  color: #fff;\n  font-size: 10px;\n}\n\nion-select {\n  background: #f7f8fa;\n  border: 1px solid #d4dce1;\n  border-radius: 30px;\n  --placeholder-color: #b2b2b4;\n  color: #000;\n  font-size: 13px;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n  --padding-bottom: 1.5em;\n  --padding-end: 1.5em;\n}\n\n.list_4 {\n  background: #f7f8fa;\n  border: 1px solid #d4dce1;\n  border-radius: 12px;\n  color: #d4dce1;\n  font-size: 13px;\n}\n\n.list_4 p {\n  margin: 0px;\n  color: #000;\n}\n\n.list_5 {\n  border-left: 1px dashed #c7c7c7;\n  height: 48px;\n  float: right;\n  margin-top: 12px;\n}\n\n.list_6 {\n  margin-bottom: 2em !important;\n}\n\n.list_7 {\n  height: 10px;\n  background: green;\n  width: 10px;\n  float: right;\n  position: relative;\n  right: 5px;\n  border-radius: 50%;\n  margin-top: 3px;\n}\n\n.list_8 {\n  height: 10px;\n  background: red;\n  width: 10px;\n  float: right;\n  position: relative;\n  right: 5px;\n  border-radius: 50%;\n}\n\n.activeState {\n  background: #c4932f;\n  border: 1px solid #c4932f !important;\n  color: #fff !important;\n}\n\n.activeEndState {\n  background: #c4932f;\n  border: 1px solid #c4932f !important;\n  color: #fff !important;\n}\n\n.bin {\n  position: absolute;\n  right: 5px;\n  background: #c4932f;\n  padding: 4px;\n  color: #fff;\n  z-index: 9999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1saXN0LXlvdXItY2FyL2VkaXQtbGlzdC15b3VyLWNhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLHdCQUFBO0lBQ0EscUJBQUE7RUFDTjtBQUNGOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFDSjs7QUFDQTtFQUNJLFVBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7QUFHSjs7QUFEQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBSUo7O0FBRkE7RUFDSSxZQUFBO0FBS0o7O0FBSEE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQU1KOztBQUhBO0VBQ0ksZ0JBQUE7QUFNSjs7QUFKQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQU9KOztBQUxBO0VBQ0ksNkJBQUE7QUFRSjs7QUFOQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFTSjs7QUFQQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQVVKOztBQVJBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQVdKOztBQVRBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtBQVlKOztBQVZBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQWFKOztBQVhBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFjSjs7QUFaQTtFQUNJLHlCQUFBO0FBZUo7O0FBYkE7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQWdCSjs7QUFkQTtFQUNJLDRCQUFBO0FBaUJKOztBQWZBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQWtCSjs7QUFoQkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQW1CSjs7QUFqQkE7RUFDSSxrQkFBQTtBQW9CSjs7QUFsQkE7RUFDSSxnQkFBQTtBQXFCSjs7QUFuQkE7RUFDSSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFzQko7O0FBcEJBO0VBQ0ksNEJBQUE7QUF1Qko7O0FBckJBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQXdCSjs7QUF0QkE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUF5Qko7O0FBdkJBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FBMEJKOztBQXhCQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBMkJKOztBQXpCQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FBNEJKOztBQTFCQTtFQUNJLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQTZCSjs7QUEzQkE7RUFDSSw2QkFBQTtBQThCSjs7QUE1QkE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQStCSjs7QUE3QkE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFnQ0o7O0FBOUJBO0VBQ0ksbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0FBaUNKOztBQS9CQTtFQUNJLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtBQWtDSjs7QUFoQ0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQW1DSiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtbGlzdC15b3VyLWNhci9lZGl0LWxpc3QteW91ci1jYXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIHBhZGRpbmc6IDAuOGVtIDAuMWVtIDAgMDtcbiAgICAtLWJhY2tncm91bmQ6ICNjNDkzMmY7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLWhlaWdodCA6IDgwMHB4KSB7XG4gICAgaW9uLXRvb2xiYXIge1xuICAgICAgICBwYWRkaW5nOiAzZW0gMC4xZW0gOHB4IDA7XG4gICAgICAgIC0tYmFja2dyb3VuZDogI2M0OTMyZjtcbiAgICB9XG59XG5cbmlvbi10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn1cbi52aWV3X2J0biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA3cHg7XG4gICAgdG9wOiAtMzBweDtcbiAgICBjb2xvcjogI2M0OTMyZjtcbn0gICBcbi5lcnJvciB7XG4gICAgY29sb3I6IHJlZDtcbn1cbi5yZWFsX2ltYWdlIHtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG4ucmVhbF9pbWFnZSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwcHg7XG59XG4ucmVhbF9pbWFnZV8yIHtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG4ucmVhbF9pbWFnZV8yIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMjVweDtcbiAgICBcbn1cbi5saXN0XzEge1xuICAgIHBhZGRpbmc6IDBlbSAxZW07XG59XG4ubGlzdF8xIGgzIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbn1cbi5sZWZ0XzQge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjdlbSAhaW1wb3J0YW50O1xufVxuLmlucHV0X2xpc3Qge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGRjZTE7XG4gICAgYmFja2dyb3VuZDogI2Y3ZjhmYTtcbiAgICBib3JkZXItcmFkaXVzOiAyOHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjYjJiMmI0O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDEuNWVtO1xuICAgIC0tcGFkZGluZy1zdGFydDogMS41ZW07XG4gICAgLS1wYWRkaW5nLXRvcDogMS41ZW07XG59XG4udXBsb2FkX2ltYWdlcyB7XG4gICAgY29sb3I6ICNjNDkzMmY7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbjogNXB4IDBweDtcbn1cbi5saXN0XzIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjZjdmOGZhO1xuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjZDRkY2UxO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMi41ZW0gMGVtO1xufVxuLmxpc3RfOSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICNmN2Y4ZmE7XG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICNkNGRjZTE7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAyLjdlbSAwZW0gMi41ZW0gMGVtO1xufVxuLmxpc3RfOSBwIHtcbiAgICBjb2xvcjogI2QyZDZkODtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xufVxuLmxpc3RfMyB7XG4gICAgYmFja2dyb3VuZDogI2Y3ZjhmYTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRkY2UxO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogI2IyYjJiNDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxLjVlbTtcbiAgICAtLXBhZGRpbmctdG9wOiAxLjVlbTtcbn1cbi5idG5fZm9vdGVyIHtcbiAgICBtYXJnaW46IDAuN2VtIDBlbSAxZW0gMGVtO1xufVxuaW9uLXNsaWRlIHNwYW4ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgICBwYWRkaW5nOiA4cHggMTRweDtcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xufVxuLm51bSB7XG4gICAgcGFkZGluZzogOXB4IDEwcHggIWltcG9ydGFudDtcbn1cbi5jYWxlbmRlcl9zbGlkZXIge1xuICAgIGJhY2tncm91bmQ6ICNmN2Y4ZmE7XG4gICAgcGFkZGluZzogMC42ZW0gMGVtO1xufVxuLmNhbGVuZGVyX3NsaWRlcl90ZXh0IHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMnB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cbmlvbi1zbGlkZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNmVtO1xufVxuaW9uLXNsaWRlOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tbGVmdDogMGVtO1xufVxuaW9uLWJ1dHRvbiB7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMS41ZW07XG4gICAgLS1wYWRkaW5nLXRvcDogMS41ZW07XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuLmJ0bl9mb290ZXIge1xuICAgIHBhZGRpbmc6IDAuNWVtIDFlbSAxLjJlbSAxZW07XG59XG4uaW5mbyB7XG4gICAgYmFja2dyb3VuZDogIzZlNmQ2ZDtcbiAgICBwYWRkaW5nOiAwLjRlbSAwZW07XG59XG4uaW5mbyBwIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEwcHg7XG59XG5pb24tc2VsZWN0IHtcbiAgICBiYWNrZ3JvdW5kOiAjZjdmOGZhO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGRjZTE7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjYjJiMmI0O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEuNWVtO1xuICAgIC0tcGFkZGluZy10b3A6IDEuNWVtO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDEuNWVtO1xuICAgIC0tcGFkZGluZy1lbmQ6IDEuNWVtO1xufVxuLmxpc3RfNCB7XG4gICAgYmFja2dyb3VuZDogI2Y3ZjhmYTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRkY2UxO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgY29sb3I6ICNkNGRjZTE7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuLmxpc3RfNCBwIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBjb2xvcjogIzAwMDtcbn1cbi5saXN0XzUge1xuICAgIGJvcmRlci1sZWZ0OiAxcHggZGFzaGVkICNjN2M3Yzc7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuLmxpc3RfNiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMmVtICFpbXBvcnRhbnQ7XG59XG4ubGlzdF83IHtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogZ3JlZW47XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG59XG4ubGlzdF84IHtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcmlnaHQ6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uYWN0aXZlU3RhdGUge1xuICAgIGJhY2tncm91bmQ6ICNjNDkzMmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M0OTMyZiAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4uYWN0aXZlRW5kU3RhdGUge1xuICAgIGJhY2tncm91bmQ6ICNjNDkzMmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M0OTMyZiAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4uYmluIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiAjYzQ5MzJmO1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB6LWluZGV4OiA5OTk5O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/edit-list-your-car/edit-list-your-car.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/edit-list-your-car/edit-list-your-car.page.ts ***!
  \***************************************************************/
/*! exports provided: EditListYourCarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditListYourCarPage", function() { return EditListYourCarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _cameraimage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cameraimage.service */ "./src/app/cameraimage.service.ts");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var ngx_image_compress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-image-compress */ "./node_modules/ngx-image-compress/__ivy_ngcc__/fesm2015/ngx-image-compress.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);











let EditListYourCarPage = class EditListYourCarPage {
    constructor(loadingController, activatedRoute, popoverController, storage, toastController, router, restService, alertCtrl, plateform, imageService, menuCtrl, imageCompress, imagePicker) {
        this.loadingController = loadingController;
        this.activatedRoute = activatedRoute;
        this.popoverController = popoverController;
        this.storage = storage;
        this.toastController = toastController;
        this.router = router;
        this.restService = restService;
        this.alertCtrl = alertCtrl;
        this.plateform = plateform;
        this.imageService = imageService;
        this.menuCtrl = menuCtrl;
        this.imageCompress = imageCompress;
        this.imagePicker = imagePicker;
        this.option1 = {
            loop: true,
            slidesPerView: 8,
            initialSlide: 0,
        };
        this.option2 = {
            loop: true,
            slidesPerView: 8,
            initialSlide: 0,
        };
        this.popupHidden = true;
        this.indexOfSLide = 1;
        this.showSlide = 'no';
        this.start_date_month = 'January';
        this.end_date_month = 'January';
        this.start_month_index = 1;
        this.end_month_index = 1;
        this.documentBase64 = [];
        this.days = [];
        this.monthCounter = 1;
        this.validation = false;
        this.fieldMissing = false;
        this.endmonthCounter = 1;
        this.active_start_date = 1;
        this.startmonthCounter = 1;
        this.document_oneLicencePlate = '';
        this.document_oneLicencePlateToShow = '';
        this.mobileNum = '';
        this.carTypeArray = [];
        this.carType = '';
        this.comfort = '';
        this.comfortArray = [];
        this.optionsRange = {
            pickMode: 'range',
        };
        // dateRange: { from: string; to: string; };
        this.dateRange = {
            from: new Date(),
            to: new Date(),
        };
        //-- geting car types starts -- //
        this.getCarTypes();
        //-- geting car types ends -- //
        // -- Getting car ID from the url (Params) starts --//
        this.activatedRoute.queryParams.subscribe((res) => {
            var vehResponse = JSON.parse(res.value);
            this.vehicles_id = vehResponse.vehiclesID;
        });
        // -- Getting car ID from the url (Params) ends--//
    }
    ngOnInit() {
        // Image pikcer permission
        this.imagePicker.requestReadPermission();
        // Image pikcer permission
        // -- Init calneder starts -- //
        this.currentYear = new Date().getFullYear();
        this.currentYearTwo = new Date().getFullYear();
        // -- Init calneder ends -- //
        if (this.plateform.is('ios')) {
            this.plateformCheck = 'ios';
        }
        else {
            this.plateformCheck = 'android';
        }
        this.storage.get('user_details').then((user_details) => {
            this.userID = user_details.users_id;
            this.Email = user_details.email;
            this.about = user_details.about;
            this.work = user_details.work;
            this.currencyID = user_details.currencies_id;
            // -- get all dropdowndata for edit starts -- //
            this.getDropDownData();
            // -- get all dropdowndata for edit ends -- //
            this.storage.get('base_urls').then((base_url) => {
                this.base_url = base_url;
                this.storage.get('currency_symbol').then((currency_symbol) => {
                    this.currency_symbol = currency_symbol;
                });
            });
        });
    }
    ionViewWillEnter() {
        // this.storage.get('pickup').then((pickup) => {
        //   this.storage.get('dropoff').then((dropoff) => {
        //     this.storage.get('pickuplong').then((pickuplong) => {
        //       this.storage.get('pickuplat').then((pickuplat) => {
        //         this.storage.get('dropofflong').then((dropofflong) => {
        //           this.storage.get('dropofflat').then((dropofflat) => {
        //             this.pickup = pickup;
        //             this.dropoff = dropoff;
        //             this.pickuplong = pickuplong;
        //             this.pickuplat = pickuplat;
        //             this.dropofflong = dropofflong;
        //             this.dropofflat = dropofflat;
        //           });
        //         });
        //       });
        //     });
        //   });
        // });
    }
    getCarTypes() {
        var stringys = JSON.stringify({
            requestType: 'get_parts_details',
        });
        this.restService.get_parts_details(stringys).subscribe((response) => {
            let resee = JSON.parse(response['_body']);
            this.carTypeArray = resee.car_types;
            this.comfortArray = resee.car_classes;
        }, (err) => { });
    }
    getVehicleDetails() {
        var stringy = JSON.stringify({
            requestType: 'get_car_details_by_id',
            usersID: this.userID,
            vehicleID: this.vehicles_id,
            currencyID: this.currencyID,
        });
        this.restService.list_vehicles(stringy).subscribe((response) => {
            this.response = JSON.parse(response['_body']);
            this.vehicles_list = this.response.vehicles_list[0];
            this.Model = this.vehicles_list.model_id;
            this.document_oneLicencePlateToShow =
                this.restService.domainOfCar + this.vehicles_list.license_img;
            this.comfort = this.vehicles_list.comfort;
            this.carType = this.vehicles_list.car_types_id;
            this.mobileNum = this.vehicles_list.mobile_number;
            this.Make = this.vehicles_list.make_id;
            this.LicensePlate = this.vehicles_list.license_no_plate;
            this.Description = this.vehicles_list.description;
            this.Seats = this.vehicles_list.no_of_seats;
            this.Door = this.vehicles_list.no_of_doors;
            this.Gas = this.vehicles_list.fuel_type_id;
            this.GearType = this.vehicles_list.gear_type_id;
            this.Convertable = this.vehicles_list.roof_type_id;
            this.wheels = this.vehicles_list.no_of_wheels;
            this.other_features = this.vehicles_list.other_features;
            this.about = this.vehicles_list.about;
            this.Lives = this.vehicles_list.countries_id;
            this.AdNotice = this.vehicles_list.advance_notice;
            this.MinTrip = this.vehicles_list.min_trip_duration;
            this.MaxTrip = this.vehicles_list.max_trip_duration;
            this.work = this.vehicles_list.work;
            this.Language = this.vehicles_list.languages_id;
            this.pickup = this.vehicles_list.pickup_location;
            this.dropoff = this.vehicles_list.dropoff_location;
            this.ChargesInfo = this.vehicles_list.charge_per_day;
            this.document_four = this.vehicles_list.roadworthy_doc_img;
            if (this.vehicles_list.vehicle_imgs[0]) {
                this.document_one_id = this.vehicles_list.vehicle_imgs[0].veh_img_id;
                this.document_one = this.vehicles_list.vehicle_imgs[0].img;
            }
            if (this.vehicles_list.vehicle_imgs[1]) {
                this.document_two_id = this.vehicles_list.vehicle_imgs[1].veh_img_id;
                this.document_two = this.vehicles_list.vehicle_imgs[1].img;
            }
            if (this.vehicles_list.vehicle_imgs[2]) {
                this.document_three_id = this.vehicles_list.vehicle_imgs[2].veh_img_id;
                this.document_three = this.vehicles_list.vehicle_imgs[2].img;
            }
            if (this.vehicles_list.vehicle_imgs[3]) {
                this.document_six_id = this.vehicles_list.vehicle_imgs[3].veh_img_id;
                this.document_six = this.vehicles_list.vehicle_imgs[3].img;
            }
            if (this.vehicles_list.vehicle_imgs[4]) {
                this.document_seven_id = this.vehicles_list.vehicle_imgs[4].veh_img_id;
                this.document_seven = this.vehicles_list.vehicle_imgs[4].img;
            }
            if (this.vehicles_list.vehicle_imgs[5]) {
                this.document_eight_id = this.vehicles_list.vehicle_imgs[5].veh_img_id;
                this.document_eight = this.vehicles_list.vehicle_imgs[5].img;
            }
            if (this.vehicles_list.vehicle_imgs[6]) {
                this.document_nine_id = this.vehicles_list.vehicle_imgs[6].veh_img_id;
                this.document_nine = this.vehicles_list.vehicle_imgs[6].img;
            }
            if (this.vehicles_list.vehicle_imgs[7]) {
                this.document_ten_id = this.vehicles_list.vehicle_imgs[7].veh_img_id;
                this.document_ten = this.vehicles_list.vehicle_imgs[7].img;
            }
            if (this.vehicles_list.vehicle_imgs[8]) {
                this.document_eleven_id = this.vehicles_list.vehicle_imgs[8].veh_img_id;
                this.document_eleven = this.vehicles_list.vehicle_imgs[8].img;
            }
            if (this.vehicles_list.vehicle_imgs[9]) {
                this.document_twelve_id = this.vehicles_list.vehicle_imgs[9].veh_img_id;
                this.document_twelve = this.vehicles_list.vehicle_imgs[9].img;
            }
            this.document_five = this.vehicles_list.insurance_img;
            this.vehiclesID = this.vehicles_list.vehicles_id;
            this.dbStartDate = this.vehicles_list.start_date.split('-');
            this.dbEndDate = this.vehicles_list.end_date.split('-');
            this.startDate = this.vehicles_list.start_date;
            this.endDate = this.vehicles_list.end_date;
            this.start_date = this.vehicles_list.start_date;
            this.end_date = this.vehicles_list.end_date;
            this.dateRange = {
                from: new Date(this.dbStartDate[0], this.dbStartDate[1] - 1, this.dbStartDate[2]),
                to: new Date(this.dbEndDate[0], this.dbEndDate[1] - 1, this.dbEndDate[2]),
            };
        }, (err) => {
            console.log(err);
        });
    }
    getStartIndex(i) {
        this.sliderStartBoolean = i;
        this.validateStartDate();
    }
    getEndIndex(i) {
        this.sliderEndBoolean = i;
        this.validateEndDate();
    }
    goToLocation() {
        var myData = JSON.stringify({
            location: '/edit-list-your-car',
        });
        this.router.navigate(['/location'], {
            queryParams: {
                value: myData,
            },
        });
    }
    checkingLiNo() {
        var stringys = JSON.stringify({
            requestType: 'check_license_plate',
            licenseText: this.LicensePlate,
            veh_id: this.vehicles_id,
        });
        this.restService.getDdlData(stringys).subscribe((response) => {
            this.response = JSON.parse(response['_body']);
            if (this.response.msg == 'exist') {
                this.LicensePlateUnique = true;
            }
            else {
                this.LicensePlateUnique = false;
            }
        }, (err) => { });
    }
    removeImage(id, index) {
        var stringy = JSON.stringify({
            requestType: 'delete_vehicle_images',
            usersID: this.userID,
            vehImgID: id,
        });
        this.restService.deleteImage(stringy).subscribe((response) => {
            this.response = JSON.parse(response['_body']);
            if (this.response.status) {
                if (index == 1) {
                    this.document_one = '';
                }
                else if (index == 2) {
                    this.document_two = '';
                }
                else if (index == 3) {
                    this.document_three = '';
                }
                else if (index == 6) {
                    this.document_six = '';
                }
                else if (index == 7) {
                    this.document_seven = '';
                }
                else if (index == 8) {
                    this.document_eight = '';
                }
                else if (index == 9) {
                    this.document_nine = '';
                }
                else if (index == 10) {
                    this.document_ten = '';
                }
                else if (index == 11) {
                    this.document_eleven = '';
                }
                else if (index == 12) {
                    this.document_twelve = '';
                }
            }
        }, (err) => {
            console.log(err);
        });
    }
    getDropDownData() {
        var stringy = JSON.stringify({
            requestType: 'list_car_page',
        });
        this.restService.getDdlData(stringy).subscribe((response) => {
            this.response = JSON.parse(response['_body']);
            this.model = this.response.model;
            this.make = this.response.make;
            this.fuel_type = this.response.fuel_type;
            this.gear_type = this.response.gear_type;
            this.roof_type = this.response.roof_type;
            this.countries = this.response.countries;
            this.languages = this.response.languages;
            this.wheelss = this.response.no_of_wheels;
            this.seats = this.response.no_of_seats;
            this.doors = this.response.no_of_doors;
            // -- Getting all vehical details starts -- //
            this.getVehicleDetails();
            // -- Getting all vehical details Ends -- //
        }, (err) => {
            console.log(err);
        });
    }
    validateForm() {
        if (this.validation) {
            this.ModelError = false;
            this.MakeError = false;
            this.LicensePlateError = false;
            this.document_oneError = false;
            this.document_twoError = false;
            this.document_threeError = false;
            this.document_sixError = false;
            this.document_sevenError = false;
            this.document_eightError = false;
            this.document_nineError = false;
            this.document_tenError = false;
            this.document_elevenError = false;
            this.document_twelveError = false;
            this.DoorError = false;
            this.document_fourError = false;
            this.document_fiveError = false;
            this.DescriptionError = false;
            this.SeatsError = false;
            this.GasError = false;
            this.GearTypeError = false;
            this.ConvertableError = false;
            this.wheelsError = false;
            this.other_featuresError = false;
            this.aboutError = false;
            this.LivesError = false;
            this.AdNoticeError = false;
            this.MinTripError = false;
            this.MaxTripError = false;
            this.workError = false;
            this.LanguageError = false;
            this.RouteError = false;
            this.ChargesInfoError = false;
            if (this.LicensePlate == '' || this.LicensePlate == undefined) {
                this.LicensePlateError = true;
                return false;
            }
            else if (this.document_one == '' || this.document_one == undefined) {
                this.document_oneError = true;
                return false;
            }
            else if (this.document_two == '' || this.document_two == undefined) {
                this.document_twoError = true;
                return false;
            }
            else if (this.document_three == '' ||
                this.document_three == undefined) {
                this.document_threeError = true;
                return false;
            }
            else if (this.document_six == '' || this.document_six == undefined) {
                this.document_sixError = true;
                return false;
            }
            else if (this.document_seven == '' ||
                this.document_seven == undefined) {
                this.document_sevenError = true;
                return false;
            }
            else if (this.Description == '' || this.Description == undefined) {
                this.DescriptionError = true;
                return false;
            }
            else if (this.Seats == '' || this.Seats == undefined) {
                this.SeatsError = true;
                return false;
            }
            else if (this.Door == '' || this.Door == undefined) {
                this.DoorError = true;
                return false;
            }
            else if (this.Gas == '' || this.Gas == undefined) {
                this.GasError = true;
                return false;
            }
            else if (this.GearType == '' || this.GearType == undefined) {
                this.GearTypeError = true;
                return false;
            }
            else if (this.Convertable == '' || this.Convertable == undefined) {
                this.ConvertableError = true;
                return false;
            }
            else if (this.wheels == '' || this.wheels == undefined) {
                this.wheelsError = true;
                return false;
            }
            else if (this.other_features == '' ||
                this.other_features == undefined) {
                this.other_featuresError = true;
                return false;
            }
            else if (this.document_four == '' || this.document_four == undefined) {
                this.document_fourError = true;
                return false;
            }
            else if (this.document_five == '' || this.document_five == undefined) {
                this.document_fiveError = true;
                return false;
            }
            else if (this.about == '' || this.about == undefined) {
                this.aboutError = true;
                return false;
            }
            else if (this.Lives == '' || this.Lives == undefined) {
                this.LivesError = true;
                return false;
            }
            else if (this.AdNotice == '' || this.AdNotice == undefined) {
                this.AdNoticeError = true;
                return false;
            }
            else if (this.MinTrip == '' || this.MinTrip == undefined) {
                this.MinTripError = true;
                return false;
            }
            else if (this.MaxTrip == '' || this.MaxTrip == undefined) {
                this.MaxTripError = true;
                return false;
            }
            else if (this.work == '' || this.work == undefined) {
                this.workError = true;
                return false;
            }
            else if (this.Language == '' || this.Language == undefined) {
                this.LanguageError = true;
                return false;
            }
            else if (this.pickup == '' || this.pickup == undefined) {
                this.RouteError = true;
                return false;
            }
            else if (this.dropoff == '' || this.dropoff == undefined) {
                this.RouteError = true;
                return false;
            }
            else if (this.LicensePlateUnique == true) {
                return false;
            }
            else if (this.ChargesInfo == '' || this.ChargesInfo == undefined) {
                this.ChargesInfoError = true;
                return false;
            }
            else {
                return true;
            }
        }
    }
    submitForm() {
        this.validation = true;
        if (this.validateForm() == true) {
            this.fieldMissing = false;
            if (this.document_one == '' ||
                this.document_two == '' ||
                this.document_three == '' ||
                this.document_six == '' ||
                this.document_seven == '') {
                this.presentToast('Please select the 5 images');
            }
            else {
                var roadworthy;
                if (this.documentUploadFour) {
                    roadworthy = this.document_four.split(',')[1];
                }
                else {
                    roadworthy = '';
                }
                var insurance;
                if (this.documentUploadFive) {
                    insurance = this.document_five.split(',')[1];
                }
                else {
                    insurance = '';
                }
                var stringy = JSON.stringify({
                    requestType: 'edit_list_car',
                    vehicleID: this.vehiclesID,
                    licensePlate: this.LicensePlate,
                    carImages: this.documentBase64,
                    noOfSeats: this.Seats,
                    description: this.Description,
                    noOfDoors: this.Door,
                    fuelTypeID: this.Gas,
                    gearTypeID: this.GearType,
                    noOfWheels: this.wheels,
                    roofTypeID: this.Convertable,
                    otherFeatures: this.other_features,
                    roadWorthy: roadworthy,
                    insurance: insurance,
                    chargePerDay: this.ChargesInfo,
                    countriesID: this.Lives,
                    advance_notice: this.AdNotice,
                    min_trip_duration: this.MinTrip,
                    max_trip_duration: this.MaxTrip,
                    about: this.about,
                    work: this.work,
                    languagesId: this.Language,
                    pickupLocationName: this.pickup,
                    dropoffLocationName: this.dropoff,
                    start_date: this.start_date,
                    end_date: this.end_date,
                    pickupLatitude: this.pickuplat,
                    pickupLongitude: this.pickuplong,
                    dropoffLatitude: this.dropofflat,
                    dropoffLongitude: this.dropofflong,
                    usersID: this.userID,
                    email: this.Email,
                    currencyID: this.currencyID,
                    licence_plateImage: this.document_oneLicencePlate,
                    comfort: this.comfort,
                    carType: this.carType,
                    mobileNum: this.mobileNum,
                });
                this.present();
                this.restService.saveListVehicles(stringy).subscribe((response) => {
                    this.response = JSON.parse(response['_body']);
                    this.dismiss();
                    if (this.response.status == 'error') {
                        this.presentToast('Oops!something went wrong');
                    }
                    else if (this.response.status == 'success') {
                        //this.presentToast('Vehicle Updation request sent Successfully');
                        this.presentToast('Vehicle Updated Successfully');
                        this.Model = '';
                        this.Make = '';
                        this.LicensePlate = '';
                        this.documentBase64 = [];
                        this.Seats = '';
                        this.Description = '';
                        this.Door = '';
                        this.Gas = '';
                        this.GearType = '';
                        this.wheels = '';
                        this.Convertable = '';
                        this.other_features = '';
                        roadworthy = '';
                        insurance = '';
                        this.ChargesInfo = '';
                        this.Lives = '';
                        this.AdNotice = '';
                        this.MinTrip = '';
                        this.MaxTrip = '';
                        this.about = '';
                        this.work = '';
                        this.Language = '';
                        this.pickup = '';
                        this.dropoff = '';
                        this.document_one = '';
                        this.document_two = '';
                        this.document_three = '';
                        this.document_four = '';
                        this.document_five = '';
                        this.document_six = '';
                        this.document_seven = '';
                        this.document_eight = '';
                        this.document_nine = '';
                        this.document_ten = '';
                        this.document_eleven = '';
                        this.document_twelve = '';
                        this.storage.set('pickup', null);
                        this.storage.set('dropoff', null);
                        this.router.navigate(['/']);
                    }
                }, (err) => {
                    this.dismiss();
                    console.log(err);
                });
            }
        }
        else {
            this.fieldMissing = true;
        }
    }
    takeImageFromCamera(param) {
        this.imageService
            .selectImageInCamera()
            .then((imageData) => {
            var base64 = `data:image/png;base64,${imageData}`;
            this.imageCompress.compressFile(base64, 0, 50, 50).then((result) => {
                if (param == 0) {
                    this.document_oneLicencePlate = result;
                    var document_oneLicencePlate = this.document_one.split(',')[1];
                    this.document_oneLicencePlateToShow = result;
                    this.documentBase64.push(document_oneLicencePlate);
                    //this.documentUploadOne = true;
                }
                else if (param == 1) {
                    this.document_one = result;
                    var document_one = this.document_one.split(',')[1];
                    this.documentBase64.push(document_one);
                    this.documentUploadOne = true;
                }
                else if (param == 2) {
                    this.document_two = result;
                    var document_two = this.document_two.split(',')[1];
                    this.documentBase64.push(document_two);
                    this.documentUploadTwo = true;
                }
                else if (param == 3) {
                    this.document_three = result;
                    var document_three = this.document_three.split(',')[1];
                    this.documentBase64.push(document_three);
                    this.documentUploadThree = true;
                }
                else if (param == 4) {
                    this.document_four = result;
                    this.documentUploadFour = true;
                }
                else if (param == 5) {
                    this.document_five = result;
                    this.documentUploadFive = true;
                }
                else if (param == 6) {
                    this.document_six = result;
                    var document_six = this.document_six.split(',')[1];
                    this.documentBase64.push(document_six);
                    this.documentUploadSix = true;
                }
                else if (param == 7) {
                    this.document_seven = result;
                    var document_seven = this.document_seven.split(',')[1];
                    this.documentBase64.push(document_seven);
                    this.documentUploadSeven = true;
                }
                else if (param == 8) {
                    this.document_eight = result;
                    var document_eight = this.document_eight.split(',')[1];
                    this.documentBase64.push(document_eight);
                    this.documentUploadEight = true;
                }
                else if (param == 9) {
                    this.document_nine = result;
                    var document_nine = this.document_nine.split(',')[1];
                    this.documentBase64.push(document_nine);
                    this.documentUploadNine = true;
                }
                else if (param == 10) {
                    this.document_ten = result;
                    var document_ten = this.document_ten.split(',')[1];
                    this.documentBase64.push(document_ten);
                    this.documentUploadTen = true;
                }
                else if (param == 11) {
                    this.document_eleven = result;
                    var document_eleven = this.document_eleven.split(',')[1];
                    this.documentBase64.push(document_eleven);
                    this.documentUploadEleven = true;
                }
                else if (param == 12) {
                    this.document_twelve = result;
                    var document_twelve = this.document_twelve.split(',')[1];
                    this.documentBase64.push(document_twelve);
                    this.documentUploadTwelve = true;
                }
            });
        })
            .catch((err) => console.error(err));
    }
    getImageFromGallery(param) {
        this.imageService
            .selectImageInGallery()
            .then((imageData) => {
            var base64 = `data:image/png;base64,${imageData}`;
            this.imageCompress.compressFile(base64, 0, 50, 50).then((result) => {
                if (param == 0) {
                    this.document_oneLicencePlate = result;
                    var document_oneLicencePlate = this.document_one.split(',')[1];
                    this.document_oneLicencePlateToShow = result;
                    this.documentBase64.push(document_oneLicencePlate);
                    //this.documentUploadOne = true;
                }
                else if (param == 1) {
                    this.document_one = result;
                    var document_one = this.document_one.split(',')[1];
                    this.documentBase64.push(document_one);
                }
                else if (param == 2) {
                    this.document_two = result;
                    var document_two = this.document_two.split(',')[1];
                    this.documentBase64.push(document_two);
                }
                else if (param == 3) {
                    this.document_three = result;
                    var document_three = this.document_three.split(',')[1];
                    this.documentBase64.push(document_three);
                }
                else if (param == 4) {
                    this.document_four = result;
                    this.documentUploadFour = true;
                }
                else if (param == 5) {
                    this.document_five = result;
                    this.documentUploadFive = true;
                }
                else if (param == 6) {
                    this.document_six = result;
                    var document_six = this.document_six.split(',')[1];
                    this.documentBase64.push(document_six);
                    this.documentUploadSix = true;
                }
                else if (param == 7) {
                    this.document_seven = result;
                    var document_seven = this.document_seven.split(',')[1];
                    this.documentBase64.push(document_seven);
                    this.documentUploadSeven = true;
                }
                else if (param == 8) {
                    this.document_eight = result;
                    var document_eight = this.document_eight.split(',')[1];
                    this.documentBase64.push(document_eight);
                    this.documentUploadEight = true;
                }
                else if (param == 9) {
                    this.document_nine = result;
                    var document_nine = this.document_nine.split(',')[1];
                    this.documentBase64.push(document_nine);
                    this.documentUploadNine = true;
                }
                else if (param == 10) {
                    this.document_ten = result;
                    var document_ten = this.document_ten.split(',')[1];
                    this.documentBase64.push(document_ten);
                    this.documentUploadTen = true;
                }
                else if (param == 11) {
                    this.document_eleven = result;
                    var document_eleven = this.document_eleven.split(',')[1];
                    this.documentBase64.push(document_eleven);
                    this.documentUploadEleven = true;
                }
                else if (param == 12) {
                    this.document_twelve = result;
                    var document_twelve = this.document_twelve.split(',')[1];
                    this.documentBase64.push(document_twelve);
                    this.documentUploadTwelve = true;
                }
            });
        })
            .catch((err) => console.error(err));
    }
    goToHome() {
        this.router.navigate(['/listed-car']);
    }
    validateStartDate() {
        setTimeout(() => {
            this.dateStartError = false;
            /**** end date ****/
            this.active_end_date = document.querySelector('.end_date .activeEndState').textContent;
            let cEndDate = new Date(this.currentYear, this.endmonthCounter - 1, this.active_end_date).getTime();
            /**** end date ****/
            this.active_start_date = document.querySelector('.start_date .activeState').textContent;
            let cDate = new Date(this.currentYear, this.startmonthCounter - 1, this.active_start_date).getTime();
            if (cDate > cEndDate) {
                this.dateStartError = true;
            }
        }, 300);
    }
    validateEndDate() {
        setTimeout(() => {
            this.dateStartError = false;
            this.active_start_date = document.querySelector('.start_date .activeState').textContent;
            let cStartDate = new Date(this.currentYear, this.startmonthCounter - 1, this.active_start_date).getTime();
            this.active_end_date = document.querySelector('.end_date .activeEndState').textContent;
            let cDate = new Date(this.currentYear, this.endmonthCounter - 1, this.active_end_date).getTime();
            if (cStartDate > cDate) {
                this.dateStartError = true;
            }
        }, 300);
    }
    slidePrev() {
        this.start_month_index--;
        if (this.start_month_index < 1) {
            this.currentYear = this.currentYear - 1;
            this.start_month_index = 12;
        }
        this.start_date_month = this.monthList(this.start_month_index);
        this.startMonthCounter = this.start_month_index;
        this.validateStartDate();
        //  this.startSlides.slidePrev();
    }
    slideNext() {
        this.start_month_index++;
        if (this.start_month_index == 13) {
            this.currentYear = this.currentYear + 1;
            this.start_month_index = 1;
        }
        this.start_date_month = this.monthList(this.start_month_index);
        this.startMonthCounter = this.start_month_index;
        this.validateStartDate();
        //  this.startSlides.slideNext();
    }
    slidePrev2() {
        this.end_month_index--;
        if (this.end_month_index < 1) {
            this.currentYearTwo = this.currentYearTwo - 1;
            this.end_month_index = 12;
        }
        this.end_date_month = this.monthList(this.end_month_index);
        this.endMonthCounter = this.end_month_index;
        this.validateEndDate();
        // end_month_index
        // this.endSlides.slidePrev();
    }
    slideNext2() {
        this.end_month_index++;
        if (this.end_month_index == 13) {
            this.currentYearTwo = this.currentYearTwo + 1;
            this.end_month_index = 1;
        }
        this.end_date_month = this.monthList(this.end_month_index);
        this.endMonthCounter = this.end_month_index;
        this.validateEndDate();
    }
    monthList(param) {
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
    /*  invalidDates=[
       '2021-06-10',
       '2021-06-13'] */
    newDate() {
        var ddff = moment__WEBPACK_IMPORTED_MODULE_9__(this.dateRange.from);
        var dateStart = ddff.format('YYYY-MM-DD');
        this.start_date = dateStart;
        var dd = moment__WEBPACK_IMPORTED_MODULE_9__(this.dateRange.to);
        var dateEnd = dd.format('YYYY-MM-DD');
        this.end_date = dateEnd;
    }
    showPopup(val) {
        this.popupHidden = false;
        this.popupSelectedVal = val;
    }
    hidePopup() {
        this.popupHidden = true;
    }
    CameraSelected() {
        this.takeImageFromCamera(this.popupSelectedVal);
        this.hidePopup();
    }
    GalerySelected() {
        this.uploadDocumentsPhotos(this.popupSelectedVal);
        this.hidePopup();
    }
    uploadDocumentsPhotos(params) {
        this.pickCustome1image(params);
    }
    pickCustome1image(param) {
        var options = {
            maximumImagesCount: 1,
            outputType: 1,
            quality: 90,
        };
        this.imagePicker.getPictures(options).then((result) => {
            var base64 = `data:image/png;base64,${result}`;
            // this.imageCompress.compressFile(base64, 0, 80, 80).then((result) => {
            if (param == 0) {
                this.document_oneLicencePlate = result;
                var document_oneLicencePlate = this.document_one.split(',')[1];
                this.document_oneLicencePlateToShow = result;
                this.documentBase64.push(document_oneLicencePlate);
                //this.documentUploadOne = true;
            }
            else if (param == 1) {
                this.document_one = base64;
                var document_one = this.document_one.split(',')[1];
                this.documentBase64.push(document_one);
                this.documentUploadOne = true;
            }
            else if (param == 2) {
                this.document_two = base64;
                var document_two = this.document_two.split(',')[1];
                this.documentBase64.push(document_two);
                this.documentUploadTwo = true;
            }
            else if (param == 3) {
                this.document_three = base64;
                var document_three = this.document_three.split(',')[1];
                this.documentBase64.push(document_three);
                this.documentUploadThree = true;
            }
            else if (param == 4) {
                this.document_four = base64;
                this.documentUploadFour = true;
            }
            else if (param == 5) {
                this.document_five = base64;
                this.documentUploadFive = true;
            }
            else if (param == 6) {
                this.document_six = base64;
                var document_six = this.document_six.split(',')[1];
                this.documentBase64.push(document_six);
                this.documentUploadSix = true;
            }
            else if (param == 7) {
                this.document_seven = base64;
                var document_seven = this.document_seven.split(',')[1];
                this.documentBase64.push(document_seven);
                this.documentUploadSeven = true;
            }
            else if (param == 8) {
                this.document_eight = base64;
                var document_eight = this.document_eight.split(',')[1];
                this.documentBase64.push(document_eight);
                this.documentUploadEight = true;
            }
            else if (param == 9) {
                this.document_nine = base64;
                var document_nine = this.document_nine.split(',')[1];
                this.documentBase64.push(document_nine);
                this.documentUploadNine = true;
            }
            else if (param == 10) {
                this.document_ten = base64;
                var document_ten = this.document_ten.split(',')[1];
                this.documentBase64.push(document_ten);
                this.documentUploadTen = true;
            }
            else if (param == 11) {
                this.document_eleven = base64;
                var document_eleven = this.document_eleven.split(',')[1];
                this.documentBase64.push(document_eleven);
                this.documentUploadEleven = true;
            }
            else if (param == 12) {
                this.document_twelve = base64;
                var document_twelve = this.document_twelve.split(',')[1];
                this.documentBase64.push(document_twelve);
                this.documentUploadTwelve = true;
            }
            // });
        }, (err) => {
            console.log(err, "error in images??");
        });
    }
    previewImage(image) {
        console.log('photo viewer');
        this.imageToShow = image;
        this.showSlide = 'yes';
        this.indexOfSLide = 1;
        //this.photoViewer.show(this.base_urls + '' + p);
    }
    closeModel() {
        this.showSlide = 'no';
    }
};
EditListYourCarPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _cameraimage_service__WEBPACK_IMPORTED_MODULE_5__["CameraimageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: ngx_image_compress__WEBPACK_IMPORTED_MODULE_8__["NgxImageCompressService"] },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_1__["ImagePicker"] }
];
EditListYourCarPage.propDecorators = {
    startSlides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['startSlides', { read: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"] },] }],
    endSlides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['endSlides',] }]
};
EditListYourCarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-edit-list-your-car',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit-list-your-car.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-list-your-car/edit-list-your-car.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit-list-your-car.page.scss */ "./src/app/edit-list-your-car/edit-list-your-car.page.scss")).default]
    })
], EditListYourCarPage);



/***/ })

}]);
//# sourceMappingURL=edit-list-your-car-edit-list-your-car-module-es2015.js.map