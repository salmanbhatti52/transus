import { UsersService } from './../users.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topratedplacecar',
  templateUrl: './topratedplacecar.page.html',
  styleUrls: ['./topratedplacecar.page.scss'],
})
export class TopratedplacecarPage implements OnInit {
  place: any = '';

  constructor(public router: Router, public userService: UsersService) {}

  ngOnInit() {
    this.place = this.userService.topratedplace;
    console.log('place', this.place);
  }
}
