import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

/**
 * Generated class for the SignUpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  user = {
    name:  '',
    document: '',
    email: '',
    password: '',
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  sendSignUpForm () {
    console.log(this.user);
    
  }

}
