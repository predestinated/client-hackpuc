import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

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
        { 'nome': 'Suco',
          'preco': '2'
        },
        {
          'nome': 'Pão',
          'preco': '5,00'
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
          'preco': '52,00'
        },
        {
          'nome': 'Café',
          'preco': '5,90'
        },
        { 'nome': 'Suco',
          'preco': '2,00'
        }
      ]
    },
    {
      'nome': 'Sobremesas',
      'showItens': false
    }]
  showItens: boolean = false

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
    //cat.showItens = cat.showItens? false: true
    //console.log(cat)
  }

  openProducts(event) {
    console.log(event);
  }

  abrirModal(produto) {
    console.log(produto)
  }

}
