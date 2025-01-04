import { Component, OnInit } from '@angular/core';
import { UnitSystem } from '../services/setting.service';
import { ActivatedRoute } from '@angular/router';
import { WeatherapiService } from '../services/weatherapi.service';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

interface Weather {
  id: number; 
  main: string; 
  description: string, 
  icon: string; 
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  
  weather: Weather[] = []; 
  lat: number = 0; 
  long: number = 0;
  capital: string = ''; 

  constructor(private route: ActivatedRoute, private weatherApi: WeatherapiService) { }

  ngOnInit() {

    this.route.queryParams.subscribe((params) => {
      this.lat = params['lat'];
      this.long = params['long'];
      this.capital = params['capital'];

    }); 

    if (this.lat && this.long) {
      this.weatherApi.getlocationWeather(this.lat, this.long, UnitSystem.METRIC, environment.weatherApiKey)
        .pipe(map((location: any) => ({
          location: location.list.id,
          name: location.list.capital,
          main: location.list.main.temp,
          description: location.list.weather.description,
          icon: location.list.weather.icon,
        }))
        ).subscribe((locWeather: any) => {
          this.weather = locWeather;
          console.log('Weather is loaded', this.weather);
        }, 
          (error) => {
            console.log('Error fetching weather', error)
          });
   
      }

    }

  }


