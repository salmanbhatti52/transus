import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { ImagePicker } from "@ionic-native/image-picker/ngx";
import {
  ToastController,
  LoadingController,
  MenuController,
  AlertController,
} from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { CameraimageService } from "../cameraimage.service";
import { RestService } from "../rest.service";

import { Stripe } from "@ionic-native/stripe/ngx";
import { PaystackOptions } from 'angular4-paystack';
@Component({
  selector: "app-flutter-waves",
  templateUrl: "./flutter-waves.page.html",
  // template:  ` <button (click)="payViaPromise()" >Pay via Promise </button>`,
  styleUrls: ["./flutter-waves.page.scss"],
})
export class FlutterWavesPage implements OnInit {
  // PayStack
   currency = "NGN"; // for test
    // currency = "GHS"; //for live
  reference = `${Math.ceil(Math.random() * 10e10)}`;
  title = '';
  // options: PaystackOptions = {
  //   amount: 50000,
  //   email: 'user@mail.com',
  //   ref: `${Math.ceil(Math.random() * 10e10)}`,
  // }
  // PayStack
  radioActive: any = 0;
  transferText: any;
  paymentOption: any;
  amount: any;
  currency_symbol: any;
  currencyID: any;
  userDetails: any;
  expri_date: any = "";
  card_number: any = "";
  cvv: any = "";
  card_error: any = "";
  expiry_error: any = "";
  card_active: any = "show";
  document_oneError: boolean;
  amountToShow:any;
  constructor(
    public toastController: ToastController,
    public location: Location,
    public loadingController: LoadingController,
    private storage: Storage,
    public restService: RestService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public menuCtrl: MenuController,
    public imageService: CameraimageService,
    public alertCtrl: AlertController,
    public imagePicker: ImagePicker,
    public stripe: Stripe
  ) {}

  response: any;
  paymentGateways: any;
  localTransection = false;
  userid: any;
  bookingId: any;
  
  email: any;
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.amount = res.value.replace(/,/g, '') * 100;
      this.amountToShow = res.value.replace(/,/g, '');
      console.log("Value to pass",this.amount * 100);
      this.currency_symbol = res.symbol;
      (this.userid = res.userid),
        (this.bookingId = res.bookingId),
        (this.email = res.email);
    });

    this.storage.get("user_details").then((res) => {
      this.currencyID = res.currencies_id;
    });

    this.restService.getpaymentOption().subscribe(
      (res) => {
        this.response = JSON.parse(res["_body"]);

        this.paymentGateways = this.response.payment_gateways;
      },
      (err) => {
        console.log("err", err);
      }
    );
  }
  active_card() {
    this.card_active = "show";
  }
  getRespo: any;

  checkActive(getset) {
    //  this.radioActive = getset.payment_methods_id;
    this.paymentID = getset.payment_methods_id;
    if (getset.payment_methods_id == "8") {
      this.radioActive = getset.payment_methods_id;
      this.localTransection = false;
    } else if (getset.payment_methods_id == "5") {
      this.mobileTransfer(getset);
      this.radioActive = getset.payment_methods_id;
    } else if (getset.payment_methods_id == "6") {
      this.mobileTransfer(getset);
      this.radioActive = getset.payment_methods_id;
    }
  }
  mobileTransfer(getOptData) {
    this.paymentOption = getOptData.name;
    this.transferText = getOptData.description;
    this.localTransection = true;
  }

  back() {
    this.location.back();
  }
  document_one: any;
  imageGet: any = "";
  paymentID: any;
  async uploadDocument() {
    let alert = await this.alertCtrl.create({
      message: "Upload payment receipt",
      buttons: [
        {
          text: "Take image from camera",
          handler: () => {
            this.takeImageFromCamera();
          },
        },
        {
          text: "Upload image from gallery",
          handler: () => {
            this.getImageFromGallery();
          },
        },
      ],
    });
    alert.present();
  }

  takeImageFromCamera() {
    this.imageService
      .selectImageInCamera()
      .then((imageData) => {
        this.document_one = `data:image/png;base64,${imageData}`;
        this.imageGet = imageData;
      })
      .catch((err) => console.error(err));
  }
  getImageFromGallery() {
    var options = {
      maximumImagesCount: 1,
      outputType: 1,
    };
    this.imagePicker.getPictures(options).then(
      (imageData) => {
        this.document_one = `data:image/png;base64,${imageData}`;
        this.imageGet = imageData[0];
      },
      (err) => {
        console.log("imagepicker  now:", err);
        this.document_oneError = true;
      }
    );
  }

  retuenRes: any;
  submit() {
    if (this.localTransection == true) {
      if (this.imageGet != "") {
        this.present();

        var localSending = JSON.stringify({
          requestType: "payment_process",
          bookings_id: this.bookingId,
          currencyID: this.currencyID,
          receipt_image: this.imageGet,
          customer_userid: this.userid,
          payment_method_id: this.paymentID,
        });

        this.restService.paymentforbooking(localSending).subscribe(
          (res) => {
            this.dismiss();
            this.retuenRes = JSON.parse(res["_body"]);
            if (this.retuenRes.status == "success") {
              this.presentToast(this.retuenRes.message);
              this.router.navigate(["/other-booking-list"], {
                queryParams: {
                  value: "pending",
                },
              });
            } else {
              this.presentToast(this.retuenRes.message);
            }
          },
          (err) => {
            console.log(err);
          }
        );
      } else {
        this.presentToast("Please Upload Transaction screenshot");
      }
    } else if (this.localTransection == false) {
      this.stripPayment();
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

  check_expiry() {
    if (this.expri_date.length == 2) {
      this.expri_date = this.expri_date + "/";
    }
  }
  newNumber: any;
  check_card() {
    if (this.card_number.length == 4) {
      this.card_number = this.card_number + "-";
    }
    if (this.card_number.length == 9) {
      this.card_number = this.card_number + "-";
    }
    if (this.card_number.length == 14) {
      this.card_number = this.card_number + "-";
    }
  }

  card_test() {
    if (this.card_number != "") {
      if (this.card_number.length == 19) {
        this.card_error = "";
      } else {
        this.card_error = "error";
      }
    } else {
      this.card_error = "error";
    }
  }
  expiry_test() {
    if (this.expri_date != "") {
      if (this.expri_date.length == 5) {
        this.expiry_error = "";
      } else {
        this.expiry_error = "error";
      }
    } else {
      this.expiry_error = "error";
    }
  }

  stripRes: any;
  stripPayment() {
    // alert("sdsdf");
    var new_number = this.card_number.replace(/-/g, "");

    if (new_number.length < 16 || !/[0-9]{16}/.test(new_number)) {
      this.presentToast("Please enter complete card number");
    } else if (this.expri_date.length < 5) {
      this.presentToast("Please enter valid expiry date");
    } else if (this.cvv.length < 3) {
      this.presentToast("Please enter valid expiry date");
    } else {
      this.present();

      var exp = this.expri_date.split("/");

      this.stripe.setPublishableKey(
        "pk_test_51HtsCdBkmmnV9scEn3flkiLvRp0cgX4ArpMfMiJ5MIXfe5RFrgZy9PJVOOCc3y8IU234OrkSRF6jWV9IKnFvG3Km00Wmw04egH"
      );

      let card = {
        number: new_number,
        expMonth: exp[0],
        expYear: exp[1],
        cvc: this.cvv,
      };

      this.stripe
        .createCardToken(card)
        .then((token) => {
          var id = token.id;
          
          var tokeninfro = JSON.stringify({
            requestType: "stripe_process",
            stripeToken: token.id,
            email: this.email,
            amount: this.amount,
            booking_id: this.bookingId,
            user_id: this.userid,
            currency_id: this.currencyID,
          });
          this.restService.stripToken(tokeninfro).subscribe((res) => {
            this.stripRes = JSON.parse(res["_body"]);
            if (this.stripRes.status == "success") {
              this.presentToast(this.stripRes.msg);
              this.router.navigate(["/other-booking-list"], {
                queryParams: {
                  value: "upcoming",
                },
              });
              this.dismiss();
            } else {
              this.dismiss();
              this.presentToast(this.stripRes.msg);
            }
            //  alert(JSON.stringify(res));
          });
        })
        .catch((error) => {
          console.error(error);
          this.presentToast(JSON.stringify(error));
          this.dismiss();
        });
    }
  }
  loading: any;
  async present() {
    this.loading = await this.loadingController.create({
      message: "Please wait...",
    });
    await this.loading.present();
  }

  async dismiss() {
    await this.loading.dismiss();
  }
  // PayStack

  paymentInit() {
    console.log('Payment initialized');
    this.present();
  }

  paymentDone(ref: any) {
    this.dismiss();
    this.title = 'Payment successfull';
    console.log("here the msg from ", ref);

    console.log("here the json--- from ", JSON.stringify(ref));
    if(ref.message=="Approved"){
      var tokeninfro = JSON.stringify({
        requestType: "paystack_process",
        trxref: ref.trxref,
        transaction: ref.transaction,
        email: this.email,
        amount: this.amount,
        booking_id: this.bookingId,
        user_id: this.userid,
        currency_id: this.currencyID,
      });
      this.restService.payStack(tokeninfro).subscribe((res) => {
        this.stripRes = JSON.parse(res["_body"]);
        if (this.stripRes.status == "success") {
          this.presentToast(this.stripRes.message);
          this.router.navigate(["/other-booking-list"], {
            queryParams: {
              value: "upcoming",
            },
          });
         
        } else {
         
          this.presentToast(this.stripRes.msg);
        }
        //  alert(JSON.stringify(res));
      });
    }
    
  }

  paymentCancel() {
    
    console.log('payment failed');
    alert("Transaction failed");
    this.dismiss();
  }
  // PayStack
}
