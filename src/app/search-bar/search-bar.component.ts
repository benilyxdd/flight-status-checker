import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
		private fetchFlightDataService: FetchFlightDataService,
		private route: Router
	) {
		this.flightCodeInput = this.formBuilder.group({
			IATA: formBuilder.control(''),
		});
	}

	ngOnInit(): void {}

	async onFormSubmit(): Promise<void> {
		const res = await this.fetchFlightDataService.fetchFlightData(
			this.flightCodeInput.value.IATA
		);
		this.route.navigate(['/result']);
	}
}
