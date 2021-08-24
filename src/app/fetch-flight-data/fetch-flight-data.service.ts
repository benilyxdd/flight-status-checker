import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { client_id, client_secret } from '../../environments/env';

import { auth } from './response';

@Injectable({
	providedIn: 'root',
})
export class FetchFlightDataService {
	data: any = null;
	constructor(private http: HttpClient) {}

	async fetchFlightData(IATA: string): Promise<any> {
		// get token
		const auth_headers = {
			headers: new HttpHeaders({
				'Content-Type': 'application/x-www-form-urlencoded',
			}),
		};
		const auth_body = new HttpParams()
			.set('grant_type', 'client_credentials')
			.set('client_id', client_id)
			.set('client_secret', client_secret);
		const auth_url =
			'https://test.api.amadeus.com/v1/security/oauth2/token';

		const auth_res: auth = await this.http
			.post<auth>(auth_url, auth_body, auth_headers)
			.toPromise();
		const token = auth_res['access_token'];

		// access the data
		const carrierCodeArray = IATA.match(/[A-Z]+/g);
		const carrierCode = carrierCodeArray
			? carrierCodeArray[0]
			: 'IMPOSSIBLE';
		const flightNumberArray = IATA.match(/[0-9]+/g);
		const flightNumber = flightNumberArray
			? flightNumberArray[0]
			: 'IMPOSSIBLE';
		const currentDate = new Date().toISOString().slice(0, 10);
		const data_headers = {
			headers: new HttpHeaders({
				Authorization: `Bearer ${token}`,
			}),
		};

		const data_url = `https://test.api.amadeus.com/v2/schedule/flights?carrierCode=${carrierCode}&flightNumber=${flightNumber}&scheduledDepartureDate=${currentDate}`;
		const res = await this.http.get(data_url, data_headers).toPromise();
		// this.data = res;
	}
}
