import { Component, OnInit } from '@angular/core';
import { SettingService } from '../services/setting.service';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { BrowserModule } from '@angular/platform-browser';



@Component({
  selector: 'app-app-settings',
  templateUrl: './app-settings.component.html',
  styleUrls: ['./app-settings.component.scss'],
  imports: [IonicModule, IonicStorageModule, BrowserModule] 
})
export class AppSettingsComponent implements OnInit {
  defaultUnit: string = 'Metric';
  title: string = 'Setting';
  options: string[] = ["Standard", "Imperial"];

  constructor(private settingsService: SettingService) { }

  ngOnInit() {
    try {
      this.settingsService.getSetting('unit').then(userSavedUnit => {
        if (userSavedUnit) {
          this.defaultUnit = userSavedUnit;
        }
      });
    } catch (error) {
      console.error('Error fetching user settings:', error);
       this.defaultUnit ="Metric"
    }
  }

  async savedUnit(unit: string) {
    try {
      this.defaultUnit = unit;
      await this.settingsService.setSetting('unit', unit);
    } catch (error) {
      console.log('Error fetching saved settings:', error)
    }
  }
}
