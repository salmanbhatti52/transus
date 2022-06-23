import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listcar8draft',
  templateUrl: './listcar8draft.page.html',
  styleUrls: ['./listcar8draft.page.scss'],
})
export class Listcar8draftPage implements OnInit {

  constructor(public location: Location,
    public router: Router) { }

  ngOnInit() {
  }


  
  goToHome() {
    // this.location.back()
    this.router.navigate(['listcar7draft'])
  }


  goToNext() {
    this.router.navigate(['listcar9draft'])
  }

}
