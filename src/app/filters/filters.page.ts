import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSelect, IonSlides, LoadingController, MenuController, Platform, ToastController, } from '@ionic/angular';
import { RestService } from '../rest.service';
import { Storage } from '@ionic/storage';
import { CalendarComponentOptions } from 'ion2-calendar';
//import { injectStyles } from 'shadow-dom-inject-styles';
declare var google;
@Component({
  selector: 'app-filters',
  templateUrl: './filters.page.html',
  styleUrls: ['./filters.page.scss'],
})
export class FiltersPage implements OnInit {
  @ViewChild('startSlides') startSlides: IonSlides;
  @ViewChild('featureSelect') featureSelect: IonSelect;
  @ViewChild('vehicleSelect') vehicleSelect: IonSelect;
  @ViewChild('makeSelect') makeSelect: IonSelect;
  @ViewChild('modelSelect') modelSelect: IonSelect;
  @ViewChild('yearsSelect') yearsSelect: IonSelect;
  @ViewChild('nosSelect') nosSelect: IonSelect;
  @ViewChild('colorSelect') colorSelect: IonSelect;
  @ViewChild('transmissionSelect') transmissionSelect: IonSelect;

  option1 = {
    loop: true,
    slidesPerView: 8
  };

  start_date_month: string = 'January';
  start_month_index: number = 1;
  sliderStartBoolean: any;
  currentYear: number;
  monthCounter: number = 1;
  month: string;
  days: number[];
  feature: any = 'All features';
  featureText: any = 'All features';
  vehicleType: any = 'All Types';
  vehicleTypeText: any = 'All Types';
  make: any = 'Select Make';
  makeText: any = 'Select Make';
  model: any = 'Select Model';
  modelText: any = 'Select Model';
  years: any = 'Select Year';
  yearsText: any = 'Select Year';
  nos: any = 'Select NOS';
  nosText: any = 'Select NOS';
  color: any = 'Select Color';
  colorText: any = 'Select Color';
  transmission: any = 'Select Transmission';
  transmissionText: any = 'Select Transmission';
  featureShowList: boolean = true;
  vehicleShowList: boolean = true;
  makeShowList: boolean = true;
  modelShowList: boolean = true;
  yearsShowList: boolean = true;
  nosShowList: boolean = true;
  colorShowList: boolean = true;
  transmissionShowList: boolean = true;
  start_date: string;
  // price: any;
  response: any;
  transmissions: any;
  vehicle_types: any;
  models: any;
  makes: any;
  vehSeats: any;
  lowerPrice: number = 0;
  upperPrice: number = 0;
  max_price: number = 30;
  min_price: number = 10;
  source: any;
  autocompleteItems: any[];
  GoogleAutocomplete: any;
  autocomplete: { input: string; };
  detinationCompleteItems: any[];
  userID: any;
  currencyID: any = '';
  currencySymbol: any;
  public price: any = {
    upper: 30,
    lower: 10
  }
  public pricea: any = {
    upper: 30,
    lower: 10
  }
  plateformCheck: any;
  comfortClass: boolean = false;
  businessClass: boolean = false;
  deluxClass: boolean = false;
  superDeluxClass: boolean = false;
  optionsRange: CalendarComponentOptions;
  choosenDate: any;
  loading: any;
  constructor(
    private storage: Storage,
    public zone: NgZone,
    public router: Router,
    public toastController: ToastController,
    public restService: RestService,
    public menuCtrl: MenuController, public plateform: Platform,
    public loadingController: LoadingController
  ) {
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
        } else {
          this.userID = '';
          this.getDropDownData();
        }
      });
    });
  }
  SelectSearchResult(address) {

    this.source = address;//May be delete
    this.restService.sourceToSearch = this.source;
    console.log(this.source);
    this.router.navigate(['/car-list']);
    this.autocompleteItems = []
  }
  UpdateSearchResults() {
    if (this.source == '') {
      this.autocompleteItems = [];
      return;
    }
    //componentRestrictions: {country: 'AE'}
    this.GoogleAutocomplete.getPlacePredictions({ input: this.source },
      (predictions, status) => {
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
      console.log('resssspppppp---------',this.response);
      
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
      console.log(this.max_price, this.min_price)
      this.price = {
        upper: this.max_price,
        lower: this.min_price
      }

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

    console.log(event)
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



  NoDataFount: any = [];

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
    } else if (this.price.lower == undefined && this.price.upper == undefined) {

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
      } else if (this.response.status == 'Found') {
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
  toggleMenu() {
    this.menuCtrl.toggle();
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: 'top'
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
}
