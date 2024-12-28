import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AppSettingsComponent } from './app-settings/app-settings.component';
import { NgModule } from '@angular/core';
import { GridComponent } from './grid/grid.component';
import { CountriesComponent } from './countries/countries.component';
import { NewsComponent } from './news/news.component';

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
    path: 'grid', 
    component: GridComponent, 
  }, 
  {
    path: 'countries', 
    component: CountriesComponent,
  }, 
  {
    path: 'news', 
    component: NewsComponent,
  }
];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
    
export class AppRoutingModule {}

