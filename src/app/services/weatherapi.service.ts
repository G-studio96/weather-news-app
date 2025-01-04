import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UnitSystem } from './setting.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherapiService {

  private apiUrl = "https://api.openweathermap.org/data/2.5/weather";

  constructor(private http: HttpClient) { }

  getlocationWeather(lat: number, lon: number, part: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?lat=${lat}&lon=${lon}&unit=${UnitSystem}}&appid=${environment.weatherApiKey}`)
  }

}