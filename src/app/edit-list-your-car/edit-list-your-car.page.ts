import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonSlides, LoadingController, Platform } from '@ionic/angular';
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
import * as moment from 'moment';
import { CalendarComponentOptions } from 'ion2-calendar';

@Component({
  selector: 'app-edit-list-your-car',
  templateUrl: './edit-list-your-car.page.html',
  styleUrls: ['./edit-list-your-car.page.scss'],
})
export class EditListYourCarPage implements OnInit {
  @ViewChild('startSlides', { read: IonSlides }) startSlides: IonSlides;
  @ViewChild('endSlides') endSlides: IonSlides;
  option1 = {
    loop: true,
    slidesPerView: 8,
    initialSlide: 0,
  };
  option2 = {
    loop: true,
    slidesPerView: 8,
    initialSlide: 0,
  };
  popupHidden: boolean = true;
  popupSelectedVal: any;
  response: any;
  model: any;
  make: any;
  imageToShow:any;
  indexOfSLide = 1;
  showSlide: any = 'no';
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
  AdNotice:any;
  MinTrip:any;
  MaxTrip:any;
  work: any;
  Language: any;
  start_date: string;
  end_date: string;
  dropoff: any;
  pickup: any;
  document_one: any;
  document_two: any;
  document_three: any;
  document_four: any;
  document_five: any;
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

  AdNoticeError: boolean;
  MinTripError: boolean;
  MaxTripError: boolean;
  
  workError: boolean;
  LanguageError: boolean;
  RouteError: boolean;
  document_fourError: boolean;
  document_fiveError: boolean;
  ChargesInfoError: boolean;
  ChargesInfo: string;
  month: string;
  start_date_month: string = 'January';
  end_date_month: string = 'January';
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
  document_eightError: boolean;
  document_nineError: boolean;
  document_tenError: boolean;
  document_elevenError: boolean;
  document_twelveError: boolean;
  document_six: string;
  document_seven: string;
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
  vehicles_id: any;
  vehicles_list: any;
  document_two_id: any;
  document_one_id: any;
  document_three_id: any;
  document_seven_id: any;
  document_six_id: any;
  dbStartDate: any;
  dbEndDate: any;
  documentUploadOne: boolean;
  documentUploadTwo: boolean;
  documentUploadThree: boolean;
  documentUploadFour: boolean;
  documentUploadFive: boolean;
  documentUploadSix: boolean;
  documentUploadSeven: boolean;
  vehiclesID: any;
  active_end_date: any;
  endmonthCounter: number = 1;
  active_start_date: any = 1;
  startmonthCounter: number = 1;
  dateStartError: boolean;
  plateformCheck: any;
  wheelss: any;
  doors: any;
  seats: any;

  document_oneLicencePlate: any = '';

  document_oneLicencePlateToShow = '';

  mobileNum: any = '';


  carTypeArray = [];
  carType: any = '';

  comfort: any = '';
 
  comfortArray = [];
  document_eight_id: any;

  document_nine_id: any;
  document_ten_id: any;
  document_eleven_id: any;

  document_eight: any;
  document_nine: any;
  document_twelve_id: any;
  document_ten: any;
  document_eleven: any;

  document_twelve: any;
  documentUploadEight: boolean;
  documentUploadNine: boolean;
  documentUploadTen: boolean;
  documentUploadEleven: boolean;
  documentUploadTwelve: boolean;

  constructor(
    public loadingController: LoadingController,
    public activatedRoute: ActivatedRoute,
    public popoverController: PopoverController,
    private storage: Storage,
    public toastController: ToastController,
    public router: Router,
    public restService: RestService,
    public alertCtrl: AlertController,
    public plateform: Platform,
    public imageService: CameraimageService,
    public menuCtrl: MenuController,
    private imageCompress: NgxImageCompressService,
    public imagePicker: ImagePicker,
  ) {
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
    } else {
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
    this.restService.get_parts_details(stringys).subscribe(
      (response) => {
        let resee = JSON.parse(response['_body']);

        this.carTypeArray = resee.car_types;
        this.comfortArray = resee.car_classes;
      },
      (err) => {}
    );
  }
  
  startDate: any;
  endDate: any;
  getVehicleDetails() {
    var stringy = JSON.stringify({
      requestType: 'get_car_details_by_id',
      usersID: this.userID,
      vehicleID: this.vehicles_id,
      currencyID: this.currencyID,
    });
    this.restService.list_vehicles(stringy).subscribe(
      (response) => {
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

        if(this.vehicles_list.vehicle_imgs[0]){
          this.document_one_id = this.vehicles_list.vehicle_imgs[0].veh_img_id;
          this.document_one = this.vehicles_list.vehicle_imgs[0].img;
        }
        if(this.vehicles_list.vehicle_imgs[1]){
          this.document_two_id = this.vehicles_list.vehicle_imgs[1].veh_img_id;
          this.document_two = this.vehicles_list.vehicle_imgs[1].img;
        }
        if(this.vehicles_list.vehicle_imgs[2]){
          this.document_three_id = this.vehicles_list.vehicle_imgs[2].veh_img_id;
          this.document_three = this.vehicles_list.vehicle_imgs[2].img;
        }
        if(this.vehicles_list.vehicle_imgs[3]){
          this.document_six_id = this.vehicles_list.vehicle_imgs[3].veh_img_id;
          this.document_six = this.vehicles_list.vehicle_imgs[3].img;
        }
        if(this.vehicles_list.vehicle_imgs[4]){
          this.document_seven_id = this.vehicles_list.vehicle_imgs[4].veh_img_id;
          this.document_seven = this.vehicles_list.vehicle_imgs[4].img;
        }
        if(this.vehicles_list.vehicle_imgs[5]){
          this.document_eight_id = this.vehicles_list.vehicle_imgs[5].veh_img_id;
          this.document_eight = this.vehicles_list.vehicle_imgs[5].img;
        }
        if(this.vehicles_list.vehicle_imgs[6]){
          this.document_nine_id = this.vehicles_list.vehicle_imgs[6].veh_img_id;
          this.document_nine = this.vehicles_list.vehicle_imgs[6].img;
        }
        if(this.vehicles_list.vehicle_imgs[7]){
          this.document_ten_id = this.vehicles_list.vehicle_imgs[7].veh_img_id;
          this.document_ten = this.vehicles_list.vehicle_imgs[7].img;
        }
        if(this.vehicles_list.vehicle_imgs[8]){
          this.document_eleven_id = this.vehicles_list.vehicle_imgs[8].veh_img_id;
          this.document_eleven = this.vehicles_list.vehicle_imgs[8].img;
        }
        if(this.vehicles_list.vehicle_imgs[9]){
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
          from: new Date(
            this.dbStartDate[0],
            this.dbStartDate[1] - 1,
            this.dbStartDate[2]
          ),
          to: new Date(
            this.dbEndDate[0],
            this.dbEndDate[1] - 1,
            this.dbEndDate[2]
          ),
        };

      },
      (err) => {
        console.log(err);
      }
    );
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
    this.restService.getDdlData(stringys).subscribe(
      (response) => {
        this.response = JSON.parse(response['_body']);
        if (this.response.msg == 'exist') {
          this.LicensePlateUnique = true;
        } else {
          this.LicensePlateUnique = false;
        }
      },
      (err) => {}
    );
  }
  removeImage(id, index) {
    var stringy = JSON.stringify({
      requestType: 'delete_vehicle_images',
      usersID: this.userID,
      vehImgID: id,
    });

    this.restService.deleteImage(stringy).subscribe(
      (response) => {
        this.response = JSON.parse(response['_body']);
        if (this.response.status) {
          if (index == 1) {
            this.document_one = '';
          } else if (index == 2) {
            this.document_two = '';
          } else if (index == 3) {
            this.document_three = '';
          } else if (index == 6) {
            this.document_six = '';
          } else if (index == 7) {
            this.document_seven = '';
          } else if (index == 8) {
            this.document_eight = '';
          } else if (index == 9) {
            this.document_nine = '';
          } else if (index == 10) {
            this.document_ten = '';
          } else if (index == 11) {
            this.document_eleven = '';
          } else if (index == 12) {
            this.document_twelve = '';
          }
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
  getDropDownData() {
    var stringy = JSON.stringify({
      requestType: 'list_car_page',
    });
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
        this.wheelss = this.response.no_of_wheels;
        this.seats = this.response.no_of_seats;
        this.doors = this.response.no_of_doors;
        // -- Getting all vehical details starts -- //
        this.getVehicleDetails();
        // -- Getting all vehical details Ends -- //

      },
      (err) => {
        console.log(err);
      }
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
      } else if (this.document_one == '' || this.document_one == undefined) {
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
      }

      else if (this.Description == '' || this.Description == undefined) {
        this.DescriptionError = true;
        return false;
      } else if (this.Seats == '' || this.Seats == undefined) {
        this.SeatsError = true;
        return false;
      } else if (this.Door == '' || this.Door == undefined) {
        this.DoorError = true;
        return false;
      } else if (this.Gas == '' || this.Gas == undefined) {
        this.GasError = true;
        return false;
      } else if (this.GearType == '' || this.GearType == undefined) {
        this.GearTypeError = true;
        return false;
      } else if (this.Convertable == '' || this.Convertable == undefined) {
        this.ConvertableError = true;
        return false;
      } else if (this.wheels == '' || this.wheels == undefined) {
        this.wheelsError = true;
        return false;
      } else if (
        this.other_features == '' ||
        this.other_features == undefined
      ) {
        this.other_featuresError = true;
        return false;
      } else if (this.document_four == '' || this.document_four == undefined) {
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
      } else if (this.Language == '' || this.Language == undefined) {
        this.LanguageError = true;
        return false;
      } else if (this.pickup == '' || this.pickup == undefined) {
        this.RouteError = true;
        return false;
      } else if (this.dropoff == '' || this.dropoff == undefined) {
        this.RouteError = true;
        return false;
      } else if (this.LicensePlateUnique == true) {
        return false;
      } else if (this.ChargesInfo == '' || this.ChargesInfo == undefined) {
        this.ChargesInfoError = true;
        return false;
      } else {
        return true;
      }
    }
  }
  submitForm() {
    this.validation = true;
    if (this.validateForm() == true) {
      this.fieldMissing = false;     
      if (
        this.document_one == '' ||
        this.document_two == '' ||
        this.document_three == '' ||
        this.document_six == '' ||
        this.document_seven == '' 
      ) {
        this.presentToast('Please select the 5 images');
      } else {
        var roadworthy;
        if (this.documentUploadFour) {
          roadworthy = this.document_four.split(',')[1];
         
        } else {
          roadworthy = '';
        }
        var insurance;
        if (this.documentUploadFive) {
          insurance = this.document_five.split(',')[1];
         
        } else {
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
        this.restService.saveListVehicles(stringy).subscribe(
          (response) => {
            this.response = JSON.parse(response['_body']);
            this.dismiss();
            if (this.response.status == 'error') {
              this.presentToast('Oops!something went wrong');
            } else if (this.response.status == 'success') {
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
          },
          (err) => {
            this.dismiss();
            console.log(err);
          }
        );
      }
    } else {
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
          } else if (param == 1) {
            this.document_one = result;
            var document_one = this.document_one.split(',')[1];
            this.documentBase64.push(document_one);
            this.documentUploadOne = true;
          } else if (param == 2) {
            this.document_two = result;
            var document_two = this.document_two.split(',')[1];
            this.documentBase64.push(document_two);
            this.documentUploadTwo = true;
          } else if (param == 3) {
            this.document_three = result;
            var document_three = this.document_three.split(',')[1];
            this.documentBase64.push(document_three);
            this.documentUploadThree = true;
          } else if (param == 4) {
            this.document_four = result;
            this.documentUploadFour = true;
          } else if (param == 5) {
            this.document_five = result;
            this.documentUploadFive = true;
          } else if (param == 6) {
            this.document_six = result;
            var document_six = this.document_six.split(',')[1];
            this.documentBase64.push(document_six);
            this.documentUploadSix = true;
          } else if (param == 7) {
            this.document_seven = result;
            var document_seven = this.document_seven.split(',')[1];
            this.documentBase64.push(document_seven);
            this.documentUploadSeven = true;
          } else if (param == 8) {
            this.document_eight = result;
            var document_eight = this.document_eight.split(',')[1];
            this.documentBase64.push(document_eight);
            this.documentUploadEight = true;
          } else if (param == 9) {
            this.document_nine = result;
            var document_nine = this.document_nine.split(',')[1];
            this.documentBase64.push(document_nine);
            this.documentUploadNine = true;
          } else if (param == 10) {
            this.document_ten = result;
            var document_ten = this.document_ten.split(',')[1];
            this.documentBase64.push(document_ten);
            this.documentUploadTen = true;
          } else if (param == 11) {
            this.document_eleven = result;
            var document_eleven = this.document_eleven.split(',')[1];
            this.documentBase64.push(document_eleven);
            this.documentUploadEleven = true;
          } else if (param == 12) {
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
          } else if (param == 1) {
            this.document_one = result;
            var document_one = this.document_one.split(',')[1];
            this.documentBase64.push(document_one);
          } else if (param == 2) {
            this.document_two = result;
            var document_two = this.document_two.split(',')[1];
            this.documentBase64.push(document_two);
          } else if (param == 3) {
            this.document_three = result;
            var document_three = this.document_three.split(',')[1];
            this.documentBase64.push(document_three);
          } else if (param == 4) {
            this.document_four = result;
            this.documentUploadFour = true;
          } else if (param == 5) {
            this.document_five = result;
            this.documentUploadFive = true;
          } else if (param == 6) {
            this.document_six = result;
            var document_six = this.document_six.split(',')[1];
            this.documentBase64.push(document_six);
            this.documentUploadSix = true;
          } else if (param == 7) {
            this.document_seven = result;
            var document_seven = this.document_seven.split(',')[1];
            this.documentBase64.push(document_seven);
            this.documentUploadSeven = true;
          } else if (param == 8) {
            this.document_eight = result;
            var document_eight = this.document_eight.split(',')[1];
            this.documentBase64.push(document_eight);
            this.documentUploadEight = true;
          } else if (param == 9) {
            this.document_nine = result;
            var document_nine = this.document_nine.split(',')[1];
            this.documentBase64.push(document_nine);
            this.documentUploadNine = true;
          } else if (param == 10) {
            this.document_ten = result;
            var document_ten = this.document_ten.split(',')[1];
            this.documentBase64.push(document_ten);
            this.documentUploadTen = true;
          } else if (param == 11) {
            this.document_eleven = result;
            var document_eleven = this.document_eleven.split(',')[1];
            this.documentBase64.push(document_eleven);
            this.documentUploadEleven = true;
          } else if (param == 12) {
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
      this.active_end_date = document.querySelector(
        '.end_date .activeEndState'
      ).textContent;
      let cEndDate = new Date(
        this.currentYear,
        this.endmonthCounter - 1,
        this.active_end_date
      ).getTime();
      /**** end date ****/
      this.active_start_date = document.querySelector(
        '.start_date .activeState'
      ).textContent;
      let cDate = new Date(
        this.currentYear,
        this.startmonthCounter - 1,
        this.active_start_date
      ).getTime();

      if (cDate > cEndDate) {
        this.dateStartError = true;
      }
    }, 300);
  }
  validateEndDate() {
    setTimeout(() => {
      this.dateStartError = false;

      this.active_start_date = document.querySelector(
        '.start_date .activeState'
      ).textContent;
      let cStartDate = new Date(
        this.currentYear,
        this.startmonthCounter - 1,
        this.active_start_date
      ).getTime();

      this.active_end_date = document.querySelector(
        '.end_date .activeEndState'
      ).textContent;
      let cDate = new Date(
        this.currentYear,
        this.endmonthCounter - 1,
        this.active_end_date
      ).getTime();

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



  dateMulti: string[];
  type: 'string';

  optionsRange: CalendarComponentOptions = {
    pickMode: 'range',
    // from: new Date(2021,5,13),
    // to: new Date(2021,5,18)
  };

  // dateRange: { from: string; to: string; };
  dateRange: {
    from: Date;
    to: Date;
  } = {
    from: new Date(),
    to: new Date(),
  };
  /*  invalidDates=[
     '2021-06-10',
     '2021-06-13'] */
  newDate() {
   
    var ddff = moment(this.dateRange.from);
    var dateStart = ddff.format('YYYY-MM-DD');
    this.start_date = dateStart;
    var dd = moment(this.dateRange.to);
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
    this.imagePicker.getPictures(options).then(
      (result) => {
        
        var base64 = `data:image/png;base64,${result}`;
        // this.imageCompress.compressFile(base64, 0, 80, 80).then((result) => {
          if (param == 0) {
            this.document_oneLicencePlate = result;
            var document_oneLicencePlate = this.document_one.split(',')[1];
            this.document_oneLicencePlateToShow = result;
            this.documentBase64.push(document_oneLicencePlate);
            //this.documentUploadOne = true;
          } else if (param == 1) {
            this.document_one = base64;
            var document_one = this.document_one.split(',')[1];
            this.documentBase64.push(document_one);
            this.documentUploadOne = true;
          } else if (param == 2) {
            this.document_two = base64;
            var document_two = this.document_two.split(',')[1];
            this.documentBase64.push(document_two);
            this.documentUploadTwo = true;
          } else if (param == 3) {
            this.document_three = base64;
            var document_three = this.document_three.split(',')[1];
            this.documentBase64.push(document_three);
            this.documentUploadThree = true;
          } else if (param == 4) {
            this.document_four = base64;
            this.documentUploadFour = true;
          } else if (param == 5) {
            this.document_five = base64;
            this.documentUploadFive = true;
          } else if (param == 6) {
            this.document_six = base64;
            var document_six = this.document_six.split(',')[1];
            this.documentBase64.push(document_six);
            this.documentUploadSix = true;
          } else if (param == 7) {
            this.document_seven = base64;
            var document_seven = this.document_seven.split(',')[1];
            this.documentBase64.push(document_seven);
            this.documentUploadSeven = true;
          } else if (param == 8) {
            this.document_eight = base64;
            var document_eight = this.document_eight.split(',')[1];
            this.documentBase64.push(document_eight);
            this.documentUploadEight = true;
          } else if (param == 9) {
            this.document_nine = base64;
            var document_nine = this.document_nine.split(',')[1];
            this.documentBase64.push(document_nine);
            this.documentUploadNine = true;
          } else if (param == 10) {
            this.document_ten = base64;
            var document_ten = this.document_ten.split(',')[1];
            this.documentBase64.push(document_ten);
            this.documentUploadTen = true;
          } else if (param == 11) {
            this.document_eleven = base64;
            var document_eleven = this.document_eleven.split(',')[1];
            this.documentBase64.push(document_eleven);
            this.documentUploadEleven = true;
          } else if (param == 12) {
            this.document_twelve = base64;
            var document_twelve = this.document_twelve.split(',')[1];
            this.documentBase64.push(document_twelve);
            this.documentUploadTwelve = true;
          }
        // });
      },
      (err) => {
        console.log(err, "error in images??");
      }
    );
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
}
