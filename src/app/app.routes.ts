import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AppSettingsComponent } from './app-settings/app-settings.component';
import { NgModule } from '@angular/core';

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
];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
    
export class AppRoutingModule {}

