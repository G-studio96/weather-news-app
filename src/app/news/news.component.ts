import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { NewsapiService } from '../services/newsapi.service';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {

  news: any[] = [];
  cca2: string = '';

  constructor(private route: ActivatedRoute, private newsApi: NewsapiService) { }

  ngOnInit() {

    this.route.queryParams.subscribe((params) => {
      this.cca2 = params['cca2']
      if (this.cca2 != null) {
        this.newsApi.searchLatestNews(environment.newsAPI_KEY, this.cca2).pipe(
          map((countryNews) =>
            countryNews.map((news) => ({
              title: news.results.title,
              description: news.description,
              image: news.image_url
            }))
          )
        ).subscribe((newsArticles) => {
          this.news = newsArticles;
          console.log("News load", this.news)
        },
          (error) => {
            console.log('Error in fetching news:', error); 
          })
      }

    })
  }
}
