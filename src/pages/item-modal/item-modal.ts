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
  counter = 0

  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    private db: AngularFireDatabase
    ) {
    console.log(navParams.get('produto'))
    this.produto = navParams.get('produto')
  }

  dismiss() {
    this.viewCtrl.dismiss(this.order)
  }

  addQuantity(produto) {
    console.log("Adicionou: ",produto);
    
    this.order.push(produto)
    this.counter++
  }

  removeQuantity(produto) {
    if(this.counter > 0) {
      this.counter--
      this.order.pop()
    }
    else {
      return false
    }
  }

}
