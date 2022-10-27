import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  AlertController,
  LoadingController,
  MenuController,
  Platform,
  PopoverController,
  ToastController,
} from "@ionic/angular";
import { CameraimageService } from "../cameraimage.service";
import { RestService } from "../rest.service";
import { Storage } from "@ionic/storage";
import { SubjectEventsService } from "../subject-events.service";
import { UsersService } from "../users.service";

import { ImagePicker } from '@ionic-native/image-picker/ngx';

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  Email: any;
  phone: any;
  firstName: any;
  lastName: any;
  About: any;
  Lives: any;
  Works: any;
  Language: any;
  base64: any = "";

  AboutError: boolean = false;
  firstNameError: boolean = false;
  lastNameError: boolean = false;
  LivesError: boolean = false;
  WorksError: boolean = false;
  EmailError: boolean = false;
  phoneError: boolean = false;
  LanguageError: boolean = false;
  base64Error: boolean = false;
  CurrencyError: boolean = false;
  ghancardError: boolean = false;

  profileImage: string;
  response: any;
  userID: any;
  countries: any;
  languages: any;
  loading: HTMLIonLoadingElement;
  validation: boolean = false;
  currencies: any;
  Currencies: string;
  CurrenciesError: boolean = false;
  accountNumber: string;
  accountTitleError: boolean = false;
  accountNameError: boolean = false;
  accountTitle: string;
  accountName: string;
  accountNumberError: boolean;
  plateformCheck: any;
  accountDetails = [
    {
      accountTitle: "",
      accountName: "",
      accountNumber: "",
    },
  ];
  ghanacardImage: string = "";
  base64ghana: any;
  userprofilefromuserdetail: any;
  constructor(
    public loadingController: LoadingController,
    public subjectEvents: SubjectEventsService,
    public popoverController: PopoverController,
    private storage: Storage,
    public toastController: ToastController,
    public router: Router,
    public restService: RestService,
    public alertCtrl: AlertController,
    public imageService: CameraimageService,
    public menuCtrl: MenuController,
    public usersService: UsersService,
    public plateform: Platform,
    public imagePicker: ImagePicker,
  ) {}

  ngOnInit() {
    if (this.plateform.is("ios")) {
      this.plateformCheck = "ios";
    } else {
      this.plateformCheck = "android";
    }
    this.getDropDownData();
  }
  addBank() {
    this.accountDetails.push({
      accountTitle: "",
      accountName: "",
      accountNumber: "",
    });
  }
  removeBank(index) {
    this.accountDetails.splice(index, 1);
  }
  ionViewWillEnter() {
    this.present();
    this.storage.get("user_details").then((user_details) => {
      console.log("userDetailsss-----", user_details);
      this.userprofilefromuserdetail = user_details.profile_image
      this.userID = user_details.users_id;
      this.About = user_details.about;
      this.Works = user_details.work;
      // this.accountNumber = user_details.bank_acc_no;
      // this.accountTitle = user_details.bank_acc_title;
      //  this.base64 = user_details.profile_image;
      this.Email = user_details.email;
      this.phone = user_details.mobile_no;
      this.firstName = user_details.first_name;
      this.lastName = user_details.last_name;
      if(user_details.ghanacard){
        this.ghanacardImage = this.restService.ghanacardBaseURL + user_details.ghanacard
      }
    
      if (user_details.bank_details.length != 0) {
        this.accountDetails = [];
        user_details.bank_details.map((data, index) => {
          this.accountDetails.push({
            accountTitle: data.bank_account_title,
            accountName: data.bank_account_name,
            accountNumber: data.bank_account_number,
          });
        });
      }
      // this.accountName = user_details.band_acc_name;
      setTimeout(() => {
        this.Language = user_details.languages_id;
        this.Lives = user_details.countries_id;
        this.Currencies = user_details.currencies_id;
        console.log("ok");
        this.dismiss();
      }, 2000);
    });

    this.storage.get("profile_img_url").then((profile_img_url) => {
      this.storage.get("base_urls").then((base_url) => {
        
        // this.profileImage = base_url + "" + profile_img_url;
        this.profileImage = this.restService.baseURLforProfileimg + "" +   this.userprofilefromuserdetail;
        console.log('profile image of user----',this.profileImage);
      });
    });
  }
  toggleMenu() {
    this.menuCtrl.toggle();
  }
  getDropDownData() {
    var stringy = JSON.stringify({
      requestType: "profile_page",
    });
    console.log(stringy);
    this.restService.getDdlData(stringy).subscribe(
      (response) => {
        this.response = JSON.parse(response["_body"]);
        this.languages = this.response.languages;
        this.countries = this.response.countries;
        this.currencies = this.response.system_currencies;
        console.log(this.response);
      },
      (err) => {}
    );
  }
  submitForm() {
    // this.validation = true;
    if (this.validateForm() == true) {
      //alert('true');
      this.present();
      var stringy = JSON.stringify({
        usersID: this.userID,
        email: this.Email,
        phone: this.phone,
        firstName: this.firstName,
        lastName: this.lastName,
        about: this.About,
        countriesID: this.Lives,
        works: this.Works,
        languagesID: this.Language,
        profilePic: this.base64,
        currencyID: this.Currencies,
        // accountNumber: this.accountNumber,
        // accountName: this.accountName,
        // accountTitle: this.accountTitle,
        accountDetails: this.accountDetails,
        ghanacard: this.base64ghana,
        requestType: "update",
      });

      console.log("selected bank detailss---", this.accountDetails);
      console.log("selected bank  stringy---", stringy);

      console.log(stringy);
      this.restService.editProfile(stringy).subscribe(
        (response) => {
          this.response = JSON.parse(response["_body"]);
          console.log('profileupdated-----',this.response);
          if (this.response.status == "error") {
            this.presentToast(this.response.msg);
          } else if (this.response.status == "success") {
            // this.usersService.profileVar = this.response.image;
            // this.subjectEvents.publishImgData(this.usersService.profileVar);
            this.subjectEvents.publishCityData(this.response.country);
            // console.log(this.usersService.profileVar, "testttttt");
            this.presentToast(this.response.msg);
            console.log(this.usersService.cityVar, "testttttt_city");

            this.getUserDetail();
          }
          this.dismiss();
        },
        (err) => {
          this.dismiss();
        }
      );
    } else {
      console.log("update else");
    }
  }
  getUserDetail() {
    var stringy = JSON.stringify({
      usersID: this.userID,
      requestType: "withID",
    });
    console.log(stringy);
    this.restService.getUserDetails(stringy).subscribe(
      (response) => {
        this.response = JSON.parse(response["_body"]);
        console.log("usererrrrr---- after updatinf", this.response);
        if (this.response.status == "NotFound") {
        } else if (this.response.status == "Found") {

          localStorage.setItem('imageofuserprofile',this.restService.baseURLforProfileimg + "" +   this.response.user_details.profile_image)
           this.restService.imageofuserprofile = this.restService.baseURLforProfileimg + "" +   this.response.user_details.profile_image;

          this.usersService.profileVar = this.response.profile_img_url;
          this.subjectEvents.publishImgData(this.response.profile_img_url);


          this.storage.set("user_details", this.response.user_details);
          this.storage.set("profile_img_url", this.response.profile_img_url);
          this.storage.set("country_name", this.response.country_name);
          console.log("currency_symbol", this.response.user_details.symbol);
          this.storage.set(
            "currency_symbol",
            this.response.user_details.symbol
          );

          /* this.subjectEvents.publishSomeData({
          sidebar: 'sidebar'
        }); */
        }
      },
      (err) => {}
    );
  }
  validateForm() {
    this.AboutError = false;
    this.LivesError = false;
    this.WorksError = false;
    this.LanguageError = false;
    this.base64Error = false;
    this.accountTitleError = false;
    this.accountNumberError = false;
    this.accountNameError = false;
    this.firstNameError = false;
    this.lastNameError = false;
    this.phoneError = false;
    this.ghancardError = false

    this.CurrenciesError = false;
    if (this.ghanacardImage == "" || this.ghanacardImage == undefined) {
      this.ghancardError = true;
      return false;
      
    } if (this.About == "" || this.About == undefined) {
      this.AboutError = true;
      return false;
      
    } else if (this.Email == "" || this.Email == undefined) {
      this.EmailError = true;
      return false;
    }
    else if (this.phone == "" || this.phone == undefined) {
      this.phoneError = true;
      return false;
    } else if (this.firstName == "" || this.firstName == undefined) {
      this.firstNameError = true;
      return false;
    } else if (this.lastName == "" || this.lastName == undefined) {
      this.lastNameError = true;
      return false;
    } else if (this.Lives == "" || this.Lives == undefined) {
      this.LivesError = true;
      return false;
    } else if (this.Works == "" || this.Works == undefined) {
      this.WorksError = true;
      return false;
    } else if (this.Language == "" || this.Language == undefined) {
      this.LanguageError = true;
      return false;
    } else if (this.Currencies == "" || this.Currencies == undefined) {
      this.CurrenciesError = true;
      return false;
    } else if (
      this.accountDetails[0].accountTitle == "" ||
      this.accountDetails[0].accountTitle == undefined
    ) {
      this.accountTitleError = true;
      return false;
    } else if (
      this.accountDetails[0].accountName == "" ||
      this.accountDetails[0].accountName == undefined
    ) {
      this.accountNameError = true;
      return false;
    } else if (
      this.accountDetails[0].accountNumber == "" ||
      this.accountDetails[0].accountNumber == undefined
    ) {
      this.accountNumberError = true;
      return false;
    } else {
      return true;
    }
    // }
  }
  async uploadProfile() {
    let alert = await this.alertCtrl.create({
      message: "Upload Profile Photo?",
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
        this.profileImage = `data:image/png;base64,${imageData}`;
        this.base64 = `${imageData}`;
      })
      .catch((err) => console.error(err));
  }
  getImageFromGallery() {
    this.imageService
      .selectImageInGallery()
      .then((imageData) => {
        this.profileImage = `data:image/png;base64,${imageData}`;
        this.base64 = `${imageData}`;
      })
      .catch((err) => console.error(err));
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: "top",
    });
    toast.present();
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




  //------- here function of ghana card image start



  async uploadProfileGhana() {
    let alert = await this.alertCtrl.create({
      message: "Upload Ghana Card Image?",
      buttons: [
        {
          text: "Take image from camera",
          handler: () => {
            this.takeImageFromCameraGhana();
          },
        },
        {
          text: "Upload image from gallery",
          handler: () => {
            this.getImageFromGalleryGhana();
          },
        },
      ],
    });
    alert.present();
  }
  takeImageFromCameraGhana() {

    console.log('entered in ghanacard cameraaaa')
    this.imageService
      .selectImageInCamera()
      .then((imageData) => {
        this.ghanacardImage = `data:image/png;base64,${imageData}`;

        this.base64ghana = `${imageData}`;

        console.log('ghana card camera---', imageData);
        
      })
      .catch((err) => console.error('Error in camera',err));
  }
  // getImageFromGalleryGhana() {
  //   this.imageService 
  //     .selectImageInGallery()   
  //     .then((imageData) => {
  //       this.ghanacardImage = `data:image/png;base64,${imageData}`;
  //       this.base64ghana = `${imageData}`;
  //     })
  //     .catch((err) => console.error(err));
  // }


  getImageFromGalleryGhana() {
    var options = {
      maximumImagesCount: 1,
      outputType: 1,
      quality: 90,
    };
    this.imagePicker.getPictures(options).then(
      (result) => {
        
        this.ghanacardImage = `data:image/png;base64,${result}`;
        // this.imageCompress.compressFile(base64, 0, 80, 80).then((result) => {
          this.base64ghana = `${result}`;
            //this.base64ghana = result;
            console.log('ghana card gallery---', result);
         
         
        // });
      },
      (err) => {
        console.log(err, "error in images??");
      }
    );
  }

  
  handleImgError(ev: any, item: any, url) {
    let source = ev.srcElement;
    let imgSrc = `assets/img/placeholder.jpg`;
    source.src = imgSrc;
  }

}
