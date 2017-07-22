import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'CatalogoPage';
  tab2Root = 'ContaPage';
  tab3Root = undefined;
  isLoggedIn = true

  constructor() {
    if (this.isLoggedIn) {
      this.tab3Root = 'SignInPage'
    } else {
      this.tab3Root = 'SignInPage'
    }
  }
}
