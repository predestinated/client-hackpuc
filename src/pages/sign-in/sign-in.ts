import { Component } from '@angular/core';
import { SignUpPage } from '../sign-up/sign-up'
import { NavController, NavParams, IonicPage } from 'ionic-angular';

/**
 * Generated class for the SignInPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  credentials = {
    email: '',
    password: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  sendSignInForm () {
    console.log(this.credentials);
  }

  goTo (page) {
    this.navCtrl.push(page)
  }

}
