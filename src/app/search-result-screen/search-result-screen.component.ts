import { Component, OnInit } from '@angular/core';

import { FetchFlightDataService } from '../fetch-flight-data/fetch-flight-data.service';

@Component({
	selector: 'app-search-result-screen',
	templateUrl: './search-result-screen.component.html',
	styleUrls: ['./search-result-screen.component.css'],
})
export class SearchResultScreenComponent implements OnInit {
	searchData: object = {};
	constructor(private fetchFlightDataService: FetchFlightDataService) {}

	ngOnInit(): void {
		this.searchData = this.fetchFlightDataService.data;
	}
}
