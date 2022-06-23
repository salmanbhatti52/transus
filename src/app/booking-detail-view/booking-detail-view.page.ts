
import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';

import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { Storage } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
 import { Location } from '@angular/common';
import { AlertController, Platform,IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-booking-detail-view',
  templateUrl: './booking-detail-view.page.html',
  styleUrls: ['./booking-detail-view.page.scss'],
})
export class BookingDetailViewPage implements OnInit {
  response: any;
  vehicle_imgs: any;
  booking_details: any;
  userID: any;
  base_url: any;
  currency_symbol: any;
  start_time: any;
  end_time: any;
  userString: any;

  trip_cost:any;
  booking_id:any;
  publicKey:string;
  tabType:string;
  pageType:string;
  showSlide: any = 'no'
  customerDetails = { name: '', email: '', phone_number: ''}
  customizations = {title: 'TransUS', description: 'Pay now for confrim your booking', logo: 'https://flutterwave.com/images/logo-colored.svg'}
  meta = {counsumer_id: '', consumer_mac: ''}
  constructor(private photoViewer: PhotoViewer,private storage: Storage,
    public router:Router,public activatedRoute:ActivatedRoute,
    public iab:InAppBrowser,  
    public location:Location,
    public restService:RestService, public plateform: Platform, public alertController : AlertController) {
    this.activatedRoute.queryParams.subscribe((res)=>{
      this.response = JSON.parse(res.value);
      console.log("All Booking record",this.response);
      this.booking_details =  this.response.booking_details;
      this.vehicle_imgs    =  this.response.vehicle_imgs;
      this.trip_cost    = this.booking_details.trip_cost
      this.booking_id   =  this.booking_details.bookings_id
      this.publicKey  = this.booking_details.flutterWave_public_key
      this.start_time = this.converTime(this.booking_details.start_time);
      this.end_time = this.converTime(this.booking_details.end_time);

      this.tabType = res.tabType;
      this.pageType = res.pageType;
      if(this.pageType=="listed_booking"){ 
        this.userString = "Booked by";
      }
      else{
        this.userString = "Vehicle onwer";
      }
      console.log("All Imagesssssssss",this.vehicle_imgs);
      
    });
   }

   Email:any;
   plateformCheck:any;
   ngOnInit() {
    if(this.plateform.is('ios')){
      this.plateformCheck = "ios";
    }
    else{
      this.plateformCheck = "android";
    }
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

   back(){
     console.log("back");
     this.location.back();
   }
  //  previewImage(p){
  //   this.photoViewer.show(this.base_url+''+p);
  // }
  previewImage(p) {
    console.log('photo viewer')

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
  
  converTime(time){
    let hour = (time.split(':'))[0]
    let min = (time.split(':'))[1]
    let part = hour > 12 ? 'pm' : 'am';
    
    min = (min+'').length == 1 ? '0'+min : min;
    hour = hour > 12 ? hour - 12 : hour;
    hour = (hour+'').length == 1 ? '0'+hour : hour;
  
    return (hour+':'+min+' '+part)
  }


  chatRequest(pageType,tabType,bookingDetails) {
    var current_date = new Date();
    var end_dates = new Date(bookingDetails.end_date); 
    if((end_dates.getTime() < current_date.getTime() && bookingDetails.status==="Accepted")){ 
       this.chatAlert(bookingDetails.status,bookingDetails.end_date,bookingDetails.payment_status);
    }
    else{
      if (this.userID) {
        if(pageType=="listed_booking"){
          var stringy = JSON.stringify({
            "requestType": 'chatRequest',
            "otherUserId": this.booking_details.booked_by_users_id,
            "usersID":  this.userID
          });
        }
        else{
          var stringy = JSON.stringify({
            "requestType": 'chatRequest',
            "otherUserId": this.booking_details.veh_users_id,
            "usersID": this.userID
          });
        }
        
        console.log(stringy);
        this.restService.update_messages(stringy).subscribe(response => {
          this.response = JSON.parse(response['_body']);
          console.log(this.response);
          if (this.response.status == 'error') {
  
          } else if (this.response.status == 'AlreadySent' || this.response.status == 'RequestSend') {
            if(pageType=="listed_booking"){
              var myData = JSON.stringify({
                otherUserId: this.booking_details.booked_by_users_id,
                userID: this.userID,
                user_name: this.response.user_name,
                profile_img: this.response.profile_img
              });
            }
            else{
              var myData = JSON.stringify({
                otherUserId:  this.booking_details.veh_users_id,
                userID: this.userID,
                user_name: this.response.user_name,
                profile_img: this.response.profile_img
              });
            }
          
  
            console.log(myData);
            this.router.navigate(['/chat-detail'], {
              queryParams: {
                value: myData
              },
            });
  
          }
  
        }, err => {
  
        });
      } else {
        this.router.navigate(['/login']);
      }
    }
    console.log("bookingDetailsbookingDetails",bookingDetails);
  
    
  }

  async chatAlert(status,end_date,paymentStatus) {
    var msg = "";
    var current_date = new Date();
    var end_dates = new Date(end_date); 
    console.log(end_dates.getTime(),"end_dateend_dateend_date");
    console.log(current_date.getTime(),"current_datecurrent_date");
    console.log("currentStatus",status);

    if((status==="Completed" && paymentStatus=="Paid") || (end_dates.getTime() < current_date.getTime() && status==="Accepted" && paymentStatus=="Paid" )){  
      msg = "Booking is completed";
    }
    else if(status==="Cancelled"){
      msg = "Booking is cancelled";
    }
    else if(status==="Rejected"){
      msg = "Booking is rejected";
    }
    else{
      msg = "Chat can't be started until booking is confirmed";
    }
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Chat is disabled',
      message: msg,
      buttons: ['OK']
    });
    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
