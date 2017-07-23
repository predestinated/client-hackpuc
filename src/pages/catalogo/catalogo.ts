import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, ModalController, LoadingController, AlertController, Platform } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ContaProvider } from '../../providers/conta/conta';

declare var window;

@IonicPage({
  name: 'CatalogoPage',
  segment: 'catalogo/:conta'
})
@Component({
  selector: 'page-catalogo',
  templateUrl: 'catalogo.html'
})

export class CatalogoPage {
  categorias: any[]
  order = []
  showItens: boolean = false;
  produtos = [];
  conta: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController, private db: AngularFireDatabase,
    private loadingCtrl: LoadingController, private alertCtrl: AlertController,
    public contaProvider: ContaProvider, private platform: Platform) {
    console.log("navParams.get('conta'):", navParams.get('conta'));

    let paramConta = navParams.get('conta')
    if (paramConta === '1' || paramConta === '2') {
      this.conta = this.db.list('contas/' + navParams.get('conta'), {
        query: {
          equalTo: navParams.get('conta')
        }
      });
      this.conta.subscribe(conta => {
        if (conta.length === 0) {
          this.conta.$ref.ref.update({ situacao: "aberta" })
        }
      })
    } else {
      // redireciona pra view de scanning
      window.cordova
        ? this.navCtrl.setRoot('TelaScannerPage')
        : this.navCtrl.setRoot('CatalogoPage', { conta: 1 })
    }

  }

  ionViewDidLoad() {
    let loading = this.loadingCtrl.create();
    loading.present()

    this.contaProvider.produtos.subscribe(produto => {
      console.log(produto);

      this.produtos = produto
      let newArr = []
      let types = {}
      let cur
      let j
      for (let i = 0, j = produto.length; i < j; i++) {
        cur = produto[i];
        if (!(cur.categoria in types)) {
          types[cur.categoria] = { type: cur.categoria, data: [] };
          newArr.push(types[cur.categoria]);
        }
        types[cur.categoria].data.push(cur);
      }
      this.categorias = newArr;
      loading.dismiss()
      console.log('Categorias', this.categorias);
    });
  }

  toggleDetalhes(data) {
    if (data.showImagem) {
      data.showImagem = false;
    } else {
      data.showImagem = true;
    }
  }

  openProduct(prod) {
    let modal = this.modalCtrl.create('ItemModalPage', {
      'produto': prod
    });
    modal.onDidDismiss(data => {
      this.order = this.order.concat(data)
      console.log(this.order)
    })
    modal.present();
  }

  openOrder() {
    this.contaProvider.insertIntoConta(this.order)
    if (this.order.length == 0) {
      this.alertCtrl.create({ title: 'Opa...', subTitle: 'Você ainde não tem pedidos!' }).present()
    } else {
      this.order.forEach(element => {
        element.entregue = false;
      });
      this.conta.$ref.ref.child('produtos').set(this.order)
      this.alertCtrl.create({ title: 'Sucesso', subTitle: 'Pedido efetuado!' }).present()
    }

  }

}