import { Component, OnInit } from '@angular/core';

import { FetchFlightDataService } from '../fetch-flight-data/fetch-flight-data.service';
import {
	SearchResult,
	FlightStatuses,
	FlightStatusDescription,
} from './searchResult';

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
	status: string = '';
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
				this.totalDelay += parseInt(
					this.searchData.delays.arrivalGateDelayMinutes
				);
			}
			if (this.searchData.delays.arrivalRunwayDelayMinutes) {
				this.totalDelay += parseInt(
					this.searchData.delays.arrivalRunwayDelayMinutes
				);
			}
			if (this.searchData.delays.departureGateDelayMinutes) {
				this.totalDelay += parseInt(
					this.searchData.delays.departureGateDelayMinutes
				);
			}
			if (this.searchData.delays.departureRunwayDelayMinutes) {
				this.totalDelay += parseInt(
					this.searchData.delays.departureRunwayDelayMinutes
				);
			}

			// status
			this.status = FlightStatusDescription[this.searchData.status];

			// time
			this.searchData.departureDate.dateLocal = this.parseTime(
				this.searchData.departureDate.dateLocal
			);
			this.searchData.arrivalDate.dateLocal = this.parseTime(
				this.searchData.arrivalDate.dateLocal
			);

			if (
				this.searchData.operationalTimes.publishedDeparture !==
				undefined
			) {
				this.searchData.operationalTimes.publishedDeparture.dateLocal =
					this.parseTime(
						this.searchData.operationalTimes.publishedDeparture
							.dateLocal
					);
			}

			if (
				this.searchData.operationalTimes.publishedArrival !== undefined
			) {
				this.searchData.operationalTimes.publishedArrival.dateLocal =
					this.parseTime(
						this.searchData.operationalTimes.publishedArrival
							.dateLocal
					);
			}

			if (
				this.searchData.operationalTimes.scheduledGateDeparture !==
				undefined
			) {
				this.searchData.operationalTimes.scheduledGateDeparture.dateLocal =
					this.parseTime(
						this.searchData.operationalTimes.scheduledGateDeparture
							.dateLocal
					);
			}

			if (
				this.searchData.operationalTimes.scheduledRunwayDeparture !==
				undefined
			) {
				this.searchData.operationalTimes.scheduledRunwayDeparture.dateLocal =
					this.parseTime(
						this.searchData.operationalTimes
							.scheduledRunwayDeparture.dateLocal
					);
			}

			if (
				this.searchData.operationalTimes.estimatedGateDeparture !==
				undefined
			) {
				this.searchData.operationalTimes.estimatedGateDeparture.dateLocal =
					this.parseTime(
						this.searchData.operationalTimes.estimatedGateDeparture
							.dateLocal
					);
			}

			if (
				this.searchData.operationalTimes.actualGateDeparture !==
				undefined
			) {
				this.searchData.operationalTimes.actualGateDeparture.dateLocal =
					this.parseTime(
						this.searchData.operationalTimes.actualGateDeparture
							.dateLocal
					);
			}

			if (
				this.searchData.operationalTimes.flightPlanPlannedDeparture !==
				undefined
			) {
				this.searchData.operationalTimes.flightPlanPlannedDeparture.dateLocal =
					this.parseTime(
						this.searchData.operationalTimes
							.flightPlanPlannedDeparture.dateLocal
					);
			}

			if (
				this.searchData.operationalTimes.estimatedRunwayDeparture !==
				undefined
			) {
				this.searchData.operationalTimes.estimatedRunwayDeparture.dateLocal =
					this.parseTime(
						this.searchData.operationalTimes
							.estimatedRunwayDeparture.dateLocal
					);
			}

			if (
				this.searchData.operationalTimes.actualRunwayDeparture !==
				undefined
			) {
				this.searchData.operationalTimes.actualRunwayDeparture.dateLocal =
					this.parseTime(
						this.searchData.operationalTimes.actualRunwayDeparture
							.dateLocal
					);
			}

			if (
				this.searchData.operationalTimes.scheduledRunwayArrival !==
				undefined
			) {
				this.searchData.operationalTimes.scheduledRunwayArrival.dateLocal =
					this.parseTime(
						this.searchData.operationalTimes.scheduledRunwayArrival
							.dateLocal
					);
			}

			if (
				this.searchData.operationalTimes.scheduledGateArrival !==
				undefined
			) {
				this.searchData.operationalTimes.scheduledGateArrival.dateLocal =
					this.parseTime(
						this.searchData.operationalTimes.scheduledGateArrival
							.dateLocal
					);
			}

			if (
				this.searchData.operationalTimes.estimatedGateArrival !==
				undefined
			) {
				this.searchData.operationalTimes.estimatedGateArrival.dateLocal =
					this.parseTime(
						this.searchData.operationalTimes.estimatedGateArrival
							.dateLocal
					);
			}

			if (
				this.searchData.operationalTimes.actualGateArrival !== undefined
			) {
				this.searchData.operationalTimes.actualGateArrival.dateLocal =
					this.parseTime(
						this.searchData.operationalTimes.actualGateArrival
							.dateLocal
					);
			}

			if (
				this.searchData.operationalTimes.flightPlanPlannedArrival !==
				undefined
			) {
				this.searchData.operationalTimes.flightPlanPlannedArrival.dateLocal =
					this.parseTime(
						this.searchData.operationalTimes
							.flightPlanPlannedArrival.dateLocal
					);
			}

			if (
				this.searchData.operationalTimes.estimatedRunwayArrival !==
				undefined
			) {
				this.searchData.operationalTimes.estimatedRunwayArrival.dateLocal =
					this.parseTime(
						this.searchData.operationalTimes.estimatedRunwayArrival
							.dateLocal
					);
			}

			if (
				this.searchData.operationalTimes.actualRunwayArrival !==
				undefined
			) {
				this.searchData.operationalTimes.actualRunwayArrival.dateLocal =
					this.parseTime(
						this.searchData.operationalTimes.actualRunwayArrival
							.dateLocal
					);
			}

			// duration
			if (
				this.searchData.flightDurations.scheduledBlockMinutes !==
				undefined
			) {
				this.searchData.flightDurations.scheduledBlockMinutes =
					this.parseDuration(
						this.searchData.flightDurations.scheduledBlockMinutes
					);
			}
			if (
				this.searchData.flightDurations.scheduledAirMinutes !==
				undefined
			) {
				this.searchData.flightDurations.scheduledAirMinutes =
					this.parseDuration(
						this.searchData.flightDurations.scheduledAirMinutes
					);
			}
			if (
				this.searchData.flightDurations.scheduledTaxiOutMinutes !==
				undefined
			) {
				this.searchData.flightDurations.scheduledTaxiOutMinutes =
					this.parseDuration(
						this.searchData.flightDurations.scheduledTaxiOutMinutes
					);
			}
			if (
				this.searchData.flightDurations.scheduledTaxiInMinutes !==
				undefined
			) {
				this.searchData.flightDurations.scheduledTaxiInMinutes =
					this.parseDuration(
						this.searchData.flightDurations.scheduledTaxiInMinutes
					);
			}
			if (this.searchData.flightDurations.blockMinutes !== undefined) {
				this.searchData.flightDurations.blockMinutes =
					this.parseDuration(
						this.searchData.flightDurations.blockMinutes
					);
			}
			if (this.searchData.flightDurations.airMinutes !== undefined) {
				this.searchData.flightDurations.airMinutes = this.parseDuration(
					this.searchData.flightDurations.airMinutes
				);
			}
			if (this.searchData.flightDurations.taxiInMinutes !== undefined) {
				this.searchData.flightDurations.taxiInMinutes =
					this.parseDuration(
						this.searchData.flightDurations.taxiInMinutes
					);
			}
			if (this.searchData.flightDurations.taxiOutMinutes !== undefined) {
				this.searchData.flightDurations.taxiOutMinutes =
					this.parseDuration(
						this.searchData.flightDurations.taxiOutMinutes
					);
			}

			// delays
			if (
				this.searchData.delays.departureGateDelayMinutes !== undefined
			) {
				this.searchData.delays.departureGateDelayMinutes =
					this.parseDuration(
						this.searchData.delays.departureGateDelayMinutes
					);
			}
			if (
				this.searchData.delays.departureRunwayDelayMinutes !== undefined
			) {
				this.searchData.delays.departureRunwayDelayMinutes =
					this.parseDuration(
						this.searchData.delays.departureRunwayDelayMinutes
					);
			}
			if (this.searchData.delays.arrivalGateDelayMinutes !== undefined) {
				this.searchData.delays.arrivalGateDelayMinutes =
					this.parseDuration(
						this.searchData.delays.arrivalGateDelayMinutes
					);
			}
			if (
				this.searchData.delays.arrivalRunwayDelayMinutes !== undefined
			) {
				this.searchData.delays.arrivalRunwayDelayMinutes =
					this.parseDuration(
						this.searchData.delays.arrivalRunwayDelayMinutes
					);
			}
		}
	}

	private parseTime(time: string): string {
		return new Date(time).toLocaleString();
	}

	private parseDuration(time: string): string {
		const hours = Math.floor(parseInt(time) / 60);
		const mins = parseInt(time) - hours * 60;
		if (hours) {
			return `${hours} Hour(s) ${mins} Min(s)`;
		}
		return `${mins} Min(s)`;
	}
}
