import { ContaProvider } from './../../providers/conta/conta';
import {PaymentProvider} from '../../providers/payment/payment';
import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, LoadingController, AlertController } from 'ionic-angular';

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
  orders = [];
  produtos = [];
  total = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private af: AngularFireDatabase,
    private payment: PaymentProvider,
    private alertCtrl: AlertController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContaPage');
    this.afAuth.authState.subscribe(usr => {
      this.usuario = usr;
      ///this.contaFirebase = this.af.object('/contas/ID')
    });
    this.orders = JSON.parse(localStorage.getItem('order')) || []
    this.getConta()
    
  }

  getConta() {
    console.log('getConta()');
    
    // let loading = this.loadingCtrl.create();
    // loading.present();
    // this.contaProvider.getConta().subscribe(conta => {
    //   this.conta = conta
    //   loading.dismiss();
    // })

    if (this.orders.length > 0) {
      console.log('orders > 0');
      
      this.orders.forEach(element => {
        this.produtos.push(element)
        this.total += element.preco 
      });

      console.log('produtos', this.produtos)
      console.log('total', this.total)
    }
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
