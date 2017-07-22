import { ContaProvider } from './../../providers/conta/conta';
import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-conta',
  templateUrl: 'conta.html',
})
export class ContaPage {
  conta;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private contaProvider: ContaProvider, private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContaPage');
    this.getConta()
  }

  getConta() {
    let loading = this.loadingCtrl.create();
    loading.present();
    this.contaProvider.getConta().subscribe(conta => {
      console.log('Conta: ', conta);

      this.conta = conta
      loading.dismiss();
    })
  }

}
