import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { app_key } from '../../environments/env';

@Injectable({
	providedIn: 'root',
})
export class FetchFlightDataService {
	data: any = null;
	constructor(private http: HttpClient) {}

	async fetchFlightData(IATA: string): Promise<any> {
		// prepare data to fetch
		const [carrierCode, flightNumber] = IATA.split(' ');
		const currentDate = new Date().toISOString().slice(0, 10);
		const currentYear = currentDate.slice(0, 4);
		const currentMonth = currentDate.slice(5, 7);
		const currentDay = currentDate.slice(8, 10);
		const dataUrl = `https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status/${carrierCode}/${flightNumber}/dep/${currentYear}/${currentMonth}/${currentDay}?appId=59740609&appKey=${app_key}&extendedOptions=useInlinedReferences`;

		const res = await this.http.get(dataUrl).toPromise();
		this.data = res;
	}
}
