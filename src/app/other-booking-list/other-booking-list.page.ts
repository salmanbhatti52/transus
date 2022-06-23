import { Component, OnInit, PlatformRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, MenuController, Platform, PopoverController, ToastController, NavController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { Storage } from '@ionic/storage';
import { GiveRatingPage } from '../give-rating/give-rating.page';
import { ActionBookingPage } from '../action-booking/action-booking.page';
import { Location } from '@angular/common';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-other-booking-list',
  templateUrl: './other-booking-list.page.html',
  styleUrls: ['./other-booking-list.page.scss'],
})
export class OtherBookingListPage implements OnInit {

  pet: string = "puppies";
  response: any;
  userID: any;
  Email: any;
  vehicles_list: any;
  base_url: any;
  upcomingBooking: any;
  previousBooking: any;
  cancelsBooking:any;
  pending_bookings:any;
  currencyID: any;
  currency_symbol: any;
  currentBooking:any;
  page_number :number=0;
  page_number_all: number = 0;
  // baseURL:any;
  constructor(public toastController:ToastController,
    public popoverController:PopoverController,public restService:RestService,
    private storage: Storage,public router:Router,public menuCtrl: MenuController,
    public location:Location,
    public activatedRoute:ActivatedRoute, public alertController:AlertController,
    public plateform: Platform,
    public loadingController: LoadingController,public navController: NavController) { }
    valres:any;
    plateformCheck:any;
    loading:any;
  ionViewWillEnter() {
  /*   this.menuCtrl.enable(false); */
    this.activatedRoute.queryParams.subscribe((res)=>{
      this.valres =  res.value;
      console.log(res);
      console.log(this.valres);
      if(this.valres){
        if(this.valres == "pending"){
          this.pet = 'pending';
        }
        else if(this.valres == "upcoming"){
          this.pet = 'upcoming';
        }
        else if(this.valres == "cancel"){
          this.pet = 'cancel';
        }
       
       
      }
      else  {
        this.pet = 'pending';
        console.log('pending')
      }
      
    })
    this.storage.get('user_details').then((user_details) => {
      console.log(user_details);
      this.userID = user_details.users_id;
      this.Email = user_details.email;
      this.currencyID = user_details.currencies_id;
      this.getCarList();
      this.storage.get('base_urls').then((base_url) => {
        this.base_url = base_url;
      });
      this.storage.get('currency_symbol').then((currency_symbol) => {
        this.currency_symbol = currency_symbol;
      });
    });

    
    
  }

  ngOnInit(){
    if(this.plateform.is('ios')){
      this.plateformCheck = "ios";
    }
    else{
      this.plateformCheck = "android";
    }
  }

async giveRating(bookingId){
    
  const popover = await this.popoverController.create({
    component: GiveRatingPage,
    backdropDismiss: false,
    translucent: true,
    componentProps: {
      "data": bookingId,
      "booking": 'cancel_booking'
    },
  }); 
  popover.onWillDismiss().then(data => {
    
    console.log(data);
    console.log(data.data.val);
    if(data.data.val == 'ok'){
      this.getCarList();
    }
  })
  return await popover.present();
} 
doInfinite(event,type){
  this.getOtherBookings(true,event,type);
}
doRefresh(event,type){
  console.log(type,"typetypetype");
  console.log('Begin async operation');
   this.getOtherBookings(false,event,type,"refresher");
    //this.getCarList(event)  
}

getOtherBookings(isFirstLoad?,event?,type?,refresher?,loader?){
  if(loader){
    this.present();
  }
  let offset = 0;
  if(isFirstLoad==false){
    this.page_number = offset; 
  }
  var stringy = JSON.stringify({
    "requestType" : "others_"+type,
    "usersID":this.userID,
    "currencyID": this.currencyID,
    "limit": 3,
    "offset":this.page_number
  });
  console.log(stringy);
 this.restService.bookings(stringy).subscribe(response => {
  if (isFirstLoad){
     event.target.complete();
   }
   this.page_number = this.page_number + 3;
  if(refresher){
    event.target.complete();
  }
   this.response      =  JSON.parse(response['_body']);
   if(loader){
    this.dismiss();
  }
   console.log(this.response);
   if(type=="previous"){
    if(isFirstLoad==false){
      this.previousBooking = [];
    }
    console.log("previous_arraysss",this.previousBooking)
    this.previousBooking = [...this.previousBooking, ...this.response.previous_bookings];

    if(this.previousBooking){
      if(this.previousBooking[0].bookings_id == null){
        this.previousBooking = [];
       }
     }
   }
   else if(type=="cancel"){
    if(isFirstLoad==false){
      this.cancelsBooking = [];
    }
    this.cancelsBooking = [...this.cancelsBooking, ...this.response.canceled_bookings];
    if(this.cancelsBooking){
      if(this.cancelsBooking[0]?.bookings_id == null){
        this.cancelsBooking = [];
       }
     }
   }
   else if(type=="current"){
    if(isFirstLoad==false){
      this.currentBooking = [];
    }
    this.currentBooking = [...this.currentBooking, ...this.response.current_bookings];
    
    if(this.currentBooking){
      if(this.currentBooking[0]?.bookings_id == null){
        this.currentBooking = [];
       }
     }
   }
   else if(type=="upcoming"){
    if(isFirstLoad==false){
      this.upcomingBooking = [];
    }
    this.upcomingBooking = [...this.upcomingBooking, ...this.response.upcoming_bookings];
    
    if(this.upcomingBooking.length != 0){
      if(this.upcomingBooking[0]?.bookings_id == null || undefined){
       this.upcomingBooking = [];
      }
     }
   }
   else if(type=="pending"){
    if(isFirstLoad==false){
      this.pending_bookings = [];
    }
    this.pending_bookings = [...this.pending_bookings, ...this.response.pending_bookings];
      
   if(this.pending_bookings.length != 0){
    if(this.pending_bookings[0]?.bookings_id == null){
      this.pending_bookings = [];
     }
   }
   }
  
  },err => {
  
  });
}

 getCarList(event?){
  this.page_number = 0;
  this.present();
  var stringy = JSON.stringify({
    "requestType" : "others_cars",
    "usersID":this.userID,
    "currencyID": this.currencyID,
    "limit": 3,
    "offset":this.page_number
  });
  console.log(stringy);
 this.restService.bookings(stringy).subscribe(response => {
  this.dismiss();
  if(event){
    event.target.complete();
  }
   this.page_number = this.page_number + 3;
   this.response      =  JSON.parse(response['_body']);
   console.log(this.response);
   this.previousBooking = this.response.previous_bookings;
   this.cancelsBooking = this.response.canceled_bookings;
   this.currentBooking = this.response.current_bookings;
   this.pending_bookings = this.response.pending_bookings;
   this.upcomingBooking = this.response.upcoming_bookings;

   if(this.previousBooking){
    if(this.previousBooking[0].bookings_id == null){
      this.previousBooking = [];
     }
   }
  
   if(this.cancelsBooking){
    if(this.cancelsBooking[0].bookings_id == null){
      this.cancelsBooking = [];
     }
   }
  
   if(this.currentBooking){
    if(this.currentBooking[0].bookings_id == null){
      this.currentBooking = [];
     }
   }
  
   if(this.pending_bookings.length != 0){
    if(this.pending_bookings[0].bookings_id == null){
      this.pending_bookings = [];
     }
   }
  
   if(this.upcomingBooking.length != 0){
   if(this.upcomingBooking[0].bookings_id == null || undefined){
    this.upcomingBooking = [];
   }
  }
   
  
   console.log(this.pending_bookings)
  //  if(this.pending_bookings[0].bookings_id == null){
  //   this.upcomingBooking = [];
  //  }
  },err => {
  
  });
}


getpet(val){
  this.pet = val;
}
data:any;
async alertBooking(booking){
  this.data = booking;
  console.log(booking,"booking from html")
  console.log(this.data,"get from booking ")

  const popover = await this.popoverController.create({
    component: ActionBookingPage,
    backdropDismiss: false,
    translucent: true,
    componentProps: {
      "data": this.data.bookings_id,
      "booking": 'payment_booking',
      "ownerID": this.data.veh_users_id,
      "userID": this.data.booked_by_users_id,
    },
  }); 
  popover.onWillDismiss().then(data => {
    console.log(data);
    console.log(data.data.val);
    if(data.data.val == 'ok'){
      this.pet = "cancel"
      this.paynow(booking);
    }
  })
  return await popover.present();
} 

async completeBooking(booking, index){

  this.data = booking;
  console.log(booking,"booking from html")
  console.log(this.data,"get from booking ")

  const popover = await this.popoverController.create({
    component: ActionBookingPage,
    backdropDismiss: false,
    translucent: true,
    componentProps: {
      "data": this.data.bookings_id,
      "booking": 'complete_booking',
      "ownerID": this.data.veh_users_id,
      "userID": this.data.booked_by_users_id,
    },
  }); 
  popover.onWillDismiss().then(data => {
    console.log(data);
    console.log(data.data.val);
    if(data.data.val == 'ok'){
      this.getOtherBookings(false,null,"previous",null,"loader");
      this.currentBooking.splice(index,1)
      this.pet = "previous";
      // -- Give ratting -- //
       this.giveRating(this.data.bookings_id)
      // -- Give ratting -- //
    }
  })
  return await popover.present();
} 


async cancelBooking(booking,index){
  
  this.data = booking;
  console.log(booking,"booking from html")
  console.log(this.data,"get from booking ")

  const popover = await this.popoverController.create({
    component: ActionBookingPage,
    backdropDismiss: false,
    translucent: true,
    componentProps: {
      "data": this.data.bookings_id,
      "booking": 'cancel_booking',
      "ownerID": this.data.veh_users_id,
      "userID": this.data.booked_by_users_id,
    },
  }); 
  popover.onWillDismiss().then(data => {
    console.log(data);
    console.log(data.data.val);
    if(data.data.val == 'ok'){
      this.getOtherBookings(false,null,"cancel",null,"loader");
      this.pending_bookings.splice(index,1);
      this.pet = "cancel"
      //this.getCarList();
     
    }
  })
  return await popover.present();
} 

paynow(bookingdetails){

  console.log(bookingdetails)
  console.log(bookingdetails.veh_imgs)
  
  var myData = JSON.stringify({
    booking_details: bookingdetails,
    vehicle_imgs: bookingdetails.veh_imgs
  });

  this.router.navigate(['/summary'], {
    queryParams: {
      value: myData
    },
  });
}
 
ViewNow(bookingdetails){

  console.log(bookingdetails)
  console.log(bookingdetails.veh_imgs)
  
  var myData = JSON.stringify({
    booking_details: bookingdetails,
    vehicle_imgs: bookingdetails.veh_imgs
  });

  this.router.navigate(['/booking-detail-view'], {
    queryParams: {
        pageType: "others_booking",
        tabType: this.pet,
        value: myData
    },
  });
}

 toggleMenu(){
   this.menuCtrl.toggle();
 }

 back(){
    // this.router.navigate(['/bookings']);
    this.navController.navigateRoot(['/bookings'])
  }
  BookNow(){
    this.present();
    var stringy = JSON.stringify({
      "requestType": 'all_cars_list',
      "usersID": this.userID,
      "currencyID": this.currencyID,
      "limit": 4,
      "offset":this.page_number_all,
    });
    console.log(stringy);
    this.restService.filters(stringy).subscribe(response => {
      this.response =  JSON.parse(response['_body']);
      if(this.response.status == 'NotFound'){
        this.presentToast('Data Not Found!');
     }else if(this.response.status == 'Found'){
       console.log(this.response.cars_list_result);
       var myData = JSON.stringify({
        cars_list_result: this.response.cars_list_result
      });
        this.restService.fromHomeToSearch = myData;
        this.dismiss()
        this.router.navigate(['/car-list']);
     }
     },err => {
     
     });
  }
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position:'top'
    });
    toast.present();
  }

   
  async pendingAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Booking Infomation',
      subHeader: 'Booking Status Pending',
      message: 'Your booking status is Pending, you can proceed when it is Accepted by the owner',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
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
  async waitingAlert() {
    var msg = "";
   
    
    msg = "Your payment is received waiting for admin response";

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Waiting for approval',
      message: msg,
      buttons: ['OK']
    });
    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  chatRequest(pageType,tabType,bookingDetails) {
    console.log("bookingDetails",bookingDetails);
   
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
            "otherUserId": bookingDetails.booked_by_users_id,
            "usersID":  this.userID
          });
        }
        else{
          var stringy = JSON.stringify({
            "requestType": 'chatRequest',
            "otherUserId": bookingDetails.veh_users_id,
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
                otherUserId: bookingDetails.booked_by_users_id,
                userID: this.userID,
                user_name: this.response.user_name,
                profile_img: this.response.profile_img
              });
            }
            else{
              var myData = JSON.stringify({
                otherUserId:  bookingDetails.veh_users_id,
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
