import { Component, OnInit } from '@angular/core';
import { RestcountriesService } from '../services/restcountries.service';
import { map } from 'rxjs';
import { IonAvatar, IonButton, IonContent, IonItem, IonLabel, IonList } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


interface Country {
  flag: string;
  name: string;
  code: string;
  latlng: number[];
  capital: string;

}

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
  imports: [IonLabel, IonAvatar, IonItem,IonList, IonContent, CommonModule, IonButton]
})
  

export class CountriesComponent implements OnInit {
  
  countries: Country[] = [];
  newsButton: string = 'News';
  weatherButton: string = 'Weather';

  constructor(private restcountriesService: RestcountriesService, private router: Router) { }

  ngOnInit() {
  

    this.restcountriesService.getAllCountries().pipe(
      map((countries) =>
        countries.map((country) => ({
          flag: country.flags.png,
          name: country.name.official,
          code: country.cca2,
          latlng: country.latlng,
          capital: country.capital
          
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

  pushNews(cca2: string, countryName: string): void {
    this.router.navigate(['./news'], {
      queryParams: { code: cca2, name: countryName },
      
    })
  }

  pushWeather(lat: number, long: number, capital: string): void {
    this.router.navigate(['./weather'], {
      queryParams: {lat, long, cap: capital}
    })
    
  }

}
