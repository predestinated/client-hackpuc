import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, ModalController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController, private db: AngularFireDatabase) {

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
    modal.present();
  }

}
