import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  IonSlides,
  LoadingController,
  NavController,
  Platform,
} from "@ionic/angular";
import {
  AlertController,
  MenuController,
  PopoverController,
  ToastController,
} from "@ionic/angular";
import { CameraimageService } from "../cameraimage.service";
import { RestService } from "../rest.service";
import { Storage } from "@ionic/storage";
import { NgxImageCompressService } from "ngx-image-compress";
import { ImagePicker } from "@ionic-native/image-picker/ngx";
import * as moment from "moment";
import zh from "@angular/common/locales/zh";
import { registerLocaleData } from "@angular/common";
registerLocaleData(zh);
import { CalendarComponentOptions } from "ion2-calendar";
import { Location } from "@angular/common";
import {
  FileTransfer,
  FileUploadOptions,
  FileTransferObject,
} from "@ionic-native/file-transfer/ngx";

@Component({
  selector: "app-list-your-car",
  templateUrl: "./list-your-car.page.html",
  styleUrls: ["./list-your-car.page.scss"],
})
export class ListYourCarPage implements OnInit {
  @ViewChild("startSlides") startSlides: IonSlides;
  @ViewChild("endSlides") endSlides: IonSlides;
  option1 = {
    loop: true,
    slidesPerView: 8,
  };
  response: any;
  model: any;
  make: any;
  fuel_type: any;
  gear_type: any;
  roof_type: any;
  countries: any;
  languages: any;
  Model: any;
  Make: any;
  LicensePlate: any;
  Description: any;
  Seats: any;
  Gas: any;
  GearType: any;
  Convertable: any;
  wheels: any;
  other_features: any;
  about: any;
  Lives: any;
  work: any;
  Language: any;
  start_date: string;
  end_date: string;
  dropoff: any;
  pickup: any;
  document_one: any = "";
  document_two: any = "";
  document_three: any = "";
  document_four: any = "";
  document_five: any = "";
  ModelError: boolean;
  MakeError: boolean;
  LicensePlateError: boolean;
  LicensePlateUnique: boolean;
  document_oneError: boolean;
  document_twoError: boolean;
  document_threeError: boolean;
  DescriptionError: boolean;
  SeatsError: boolean;
  GasError: boolean;
  GearTypeError: boolean;
  ConvertableError: boolean;
  wheelsError: boolean;
  other_featuresError: boolean;
  aboutError: boolean;
  LivesError: boolean;
  workError: boolean;
  LanguageError: boolean;
  RouteError: boolean;
  document_fourError: boolean;
  document_fiveError: boolean;
  ChargesInfoError: boolean;
  ChargesInfo: string;
  month: string;
  start_date_month: string = "";
  end_date_month: string = "";
  start_month_index: number = 1;
  end_month_index: number = 1;
  userID: any;
  Email: any;
  //  documentBase64: Array<String> = [];
  documentBase64 = [];
  Door: any;
  DoorError: boolean;
  days: Array<any> = [];
  currentYear: number;
  currentYearTwo: number;
  monthCounter: number = 1;
  base_url: any;
  sliderStartBoolean: any;
  sliderEndBoolean: any;
  document_sixError: boolean;
  document_sevenError: boolean;
  document_six: any = "";
  document_seven: any = "";
  validation: boolean = false;
  loading: HTMLIonLoadingElement;
  max_price: any;
  min_price: any;
  pickuplong: any;
  pickuplat: any;
  dropofflong: any;
  indexOfSLide = 1;
  showSlide: any = 'no';
  dropofflat: any;
  fieldMissing: boolean = false;
  endMonthCounter: number;
  startMonthCounter: number;
  currencyID: any;
  currency_symbol: any;
  active_end_date: any;
  endmonthCounter: number = 1;
  active_start_date: any = 1;
  startmonthCounter: number = 1;
  uploadedImages = [];
  dateStartError: boolean;
  base64upload = [];
  document_onewww: any;

  image1: any = "";
  image2: any = "";
  image3: any = "";
  image4: any = "";
  image5: any = "";
  image6: any = "";
  image7: any = "";
  plateformCheck: any;
  onceFilled: any;
  wheelss: any;
  doors: any;
  seats: any;

  mobileNum: any = "";

  oneDataSet: any = "";

  comfort: any = "";
  // comfortArray = [
  //   { comfort_id: '1', comfort: 'Comfort' },
  //   { comfort_id: '2', comfort: 'Business Class' },
  //   { comfort_id: '3', comfort: 'Deluxe' },
  //   { comfort_id: '4', comfort: 'Super Deluxe' },
  // ];
  comfortArray = [];
  // carTypeArray = [
  //   { type_id: '1', type: 'Van' },
  //   { type_id: '2', type: 'Mini Van' },
  //   { type_id: '3', type: 'SUV' },
  //   { type_id: '4', type: 'Truck' },
  // ];
  carTypeArray = [];
  carType: any = "";

  popupHidden: boolean = true;
  popupSelectedVal: any;

  constructor(
    public loadingController: LoadingController,
    public activatedRoute: ActivatedRoute,
    public popoverController: PopoverController,
    private storage: Storage,
    public toastController: ToastController,
    public router: Router,
    public restService: RestService,
    public alertCtrl: AlertController,
    public imageService: CameraimageService,
    public menuCtrl: MenuController,
    private imageCompress: NgxImageCompressService,
    public imagePicker: ImagePicker,
    public platform: Platform,
    public location: Location,
    public navCtrl: NavController,
    private transfer: FileTransfer
  ) {
    // geting car types
    this.getCarTypes();
    var month = new Date().getMonth() + 1;
    var getname = this.monthList(month);
    this.start_date_month = getname;
    this.end_date_month = getname;
    this.end_month_index = month;
    this.startMonthCounter = month;
    this.endMonthCounter = month;
    this.days = Array.from({ length: 30 }, (v, k) => k + 1);
  }

  ngOnInit() {
    // Image pikcer permission
    this.imagePicker.requestReadPermission();
    // Image pikcer permission
    if (this.platform.is("ios")) {
      this.plateformCheck = "ios";
    } else {
      this.plateformCheck = "android";
    }
    this.getDropDownData();
    this.storage.get("user_details").then((user_details) => {
      console.log(user_details);
      this.userID = user_details.users_id;
      this.Email = user_details.email;

      this.about = user_details.about;
      this.work = user_details.work;
      this.currencyID = user_details.currencies_id;
      setTimeout(() => {
        this.Language = user_details.languages_id;
        this.Lives = user_details.countries_id;
        console.log("ok");
      }, 2000);
      this.storage.get("base_urls").then((base_url) => {
        this.base_url = base_url;
        this.storage.get("currency_symbol").then((currency_symbol) => {
          this.currency_symbol = currency_symbol;
        });
      });
    });

    this.currentYear = new Date().getFullYear();
    this.currentYearTwo = new Date().getFullYear();
    this.getStartIndex(1);
    this.getEndIndex(1);

    this.storage.get("lastVeh").then((lastVeh) => {
      this.lastVeh = lastVeh;
    });
  }
  async ionViewWillEnter() {
    this.storage.get("pickup").then((pickup) => {
      this.storage.get("dropoff").then((dropoff) => {
        this.storage.get("pickuplong").then((pickuplong) => {
          this.storage.get("pickuplat").then((pickuplat) => {
            this.storage.get("dropofflong").then((dropofflong) => {
              this.storage.get("dropofflat").then((dropofflat) => {
                this.pickup = pickup;
                this.dropoff = dropoff;
                this.pickuplong = pickuplong;
                this.pickuplat = pickuplat;
                this.dropofflong = dropofflong;
                this.dropofflat = dropofflat;
              });
            });
          });
        });
      });
    });
    this.onceFilled = await this.storage.get("onceFilled");
  }

  getCarTypes() {
    var stringys = JSON.stringify({
      requestType: "get_parts_details",
    });
    console.log(stringys);
    this.restService.get_parts_details(stringys).subscribe(
      (response) => {
        let resee = JSON.parse(response["_body"]);

        console.log("carTypes", resee);
        this.carTypeArray = resee.car_types;
        this.comfortArray = resee.car_classes;
      },
      (err) => {}
    );
  }
  previewImage(p) {
    console.log('photo viewer');

    this.showSlide = 'yes';

    this.indexOfSLide = 1;

    //this.photoViewer.show(this.base_urls + '' + p);
  }

  closeModel() {
    this.showSlide = 'no';
  }
  checkingLiNo() {
    var stringys = JSON.stringify({
      requestType: "check_license_plate",
      licenseText: this.LicensePlate,
      veh_id: null,
    });
    console.log(stringys);
    this.restService.getDdlData(stringys).subscribe(
      (response) => {
        this.response = JSON.parse(response["_body"]);
        if (this.response.msg == "exist") {
          this.LicensePlateUnique = true;
        } else {
          this.LicensePlateUnique = false;
        }
        console.log("check_license_plate Response", this.response);
      },
      (err) => {}
    );
  }
  getStartIndex(i) {
    this.sliderStartBoolean = i;
    console.log(this.sliderEndBoolean, "nice days start");
    this.validateStartDate();
  }
  getEndIndex(i) {
    this.sliderEndBoolean = i;
    console.log(this.sliderEndBoolean, "nice days ");
    this.validateEndDate();
  }
  goToLocation() {
    var myData = JSON.stringify({
      location: "/list-your-car",
    });
    this.router.navigate(["/location"], {
      queryParams: {
        value: myData,
      },
    });
  }
  getDropDownData() {
    var stringy = JSON.stringify({
      requestType: "list_car_page",
    });
    console.log(stringy);
    this.restService.getDdlData(stringy).subscribe(
      (response) => {
        this.response = JSON.parse(response["_body"]);
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

        console.log(this.response);
      },
      (err) => {}
    );
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
      this.workError = false;
      this.LanguageError = false;
      this.RouteError = false;
      this.ChargesInfoError = false;

      if (this.LicensePlate == "" || this.LicensePlate == undefined) {
        this.LicensePlateError = true;
        return false;
      } else if (this.LicensePlateUnique == true) {
        return false;
      } else if (this.Description == "" || this.Description == undefined) {
        this.DescriptionError = true;
        return false;
      } else if (this.Seats == "" || this.Seats == undefined) {
        this.SeatsError = true;
        return false;
      } else if (this.Door == "" || this.Door == undefined) {
        this.DoorError = true;
        return false;
      } else if (this.Gas == "" || this.Gas == undefined) {
        this.GasError = true;
        return false;
      } else if (this.GearType == "" || this.GearType == undefined) {
        this.GearTypeError = true;
        return false;
      } else if (this.Convertable == "" || this.Convertable == undefined) {
        this.ConvertableError = true;
        return false;
      } else if (this.wheels == "" || this.wheels == undefined) {
        this.wheelsError = true;
        return false;
      } else if (
        this.other_features == "" ||
        this.other_features == undefined
      ) {
        this.other_featuresError = true;
        return false;
      } else if (this.document_one == "" || this.document_one == undefined) {
        this.document_oneError = true;
        return false;
      } else {
        return true;
      }
    }
  }

  lastVeh: any;
  deletePreviousImg() {
    var deleteStringy = JSON.stringify({
      requestType: "delete_images",
      carImagesArray: this.uploadedImages,
    });
    console.log(deleteStringy, "deleteStringydeleteStringy");
    this.restService.saveListVehicles(deleteStringy).subscribe(
      (response) => {
        this.response = JSON.parse(response["_body"]);
        console.log(response["_body"]);
        if (this.response.status == "error") {
        } else if (this.response.status == "success") {
          console.log(this.uploadedImages, "after deleting");
          this.onceFilled = null;
        }
      },
      (err) => {
        alert("request error");
        this.dismiss();
      }
    );
  }
  async goToNext() {
    this.documentBase64 = [];
    this.uploadedImages = [];
    this.validation = true;
    if (this.validateForm() == true) {
      this.fieldMissing = false;
      this.documentBase64.push(this.document_one);
      let interval = 0;
      let loading = await this.loadingController.create({
        cssClass: "ionloading",
        message: "Uploading images...",
      });
      await loading.present();
      const that = this;

      const fileTransfer: FileTransferObject = that.transfer.create();
      const random = new Date().getTime();
      console.log(random, "time_stamptime_stamp");
      const options: FileUploadOptions = {
        fileKey: "photo",
        fileName: "imglicense_" + "_" + this.userID + "_" + random + ".jpg",
        chunkedMode: false,
        httpMethod: "post",
        mimeType: "image/jpeg",

        params: {
          image: "YPOP",
        },
      };
      fileTransfer
        .upload(
          that.document_one,
          "https://app.transusdrives.com/webservices/upload_image",
          options
        )
        .then(
          async (data: any) => {
            const img = JSON.parse(data.response);
            console.log("uploadig images", data);
            var APIdata = JSON.stringify({
              requestType: "patch_4",
              vehicles_id: localStorage.getItem("vinNumberCarID"),
              license_img: img.message,
              license_plate: this.LicensePlate,
              mobile_number: this.mobileNum,
              description: this.Description,
              no_seat: this.Seats,
              no_door: this.Door,
              gas: this.Gas,
              engine: this.GearType,
              convertable: this.Convertable,
              no_wheel: this.wheels,
              other_feacture: this.other_features,
              comfort: this.comfort,
              carType: this.carType,
            });

            console.log("outgoing Data", APIdata);

            this.restService.listYourCarAPI(APIdata).subscribe(
              (responseData: any) => {
                console.log("incomming response list-your-car", responseData);

                loading.dismiss();

                this.oneDataSet = JSON.parse(responseData["_body"]);
                console.log(this.oneDataSet, "getiing from oneset");

                if (this.oneDataSet.status == "success") {
                  localStorage.setItem(
                    "vinNumberCarID",
                    this.oneDataSet.vehicle_id.toString()
                  );
                  that.navCtrl.navigateForward("car-documents");
                }
              },
              (err) => {
                loading.dismiss();
              }
            );
          },
          (err) => {
            loading.dismiss();
            console.log("Error");
            console.log(err);
            return;
          }
        );
    } else {
      this.fieldMissing = true;
    }
  }

  uploadDocumentsPhotos(params) {
    this.pickCustome1image(params);
  }
  pickCustome1image(custNum) {
    var options = {
      maximumImagesCount: 1,
      outputType: 1,
      quality: 90,
    };
    this.imagePicker.getPictures(options).then(
      (imageData) => {
        var base64 = `data:image/png;base64,${imageData}`;
        // this.imageCompress.compressFile(base64, 0, 80, 80).then((result) => {
        if (custNum == 1) {
          this.image1 = imageData;
          this.document_one = base64;
        }
        // });
      },
      (err) => {
        console.log(err, "error in images??");
      }
    );
  }

  takeImageFromCamera(param) {
    var options = {
      maximumImagesCount: 1,
      outputType: 1,
      quality: 90,
    };
    this.imageService.selectImageInCamera().then(
      (imageData) => {
        var base64 = `data:image/png;base64,${imageData}`;
        // this.imageCompress.compressFile(base64, 0, 80, 80).then((result) => {
        console.log(base64);
        console.log(
          "Size in bytes is now:",
          this.imageCompress.byteCount(base64)
        );
        if (param == 1) {
          this.image1 = imageData;
          this.document_one = base64;
        }
        // });
      },
      (err) => {
        console.log("imagepicker  now:", err);
      }
    );
    //   }).catch(err => console.error(err));
  }

  validateStartDate() {
    setTimeout(() => {
      this.dateStartError = false;

      /**** end date ****/
      this.active_end_date = document.querySelector(
        ".end_date .activeEndState"
      )?.textContent;
      let cEndDate = new Date(
        this.currentYear,
        this.endmonthCounter - 1,
        this.active_end_date
      ).getTime();
      /**** end date ****/
      this.active_start_date = document.querySelector(
        ".start_date .activeState"
      )?.textContent;
      let cDate = new Date(
        this.currentYear,
        this.startmonthCounter - 1,
        this.active_start_date
      ).getTime();

      if (cDate > cEndDate) {
        console.log("start date ");
        this.dateStartError = true;
        console.log(this.dateStartError);
        //this.validateEndDate();
      }
    }, 300);
  }
  validateEndDate() {
    setTimeout(() => {
      this.dateStartError = false;

      this.active_start_date = document.querySelector(
        ".start_date .activeState"
      )?.textContent;
      let cStartDate = new Date(
        this.currentYear,
        this.startmonthCounter - 1,
        this.active_start_date
      ).getTime();

      this.active_end_date = document.querySelector(
        ".end_date .activeEndState"
      )?.textContent;
      let cDate = new Date(
        this.currentYear,
        this.endmonthCounter - 1,
        this.active_end_date
      ).getTime();

      if (cStartDate > cDate) {
        console.log("end date ");
        this.dateStartError = true;
        console.log(this.dateStartError);
      }
    }, 300);
  }
  goToHome() {
    // this.router.navigate(['/listed-car']);
    this.location.back();
  }

  slidePrev() {
    this.start_month_index--;
    if (this.start_month_index < 1) {
      this.currentYear = this.currentYear - 1;
      this.start_month_index = 12;
    }
    this.start_date_month = this.monthList(this.start_month_index);
    this.startMonthCounter = this.start_month_index;
    // this.startSlides.slidePrev();
    this.validateStartDate();
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
    // this.startSlides.slideNext();
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
    // this.endSlides.slideNext();
  }

  monthList(param) {
    // console.log(param);
    //param = parseInt(param)+1;

    if (param == 1) {
      this.month = "January";
    } else if (param == 2) {
      this.month = "February";
    } else if (param == 3) {
      this.month = "March";
    } else if (param == 4) {
      this.month = "April";
    } else if (param == 5) {
      this.month = "May";
    } else if (param == 6) {
      this.month = "June";
    } else if (param == 7) {
      this.month = "July";
    } else if (param == 8) {
      this.month = "August";
    } else if (param == 9) {
      this.month = "September";
    } else if (param == 10) {
      this.month = "October";
    } else if (param == 11) {
      this.month = "November";
    } else if (param == 12) {
      this.month = "December";
    }
    return this.month;
  }
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: "top",
    });
    toast.present();
  }
  async present() {
    this.loading = await this.loadingController.create({
      message: "Please wait...",
    });
    await this.loading.present();
  }

  async dismiss() {
    await this.loading.dismiss();
  }
  dateMulti: string[];
  type: "string";
  optionsRange: CalendarComponentOptions = {
    pickMode: "range",
  };
  dateRange: { from: string; to: string };

  invalidDates = ["2021-06-10", "2021-06-13"];
  newDate() {
    var ddff = moment(this.dateRange.from);
    var dateStart = ddff.format("YYYY-MM-DD");
    console.log(dateStart);
    this.start_date = dateStart;
    var dd = moment(this.dateRange.to);
    var dateEnd = dd.format("YYYY-MM-DD");
    //  console.log(dd)

    this.end_date = dateEnd;
    console.log(this.start_date);
    console.log(this.end_date);
  }

  showPopup(val) {
    this.popupHidden = false;
    console.log(val);
    this.popupSelectedVal = val;
  }

  hidePopup() {
    this.popupHidden = true;
  }

  CameraSelected() {
    console.log("popup cal", this.popupSelectedVal);
    this.takeImageFromCamera(this.popupSelectedVal);
    this.hidePopup();
  }
  GalerySelected() {
    console.log("popup cal", this.popupSelectedVal);
    this.uploadDocumentsPhotos(this.popupSelectedVal);
    this.hidePopup();
  }
}
