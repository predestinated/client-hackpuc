import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { SignInPage } from '../sign-in/sign-in';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';
import Cookie from '../../utils/cookie'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = undefined;

  constructor() {
    if (Cookie.get('isLoggedIn')) {
      this.tab3Root = 'ProfilePage'
    } else {
      this.tab3Root = 'SignInPage'
    }
  }
}
