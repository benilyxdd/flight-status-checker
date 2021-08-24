interface Pagination {
	limit: number;
	offset: number;
	count: number;
	totla: number;
}

export interface Data {
	flight_date: string;
	flight_status: string;
	departure: {
		airport: String;
		timezone: String;
		iata: String;
		icao: String;
		terminal: String;
		gate: String;
		delay: Number | null; // eg. 23 -> delay 23 mins, null -> no delay
		scheduled: String | null;
		estimated: String | null;
		actual: String | null; // time
		estimated_runway: String | null; // time
		actual_runway: String | null; // time
	};
	arrival: {
		airport: String;
		timezone: String;
		iata: String;
		icao: String;
		terminal: String;
		gate: String;
		baggage: null; // change later
		delay: Number | null; // change later
		scheduled: String | null;
		estimated: String | null;
		actual: String | null; // time
		estimated_runway: String | null; // time
		actual_runway: String | null; // time
	};
	airline: {
		name: String;
		iata: String;
		icao: String;
	};
	flight: {
		number: String;
		iata: String;
		icao: String;
		codeshared: null; // change later
	};
	aircraft: null | {
		registration: String;
		iata: String;
		icao: String;
		icao24: String;
	};
	live: null; // change later
}

export interface SearchResult {
	pagination: Pagination;
	data: Array<Data>;
}
