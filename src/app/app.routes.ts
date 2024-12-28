import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AppSettingsComponent } from './app-settings/app-settings.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'header',
    component: HeaderComponent,
  },
  {
    path: 'settings/users', 
    component: AppSettingsComponent,
  }

];
