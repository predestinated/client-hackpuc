import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {environment} from '../../environments/environment';
import 'rxjs/add/operator/map';

/*
  Generated class for the PaymentProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
interface SimplePayment {

  MerchantOrderId:  string;
  Customer : {
    Name: string;
  };
  Payment : {
    Type: string;
    Amount: number;
    Installments: number;
    SoftDescriptor: string;
    CreditCard: {
      CardNumber: string;
      Holder: string;
      ExpirationDate: string;
      SecurityCode: string;
      Brand: string;
    }
  }
}



@Injectable()
export class PaymentProvider {

  constructor(public http: Http) {
    console.log('Hello PaymentProvider Provider');
  }

  pay (payment: SimplePayment) {
    let url = environment.cielo.RequestAPI + '1/sales/'
    let headers = new Headers();
    headers.append('MerchantId', environment.cielo.MerchantId);
    headers.append('MerchantKey', environment.cielo.MerchantKey);
    return this
    .http
    .post(url,payment,{
      headers: headers
    })
    .subscribe(data => console.log(data));
  }


}
