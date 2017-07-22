import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  
  isLoggedIn = true
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = undefined;

  constructor() {
    if (this.isLoggedIn) {
      this.tab3Root = 'ProfilePage'
    } else {
      this.tab3Root = 'ProfilePage'
    }
  }
}
