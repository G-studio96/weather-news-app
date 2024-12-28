import { Component, OnInit } from '@angular/core';
import { RestcountriesService } from '../services/restcountries.service';
import { map } from 'rxjs';
import { IonAvatar, IonContent, IonItem, IonLabel, IonList } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
  imports: [IonLabel, IonAvatar, IonItem,IonList, IonContent, CommonModule]
})
export class CountriesComponent implements OnInit {
  
  countries: any[] = [];

  constructor(private restcountriesService: RestcountriesService) { }

  ngOnInit() {

    this.restcountriesService.getAllCountries().pipe(
      map((countries) =>
        countries.map((country) => ({
          flag: country.flags.png,
          name: country.name.official,
          
        }))
      )
    ).subscribe((countryValue) => {
      this.countries = countryValue;
      console.log('Countries loaded', this.countries)
    },
      (error) => {
      console.log('Error fetching countries:', error)
      }
    );
    
  }

}
