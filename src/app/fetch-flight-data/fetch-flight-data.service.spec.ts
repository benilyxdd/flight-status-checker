import { TestBed } from '@angular/core/testing';

import { FetchFlightDataService } from './fetch-flight-data.service';

describe('FetchFlightDataService', () => {
	let service: FetchFlightDataService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(FetchFlightDataService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
