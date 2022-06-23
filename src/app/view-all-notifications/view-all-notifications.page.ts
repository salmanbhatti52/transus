import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, MenuController, Platform, PopoverController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { Storage } from '@ionic/storage';
import { AcceptOfferPage } from '../accept-offer/accept-offer.page';
import * as moment from 'moment';
@Component({
  selector: 'app-view-all-notifications',
  templateUrl: './view-all-notifications.page.html',
  styleUrls: ['./view-all-notifications.page.scss'],
})
export class ViewAllNotificationsPage implements OnInit {
  userID: any;
  response: any;
  notifications: any = [ ];
  base_url: any;
  callInterval: any;
  currencies_id: any;
  plateformCheck:any;
  loading:any;
  timeZone : any;
  dataError:any = "Data Not Found!"
  constructor(public popoverController: PopoverController,
     public restService: RestService,
     private storage: Storage,
     public router: Router,
     public menuCtrl: MenuController,
     public plateform: Platform,
     public loadingController: LoadingController
     ) {

    this.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    console.log(this.timeZone,"timeZonetimeZone"); 

  }
  
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
      this.currencies_id = user_details.currencies_id;
      this.storage.get('base_urls').then((base_url) => {
        this.base_url = base_url;
        console.log("baseeeeee---eeeeee",this.base_url);
        this.viewAll(false);
      });
    });
    // this.callInterval = setInterval(() => {
    //   this.viewAll();

    // }, 3000
    // );
  }
  clearNotifcation(){
    this.present();
    var stringy = JSON.stringify({
      "requestType": "clear_all",
      "usersID": this.userID,
    }); 

    this.restService.notifications(stringy).subscribe(response => {
      this.response = JSON.parse(response['_body']);
       console.log("clear response",this.response);
       if(this.response.status=='success'){
        this.notifications = [];
       }
       this.dismiss();
      }, error => {
        console.log(error);
        this.dismiss();
      })
  }
  ionViewWillLeave() {
    clearInterval(this.callInterval);
    console.log('clear');
  }
  doRefresh(event){
    console.log('Begin async operation');
      this.viewAll(false,event,"refresher")  
  }
  toggleMenu() {
    this.menuCtrl.toggle();
  }
  page_number :number=0;
  notificationError :number=0;
  viewAll(isFirstLoad, event?,refresher?) {
    let offset = 0;
    if(isFirstLoad==false){
      this.page_number = offset; 
    }
    var stringy = JSON.stringify({
      "requestType": "get_all",
      "usersID": this.userID,
      "limit": 10,
      "offset":this.page_number,
      "readFilter":'',
      'timeZone':this.timeZone
    }); 

    this.restService.notifications(stringy).subscribe(response => {
      this.response = JSON.parse(response['_body']);
      if(isFirstLoad==false){
        this.notifications = [];
      }
      console.log("this.response.queryyyy",this.response.queryyyy);
      if (this.response.status == 'NotFound') {
       
        if (isFirstLoad){
          this.notificationError = null;
          this.dataError="No more notifications";
          event.target.complete();
        }
      } 
      
      else if (this.response.status == 'Found') {
        this.response.notifications;
        this.notifications = [...this.notifications, ...this.response.notifications];

        if (isFirstLoad)
          event.target.complete();

        this.page_number = this.page_number + 10;
      }
      if(refresher){
        event.target.complete();
      }
       
      }, error => {
        console.log(error);
      })
  }
  doInfinite(event) {
    this.viewAll(true, event);
  }
  gotoDetails:any;
  accptOffer(p) {

    console.log(p);

    if (p.offer_id) {
      this.readNotification(p)
      var stringy = JSON.stringify({
        "requestType": "check_offer_by_id",
        "customerID": this.userID,
        "offerID": p.offer_id,
        "currencyID": this.currencies_id
      });
      this.restService.inquire_charges(stringy).subscribe(response => {
        this.response = JSON.parse(response['_body']);
        console.log(this.response);
        if (this.response.status == 'NotFound') {
          console.log('NotFound');
        } else if (this.response.status == 'Found') {
          this.offerPopup(this.response.offers, p.offer_id);
        }
      }, err => {

      });
    }

 

    // if (p.type_id == '5' || p.type_id == '7') {
    
    // //  this.readNotification(p);

    //   var vhDetails = JSON.stringify({
    //     requestType: "get_car_details_by_id",
    //     usersID: this.userID,
    //     vehicleID: p.vehicle_id,
    //     currencyID: this.currencies_id
    //   })

    //   console.log(vhDetails);
    //   this.router.navigate(['/listed-car']);


    //   // this.restService.list_vehicles(vhDetails).subscribe(vhRes =>{
    //   //   console.log(JSON.parse(vhRes['_body'])," resss wheel");
    //   //   this.gotoDetails =JSON.parse(vhRes['_body'])
    //   //   console.log(this.gotoDetails.vehicles_list[0], "listing")
    //   //   var myData = JSON.stringify({
    //   //     cars_list_result: this.gotoDetails.vehicles_list[0],
    //   //     redirect: '/notification'
    //   //   });

    //   //   this.router.navigate(['/car-detail'], {
    //   //     queryParams: {
    //   //       value: myData  
    //   //     },
    //   //   });
    //   // },(err)=>{
    //   //   console.log(err);
    //   // });

    
    // }

    if (p.type_id == '1' || p.type_id == '3') {
      console.log('msggggggggggg', p);

      var myData = JSON.stringify({
        userID: p.receiver_id,
        otherUserId: p.sender_id,
        user_name: p.sender_name,
        profile_img: p.sender_img_url

      });
      console.log(myData);
      this.router.navigate(['/chat-detail'], {
        queryParams: {
          value: myData
        }
      });

    }
   else if (p.type_id == '2'){
    //  this.router.navigate(['/bookings'])
     this.router.navigate(['/booking-list'])

    
    } 
    else if (p.type_id == '5'|| p.type_id == '6' || p.type_id == '7'|| p.type_id == '8'|| p.type_id == '13'){
      //  this.router.navigate(['/bookings'])
       this.router.navigate(['/listed-car'])
  
      
      } 
      else if (p.type_id == '9'){
         this.router.navigate(['/bookings'])
        //  this.router.navigate(['/other-booking-list'])
        console.log("cancel booking");
        
        } 
      else if (p.type_id == '10'){
        //  this.router.navigate(['/bookings'])
        var gerValue = 'cancel'
        this.router.navigate(['/other-booking-list'],{

          queryParams: {
            value : gerValue
            },
          });
        //  this.router.navigate(['/other-booking-list'])
        console.log("reject booking");
        
        } 
      else if (p.type_id == '11'){
        //  this.router.navigate(['/bookings'])
          // this.router.navigate(['/booking-list'])
          var gerValue = 'upcoming'
          this.router.navigate(['/booking-list'],{

            queryParams: {
              value : gerValue
              },
            });
        console.log("payment done");

    
        
        } 
        else if (p.type_id == '12'){
          //  this.router.navigate(['/bookings'])
           this.router.navigate(['/other-booking-list'])
      
          
          } 
          else if (p.type_id == '14'){
            //  this.router.navigate(['/bookings'])
            var gerValue = 'cancel'
            this.router.navigate(['/booking-list'],{
    
              queryParams: {
                value : gerValue
                },
              });
            //  this.router.navigate(['/other-booking-list'])
            console.log("reject booking");
            } 
  }


  readNotification(notification) {
  
     var read = JSON.stringify({
      requestType : 'mark_read',
      usersID:    this.userID,
      notifyID: notification.notifications_id
     })
     this.restService.notifications(read).subscribe(res =>{
       console.log(res);
     
     },(readError)=>{
       console.log(readError);
     })

  }
  async offerPopup(p, offer_id) {
    const popover = await this.popoverController.create({
      component: AcceptOfferPage,
      componentProps: {
        "data": p,
        "offer_id": offer_id
      },
      translucent: true
    });
    popover.onWillDismiss().then(data => {

      // console.log('dismiss');

    })
    return await popover.present();
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
