import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the TelaScannerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tela-scanner',
  templateUrl: 'tela-scanner.html',
  providers: [BarcodeScanner]
})
export class TelaScannerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    this.scan();
  }

  scan() {
    this.barcodeScanner.scan().then((barcodeData) => {
      // Success! Barcode data is here
      console.log("barcodeData:", barcodeData);
      this.navCtrl.setRoot('CatalogoPage', {conta: barcodeData.text.split("/").pop()});
    }, (err) => {
      // An error occurred
    });
  }

}
