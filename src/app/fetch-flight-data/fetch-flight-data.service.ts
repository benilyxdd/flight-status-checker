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

	async fetchFlightData(IATA: string): Promise<any> {
		const url = `http://api.aviationstack.com/v1/flights?access_key=${api_key}&flight_iata=${IATA}`;
		const res = await this.http.get(url).toPromise();
		this.data = res;
	}
}
