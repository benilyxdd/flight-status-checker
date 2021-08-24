import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { api_key } from '../../environments/env';

@Injectable({
	providedIn: 'root',
})
export class FetchFlightDataService {
	data: any = null;
	constructor(private http: HttpClient) {}

	fetchFlightData(IATA: string): any {
		const url = `http://api.aviationstack.com/v1/flights?access_key=${api_key}&flight_iata=${IATA}`;
		const res = this.http.get(url);
		this.data = res;
		return res;
	}
}
