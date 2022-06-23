import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-listcar8',
  templateUrl: './listcar8.page.html',
  styleUrls: ['./listcar8.page.scss'],
})
export class Listcar8Page implements OnInit {

  constructor(public navCtrl: NavController,
    public location: Location) { }

  ngOnInit() {
  }

  goToHome() {
    this.location.back()
  }

  goToNext() {
    this.navCtrl.navigateRoot(['/'])
  }

}
