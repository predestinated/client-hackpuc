import { Component } from '@angular/core';
import { NavController, NavParams, Platform, ViewController } from 'ionic-angular';

/**
 * Generated class for the CardModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-card-modal',
  templateUrl: 'card-modal.html',
})
export class CardModalPage {

  character;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
