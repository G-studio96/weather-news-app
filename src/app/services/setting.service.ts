import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

export enum UnitSystem {
  METRIC = 'Metric',
  IMPERIAL = 'Imperial',
  STANDARD = 'Standard',
}

@Injectable({
  providedIn: 'root',
})
export class SettingService {
  private unitSystem: UnitSystem = UnitSystem.METRIC;

  constructor(private storage: Storage) {
    this.storage.create();
  }

  async getSetting(key: string, defaultValue: any): Promise<any> {
    const value = await this.storage.get(key);
    return value !== null ? value : defaultValue;
  }

  async setSetting(key: string, value: any): Promise<void> {
    await this.storage.set(key, value);
  }

  async getDefaultUnitSystem(): Promise<UnitSystem> {
    const unit = await this.getSetting('unit', UnitSystem.METRIC);
    return unit as UnitSystem;
  }

  async setDefaultUnitSystem(unit: UnitSystem): Promise<void> {
    await this.setSetting('unit', unit);
    this.unitSystem = unit;
  }

  convertTemperature(value: number): number {
    if (this.unitSystem === UnitSystem.IMPERIAL) {
      return (value * 9) / 5 + 32;
    } else if (this.unitSystem === UnitSystem.METRIC) {
      return (value - 32) * (5 / 9);
    }
    return value; 
  }

}