import { Component, OnInit } from '@angular/core';

import { FetchFlightDataService } from '../fetch-flight-data/fetch-flight-data.service';
import { SearchResult, Data } from './searchResult';

@Component({
	selector: 'app-search-result-screen',
	templateUrl: './search-result-screen.component.html',
	styleUrls: ['./search-result-screen.component.css'],
})
export class SearchResultScreenComponent implements OnInit {
	searchResult: SearchResult = {} as SearchResult;
	searchData: Data = {} as Data;
	constructor(private fetchFlightDataService: FetchFlightDataService) {}

	ngOnInit(): void {
		this.searchResult = this.fetchFlightDataService.data;
		this.searchData = this.searchResult.data[0];
	}
}
