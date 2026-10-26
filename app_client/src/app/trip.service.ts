import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Trip {
    _id: string;
    code: string;
    name: string;
    length: string;
    start: string;
    resort: string;
    perPerson: number;
    image: string;
    description: string;
}

@Injectable({
    providedIn: 'root'
})
export class TripService {

    private apiUrl = 'http://localhost:3000/api/trips';

    constructor(private http: HttpClient) { }

    getTrips(): Observable<Trip[]> {
        return this.http.get < Trip[] > (this.apiUrl);
    }

    getTripById(id: string): Observable<Trip> {
        return this.http.get < Trip > (`${this.apiUrl}/${id}`);
    }
}

