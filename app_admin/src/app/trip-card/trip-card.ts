import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Trip } from '../services/trip-data';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './trip-card.html',
  styleUrls: ['./trip-card.css']
})
export class TripCard {
  @Input() trip!: Trip;
  @Output() deleted = new EventEmitter<string>();

  private imageBase = 'http://localhost:3000/images/';
  private fallbackImage = 'reef1.jpg';
  private useFallback = false;

  get imageUrl(): string {
    const file = this.useFallback || !this.trip?.image
      ? this.fallbackImage
      : this.trip.image;
    return this.imageBase + file;
  }

  onImageError(): void {
    this.useFallback = true;
  }

  onDelete(): void {
    if (confirm(`Delete ${this.trip.name}?`)) {
      this.deleted.emit(this.trip.code);
    }
  }
}
