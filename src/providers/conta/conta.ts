import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ContaProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ContaProvider {

  constructor(public http: Http) {
    console.log('Hello ContaProvider Provider');
  }

  getConta(){
    return this.http.get('./assets/mock/conta/conta.json')
    .map(res => res.json())
  }

}
