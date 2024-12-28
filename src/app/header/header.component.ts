import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonIcon, IonSearchbar, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { settingsOutline } from 'ionicons/icons'

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonIcon, IonSearchbar, IonButton]
})
export class HeaderComponent implements OnInit {
  
  studentNumber: string = "G00438815";

  constructor(private router: Router) {
    addIcons({ 'settings-outline': settingsOutline });
   }

  search(event: any):void { 

  }
  openSettings(): void {
    this.router.navigate(['/settings']);
    
  }

  

  ngOnInit() {}

}
