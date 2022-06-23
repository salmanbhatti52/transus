import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-further-detail',
  templateUrl: './further-detail.page.html',
  styleUrls: ['./further-detail.page.scss'],
})
export class FurtherDetailPage implements OnInit {
  response: any;
  cars_list_result: any;
  start_date: string;
  end_date: string;
  currency_symbol:any;
  plateform:any;
  plateformCheck:any;
  constructor(public activatedRoute:ActivatedRoute,public router:Router, public storage:Storage,
              public location:Location, public plateForm:Platform ) {
    this.plateform = this.plateForm.is('android');
    this.activatedRoute.queryParams.subscribe((res)=>{
      this.response = JSON.parse(res.value);
      this.cars_list_result = this.response.cars_list_result;
      this.calculateDistance();
      console.log(this.response);
      if(this.cars_list_result.start_date){
        let sDate = new Date(this.cars_list_result.start_date);
        let eDate = new Date(this.cars_list_result.end_date);

        let startyear = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(sDate);
        let startmonth = new Intl.DateTimeFormat('en', { month: 'long' }).format(sDate);
        let startday = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(sDate);

        let endyear = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(eDate);
        let endmonth = new Intl.DateTimeFormat('en', { month: 'long' }).format(eDate);
        let endday = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(eDate);
        this.start_date = startday+' '+startmonth+', '+startyear;
        this.end_date   = endday+' '+endmonth+', '+endyear;;
       /*  this.start_date = this.formatDate(sDate);
        this.end_date   = this.formatDate(eDate); */
      }
      
      
    });

    // this.storage.get('user_details').then((user_details) => {
    //   console.log(user_details);
    //   this.userID = user_details.users_id;
    //   this.Email = user_details.email;
    //   this.currencyID = user_details.currencies_id;
    //   this.getCarList();
    //   this.storage.get('base_urls').then((base_url) => {
    //     this.base_url = base_url;
    //   });
      this.storage.get('currency_symbol').then((currency_symbol) => {
        this.currency_symbol = currency_symbol;
      });
  
   }

   
   miles:number;
   st:string;
  calculateDistance() {
    //  = this.response.cars_list_result;
    var earthRadius = 6371;
    var lat = this.cars_list_result.dropoff_latitude - this.cars_list_result.pickup_latitude; // Difference of latitude
    var lon = this.cars_list_result.dropoff_longitude - this.cars_list_result.pickup_longitude; // Difference of longitude

    var disLat = (lat*Math.PI*earthRadius)/180; // Vertical distance
    var disLon = (lon*Math.PI*earthRadius)/180; // Horizontal distance

    var ret = Math.pow(disLat, 2) + Math.pow(disLon, 2); 
    ret = Math.sqrt(ret); // Total distance (calculated by Pythagore: a^2 + b^2 = c^2)
     var mil=   ret*0.621371;
     this.miles = Math.floor( mil );
     console.log(this.miles);
 

    // Now you have the total distance in the variable ret
} 

  ngOnInit() {
    if(this.plateForm.is('ios')){
      this.plateformCheck = "ios";
    }
    else{
      this.plateformCheck = "android";
    }
  }
  formatDate(dateObj){
    const days = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
    const months = ["Jan","Feb","Mar","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];
    
    const dateOrdinal=(dom)=> {
        if (dom == 31 || dom == 21 || dom == 1) return dom + "st";
        else if (dom == 22 || dom == 2) return dom + "nd";
        else if (dom == 23 || dom == 3) return dom + "rd";
        else return dom + "th";
    };
    //dateObj.getDate())+', '+
    return days[dateObj.getDay()]+', '+ months[dateObj.getMonth()]+' '+dateObj.getFullYear();
  }
  back(){
    // this.router.navigate(['/car-detail']);
    this.location.back();
  }

}
