import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { RestService } from '../rest.service';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { PhotoviewerPage } from '../photoviewer/photoviewer.page';
import { IonSlides, ModalController, Platform } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Location } from '@angular/common';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.page.html',
  styleUrls: ['./car-detail.page.scss'],
})
export class CarDetailPage implements OnInit {
  response: any;
  cars_list_result: any;
  base_urls: any;
  userID: any;
  favouriteVehicle: boolean = false;
  currency_symbol: any;
  model_name: any;
  veh_imgs: any;
  charge_per_day: any;
  description: any;
  about_owner: any;
  country_name: any;
  owner_work: any;
  max_trip_duration: any;
  min_trip_duration: any;
  advance_notice: any;
  
  language_name: any;
  ratting_stars: any;
  redirect: any;
  plateForm: any;
  showSlide: any = 'no';
  total_trips: any = 0;
  availablityStartDate: any;
  availablityEndDate: any;
  plateformCheck: any;

  constructor(
    private photoViewer: PhotoViewer,
    public restService: RestService,
    private storage: Storage,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public location: Location,
    public modalCtrl: ModalController,
    public socialSharing: SocialSharing,
    public plateform: Platform
  ) {
    this.plateForm = this.plateform.is('android');

    this.activatedRoute.queryParams.subscribe((res) => {
      this.response = JSON.parse(res.value);
      this.storage.get('base_urls').then((base_urls) => {
        this.base_urls = base_urls;
        if (this.response.redirect != '/notification') {
          this.cars_list_result = this.response.cars_list_result;
          this.model_name = this.cars_list_result.model_name;
          this.veh_imgs = this.cars_list_result.veh_imgs;
          this.charge_per_day = this.cars_list_result.charge_per_day;
          this.description = this.cars_list_result.description;
          this.about_owner = this.cars_list_result.about_owner;
          this.country_name = this.cars_list_result.country_name;
          this.owner_work = this.cars_list_result.owner_work;
          this.max_trip_duration = this.cars_list_result.max_trip_duration;
          this.min_trip_duration = this.cars_list_result.min_trip_duration;
          this.advance_notice = this.cars_list_result.advance_notice;
          this.language_name = this.cars_list_result.language_name;
          this.ratting_stars = this.cars_list_result.ratting_stars;
          this.total_trips = this.cars_list_result.total_trips;

          this.availablityStartDate = this.monthList(
            this.cars_list_result.start_date
          );
          this.availablityEndDate = this.monthList(
            this.cars_list_result.end_date
          );
          this.redirect = this.response.redirect;
          if (this.cars_list_result.favourite == 'Yes') {
            this.favouriteVehicle = true;
          } else {
            this.favouriteVehicle = false;
          }
        } else {
          this.cars_list_result = this.response.cars_list_result;
          this.model_name = this.cars_list_result.model_name;
          this.veh_imgs = this.cars_list_result.vehicle_imgs;
          this.charge_per_day = this.cars_list_result.charge_per_day;
          this.description = this.cars_list_result.description;
          this.about_owner = this.cars_list_result.about;
          this.country_name = this.cars_list_result.country_name;
          this.owner_work = this.cars_list_result.owner_work;
          this.language_name = this.cars_list_result.language_name;
          this.ratting_stars = this.cars_list_result.ratting_stars;
          this.redirect = this.response.redirect;
          if (this.cars_list_result.favourite == 'Yes') {
            this.favouriteVehicle = true;
          } else {
            this.favouriteVehicle = false;
          }
        }
      });
    });
  }

  ionViewWillEnter() {
    this.showSlide = 'no';
  }

  ngOnInit() {
    if (this.plateform.is('ios')) {
      this.plateformCheck = 'ios';
    } else {
      this.plateformCheck = 'android';
    }
    this.storage.get('base_urls').then((base_urls) => {
      this.base_urls = base_urls;
      this.storage.get('user_details').then((user_details) => {
        if (user_details) {
          this.userID = user_details.users_id;
        }
        this.storage.get('currency_symbol').then((currency_symbol) => {
          this.currency_symbol = currency_symbol;
        });
      });
    });
  }

  share() {
    var text =
      'Owner :\t' +
      this.about_owner +
      '\n Lives : \t' +
      this.country_name +
      '\n Image : \t' +
      this.base_urls +
      this.veh_imgs[0] +
      '\n';
    var options = {
      message:
        text +
        '\nAppstore -> https://apps.apple.com/de/app/trans-US/id1497697781\n\nPlaystore -> https://play.google.com/store/apps/details?id=com.transus.app',
    };
    this.socialSharing.shareWithOptions(options).then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  previewImage(p) {
    this.showSlide = 'yes';
    this.indexOfSLide = 1;
  }

  closeModel() {
    this.showSlide = 'no';
  }

  indexOfSLide = 1;

  @ViewChild('slides', { static: false }) slides: IonSlides;

  slideChanged(e: any) {
    this.slides.getActiveIndex().then((index: number) => {
      this.indexOfSLide = index + 1;
    });
  }

  favourite(request: any, vehicle_id: any) {
    if (this.userID) {
      var stringy = JSON.stringify({
        requestType: request,
        vehicleID: vehicle_id,
        usersID: this.userID,
      });
      this.restService.favourite_settings(stringy).subscribe(
        (response) => {
          this.response = JSON.parse(response['_body']);
          if (this.response.status == 'error') {
          } else if (this.response.status == 'success') {
            if (request == 'add_fav') {
              this.favouriteVehicle = true;
            } else {
              this.favouriteVehicle = false;
            }
          }
        },
        (err) => {}
      );
    } else {
      this.router.navigate(['/login']);
    }
  }
  chatRequest() {
    if (this.userID) {
      var stringy = JSON.stringify({
        requestType: 'chatRequest',
        otherUserId: this.cars_list_result.users_id,
        usersID: this.userID,
      });
      this.restService.update_messages(stringy).subscribe(
        (response) => {
          this.response = JSON.parse(response['_body']);
          if (this.response.status == 'error') {
          } else if (
            this.response.status == 'AlreadySent' ||
            this.response.status == 'RequestSend'
          ) {
            var myData = JSON.stringify({
              otherUserId: this.cars_list_result.users_id,
              userID: this.userID,
              user_name: this.response.user_name,
              profile_img: this.response.profile_img,
            });
            this.router.navigate(['/chat-detail'], {
              queryParams: {
                value: myData,
              },
            });
          }
        },
        (err) => {}
      );
    } else {
      this.router.navigate(['/login']);
    }
  }
  goToHome() {
    // this.router.navigate([this.redirect]);
    this.location.back();
  }
  furtherDetail() {
    this.router.navigate(['/further-detail']);
  }
  gotoDetail() {}
  bookNow() {
    if (this.userID) {
      var myData = JSON.stringify({
        vehicle_id: this.cars_list_result.vehicles_id,
        start_date: this.cars_list_result.start_date,
        end_date: this.cars_list_result.end_date,
        booked_dates: this.cars_list_result.booked_dates,
        model_name: this.model_name,
        charge_per_day: this.charge_per_day,
        max_trip_duration: this.max_trip_duration,
        min_trip_duration: this.min_trip_duration,
        advance_notice: this.advance_notice,
        
      });

      this.router.navigate(['/car-booking'], {
        queryParams: {
          value: myData,
        },
      });
    } else {
      this.router.navigate(['/login']);
    }
  }
  info() {
    var myData = JSON.stringify({
      cars_list_result: this.cars_list_result,
    });

    this.router.navigate(['/further-detail'], {
      queryParams: {
        value: myData,
      },
    });
  }

  month: any;
  monthList(dates) {
    var dateIndex = dates.split('-');
    // this.dbEndDate     = this.vehicles_list.end_date.split('-');
    //param = parseInt(param)+1;
    var param = dateIndex[1];
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
    return dateIndex[2] + ' ' + this.month + ' ' + dateIndex[0];
  }

  ratingview() {
    //  this.router.navigate(['/rating'])
    localStorage.setItem('vehicles_id', this.cars_list_result.vehicles_id);

    this.router.navigate(['/reviews-or-rating']);

    // this.router.navigate(['/give-rating'])
  }
}
