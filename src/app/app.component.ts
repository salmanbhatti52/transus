import { Component, OnInit } from '@angular/core';

import {
  MenuController,
  Platform,
  NavController,
  ToastController,
  PopoverController,
} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { SubjectEventsService } from './subject-events.service';
import { RestService } from './rest.service';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { UsersService } from './users.service';
import { ActionBookingPage } from './action-booking/action-booking.page';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  login: boolean = false;
  public withLogin = [
    {
      title: 'Browse',
      url: '/',
      icon: 'assets/img/search.svg',
    },
    {
      title: 'Messages',
      url: '/chat-list',
      icon: 'assets/img/messages.svg',
    },
    {
      title: 'Customer Support',
      url: '/contact-support',
      icon: 'assets/img/support.svg',
    },
    {
      title: 'Notification',
      url: '/view-all-notifications',
      icon: 'assets/img/bell.svg',
    },
    {
      title: 'Favorities',
      url: '/favorite',
      icon: 'assets/img/menu_heart.svg',
    },
    {
      title: 'Booking',
      url: '/bookings',
      icon: 'assets/img/booking.svg',
    },
    {
      title: 'Listed cars',
      url: '/listed-car',
      icon: 'assets/img/menu_check.svg',
    },
    {
      title: 'Top Destinations',
      url: '/topdest',
      icon: 'assets/img/topdest.svg',
    },
    // {
    //   title: 'Listed motors',
    //   url: '/listed-motor',
    //   icon: 'assets/img/menu_check.svg'
    // },
    {
      title: 'Ratings & Reviews',
      url: '/rating',
      icon: 'assets/img/Star.svg',
    },
    {
      title: 'Earnings',
      url: '/earning',
      icon: 'assets/img/Earning.svg',
    },
    {
      title: 'Setting',
      url: '/setting',
      icon: 'assets/img/setting.svg',
    },
    {
      title: 'Logout',
      url: '/logout',
      icon: 'assets/img/login.svg',
    },
  ];
  public withoutLogin = [
    {
      title: 'Browse',
      url: '/',
      icon: 'assets/img/search.svg',
    },
    {
      title: 'Contact Support',
      url: '/contact-support',
      icon: 'assets/img/support.svg',
    },
    {
      title: 'Login or Signup',
      url: '/login',
      icon: 'assets/img/login.svg',
    },
  ];
  user_name: any;
  profile_image: any;
  country: any;
  baseUrl: string = 'https://app.transusdrives.com/';
  Notification: any = [];
  timeZone: any;
  constructor(
    public navCtrl: NavController,
    // private events: Events,
    public router: Router,
    private storage: Storage,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public menuCtrl: MenuController,
    public restService: RestService,
    public usersService: UsersService,
    public subjectEvents: SubjectEventsService,
    private deeplinks: Deeplinks,
    public toastController: ToastController,
    public popoverController: PopoverController
  ) {
    this.initializeApp();
    this.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    console.log(this.timeZone, 'timeZonetimeZone');
  }
  async action(bookingId, action, userID, OwnerID) {
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
        localStorage.setItem('users_id', null);
        this.storage.set('user_details', null);
        this.storage.set('profile_img_url', null);
        this.presentToast('Logout successfully!');
        this.navCtrl.navigateRoot('/');
        this.login = false;
      }
    });
    return await popover.present();
  }
  localUsersID: any;
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('000000');

      this.statusBar.styleLightContent();
      this.getProfileData();
      /*this.events.subscribe('sidebar', sidebar => {
        console.log('sidebar');
        this.login =true;
        }) */
      this.subjectEvents.getObservable().subscribe((data) => {
        console.log('Data received', data);
        this.getProfileData();
        this.login = true;

        console.log('my gmail loginnnnnnnnn----', this.login);
      });
      // this.subjectEvents.getImgObservable().subscribe((data) => {
      //   console.log('img Data received', data);
      //   this.profile_image = data;
      // });

     
      this.subjectEvents.getCityObservable().subscribe((data) => {
        console.log('City Data received', data);
        this.country = data;
      });

      this.storage.set('base_urls', this.baseUrl);
      // "URL_SCHEME": "tranus",
      // "DEEPLINK_SCHEME": "https",
      // "DEEPLINK_HOST": "trans.com",

      this.deeplinks
        .route({
          '/about-us': 'AboutPage',
          '/universal-links-test': 'AboutPage',
          '/products/:productId': 'ProductPage',
        })
        .subscribe(
          (match) => {
            // match.$route - the route we matched, which is the matched entry from the arguments to route()
            // match.$args - the args passed in the link
            // match.$link - the full link data
            console.log('Successfully matched route', match);
          },
          (nomatch) => {
            // nomatch.$link - the full link data
            console.error("Got a deeplink that didn't match", nomatch);
          }
        );
    });

    var data = JSON.stringify({});

    this.restService.get_carmd_infoAPI(data).subscribe((res: any) => {

      var response = JSON.parse(res['_body']);


      localStorage.setItem('carmd', response[0].description);
      localStorage.setItem('carmd_authorization', response[1].description);
      localStorage.setItem('carmd_partner_token', response[2].description);

    });
  }

  ngOnInit() {
    /* const path = window.location.pathname.split('folder/')[1];
     if (path !== undefined) {
       this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
     } */
  }
  userData: any;
  noty_length: any;
  prof_image: any;
  handleImgError(ev: any, item: any, url) {
    let source = ev.srcElement;
    let imgSrc = `assets/img/placeholder.jpg`;
    source.src = imgSrc;
  }
  getProfileData() {
    this.storage.get('user_details').then((user_details) => {
      console.log('my user detail ====', user_details);
      this.storage.get('base_urls').then((base_url) => {
        console.log('base_url ====', base_url);

      })
      if (user_details) {
        this.userData = user_details;
        console.log(user_details);
        if(user_details.ghanacard){
       if (user_details) {
          this.storage.get('profile_img_url').then((profile_img_url) => {
            this.storage.get('base_urls').then((base_url) => {
              this.profile_image = this.restService.baseURLforProfileimg + "" +   user_details.profile_image;
              // this.profile_image = base_url + "" + profile_img_url;
              // this.usersService.profileVar = this.profile_image;
              // this.profile_image = this.usersService.profileVar;
              // this.profile_image = this.usersService.getUserData();

              // localStorage.setItem("email", this.userData.email);
            });
          });
          var stringfy = JSON.stringify({
            requestType: 'get_all',
            usersID: this.userData.users_id,
            limit: '',
            offset: '',
            readFilter: 'Unread',
            timeZone: this.timeZone,
          });
          console.log(stringfy);
          this.restService.notifications(stringfy).subscribe((response) => {
            //   console.log(JSON.parse(response['_body']),"from app component page");
            this.Notification = JSON.parse(response['_body']);
            console.log(this.Notification);
            this.usersService.noty_length =
              this.Notification.notifications?.length;
            console.log(
              this.usersService.noty_length,
              'this.usersService.noty_lengththis.usersService.noty_length_first'
            );
          });
        } else {
          this.profile_image = 'assets/img/usericon.svg';
        }
      }else{
        this.navCtrl.navigateRoot(['/profileaftersigup']);
      }
        this.user_name = user_details.user_name;
        this.usersService.nameVar = this.user_name;
        this.user_name = this.usersService.nameVar;
        this.storage.get('country_name').then((country_name) => {
          console.log('country_name: ' + country_name);
          if (country_name) {
            this.country = country_name;
          } else {
            this.country = '-';
          }
          this.usersService.cityVar = this.country;
          this.country = this.usersService.cityVar;
        });

        this.login = true;
      } else {
        this.login = false;

        console.log('login-----', this.login);
      }
    });
  }
  goToPage(param) {
    console.log(param, 'paramparamparamparam');
    if (param == '/logout') {
      this.action(2, 'logout', 1, 1);
    } else if (param == '/view-all-notifications') {
      var readall = JSON.stringify({
        requestType: 'read_all',
        usersID: this.userData.users_id,
      });
      this.restService.notifications(readall).subscribe(
        (res) => {
          this.navCtrl.navigateRoot([param]);
          console.log(res, 'read all');
          this.usersService.noty_length = 0;
          /* this.noty_length = 0; */
          console.log(
            this.usersService.noty_length,
            'this.usersService.noty_lengththis.usersService.noty_length'
          );
          this.navCtrl.navigateRoot(['/view-all-notifications']);
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      this.navCtrl.navigateRoot([param]);
    }
  }
  goToProfile() {
    this.navCtrl.navigateRoot(['/profile']);
  }
  toggleMenu() {
    this.menuCtrl.toggle();
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
