import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { OnTrackCalculator } from '../ontrackcalculator/ontrackcalculator';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = OnTrackCalculator;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
