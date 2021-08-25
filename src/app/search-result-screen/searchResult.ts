// https://developer.flightstats.com/api-docs/flightstatus/v2/flightstatusresponse

// date format: yyyy-mm-dd'T'hh:mm:ss:SSS

interface Time {
	dateUtc: String;
	dateLocal: String;
}
interface Request {
	airline: {
		airline: {
			fs: String;
			iata: String; // usually use this
			icao: String;
			name: String;
			active: Boolean;
		};
		requestedCode: String; // same as IATA in this program
	};
	flight: {
		requested: String; // flight number after IATA
		interpreted: String; // same as above
	};
	utc: {
		interpreted: Boolean; // false?
	};
	url: String; // the url the program is requesting without app id and secret
	nonstopOnly: {
		interpreted: Boolean;
	};
	date: {
		year: String;
		month: String;
		day: String;
		interpreted: String; // combine string (eg. 2021-09-01)
	};
	extendedOptions: {
		requested: String;
		interpreted: String;
	};
}

interface Airport {
	fs: String;
	iata: String;
	icao: String;
	faa: String;
	name: String; // airport full name (eg. Hong Kong International Airport)
	street1?: String;
	street2?: String;
	city: String; // full city name of the airport located (eg. Hong Kong)
	cityCode: String;
	stateCode?: String;
	postalCode?: String;
	countryCode: String; // ISO codes (eg. HK)
	countryName: String; // country full name (eg. Hong Kong SAR)
	regionName: String; // Asia / Africa / NA / ...
	timeZoneRegionName: String; // `${region}/${countryName}` (eg. Asia/Hong_Kong)
	weatherZone: String;
	localTime: String; // local time (eg. 2021-08-25T23:24:00.092)
	utcOffsetHours: Number; // UTC+? (eg. 8)
	latitude: Number;
	longitude: Number;
	elevationFeet: Number; // distance above sea level in feet
	classification: Number;
	active: Boolean; // weather the airport is operating
	weatherUrl: String; // an api link to fetch local weather
	delayIndexUrl: String; // an api link to fetch delay index
}

interface Flight {
	flightId: Number; // idk
	arrivalAirport: Airport;
}

export interface FlightStatuses {
	flightId: Number; // idk
	carrier: {
		fs: String;
		iata: String;
		icao: String;
		name: String;
		active: Boolean;
	};
	flightNumber: String; // numbers in the IATA code
	departureAirport: Airport;
	arrivalAirport: Airport;
	departureDate: Time;
	arrivalDate: Time;
	status: String; // S, A
	schedule: {
		flightType: String;
		serviceClasses: String;
		restrictions: String;
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
					fs: String;
					iata: String;
					icao: String;
					name: String;
					active: Boolean;
				};
				flightNumber: String;
				relationship: String;
		  }>
		| [];
	// need to add something
	delays: {
		departureGateDelayMinutes?: Number;
		departureRunwayDelayMinutes?: Number;
		arrivalGateDelayMinutes?: Number;
		arrivalRunwayDelayMinutes?: Number;
	};
	flightDurations: {
		scheduledBlockMinutes: Number;
		scheduledAirMinutes?: Number;
		scheduledTaxiOutMinutes?: Number;
		scheduledTaxiInMinutes?: Number;
		blockMinutes?: Number;
		airMinutes?: Number;
		taxiInMinutes?: Number;
		taxiOutMinutes?: Number;
	};
	airportResources: {
		departureTerminal?: String;
		departureGate?: String;
		arrivalTerminal?: String; // number string or "INTL"
		arrivalGate?: String;
		baggage?: String;
	};
	flightEquipment: {
		scheduledEquipment: {
			iata: String;
			name: String;
			turboProp: Boolean;
			jet: Boolean;
			widebody: Boolean;
			regional: Boolean;
		};
		actualEquipment?: {
			iata: String;
			name: String;
			turboProp: Boolean;
			jet: Boolean;
			widebody: Boolean;
			regional: Boolean;
		};
		tailNumber?: String;
	};
}

export interface SearchResult {
	request: Request;
	flightStatuses: Array<FlightStatuses> | [];
}
