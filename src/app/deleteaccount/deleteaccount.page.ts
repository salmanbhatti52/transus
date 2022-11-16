import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { AlertController, NavController } from "@ionic/angular";
import { UsersService } from "../users.service";

@Component({
  selector: "app-deleteaccount",
  templateUrl: "./deleteaccount.page.html",
  styleUrls: ["./deleteaccount.page.scss"],
})
export class DeleteaccountPage implements OnInit {
  Checkboxes = [
    { question: "I concerned about my personal data", isItemChecked: false },
    { question: "I have another  TransUs account", isItemChecked: false },
    { question: "I want to remove app from my mobile", isItemChecked: false },
    { question: "I get too many emails from TransUs", isItemChecked: false },
    { question: "Other", isItemChecked: false },
  ];

  selectquestions = [];
  constructor(
    public loacton: Location,
    public navCtrl: NavController,
    public alertController: AlertController,
    public api: UsersService
  ) {}

  ngOnInit() {}

  goback() {
    this.loacton.back();
  }
  verifyEvent(ev) {
    console.log(ev);
    if (ev.isItemChecked == true) {
      this.selectquestions.push(ev.question);
      console.log("selectquestions aray", this.selectquestions);
    }
    if (ev.isItemChecked == false) {
      const index = this.selectquestions.indexOf(ev.question);
      if (index > -1) {
        this.selectquestions.splice(index, 1); // 2nd parameter means remove one item only
        console.log("job aray", this.selectquestions);
      }
    }
  }

  delete() {
    console.log("adasdsadsadsa", this.selectquestions.length);

    if (this.selectquestions.length == 0) {
      this.api.presenttoast("Choose one option atleast");
    } else {
      this.presentAlert();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: "Are you sure, you want to delete your account?",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {},
        },
        {
          text: "Confirm",
          role: "confirm",
          handler: () => {
            this.api.presenttoast(
              "Your request received. Your account will be deleted within 24 hours."
            );
            this.navCtrl.navigateRoot("/");
          },
        },
      ],
    });

    await alert.present();
  }
}
