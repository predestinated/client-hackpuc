import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'CatalogoPage';
  tab2Root = 'ContaPage';
  tab3Root = ContactPage;

  constructor() {

  }
}
