import { Injectable } from '@angular/core';

@Injectable()
export class GeolocationService {

  constructor() { }

  //Request users location
  requestLocation(callback){
    //W3C Geolocation API
    navigator.geolocation.getCurrentPosition(
      position => {
        callback(position.coords); //coordinate users
      },
      error => {
        callback(null);
      }
    )
  }

  getMapLink(location: PlaceLocation){

    //Contoh Universal Links
    //<a href="https://maps.google.com/?q=Eiffel+Tower">
    //<a href="https://maps.google.com/?q=34.23,12.33> -> latitude, longtitude
    //<a href="https://maps.apple.com/?q=34.23,12.33>

    // logic untuk mengambil koordinat user
    let query = "";
    if(location.latitude){
      query = location.latitude +","+ location.longtitude;
    }else{
      query = `${location.address}, ${location.city}`
    }

    //cek jenis smartphone dan kondisi return map yg akan digunakan
    if(/iPad|iPhone|iPod/.test(navigator.userAgent)){
      return `https://maps.apple.com/?q=${query}`;
    }else{
      return `https://maps.google.com/?q=${query}`;
    }

  }
}
