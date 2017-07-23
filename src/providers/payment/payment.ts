import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
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

  constructor(public http: Http) {}

  pay (payment: SimplePayment) {
    return this.http
    .post(`${environment.payment.url}/pay`,payment)
  
  }


}
