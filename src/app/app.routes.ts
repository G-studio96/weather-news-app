import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AppSettingsComponent } from './app-settings/app-settings.component';
import { NgModule } from '@angular/core';
import { CountriesComponent } from './details/countries.component';
import { NewsComponent } from './news/news.component';
import { WeatherComponent } from './weather/weather.component';
import { TabComponent } from './tab/tab.component';

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
    path: 'settings',
    component: AppSettingsComponent,
  },
  {
    path: 'countries', 
    component: CountriesComponent,
  }, 
  {
    path: 'news', 
    component: NewsComponent,
  }, 
  {
    path: 'weather', 
    component: WeatherComponent,
  }, 

  {
    path: 'tab', 
    component: TabComponent,
  }
];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
    
export class AppRoutingModule {}

