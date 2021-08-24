import { TestBed } from '@angular/core/testing';

import { FetchFlightDataService } from './fetch-flight-data.service';
import {
	HttpClientTestingModule,
	HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

describe('FetchFlightDataService', () => {
	let service: FetchFlightDataService;
	let httpClient: HttpClient;
	let httpTestingController: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
		});

		// Inject the http service and test controller for each test
		httpClient = TestBed.inject(HttpClient);
		httpTestingController = TestBed.inject(HttpTestingController);
	});

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(FetchFlightDataService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
