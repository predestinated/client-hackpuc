import { ContaProvider } from './../../providers/conta/conta';
import {PaymentProvider} from '../../providers/payment/payment';
import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, LoadingController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@IonicPage()
@Component({
  selector: 'page-conta',
  templateUrl: 'conta.html',
  providers: [AngularFireAuth, AngularFireDatabase]
})
export class ContaPage {
  contaFirebase: FirebaseObjectObservable<any>;
  usuario: any;
  conta;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private af: AngularFireDatabase,
    private payment: PaymentProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContaPage');
    //this.getConta()
    this.afAuth.authState.subscribe(usr => {
      this.usuario = usr;
      ///this.contaFirebase = this.af.object('/contas/ID')
    });
  }

  getConta() {
    let loading = this.loadingCtrl.create();
    loading.present();
    // this.contaProvider.getConta().subscribe(conta => {
    //   this.conta = conta
    //   loading.dismiss();
    // })
  }

  pagarConta(){
    let payment = {
      "MerchantOrderId":"2014111703",
      "Customer":{
          "Name":"Comprador crédito simples"
      },
      "Payment":{
        "Type":"CreditCard",
        "Amount":100000,
        "Installments":1,
        "SoftDescriptor":"123456789ABCD",
        "CreditCard":{
            "CardNumber":"0000.0000.0000.0001",
            "Holder":"Teste Holder",
            "ExpirationDate":"12/2030",
            "SecurityCode":"123",
            "SaveCard":"true",
            "Brand":"Visa"
        }
      }
    }
    this.payment.pay(payment)
    console.log("Iniciou o fluxo de pagamento.");
    
  }

}
