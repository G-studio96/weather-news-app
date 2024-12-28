import { Component, OnInit } from '@angular/core';
import { CountriesComponent } from '../countries/countries.component';
import { IonContent } from '@ionic/angular/standalone';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  imports: [CountriesComponent,IonContent]
})
export class GridComponent  implements OnInit {

  constructor()
   { }

  ngOnInit() {}

}
