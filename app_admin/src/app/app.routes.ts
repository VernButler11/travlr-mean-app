import { Routes } from '@angular/router';
import { Trips } from './trips/trips';
import { TripEdit } from './trip-edit/trip-edit';

export const routes: Routes = [
  { path: 'trips', component: Trips },
  { path: 'trips/add', component: TripEdit },
  { path: 'trips/:code/edit', component: TripEdit },
  { path: '', redirectTo: 'trips', pathMatch: 'full' }
];
