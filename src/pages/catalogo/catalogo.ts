import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-catalogo',
  templateUrl: 'catalogo.html',
})
export class CatalogoPage {

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    console.log(this.categorias)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CatalogoPage');
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
    let modal = this.modalCtrl.create('ItemModalPage', {'produto': prod});
    modal.present();
  }

}
