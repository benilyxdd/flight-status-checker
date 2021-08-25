import { Component, OnInit } from '@angular/core';

import { FetchFlightDataService } from '../fetch-flight-data/fetch-flight-data.service';
import { SearchResult, FlightStatuses } from './searchResult';

@Component({
	selector: 'app-search-result-screen',
	templateUrl: './search-result-screen.component.html',
	styleUrls: ['./search-result-screen.component.css'],
})
export class SearchResultScreenComponent implements OnInit {
	searchResult: SearchResult = {} as SearchResult;
	searchData: FlightStatuses = {} as FlightStatuses;
	fetched: boolean = false;
	constructor(private fetchFlightDataService: FetchFlightDataService) {}

	ngOnInit(): void {
		this.searchResult = this.fetchFlightDataService.data;
		if (this.searchResult) {
			this.searchData = this.searchResult.flightStatuses[0];
			this.fetched = true;
		}
	}
}
