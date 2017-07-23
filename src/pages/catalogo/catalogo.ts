import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, ModalController, LoadingController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-catalogo',
  templateUrl: 'catalogo.html'
})

export class CatalogoPage {
  produtos: FirebaseListObservable<any[]>
  showItens: boolean = false
  categorias: any[]
  order = []

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController, private db: AngularFireDatabase,
    private loadingCtrl: LoadingController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CatalogoPage');
    let loading = this.loadingCtrl.create();
    loading.present()
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
    let modal = this.modalCtrl.create('ItemModalPage', { 
      'produto': prod 
    });
    modal.onDidDismiss(data => {
      this.order = data;
      console.log('veio da modal', data);
      console.log('está no order', this.order);
    });
    modal.present();
  }

}
