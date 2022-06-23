import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SubjectEventsService {

  constructor() { }
  private fooSubject = new Subject<any>();
  private imgSubject = new Subject<any>();
  private citySubject = new Subject<any>();

  publishSomeData(data: any) {
      this.fooSubject.next(data);
  }

  getObservable(): Subject<any> {
      return this.fooSubject;
  }
  publishImgData(data: any) {
    this.imgSubject.next(data);
  }

  getImgObservable(): Subject<any> {
      return this.imgSubject;
  }

  publishCityData(data: any) {
    this.citySubject.next(data);
  }

  getCityObservable(): Subject<any> {
      return this.citySubject;
  }
}
