import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonIcon, IonSearchbar, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { settingsOutline } from 'ionicons/icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonIcon, IonSearchbar, IonButton]
})
export class HeaderComponent implements OnInit {

  
  studentNumber: string = "G00438815";

  search(event: any):void { 

  }
  openSettings(): void {
    
  }

  constructor() {
    addIcons({ 'settings-outline': settingsOutline });
   }

  ngOnInit() {}

}
