import { ContaProvider } from './../../providers/conta/conta';
import { PaymentProvider } from '../../providers/payment/payment';
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
  contaFirebase: any;
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
    private alertCtrl: AlertController,
  ) {
  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(usr => {
      this.usuario = usr;
      ///this.contaFirebase = this.af.object('/contas/ID')
    });
    this.contaFirebase = firebase.database().ref('contas/' + localStorage.getItem('idConta'))
    this.contaFirebase.child('produtos').on("value", el => {      
      el.forEach(snapshot => {
        this.produtos.push(snapshot.val())
        this.total += snapshot.val().preco 
      })
    });

    //this.orders = JSON.parse(localStorage.getItem('order')) || []
    //this.getConta()
  }

  ionViewWillEnter() {
    //this.orders = JSON.parse(localStorage.getItem('order')) || []
  }

  getConta() {

    // let loading = this.loadingCtrl.create();
    // loading.present();
    // this.contaProvider.getConta().subscribe(conta => {
    //   this.conta = conta
    //   loading.dismiss();
    // })

    // if (this.orders.length > 0) {
    //   this.orders.forEach(element => {
    //     this.produtos.push(element)
    //     this.total += element.preco 
    //   });
    // }
  }

  pagarConta() {
    let loading = this.loadingCtrl.create()
    loading.present()
    let payment = {
      "MerchantOrderId": "2014111703",
      "Customer": {
        "Name": "Comprador crédito simples"
      },
      "Payment": {
        "Type": "CreditCard",
        "Amount": 100000,
        "Installments": 1,
        "SoftDescriptor": "123456789ABCD",
        "CreditCard": {
          "CardNumber": "0000.0000.0000.0001",
          "Holder": "Teste Holder",
          "ExpirationDate": "12/2030",
          "SecurityCode": "123",
          "SaveCard": "true",
          "Brand": "Visa"
        }
      }
    }
    this.payment.pay(payment).subscribe(data => {
      this.contaFirebase.child('produtos').remove();
      this.produtos = [];
      this.total = 0;
      console.log(data)
      loading.dismiss()
      this.alertCtrl.create({ title: 'Sucesso', subTitle: 'Pagamento efetuado com sucesso!' }).present()
    })
  }
}
