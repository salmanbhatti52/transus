import { Location } from '@angular/common';
import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { LoadingController, NavController, Platform, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
declare var google;
@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  response: any;
  autocomplete: { input: string; };
  autocompleteItems: any[];
  detinationCompleteItems: any[];
  location: any;
  placeid: any;
  GoogleAutocomplete: any;
  options: GeolocationOptions;
  geoOptions: NativeGeocoderOptions;
  @ViewChild('map', { static: true }) mapElement: ElementRef;
  map: any = {};
  userAddress: any = '';
  latitude: number;
  longitude: number;
  latitudeString: string;
  longitudeString: string;
  get_country: any;
  btnApply: boolean = true;
  address: string = '';
  pAdress: string;
  errorMsg: string;
  @ViewChild('mapElement') mapNativeElement: ElementRef;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  directionForm: FormGroup;
  source: any;
  destination: any;
  showSourceError: boolean;
  showDestinationError: boolean;
  back: any;
  lastVeh: any;
  loading:any;
  constructor(private storage: Storage,
    private fb: FormBuilder,
    public activatedRoute: ActivatedRoute,
    private toastController: ToastController,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    public zone: NgZone,
    private router: Router, public plateform: Platform, public navController: NavController,public loadingController: LoadingController,
    public locationPlugin: Location) {
    this.activatedRoute.queryParams.subscribe((res) => {

      this.response = JSON.parse(res.value);
      console.log(this.response);
      this.back = this.response.location;
      this.lastVeh = this.response.vehId;
    });
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = { input: '' };
    this.autocompleteItems = [];
    this.detinationCompleteItems = [];
  }
  plateformCheck: any;
  ngOnInit() {
    //this.loadMap();
    if (this.plateform.is('ios')) {
      this.plateformCheck = "ios";
    }
    else {
      this.plateformCheck = "android";
    }
  }
  goToHome() {
    //this.router.navigate([this.back]);
    this.navController.navigateBack(this.back);
  }
  backToList() {
    this.showSourceError = false;
    this.showDestinationError = false;
    if (this.source == '' || this.source == undefined) {
      this.showSourceError = true;
      return false;
    } else if (this.destination == '' || this.destination == undefined) {
      this.showDestinationError = true;
      return false;
    }
    this.getpickuplatlog(this.source);
    
    this.storage.set('pickup', this.source);
    this.storage.set('dropoff', this.destination);
 
    //this.navController.navigateBack(this.back);
    //this.router.navigate(['/car-documents']);
    //this.router.navigate(['..']);

  }
  ngAfterViewInit(): void {
    const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
      zoom: 7,
      center: { lat: 41.85, lng: -87.65 }
    });
    this.directionsDisplay.setMap(map);
  }
  calculateAndDisplayRoute() {
    this.showSourceError = false;
    this.showDestinationError = false;
    if (this.source == '' || this.source == undefined) {
      this.showSourceError = true;
      return false;
    } else if (this.destination == '' || this.destination == undefined) {
      this.showDestinationError = true;
      return false;
    }
    const that = this;
    this.directionsService.route({
      origin: this.source,
      destination: this.destination,
      travelMode: 'DRIVING'
    }, (response, status) => {
      console.log(response);
      if (status === 'OK') {
        that.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  UpdateSearchResults() {
    if (this.source == '') {
      this.autocompleteItems = [];
      return;
    }
    //componentRestrictions: {country: 'AE'}
    this.GoogleAutocomplete.getPlacePredictions({ input: this.source },
      (predictions, status) => {
        this.autocompleteItems = [];
        this.zone.run(() => {
          predictions.forEach((prediction) => {
            console.log(prediction);
            this.autocompleteItems.push(prediction);

          });
        });
      });
  }
  SelectSearchResult(address) {
    this.source = address;//May be delete
    console.log(this.source);
    this.autocompleteItems = []
  }
  UpdateDestinationResults() {
    if (this.destination == '') {
      this.detinationCompleteItems = [];
      return;
    }
    //componentRestrictions: {country: 'AE'}
    this.GoogleAutocomplete.getPlacePredictions({ input: this.destination },
      (predictions, status) => {
        this.detinationCompleteItems = [];
        this.zone.run(() => {
          predictions.forEach((prediction) => {
            console.log(prediction);
            this.detinationCompleteItems.push(prediction);

          });
        });
      });
  }
  SelectDestinationResult(address) {
    this.destination = address;//May be delete
    console.log(this.destination);
    this.detinationCompleteItems = []

  }
  getpickuplatlog(address) {
    this.present();

    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
    this.nativeGeocoder.forwardGeocode(address, options)
      .then((result: NativeGeocoderResult[]) => {

        console.log('getpickuplatlog--->', result[0].latitude, result[0].longitude);
        this.storage.set('pickuplong', result[0].longitude);
        this.storage.set('pickuplat', result[0].latitude);
        this.getdropofflatlog(this.destination);
        this.dismiss();
      }).catch((error: any) => {
        this.errorMsg = JSON.stringify(error);
        console.log(this.errorMsg);
        this.dismiss();
        this.presentToast(this.errorMsg);

      });
  }
  getdropofflatlog(address) {
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
    this.nativeGeocoder.forwardGeocode(address, options)
      .then((result: NativeGeocoderResult[]) => {

        console.log(result[0].latitude, result[0].longitude);
        this.storage.set('dropofflong', result[0].longitude);
        this.storage.set('dropofflat', result[0].latitude);

        this.locationPlugin.back()


      }).catch((error: any) => {
        this.errorMsg = JSON.stringify(error);
        console.log(this.errorMsg);
        this.presentToast(this.errorMsg);
  
      });
  }

  async present() {
    this.loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    await this.loading.present();
  }


  async dismiss() {
   await this.loading.dismiss();
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
