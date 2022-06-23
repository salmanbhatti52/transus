import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paymentest',
  templateUrl: './paymentest.page.html',
  styleUrls: ['./paymentest.page.scss'],
})
export class PaymentestPage implements OnInit {
  publicKey = "FLWPUBK_TEST-24a82587c83dda8d3c3a9ea64dd6e405-X";

  customerDetails = { name: 'Demo Customer  Name', email: 'customer@mail.com', phone_number: '08100000000'}

  customizations = {title: 'Customization Title', description: 'Customization Description', logo: 'https://flutterwave.com/images/logo-colored.svg'}

  meta = {'counsumer_id': '7898', 'consumer_mac': 'kjs9s8ss7dd'}


  constructor() { }

  ngOnInit() {
  }


  generateReference(): string {
    let date = new Date();
    return date.getTime().toString();
  }

}
