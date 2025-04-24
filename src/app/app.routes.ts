import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full',
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.page').then( m => m.AboutPage)
  },
  {
    path: 'events',
    loadComponent: () => import('./events/events.page').then( m => m.EventsPage)
  },
  {
    path: 'photos',
    loadComponent: () => import('./photos/photos.page').then( m => m.PhotosPage)
  },
];
