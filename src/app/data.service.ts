import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  //Making fake temporary data
  //two methods

  //mengambil dummy list coffee
  getList(callback){
    const list = [
      new Coffee("Double Espresso","Sunny Cafe", new PlaceLocation("123 market st", "san francisco")),
      new Coffee("Caramel Americano","Starcoffee", new PlaceLocation("Gran Via 34", "madrid"))
    ]
    callback(list);
  }

  //menyimpan new coffee
  save(coffee, callback){
    callback(true);
  }

}
