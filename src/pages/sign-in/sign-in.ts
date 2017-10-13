import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/authentication/authentication'

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthenticationProvider) {
  }

  sendSignInForm () {
    this.auth.signInForm(this.credentials)
    .then(success => {
      this.navCtrl.setRoot('ProfilePage')
    })
  }

  goTo (page) {
    this.navCtrl.push(page)
  }

}
