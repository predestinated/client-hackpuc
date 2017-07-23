import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {UserProvider} from '../../providers/user/user';
import {AuthenticationProvider} from '../../providers/authentication/authentication';
import md5 from 'js-md5'

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

  user: Observable<firebase.User>;

  credentials = {
    name:  '',
    document: '',
    email: '',
    password: '',
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public afAuth: AngularFireAuth, public userProvider: UserProvider,public auth: AuthenticationProvider) {
  }

  sendSignUpForm () {
    
    this.afAuth.auth.createUserWithEmailAndPassword(this.credentials.email, this.credentials.password)
    .then(success => {
      let obj = {
        avatar: `https://www.gravatar.com/avatar/${md5(this.credentials.email)}.jpg`,
        name: this.credentials.name,
        document: this.credentials.document,
        email: this.credentials.email,
        uid: success.uid,
        cards: []
      }
      this.userProvider.addUser(obj)
      this.navCtrl.setRoot('ProfilePage')
    })
  }

}
