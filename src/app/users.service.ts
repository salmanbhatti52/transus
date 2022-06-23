import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  sibarProfile: string;

  profileVar: any;
  nameVar: any;
  cityVar: any;
  noty_length: any;

  car_data: any;

  topratedplace: any = '';

  constructor() {}
}
