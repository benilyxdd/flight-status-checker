import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { auth } from './response';

@Injectable({
	providedIn: 'root',
})
export class FetchFlightDataService {
	data: any = null;
	constructor(private http: HttpClient) {}

	async fetchFlightData(IATA: string): Promise<any> {
		// this.data = res;
	}
}
