import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-listcar3draft',
  templateUrl: './listcar3draft.page.html',
  styleUrls: ['./listcar3draft.page.scss'],
})
export class Listcar3draftPage implements OnInit {

  carDo = ''
  carDoError = false

  vinCarData: any = ''

  vinNo: any = ''


  personalCar = true

  myPersonalCar = "Yes"

  oneDataSet: any = ''

  loadingPresent: any;

  constructor(public router: Router,
    public storage: Storage,
    public location: Location,
    public restService: RestService,
    public loadingController: LoadingController) { }


  ionViewWillEnter() {

  }

  ngOnInit() {
    this.vinNo = localStorage.getItem('vinNo')
    this.carDo = localStorage.getItem('vinmake') + " " + localStorage.getItem('vinmodel') + " " + localStorage.getItem('vinyear')

  }

  goToNext() {


    this.presentTheloader()

    var dataPatch2 = JSON.stringify({

      "requestType": "patch_2",
      "vehicles_id": localStorage.getItem('vinNumberCarID'),
      "vin_number": localStorage.getItem('vinNo'),
      "year": localStorage.getItem('vinyear'),
      "make": localStorage.getItem('vinmake'),
      "model": localStorage.getItem('vinmodel'),
      "manufacturer": localStorage.getItem('vinmanufacturer'),
      "engine": localStorage.getItem('vinengine'),
      "trim": localStorage.getItem('vintrim'),
      "transmission": localStorage.getItem('vintransmission')

    })


    this.restService.listYourDraftCarAPI(dataPatch2).subscribe((res: any) => {
      console.log('patch2 res---->>>', res);


      this.oneDataSet = JSON.parse(res['_body']);
      console.log(this.oneDataSet, 'getiing from oneset');

      if (this.oneDataSet.status == "success") {



        var dataPatch3 = JSON.stringify({

          "requestType": "patch_3",
          "vehicles_id": localStorage.getItem('vinNumberCarID'),
          "car_want": localStorage.getItem('idYourCarHave'),
          "personal": this.myPersonalCar

        })

        this.restService.listYourDraftCarAPI(dataPatch3).subscribe((res: any) => {
          console.log('patch3 res---->>>', res);


          this.dismissTheLoader()

          this.oneDataSet = JSON.parse(res['_body']);
          console.log(this.oneDataSet, 'getiing from oneset');

          if (this.oneDataSet.status == "success") {


            this.router.navigate(['listcar4draft'])


          }

        }, err => {
          this.dismissTheLoader()

        })


      }

    }, err => {
      this.dismissTheLoader()

    })








  }

  UpdatepersonalCar() {
    console.log(this.personalCar);

    if (this.personalCar) {
      this.myPersonalCar = "Yes"
    } else {
      this.myPersonalCar = "No"
    }

  }


  goToHome() {
    // this.location.back()

    this.router.navigate(['listcar2draft'])
  }



  async presentTheloader() {
    this.loadingPresent = await this.loadingController.create({
      message: 'Please wait...',
    });
    await this.loadingPresent.present();
  }

  async dismissTheLoader() {
    await this.loadingPresent.dismiss();
  }


}
