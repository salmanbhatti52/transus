import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController, ToastController } from '@ionic/angular';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  email:any= '';
  response: any;
  constructor(public toastController:ToastController,public router:Router,public popoverController:PopoverController,public restService:RestService) { }

  ngOnInit() {
  }
  
  async ok() {
    await this.popoverController.dismiss();
  }

  checkmail:boolean = false;
  goToHome(){
    
    if(this.email != ''){
      if(this.ValidateEmail(this.email)){
        console.log("corect");
        this.goToHomes()
      }
      else{
        console.log("incorect")
        this.presentToast("Email is not valid");
      }
    }
    else{
      this.presentToast("Please enter your email address");
    }
  }
  ValidateEmail(mail) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
       this.checkmail = true
       return this.checkmail;
    } else {
      //alert("You have entered an invalid email address!")
      this.checkmail = false;
      return this.checkmail;
      
    }
  }
  async goToHomes() {
    
    var stringy = JSON.stringify({
      "requestType": "send_password",
      "email":this.email
    });
    console.log(stringy);
    this.restService.forgotPassword(stringy).subscribe(response => {
      this.response =  JSON.parse(response['_body']);
      console.log(this.response.status);
      if(this.response.status == 'error'){
          this.presentToast(this.response.msg);
      }else if(this.response.status == 'success'){
        this.presentToast(this.response.msg);
        // this.ok();
          localStorage.setItem("restWithEmail",this.email);
          this.popoverController.dismiss({
            val: this.response.status
          });
         
      }
     
    },err => {
    
    });
    
   
  }
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position:'top'
    });
    toast.present();
  }
}
