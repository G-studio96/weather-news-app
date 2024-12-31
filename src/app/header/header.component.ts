import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonIcon, IonSearchbar, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { settingsOutline } from 'ionicons/icons'
import { Router } from '@angular/router';
import { RestcountriesService } from '../services/restcountries.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonIcon, IonSearchbar, IonButton, FormsModule]
})
export class HeaderComponent implements OnInit {
  
  studentNumber: string = "G00438815";
  usersSearch: string = '';

  constructor(private router: Router, private countriesService: RestcountriesService) {
    addIcons({ 'settings-outline': settingsOutline });
   }

   search(event: any): void {
    const searchText = event.target.value;
  
    if (searchText && searchText.trim() !== '') {
      this.countriesService.searchCountries(searchText).subscribe(
        (countries) => {
          this.usersSearch = searchText;
          this.router.navigate(['/countries'], {
            queryParams: { search: searchText },
          });
        },
        (error) => console.log('Error during search:', error)
      );
    }
  }


  openSettings(): void {
    this.router.navigate(['/settings']);
    
  }


  ngOnInit() { 
  }

}
