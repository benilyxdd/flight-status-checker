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

		// const url = `http://api.aviationstack.com/v1/flights?access_key=${api_key}&flight_iata=${IATA}`;
		// const res = await this.http.get(url).toPromise();
		// this.data = res;
	}
}
