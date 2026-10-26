import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TripDataService, Trip } from '../services/trip-data';

@Component({
  selector: 'app-trip-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './trip-edit.html',
  styleUrls: ['./trip-edit.css']
})
export class TripEdit implements OnInit {

  trip: Trip = {
    code: '',
    name: '',
    start: '',
    resort: '',
    perPerson: 0,
    image: '',
    description: ''
  };

  originalCode: string | null = null;
  message = '';

  constructor(
    private tripService: TripDataService,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  get isEdit(): boolean {
    return this.originalCode !== null;
  }

  ngOnInit(): void {
    this.originalCode = this.route.snapshot.paramMap.get('code');

    if (this.originalCode) {
      this.tripService.getTrip(this.originalCode).subscribe({
        next: (t) => {
          this.trip = { ...t, start: t.start ? t.start.substring(0, 10) : '' };
          this.cdr.markForCheck();
        },
        error: (err) => {
          console.error('Load failed', err);
          this.message = 'Could not load trip.';
          this.cdr.markForCheck();
        }
      });
    }
  }

  onSubmit(): void {
    const request = this.isEdit
      ? this.tripService.updateTrip(this.originalCode!, this.trip)
      : this.tripService.addTrip(this.trip);

    request.subscribe({
      next: () => this.router.navigate(['/trips']),
      error: (err) => {
        console.error('Save failed', err);
        this.message = 'Save failed. Check the console.';
        this.cdr.markForCheck();
      }
    });
  }
}
