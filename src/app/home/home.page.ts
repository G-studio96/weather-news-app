import { Component } from '@angular/core';

import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';
import { CountriesComponent } from '../details/countries.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [ IonContent, HeaderComponent, CountriesComponent],
})
export class HomePage {
  constructor() {}
}
