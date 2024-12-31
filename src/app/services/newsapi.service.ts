import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {
  
  private apiUrl = 'https://newsdata.io/'

  constructor(private http: HttpClient) { }

  searchLatestNews(key: string, code: string): Observable<any[]> {

    return this.http.get<any[]>(`${this.apiUrl}/api/1/lastest?apikey=${environment.newsAPI_KEY}/&country=${code}`);
  } 
}