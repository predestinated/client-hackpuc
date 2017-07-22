import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, ModalController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-catalogo',
  templateUrl: 'catalogo.html'
})
export class CatalogoPage {
  items: FirebaseListObservable<any[]>;

  categorias: any = [
    {
      'nome': 'Entradas',
      'showItens': false,
      'produtos': [
        {
          'nome': 'Suco',
          'preco': '3,50',
          'id': 1,
          'categoria': 1
        },
        {
          'nome': 'Pão',
          'preco': '2,50',
          'id': 2,
          'categoria': 1
        }
      ]
    },
    {
      'nome': 'Pratos Principais',
      'showItens': false,
    },
    {
      'nome': 'Bebidas',
      'showItens': false,
      'produtos': [
        {
          'nome': 'Vinho',
          'preco': '35,00',
          'id': 1,
          'categoria': 1
        },
        {
          'nome': 'Café',
          'preco': '2,90',
          'id': 1,
          'categoria': 1
        }
      ]
    },
    {
      'nome': 'Sobremesas',
      'showItens': false
    }]
  showItens: boolean = false
  produtos: FirebaseListObservable<any[]>

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController, private db: AngularFireDatabase) {
    console.log(this.categorias)
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
      //this.categorias[0] = produto.filter(el => {
      //  el.categoria == "Entrada" ? el : null
      //})
      //this.categorias[1] = produto.filter(el => {
      //  el.categoria == "Prato Principal" ? el : null
      //})
      //this.categorias[2] = produto.filter(el => {
      // el.categoria == "Bebidas"
      //})
      //this.categorias[3] = produto.filter(el => {
      //  el.categoria == "Sobremesa" ? el : null
      //})

      console.log(this.categorias)
    })
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
