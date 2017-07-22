import { ContaProvider } from './../../providers/conta/conta';
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
    private contaProvider: ContaProvider, private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private af: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContaPage');
    //this.getConta()
    this.afAuth.authState.subscribe(usr => {
      this.usuario = usr;
      this.contaFirebase = this.af.object('/contas/' + usr.uid)
    });
  }

  getConta() {
    let loading = this.loadingCtrl.create();
    loading.present();
    this.contaProvider.getConta().subscribe(conta => {
      this.conta = conta
      loading.dismiss();
    })
  }

  pagarConta(){
    console.log("Iniciou o fluxo de pagamento.");
    
  }

  autenticar() {
    this.afAuth.auth.signInWithEmailAndPassword("allisonverdam@gmail.com", "allison123")
      .then(res => {
        this.usuario = res.user;
      })
  }

  sair() {
    this.afAuth.auth.signOut();
  }

}
