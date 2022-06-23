import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listcar4',
  templateUrl: './listcar4.page.html',
  styleUrls: ['./listcar4.page.scss'],
})
export class Listcar4Page implements OnInit {

  constructor(public router: Router,
    public location:Location) { }

  ngOnInit() {
  }


  goToHome() {
    this.location.back()
  }

  goToNext() {
    this.router.navigate(['list-your-car'])
  }
}
