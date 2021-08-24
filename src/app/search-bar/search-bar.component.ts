import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { FetchFlightDataService } from '../fetch-flight-data/fetch-flight-data.service';
@Component({
	selector: 'app-search-bar',
	templateUrl: './search-bar.component.html',
	styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
	flightCodeInput: FormGroup = new FormGroup({});

	constructor(
		private formBuilder: FormBuilder,
		private fetchFlightDataService: FetchFlightDataService
	) {
		this.flightCodeInput = this.formBuilder.group({
			IATA: formBuilder.control(''),
		});
	}

	ngOnInit(): void {}

	onFormSubmit(): void {
		// this.fetchFlightDataService.fetchFlightData(
		// 	this.flightCodeInput.value.IATA
		// );
		console.log(this.flightCodeInput.value);
	}
}
