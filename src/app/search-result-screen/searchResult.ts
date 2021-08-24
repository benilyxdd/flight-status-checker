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
		delay: null; // change later
		scheduled: String;
		estimated: String;
		actual: null; // change later
		estimated_runway: null; // change later
		actual_runway: null; // change later
	};
	arrival: {
		airport: String;
		timezone: String;
		iata: String;
		icao: String;
		terminal: String;
		gate: String;
		baggage: null; // change later
		delay: null; // change later
		scheduled: String;
		estimated: String;
		actual: null; // change later
		estimated_runway: null; // change later
		actual_runway: null; // change later
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
	aircraft: null; // change later
	live: null; // change later
}

export interface SearchResult {
	pagination: Pagination;
	data: Array<Data>;
}
