import { Component, OnInit } from '@angular/core';
import { RestcountriesService } from '../services/restcountries.service';
import { map } from 'rxjs';
import { IonAvatar, IonButton, IonContent, IonItem, IonLabel, IonList } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
  imports: [IonLabel, IonAvatar, IonItem,IonList, IonContent, CommonModule, IonButton]
})
export class CountriesComponent implements OnInit {
  
  countries: any[] = [];
  newsButton: string = 'News';
  weatherButton: string = 'Weather';

  constructor(private restcountriesService: RestcountriesService, private router: Router) { }

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

  pushNews(): void {
    this.router.navigate(['./news'])
  }

  pushWeather(): void {
    this.router.navigate(['./weather'])
  }

}
