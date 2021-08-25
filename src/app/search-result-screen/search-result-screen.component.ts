import { Component, OnInit } from '@angular/core';

import { FetchFlightDataService } from '../fetch-flight-data/fetch-flight-data.service';
import { SearchResult, FlightStatuses, FlightStatusDescription } from './searchResult';

@Component({
	selector: 'app-search-result-screen',
	templateUrl: './search-result-screen.component.html',
	styleUrls: ['./search-result-screen.component.css'],
})
export class SearchResultScreenComponent implements OnInit {
	// whole data
	searchResult: SearchResult = {} as SearchResult;
	searchData: FlightStatuses = {} as FlightStatuses;
	fetched: boolean = false;

	// seperated data
	totalDelay: number = 0;
	status: string = "";
	constructor(private fetchFlightDataService: FetchFlightDataService) {}

	ngOnInit(): void {
		this.searchResult = this.fetchFlightDataService.data;
		if (this.searchResult) {
			// assign whole data
			this.searchData = this.searchResult.flightStatuses[0];
			this.fetched = true;

			// calculate separte data

			// delays
			if (this.searchData.delays.arrivalGateDelayMinutes) {
				this.totalDelay +=
					this.searchData.delays.arrivalGateDelayMinutes;
			}
			if (this.searchData.delays.arrivalRunwayDelayMinutes) {
				this.totalDelay +=
					this.searchData.delays.arrivalRunwayDelayMinutes;
			}
			if (this.searchData.delays.departureGateDelayMinutes) {
				this.totalDelay +=
					this.searchData.delays.departureGateDelayMinutes;
			}
			if (this.searchData.delays.departureRunwayDelayMinutes) {
				this.totalDelay +=
					this.searchData.delays.departureRunwayDelayMinutes;
			}

			// status
			this.status = FlightStatusDescription[this.searchData.status];
		}
	}
}
