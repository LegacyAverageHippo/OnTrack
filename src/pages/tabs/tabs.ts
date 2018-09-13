import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { IMChallenge } from '../IMChallenge/IMChallenge';
import { OnTrackCalculator } from '../ontrackcalculator/ontrackcalculator';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = OnTrackCalculator;
  tab2Root = IMChallenge;
  tab3Root = AboutPage;

  constructor() {

  }
}
