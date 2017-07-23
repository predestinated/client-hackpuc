import { Component } from '@angular/core';
import {AuthenticationProvider} from '../../providers/authentication/authentication';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'CatalogoPage';
  tab2Root = 'ContaPage';
  tab3Root = undefined;
  isLoggedIn = true

  constructor(public auth: AuthenticationProvider) {
    this.auth.user.subscribe(data => {
      if(data === null) {
        this.tab3Root = 'SignInPage'
      } else {
        this.tab3Root = 'ProfilePage'
      }
    })
  }
}
