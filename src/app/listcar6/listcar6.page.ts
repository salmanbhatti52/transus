import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listcar6',
  templateUrl: './listcar6.page.html',
  styleUrls: ['./listcar6.page.scss'],
})
export class Listcar6Page implements OnInit {

  constructor(public location: Location,
    public router: Router) { }

  ngOnInit() {
  }


  
  goToHome() {
    this.location.back()
  }


  goToNext() {
    this.router.navigate(['listcar7'])
  }

}
