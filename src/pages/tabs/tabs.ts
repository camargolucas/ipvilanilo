import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { OthersPage } from '../others/others';
import { SocietyPage } from '../society/society';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SocietyPage;
  tab3Root = ContactPage;
  tab4Root = OthersPage;

  constructor() {

  }
}
