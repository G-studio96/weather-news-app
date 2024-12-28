import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private storage: Storage) {
    this.storage.create(); 
  }
  
  async getSetting(key: string): Promise<any> {
    return await this.storage.get(key); 
  }

  async setSetting(key: string, value: any): Promise<any> {
    await this.storage.set(key, value)
  }
}
