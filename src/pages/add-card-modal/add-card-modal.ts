import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, IonicPage } from 'ionic-angular';
import {AuthenticationProvider} from '../../providers/authentication/authentication'

/**
 * Generated class for the AddCardModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-card-modal',
  templateUrl: 'add-card-modal.html',
})
export class AddCardModalPage {

  card = {
    CardNumber: '',
    Holder: '',
    ExpirationDate: '',
    SecurityCode: '',
    Brand: '',
    Type: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public authProvider: AuthenticationProvider) {
    this.authProvider.user.subscribe(data => {
      console.log(data);
      
    })
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

