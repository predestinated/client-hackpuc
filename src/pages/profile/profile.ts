import { Component } from '@angular/core';
import { NavController, NavParams,IonicPage, ModalController, ViewController, Platform } from 'ionic-angular';
import {AuthenticationProvider} from '../../providers/authentication/authentication';
import {UserProvider} from '../../providers/user/user';
/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  user: any

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public auth: AuthenticationProvider, public userProvider: UserProvider) {
    this.auth.user.subscribe(data => {
      if(data === null) {
        this.navCtrl.setRoot('SignInPage')
      }else {
        this.userProvider.filterByUID(data.uid)
      }
    })
    this.userProvider.users.subscribe(data => {      
      this.user = data[0]
    })

  }

  openModal() {
    let cards = []
    if(this.user.hasOwnProperty('cards')) {
     cards = this.user.cards 
    }
    let modal = this.modalCtrl.create('CardModalPage', {cards: cards});
    modal.present();
  }

  signOut() {
    this.auth.logOut()    
  }
 
}


