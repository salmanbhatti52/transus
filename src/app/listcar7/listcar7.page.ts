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
  selector: 'app-listcar7',
  templateUrl: './listcar7.page.html',
  styleUrls: ['./listcar7.page.scss'],
})
export class Listcar7Page implements OnInit {
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
  start_date_month: string = '';
  end_date_month: string = '';
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
  document_eightError: boolean;
  document_nineError: boolean;
  document_tenError: boolean;
  document_elevenError: boolean;
  document_new_twevlError: boolean;
  document_six: any = '';
  document_seven: any = '';
  document_eight: any = '';
  document_nine: any = '';
  document_ten: any = '';
  document_eleven: any = '';
  document_twelve: any = '';
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
  uploadedImages = [];
  dateStartError: boolean;
  base64upload = [];
  document_onewww: any;

  image1: any = '';
  image2: any = '';
  image3: any = '';
  image4: any = '';
  image5: any = '';
  image6: any = '';
  image7: any = '';

  image8: any = '';
  image9: any = '';
  image10: any = '';
  image11: any = '';
  image12: any = '';
  plateformCheck: any;
  onceFilled: any;
  wheelss: any;
  doors: any;
  seats: any;

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
  ) {}

  ngOnInit() {}

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
    this.takeImageFromCamera(this.popupSelectedVal);
    this.hidePopup();
  }
  GalerySelected() {
    console.log('popup cal', this.popupSelectedVal);
    this.uploadDocumentsPhotos(this.popupSelectedVal);
    this.hidePopup();
  }

  uploadDocumentsPhotos(params) {
    console.log('params', params);
    if (params == '1' && this.document_one == '') {
      // choose 10 images
      this.pick10image();
      //this.pick5image();
    } else if (params == '1' && this.document_one != '') {
      // choose 1 image
      this.pickCustome1image(params);
    } else if (params == '2' && this.document_two == '') {
      // choose 4 image
      this.pick9image();
      // this.pick4image();
    } else if (params == '2' && this.document_two != '') {
      // choose 1 image
      this.pickCustome1image(params);
    } else if (params == '3' && this.document_three == '') {
      // choose 3 image
      this.pick8image();
      //this.pick3image();
    } else if (params == '3' && this.document_three != '') {
      // choose 1 image
      this.pickCustome1image(params);
    } else if (params == '6' && this.document_six == '') {
      // choose 2 image
      this.pick7image();
      //this.pick2image();
    } else if (params == '6' && this.document_six != '') {
      // choose 1 image
      this.pickCustome1image(params);
    } else if (params == '7' && this.document_seven == '') {
      // choose 1 image
      // this.pick1image();
      this.pick6image();
    } else if (params == '7' && this.document_seven != '') {
      // choose 1 image
      this.pickCustome1image(params);
    } else if (params == '8' && this.document_eight == '') {
      // choose 1 image
      this.pick5image();
    } else if (params == '8' && this.document_eight != '') {
      // choose 1 image
      this.pickCustome1image(params);
    } else if (params == '9' && this.document_nine == '') {
      // choose 1 image
      this.pick4image();
    } else if (params == '9' && this.document_nine != '') {
      // choose 1 image
      this.pickCustome1image(params);
    } else if (params == '10' && this.document_ten == '') {
      // choose 1 image
      this.pick3image();
    } else if (params == '10' && this.document_ten != '') {
      // choose 1 image
      this.pickCustome1image(params);
    } else if (params == '11' && this.document_eleven == '') {
      // choose 1 image
      this.pick2image();
    } else if (params == '11' && this.document_eleven != '') {
      // choose 1 image
      this.pickCustome1image(params);
    } else if (params == '12' && this.document_twelve == '') {
      // choose 1 image
      this.pick1image();
    } else if (params == '12' && this.document_twelve != '') {
      // choose 1 image
      this.pickCustome1image(params);
    }
  }

  takeImageFromCamera(param) {
    //this.imageService.selectImageInCamera().then((imageData) => {

    var options = {
      maximumImagesCount: 1,
      outputType: 1,
    };

    this.imageService.selectImageInCamera().then(
      (imageData) => {
   
        var base64 = `data:image/png;base64,${imageData}`;
        // this.imageCompress.compressFile(base64, 0, 50, 50).then((result) => {
        console.log(base64);
        console.log(
          'Size in bytes is now:',
          this.imageCompress.byteCount(base64)
        );
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
        } else if (param == 8) {
          this.image8 = imageData;
          this.document_eight = base64;
        } else if (param == 9) {
          this.image9 = imageData;
          this.document_nine = base64;
        } else if (param == 10) {
          this.image10 = imageData;
          this.document_ten = base64;
        } else if (param == 11) {
          this.image11 = imageData;
          this.document_eleven = base64;
        } else if (param == 12) {
          this.image12 = imageData;
          this.document_twelve = base64;
        }
        // });
      },
      (err) => {
        console.log('imagepicker  now:', err);
      }
    );
    //   }).catch(err => console.error(err));
  }
  pick10image() {
    var options = {
      maximumImagesCount: 10,
      outputType: 1,
      quality: 90,
    };

    this.imagePicker.getPictures(options).then(
      (results) => {
        for (var i = 0; i < results.length; i++) {
          this.base64upload.push(results[i]);
          if (i == 0) {
            var base640 = `data:image/png;base64,${results[0]}`;
            this.image1 = results[0];
            this.document_one = base640;
          }
          if (i == 1) {
            var base641 = `data:image/png;base64,${results[1]}`;
            this.image2 = results[1];
            this.document_two = base641;
          }
          if (i == 2) {
            var base642 = `data:image/png;base64,${results[2]}`;
            this.image3 = results[2];
            this.document_three = base642;
          }
          if (i == 3) {
            var base643 = `data:image/png;base64,${results[3]}`;
            this.image6 = results[3];
            this.document_six = base643;
          }
          if (i == 4) {
            var base644 = `data:image/png;base64,${results[4]}`;
            this.image7 = results[4];
            this.document_seven = base644;
          }
          if (i == 5) {
            var base655 = `data:image/png;base64,${results[5]}`;
            this.image8 = results[5];
            this.document_eight = base655;
          }
          if (i == 6) {
            var base6556 = `data:image/png;base64,${results[6]}`;
            this.image9 = results[6];
            this.document_nine = base6556;
          }
          if (i == 7) {
            var base6556 = `data:image/png;base64,${results[7]}`;
            this.image10 = results[7];
            this.document_ten = base6556;
          }
          if (i == 8) {
            var base65568 = `data:image/png;base64,${results[8]}`;
            this.image11 = results[8];
            this.document_eleven = base65568;
          }
          if (i == 9) {
            var base6556833 = `data:image/png;base64,${results[9]}`;
            this.image12 = results[9];
            this.document_twelve = base6556833;
          }
        }
      },
      (err) => {
        console.log(err, 'error in images??');
      }
    );
  }
  pick9image() {
    var options = {
      maximumImagesCount: 9,
      outputType: 1,
      quality: 90,
    };

    this.imagePicker.getPictures(options).then(
      (results) => {
        for (var i = 0; i < results.length; i++) {
          this.base64upload.push(results[i]);

          if (i == 0) {
            var base641 = `data:image/png;base64,${results[0]}`;
            this.image2 = results[0];
            this.document_two = base641;
          }
          if (i == 1) {
            var base642 = `data:image/png;base64,${results[1]}`;
            this.image3 = results[1];
            this.document_three = base642;
          }
          if (i == 2) {
            var base643 = `data:image/png;base64,${results[2]}`;
            this.image6 = results[2];
            this.document_six = base643;
          }
          if (i == 3) {
            var base644 = `data:image/png;base64,${results[3]}`;
            this.image7 = results[3];
            this.document_seven = base644;
          }
          if (i == 4) {
            var base655 = `data:image/png;base64,${results[4]}`;
            this.image8 = results[4];
            this.document_eight = base655;
          }
          if (i == 5) {
            var base6556 = `data:image/png;base64,${results[5]}`;
            this.image9 = results[5];
            this.document_nine = base6556;
          }
          if (i == 6) {
            var base6556 = `data:image/png;base64,${results[6]}`;
            this.image10 = results[6];
            this.document_ten = base6556;
          }
          if (i == 7) {
            var base65568 = `data:image/png;base64,${results[7]}`;
            this.image11 = results[7];
            this.document_eleven = base65568;
          }
          if (i == 8) {
            var base6556833 = `data:image/png;base64,${results[8]}`;
            this.image12 = results[8];
            this.document_twelve = base6556833;
          }
        }
      },
      (err) => {
        console.log(err, 'error in images??');
      }
    );
  }
  pick8image() {
    var options = {
      maximumImagesCount: 8,
      outputType: 1,
      quality: 90,
    };

    this.imagePicker.getPictures(options).then(
      (results) => {
        for (var i = 0; i < results.length; i++) {
          this.base64upload.push(results[i]);

          if (i == 0) {
            var base642 = `data:image/png;base64,${results[0]}`;
            this.image3 = results[0];
            this.document_three = base642;
          }
          if (i == 1) {
            var base643 = `data:image/png;base64,${results[1]}`;
            this.image6 = results[1];
            this.document_six = base643;
          }
          if (i == 2) {
            var base644 = `data:image/png;base64,${results[2]}`;
            this.image7 = results[2];
            this.document_seven = base644;
          }
          if (i == 3) {
            var base655 = `data:image/png;base64,${results[3]}`;
            this.image8 = results[3];
            this.document_eight = base655;
          }
          if (i == 4) {
            var base6556 = `data:image/png;base64,${results[4]}`;
            this.image9 = results[4];
            this.document_nine = base6556;
          }
          if (i == 5) {
            var base6556 = `data:image/png;base64,${results[5]}`;
            this.image10 = results[5];
            this.document_ten = base6556;
          }
          if (i == 6) {
            var base65568 = `data:image/png;base64,${results[6]}`;
            this.image11 = results[6];
            this.document_eleven = base65568;
          }
          if (i == 7) {
            var base6556833 = `data:image/png;base64,${results[7]}`;
            this.image12 = results[7];
            this.document_twelve = base6556833;
          }
        }
      },
      (err) => {
        console.log(err, 'error in images??');
      }
    );
  }

  pick7image() {
    var options = {
      maximumImagesCount: 7,
      outputType: 1,
      quality: 90,
    };

    this.imagePicker.getPictures(options).then(
      (results) => {
        for (var i = 0; i < results.length; i++) {
          this.base64upload.push(results[i]);

          if (i == 0) {
            var base643 = `data:image/png;base64,${results[0]}`;
            this.image6 = results[0];
            this.document_six = base643;
          }
          if (i == 1) {
            var base644 = `data:image/png;base64,${results[1]}`;
            this.image7 = results[1];
            this.document_seven = base644;
          }
          if (i == 2) {
            var base655 = `data:image/png;base64,${results[2]}`;
            this.image8 = results[2];
            this.document_eight = base655;
          }
          if (i == 3) {
            var base6556 = `data:image/png;base64,${results[3]}`;
            this.image9 = results[3];
            this.document_nine = base6556;
          }
          if (i == 4) {
            var base6556 = `data:image/png;base64,${results[4]}`;
            this.image10 = results[4];
            this.document_ten = base6556;
          }
          if (i == 5) {
            var base65568 = `data:image/png;base64,${results[5]}`;
            this.image11 = results[5];
            this.document_eleven = base65568;
          }
          if (i == 6) {
            var base6556833 = `data:image/png;base64,${results[6]}`;
            this.image12 = results[6];
            this.document_twelve = base6556833;
          }
        }
      },
      (err) => {
        console.log(err, 'error in images??');
      }
    );
  }
  pick6image() {
    var options = {
      maximumImagesCount: 6,
      outputType: 1,
      quality: 90,
    };

    this.imagePicker.getPictures(options).then(
      (results) => {
        for (var i = 0; i < results.length; i++) {
          this.base64upload.push(results[i]);

          if (i == 0) {
            var base644 = `data:image/png;base64,${results[0]}`;
            this.image7 = results[0];
            this.document_seven = base644;
          }
          if (i == 1) {
            var base655 = `data:image/png;base64,${results[1]}`;
            this.image8 = results[1];
            this.document_eight = base655;
          }
          if (i == 2) {
            var base6556 = `data:image/png;base64,${results[2]}`;
            this.image9 = results[2];
            this.document_nine = base6556;
          }
          if (i == 3) {
            var base6556 = `data:image/png;base64,${results[3]}`;
            this.image10 = results[3];
            this.document_ten = base6556;
          }
          if (i == 4) {
            var base65568 = `data:image/png;base64,${results[4]}`;
            this.image11 = results[4];
            this.document_eleven = base65568;
          }
          if (i == 5) {
            var base6556833 = `data:image/png;base64,${results[5]}`;
            this.image12 = results[5];
            this.document_twelve = base6556833;
          }
        }
      },
      (err) => {
        console.log(err, 'error in images??');
      }
    );
  }
  pick5image() {
    var options = {
      maximumImagesCount: 5,
      outputType: 1,
      quality: 90,
    };

    this.imagePicker.getPictures(options).then(
      (results) => {
        for (var i = 0; i < results.length; i++) {
          this.base64upload.push(results[i]);

          if (i == 0) {
            var base655 = `data:image/png;base64,${results[0]}`;
            this.image8 = results[0];
            this.document_eight = base655;
          }
          if (i == 1) {
            var base6556 = `data:image/png;base64,${results[1]}`;
            this.image9 = results[1];
            this.document_nine = base6556;
          }
          if (i == 2) {
            var base6556 = `data:image/png;base64,${results[2]}`;
            this.image10 = results[2];
            this.document_ten = base6556;
          }
          if (i == 3) {
            var base65568 = `data:image/png;base64,${results[3]}`;
            this.image11 = results[3];
            this.document_eleven = base65568;
          }
          if (i == 4) {
            var base6556833 = `data:image/png;base64,${results[4]}`;
            this.image12 = results[4];
            this.document_twelve = base6556833;
          }
        }
      },
      (err) => {
        console.log(err, 'error in images??');
      }
    );
  }

  pick4image() {
    var options = {
      maximumImagesCount: 4,
      outputType: 1,
      quality: 90,
    };

    this.imagePicker.getPictures(options).then(
      (results) => {
        for (var i = 0; i < results.length; i++) {

          if (i == 0) {
            var base6556 = `data:image/png;base64,${results[0]}`;
            this.image9 = results[0];
            this.document_nine = base6556;
          }
          if (i == 1) {
            var base6556 = `data:image/png;base64,${results[1]}`;
            this.image10 = results[1];
            this.document_ten = base6556;
          }
          if (i == 2) {
            var base65568 = `data:image/png;base64,${results[2]}`;
            this.image11 = results[2];
            this.document_eleven = base65568;
          }
          if (i == 3) {
            var base6556833 = `data:image/png;base64,${results[3]}`;
            this.image12 = results[3];
            this.document_twelve = base6556833;
          }
        }
      },
      (err) => {
        console.log(err, 'error in images??');
      }
    );
  }

  pick3image() {
    var options = {
      maximumImagesCount: 3,
      outputType: 1,
      quality: 90,
    };

    this.imagePicker.getPictures(options).then(
      (results) => {
        for (var i = 0; i < results.length; i++) {

          if (i == 0) {
            var base6556 = `data:image/png;base64,${results[0]}`;
            this.image10 = results[0];
            this.document_ten = base6556;
          }
          if (i == 1) {
            var base65568 = `data:image/png;base64,${results[1]}`;
            this.image11 = results[1];
            this.document_eleven = base65568;
          }
          if (i == 2) {
            var base6556833 = `data:image/png;base64,${results[2]}`;
            this.image12 = results[2];
            this.document_twelve = base6556833;
          }
        }
      },
      (err) => {
        console.log(err, 'error in images??');
      }
    );
  }

  pick2image() {
    var options = {
      maximumImagesCount: 2,
      outputType: 1,
      quality: 90,
    };

    this.imagePicker.getPictures(options).then(
      (results) => {
        for (var i = 0; i < results.length; i++) {

          if (i == 0) {
            var base65568 = `data:image/png;base64,${results[0]}`;
            this.image11 = results[0];
            this.document_eleven = base65568;
          }
          if (i == 1) {
            var base6556833 = `data:image/png;base64,${results[1]}`;
            this.image12 = results[1];
            this.document_twelve = base6556833;
          }
        }
      },
      (err) => {
        console.log(err, 'error in images??');
      }
    );
  }

  pick1image() {
    var options = {
      maximumImagesCount: 1,
      outputType: 1,
      quality: 90,
    };

    this.imagePicker.getPictures(options).then(
      (results) => {
        for (var i = 0; i < results.length; i++) {

          if (i == 0) {
            var base6556833 = `data:image/png;base64,${results[0]}`;
            this.image12 = results[0];
            this.document_twelve = base6556833;
          }
        }
      },
      (err) => {
        console.log(err, 'error in images??');
      }
    );
  }

  pickCustome1image(custNum) {
    var options = {
      maximumImagesCount: 1,
      outputType: 1,
      quality: 90,
    };

    this.imagePicker.getPictures(options).then(
      (results) => {
        for (var i = 0; i < results.length; i++) {
          if (i == 0) {
            if (custNum == '1') {
              var base640 = `data:image/png;base64,${results[0]}`;
              this.image1 = results[0];
              this.document_one = base640;
            }
            if (custNum == '2') {
              var base640 = `data:image/png;base64,${results[0]}`;
              this.image2 = results[0];
              this.document_two = base640;
            }
            if (custNum == '3') {
              var base640 = `data:image/png;base64,${results[0]}`;
              this.image3 = results[0];
              this.document_three = base640;
            }
            if (custNum == '6') {
              var base640 = `data:image/png;base64,${results[0]}`;
              this.image6 = results[0];
              this.document_six = base640;
            }
            if (custNum == '7') {
              var base640 = `data:image/png;base64,${results[0]}`;
              this.image7 = results[0];
              this.document_seven = base640;
            }
          }
        }
      },
      (err) => {
        console.log(err, 'error in images??');
      }
    );
  }

  // lastVeh: any;
  // deletePreviousImg() {

  //   var deleteStringy = JSON.stringify({
  //     "requestType": 'delete_images',
  //     "carImagesArray": this.uploadedImages
  //   });
  //   console.log(deleteStringy, "deleteStringydeleteStringy");
  //   this.restService.saveListVehicles(deleteStringy).subscribe(response => {
  //     this.response = JSON.parse(response['_body']);
  //     console.log(response['_body'])
  //     //     alert(response['_body'])
  //     console.log(this.response.status);
  //     if (this.response.status == 'error') {

  //     } else if (this.response.status == 'success') {
  //       console.log(this.uploadedImages, 'after deleting');
  //       this.onceFilled = null;
  //     }

  //   }, err => {
  //     alert('request error')
  //     this.dismiss();
  //   });
  // }

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
      if (this.document_one == '' || this.document_one == undefined) {
        this.document_oneError = true;
        return false;
      } else if (this.document_two == '' || this.document_two == undefined) {
        this.document_twoError = true;
        return false;
      } else if (
        this.document_three == '' ||
        this.document_three == undefined
      ) {
        this.document_threeError = true;
        return false;
      } else if (this.document_six == '' || this.document_six == undefined) {
        this.document_sixError = true;
        return false;
      } else if (
        this.document_seven == '' ||
        this.document_seven == undefined
      ) {
        this.document_sevenError = true;
        return false;
      } else {
        return true;
      }
    }
  }

  async goToNext() {
    let loading = await this.loadingController.create({
      cssClass: 'ionloading',
      message: 'Uploading images...',
    });

    this.storage.get('user_details').then((user_details) => {
      console.log(user_details);
      this.userID = user_details.users_id;

      this.documentBase64 = [];
      this.uploadedImages = [];
      this.validation = true;
      if (this.validateForm() == true) {
        this.submitFormData();

        this.fieldMissing = false;
        if(this.document_one!=""){
          this.documentBase64.push(this.document_one);
        }
        if(this.document_two!=""){
          this.documentBase64.push(this.document_two);
        }
        if(this.document_three!=""){
          this.documentBase64.push(this.document_three);
        }
        if(this.document_six!=""){
          this.documentBase64.push(this.document_six);
        }
        if(this.document_seven!=""){
          this.documentBase64.push(this.document_seven);
        }
        if(this.document_eight!=""){
          this.documentBase64.push(this.document_eight);
        }
        if(this.document_nine!=""){
          this.documentBase64.push(this.document_nine);
        }
        if(this.document_ten!=""){
          this.documentBase64.push(this.document_ten);
        }
        if(this.document_eleven!=""){
          this.documentBase64.push(this.document_eleven);
        }
        if(this.document_twelve!=""){
          this.documentBase64.push(this.document_twelve);
        }
        
  

        console.log(this.documentBase64, 'images_arraysssss');

        let interval = 0;

        loading.present();
        const that = this;
        function innerFunction() {
          const fileTransfer: FileTransferObject = that.transfer.create();
          const random = new Date().getTime();
          console.log(random, 'time_stamptime_stamp');
          const options: FileUploadOptions = {
            fileKey: 'photo',
            fileName: 'mycars_' + random + '.jpg',
            chunkedMode: false,
            httpMethod: 'post',
            mimeType: 'image/jpeg',
            params: {
              image: 'YPOP',
            },
          };
          fileTransfer
            .upload(
              that.documentBase64[interval],
              'https://app.transusdrives.com/webservices/upload_image',
              options
            )
            .then(
              async (data: any) => {
                const img = JSON.parse(data.response);
                that.uploadedImages.push(img.message);
                interval++;

                if (interval < that.documentBase64.length) {
                  console.log('images array ===== if', that.uploadedImages);
                  innerFunction();
                } else {
                  console.log('images array ===== else', that.uploadedImages);
                  loading.dismiss();
                  // that.storage.set('onceFilled', "Yes");
                  // that.storage.set('modelID', that.Model);
                  // that.storage.set('makeID', that.Make);
                  // that.storage.set('licensePlate', that.LicensePlate);
                  // that.storage.set('carImages', that.uploadedImages);
                  // that.storage.set('noOfSeats', that.Seats);
                  // that.storage.set('description', that.Description);
                  // that.storage.set('noOfDoors', that.Door);
                  // that.storage.set('fuelTypeID', that.Gas);
                  // that.storage.set('gearTypeID', that.GearType);
                  // that.storage.set('noOfWheels', that.wheels);
                  // that.storage.set('roofTypeID', that.Convertable);
                  // that.storage.set('otherFeatures', that.other_features);
                  // that.documentBase64 = [];

                  that.submitFormData();
                }
              },
              (err) => {
                loading.dismiss();
                console.log('Error');
                console.log(err);
                return;
              }
            );
        }
        innerFunction();
      } else {
        this.fieldMissing = true;
      }
    });
  }

  async submitFormData() {
    let loading = await this.loadingController.create({
      cssClass: 'ionloading',
      message: 'Uploading data...',
    });

    // loading.present();
    var dataToInsert = JSON.stringify({
      requestType: 'patch_7',
      vehicles_id: localStorage.getItem('vinNumberCarID'),
      users_id: this.userID,
      vehicle_img_1: this.uploadedImages[0],
      vehicle_img_2: this.uploadedImages[1],
      vehicle_img_3: this.uploadedImages[2],
      vehicle_img_4: this.uploadedImages[3],
      vehicle_img_5: this.uploadedImages[4],
      vehicle_img_6: this.uploadedImages[5],
      vehicle_img_7: this.uploadedImages[6],
      vehicle_img_8: this.uploadedImages[7],
      vehicle_img_9: this.uploadedImages[8],
      vehicle_img_10: this.uploadedImages[9],
      vehicle_img_11: this.uploadedImages[10],
      vehicle_img_12: this.uploadedImages[11],

      // vehicle_img_1: this.document_one,
      // vehicle_img_2: this.document_two,
      // vehicle_img_3: this.document_three,
      // vehicle_img_4: this.document_six,
      // vehicle_img_5: this.document_seven,
    });

    console.log('data to insert------->', dataToInsert);

    this.restService.listYourCarAPI(dataToInsert).subscribe((resAPI: any) => {
      loading.dismiss();
      this.response = JSON.parse(resAPI['_body']);
      if (this.response.status == 'success') {
        this.storage.set("pickup", "");
        this.storage.set("dropoff", "");
        this.storage.set("pickuplong", "");
        this.storage.set("pickuplat", "");
        this.storage.set("dropofflong", "");
        this.storage.set("dropofflat", "");
        this.navCtrl.navigateForward('listcar8');
      }
    });
  }

  goToHome() {
    this.location.back();
  }
}
