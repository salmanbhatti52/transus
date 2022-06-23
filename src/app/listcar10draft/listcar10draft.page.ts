import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listcar10draft',
  templateUrl: './listcar10draft.page.html',
  styleUrls: ['./listcar10draft.page.scss'],
})
export class Listcar10draftPage implements OnInit {

  constructor(public navCtrl: NavController,
    public location: Location,
    public router:Router) { }

  ngOnInit() {
  }

  goToHome() {
    // this.location.back()
    this.router.navigate(['listcar9draft'])
  }

  goToNext() {
    this.navCtrl.navigateRoot(['/'])
  }

}
