import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, IonicPage } from 'ionic-angular';
import {AuthenticationProvider} from '../../providers/authentication/authentication'
import {UserProvider} from '../../providers/user/user'

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public authProvider: AuthenticationProvider, public userProvider: UserProvider) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

