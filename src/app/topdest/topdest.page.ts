import { UsersService } from './../users.service';
import { Router } from '@angular/router';
import { RestService } from './../rest.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  IonInfiniteScroll,
  LoadingController,
  MenuController,
} from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-topdest',
  templateUrl: './topdest.page.html',
  styleUrls: ['./topdest.page.scss'],
})
export class TopdestPage implements OnInit {
  toprateddest: any = '';
  filteredTopDest: any = '';
  response: any = '';
  offset = 0;

  userID: any = '';
  currencyID: any;
  currency_symbol: any;

  filterCars: any = '';

  allser: any;

  searchData: any = '';

  baseUrl: string = 'https://app.transusdrives.com/uploads/';
  loading: HTMLIonLoadingElement;

  constructor(
    public restservice: RestService,
    public router: Router,
    public userService: UsersService,
    public menuCtrl: MenuController,
    public loadingController: LoadingController,
    private storage: Storage
  ) {}

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  ngOnInit() {
    // this.present();

    var data = JSON.stringify({
      limit: '5',
      offset: this.offset,
    });

    console.log('data', data);

    this.restservice.getDestination(data).subscribe(
      (res: any) => {
        console.log('dest----------', res);

        // this.dismiss();

        this.response = JSON.parse(res['_body']);

        console.log(this.response);

        this.toprateddest = this.response.data;
      },
      (err) => {
        // this.dismiss();
        // this.ShowLoading = false;
      }
    );
  }

  goToTopRated(place) {
    this.filterFound(place);
  }

  //===============================================

  filterFound(place) {
    this.storage.get('user_details').then((user_details) => {
      console.log('user data is here', user_details);
      if (user_details) {
        this.userID = user_details.users_id;
        this.currencyID = user_details.currencies_id;
      } else {
        this.userID = '';
      }

      console.log('loader present ali');
      this.present();
      var data = JSON.stringify({
        requestType: 'searchBysearch',
        users_id: this.userID,
        textToSearch: place.destination_name,
        currency_id: this.currencyID,
        limit_val: '5',
        offset_val: '0',
      });
      console.log('ali', data);
      this.restservice.filtersTopRated(data).subscribe(
        (res) => {
          this.filterCars = res;

          console.log('ali wants to remove');
          console.log(
            JSON.parse(this.filterCars['_body']),
            "JSON.parse(this.filterCars['_body']JSON.parse(this.filterCars['_body']"
          );
          this.allser = JSON.parse(this.filterCars['_body']);
          var myData = JSON.stringify({
            cars_list_result: this.allser.cars_list_result,
          });
          this.dismiss();
          console.log('loader dismiss ali');
          // this.router.navigate(['/car-list'], {
          //   queryParams: {
          //     value: myData,
          //   },
          // });

          this.restservice.fromHomeToSearch = myData;

          this.router.navigate(['/car-list']);
        },
        (err) => {
          this.dismiss();
          console.log(err);
        }
      );
    });
  }

  //=======================================================

  async present() {
    this.loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    await this.loading.present();
  }

  async dismiss() {
    await this.loading.dismiss();
  }

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  loadData(event) {
    this.offset++;

    var data = JSON.stringify({
      limit: '5',
      offset: this.offset,
    });

    console.log('data', data);

    this.restservice.getDestination(data).subscribe(
      (res: any) => {
        console.log('dest----------', res);

        event.target.disabled = true;

        this.response = JSON.parse(res['_body']);

        console.log(this.response);

        this.toprateddest = this.toprateddest.concat(this.response.data);
      },
      (err) => {
        event.target.disabled = true;
        // this.ShowLoading = false;
      }
    );
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  onInput(event) {
    console.log(event.detail.value);

    this.searchData = event.detail.value;

    console.log('searchData', this.searchData);

    console.log('toprateddest-----------', this.toprateddest);

    this.filteredTopDest = this.toprateddest.filter((item) => {
      if (item.destination_name != null) {
        return item.destination_name
          .toLowerCase()
          .includes(event.detail.value.toLowerCase());
      }
    });

    console.log('filter-----------', this.filteredTopDest);
  }
}
