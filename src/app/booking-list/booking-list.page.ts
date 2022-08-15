import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AlertController,
  LoadingController,
  MenuController,
  NavController,
  PopoverController,
  ToastController,
} from '@ionic/angular';
import { RestService } from '../rest.service';
import { Storage } from '@ionic/storage';
import { GiveRatingPage } from '../give-rating/give-rating.page';
import { ActionBookingPage } from '../action-booking/action-booking.page';
import { Location } from '@angular/common';
@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.page.html',
  styleUrls: ['./booking-list.page.scss'],
})
export class BookingListPage implements OnInit {
  pet: string = 'puppies';
  response: any;
  userID: any;
  Email: any;
  vehicles_list: any;
  base_url: any;
  upcomingBooking: any;
  previousBooking: any;
  requested_bookings: any;
  cancelsBooking: any;
  currentBooking: any;
  currency_symbol: any;
  currencyID: any;
  valres: any;
  loading: any;
  page_number_all: number = 0;
  constructor(
    public popoverController: PopoverController,
    public toastController: ToastController,
    public restService: RestService,
    private storage: Storage,
    public router: Router,
    public menuCtrl: MenuController,
    public activatedRoute: ActivatedRoute,
    public location: Location,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public navController: NavController
  ) {}

  ngOnInit() {
    // this.pet = 'request';
    this.activatedRoute.queryParams.subscribe((res) => {
      this.valres = res.value;
      console.log(res);
      console.log(this.valres);
      if (this.valres) {
        if (this.valres == 'request') {
          this.pet = 'request';
        } else if (this.valres == 'upcoming') {
          this.pet = 'upcoming';
        } else if (this.valres == 'cancel') {
          this.pet = 'cancel';
        }
      } else {
        this.pet = 'request';
        console.log('request');
      }
    });
  }

  ionViewWillEnter() {
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

    /*  this.menuCtrl.enable(false); */
  }
  doRefresh(event) {
    console.log('Begin async operation');
    this.getCarList(event);
  }
  getCarList(event?) {
    this.present();
    var stringy = JSON.stringify({
      requestType: 'listed_cars',
      usersID: this.userID,
      currencyID: this.currencyID,
    });
    console.log(stringy);
    this.restService.bookings(stringy).subscribe(
      (response) => {
        this.response = JSON.parse(response['_body']);
        this.dismiss();
        if (event) {
          event.target.complete();
        }
        this.cancelsBooking = this.response.canceled_bookings;
        this.previousBooking = this.response.previous_bookings;
        this.upcomingBooking = this.response.upcoming_bookings;
        this.currentBooking = this.response.current_bookings;
        this.requested_bookings = this.response.requested_bookings;

        if (this.currentBooking) {
          if (this.currentBooking[0].bookings_id == null) {
            this.currentBooking = [];
          }
        }

        if (this.cancelsBooking) {
          if (this.cancelsBooking[0].bookings_id == null) {
            this.cancelsBooking = [];
          }
        }

        if (this.previousBooking) {
          if (this.previousBooking[0].bookings_id == null) {
            this.previousBooking = [];
          }
        }

        if (this.upcomingBooking) {
          if (this.upcomingBooking[0].bookings_id == null) {
            this.upcomingBooking = [];
          }
        }

        if (this.requested_bookings) {
          if (this.requested_bookings[0].bookings_id == null) {
            this.requested_bookings = [];
          }
        }
      },
      (err) => {}
    );
  }

  finalAction(actionType,bookingDetails,type,index) {
    console.log("bookingDetails----",bookingDetails);
  
    // this.currentBooking[0].owner_response = 'Delivered';
    console.log("currentBooking----",this.currentBooking);
    
    this.present();
    var stringy = JSON.stringify({
      requestType : 'action',
      usersID : this.userID,
      actionType : actionType,
      type : type,
      bookingID : bookingDetails.bookings_id,
    });
    console.log(stringy);
    this.restService.booking_action(stringy).subscribe(
      (response) => {
        this.response = JSON.parse(response['_body']);
        this.dismiss();
        console.log("this.response------ booking action",this.response);
        if(this.response.status=='success'){
          
           if(type=='Deliver'){
            bookingDetails.owner_response = 'Delivered';
           }
           if(type=='Recevie'){
            bookingDetails.owner_response = 'Recevied';
            this.currentBooking.splice(index,1);
            this.pet = "previous";
           }
        }
      },
      (err) => {}
    );
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  back() {
    this.navController.navigateRoot(['/bookings']);
  }
  BookNow() {
    this.present();
    var stringy = JSON.stringify({
      requestType: 'all_cars_list',
      usersID: this.userID,
      currencyID: this.currencyID,
      limit: 4,
      offset: this.page_number_all,
    });
    console.log(stringy);
    this.restService.filters(stringy).subscribe(
      (response) => {
        this.response = JSON.parse(response['_body']);
        if (this.response.status == 'NotFound') {
          this.presentToast('Data Not Found!');
        } else if (this.response.status == 'Found') {
          console.log(this.response.cars_list_result);
          var myData = JSON.stringify({
            cars_list_result: this.response.cars_list_result,
          });
          this.restService.fromHomeToSearch = myData;
          this.dismiss();
          this.router.navigate(['/car-list']);
        }
      },
      (err) => {}
    );
  }
  data: any;
  cancel(booking) {
    console.log(booking);
    this.data = booking;
    // bookingid , action/requestType, userID, ownerid,
    this.action(
      this.data.bookings_id,
      'cancel_booking',
      this.data.booked_by_users_id,
      this.data.veh_users_id,
      'cancel'
    );
  }
  reject(booking) {
    console.log(booking);
    console.log(this.pet, 'peeee');
    this.data = booking;
    this.pet = 'request';
    // bookingid , action/requestType, userID, ownerid,
    this.action(
      this.data.bookings_id,
      'reject_booking',
      this.data.booked_by_users_id,
      this.data.veh_users_id,
      'cancel'
    );
  }
  accept(booking) {
    console.log(booking);
    this.data = booking;
    // bookingid , action/requestType, userID, ownerid,
    this.action(
      this.data.bookings_id,
      'accept_booking',
      this.data.booked_by_users_id,
      this.data.veh_users_id,
      'request'
    );
  }

  async action(bookingId, action, userID, OwnerID, petValue) {
    const popover = await this.popoverController.create({
      component: ActionBookingPage,
      translucent: true,
      backdropDismiss: false,
      componentProps: {
        data: bookingId,
        booking: action,
        ownerID: OwnerID,
        userID: userID,
      },
    });
    popover.onWillDismiss().then((data) => {
      console.log(data);
      console.log(data.data.val);
      if (data.data.val == 'ok') {
        this.getCarList();
        this.pet = petValue;
      }
    });
    return await popover.present();
  }
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: 'top',
    });
    toast.present();
  }

  ViewNow(bookingdetails) {
    console.log("all bookings---",bookingdetails);
    console.log(bookingdetails.veh_imgs);

    var myData = JSON.stringify({
      booking_details: bookingdetails,
      vehicle_imgs: bookingdetails.veh_imgs,
    });

    this.router.navigate(['/booking-detail-view'], {
      queryParams: {
        pageType: 'listed_booking',
        tabType: this.pet,
        value: myData,
      },
    });
  }

  async acceptUnapid() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Booking Infomation',
      subHeader: 'Booking Status Pending',
      message: 'You Accepted the booking and payment status is pending by user',
      buttons: ['OK'],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  getpet(val) {
    this.pet = val;
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
