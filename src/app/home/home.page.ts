import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { OneSignal } from "@ionic-native/onesignal/ngx";
import { SocialSharing } from "@ionic-native/social-sharing/ngx";
import {
  LoadingController,
  MenuController, 
  NavController,
  PopoverController,
} from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { AcceptOfferPage } from "../accept-offer/accept-offer.page";
import { RestService } from "../rest.service";
import { ToastLoaderService } from "../toast-loader.service";
import { UsersService } from "../users.service";
import { Gesture, GestureController } from "@ionic/angular";
import * as moment from "moment";
@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  pet: string = "puppies";
  option1 = {
    loop: true,
    direction: "vertical",
    slidesPerView: 2,
  };
  userID: any = "";
  response: any;
  base_urls: any = "https://app.transusdrives.com/";
  car_types: any;
  top_rated_cars: any = [];
  top_rated_motors: any;
  notifications: any;
  user_name: any; 
  currencyID: any;
  currency_symbol: any;

  loading: HTMLIonLoadingElement;
  sliderStartBoolean: number;
  timeZone: any;
  //baseUrl: string = 'https://app.transusdrives.com/';
  baseUrl: string = "https://app.transusdrives.com/";
  page_number_all: number = 0;
  currencies_id: any = "";
  loadingPresent: any;
  shareText: any;

  constructor(
    public loadingController: LoadingController,
    private storage: Storage,
    public router: Router,
    public menuCtrl: MenuController,
    public restService: RestService,
    public popoverController: PopoverController,
    public oneSignal: OneSignal,
    public gestureCtrl: GestureController,
    public socialSharing: SocialSharing,
    public usersService: UsersService,
    public navCtrl: NavController
  ) {
    this.pet = "cars";
    this.storage.set("base_urls", this.baseUrl);
    this.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  ShowLoading: boolean = false;
  ngOnInit() {}
  @ViewChild("scroll") scroll: ElementRef;

  onMoveHandler(event) {
    if (event.deltaX < 0) {
      this.reloadRentedCars(true, event);
    }
  }

  oneSignalData: any;
  OneSignal_userid: any;
  oneSignal_pushToken: any;
  oneDataSet: any;
  userDetail: any;
  usersDetail: any;

  ionViewWillEnter(){
   
  this.restService.imageofuserprofile =  localStorage.getItem('imageofuserprofile');

  } 
  ionViewDidEnter() {
    const gesture: Gesture = this.gestureCtrl.create(
      {
        el: this.scroll.nativeElement,
        threshold: 15,
        gestureName: "my-gesture",
        onStart: (ev) => this.onMoveHandler(ev),
      },
      true
    );
    gesture.enable();
    this.present();
    this.storage.get("user_details").then((user_details) => {
      this.usersDetail = user_details;
      if (user_details) {
        this.userDetail = user_details;
        var get_Setting = JSON.stringify({
          requestType: "get_core_settings",
        });
        this.restService.CoreSettingOneSignal(get_Setting).subscribe(
          (res) => {

            this.oneDataSet = JSON.parse(res["_body"]);
            this.oneSignal.startInit(
              this.oneDataSet.onesignal_app_key,
              this.oneDataSet.onesignal_server_id
            );
            this.oneSignal.inFocusDisplaying(
              this.oneSignal.OSInFocusDisplayOption.Notification
            );
            this.oneSignal.handleNotificationReceived().subscribe(() => {});
            this.oneSignal.handleNotificationOpened().subscribe(() => {});
            this.oneSignal.endInit();
            this.oneSignal.getIds().then((id) => {
              this.oneSignalData = id;
              this.OneSignal_userid = this.oneSignalData.userId;
              this.oneSignal_pushToken = this.oneSignalData.pushToken;
              var update = JSON.stringify({
                requestType: "user",
                email: this.userDetail.email,
                oneSignalID: this.OneSignal_userid,
              });

              this.restService.upDateOnesignal(update).subscribe(
                (res) => {
                  console.log(res, " update one signal");
                },
                (err) => {
                  console.log(err);
                }
              );
            });
          },
          (err) => {
            console.log(err);
          }
        );

        this.userID = user_details.users_id;

        this.currencies_id = user_details.currencies_id;
      }
    });
    this.storage.get("base_urls").then((base_urls) => {
      this.base_urls = base_urls;
      this.storage.get("user_details").then((user_details) => {
        this.storage.get("currency_symbol").then((currency_symbol) => {
          this.currency_symbol = currency_symbol;
          if (user_details) {
            this.userID = user_details.users_id;
            this.user_name = user_details.user_name;
            this.currencyID = user_details.currencies_id;
            this.homeData(false);
          } else {
            this.userID = "";
            this.getDropDownData();
          }
        });
      });
    });
  }
  showCar() {
    this.getStartIndex(this.sliderStartBoolean);
  }

  getStartIndex(i) {
    if (this.sliderStartBoolean == undefined) {
      this.sliderStartBoolean = i;
      setTimeout(() => {
        document
          .querySelector(".bg_active img")
          .setAttribute(
            "src",
            this.New_car_types[this.sliderStartBoolean].type_icon_img
          );
      }, 50);
    } else {
      document
        .querySelector(".bg_active img")
        .setAttribute(
          "src",
          this.New_car_types[this.sliderStartBoolean].type_icon_img
        );
    }
    this.sliderStartBoolean = i;
    setTimeout(() => {
      document
        .querySelector(".bg_active img")
        .setAttribute(
          "src",
          this.New_car_types[this.sliderStartBoolean].white_icon_img
        );
    }, 50);
  }

  getStartIndexClick(data, i) {
    this.sliderStartBoolean = i;
    if (this.sliderStartBoolean == undefined) {
      setTimeout(() => {
        document
          .querySelector(".bg_active img")
          .setAttribute(
            "src",
            this.New_car_types[this.sliderStartBoolean].white_icon_img
          );
        // this.ifFound();
        this.filterFound(data.car_types_id);
      }, 50);
    } else {
      setTimeout(() => {
        document
          .querySelector(".bg_active img")
          .setAttribute(
            "src",
            this.New_car_types[this.sliderStartBoolean].white_icon_img
          );

        this.filterFound(data.car_types_id);
      }, 50);
    }
  } 
  getDropDownData() {
    var stringy = JSON.stringify({
      requestType: "currencies",
    });
    this.restService.getDdlData(stringy).subscribe(
      (response) => {
        this.response = JSON.parse(response["_body"]);
        this.storage.set(
          "currency_symbol",
          this.response.default_currency.symbol
        );
        localStorage.setItem(
          "currencies_id",
          this.response.default_currency.currencies_id
        );

        this.currencyID = this.response.default_currency.currencies_id;
        this.homeData(false);
      },
      (err) => {}
    );
  }
  New_car_types = [];
  page_number: number = 0;
  pages_number: number = 4;
  reloadRentedCars(isFirstLoad, event?, refresher?) {
    if (this.pages_number == 4) {
      this.present();
    }
    var stringy = JSON.stringify({
      requestType: "home_page",
      usersID: this.userID,
      currencyID: this.currencyID,
      limit: 4,
      offset: this.pages_number,
      readFilter: "",
    });
    this.restService.homeData(stringy).subscribe(
      (response) => {
        this.New_car_types = [];
        if (this.pages_number == 4) {
          this.dismiss();
        }
        this.response = JSON.parse(response["_body"]);
        localStorage.setItem("shareText", this.response.text_to_share);
        this.New_car_types = this.response.car_types.sort((a, b) =>
          a.name.toString().localeCompare(b.name)
        );
        for (
          let i = 0;
          i < this.response.top_rated_cars.cars_list_result.length;
          i++
        ) {
          this.top_rated_cars.push(
            this.response.top_rated_cars.cars_list_result[i]
          );
        }

        this.pages_number = this.pages_number + 4;
      },
      (err) => {
        this.dismiss();
        // this.ShowLoading = false;
      }
    );
  }
  homeData(isFirstLoad, event?, refresher?) {
    var stringy = JSON.stringify({
      requestType: "home_page",
      usersID: this.userID,
      currencyID: this.currencyID,
      limit: 4,
      offset: this.page_number,
      readFilter: "",
    });
    this.restService.homeData(stringy).subscribe(
      (response) => {
        this.New_car_types = [];
        this.dismiss();
        this.response = JSON.parse(response["_body"]);
        localStorage.setItem("shareText", this.response.text_to_share);
        this.shareText = this.response.text_to_share;
        this.New_car_types = this.response.car_types;
        for (
          let i = 0;
          i < this.response.top_rated_cars.cars_list_result.length;
          i++
        ) {
          this.top_rated_cars.push(
            this.response.top_rated_cars.cars_list_result[i]
          );
        }
        if (isFirstLoad) {
          event.target.complete();
        }
        this.page_number = this.page_number + 4;
        this.top_rated_motors =
          this.response.top_rated_motors.motors_list_result;
        var stringfy = JSON.stringify({
          requestType: "get_all",
          usersID: this.userID,
          limit: 4,
          offset: 0,
          readFilter: "Unread",
          timeZone: this.timeZone,
        });
        this.restService.notifications(stringfy).subscribe(
          (response) => {
            this.response = JSON.parse(response["_body"]);
            this.dismiss();
            if (this.response.status != "NotFound") {
              this.dismiss();

              this.notifications = this.response.notifications;
              if (this.notifications.length == 1) {
                this.option1 = {
                  loop: false,
                  direction: "vertical",
                  slidesPerView: 1,
                };
              } else {
                this.option1 = {
                  loop: false,
                  direction: "vertical",
                  slidesPerView: 2,
                };
              }
            }


          },
          (err) => {
            this.dismiss();
          }
        );
      },
      (err) => {
        this.dismiss();
      }
    );

    var SearchingData = JSON.stringify({
      currencyID: this.currencyID,
      requestType: "all_veh",
      userID: this.userID,
      limit: 4,
      offset: this.page_number_all,
    });
    this.restService.allVehicles(SearchingData).subscribe((resSearching) => {
      this.responsess = JSON.parse(resSearching["_body"]);
      if (this.responsess.status == "NotFound") {
      } else if (this.responsess.status == "Found") {
      }
    });
  }
  responsess: any;
  ifFound() {
    var myData = JSON.stringify({
      cars_list_result: this.responsess.all_approved_cars,
    });
    this.restService.fromHomeToSearch = myData;
    this.restService.scroolFlag = true;
    this.navCtrl.navigateRoot(["/car-list"]);
  }

  filterCars: any;
  allser: any;
  compare(prop) {
    return function (a, b) {
      return -1; // sort stuff
    };
  }
  filterFound(id) {
    this.present();
    var data = JSON.stringify({
      currencyID: this.currencyID,
      requestType: "select_veh",
      carTypeID: id,
      usersID: this.userID,
    });
    this.restService.filterSearching(data).subscribe(
      (res) => {
        this.filterCars = res;
        this.allser = JSON.parse(this.filterCars["_body"]);
        var myData = JSON.stringify({
          cars_list_result: this.allser.selected_approved_car,
        });
        this.dismiss();
        this.restService.fromHomeToSearch = myData;
        this.router.navigate(["/car-list"]);
      },
      (err) => {
        this.dismiss();
        console.log(err);
      }
    );
  }
  gotoDetail(data) {
    var myData = JSON.stringify({
      cars_list_result: data,
      redirect: "/",
    });

    this.router.navigate(["/car-detail"], {
      queryParams: {
        value: myData,
      },
    });
  }
  toggleMenu() {
    this.menuCtrl.toggle();
  }
  carDetail() {
    this.router.navigate(["/car-detail"]);
  }
  goToFilter() {
    this.navCtrl.navigateRoot(["/filters"]);
  }
  GotoList() {
    this.storage.get("user_details").then((user_details) => {
      if (user_details) {
        this.router.navigate(["/list-your-bike"]);
      } else {
        this.router.navigate(["/login"]);
      }
    });
  }
  goToCarList() {
    if (this.usersDetail) {
      this.router.navigate(["/listed-car"]);
    } else {
      this.router.navigate(["/login"]);
    }
  }
  viewMotorDetail(p) {
    var myData = JSON.stringify({
      motor_detail: p,
    });
    this.router.navigate(["/view-bike-detail"], {
      queryParams: {
        value: myData,
      },
    });
  }
  refer() {
    window.open(
      "https://play.google.com/store/apps",
      "_system",
      "location=yes"
    );
  }
  viewAllNotifications() {
    this.storage.get("user_details").then((user_details) => {
      if (user_details) {
        var readall = JSON.stringify({
          requestType: "read_all",
          usersID: user_details.users_id,
        });
        this.restService.notifications(readall).subscribe(
          (res) => {
            this.usersService.noty_length = 0;
            this.navCtrl.navigateRoot(["/view-all-notifications"]);
          },
          (err) => {
            console.log(err);
          }
        );
        this.router.navigate(["/view-all-notifications"]);
      } else {
        this.router.navigate(["/login"]);
      }
    });
  }
  async present() {
    this.loading = await this.loadingController.create({
      message: "Please wait...",
    });
    await this.loading.present();
  }

  async presentTheloader() {
    this.loadingPresent = await this.loadingController.create({
      message: "Please wait...",
    });
    await this.loadingPresent.present();
  }

  async dismissTheLoader() {
    await this.loadingPresent.dismiss();
  }

  async dismiss() {
    await this.loading.dismiss();
  }

  accptOffer(p) {
    if (p.offer_id) {
      var stringy = JSON.stringify({
        requestType: "check_offer_by_id",
        customerID: this.userID,
        offerID: p.offer_id,
        currencyID: this.currencies_id,
      });
      this.restService.inquire_charges(stringy).subscribe(
        (response) => {
          this.response = JSON.parse(response["_body"]);
          if (this.response.status == "NotFound") {
          } else if (this.response.status == "Found") {
            this.offerPopup(this.response.offers, p.offer_id);
          }
        },
        (err) => {}
      );
    }

    if (p.type_id == "1" || p.type_id == "3") {
      var myData = JSON.stringify({
        userID: p.receiver_id,
        otherUserId: p.sender_id,
        user_name: p.sender_name,
        profile_img: p.sender_img_url,
      });
      this.router.navigate(["/chat-detail"], {
        queryParams: {
          value: myData,
        },
      });
    } else if (p.type_id == "2") {
      this.router.navigate(["/booking-list"]);
    } else if (
      p.type_id == "5" ||
      p.type_id == "6" ||
      p.type_id == "7" ||
      p.type_id == "8" ||
      p.type_id == "13"
    ) {
      this.router.navigate(["/listed-car"]);
    } else if (p.type_id == "9") {
      this.router.navigate(["/bookings"]);
    } else if (p.type_id == "10") {
      var gerValue = "cancel";
      this.router.navigate(["/other-booking-list"], {
        queryParams: {
          value: gerValue,
        },
      });
    } else if (p.type_id == "11") {
      var gerValue = "upcoming";
      this.router.navigate(["/booking-list"], {
        queryParams: {
          value: gerValue,
        },
      });
    } else if (p.type_id == "12") {
      this.router.navigate(["/other-booking-list"]);
    } else if (p.type_id == "14") {
      var gerValue = "cancel";
      this.router.navigate(["/booking-list"], {
        queryParams: {
          value: gerValue,
        },
      });
    }
  }

  async offerPopup(p, offer_id) {
    const popover = await this.popoverController.create({
      component: AcceptOfferPage,
      componentProps: {
        data: p,
        offer_id: offer_id,
      },
      translucent: true,
    });
    popover.onWillDismiss().then((data) => {
    });
    return await popover.present();
  }

  inviteFrnds() {
    var text = this.shareText;
    var options = {
      message:
        text +
        "\nAppstore -> https://apps.apple.com/ae/app/transus-transport-for-us-all/id1552863113\n\nPlaystore -> https://play.google.com/store/apps/details?id=com.transus.app",
    };

    this.socialSharing.shareWithOptions(options).then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
