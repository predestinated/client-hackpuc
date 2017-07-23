import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, ModalController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

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
  produtos: FirebaseListObservable<any[]>;
  conta: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController, private db: AngularFireDatabase) {
    if (navParams.get('conta')) {
      this.conta = this.db.list('contas/' + navParams.get('conta'), {
        query: {
          equalTo: navParams.get('conta')
        }
      });
      this.conta.subscribe(conta => {
        if (conta.length === 0) {
          this.conta.$ref.ref.update({ situacao: "aberta", precoTotal: 10, produtos: [] })
        }
      })
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CatalogoPage');
    this.produtos = this.db.list('produtos');
    this.produtos.subscribe(produto => {

      let newArr = []
      let types = {}
      let newItem
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

  abrirProdutos(categoria) {
    if (categoria.showImagem) {
      categoria.showImagem = false;
    } else {
      categoria.showImagem = true;
    }
    console.log(categoria)
  }

  openProduct(prod) {
    console.log('prod', prod)
    let modal = this.modalCtrl.create('ItemModalPage', { 'produto': prod });
    modal.onDidDismiss(data => {
      this.order = data;
      console.log('veio da modal', data);
      console.log('está no order', this.order);
    });
    modal.present();
  }

}