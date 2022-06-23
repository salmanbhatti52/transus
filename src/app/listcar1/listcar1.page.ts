import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoadingController, NavController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { RestService } from "../rest.service";

@Component({
  selector: "app-listcar1",
  templateUrl: "./listcar1.page.html",
  styleUrls: ["./listcar1.page.scss"],
})
export class Listcar1Page implements OnInit {
  pickuplong: any;
  pickuplat: any;
  dropofflong: any;
  dropofflat: any;
  dropoff: any = "";
  pickup: any = "";
  onceFilled: any;

  idYourCar: any = "";

  usersDetail: any = "";

  vehicle_id: any = "";
  oneDataSet: any = "";

  RouteError = false;
  TheDivHidden = true;

  LicensePlateError = false;

  loadingPresent: any;

  constructor(
    public navCtrl: NavController,
    public storage: Storage,
    public location: Location,
    public router: Router,
    public restService: RestService,
    public loadingController: LoadingController
  ) {}

  ngOnInit() {}

  showDiv() {
    //

    console.log(this.pickup + this.dropoff);

    if (this.pickup == "" || this.dropoff == "") {
      this.RouteError = true;
    }

    // if (this.idYourCar == '') {

    //   this.LicensePlateError = true

    // }

    // if (this.pickup != '' && this.dropoff != '' && this.idYourCar != '') {
    if (this.pickup != "" && this.dropoff != "") {
      this.RouteError = false;
      this.LicensePlateError = false;
      this.TheDivHidden = false;
    }
  }

  hideDiv() {
    this.TheDivHidden = true;
  }

  goToNext() {
    this.presentTheloader();

    this.hideDiv();

    this.storage.get("user_details").then((user_details) => {
      this.usersDetail = user_details;
      console.log(user_details, "calling from home");

      var data = JSON.stringify({
        requestType: "patch_1",
        user_id: user_details.users_id,
        car_have: this.idYourCar,
        pickup_location: this.pickup,
        drop_location: this.dropoff,

        pickuplong: this.pickuplong,
        pickuplat: this.pickuplat,
        dropofflong: this.dropofflong,
        dropofflat: this.dropofflat,
      });
      console.log("stringy", data);

      this.restService.listYourCarAPI(data).subscribe(
        (res: any) => {
          console.log("ressssssssssss", res);

          this.dismissTheLoader();

          this.oneDataSet = JSON.parse(res["_body"]);
          console.log(this.oneDataSet, "getiing from oneset");

          if (this.oneDataSet.status == "success") {
            localStorage.setItem(
              "vinNumberCarID",
              this.oneDataSet.vehicle_id.toString()
            );
            localStorage.setItem("idYourCarHave", this.idYourCar.toString());
            this.router.navigate(["listcar2"]);
          }
        },
        (err) => {
          this.hideDiv();
          this.dismissTheLoader();
        }
      );
    });

    //
  }

  async presentTheloader() {
    this.loadingPresent = await this.loadingController.create({
      message: "Please wait...",
    });
    await this.loadingPresent.present();
  }

  async dismissTheLoader() {
    await this.loadingPresent.dismiss();
  }

  goToHome() {
    //this.location.back()
    this.storage.set("pickup", "");
    this.storage.set("dropoff", "");
    this.storage.set("pickuplong", "");
    this.storage.set("pickuplat", "");
    this.storage.set("dropofflong", "");
    this.storage.set("dropofflat", "");
    this.router.navigate(["listed-car"]);
  }

  async ionViewWillEnter() {
    this.storage.get("pickup").then((pickup) => {
      this.storage.get("dropoff").then((dropoff) => {
        this.storage.get("pickuplong").then((pickuplong) => {
          this.storage.get("pickuplat").then((pickuplat) => {
            this.storage.get("dropofflong").then((dropofflong) => {
              this.storage.get("dropofflat").then((dropofflat) => {
                console.log("dropofflat->>>",dropofflat);
                console.log("pickup->>>",pickup);
                console.log("dropoff->>>",dropoff);
                console.log("pickuplong->>>",pickuplong);
                console.log("pickuplat->>>",pickuplat);
                console.log("dropofflat->>>",dropofflat);
                this.pickup = pickup;
                this.dropoff = dropoff;
                this.pickuplong = pickuplong;
                this.pickuplat = pickuplat;
                this.dropofflong = dropofflong;
                this.dropofflat = dropofflat;
              });
            });
          });
        });
      });
    });
    this.onceFilled = await this.storage.get("onceFilled");
  }

  goToLocation() {
    var myData = JSON.stringify({
      location: "/listcar1",
    });
    this.navCtrl.navigateForward("location", {
      queryParams: {
        value: myData,
      },
    });
  }
}
