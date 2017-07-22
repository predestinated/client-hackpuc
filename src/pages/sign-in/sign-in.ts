import { Component } from '@angular/core';
import { SignUpPage } from '../sign-up/sign-up'
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

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

  user: Observable<firebase.User>;

  credentials = {
    email: '',
    password: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  sendSignInForm () {
    console.log(this.credentials);
  }

  goTo (page) {
    this.navCtrl.push(page)
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
