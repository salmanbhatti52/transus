import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-reviews-or-rating',
  templateUrl: './reviews-or-rating.page.html',
  styleUrls: ['./reviews-or-rating.page.scss'],
})
export class ReviewsOrRatingPage implements OnInit {

   
  pet: string = "puppies";
  userID: any;
  response: any;
  others_reviews: any;
  owns_reviews: any;
  profileImage: string;
  review_for_you_stats: any;
  each_row: any;
  rating_star_one: any;
  count_stars_one: any;
  rating_star_two: any;
  count_stars_two: any;
  rating_star_three: any;
  count_stars_three: any;
  count_stars_four: any;
  rating_star_four: any;
  rating_star_five: any;
  count_stars_five: any;
  count_total_ratings: any=0;
  avg_total_rating: any=0;
  critical_ratings_others: any;
  fillUpOne: number=0;
  fillUpTwo: number=0;
  fillUpThree: number=0;
  fillUpFour: number=0;
  fillUpFive: number=0;
  favResponse: any;
  viewResponse: any;
  sliderStartBoolean: any;
  base_url:any;
  plateformCheck:any;
  constructor(public restService:RestService,private storage: Storage,
    public router:Router,public menuCtrl: MenuController, public location:Location,public plateform: Platform) {
    this.pet = 'byYou';
    //console.log(Number((6.688689).toFixed(1)));
  }
  vehID:any;
 ngOnInit() {
  if(this.plateform.is('ios')){
    this.plateformCheck = "ios";
  }
  else{
    this.plateformCheck = "android";
  }
  this.vehID = localStorage.getItem("vehicles_id");
  this.storage.get('user_details').then((user_details) => {
    console.log(user_details);
    this.storage.get('base_urls').then((base_url) => {
 
      this.base_url  = base_url;
      console.log(this.base_url)
    });
    this.userID = user_details.users_id;
    this.giveRating();
    
  });
  
 }
 toggleMenu(){
   this.menuCtrl.toggle();
 }

  BookNow(){
    this.router.navigate(['/car-booking']);
  }

  giveRating(){
    var stringy = JSON.stringify({
      "requestType" : "get_veh_reviews",
      "veh_id":this.vehID
      // {"requestType": "get_veh_reviews", "veh_id": "1"}
    });
    console.log(stringy);
   this.restService.reviews(stringy).subscribe(response => {
     this.response        =  JSON.parse(response['_body']);
     console.log(this.response);
    //  this.others_reviews  = this.response.others_reviews;
     this.owns_reviews    = this.response.veh_reviews;
    //  this.critical_ratings_others    = this.response.critical_ratings_others;
  
 
      this.storage.get('profile_img_url').then((profile_img_url) => {
    
      });
    },err => {
    
    });
  }
  favourite(request:any,ratingsID:any,i){
    
    if(this.userID){
    console.log(ratingsID);
    var stringy = JSON.stringify({
      "requestType": request,
      "ratingsID" : ratingsID,
      "usersID" : this.userID
     });
     console.log(stringy);
    this.restService.reviews(stringy).subscribe(response => {
      this.favResponse =  JSON.parse(response['_body']);
      console.log(this.favResponse.status);
      if(this.favResponse.status == 'error'){
        
      }else if(this.favResponse.status == 'success'){
        if(request == 'like_review'){
          var count = document.querySelector('.like_count_'+ratingsID).textContent;
          var newCount = parseInt(count)+1;
          document.querySelector('.like_count_'+ratingsID).textContent = newCount.toString();
          this.others_reviews[i].is_liked = 1;
          this.others_reviews = this.others_reviews;
        }else if(request == 'unlike_review'){
          var count = document.querySelector('.like_count_'+ratingsID).textContent;
          var newCount = parseInt(count)-1;
          document.querySelector('.like_count_'+ratingsID).textContent = newCount.toString();
          this.others_reviews[i].is_liked = 0;
          this.others_reviews = this.others_reviews;
        }
       
      }
     
     },err => {
     
     });
    }else{
      this.router.navigate(['/login']);
    }
  }
  View(request:any,ratingsID:any,feedback:number){
    if(this.userID){
    console.log(feedback);
    var stringy = JSON.stringify({
      "requestType": request,
      "ratingsID" : ratingsID,
      "usersID" : this.userID
     });
     console.log(stringy);
    this.restService.reviews(stringy).subscribe(response => {
      this.viewResponse =  JSON.parse(response['_body']);
      console.log(this.viewResponse.status);
      if(this.viewResponse.status == 'error'){
        
      }else if(this.viewResponse.status == 'success'){
        if(request == 'view_review'){ 
          document.querySelector('.feedback_'+ratingsID).textContent = this.others_reviews[feedback].feedback;
          var count = document.querySelector('.view_count_'+ratingsID).textContent;
          var newCount = parseInt(count)+1;
          document.querySelector('.view_count_'+ratingsID).textContent = newCount.toString();
        }
       
      }
     
     },err => {
     
     });
    }else{
      this.router.navigate(['/login']);
    }
  }
  Reviews(title){
    if(title == 'Helpful'){
      this.others_reviews =  this.response.others_reviews;
    }else if(title == 'Recent'){
      this.others_reviews =  this.response.others_reviews;
    }else if(title == 'Critical'){
      console.log(this.response.critical_ratings_others);
      this.others_reviews =  this.response.critical_ratings_others;
     // alert(title);
    }
  }
  selectIndex(i){
    this.sliderStartBoolean = i;
  }

  back(){
    this.location.back();
  }
}
