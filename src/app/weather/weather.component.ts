import { Component, OnInit } from '@angular/core';
import { UnitSystem } from '../services/setting.service';
import { ActivatedRoute } from '@angular/router';
import { WeatherapiService } from '../services/weatherapi.service';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';
import { IonContent, IonHeader, IonTitle, IonItem, IonAvatar, IonToolbar, IonList, IonLabel } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

interface Weather {
  id: number; 
  main: {
    temp: number
  }; 
  description: string, 
  icon: string; 
  
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  imports: [IonHeader, IonTitle, IonContent, IonItem, IonAvatar, IonToolbar, CommonModule, IonList, IonLabel] 
})
export class WeatherComponent implements OnInit {
  
  weather: Weather[] = []; 
  lat: number = 0; 
  long: number = 0;
  capital: string = ''; 

  constructor(private route: ActivatedRoute, private weatherApi: WeatherapiService) { }

  ngOnInit() {

    this.route.queryParams.subscribe((params) => {
      this.lat = +params['lat'];
      this.long = +params['long'];
      this.capital = params['capital'];

    }); 

    if (this.lat && this.long) {
      this.weatherApi.getlocationWeather(this.lat, this.long, UnitSystem.METRIC, environment.weatherApiKey).pipe(
        map((weather: any) => [{
          id: weather.id,
          main: { temp: weather.main.temp },
          description: weather.weather[0].description,
          icon: weather.weather[0].icon,
        }])
      ).subscribe(
        (locWeather: any) => {
          this.weather = locWeather;
          console.log('Weather is loaded', this.weather);
        },
        (error) => {
          console.log('Error fetching weather', error);
        });
   
      }

    }

  }


