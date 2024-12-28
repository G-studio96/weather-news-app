import { Component, OnInit } from '@angular/core';
import { SettingService } from '../services/setting.service';

@Component({
  selector: 'app-app-settings',
  templateUrl: './app-settings.component.html',
  styleUrls: ['./app-settings.component.scss'],
})
export class AppSettingsComponent implements OnInit {
  defaultUnit: string = 'Metric'
  

  constructor(private settingsService: SettingService) { }

  ngOnInit() {
    const userSavedUnit = await this.settingsService.getSetting('unit'); 
    if (userSavedUnit) { 
      this.defaultUnit = userSavedUnit;
    }
  }

  async savedUnit(unit: string) {
    this.defaultUnit = unit; 
    await this.settingsService.setSetting('unit', unit)
  }

}
