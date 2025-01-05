import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { NewsapiService } from '../services/newsapi.service';
import { WeatherapiService } from '../services/weatherapi.service';
import { addIcons } from 'ionicons';
import { cloudyOutline, homeOutline, newspaperOutline } from 'ionicons/icons';
import { IonContent, IonHeader, IonIcon, IonLabel, IonRouterLink, IonTab, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/angular/standalone';



@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  imports: [IonTabs, IonTab, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonTabBar, IonTabButton, IonTabBar, IonLabel, ]
})
export class TabComponent implements OnInit {
  
  fields: string[] = ["Home", "News", "Weather"]; 


  constructor(private route: Router, private newsApi: NewsapiService, private weatherApi: WeatherapiService) { 

    
    addIcons({
      "home-outline": homeOutline, 
      "newspaper-outline": newspaperOutline, 
      "cloudy-outline": cloudyOutline
    })
  }

  ngOnInit() { }

  


}
