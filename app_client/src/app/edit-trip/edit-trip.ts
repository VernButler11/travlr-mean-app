import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TripData } from '../trip-data';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-trip.html'
})
export class EditTripComponent implements OnInit {

  trip: any = {};

  constructor(
    private route: ActivatedRoute,
    private tripService: TripData
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.tripService.getTripById(id!).subscribe(data => {
      this.trip = data;
    });
  }

  save(): void {
    this.tripService.updateTrip(this.trip._id, this.trip)
      .subscribe(() => alert('Trip updated!'));
  }
}
