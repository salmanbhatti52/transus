import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoadingController, ToastController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { RestService } from "../rest.service";

@Component({
  selector: "app-listcar2draft",
  templateUrl: "./listcar2draft.page.html",
  styleUrls: ["./listcar2draft.page.scss"],
})
export class Listcar2draftPage implements OnInit {
  vinNum: any = "";

  LicensePlateError = false;

  loadingPresent: any;

  constructor(
    public router: Router,
    public restService: RestService,
    public location: Location,
    public loadingController: LoadingController,
    public toastController: ToastController
  ) {}

  ngOnInit() {}

  goToHome() {
    // this.location.back()

    this.router.navigate(["mydraftcar"]);
  }

  ionViewWillEnter() {
    if (localStorage.getItem("vin_number") == "null") {
      this.vinNum = "";
    } else {
      this.vinNum = localStorage.getItem("vin_number");
    }
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
    });
    toast.present();
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

  goToNext() {
    if (this.vinNum == "") {
      this.LicensePlateError = true;
    } else {
      this.LicensePlateError = false;

      if (localStorage.getItem("carmd").toLowerCase() == "yes") {
        this.presentTheloader();

        this.restService
          .vinNumVerification(
            this.vinNum,
            localStorage.getItem("carmd_authorization"),
            localStorage.getItem("carmd_partner_token")
          )
          .subscribe((res: any) => {
            console.log("incomming car md data response", res);

            this.dismissTheLoader();

            // this.presentToast(res.message.message)

            if (res.message.message == "ok") {
              localStorage.setItem("vinyear", res.data.year.toString());
              localStorage.setItem("vinmake", res.data.make.toString());
              localStorage.setItem("vinmodel", res.data.model.toString());
              localStorage.setItem(
                "vinmanufacturer",
                res.data.manufacturer.toString()
              );
              localStorage.setItem("vinengine", res.data.engine.toString());

              localStorage.setItem("vintrim", res.data.trim.toString());
              localStorage.setItem(
                "vintransmission",
                res.data.transmission.toString()
              );

              localStorage.setItem("vinNo", this.vinNum);

              this.router.navigate(["listcar3draft"]);
              // this.presentToast(res.message.message);
            } else {
              this.presentToast("Invalid vin number");
            }
          });
      } else {
        var data = {
          message: {
            code: 0,
            message: "ok",
            credentials: "valid",
            version: "v3.0.0",
            endpoint: "decode",
            counter: 2,
          },
          data: {
            year: 2015,
            make: "CHEVROLET",
            model: "EQUINOX",
            manufacturer: "GENERAL MOTORS",
            engine: "L4, 2.4L; DOHC; 16V; DI; FFV",
            trim: "LTZ",
            transmission: "AUTOMATIC",
          },
        };

        if (data.message.message == "ok") {
          localStorage.setItem("vinyear", data.data.year.toString());
          localStorage.setItem("vinmake", data.data.make.toString());
          localStorage.setItem("vinmodel", data.data.model.toString());
          localStorage.setItem(
            "vinmanufacturer",
            data.data.manufacturer.toString()
          );
          localStorage.setItem("vinengine", data.data.engine.toString());

          localStorage.setItem("vintrim", data.data.trim.toString());
          localStorage.setItem(
            "vintransmission",
            data.data.transmission.toString()
          );

          localStorage.setItem("vinNo", this.vinNum);

          this.router.navigate(["listcar3draft"]);
        }
      }

      //
    }
  }
}
