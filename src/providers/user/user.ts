import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Subject} from 'rxjs/Subject';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import md5 from 'js-md5'

@Injectable()
export class UserProvider {

  users: FirebaseListObservable<any[]>;
  subject: any;
  user: FirebaseObjectObservable<any>;

  constructor(public http:Http, public db: AngularFireDatabase) {
    this.subject = new Subject()
    this.users = db.list('/users',{
      query: {
        orderByChild: 'uid',
        equalTo: this.subject 
      }
    });
  }

  filterByUID (value) {
    this.subject.next(value)
  }

  addUser (obj) {
    this.users.push(obj)
  }

}
