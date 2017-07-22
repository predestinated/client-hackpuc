import { Component } from '@angular/core';
import {CardModalPage} from '../card-modal/card-modal'
import { NavController, NavParams,IonicPage, ModalController, ViewController, Platform } from 'ionic-angular';
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

  user = {
    avatar:'https://www.gravatar.com/avatar/ad58db6a1c4941fd3c42c5fd656af7c1',
    name: 'Lucas Trindade',
    document: '154.453.907-05',
    email: 'lucasktrindade@gmail.com'
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  openModal() {
    let modal = this.modalCtrl.create(CardModalPage);
    modal.present();
  }

}


