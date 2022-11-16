import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  sibarProfile: string;

  profileVar: any;
  nameVar: any;
  cityVar: any;
  noty_length: any;

  car_data: any;

  topratedplace: any = "";

  constructor(public toastctrl: ToastController) {}

  presenttoast(message) {
    this.toastctrl
      .create({
        message,
        duration: 2000,
        position: "bottom",
      })
      .then((res) => res.present());
  }
}
