import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, MenuController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { RestService } from '../rest.service';

import { PaystackOptions } from 'angular4-paystack';
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {
// Pay stack
options: PaystackOptions = {
  amount: 50000,
  email: 'user@mail.com',
  ref: `${Math.ceil(Math.random() * 10e10)}`
}
title :any;
reference = '';
// Pay stack
  base_urls: any;
  userID: any;
  response: any;
  listVehicles: any;
  cars_list_result: any = [];
  Currencies: any;
  currency_symbol: any;
  plateformCheck:any;
  loading:any;
  constructor(
    public router:Router,
    public restService:RestService,
    private storage: Storage,
    public menuCtrl: MenuController,
    public plateform: Platform,
    public loadingController: LoadingController
    ) {
    
  }

 ngOnInit() {
  this.reference = `ref-${Math.ceil(Math.random() * 10e13)}`;
  if(this.plateform.is('ios')){
    this.plateformCheck = "ios";
  }
  else{
    this.plateformCheck = "android";
  }
  this.storage.get('base_urls').then((base_urls) => {
    this.base_urls = base_urls;
    
  });
 }
 doRefresh(event){
  console.log('Begin async operation');
  this.favourite(false,event,"refresher"); 
}
 ionViewWillEnter(){
  this.storage.get('user_details').then((user_details) => {
    this.storage.get('currency_symbol').then((currency_symbol) => {
      this.currency_symbol = currency_symbol;
    console.log(user_details);
    this.userID = user_details.users_id;
    this.Currencies = user_details.currencies_id;
    this.favourite(false);
  });
});
 }
 toggleMenu(){
   this.menuCtrl.toggle();
 }
 doInfinite(event) {
  this.favourite(true, event);
}

 page_number :number=0;
 favourite(isFirstLoad, event?,refresher?){
  
  if(!event){
    this.present();
  }
  let offset = 0;
  if(isFirstLoad==false){
    this.page_number = offset;
  }
  var stringy = JSON.stringify({
    "requestType": 'get_fav_cars_list',
    "usersID" : this.userID,
    "currencyID": this.Currencies,
    "limit": 4,
    "offset":this.page_number,
   });
   console.log(stringy);
  this.restService.list_vehicles(stringy).subscribe(response => {
    this.listVehicles =  JSON.parse(response['_body']);
    if(isFirstLoad==false){
    
      this.cars_list_result = [];
    }
   /*  this.cars_list_result = this.listVehicles.cars_list_result; */
    console.log(this.cars_list_result,"this.cars_list_resultthis.cars_list_resultthis.cars_list_result");
    if(!event){
      this.dismiss();
    }
    
    for (let i = 0; i < this.listVehicles.cars_list_result.length; i++) {
      this.cars_list_result.push(this.listVehicles.cars_list_result[i]);
    }
   
    if (isFirstLoad){
      event.target.complete();
    }
    this.page_number = this.page_number + 4;
    if(refresher){
      event.target.complete();
    }
    if(this.cars_list_result == undefined){
      this.cars_list_result = [];
    }
   
    
   
   
   },err => {
   
   });
}
gotoDetail(data){
  var myData = JSON.stringify({
    cars_list_result: data,
    redirect:'/favorite'
  });
  
 this.router.navigate(['/car-detail'],{
    queryParams: {
      value : myData
      },
    });
}
async present() {
  this.loading = await this.loadingController.create({
    message: 'Please wait...',
  });
  await this.loading.present();
}


 async dismiss() {
await this.loading.dismiss();
}

paymentInit() {
  console.log('Payment initialized');
}

paymentDone(ref: any) {
  this.title = 'Payment successfull';
  console.log(this.title, ref);
}

paymentCancel() {
  console.log('payment failed');
}



}
