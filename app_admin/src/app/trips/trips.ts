import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TripDataService, Trip } from '../services/trip-data';
import { TripCard } from '../trip-card/trip-card';

@Component({
  selector: 'app-trips',
  standalone: true,
  imports: [CommonModule, RouterLink, TripCard],
  templateUrl: './trips.html',
  styleUrls: ['./trips.css']
})
export class Trips implements OnInit {

  trips: Trip[] = [];
  loading = true;

  constructor(
    private tripService: TripDataService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.tripService.getTrips().subscribe({
      next: (trips) => {
        this.trips = trips;
        this.loading = false;
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error('Failed to load trips', err);
        this.loading = false;
        this.cdr.markForCheck();
      }
    });
  }

  onDelete(code: string): void {
    this.tripService.deleteTrip(code).subscribe({
      next: () => {
        this.trips = this.trips.filter(t => t.code !== code);
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Delete failed', err)
    });
  }
}
