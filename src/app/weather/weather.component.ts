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
  latlng: number[] = [];
  capital: string = ''; 

  constructor(private route: ActivatedRoute, private weatherApi: WeatherapiService) { }

  ngOnInit() {

    this.route.queryParams.subscribe((params) => {
      this.latlng = params['loc'];
      this.capital = params['cap'];

    }); 

    if (this.latlng) {
      this.weatherApi.getlocationWeather(this.latlng[0], this.latlng[1], UnitSystem.METRIC, environment.weatherApiKey)
        .pipe(map((location: any) => ({
          location: location.id,
          main: location.main,
          description: location.description, 
          icon: location.icon
        }))
      )
    ).subscribe((locWeather) => {
        this.weather = locWeather;
      })

    }

  }

}
