import { Routes } from '@angular/router';
import { TripListComponent } from './trip-list/trip-list';
import { EditTripComponent } from './edit-trip/edit-trip';

export const routes: Routes = [
  { path: '', component: TripListComponent },
  { path: 'edit/:id', component: EditTripComponent }
];
