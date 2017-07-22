import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, Platform, ViewController } from 'ionic-angular';

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

  produto;
  valorTotal;
  counter;

  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public viewCtrl: ViewController,
    public navParams: NavParams
    ) {
    console.log(navParams.get('produto'))
    this.produto = navParams.get('produto')
    //console.log(this.produto)
  }

  dismiss() {
    this.viewCtrl.dismiss()
  }

}
