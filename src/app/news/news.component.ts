import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { NewsapiService } from '../services/newsapi.service';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonThumbnail, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

interface News {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonList, CommonModule, IonLabel,IonThumbnail]

})
export class NewsComponent implements OnInit {

  news: News[] = [];
  cca2: string = '';
  countryName: string = '';

  constructor(private route: ActivatedRoute, private newsApi: NewsapiService) { }

  ngOnInit() {
   
    this.route.queryParams.subscribe((params) => {
      this.cca2 = params['code'];
      this.countryName = params['name'];
    });

    if (this.cca2) {
      this.newsApi.searchLatestNews(environment.newsAPI_KEY, this.cca2).pipe(map((news: any) =>
        news.results.map((article: any) => ({
          title: article.title,
          description: article.description,
          image: article.image_url
        }))
      )
      ).subscribe((newsArticles) => {
        this.news = newsArticles;
        console.log('News loaded', this.news)
      },
        (error) => {
          console.log('Error fetching news:', error)
        });

      }
  
  }

  
}
