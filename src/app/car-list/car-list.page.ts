import { Component, NgZone, OnInit, PlatformRef } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  LoadingController,
  MenuController,
  Platform,
  ToastController,
} from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { RestService } from "../rest.service";

declare var google;
@Component({
  selector: "app-car-list",
  templateUrl: "./car-list.page.html",
  styleUrls: ["./car-list.page.scss"],
})
export class CarListPage implements OnInit {
  response: any;
  cars_list_result: any;
  base_urls: any;
  currency_symbol: any;
  plateformCheck: any;
  userID: any;
  currencyID: any;
  loading: HTMLIonLoadingElement;
  page_number_all: number = 4;
  sklect_off: boolean = true;
  sing_sklect_off: boolean = true;
  searchText: any;
  loaded: any;
  page_number_search: number = 0;
  searching: boolean = false;
  notFound_error: boolean = false;
  searchFromsearch: boolean = false;
  infiniteScrool: boolean = true;
  source: any;
  autocompleteItems: any[];
  GoogleAutocomplete: any;
  autocomplete: { input: string };
  detinationCompleteItems: any[];
  nocarlist: any;
  constructor(
    public menuCtrl: MenuController,
    private storage: Storage,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public plateform: Platform,
    public loadingController: LoadingController,
    public restService: RestService,
    public toastController: ToastController,
    public zone: NgZone
  ) {
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = { input: "" };
    this.autocompleteItems = [];
    this.detinationCompleteItems = [];
    this.cars_list_result = [];
    if (this.restService.fromHomeToSearch) {
      var res = this.restService.fromHomeToSearch;
      this.response = JSON.parse(res);
      console.log("data from home",this.response);
      if (this.response.cars_list_result.length == 0) {
        this.notFound_error = true;
      }
      if (this.response.cars_list_result != []) {
        this.storage.get("base_urls").then((base_urls) => {
          // this.base_urls = base_urls;

          this.storage.get("currency_symbol").then((currency_symbol) => {
            console.log("currency_symbol", currency_symbol);
            this.currency_symbol = currency_symbol;
            this.cars_list_result = this.response.cars_list_result;
          });
        });
      } else {
        this.notFound_error = true;
        console.log(this.response.cars_list_result, "from else");
      }
    }
    this.storage.get("user_details").then((user_details) => {
      console.log("asdasdad", user_details);
      this.userID = user_details.users_id;
      this.currencyID = user_details.currencies_id;
    });

    if (this.restService.sourceToSearch) {
      this.searchText = this.restService.sourceToSearch;
      this.onInput();
      this.infiniteScrool = false;
    }
    this.infiniteScrool = this.restService.scroolFlag;
  }
  gotoDetail(data) {
    var myData = JSON.stringify({
      cars_list_result: data,
      redirect: "/car-list",
    });

    this.router.navigate(["/car-detail"], {
      queryParams: {
        value: myData,
      },
    });
  }
  ngOnInit() {
    // this.base_urls = this.restService.domainOfCar;
    this.base_urls = "https://app.transusdrives.com/";
    console.log("data------------------", this.restService.fromHomeToSearch);

    if (this.restService.fromHomeToSearch) {
      this.cars_list_result = JSON.parse(
        this.restService.fromHomeToSearch
      ).cars_list_result;
      console.log(this.sklect_off);
      console.log("data------------------", this.cars_list_result);
    }

    if (this.cars_list_result.length == 0) {
      this.nocarlist = 0;
    }

    if (this.plateform.is("ios")) {
      this.plateformCheck = "ios";
    } else {
      this.plateformCheck = "android";
    }
  }
  favourite(request: any, vehicle_id: any,obj) {
    console.log("cars details with index",obj.favourite);
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
              obj.favourite = "Yes";
            } else {
              obj.favourite = "No";
            }
          }
        },
        (err) => {}
      );
    } else {
      this.router.navigate(['/login']);
    }
  }
  onInput() {
    this.infiniteScrool = true;
    this.page_number_all = 4;
    this.searchFromsearch = true;
    this.notFound_error = false;
    this.searching = true;
    this.cars_list_result = [];
    console.log(this.searchText);
    var stringy = JSON.stringify({
      requestType: "searchBysearch",
      usersID: this.userID,
      textToSearch: this.searchText,
      currencyID: this.currencyID,
      limit: 4,
      offset: this.page_number_search,
    });
    console.log(stringy);
    this.restService.filters(stringy).subscribe(
      (response) => {
        var response_comming = JSON.parse(response["_body"]);
        if (response_comming.status == "NotFound") {
          this.sing_sklect_off = true;
          this.searching = false;
          this.notFound_error = true;
          this.cars_list_result = [];
        } else if (response_comming.status == "Found") {
          this.notFound_error = false;
          this.cars_list_result = response_comming.cars_list_result;
          this.searching = false;
        }
      },
      (err) => {}
    );
  }
  goToFilter() {
    this.router.navigate(["/filters"]);
  }
  toggleMenu() {
    this.menuCtrl.toggle();
  }

  doInfinite(ev) {
    if (this.infiniteScrool == true) {
      this.sing_sklect_off = false;
      if (this.searchFromsearch == false) {
        var stringy = JSON.stringify({
          requestType: "all_cars_list",
          usersID: this.userID,
          currencyID: this.currencyID,
          limit: 4,
          offset: this.page_number_all,
        });
      } else {
        var stringy = JSON.stringify({
          requestType: "searchBysearch",
          usersID: this.userID,
          textToSearch: this.searchText,
          currencyID: this.currencyID,
          limit: 4,
          offset: this.page_number_all,
        });
      }

      console.log(stringy);
      this.restService.filters(stringy).subscribe(
        (response) => {
          var response_comming = JSON.parse(response["_body"]);

          if (response_comming.status == "NotFound") {
            ev.target.complete();
            this.sing_sklect_off = true;
          } else if (response_comming.status == "Found") {
            this.notFound_error = false;
            this.cars_list_result = [
              ...this.cars_list_result,
              ...response_comming.cars_list_result,
            ];
            ev.target.complete();
            this.page_number_all = this.page_number_all + 4;
          }
        },
        (err) => {}
      );
    }
  }
  onImageLoad(idx) {
    console.log(idx);
    var orginalEle = document.getElementsByClassName(`original_${idx}`)[0];
    var placeHolderEle = document.getElementsByClassName(
      `placeholder_${idx}`
    )[0];
    placeHolderEle.classList.add("hidd_image");
    orginalEle.classList.remove("hidd_image");
  }
  SelectSearchResult(address) {
    this.searchText = address; //May be delete
    console.log(this.searchText);
    this.autocompleteItems = [];
  }
  UpdateSearchResults() {
    console.log("location .....");
    if (this.searchText == "") {
      this.autocompleteItems = [];
      return;
    }
    console.log("source .....", this.searchText);
    //componentRestrictions: {country: 'AE'}
    this.GoogleAutocomplete.getPlacePredictions(
      { input: this.searchText },
      (predictions, status) => {
        this.autocompleteItems = [];
        this.zone.run(() => {
          console.log("predictions .....", predictions);

          predictions.forEach((prediction) => {
            console.log(prediction);
            this.autocompleteItems.push(prediction);
            console.log("prediction .....", prediction);
          });
        });
      }
    );
  }

  async present() {
    this.loading = await this.loadingController.create({
      message: "Please wait...",
    });
    await this.loading.present();
  }

  async dismiss() {
    await this.loading.dismiss();
  }
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: "top",
    });
    toast.present();
  }
}
