// https://developer.flightstats.com/api-docs/flightstatus/v2/flightstatusresponse

// date format: yyyy-mm-dd'T'hh:mm:ss:SSS

interface Time {
	dateUtc: string;
	dateLocal: string;
}
interface Request {
	airline: {
		airline: {
			fs: string;
			iata: string; // usually use this
			icao: string;
			name: string;
			active: boolean;
		};
		requestedCode: string; // same as IATA in this program
	};
	flight: {
		requested: string; // flight number after IATA
		interpreted: string; // same as above
	};
	utc: {
		interpreted: boolean; // false?
	};
	url: string; // the url the program is requesting without app id and secret
	nonstopOnly: {
		interpreted: boolean;
	};
	date: {
		year: string;
		month: string;
		day: string;
		interpreted: string; // combine string (eg. 2021-09-01)
	};
	extendedOptions: {
		requested: string;
		interpreted: string;
	};
}

interface Airport {
	fs: string;
	iata: string;
	icao: string;
	faa: string;
	name: string; // airport full name (eg. Hong Kong International Airport)
	street1?: string;
	street2?: string;
	city: string; // full city name of the airport located (eg. Hong Kong)
	cityCode: string;
	stateCode?: string;
	postalCode?: string;
	countryCode: string; // ISO codes (eg. HK)
	countryName: string; // country full name (eg. Hong Kong SAR)
	regionName: string; // Asia / Africa / NA / ...
	timeZoneRegionName: string; // `${region}/${countryName}` (eg. Asia/Hong_Kong)
	weatherZone: string;
	localTime: string; // local time (eg. 2021-08-25T23:24:00.092)
	utcOffsetHours: number; // UTC+? (eg. 8)
	latitude: number;
	longitude: number;
	elevationFeet: number; // distance above sea level in feet
	classification: number;
	active: boolean; // weather the airport is operating
	weatherUrl: string; // an api link to fetch local weather
	delayIndexUrl: string; // an api link to fetch delay index
}

interface Flight {
	flightId: number; // idk
	arrivalAirport: Airport;
}

export interface FlightStatuses {
	flightId: number; // idk
	carrier: {
		fs: string;
		iata: string;
		icao: string;
		name: string;
		active: boolean;
	};
	flightNumber: string; // numbers in the IATA code
	departureAirport: Airport;
	arrivalAirport: Airport;
	departureDate: Time;
	arrivalDate: Time;
	status: string; // S, A
	schedule: {
		flightType: string;
		serviceClasses: string;
		restrictions: string;
		uplines: Array<Flight> | []; // change later
		downlines: Array<Flight> | []; // change later
	};
	operationalTimes: {
		publishedDeparture: Time;
		publishedArrival: Time;
		scheduledGateDeparture: Time;
		scheduledRunwayDeparture?: Time;
		estimatedGateDeparture?: Time;
		actualGateDeparture?: Time;
		flightPlanPlannedDeparture?: Time;
		estimatedRunwayDeparture?: Time;
		actualRunwayDeparture?: Time;
		scheduledRunwayArrival?: Time;
		scheduledGateArrival: Time;
		estimatedGateArrival?: Time;
		actualGateArrival: Time;
		flightPlanPlannedArrival?: Time;
		estimatedRunwayArrival?: Time;
		actualRunwayArrival: Time;
	};
	codeshares:
		| Array<{
				carrier: {
					fs: string;
					iata: string;
					icao: string;
					name: string;
					active: boolean;
				};
				flightNumber: string;
				relationship: string;
		  }>
		| [];
	// need to add something
	delays: {
		departureGateDelayMinutes?: number;
		departureRunwayDelayMinutes?: number;
		arrivalGateDelayMinutes?: number;
		arrivalRunwayDelayMinutes?: number;
	};
	flightDurations: {
		scheduledBlockMinutes: number;
		scheduledAirMinutes?: number;
		scheduledTaxiOutMinutes?: number;
		scheduledTaxiInMinutes?: number;
		blockMinutes?: number;
		airMinutes?: number;
		taxiInMinutes?: number;
		taxiOutMinutes?: number;
	};
	airportResources: {
		departureTerminal?: string;
		departureGate?: string;
		arrivalTerminal?: string; // number string or "INTL"
		arrivalGate?: string;
		baggage?: string;
	};
	flightEquipment: {
		scheduledEquipment: {
			iata: string;
			name: string;
			turboProp: boolean;
			jet: boolean;
			widebody: boolean;
			regional: boolean;
		};
		actualEquipment?: {
			iata: string;
			name: string;
			turboProp: boolean;
			jet: boolean;
			widebody: boolean;
			regional: boolean;
		};
		tailnumber?: string;
	};
}

export interface SearchResult {
	request: Request;
	flightStatuses: Array<FlightStatuses> | [];
}

export const FlightStatusDescription: { [string: string]: string } = {
	A: 'Active',
	C: 'Canceled',
	D: 'Diverted',
	DN: 'Data source needed',
	L: 'Landed',
	NO: 'Not Operational',
	R: 'Redirected',
	S: 'Scheduled',
	U: 'Unknown',
};
