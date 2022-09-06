import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, MenuController, Platform, PopoverController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { RestService } from '../rest.service';
import { ActionBookingPage } from '../action-booking/action-booking.page';
@Component({
  selector: 'app-listed-car',
  templateUrl: './listed-car.page.html',
  styleUrls: ['./listed-car.page.scss'],
})
export class ListedCarPage implements OnInit {
  response: any;
  userID: any;
  Email: any;
  vehicles_list: any = [];
  base_url: any;
  loading: HTMLIonLoadingElement;
  symbol: any;
  booking_exist: any;
  plateformCheck: any;
  constructor(public loadingController: LoadingController, public popoverController: PopoverController, public restService: RestService, private storage: Storage, public router: Router, public menuCtrl: MenuController, public plateform: Platform,
    public toastController: ToastController) { }

  ngOnInit() {
    if (this.plateform.is('ios')) {
      this.plateformCheck = "ios";
    }
    else {
      this.plateformCheck = "android";
    }

  }

  ionViewWillEnter() {

    this.storage.get('user_details').then((user_details) => {
      this.userID = user_details.users_id;
      this.Email = user_details.email;
      this.symbol = user_details.symbol;
      this.getCarList(false);
      this.storage.get('base_urls').then((base_url) => {
        this.base_url = base_url;
      });
    });
  }

  doRefresh(event) {
    this.getCarList(false, event, "refresher")
  }
  doInfinite(event) {
    this.getCarList(true, event);
  }
  page_number: number = 0;
  getCarList(isFirstLoad, event?, refresher?) {
    let offset = 0;
    if (isFirstLoad == false) {
      this.page_number = offset;

    }
    var stringy = JSON.stringify({
      "requestType": "get_cars_list",
      "usersID": this.userID,
      "limit": 4,
      "offset": this.page_number
    });
    if (!isFirstLoad) {
      this.present();
    }

    this.restService.list_vehicles(stringy).subscribe(response => {
      if (isFirstLoad == false) {
        this.vehicles_list = [];
      }
      this.response = JSON.parse(response['_body']);
      this.vehicles_list = [...this.vehicles_list, ...this.response.vehicles_list];

      /*  this.vehicles_list =  this.response.vehicles_list; */
      this.dismiss();
      if (isFirstLoad) {
        event.target.complete();
      }
      if (event) {
        event.target.complete();
      }
      if (refresher) {
        event.target.complete();
      }
      this.page_number = this.page_number + 4;
      if (!isFirstLoad) {
        this.dismiss();
      }

    }, err => {
      console.log(err);
    });
  }
  toggleMenu() {
    this.menuCtrl.toggle();
  }
  goToCarList() {
    this.router.navigate(['/listcar1']);
  }


  goToDraft() {
    this.router.navigate(['/mydraftcar']);
  }

  async editDetail(car_details) {
    this.present();
    var stringy = JSON.stringify({
      "requestType": "check_veh_req",
      "veh_id": car_details.vehicles_id
    });
    this.restService.check_vehicles(stringy).subscribe(response => {
      this.response = JSON.parse(response['_body']);
      this.dismiss();
      if (this.response.status == 'success') {
        this.popover('veh_msg');
      }
      else {
        var myData = JSON.stringify({
          vehiclesID: car_details.vehicles_id
        });

        this.router.navigate(['/edit-list-your-car'], {
          queryParams: {
            value: myData
          },
        });
      }


    }, err => {
      console.log(err);
    });



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
  async popover(type) {
    const popover = await this.popoverController.create({
      component: ActionBookingPage,
      translucent: true,
      componentProps: {
        "booking": type,
      },
    });

    popover.onWillDismiss().then(data => {
      if (data.data.val == 'ok') {
      }
    })
    await popover.present();
  }

  removeImage(detail,i){
    this.present();
    var stringy = JSON.stringify({
      "requestType": "check_veh_req",
      "veh_id": detail.vehicles_id
    });
    this.restService.check_vehicles(stringy).subscribe(response => {
      this.response = JSON.parse(response['_body']);
      this.dismiss();
      if (this.response.status == 'success') {
        this.popover('veh_delete');
      }
      else {
        this.action(detail, 'del_veh',i);
      }


    }, err => {
      console.log(err);
    });
   
  }

  async action(veh_details, action,i) {
    const popover = await this.popoverController.create({
      component: ActionBookingPage,
      translucent: true,
      backdropDismiss: false,
      componentProps: {
        data: 1,
        booking: action,
        ownerID: 2,
        userID: veh_details.vehicles_id,
      },
    });
    popover.onWillDismiss().then((data) => {
    
      if (data.data.val == 'ok') {
        this.vehicles_list.splice(i,1);
        this.presentToast('Car deleted successfully');
  
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



}
