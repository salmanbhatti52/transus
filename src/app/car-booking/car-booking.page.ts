import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, IonSlides, LoadingController, Platform, ToastController } from '@ionic/angular';
import { CameraimageService } from '../cameraimage.service';
import { RestService } from '../rest.service';
import { Storage } from '@ionic/storage';
import { Location } from '@angular/common';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { CalendarComponentOptions } from 'ion2-calendar';
import {
  FileTransfer,
  FileUploadOptions,
  FileTransferObject,
} from '@ionic-native/file-transfer/ngx';
import * as moment from 'moment';

@Component({
  selector: 'app-car-booking',
  templateUrl: './car-booking.page.html',
  styleUrls: ['./car-booking.page.scss'],
})

export class CarBookingPage implements OnInit {

  loaded = false;

  
  @ViewChild('startSlides') startSlides: IonSlides;
  @ViewChild('endSlides') endSlides: IonSlides;
  option1 = {
    slidesPerView: 8,
    loop: true,
  };
  option = {
    loop: true,
    direction: 'vertical',
    slidesPerView: 3,
    centeredSlides: true,
    centeredSlidesBounds: true
  };
  optionsRange: CalendarComponentOptions;

  dateRange: any;
  olddateRange: any;

  dayDiff:any;
  imgLicense : any;
  hours: Array<any> = [];
  mints: Array<any> = [];
  start_date_month: string = '';
  end_date_month: string = '';
  start_month_index: number = 1;
  end_month_index: number = 1;
  days: Array<any> = [];
  currentYear: number;
  currentYearTwo: number;
  monthCounter: number = 1;
  month: string;
  document_one: string='';
  start_date: string='';
  end_date: string='';
  document_oneError: boolean=false;
  response: any;
  sHours: string;
  sMints: string;
  sV: string;
  userID: any;
  Email: any;
  eHours: string;
  eMints: string;
  eV: string;
  loading: HTMLIonLoadingElement;
  sliderStartBoolean: any;
  sliderEndBoolean: any;
  vehicle_id: any;
  active_start_date: any = 1;
  db_end_date: any;
  db_start_date: any;
  dateError: boolean = false;
  active_end_date: any;
  endmonthCounter: number = 1;
  startmonthCounter: number = 1;
  currencyID: any;
  dateStartError: boolean;
  model_name: any;
  plateformCheck:any;
  currentCost:any="test";
  currentCostBooking:any="test";
  chargePerDay:any;
  currency_symbol:any;
  max_trip_duration:any;
  advance_notice:any;
  min_trip_duration:any;
  min_days:any;
  max_days:any;
  adNoticeHours:any;
  errorMsgs:any = "Car is already booked in these dates";
  availableDate:boolean;
  constructor(public activatedRoute: ActivatedRoute, public loadingController: LoadingController,
     private storage: Storage, public toastController: ToastController, 
     public restService: RestService, public alertCtrl: AlertController,
      public router: Router, public imageService: CameraimageService, 
      public imagePicker: ImagePicker,public plateform:Platform,
      public location: Location,private transfer: FileTransfer) {
 
  }
  ngOnInit() {
    if(this.plateform.is('ios')){
      this.plateformCheck = "ios";
    }
    else{
      this.plateformCheck = "android";
    }
    this.storage.get('currency_symbol').then((currency_symbol) => {
      this.currency_symbol = currency_symbol;
    })
    this.storage.get('user_details').then((user_details) => {
      this.userID = user_details.users_id;
      this.Email = user_details.email;
      this.currencyID = user_details.currencies_id;
    });
    this.hours = Array.from({ length: 12 }, (v, k) => k + 1);
    this.mints = Array.from({ length: 60 }, (v, k) => k + 0);
    this.days = Array.from({ length: 30 }, (v, k) => k + 1);
    this.currentYear = new Date().getFullYear();
    this.currentYearTwo = new Date().getFullYear();


    this.getStartIndex(2);
    this.getEndIndex(2);
    
  }
  ionViewWillEnter(){
    var date   = new Date();
    console.log("current date",date);
    var month = date.getMonth() +1;
    var fMonth = this.monthList(month);
    this.end_date_month = fMonth;
    this.start_date_month = fMonth;
    this.startmonthCounter = month;
    this.endmonthCounter = month;
    this.start_month_index = month;
    this.end_month_index = month;

this.activatedRoute.queryParams.subscribe((res) => {
  this.response = JSON.parse(res.value);

  console.log("data from url",this.response );
  this.vehicle_id = this.response.vehicle_id;
  this.db_start_date = this.monthListFormte(this.response.start_date);
  this.db_end_date = this.monthListFormte(this.response.end_date);
  this.chargePerDay = this.response.charge_per_day;
  this.max_trip_duration = this.response.max_trip_duration;
  this.min_trip_duration = this.response.min_trip_duration;
  this.advance_notice    = this.response.advance_notice;
  // -- Advance notice duration -- //
  if(this.advance_notice=='6 hours'){
      this.adNoticeHours = 6;
  }
  else if(this.advance_notice=='12 hours'){
    this.adNoticeHours = 12;
  }
  else if(this.advance_notice=='1 day'){
    this.adNoticeHours = 24;
  }
  else if(this.advance_notice=='Instant'){
    this.adNoticeHours = 1000;
  }
  // -- Min days duration -- //
  if(this.min_trip_duration=='1 day'){
    this.min_days = 1;
  }
  else if(this.min_trip_duration=='2 day'){
    this.min_days = 2;
  }
  else if(this.min_trip_duration=='3 day'){
    this.min_days = 3;
  }
  // -- Max days duration -- //
  if(this.max_trip_duration=='5 day'){
    this.max_days = 5;
  }
  else if(this.max_trip_duration=='1 week'){
    this.max_days = 7;
  }
  else if(this.max_trip_duration=='2 weeks'){
    this.max_days = 14;
  }
  else if(this.max_trip_duration=='1 month'){
    this.max_days = 30;
  }
  else if(this.max_trip_duration=='2 month'){
    this.max_days = 60;
  }
  else if(this.max_trip_duration=='3 month'){
    this.max_days = 90;
  }
  else{
    this.max_days = 1000;
  }



  var stDate   = this.response.start_date.split('-');
  var enDate = this.response.end_date.split('-'); 
  var startDatesss   = new Date(this.response.start_date.replace(/-/g, "/")); 
  var currentDate = new Date(); 
  var startVar;
  var startDatesss   = new Date(this.response.start_date.replace(/-/g, "/")); 
  var currentDate = new Date(); 
  if(startDatesss.getTime() > currentDate.getTime()){
    startVar = new Date(stDate[0], stDate[1]-1, stDate[2]) 
  } 
  else{ 
    startVar = new Date();  
  }
  let daysConfig = [];
  this.response.booked_dates.map((el,index) => {
    let tempDateArray = el.split('-'); 
    daysConfig.push(
      {
        date : new Date(tempDateArray[0], tempDateArray[1]-1, tempDateArray[2]),
        disable: true,
      }
    ) 
  }) 

  this.optionsRange  = {
    pickMode: 'range',
    from: startVar,
    daysConfig:  daysConfig,
    to: new Date(enDate[0], enDate[1]-1, enDate[2]), 
};

  console.log("date range in constractor",this.optionsRange);
  this.model_name = this.response.model_name;
});
  }
  ionViewDidEnter() {
    
       
    setTimeout(() => {
      this.loaded = true;
    }, 500);
  }
 
  back() {
    this.location.back()
  }
  getStartIndex(i) {
    this.sliderStartBoolean = i;
    this.validateStartDate();
  }
  getEndIndex(i) {
    this.sliderEndBoolean = i;
    this.validateEndDate();
  }

  validateForm() {


    this.sHours = document.querySelector(".s_hours .swiper-slide-active p").textContent;
    this.sMints = document.querySelector(".s_mints .swiper-slide-active p").textContent;
    this.sV     = document.querySelector(".s_v .swiper-slide-active p").textContent;
    this.eHours = document.querySelector(".e_hours .swiper-slide-active p").textContent;
    this.eMints = document.querySelector(".e_mints .swiper-slide-active p").textContent;
    this.eV     = document.querySelector(".e_v .swiper-slide-active p").textContent;
    this.document_oneError = false;

    if (this.document_one == '' || this.document_one == undefined) {
      this.document_oneError = true;
      return false;
    }
    else if(this.availableDate == true){
      return false;
    } else {
      if(this.start_date != '' && this.end_date != '') {
        this.dateStartError = false;
      } else{
        return true;
      }
    }
  }
  getStartHoures(){

 


    // -- Counting days differnce between two dates --  by moaviz//
   
    if (this.loaded) {

     var ddff = moment(this.dateRange?.from);
     var df=  ddff.format('YYYY-MM-DD')

     this.start_date = df;
     var dd = moment(this.dateRange?.to);
     var d=  dd.format('YYYY-MM-DD')
     this.end_date = d; 

    this.sHours = document.querySelector(".s_hours .swiper-slide-active p")?.textContent;
    this.sMints = document.querySelector(".s_mints .swiper-slide-active p")?.textContent;
    this.sV = document.querySelector(".s_v .swiper-slide-active p")?.textContent;

    this.eHours = document.querySelector(".e_hours .swiper-slide-active p")?.textContent;
    this.eMints = document.querySelector(".e_mints .swiper-slide-active p")?.textContent;
    this.eV = document.querySelector(".e_v .swiper-slide-active p")?.textContent;


    var calStartTime = this.sHours + ':' + this.sMints + ' ' + this.sV;
    var calEndTime = this.eHours + ':' + this.eMints + ' ' + this.eV;
  
     this.currentCost = parseFloat(this.chargePerDay.replace(/,/g, ''))/24;
     var EndTime = this.end_date + " " + calEndTime;
     var StartTime = this.start_date + " " + calStartTime;
     this.dayDiff = moment(EndTime.replace(/-/g, "/")).diff(moment(StartTime.replace(/-/g, "/")), 'hours');
     this.currentCost = this.currentCost * this.dayDiff;
     this.currentCost = this.currentCost.toFixed(2);

    var stD = new Date(StartTime.replace(/-/g, "/")); 
    var etD = new Date(EndTime.replace(/-/g, "/")); 
    var currentDate = new Date(); 
    console.log("ionic debug-- currentDate",this.getFullDate(currentDate));
    console.log("ionic debug-- stD",this.getFullDate(stD));
    
    // Booking on today an the select the previous time
    if(this.getFullDate(stD) == this.getFullDate(currentDate)){
      if(currentDate.getTime() > stD.getTime()){
        console.log("ionic debug-- current Time",currentDate.getTime());
        console.log("ionic debug-- Start Time",stD.getTime());
        this.printTimeErrorBoolen = true;
        this.printTimeError="Could not book in the previous hours." 
        this.presentToast('Could not book in the previous hours.');
      }
    } 
    else{ 
      this.printTimeError="";
    }
    if(this.dayDiff < 1){
     if(stD.getTime() === etD.getTime()){
       //same date
       this.printTimeErrorBoolen = true;
       this.printTimeError="Start time and end time is same" 
       this.presentToast('Start time and end time is same');
       this.currentCostBooking = "test";
       // false
     }
     else{
      this.printTimeError="Start time and end time is same" 
      this.currentCostBooking = this.currentCost;
     }
     if(stD.getTime() > etD.getTime()){
      //date 1 is newer
      this.printTimeError="Start Time is greater then End Time";
      this.presentToast('Start Time is greater then End Time');
      this.printTimeErrorBoolen = true;
      // fasle
      this.currentCostBooking = "test";
    }
    else{
      this.printTimeError="";
      this.currentCostBooking = this.currentCost;
    }
    
    }
    else{
      this.printTimeError="" 
      this.currentCostBooking = this.currentCost;
      var currentDateTime= moment().format('YYYY-MM-DD HH:mm:ss');   
    
      var daysHours = moment(StartTime.replace(/-/g, "/")).diff(moment(currentDateTime.replace(/-/g, "/")), 'hours');
      
      console.log("Hours diff",daysHours);
      if(daysHours < this.adNoticeHours  ){
        this.printTimeErrorBoolen = true;
        console.log("Advance notice for  this car is"+ this.advance_notice);
        this.printTimeError="Advance notice for  this car is "+ this.advance_notice; 
      }
      else{
        this.printTimeErrorBoolen = false;
        this.printTimeError="" 
      }
    }
 
    
   
  }
}
  getFullDate(date){
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1; // Months start at 0!
    let dd = date.getDate();

    if (dd < 10) var days = '0' + dd;
    if (mm < 10) var mints = '0' + mm;

    return  days + '/' + mints + '/' + yyyy;

  }
  ShowLoading:boolean=false;
  checkCurrentTime:any;
  
  submitForm(){
  if(this.start_date != '' && this.end_date != ''){
    if(this.start_date === this.end_date){

      var date = new Date();
      var monthsss = date.getMonth();
      var month = monthsss + 1;
      if(month < 10){
        var monthss =   '0'+month;
        var fulldate = date.getFullYear()+'-'+ monthss +'-'+ date.getDate();
      }
      else{
        var fulldate = date.getFullYear()+'-'+ month +'-'+ date.getDate();
      }
     
      
      var ddff = moment(date);
       this.checkCurrentTime = ddff.format("MM-DD-YYYY hh:mm A")
      var comdate = new Date(this.start_date)
      if(fulldate === this.start_date){
 
        this.TimeComparisionFun("diffDay");
        
      }
      else{
 
        // comparision with only stat time and end time 
        this.TimeComparisionFun("diffDay"); 
     }
     
    }
    else{
      // allow booking
      this.allowsubmitForm();
    }
  }
  else{
    this.presentToast('please select the booking dates')
  }
  
  }


  checkStart:any;
  checkEnd:any;
  printTimeError:any;
  printTimeErrorBoolen :boolean = false ;
   TimeComparisionFun(dayFilter){

    this.sHours = document.querySelector(".s_hours .swiper-slide-active p").textContent;
    this.sMints = document.querySelector(".s_mints .swiper-slide-active p").textContent;
    this.sV = document.querySelector(".s_v .swiper-slide-active p").textContent;
    this.eHours = document.querySelector(".e_hours .swiper-slide-active p").textContent;
    this.eMints = document.querySelector(".e_mints .swiper-slide-active p").textContent;
    this.eV = document.querySelector(".e_v .swiper-slide-active p").textContent;
 
    var startTime =  this.sHours + ':' + this.sMints + ' ' + this.sV;
    var endTime = this.eHours + ':' + this.eMints + ' ' + this.eV;
 

    this.checkStart = this.start_date+' '+startTime;
    this.checkEnd = this.end_date+' '+endTime;

    var s = this.checkStart.split(" ")[0].split("-"),
    stD = new Date(this.checkStart.replace(/-/g, "/"));
    
    var e = this.checkEnd.split(" ")[0].split("-"),
    etD = new Date(this.checkEnd.replace(/-/g, "/"));

 
     var current = new Date(this.checkCurrentTime)

   
       if(dayFilter == "diffDay"){
       
      if(stD.getTime() === etD.getTime()){
      
        //same date
   
        this.printTimeErrorBoolen = true;
        this.printTimeError="Start time and end time is same" 
        this.presentToast('Start time and end time is same');
        // false
    }
    
    else if(stD.getTime() > etD.getTime()){
        //date 1 is newer
        this.printTimeError="Start Time is greater then End Time";
        this.presentToast('Start Time is greater then End Time');
        this.printTimeErrorBoolen = true;

        // fasle

    }
    else if(stD.getTime() < etD.getTime()){
      //date 1 is newer
      // this.printTimeError="noError"
      this.allowsubmitForm();
      // true

    }
     }

  


   }

  async allowsubmitForm() {

    this.printTimeErrorBoolen = false;
    this.sHours = document.querySelector(".s_hours .swiper-slide-active p").textContent;
    this.sMints = document.querySelector(".s_mints .swiper-slide-active p").textContent;
    this.sV = document.querySelector(".s_v .swiper-slide-active p").textContent;
    this.eHours = document.querySelector(".e_hours .swiper-slide-active p").textContent;
    this.eMints = document.querySelector(".e_mints .swiper-slide-active p").textContent;
    this.eV = document.querySelector(".e_v .swiper-slide-active p").textContent;

    this.document_oneError = false;

      if (this.start_date != '' && this.end_date != '' && this.document_one != null && this.document_one != "" && this.availableDate == false) {
  
        this.sHours = document.querySelector(".s_hours .swiper-slide-active p").textContent;
        this.sMints = document.querySelector(".s_mints .swiper-slide-active p").textContent;
        this.sV = document.querySelector(".s_v .swiper-slide-active p").textContent;
        this.eHours = document.querySelector(".e_hours .swiper-slide-active p").textContent;
        this.eMints = document.querySelector(".e_mints .swiper-slide-active p").textContent;
        this.eV = document.querySelector(".e_v .swiper-slide-active p").textContent;
        //var licenseImg = this.document_one.split(',')[1];
       
        const fileTransfer: FileTransferObject = this.transfer.create();
        const random = new Date().getTime();
        const optionlicenseImg: FileUploadOptions = {
          fileKey: 'photo',
          fileName: 'licenseImg_'+'_'+ random + '.jpeg',
          chunkedMode: false,
          httpMethod: 'post',
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
            this.document_one,
            'https://app.transusdrives.com/webservices/upload_license_image',
            optionlicenseImg
          )
          .then(
            (data: any) => {
              loading_uploading.dismiss();
              const img1 = JSON.parse(data.response);
              if(img1.status=="success"){
                this.imgLicense = img1.message;
                this.continueBooking();
              }
              else{
                alert("Error in image uploading");
              }
              
            },
          (err) => {
            loading_uploading.dismiss();
            console.log(err);
          }
          );
      // }
    } else {
      if(this.start_date == ''){
      this.presentToast('please select the booking dates')

      }
      else if(this.end_date == ''){
      this.presentToast('please select the booking dates')

      }
      else if(this.document_one == ''){
        this.document_oneError = true;
      }
      // this.presentToast('please select the booking dates')
      
    }
  }
  continueBooking(){
    var stringy = JSON.stringify({
      "requestType": 'book_by_car_id',
      "usersID": this.userID,
      "vehicleID": this.vehicle_id,
      "startDate":  this.start_date,
      "endDate":   this.end_date,
      "startTime": this.sHours + ':' + this.sMints + ' ' + this.sV,
      "endTime": this.eHours + ':' + this.eMints + ' ' + this.eV,
      "licenseImg": this.imgLicense,
      "trip_cost": this.currentCost,
      "currencyID": this.currencyID
    });
    this.present();
    // this.ShowLoading= true;
    this.restService.bookings(stringy).subscribe(response => {
      this.response = JSON.parse(response['_body']);
      if (this.response.status == 'error') {
        this.presentToast(this.response.message);
      } else if (this.response.status == 'success') {
        this.presentToast(this.response.msg);
        this.document_one = '';
        var myData = JSON.stringify({
          booking_details: this.response.booking_details,
          vehicle_imgs: this.response.vehicle_imgs
        });

        this.router.navigate(['/summary'], {
          queryParams: {
            value: myData
          },
        });
      }
      this.dismiss();
    }, err => {
      this.dismiss();
    });
  }
  slidePrev() {
    this.start_month_index--;
    if (this.start_month_index < 1) {
      this.currentYear = this.currentYear - 1;
      this.start_month_index = 12;
    }
    this.start_date_month = this.monthList(this.start_month_index);
    this.startmonthCounter = this.start_month_index;
    this.validateStartDate();
    // this.startSlides.slidePrev();
  }
  slideNext() {
    this.start_month_index++;
    if (this.start_month_index == 13) {
      this.currentYear = this.currentYear + 1;
      this.start_month_index = 1;
    }
    this.start_date_month = this.monthList(this.start_month_index);
    this.startmonthCounter = this.start_month_index;
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
    this.endmonthCounter = this.end_month_index;
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
    this.endmonthCounter = this.end_month_index;
    this.validateEndDate();
    // this.endSlides.slideNext();
  }
  validateStartDate() {

    setTimeout(() => {
      this.dateError = true;
      this.dateStartError = false;

      /**** end date ****/
      this.active_end_date = document.querySelector(".end_date .activeEndState")?.textContent;
      let cEndDate = new Date(this.currentYear, this.endmonthCounter - 1, this.active_end_date)?.getTime();
      /**** end date ****/
      this.active_start_date = document.querySelector(".start_date .activeState")?.textContent;
      let cDate = new Date(this.currentYear, this.startmonthCounter - 1, this.active_start_date)?.getTime();

      let sDate = new Date(this.db_start_date).setHours(0, 0, 0, 0);
      let eDate = new Date(this.db_end_date).setHours(0, 0, 0, 0);


      if (cDate >= sDate && cDate < eDate) {
        this.dateError = false;
      } else {
        this.dateError = true;
      }
      if (cDate >= cEndDate && this.dateError == false) {
        this.dateStartError = true;
        //this.validateEndDate();
      }
    }, 300);
  }
  validateEndDate() {
    setTimeout(() => {
      this.dateError = true;
      this.dateStartError = false;

      this.active_start_date = document.querySelector(".start_date .activeState")?.textContent;
      let cStartDate = new Date(this.currentYear, this.startmonthCounter - 1, this.active_start_date).getTime();

      this.active_end_date = document.querySelector(".end_date .activeEndState")?.textContent;
      let cDate = new Date(this.currentYear, this.endmonthCounter - 1, this.active_end_date).getTime();
      let sDate = new Date(this.db_start_date).setHours(0, 0, 0, 0);
      let eDate = new Date(this.db_end_date).setHours(0, 0, 0, 0);

      if (cDate > sDate && cDate <= eDate) {
        this.dateError = false;
      } else {
        this.dateError = true;
      }
      if (cStartDate >= cDate && this.dateError == false) {
        this.dateStartError = true;
      }
    }, 300);
  }
  monthList(param) {
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

  async uploadDocument() {
    let alert = await this.alertCtrl.create({
      message: 'Upload your driving license ID',
      buttons: [
        {
          text: 'Take image from camera',
          handler: () => {
            this.takeImageFromCamera();
          }
        },
        {
          text: 'Upload image from gallery',
          handler: () => {
            this.getImageFromGallery();
          }
        }
      ]
    });
    alert.present();
  }
  takeImageFromCamera() {

    this.imageService.selectImageInCamera().then((imageData) => {
      this.document_one = `data:image/png;base64,${imageData}`;


    }).catch(err => console.error(err));
  }
  getImageFromGallery() {

    var options = {
      maximumImagesCount: 1,
      outputType: 1
    };
    this.imagePicker.getPictures(options).then((imageData) => {

  
      this.document_one = `data:image/png;base64,${imageData}`;
 
  }, (err) => {
    console.log('imagepicker  now:', err);
   });
  }
  goToSummary() {
    this.router.navigate(['/summary']);
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
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }


  onChange(event) {
    alert('on change called')
    //this.getStartHoures();
  }

  dateMulti: string[];
  type: 'string';
  
 
  newDate(ev){
     console.log("custom date range",this.optionsRange);
    if (!this.olddateRange) {
      this.olddateRange = this.dateRange;
    }
    else {
      if ( this.olddateRange == this.dateRange) {
        this.dateRange = null;
        this.olddateRange = null;
      }
      else{
        this.olddateRange = this.dateRange;
      }
    }
    var ddff = moment(this.dateRange?.from);
    var df=  ddff.format('YYYY-MM-DD') 
    var dd = moment(this.dateRange?.to);
    var d=  dd.format('YYYY-MM-DD');

    this.start_date = df; 
    this.end_date = d;
  
   // -- Counting days differnce between two dates --  by moaviz//
    this.sHours = document.querySelector(".s_hours .swiper-slide-active p")?.textContent;
    this.sMints = document.querySelector(".s_mints .swiper-slide-active p")?.textContent;
    this.sV = document.querySelector(".s_v .swiper-slide-active p")?.textContent;

    this.eHours = document.querySelector(".e_hours .swiper-slide-active p")?.textContent;
    this.eMints = document.querySelector(".e_mints .swiper-slide-active p")?.textContent;
    this.eV = document.querySelector(".e_v .swiper-slide-active p")?.textContent;



    var calStartTime = this.sHours + ':' + this.sMints + ' ' + this.sV;
    var calEndTime = this.eHours + ':' + this.eMints + ' ' + this.eV;
    var EndTime = this.end_date + " " + calEndTime;
    var StartTime = this.start_date + " " + calStartTime;
    var daysDiffrence = moment(EndTime.replace(/-/g, "/")).diff(moment(StartTime.replace(/-/g, "/")), 'days');
    // -- Counting days differnce between two dates --  by moaviz//
    console.log('diff Days is new for check: ',daysDiffrence);
    console.log("current max days",this.max_days);
    if(daysDiffrence < this.min_days || daysDiffrence > this.max_days){
      console.log("Not bookded");
      this.errorMsgs = "For this car";
      console.log("maximum or minimum days");
      if(daysDiffrence > this.max_days){
       console.log("maximum days");
        this.errorMsgs += " maximum trip duration is " + this.max_trip_duration;
      }
      if(daysDiffrence < this.min_days){
        console.log("Minimum days");
        this.errorMsgs += " minimum trip duration is " + this.min_trip_duration;
      }
      this.availableDate = true;
    }
    else{
      this.availableDate = false;
      this.errorMsgs = "Car is already booked in these dates.";
      var stringy = JSON.stringify({
        "requestType": 'checking_dates',
        "vehicleID": this.vehicle_id,
        "startDate":  this.start_date,
        "endDate":   this.end_date,
      });
    
      // this.ShowLoading= true;
      this.restService.bookings(stringy).subscribe(response => {
        this.response = JSON.parse(response['_body']);
        if (this.response.status == 'error') {
          this.availableDate = true;
        } else if (this.response.status == 'success') {
          this.availableDate = false;
        }
        
      }, err => {
        alert('error');
      });
    }
    
   // -- Counting days differnce between two dates --  by moaviz//
  
  
  }
  getDifferenceInDays(startDate, endDate) {
    const diffInMs = Math.abs(endDate - startDate);
    return diffInMs / (1000 * 60 * 60 * 24);
  }

  monthListFormte(dates){
     var dateIndex   = dates.split('-');
     var param = dateIndex[1];
     if(param == 1){
         this.month = 'January';
     }else if(param == 2){
         this.month = 'February';
     }else if(param == 3){
       this.month = 'March';
     }else if(param == 4){
     this.month = 'April';
     }else if(param == 5){
       this.month = 'May';
     }else if(param == 6){
       this.month = 'June';
     }else if(param == 7){
       this.month = 'July';
     }else if(param == 8){
       this.month = 'August';
     }else if(param == 9){
       this.month = 'September';
     }else if(param == 10){
       this.month = 'October';
     }else if(param == 11){
       this.month = 'November';
     }else if(param == 12){
       this.month = 'December';
     }
     return dateIndex[2]+" " + this.month +" " + dateIndex[0] ;
   }
 
  
}
