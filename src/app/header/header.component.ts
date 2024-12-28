import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonIcon, IonSearchbar, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { settingsOutline } from 'ionicons/icons'

import { Router } from '@angular/router';
import { RestcountriesService } from '../services/restcountries.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonIcon, IonSearchbar, IonButton]
})
export class HeaderComponent implements OnInit {
  
  studentNumber: string = "G00438815";
  usersSearch: string[] = [];

  constructor(private router: Router, private countriesService: RestcountriesService) {
    addIcons({ 'settings-outline': settingsOutline });
   }

  search(event: any): void {
    const searchText = event.target.value.toLowerCase();
    this.countriesService.searchCountries(searchText).subscribe(
      (countries) => {
        this.usersSearch = countries.map((country: any) => country.name)
      },
      (error) => console.log('Error during search:', error)
    );
  
    

  }


  openSettings(): void {
    this.router.navigate(['/settings']);
    
  }


  ngOnInit() { 
  }

}
