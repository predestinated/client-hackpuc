import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/*
  Generated class for the ContaProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ContaProvider {

  produtos: FirebaseListObservable<any[]>;
  conta: FirebaseListObservable<any[]>;

  constructor(public http: Http, private db: AngularFireDatabase) {
    this.produtos = db.list('produtos');
  }

  getConta(){
    return this.http.get('./assets/mock/conta/conta.json')
    .map(res => res.json())
  }

  insertIntoConta (data) {
    let orders: any; 
    orders = localStorage.getItem('order')
    if( orders != undefined){
      orders = JSON.parse(orders)
      orders = orders.concat(data)    
    } else {
      orders = data
    }
    localStorage.setItem('order', JSON.stringify(orders))
  }

  getItemsQuantity () {
    let orders:any;
    orders = localStorage.getItem('order')
    if( orders != undefined) {
      orders = JSON.parse(orders)
      return orders.length
    } else {
      return 0
    }
  }

  getItems () {
    let orders: any; 
    orders = localStorage.getItem('order')
    if( orders != undefined){
      orders = JSON.parse(orders)
      return orders
    } else {
      orders = []
      return orders
    }
  }
}
