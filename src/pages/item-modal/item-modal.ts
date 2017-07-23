import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, Platform, ViewController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the ItemModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-modal',
  templateUrl: 'item-modal.html',
})

export class ItemModalPage {
  order = [];
  produto;
  valorTotal;
  counter = 1

  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    private db: AngularFireDatabase
    ) {
    console.log(navParams.get('produto'))
    this.produto = navParams.get('produto')
    //console.log(this.produto)
  }

  dismiss() {
    this.viewCtrl.dismiss(this.order)
  }

  addQuantity() {
    this.counter++
  }

  removeQuantity() {
    if(this.counter > 1) {
      this.counter--
    }
    else {
      return false;
    }
  }

  itemToOrder(produto) {
    this.order.push(produto)
  }

}
