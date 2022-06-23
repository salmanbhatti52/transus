import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  plateformCheck:any;
  constructor(public router:Router,public menuCtrl: MenuController,public plateform: Platform) {
    
  }

 ngOnInit() {
  if(this.plateform.is('ios')){
    this.plateformCheck = "ios";
  }
  else{
    this.plateformCheck = "android";
  }
 }
 ionViewWillEnter() {
  this.menuCtrl.enable(true);
 }
 toggleMenu(){
   this.menuCtrl.toggle();
 }

  goToBookingList(){
    this.router.navigate(['/other-booking-list']);
  }
  goToListedVehicle(){
    this.router.navigate(['/booking-list']);
  }
}
