import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';

import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { Storage } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { IonSlides } from '@ionic/angular';
import { Location } from '@angular/common';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage implements OnInit {
  response: any;
  vehicle_imgs: any;
  booking_details: any;
  userID: any;
  base_url: any;
  currency_symbol: any;
  start_time: any;
  end_time: any;
  showSlide: any = 'no'
  trip_cost:any;
  booking_id:any;
  publicKey:string;
  customerDetails = { name: '', email: '', phone_number: ''}
  customizations = {title: 'TransUS', description: 'Pay now for confrim your booking', logo: 'https://flutterwave.com/images/logo-colored.svg'}
  meta = {counsumer_id: '', consumer_mac: ''}
  constructor(private photoViewer: PhotoViewer,private storage: Storage,
    public router:Router,public activatedRoute:ActivatedRoute,
    public iab:InAppBrowser,   
    public location:Location,
    public restService:RestService,  ) {
    this.activatedRoute.queryParams.subscribe((res)=>{
      this.response = JSON.parse(res.value);
      console.log("Bookinfsss detailssss",this.response);
      this.booking_details =  this.response.booking_details;
      this.vehicle_imgs    =  this.response.vehicle_imgs;
      this.trip_cost    = this.booking_details.trip_cost
      this.booking_id   =  this.booking_details.bookings_id
      this.publicKey  = this.booking_details.flutterWave_public_key
      this.start_time = this.converTime(this.booking_details.start_time);
      this.end_time = this.converTime(this.booking_details.end_time);
    });
   }
   Email:any;
  ngOnInit() {
  //   this.uniqueID.get()
  // .then((uuid: any) =>{
  //  console.log(uuid, "uniquedevideID");
  //  this.meta.consumer_mac = uuid
  // })
  // .catch((error: any) => console.log(error));

    this.storage.get('user_details').then((user_details) => {
      console.log(user_details);
      this.userID = user_details.users_id;
      this.Email = user_details.email;
      this.meta.counsumer_id = this.userID; 
      this.customerDetails.name = user_details.user_name;
      this.customerDetails.email = user_details.email;
      this.storage.get('base_urls').then((base_url) => {
        this.base_url = base_url;
      });
      
      this.storage.get('currency_symbol').then((currency_symbol) => {
        this.currency_symbol = currency_symbol;
      });
    });
  }

  
   converTime(time){
    let hour = (time.split(':'))[0]
    let min = (time.split(':'))[1]
    let part = hour > 12 ? 'pm' : 'am';
    
    min = (min+'').length == 1 ? '0'+min : min;
    hour = hour > 12 ? hour - 12 : hour;
    hour = (hour+'').length == 1 ? '0'+hour : hour;
  
    return (hour+':'+min+' '+part)
  }

  // previewImage(p){
  //   this.photoViewer.show(this.base_url+''+p);
  // }
  previewImage(p) {

    this.showSlide = 'yes'

    this.indexOfSLide = 1
    //this.photoViewer.show(this.base_urls + '' + p);
  }

  closeModel() {
    this.showSlide = 'no'
  }

  indexOfSLide = 1

  @ViewChild('slides', { static: false }) slides: IonSlides;

  slideChanged(e: any) {
    
    this.slides.getActiveIndex().then((index: number) => {
      console.log('index -----------', index);

      this.indexOfSLide = index + 1

    })
  }
  back(){
    // this.router.navigate(['/']);
    this.location.back();
  }

   
  hostedRes:any;
  ForLink:any;
  fLink:any;
  paymentDone:boolean = false;


  paymentssBrowsersNotinUsed(){
    var JsData = JSON.stringify({
      currencyID:"1",
      requestType:"payment_process",
      email:this.Email,
      amount:this.trip_cost,
      booking_id:this.booking_id
   })
   this.restService.payementAPi(JsData).subscribe(res => {
     console.log(res,"get responce from booking getway");
     this.hostedRes = JSON.parse(res['_body']);
     this.ForLink = this.hostedRes.flutter_reponse 
     console.log(this.ForLink);
     console.log(this.ForLink.data.link)
     this.fLink = this.ForLink.data.link
     console.log(this.fLink)
 
     const browser = this.iab.create(this.fLink, '_blank', { location: 'no', footer: 'yes', zoom: 'no', usewkwebview: 'yes', toolbar: 'yes' ,closebuttoncaption:'CLOSE WINDOW'});

   },err =>{
     console.log(err)
   })
  }




  bookingpage(getValue){
    this.router.navigate(['/other-booking-list'],{

      queryParams: {
        value : getValue,
        },
      });
  }

 

  getRespo:any;

      flutterWaves(){
    
        this.router.navigate(['/flutter-waves'],{

          queryParams: {
            value : this.booking_details.trip_cost,
            symbol:this.currency_symbol,
            userid:this.userID,
            bookingId:this.booking_details.bookings_id,
            email:this.Email
            },
          })
        // var sucFul = JSON.stringify({
        //   requestType:"payment_process",
        //   amount: this.getRespo.amount,
        //   customer_userid:this.userID,
        //   flw_ref:this.getRespo.flw_ref,
        //   transaction_id: this.getRespo.transaction_id,
        //   bookings_id: this.booking_id,
        //   ownerID: this.booking_details.veh_users_id,
        //   currency:"USD",
        //   currencyID:"1"
        // })
        // this.restService.paidbooking(sucFul).subscribe(res=>{
        //   console.log(res,"paid save in webservice")
        //   this.paymentDone = true;
        // },err => {
        //   console.log(err);
        // })
      }
  // flutterWavesPaymentNotinUsed(){

  //  var paymentData : AsyncPaymentOptions = {
  //     public_key: this.publicKey,
  //     tx_ref: this.generateReference(),
  //     amount: this.trip_cost,
  //     currency: 'USD',
  //     payment_options: 'card',
  //     meta: this.meta,
  //     customer: this.customerDetails,
  //     customizations: this.customizations,
  //    }
  //    console.log("complete result = ", paymentData);
  //   this.flutterwave.asyncInlinePay(paymentData).then(
  //     (response) =>{
  //       console.log("Promise Res line 88" , response)
  //       this.getRespo = response;
  //       this.flutterwave.closePaymentModal(5);
  //       if(this.getRespo.status == "successful"){
          
  //         console.log("success condition");
  //         var sucFul = JSON.stringify({
  //         requestType:"payment_process",
  //         amount: this.getRespo.amount,
  //         customer_userid:this.userID,
  //         flw_ref:this.getRespo.flw_ref,
  //         transaction_id: this.getRespo.transaction_id,
  //         bookings_id: this.booking_id,
  //         ownerID: this.booking_details.veh_users_id,
  //         currency:"USD",
  //         currencyID:"1"
  //       })
  //       this.restService.paidbooking(sucFul).subscribe(res=>{
  //         console.log(res,"paid save in webservice")
  //         this.paymentDone = true;
  //       },err => {
  //         console.log(err);
  //       })
        
  //       }
  //     });
  // }   
////////////////////////// flutter waves payment //////////////////////////
  // closedPaymentModal(): void {
  //   console.log('payment is closed');
  // }
  // generateReference(): string {
  //   let date = new Date();
  //   return date.getTime().toString();
  // }
   

}
