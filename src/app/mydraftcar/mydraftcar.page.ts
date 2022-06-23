import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  LoadingController,
  MenuController,
  Platform,
  PopoverController,
} from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { RestService } from '../rest.service';
import { ActionBookingPage } from '../action-booking/action-booking.page';

@Component({
  selector: 'app-mydraftcar',
  templateUrl: './mydraftcar.page.html',
  styleUrls: ['./mydraftcar.page.scss'],
})
export class MydraftcarPage implements OnInit {
  response: any;
  userID: any;
  Email: any;
  vehicles_list: any = [];
  base_url: any;
  loading: HTMLIonLoadingElement;
  symbol: any;
  booking_exist: any;
  plateformCheck: any;
  constructor(
    public loadingController: LoadingController,
    public popoverController: PopoverController,
    public restService: RestService,
    private storage: Storage,
    public router: Router,
    public menuCtrl: MenuController,
    public plateform: Platform
  ) {}

  ngOnInit() {
    if (this.plateform.is('ios')) {
      this.plateformCheck = 'ios';
    } else {
      this.plateformCheck = 'android';
    }
  }

  ionViewWillEnter() {
    this.storage.get('user_details').then((user_details) => {
      console.log(user_details);
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
    console.log('Begin async operation');
    this.getCarList(false, event, 'refresher');
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
      requestType: 'get_all_draft',
      usersID: this.userID,
      limit: 4,
      offset: this.page_number,
    });

    console.log('get  my draft cars------->>', stringy);

    if (!isFirstLoad) {
      this.present();
    }

    this.restService.getyourDraftCarAPI(stringy).subscribe(
      (response) => {
        if (isFirstLoad == false) {
          this.vehicles_list = [];
        }

        console.log('responseresponseresponseresponseresponse', response);

        this.response = JSON.parse(response['_body']);
        this.vehicles_list = [
          ...this.vehicles_list,
          ...this.response.vehicles_list,
        ];
        console.log(
          'responseresponseresponseresponseresponse',
          this.vehicles_list
        );
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
      },
      (err) => {
        console.log(err);
      }
    );
  }
  toggleMenu() {
    this.menuCtrl.toggle();
  }
  goToCarList() {
    //this.router.navigate(['/list-your-car']);

    this.router.navigate(['/listcar1']);
  }

  goToDraft() {
    //this.router.navigate(['/list-your-car']);

    this.router.navigate(['/mydraftcar']);
  }

  async editDetail(booking_details) {
    this.present();
    var stringy = JSON.stringify({
      requestType: 'check_veh_req',
      veh_id: booking_details.vehicles_id,
    });
    console.log(stringy, 'veh_idveh_idveh_idveh_id');

    this.restService.check_vehicles(stringy).subscribe(
      (response) => {
        this.response = JSON.parse(response['_body']);
        this.dismiss();
        console.log(this.response.status, 'responseresponseresponse');
        if (this.response.status == 'success') {
          this.popover();
        } else {
          var myData = JSON.stringify({
            booking_details: booking_details,
          });

          this.router.navigate(['/edit-list-your-car'], {
            queryParams: {
              value: myData,
            },
          });
        }
      },
      (err) => {
        console.log(err);
      }
    );

    console.log(booking_details.vehicles_id, 'detailsssssss');
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
  async popover() {
    const popover = await this.popoverController.create({
      component: ActionBookingPage,
      translucent: true,
      componentProps: {
        booking: 'veh_msg',
      },
    });

    popover.onWillDismiss().then((data) => {
      console.log(data);
      console.log(data.data.val);
      if (data.data.val == 'ok') {
      }
    });
    await popover.present();
  }

  // goToDraftCar(p) {
  //   console.log('ali', p);
  //   this.storage.set('mycardraft', p)
  //   this.storage.get('mycardraft').then(res => {
  //     console.log('mycardraftmycardraft', res)
  //   })
  // }

  goToDraftCar(p) {
    console.log('ali', p);

    this.storage.set('mycardraft', p);

    this.storage.get('mycardraft').then((res) => {
      console.log('mycardraft ali', res);
    });

    localStorage.setItem('vinyear', p.year.toString());
    localStorage.setItem('vinmake', p.make_id.toString());
    localStorage.setItem('vinmodel', p.model_id.toString());
    localStorage.setItem('vinmanufacturer', p.manufacturer.toString());
    localStorage.setItem('vinengine', p.engine.toString());

    localStorage.setItem('vintrim', p.trim.toString());
    localStorage.setItem('vintransmission', p.transmission.toString());

    localStorage.setItem('vinNumberCarID', p.vehicles_id.toString());

    localStorage.setItem('vin_number', p.vin_number);

    if (p.draft_level == 1) {
      this.router.navigate(['listcar2draft']);
    } else if (p.draft_level == 2 || p.draft_level == 3) {
      this.router.navigate(['listcar4draft']);
    } else if (p.draft_level == 4) {
      this.router.navigate(['listcar6draft']);
    } else if (p.draft_level == 5) {
      this.router.navigate(['listcar7draft']);
    } else if (p.draft_level == 6) {
      this.router.navigate(['listcar8draft']);
    } else if (p.draft_level == 7) {
      this.router.navigate(['listcar10draft']);
    } else {
      console.log('elseeee');
    }
  }
}
