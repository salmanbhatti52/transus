import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  LoadingController,
  NavController,
  ToastController,
} from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { RestService } from "../rest.service";

@Component({
  selector: "app-listcar7draft",
  templateUrl: "./listcar7draft.page.html",
  styleUrls: ["./listcar7draft.page.scss"],
})
export class Listcar7draftPage implements OnInit {
  advance_notice: any = "";
  min_trip: any = "";
  max_trip: any = "";

  oneDataSet: any = "";

  val = "6 hours";

  constructor(
    public restService: RestService,
    public location: Location,
    public navCtrl: NavController,
    public toastController: ToastController,
    public loadingController: LoadingController,
    public router: Router,
    public storage: Storage
  ) {}

  ngOnInit() {
    this.storage.get("mycardraft").then((res) => {
      console.log("mycardraft ali", res);

      this.advance_notice = res.advance_notice;
      this.min_trip = res.min_trip_duration;
      this.max_trip = res.max_trip_duration;
    });
  }

  ionViewWillEnter() {}

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

      this.restService.listYourDraftCarAPI(data).subscribe(
        (responseData: any) => {
          this.oneDataSet = JSON.parse(responseData["_body"]);
          console.log(this.oneDataSet, "getiing from oneset");

          if (this.oneDataSet.status == "success") {
            this.navCtrl.navigateForward("listcar8draft");
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
    // this.location.back()

    this.router.navigate(["listcar6draft"]);
  }
}
