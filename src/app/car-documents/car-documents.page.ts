import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  IonSlides,
  LoadingController,
  NavController,
  Platform,
} from '@ionic/angular';
import {
  AlertController,
  MenuController,
  PopoverController,
  ToastController,
} from '@ionic/angular';
import { CameraimageService } from '../cameraimage.service';
import { RestService } from '../rest.service';
import { Storage } from '@ionic/storage';
import { NgxImageCompressService } from 'ngx-image-compress';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import * as moment from 'moment';
import zh from '@angular/common/locales/zh';
import { registerLocaleData } from '@angular/common';
registerLocaleData(zh);
import { CalendarComponentOptions } from 'ion2-calendar';
import { Location } from '@angular/common';
import {
  FileTransfer,
  FileUploadOptions,
  FileTransferObject,
} from '@ionic-native/file-transfer/ngx';

@Component({
  selector: 'app-car-documents',
  templateUrl: './car-documents.page.html',
  styleUrls: ['./car-documents.page.scss'],
})
export class CarDocumentsPage implements OnInit {
  @ViewChild('startSlides') startSlides: IonSlides;
  @ViewChild('endSlides') endSlides: IonSlides;
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
  document_one: any = '';
  document_two: any = '';
  document_three: any = '';
  document_four: any = '';
  document_five: any = '';
  ModelError: boolean;
  MakeError: boolean;
  LicensePlateError: boolean;
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
  start_date_month: string = '';
  end_date_month: string = '';
  start_month_index: number = 1;
  end_month_index: number = 1;
  userID: any;
  Email: any;
  documentBase64: Array<String> = [];
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
  document_six: any = '';
  document_seven: any = '';
  validation: boolean = false;
  loading: HTMLIonLoadingElement;
  max_price: any;
  min_price: any;
  pickuplong: any;
  pickuplat: any;
  dropofflong: any;
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

  dateStartError: boolean;

  image1: any = '';
  image2: any = '';
  image3: any = '';
  image4: any = '';
  image5: any = '';
  image6: any = '';
  image7: any = '';
  plateformCheck: any;
  lastVeh: any;
  imgInsurence: any;
  imgRoadworthy: any;

  phoneNumError: boolean;
  phoneNum: any;

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
    var month = new Date().getMonth() + 1;
    console.log(month, 'date From Month');
    var getname = this.monthList(month);
    console.log('getmonth from monthlist', getname);

    this.start_date_month = getname;
    this.end_date_month = getname;
    this.end_month_index = month;

    this.startMonthCounter = month;
    this.endMonthCounter = month;
    this.days = Array.from({ length: 30 }, (v, k) => k + 1);
  }

  ngOnInit() {
    if (this.platform.is('ios')) {
      this.plateformCheck = 'ios';
    } else {
      this.plateformCheck = 'android';
    }
    this.getDropDownData();
    this.storage.get('user_details').then((user_details) => {
      console.log(user_details);
      this.userID = user_details.users_id;
      this.Email = user_details.email;

      this.about = user_details.about;
      this.work = user_details.work;
      this.currencyID = user_details.currencies_id;
      setTimeout(() => {
        this.Language = user_details.languages_id;
        this.Lives = user_details.countries_id;
        console.log('ok');
      }, 2000);
      this.storage.get('base_urls').then((base_url) => {
        this.base_url = base_url;
        this.storage.get('currency_symbol').then((currency_symbol) => {
          this.currency_symbol = currency_symbol;
        });
      });
    });
    this.storage.get('lastVeh').then((lastVeh) => {
      this.lastVeh = lastVeh;
    });

    this.currentYear = new Date().getFullYear();
    this.currentYearTwo = new Date().getFullYear();
    this.getStartIndex(1);
    this.getEndIndex(1);
  }
  async ionViewWillEnter() {
    this.pickup = await this.storage.get('pickup');
    this.dropoff = await this.storage.get('dropoff');
    this.pickuplong = await this.storage.get('pickuplong');
    this.pickuplat = await this.storage.get('pickuplat');
    this.dropofflong = await this.storage.get('dropofflong');
    this.dropofflat = await this.storage.get('dropofflat');

    this.Model = await this.storage.get('modelID');
    this.Make = await this.storage.get('makeID');
    this.LicensePlate = await this.storage.get('licensePlate');
    this.uploadedImages = await this.storage.get('carImages');
    this.Seats = await this.storage.get('noOfSeats');
    this.Description = await this.storage.get('description');
    this.Door = await this.storage.get('noOfDoors');
    this.Gas = await this.storage.get('fuelTypeID');
    this.GearType = await this.storage.get('gearTypeID');
    this.wheels = await this.storage.get('noOfWheels');
    this.Convertable = await this.storage.get('roofTypeID');
    this.other_features = await this.storage.get('otherFeatures');

    console.log(this.uploadedImages, 'this.uploadedImagesthis.uploadedImages');
  }
  getStartIndex(i) {
    this.sliderStartBoolean = i;
    console.log(this.sliderEndBoolean, 'nice days start');
    this.validateStartDate();
  }
  getEndIndex(i) {
    this.sliderEndBoolean = i;
    console.log(this.sliderEndBoolean, 'nice days ');
    this.validateEndDate();
  }
  goToLocation() {
    var myData = JSON.stringify({
      location: '/car-documents',
    });
    this.navCtrl.navigateForward('location', {
      queryParams: {
        value: myData,
      },
    });
  }
  getDropDownData() {
    var stringy = JSON.stringify({
      requestType: 'list_car_page',
    });
    console.log(stringy);
    this.restService.getDdlData(stringy).subscribe(
      (response) => {
        this.response = JSON.parse(response['_body']);
        this.model = this.response.model;
        this.make = this.response.make;
        this.fuel_type = this.response.fuel_type;
        this.gear_type = this.response.gear_type;
        this.roof_type = this.response.roof_type;
        this.countries = this.response.countries;
        this.languages = this.response.languages;

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
      this.phoneNumError = false;

      if (this.document_four == '' || this.document_four == undefined) {
        this.document_fourError = true;
        return false;
      } else if (this.document_five == '' || this.document_five == undefined) {
        this.document_fiveError = true;
        return false;
      } else if (this.about == '' || this.about == undefined) {
        this.aboutError = true;
        return false;
      } else if (this.Lives == '' || this.Lives == undefined) {
        this.LivesError = true;
        return false;
      } else if (this.work == '' || this.work == undefined) {
        this.workError = true;
        return false;
      } else if (this.Language == '' || this.Language == undefined) {
        this.LanguageError = true;
        return false;
      } else if (this.ChargesInfo == '' || this.ChargesInfo == undefined) {
        this.ChargesInfoError = true;
        return false;
      } else {
        if (this.end_date == '' || this.start_date == '') {
          this.dateStartError = true;
          console.log(this.dateStartError);
          console.log(this.start_date, 'start date');
          console.log(this.end_date, 'end date');
        } else {
          console.log(this.start_date, 'start date');
          console.log(this.end_date, 'end date');
          return true;
        }
      }
    }
  }
  uploadedImages: any;
  async uploadDocuments() {
    this.validation = true;
    if (this.validateForm() == true) {
      this.fieldMissing = false;
      var roadworthy = this.document_four.split(',')[1];
      var insurance = this.document_five.split(',')[1];
      const fileTransfer: FileTransferObject = this.transfer.create();
      const random = new Date().getTime();
      const optionRoad: FileUploadOptions = {
        fileKey: 'photo',
        fileName: 'imgroadworthy_' + '_' + this.userID + '_' + random + '.jpg',
        chunkedMode: false,
        httpMethod: 'post',
        mimeType: 'image/jpeg',
        params: {
          image: 'YPOP',
        },
      };
      const optionInsurance: FileUploadOptions = {
        fileKey: 'photo',
        fileName: 'imginsurance_' + '_' + this.userID + '_' + random + '.jpg',
        chunkedMode: false,
        httpMethod: 'post',
        mimeType: 'image/jpeg',
        params: {
          image: 'YPOP',
        },
      };
      let loading_uploading = await this.loadingController.create({
        cssClass: 'ionloading',
        message: 'Uploading images...',
      });
      await loading_uploading.present();

      fileTransfer
        .upload(
          this.document_four,
          'https://app.transusdrives.com/webservices/upload_image',
          optionInsurance
        )
        .then(
          (data: any) => {
            console.log(data.response, 'imgInsurenceimgInsurence');
            const img1 = JSON.parse(data.response);
            console.log(img1, 'InsurenceimgInsurence');
            this.imgInsurence = img1.message;
            console.log(
              this.imgInsurence,
              'this.imgInsurencethis.imgInsurence'
            );

            fileTransfer
              .upload(
                this.document_five,
                'https://app.transusdrives.com/webservices/upload_image',
                optionRoad
              )
              .then(
                async (res: any) => {
                  loading_uploading.dismiss();

                  console.log(res.response, 'imgRoadworthyimgRoadworthy');
                  const img2 = JSON.parse(res.response);
                  console.log(img2, 'mgRoadworthymgRoadworthy');
                  this.imgRoadworthy = img2.message;

                  console.log(
                    this.imgRoadworthy,
                    'this.imgRoadworthy this.imgRoadworthy'
                  );
                  this.submitForm();
                },
                (err) => {
                  console.log('Error');
                  loading_uploading.dismiss();
                  console.log(err);
                }
              );
          },
          (err) => {
            console.log('Error');
            loading_uploading.dismiss();
            console.log(err);
          }
        );
    } else {
      this.fieldMissing = true;
    }
  }

  submitForm() {
    this.validation = true;
    if (this.validateForm() == true) {
      this.present();
      this.fieldMissing = false;
      var stringy = JSON.stringify({
        requestType: 'patch_5',
        vehicles_id: localStorage.getItem('vinNumberCarID'),
        road_worthy_img: this.imgRoadworthy,
        insurance_img: this.imgInsurence,
        about: this.about,
        lives: this.Lives,
        work: this.work,
        language: this.Language,
        charges: this.ChargesInfo,
        start_date: this.start_date,
        end_date: this.end_date,
      });

      console.log(stringy, 'stringystringystringy');
      this.restService.listYourCarAPI(stringy).subscribe(
        (response) => {
          this.response = JSON.parse(response['_body']);
          console.log(response['_body']);
          //     alert(response['_body'])
          console.log(this.response.status);
          if (this.response.status == 'error') {
            this.dismiss();
            this.presentToast(this.response.msg);
          } else if (this.response.status == 'success') {
            this.presentToast('Documents Added Successfully');
            this.dismiss();
            //this.navCtrl.navigateRoot(['/']);

            this.navCtrl.navigateForward('listcar5');
          }
        },
        (err) => {
          alert('request error');
          this.dismiss();
        }
      );
    } else {
      this.fieldMissing = true;
    }
  }
  async uploadDocument(param) {
    this.takeImageFromCamera(param);
  }

  takeImageFromCamera(param) {
    var options = {
      maximumImagesCount: 1,
      outputType: 1,
      quality: 90,
    };

    this.imagePicker.getPictures(options).then(
      (imageData) => {
        var base64 = `data:image/png;base64,${imageData}`;
        // this.imageCompress.compressFile(base64, 0, 80, 80).then((result) => {
        if (param == 1) {
          this.image1 = imageData;
          this.document_one = base64;
        } else if (param == 2) {
          this.image2 = imageData;
          this.document_two = base64;
        } else if (param == 3) {
          this.image3 = imageData;
          this.document_three = base64;
        } else if (param == 4) {
          this.image4 = imageData;
          this.document_four = base64;
        } else if (param == 5) {
          this.image5 = imageData;
          this.document_five = base64;
        } else if (param == 6) {
          this.image6 = imageData;
          this.document_six = base64;
        } else if (param == 7) {
          this.image7 = imageData;
          this.document_seven = base64;
        }
        // });
      },
      (err) => {
        console.log('imagepicker  now:', err);
      }
    );
    //   }).catch(err => console.error(err));
  }

  takeImageFromCameraAli(param) {
    this.imageService.selectImageInCamera().then(
      (imageData) => {
        var base64 = `data:image/png;base64,${imageData}`;
        // this.imageCompress.compressFile(base64, 0, 80, 80).then((result) => {
        if (param == 1) {
          this.image1 = imageData;
          this.document_one = base64;
        } else if (param == 2) {
          this.image2 = imageData;
          this.document_two = base64;
        } else if (param == 3) {
          this.image3 = imageData;
          this.document_three = base64;
        } else if (param == 4) {
          this.image4 = imageData;
          this.document_four = base64;
        } else if (param == 5) {
          this.image5 = imageData;
          this.document_five = base64;
        } else if (param == 6) {
          this.image6 = imageData;
          this.document_six = base64;
        } else if (param == 7) {
          this.image7 = imageData;
          this.document_seven = base64;
        }
        // });
      },
      (err) => {
        console.log('imagepicker  now:', err);
      }
    );
    //   }).catch(err => console.error(err));
  }

  validateStartDate() {
    setTimeout(() => {
      this.dateStartError = false;

      /**** end date ****/
      this.active_end_date = document.querySelector(
        '.end_date .activeEndState'
      )?.textContent;
      let cEndDate = new Date(
        this.currentYear,
        this.endmonthCounter - 1,
        this.active_end_date
      ).getTime();
      /**** end date ****/
      this.active_start_date = document.querySelector(
        '.start_date .activeState'
      )?.textContent;
      let cDate = new Date(
        this.currentYear,
        this.startmonthCounter - 1,
        this.active_start_date
      ).getTime();

      if (cDate > cEndDate) {
        console.log('start date ');
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
        '.start_date .activeState'
      )?.textContent;
      let cStartDate = new Date(
        this.currentYear,
        this.startmonthCounter - 1,
        this.active_start_date
      )?.getTime();

      this.active_end_date = document.querySelector(
        '.end_date .activeEndState'
      )?.textContent;
      let cDate = new Date(
        this.currentYear,
        this.endmonthCounter - 1,
        this.active_end_date
      )?.getTime();

      if (cStartDate > cDate) {
        console.log('end date ');
        this.dateStartError = true;
        console.log(this.dateStartError);
      }
    }, 300);
  }
  goToHome() {
    // this.router.navigate(['/listed-car']);
    this.navCtrl.navigateBack(['/list-your-car']);
    //this.location.back();
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
      this.month = 'January';
    } else if (param == 2) {
      this.month = 'February';
    } else if (param == 3) {
      this.month = 'March';
    } else if (param == 4) {
      this.month = 'April';
    } else if (param == 5) {
      this.month = 'May';
    } else if (param == 6) {
      this.month = 'June';
    } else if (param == 7) {
      this.month = 'July';
    } else if (param == 8) {
      this.month = 'August';
    } else if (param == 9) {
      this.month = 'September';
    } else if (param == 10) {
      this.month = 'October';
    } else if (param == 11) {
      this.month = 'November';
    } else if (param == 12) {
      this.month = 'December';
    }
    return this.month;
  }
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: 'top',
    });
    toast.present();
  }
  async present() {
    this.loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    await this.loading.present();
  }

  async dismiss() {
    await this.loading.dismiss();
  }

  onChange(event) {
    console.log(event);
  }

  dateMulti: string[];
  type: 'string';
  optionsRange: CalendarComponentOptions = {
    pickMode: 'range',
  };
  dateRange: { from: string; to: string };

  invalidDates = ['2021-06-10', '2021-06-13'];
  newDate() {
    var ddff = moment(this.dateRange?.from);
    var dateStart = ddff.format('YYYY-MM-DD');
    console.log(dateStart);
    this.start_date = dateStart;
    var dd = moment(this.dateRange?.to);
    var dateEnd = dd.format('YYYY-MM-DD');
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
    console.log('popup cal', this.popupSelectedVal);
    this.takeImageFromCameraAli(this.popupSelectedVal);
    this.hidePopup();
  }
  GalerySelected() {
    console.log('popup cal', this.popupSelectedVal);
    this.uploadDocument(this.popupSelectedVal);
    this.hidePopup();
  }
}
