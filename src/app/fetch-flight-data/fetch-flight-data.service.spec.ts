import { TestBed } from '@angular/core/testing';

import { FetchFlightDataService } from './fetch-flight-data.service';
import { HttpClientModule } from '@angular/common/http';

describe('FetchFlightDataService', () => {
	let service: FetchFlightDataService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientModule],
		});
	});

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(FetchFlightDataService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
