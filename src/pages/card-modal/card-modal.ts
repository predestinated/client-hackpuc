import { Component } from '@angular/core';
import { NavController, NavParams, Platform, ViewController, IonicPage } from 'ionic-angular';

/**
 * Generated class for the CardModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-card-modal',
  templateUrl: 'card-modal.html',
})
export class CardModalPage {

  character;
  cards = []
  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    this.cards = params.get('cards')
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
