import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listcar4draft',
  templateUrl: './listcar4draft.page.html',
  styleUrls: ['./listcar4draft.page.scss'],
})
export class Listcar4draftPage implements OnInit {

  constructor(public router: Router,
    public location:Location) { }

  ngOnInit() {
  }


  goToHome() {
    // this.location.back()
    this.router.navigate(['listcar3draft'])
  }

  goToNext() {
    this.router.navigate(['listcar5draft'])
  }
}

