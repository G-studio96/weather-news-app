import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherapiService {

  private apiUrl = "https://api.openweathermap.org/data/3.0/onecall"; 

  constructor(private http: HttpClient) { }

  getlocationWeather(lat: number, lon: number, part: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?lat=${lat}&lon=${lon}&exclude=${part}&appid=${environment.weatherApiKey}`)
}
