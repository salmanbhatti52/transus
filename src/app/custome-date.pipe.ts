import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customeDate'
})
export class CustomeDatePipe implements PipeTransform {
  getchnge:any;
  setChange:any;
  transform(value: unknown, ...args: unknown[]): unknown {

    this.getchnge = value;
    var spliteDate = this.getchnge.split('-');
    this.setChange = spliteDate[2]+'-'+spliteDate[1]+'-'+spliteDate[0];
    return this.setChange;
  }

}
