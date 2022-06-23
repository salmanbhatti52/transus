import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  LoadingController,
  NavController,
  ToastController,
} from "@ionic/angular";
import { RestService } from "../rest.service";

@Component({
  selector: "app-listcar5",
  templateUrl: "./listcar5.page.html",
  styleUrls: ["./listcar5.page.scss"],
})
export class Listcar5Page implements OnInit {
  advance_notice: any = "";
  min_trip: any = "";
  max_trip: any = "";

  oneDataSet: any = "";

  constructor(
    public restService: RestService,
    public location: Location,
    public navCtrl: NavController,
    public toastController: ToastController,
    public loadingController: LoadingController
  ) {}

  ngOnInit() {}

  advanceNoticeChange(event) {
    console.log(event.detail.value);

    this.advance_notice = event.detail.value;
  }
  maximumTripChange(event) {
    console.log(event.detail.value);
    this.min_trip = event.detail.value;
  }

  maximumTripDurationChange(event) {
    console.log(event.detail.value);
    this.max_trip = event.detail.value;
  }

  async submitForm() {
    if (
      this.advance_notice != "" &&
      this.min_trip != "" &&
      this.max_trip != ""
    ) {
      var data = JSON.stringify({
        requestType: "patch_6",
        vehicles_id: localStorage.getItem("vinNumberCarID"),
        advance_notice: this.advance_notice,
        min_trip: this.min_trip,
        max_trip: this.max_trip,
      });

      this.restService.listYourCarAPI(data).subscribe(
        (responseData: any) => {
          this.oneDataSet = JSON.parse(responseData["_body"]);
          console.log(this.oneDataSet, "getiing from oneset");

          if (this.oneDataSet.status == "success") {
            this.navCtrl.navigateForward("listcar6");
          }
        },
        (err) => {
          this.presentToast("Error");
        }
      );
    } else {
      this.presentToast("Indufficient Data");
    }
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: "top",
    });
    toast.present();
  }

  goToHome() {
    this.location.back();
  }
}
