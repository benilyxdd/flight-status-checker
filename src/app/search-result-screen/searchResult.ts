interface Request {
	airline: {
		airline: {
			fs: String;
			iata: String;
			icao: String;
			name: String;
			active: Boolean;
		};
		requestedCode: String;
	};
	flight: {
		requested: String;
		interpreted: String;
	};
	utc: {
		interpreted: Boolean;
	};
	url: String;
	nonstopOnly: {
		interpreted: Boolean;
	};
	date: {
		year: String;
		month: String;
		day: String;
		interpreted: String;
	};
	extendedOptions: {
		requested: String;
		interpreted: String;
	};
}

export interface FlightStatuses {
	flightId: Number;
	carrier: {
		fs: String;
		iata: String;
		icao: String;
		name: String;
		active: Boolean;
	};
	flightNumber: String;
	departureAirport: {
		fs: String;
		iata: String;
		icao: String;
		faa: String;
		name: String;
		street1: String;
		street2: String;
		city: String;
		cityCode: String;
		countryCode: String;
		countryName: String;
		regionName: String;
		timeZoneRegionName: String;
		weatherZone: String;
		localTime: String;
		utcOffsetHours: Number;
		latitude: Number;
		longitude: Number;
		elevationFeet: Number;
		classification: Number;
		active: Boolean;
		weatherUrl: String;
		delayIndexUrl: String;
	};
	arrivalAirport: {
		fs: String;
		iata: String;
		icao: String;
		faa: String;
		name: String;
		city: String;
		cityCode: String;
		stateCode: String;
		countryCode: String;
		countryName: String;
		regionName: String;
		timeZoneRegionName: String;
		weatherZone: String;
		localTime: String;
		utcOffsetHours: Number;
		latitude: Number;
		longitude: Number;
		elevationFeet: Number;
		classification: Number;
		active: Boolean;
		weatherUrl: String;
		delayIndexUrl: String;
	};
	departureDate: {
		dateUtc: String;
		dateLocal: String;
	};
	arrivalDate: {
		dateUtc: String;
		dateLocal: String;
	};
	status: String;
	schedule: {
		flightType: String;
		serviceClasses: String;
		restrictions: String;
		uplines: Array<any>; // change later
		downlines: Array<any>; // change later
	};

	operationalTimes: {
		publishedDeparture: {
			dateUtc: String;
			dateLocal: String;
		};
		scheduledGateDeparture: {
			dateUtc: String;
			dateLocal: String;
		};
		estimatedGateDeparture: {
			dateUtc: String;
			dateLocal: String;
		};
		actualGateDeparture: {
			dateUtc: String;
			dateLocal: String;
		};
		estimatedRunwayDeparture: {
			dateUtc: String;
			dateLocal: String;
		};
		actualRunwayDeparture: {
			dateUtc: String;
			dateLocal: String;
		};
		publishedArrival: {
			dateUtc: String;
			dateLocal: String;
		};
		scheduledGateArrival: {
			dateUtc: String;
			dateLocal: String;
		};
		estimatedGateArrival: {
			dateUtc: String;
			dateLocal: String;
		};
		estimatedRunwayArrival: {
			dateUtc: String;
			dateLocal: String;
		};
	};
	codeshares: [
		{
			carrier: {
				fs: String;
				iata: String;
				icao: String;
				name: String;
				active: Boolean;
			};
			flightNumber: String;
			relationship: String;
		},
		{
			carrier: {
				fs: String;
				iata: String;
				icao: String;
				name: String;
				active: Boolean;
			};
			flightNumber: String;
			relationship: String;
		},
		{
			carrier: {
				fs: String;
				iata: String;
				icao: String;
				name: String;
				active: Boolean;
			};
			flightNumber: String;
			relationship: String;
		}
	];
	delays: {
		time: Number; // ???
	}; // need to add something
	flightDurations: {
		scheduledBlockMinutes: Number;
		taxiOutMinutes: Number;
	};
	airportResources: {
		departureTerminal: String;
		departureGate: String;
		arrivalTerminal: String;
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
		actualEquipment: {
			iata: String;
			name: String;
			turboProp: Boolean;
			jet: Boolean;
			widebody: Boolean;
			regional: Boolean;
		};
		tailNumber: String;
	};
}

export interface SearchResult {
	request: Request;
	flightStatuses: Array<FlightStatuses>;
}
