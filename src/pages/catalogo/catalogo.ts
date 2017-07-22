import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-catalogo',
  templateUrl: 'catalogo.html',
})
export class CatalogoPage {

  categorias = [
      {'nome': 'Entradas',
        'showItens': false
      },
      {'nome': 'Pratos Principais',
        'showItens': false,
      },
      {'nome': 'Bebidas',
        'showItens': false
      },
      {'nome':'Sobremesas',
        'showItens': false
      }]
  showItens:boolean = false

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.categorias)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CatalogoPage');
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

  openProducts (event) {
    console.log(event);
    
  }

}
