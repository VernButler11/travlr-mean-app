import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Trip {
  _id?: string;
  code: string;
  name: string;
  start: string;
  resort: string;
  perPerson: number;
  image: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  private apiBaseUrl = 'http://localhost:3000/api/trips';

  constructor(private http: HttpClient) {}

  // GET all
  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.apiBaseUrl);
  }

  // GET one
  getTrip(code: string): Observable<Trip> {
    return this.http.get<Trip>(`${this.apiBaseUrl}/${code}`);
  }

  // POST
  addTrip(trip: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.apiBaseUrl, trip);
  }

  // PUT
  updateTrip(code: string, trip: Trip): Observable<Trip> {
    return this.http.put<Trip>(`${this.apiBaseUrl}/${code}`, trip);
  }

  // DELETE
  deleteTrip(code: string): Observable<any> {
    return this.http.delete(`${this.apiBaseUrl}/${code}`);
  }
}
